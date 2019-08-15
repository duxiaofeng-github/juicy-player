import { h, Component } from "preact";
import { css, cx } from "emotion";

import { IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { parsePercent, IS_TOUCHABLE_DEVICE, secondToMMSS } from "../utils";
import {
  colorDefaultAlpha05,
  colorPrimaryLightenAlpha06,
  colorPrimaryAlpha04,
  colorPrimaryAlpha01,
} from "../utils/style";
import { Emitter } from "../utils/emitter";
import { InnerEventType, PlayerEventType } from "../utils/event";
import { ISetCurrentTime, setCurrentTime } from "../utils/actions";

interface IProps {
  properties?: IProperties;
  emitter?: Emitter;
  setCurrentTime?: ISetCurrentTime;
}

interface IState {
  isProgressBarHidden: boolean;
}

const actions = {
  setCurrentTime,
};

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter } = state;

  return {
    properties,
    emitter,
  };
}

class ToolBarProgressBar extends Component<IProps, IState> {
  pluginName = "ToolBarProgressBar";
  sliderEl: HTMLDivElement;
  mouseDown: boolean;
  rectCache: ClientRect | DOMRect;
  eventsMap = {
    [InnerEventType.InnerProgressBarShow]: () => {
      this.setState({
        isProgressBarHidden: false,
      });
    },
    [InnerEventType.InnerProgressBarHide]: () => {
      this.setState({
        isProgressBarHidden: true,
      });
    },
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      isProgressBarHidden: false,
    };
  }

  componentWillMount() {
    for (let event in this.eventsMap) {
      this.props.emitter.on(event as PlayerEventType, this.eventsMap[event]);
    }
  }

  componentWillUnmount() {
    for (let event in this.eventsMap) {
      this.props.emitter.off(event as PlayerEventType, this.eventsMap[event]);
    }
  }

  setSliderRef = (el: HTMLDivElement) => (this.sliderEl = el);

  render() {
    const { duration, currentTime } = this.props.properties;
    return (
      <div className={styleProgressBar}>
        {!this.state.isProgressBarHidden && (
          <div
            className={styleProgressBarBackground}
            onTouchStart={IS_TOUCHABLE_DEVICE && this.onTouchStart}
            onTouchMove={IS_TOUCHABLE_DEVICE && this.onTouchMove}
            onTouchEnd={IS_TOUCHABLE_DEVICE && this.onTouchEnd}
            onMouseDown={!IS_TOUCHABLE_DEVICE && this.onMouseDown}
            ref={this.setSliderRef}
          >
            {this.getBufferedComponent()}
            <div className={styleProgressBarFill} style={{ width: `${this.getCursorLeft()}%` }} />
            <div className={cx(styleTime, styleCurrentTime)}>{secondToMMSS(currentTime)}</div>
            <div className={cx(styleTime, styleDuration)}>{secondToMMSS(duration)}</div>
          </div>
        )}
      </div>
    );
  }

  getBufferedComponent() {
    const { buffered, duration } = this.props.properties;

    if (buffered == null) {
      return null;
    }

    let content = [];

    for (let i = 0; i < buffered.length; i++) {
      const start = buffered.start(i) / duration;
      const end = (duration - buffered.end(i)) / duration;
      const startPercent = parsePercent(start * 100);
      const endPercent = parsePercent(end * 100);

      content.push(
        <div
          className={styleProgressBarBuffered}
          style={{
            left: `${startPercent}%`,
            right: `${endPercent}%`,
          }}
        />
      );
    }

    return content;
  }

  getCursorLeft() {
    const { currentTime, duration } = this.props.properties;
    const percent = parsePercent((currentTime / duration) * 100);

    return percent;
  }

  onTouchStart = (e: TouchEvent) => {
    this.setCurrentTimeBasedOnPoint(e.targetTouches[0].pageX);
  };

  onTouchMove = (e: TouchEvent) => {
    this.setCurrentTimeBasedOnPoint(e.targetTouches[0].pageX);
  };

  onTouchEnd = (e: TouchEvent) => {
    this.applyCurrentTimeToVideo();
  };

  onMouseDown = (e: MouseEvent) => {
    this.mouseDown = true;
    this.setCurrentTimeBasedOnPoint(e.x);

    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);
  };

  onMouseMove = (e: MouseEvent) => {
    if (this.mouseDown) {
      this.setCurrentTimeBasedOnPoint(e.x);
    }
  };

  onMouseUp = (e: MouseEvent) => {
    if (this.mouseDown) {
      this.applyCurrentTimeToVideo();
      this.mouseDown = false;
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
    }
  };

  setCurrentTimeBasedOnPoint(x: number) {
    const { properties, emitter, setCurrentTime } = this.props;
    const { duration } = properties;

    if (!this.rectCache) {
      this.rectCache = this.sliderEl.getBoundingClientRect();
    }

    const length = x - this.rectCache.left;
    const rate = length / this.rectCache.width;
    let currentTime = rate * duration;

    if (currentTime < 0) {
      currentTime = 0;
    } else if (currentTime > duration) {
      currentTime = duration;
    }

    setCurrentTime(currentTime);
    emitter.emit(InnerEventType.InnerSeeking);
  }

  applyCurrentTimeToVideo() {
    const { emitter, properties } = this.props;
    this.rectCache = null;

    emitter.emit<number>(InnerEventType.InnerVideoSetCurrentTime, properties.currentTime);
    emitter.emit(InnerEventType.InnerSeeked);
  }
}

const component = connect(
  mapStateToProps,
  actions
)(ToolBarProgressBar);

export const toolBarProgressBarPlugin: IPlugin = {
  entry: "ToolBar",
  index: 0,
  component,
};

const styleProgressBar = css`
  flex-grow: 1;
`;

const styleProgressBarBackground = css`
  position: relative;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

const styleProgressBarBuffered = css`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: ${colorPrimaryAlpha01};
  pointer-events: none;
`;

const styleProgressBarFill = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: ${colorPrimaryAlpha04};
  border-right: solid 1px ${colorPrimaryLightenAlpha06};
  pointer-events: none;
`;

const styleTime = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${colorDefaultAlpha05};
`;

const styleCurrentTime = css`
  left: calc(0.8% + 5px);
`;

const styleDuration = css`
  right: calc(0.8% + 5px);
`;
