import { h, Component } from "preact";
import { css } from "emotion";

import { IPlayerStore, IProperties } from "../interface";
import { connect } from "unistore/preact";
import { parsePercent, IS_TOUCHABLE_DEVICE } from "../utils";
import { colorPrimary } from "../utils/style";
import { Emitter } from "../utils/emitter";
import { InnerEventType, PlayerEventType } from "../utils/event";
import { ISetCurrentTime, setCurrentTime } from "../utils/video";

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

@connect(
  mapStateToProps,
  actions
)
export class ToolBarProgressBar extends Component<IProps, IState> {
  pluginName = "ToolBarProgressBar";
  sliderEl: HTMLDivElement;
  cursorEl: HTMLDivElement;
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
  setCursorRef = (el: HTMLDivElement) => (this.cursorEl = el);

  render() {
    return (
      <div className={styleProgressBar}>
        {!this.state.isProgressBarHidden && (
          <div
            className={styleProgressBarContent}
            onTouchStart={IS_TOUCHABLE_DEVICE && this.onTouchStart}
            onTouchMove={IS_TOUCHABLE_DEVICE && this.onTouchMove}
            onTouchEnd={IS_TOUCHABLE_DEVICE && this.onTouchEnd}
            onMouseDown={!IS_TOUCHABLE_DEVICE && this.onMouseDown}
          >
            <div className={styleProgressBarBackground} ref={this.setSliderRef}>
              {this.getBufferedComponent()}
              <div className={styleProgressBarFill} style={{ width: `${this.getCursorLeft()}%` }} />
              <div
                className={styleProgressBarCursor}
                style={{ left: `${this.getCursorLeft()}%` }}
                ref={this.setCursorRef}
              />
            </div>
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
    if (e.target === this.sliderEl || e.target === this.cursorEl) {
      this.mouseDown = true;
      this.setCurrentTimeBasedOnPoint(e.x);

      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
    }
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

const styleProgressBar = css`
  flex-grow: 1;
  padding: 0 13px;
`;

const styleProgressBarContent = css`
  position: relative;
  height: 100%;
`;

const styleProgressBarBackground = css`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 8%;
  max-height: 10px;
  background-color: rgba(200, 200, 200, 0.5);
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateY(-50%);
`;

const styleProgressBarBuffered = css`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
`;

const styleProgressBarFill = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: ${colorPrimary};
  pointer-events: none;
`;

const styleProgressBarCursor = css`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
`;
