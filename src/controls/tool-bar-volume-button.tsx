import { h, Component } from "preact";
import { css } from "emotion";

import { IPlayerStore, IProperties } from "../interface";
import { connect } from "unistore/preact";
import { parsePercent, IS_TOUCHABLE_DEVICE } from "../utils";
import { colorPrimary, styleToolbarButtonIcon } from "../utils/style";
import { Emitter } from "../utils/emitter";
import { InnerEventType, PlayerEventType } from "../utils/event";
import { ISetCurrentTime, setCurrentTime } from "../utils/video";

interface IProps {
  videoState?: IProperties;
  emitter?: Emitter;
  setCurrentTime?: ISetCurrentTime;
}

interface IState {}

const actions = {
  setCurrentTime,
};

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties: videoState, emitter } = state;

  return {
    videoState,
    emitter,
  };
}

@connect(
  mapStateToProps,
  actions
)
export class ToolBarVolumeButton extends Component<IProps, IState> {
  pluginName = "ToolBarVolumeButton";
  sliderEl: HTMLDivElement;
  cursorEl: HTMLDivElement;
  mouseDown: boolean;
  rectCache: ClientRect | DOMRect;

  setSliderRef = (el: HTMLDivElement) => (this.sliderEl = el);
  setCursorRef = (el: HTMLDivElement) => (this.cursorEl = el);

  render() {
    return (
      <div className={styleProgressBar}>
        <div
          className={styleProgressBarContent}
          onTouchStart={IS_TOUCHABLE_DEVICE && this.onTouchStart}
          onTouchMove={IS_TOUCHABLE_DEVICE && this.onTouchMove}
          onTouchEnd={IS_TOUCHABLE_DEVICE && this.onTouchEnd}
          onMouseDown={!IS_TOUCHABLE_DEVICE && this.onMouseDown}
        >
          <div className={styleProgressBarBackground} ref={this.setSliderRef}>
            <div className={styleProgressBarFill} style={{ width: `${this.getCursorLeft()}%` }} />
            <div
              className={styleProgressBarCursor}
              style={{ left: `${this.getCursorLeft()}%` }}
              ref={this.setCursorRef}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const svg = this.props.videoState.playing ? (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (toolBarPauseButton as any) as string }}
        onClick={this.muted}
      />
    ) : (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (toolBarPlayButton as any) as string }}
        onClick={this.unmuted}
      />
    );

    return !IS_TOUCHABLE_DEVICE ? getToolBarButtonTemplate(svg) : null;
  }

  getCursorLeft() {
    const { currentTime, duration } = this.props.videoState;
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
    const { videoState, emitter, setCurrentTime } = this.props;
    const { duration } = videoState;

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
    const { emitter, videoState } = this.props;
    this.rectCache = null;

    emitter.emit<number>(InnerEventType.InnerVideoSetCurrentTime, videoState.currentTime);
    emitter.emit(InnerEventType.InnerSeeked);
  }

  muted = () => {};

  unmuted = () => {};
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
