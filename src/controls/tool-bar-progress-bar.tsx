import { h, Component } from "preact";
import { css } from "emotion";

import { IPlayerStore, IVideoState } from "../interface";
import { connect } from "unistore/preact";
import { parsePercent, IS_TOUCHABLE_DEVICE, parseRate, getMouseX } from "../utils";
import { colorPrimary } from "../utils/style";
import { Emitter } from "../utils/emitter";
import { InnerEventType, NativeEvent, PlayerEventType } from "../utils/event";

interface IProps {
  videoState?: IVideoState;
  emitter?: Emitter;
}

interface IState {
  cursorLeft: number;
  mouseOrigin: number;
  cursorOrigin: number;
  isMouseDown: boolean;
  seeking: boolean;
  isProgressBarHidden: boolean;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { videoState, emitter } = state;

  return {
    videoState,
    emitter,
  };
}

@connect(mapStateToProps)
export class ToolBarProgressBar extends Component<IProps, IState> {
  pluginName = "ToolBarProgressBar";
  sliderEl: HTMLDivElement;
  cursorEl: HTMLDivElement;
  seekingTimer: number;
  eventsMap = {
    [NativeEvent.Seeking]: () => {
      this.setState({
        seeking: true,
      });
    },
    [NativeEvent.Seeked]: () => {
      clearTimeout(this.seekingTimer);

      this.setState({ seeking: false });
    },
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
      cursorLeft: 0,
      mouseOrigin: 0,
      cursorOrigin: 0,
      isMouseDown: false,
      seeking: false,
      isProgressBarHidden: false,
    };
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount() {
    this.unbindEvents();
  }

  bindEvents() {
    for (let event in this.eventsMap) {
      this.props.emitter.on(event as PlayerEventType, this.eventsMap[event]);
    }
  }

  unbindEvents() {
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
            onMouseMove={!IS_TOUCHABLE_DEVICE && this.onMouseMove}
            onMouseUp={!IS_TOUCHABLE_DEVICE && this.onMouseUp}
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
    const { buffered, duration } = this.props.videoState;

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
    const { seeking, cursorLeft } = this.state;

    if (seeking) {
      return cursorLeft;
    } else {
      const { currentTime, duration } = this.props.videoState;
      const percent = parsePercent((currentTime / duration) * 100);

      return percent;
    }
  }

  onTouchStart = (e: TouchEvent) => {
    this.handleSliderDown(e);
    this.handleCursorDown(e);
  };

  onTouchMove = (e: TouchEvent) => {
    this.handleCursorMove(e);
  };

  onTouchEnd = (e: TouchEvent) => {
    this.handleCursorUp(e);
  };

  onMouseDown = (e: MouseEvent) => {
    if (e.target === this.cursorEl) {
      this.handleCursorDown(e);
    } else if (e.target === this.sliderEl) {
      this.handleSliderDown(e);
    }
  };

  onMouseMove = (e: MouseEvent) => {
    this.handleCursorMove(e);
  };

  onMouseUp = (e: MouseEvent) => {
    this.handleCursorUp(e);
  };

  handleSliderDown(e: MouseEvent | TouchEvent) {
    let offsetX: number;

    if (e instanceof MouseEvent) {
      offsetX = (e as MouseEvent).offsetX;
    } else {
      const elRect = this.sliderEl.getBoundingClientRect();
      offsetX = (e as TouchEvent).targetTouches[0].pageX - elRect.left;
    }

    const rate = offsetX / this.sliderEl.getBoundingClientRect().width;

    this.resetCursor(rate);

    console.log("handleSliderDown", rate);

    this.resetCurrentTime(rate);
  }

  handleCursorDown(e: MouseEvent | TouchEvent) {
    this.setState({
      mouseOrigin: getMouseX(e),
      cursorOrigin: this.cursorEl.offsetLeft,
      isMouseDown: true,
    });

    this.props.emitter.emit<number>(InnerEventType.InnerProgressBarSeeking);

    this.setState({
      seeking: true,
    });
  }

  handleCursorMove(e: TouchEvent | MouseEvent) {
    if (this.state.isMouseDown) {
      const mouseX = getMouseX(e);
      const rate = this.caclulateOffsetX(mouseX);
      this.resetCursor(rate);
    }
  }

  handleCursorUp(e: TouchEvent | MouseEvent) {
    if (this.state.isMouseDown) {
      const mouseX = getMouseX(e);
      const rate = this.caclulateOffsetX(mouseX);

      console.log("handleCursorUp", rate);

      this.resetCurrentTime(rate);

      this.setState({
        isMouseDown: false,
        seeking: false,
      });
    }
  }

  resetCurrentTime(rateUnparsed: number) {
    const rate = parseRate(rateUnparsed);

    const time = this.props.videoState.duration * rate;

    console.log("resetCurrentTime", time);

    this.props.emitter.emit<number>(InnerEventType.InnerVideoSetCurrentTime, time);
    this.props.emitter.emit<number>(InnerEventType.InnerProgressBarSeeked);
  }

  resetCursor(rate: number) {
    const percent = parsePercent(rate * 100);

    this.setState({
      cursorLeft: percent,
    });
  }

  caclulateOffsetX(eventX: number): number {
    const progressBarWidth = this.sliderEl.getBoundingClientRect().width;
    let offsetX = eventX - this.state.mouseOrigin;

    offsetX += this.state.cursorOrigin;

    console.log(
      "progressBarWidth",
      progressBarWidth,
      "eventX",
      eventX,
      "mouseOrigin",
      this.state.mouseOrigin,
      "cursorOrigin",
      this.state.cursorOrigin,
      "offsetX",
      offsetX,
      "offsetX / progressBarWidth",
      offsetX / progressBarWidth
    );

    if (offsetX < 0) offsetX = 0;

    if (offsetX > progressBarWidth) offsetX = progressBarWidth;

    return offsetX / progressBarWidth;
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
