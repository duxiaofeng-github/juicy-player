import { h, Component } from "preact";

import { IPlayerStore, IPlugin, IProperties, IOptions } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { InnerEventType, PlayerEvent } from "../utils/event";
import { css, cx } from "emotion";
import { setCurrentTime, ISetCurrentTime } from "../utils/actions";
import { saveBrightnessToLocalData, secondToMMSS, parsePercent } from "../utils";
import { colorDefault, styleAbsFull } from "../utils/style";
import { ILang, printf } from "../i18n";

interface IProps {
  properties?: IProperties;
  emitter?: Emitter;
  lang?: ILang;
  setCurrentTime?: ISetCurrentTime;
}

enum ProcessType {
  None,
  Progress,
  Volume,
  Brightness,
}

interface IState {
  processType: ProcessType;
}

const actions = {
  setCurrentTime,
};

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter, lang } = state;

  return {
    properties,
    emitter,
    lang,
  };
}

class MobileActions extends Component<IProps, IState> {
  pluginName = "MobileActions";
  el: HTMLDivElement;
  rectCache: ClientRect | DOMRect;
  touchStartTime = 0;
  touchStartX = 0;
  touchPrevX = 0;
  touchPrevY = 0;
  touchStartY = 0;
  slowSwipeTimeStep = 0.1;
  fastSwipeTimeStep = 10;
  volumeStep = 0.01;
  brightnessStep = 0.01;
  fastSwipeTimer;
  fastSwipeCount = 0;
  fastSwipeIncrease: boolean = null;
  fastSwipeCountTimer;
  needApplyCurrentTime?: boolean;

  constructor(props: IProps) {
    super(props);

    this.state = {
      processType: ProcessType.None,
    };
  }

  setRef = (el: HTMLDivElement) => (this.el = el);

  render() {
    return (
      <div
        className={styleAbsFull}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        ref={this.setRef}
      >
        {<div className={cx(styleTips, this.state.processType !== ProcessType.None && "shown")}>{this.getTips()}</div>}
      </div>
    );
  }

  getTips() {
    const { lang, properties } = this.props;
    const { duration, currentTime, volume, brightness } = properties;

    switch (this.state.processType) {
      case ProcessType.Progress:
        return printf(lang.Progress, secondToMMSS(currentTime), secondToMMSS(duration));
      case ProcessType.Volume:
        return printf(lang.Volume, parsePercent(volume * 100));
      case ProcessType.Brightness:
        return printf(lang.Brightness, parsePercent(brightness * 100));
    }

    return null;
  }

  onTouchStart = (e: TouchEvent) => {
    this.touchStartX = e.targetTouches[0].pageX;
    this.touchPrevX = this.touchStartX;
    this.touchPrevY = this.touchStartY;
    this.touchStartY = e.targetTouches[0].pageY;
    this.touchStartTime = e.timeStamp;

    this.rectCache = this.el.getBoundingClientRect();
  };

  onTouchMove = (e: TouchEvent) => {
    const touchStartX = e.targetTouches[0].pageX;
    const touchStartY = e.targetTouches[0].pageY;
    const touchStartTime = e.timeStamp;

    this.processSwipe(touchStartX, touchStartY, touchStartTime);

    this.touchPrevX = touchStartX;
    this.touchPrevY = touchStartY;

    e.preventDefault();
  };

  onTouchEnd = (e: TouchEvent) => {
    if (this.needApplyCurrentTime) {
      this.applyCurrentTimeToVideo();
      this.needApplyCurrentTime = false;
    }

    this.setProcessType(ProcessType.None);
  };

  processSwipe(x: number, y: number, timeStamp: number) {
    const isHorizontalIncrease = x - this.touchPrevX > 0;
    const isVerticalIncrease = y - this.touchPrevY < 0;
    const horizontalLength = Math.abs(x - this.touchStartX);
    const verticalLength = Math.abs(y - this.touchStartY);

    if (this.isHorizontalSwipe(horizontalLength, verticalLength)) {
      this.processProgress(isHorizontalIncrease, timeStamp);
      this.setProcessType(ProcessType.Progress);
    } else if (this.isVerticalSwipe(horizontalLength, verticalLength)) {
      if (this.isLeftSwipe(x)) {
        this.processBrightness(isVerticalIncrease);
        this.setProcessType(ProcessType.Brightness);
      } else {
        this.processVolume(isVerticalIncrease);
        this.setProcessType(ProcessType.Volume);
      }
    }
  }

  isHorizontalSwipe(horizontalLength: number, verticalLength: number) {
    if (this.state.processType === ProcessType.None) {
      return horizontalLength / 5 > verticalLength;
    } else if (this.state.processType === ProcessType.Progress) {
      return true;
    }

    return false;
  }

  isVerticalSwipe(horizontalLength: number, verticalLength: number) {
    return verticalLength / 5 > horizontalLength;
  }

  isLeftSwipe(x: number) {
    return x - this.rectCache.left < this.rectCache.width / 2;
  }

  isFastSwipe(timeStamp: number) {
    return timeStamp - this.touchStartTime < 200;
  }

  isSlowSwipe(timeStamp: number) {
    return timeStamp - this.touchStartTime > 200;
  }

  processVolume(isIncrease: boolean) {
    const offset = this.volumeStep;
    const newVolume = this.getNewVolumeOrBrightness(isIncrease, true, offset);

    this.props.emitter.emit<number>(InnerEventType.InnerVideoSetVolume, newVolume);
  }

