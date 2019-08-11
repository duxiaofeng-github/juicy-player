import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { IOptions, IPlayerStore, IVideoState, ISource } from "../interface";
import {
  setPlayState,
  setDuration,
  setCurrentTime,
  ISetDuration,
  ISetCurrentTime,
  setVideoInited,
  ISetVideoInited,
  ISetBuffered,
  ISetPlayState,
  setBuffered,
} from "../utils/video";
import { css } from "emotion";
import { Emitter } from "../utils/emitter";
import { InnerEventType, NativeEvent, PlayerEvent } from "../utils/event";
import throttle from "lodash/throttle";

interface IProps {
  options?: IOptions;
  videoState?: IVideoState;
  setPlayState?: ISetPlayState;
  setDuration?: ISetDuration;
  setCurrentTime?: ISetCurrentTime;
  setVideoInited?: ISetVideoInited;
  setBuffered?: ISetBuffered;
  emitter: Emitter;
}

interface IState {}

const actions = {
  setPlayState,
  setDuration,
  setCurrentTime,
  setVideoInited,
  setBuffered,
};

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, videoState, emitter } = state;

  return {
    options,
    videoState,
    emitter,
  };
}

class Player extends Component<IProps, IState> {
  pluginName = "HTMLPlayer";
  private el: HTMLVideoElement;

  componentDidMount() {
    const { emitter } = this.props;
    emitter.on(InnerEventType.InnerVideoPlay, () => this.play());
    emitter.on(InnerEventType.InnerVideoPause, () => this.pause());
    emitter.on(InnerEventType.InnerVideoToggle, () => this.toggle());
    emitter.on<number>(InnerEventType.InnerVideoSetCurrentTime, (e) => this.setNativeElementTime(e));

    this.setCurrentTime = throttle(this.setCurrentTime, 1000);
    emitter.emit(InnerEventType.InnerProgressBarShow);
  }

  componentWillUnmount() {
    if (this.el) {
      this.unbindEvents(this.el);
    }
  }

  render() {
    const { playsinline, autoplay, preload, loop, muted } = this.props.options;

    return (
      <video
        className={styleVideo}
        ref={this.createRef}
        src={this.getSrc()}
        autoPlay={autoplay}
        preload={preload}
        loop={loop}
        muted={muted}
        webkit-playsinline={playsinline}
        playsInline={playsinline}
      />
    );
  }

  createRef = (el: HTMLVideoElement) => {
    this.el = el;

    this.props.setVideoInited();

    this.bindEvents(el);
  };

  handleEvent = (e: Event) => {
    let hasEvt = false;

    for (let key in NativeEvent) {
      if (NativeEvent[key] === e.type) {
        hasEvt = true;
        break;
      }
    }

    if (hasEvt) {
      this.props.emitter.emit(e.type as NativeEvent, e);
    }

    switch (e.type) {
      case NativeEvent.Loadedmetadata:
      case NativeEvent.Durationchange:
        this.props.setDuration(this.el.duration);
        break;
      case NativeEvent.Timeupdate:
        this.setCurrentTime();
        break;
      case NativeEvent.Canplay:
      case NativeEvent.Progress:
        this.props.setBuffered(this.el.buffered);
        break;
    }
  };

  bindEvents(el: HTMLVideoElement) {
    for (let key in NativeEvent) {
      el.addEventListener(NativeEvent[key], this.handleEvent);
    }
  }

  unbindEvents(el: HTMLVideoElement) {
    for (let key in NativeEvent) {
      el.removeEventListener(NativeEvent[key], this.handleEvent);
    }
  }

  getSrc() {
    const { options, videoState } = this.props;
    const currentQuality = options.playList[videoState.currentListIndex][videoState.currentQualityIndex];

    return "src" in currentQuality ? currentQuality.src : URL.createObjectURL(currentQuality);
  }

  play() {
    if (this.el) {
      this.props.setPlayState(true);

      this.el.play();
    }
  }

  pause() {
    if (this.el) {
      this.props.setPlayState(false);

      this.el.pause();
    }
  }

  toggle() {
    if (this.props.videoState.playing) {
      this.pause();
    } else {
      this.play();
    }
  }

  setNativeElementTime(e: PlayerEvent<number>) {
    if (this.el) {
      console.log("video current time set", e.detail);
      this.el.currentTime = e.detail;

      this.props.setCurrentTime(e.detail);
    }
  }

  setCurrentTime = () => {
    this.props.setCurrentTime(this.el.currentTime);
  };
}

const playerWrapper = connect(
  mapStateToProps,
  actions
)(Player);

playerWrapper.__proto__.canPlay = (source: ISource) => {
  if ("src" in source) {
    if (document.createElement("video").canPlayType(source.mimetype)) {
      return true;
    }
  } else if (source instanceof MediaSource) {
    return true;
  }

  return false;
};

export const HTMLPlayer = playerWrapper;

const styleVideo = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