  processBrightness(isIncrease: boolean) {
    const offset = this.brightnessStep;
    const newBrightness = this.getNewVolumeOrBrightness(isIncrease, false, offset);

    this.props.emitter.emit<number>(InnerEventType.InnerVideoSetBrightness, newBrightness);
  }

  processProgress(isIncrease: boolean, timeStamp: number) {
    if (this.isFastSwipe(timeStamp)) {
      clearTimeout(this.fastSwipeTimer);

      this.fastSwipeTimer = setTimeout(() => {
        const fastSwipeCount = this.getFastSwipeCount(isIncrease);
        const offsetTime = this.fastSwipeTimeStep * fastSwipeCount;
        const newCurrentTime = this.getNewCurrentTime(isIncrease, offsetTime);

        this.setCurrentTime(newCurrentTime);
      }, 200);
    } else if (this.isSlowSwipe(timeStamp)) {
      clearTimeout(this.fastSwipeTimer);

      const offsetTime = this.slowSwipeTimeStep;
      const newCurrentTime = this.getNewCurrentTime(isIncrease, offsetTime);
      this.fastSwipeCount = 0;

      this.setCurrentTime(newCurrentTime);
    }
  }

  getNewCurrentTime(isIncrease: boolean, offsetTime: number) {
    const { properties } = this.props;

    if (isIncrease) {
      if (properties.currentTime + offsetTime > properties.duration) {
        return properties.duration;
      } else {
        return properties.currentTime + offsetTime;
      }
    } else {
      if (properties.currentTime - offsetTime < 0) {
        return 0;
      } else {
        return properties.currentTime - offsetTime;
      }
    }
  }

  getNewVolumeOrBrightness(isIncrease: boolean, isVolume: boolean, offsetValue: number) {
    const { properties } = this.props;
    const value = isVolume ? properties.volume : properties.brightness;

    if (isIncrease) {
      if (value + offsetValue > 1) {
        return 1;
      } else {
        return value + offsetValue;
      }
    } else {
      if (value - offsetValue < 0) {
        return 0;
      } else {
        return value - offsetValue;
      }
    }
  }

  setCurrentTime(time: number) {
    const { emitter, setCurrentTime } = this.props;

    setCurrentTime(time);

    this.needApplyCurrentTime = true;

    emitter.emit(InnerEventType.InnerSeeking);
  }

  getFastSwipeCount = (isIncrease: boolean) => {
    if (this.fastSwipeIncrease !== isIncrease) {
      this.fastSwipeCount = 0;
      this.fastSwipeIncrease = isIncrease;
    }

    this.fastSwipeCount += 1;

    clearTimeout(this.fastSwipeCountTimer);

    this.fastSwipeCountTimer = setTimeout(() => {
      this.fastSwipeCount = 0;
      this.fastSwipeIncrease = null;
      clearTimeout(this.fastSwipeCountTimer);
    }, 3000);

    return this.fastSwipeCount;
  };

  applyCurrentTimeToVideo() {
    const { emitter, properties } = this.props;

    emitter.emit<number>(InnerEventType.InnerVideoSetCurrentTime, properties.currentTime);
    emitter.emit(InnerEventType.InnerSeeked);
  }

  setProcessType(type: ProcessType) {
    if (this.state.processType !== type) {
      this.setState({
        processType: type,
      });
    }
  }
}

const mobileActionsComponent = connect(
  mapStateToProps,
  actions
)(MobileActions);

const styleTips = css`
  position: absolute;
  pointer-events: none;
  left: 50%;
  top: 10%;
  padding: 20px;
  border-radius: 3px;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: ${colorDefault};
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.4s ease-in;

  &.shown {
    opacity: 1;
    transition: opacity 0.4s ease-out;
  }
`;

interface IBrightnessProps {
  options?: IOptions;
  properties?: IProperties;
  emitter?: Emitter;
  setBrightness?: (brightness: number) => void;
}

interface IBrightnessState {}

const brightnessActions = {
  setBrightness(state: IPlayerStore, brightness: number): Partial<IPlayerStore> {
    return {
      properties: {
        ...state.properties,
        brightness,
      },
    };
  },
};

function mapStateToBrightnessProps(state: IPlayerStore, props): IBrightnessProps {
  const { options, properties, emitter } = state;

  return {
    options,
    properties,
    emitter,
  };
}

class Brightness extends Component<IBrightnessProps, IBrightnessState> {
  pluginName = "Brightness";

  componentWillMount() {
    if (!this.props.options.controlBrightness) {
      this.props.emitter.on<number>(InnerEventType.InnerVideoSetBrightness, this.handleBrightness);
    }
  }

  componentWillUnmount() {
    if (!this.props.options.controlBrightness) {
      this.props.emitter.on(InnerEventType.InnerToolBarShown, this.handleBrightness);
    }
  }

  render() {
    const alpha = (1 - this.props.properties.brightness) * 0.5;

    return <div className={styleAbsFull} style={{ backgroundColor: `rgba(0,0,0,${alpha})` }} />;
  }

  handleBrightness = (e: PlayerEvent<number>) => {
    if (!this.props.options.controlBrightness) {
      saveBrightnessToLocalData(e.detail);
    }

    this.props.setBrightness(e.detail);
  };
}

const brightnessComponent = connect(
  mapStateToBrightnessProps,
  brightnessActions
)(Brightness);

export const mobileActionsPlugin: IPlugin = [
  {
    entry: "Controls",
    index: 1,
    component: mobileActionsComponent,
  },
  {
    entry: "Container",
    index: 1,
    component: brightnessComponent,
  },
];
