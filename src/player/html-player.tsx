import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { IOptions, IPlayerStore, IProperties, ISource } from "../interface";
import {
  setPlayState,
  setDuration,
  setCurrentTime,
  ISetDuration,
  ISetCurrentTime,
  ISetBuffered,
  ISetPlayState,
  setBuffered,
  ISetVolume,
  setVolume,
} from "../utils/video";
import { css } from "emotion";
import { Emitter } from "../utils/emitter";
import { InnerEventType, NativeEvent, PlayerEvent } from "../utils/event";

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  setPlayState?: ISetPlayState;
  setDuration?: ISetDuration;
  setCurrentTime?: ISetCurrentTime;
  setVolume?: ISetVolume;
  setBuffered?: ISetBuffered;
  emitter: Emitter;
}

interface IState {}

const actions = {
  setPlayState,
  setDuration,
  setCurrentTime,
  setVolume,
  setBuffered,
};

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, properties, emitter } = state;

  return {
    options,
    properties,
    emitter,
  };
}

class Player extends Component<IProps, IState> {
  pluginName = "HTMLPlayer";
  private el: HTMLVideoElement;
  seeking: boolean;

  componentWillMount() {
    const { emitter } = this.props;
    emitter.on(InnerEventType.InnerVideoPlay, this.play);
    emitter.on(InnerEventType.InnerVideoPause, this.pause);
    emitter.on(InnerEventType.InnerVideoToggle, this.toggle);
    emitter.on<number>(InnerEventType.InnerVideoSetCurrentTime, this.setNativeElementTime);
    emitter.on<number>(InnerEventType.InnerVideoSetVolume, this.setNativeElementVolume);
    emitter.on(InnerEventType.InnerSeeking, this.handleSeeking);
    emitter.on(InnerEventType.InnerSeeked, this.handleSeeked);
  }

  componentDidMount() {
    const { emitter } = this.props;

    emitter.emit(InnerEventType.InnerProgressBarShow);
    emitter.emit(InnerEventType.InnerPlayerMountedOrUnmounted, this.el);
  }

  componentWillUnmount() {
    if (this.el) {
      this.unbindEvents(this.el);
    }

    const { emitter } = this.props;

    emitter.off(InnerEventType.InnerVideoPlay, this.play);
    emitter.off(InnerEventType.InnerVideoPause, this.pause);
    emitter.off(InnerEventType.InnerVideoToggle, this.toggle);
    emitter.off(InnerEventType.InnerVideoSetCurrentTime, this.setNativeElementTime);
    emitter.off(InnerEventType.InnerVideoSetVolume, this.setNativeElementVolume);
    emitter.off(InnerEventType.InnerSeeking, this.handleSeeking);
    emitter.off(InnerEventType.InnerSeeked, this.handleSeeked);

    emitter.emit(InnerEventType.InnerPlayerMountedOrUnmounted, null);
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

    this.setVolume();

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
        if (!this.seeking) {
          this.setCurrentTime();
        }
        break;
      case NativeEvent.Volumechange:
        this.setVolume();
        break;
      case NativeEvent.Canplay:
      case NativeEvent.Progress:
        this.props.setBuffered(this.el.buffered);
        break;
      case NativeEvent.Pause:
      case NativeEvent.Ended:
        this.props.setPlayState(false);
        break;
      case NativeEvent.Playing:
        this.props.setPlayState(true);
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
    const { options, properties } = this.props;
    const currentQuality = options.playList[properties.currentListIndex][properties.currentQualityIndex];

    return "src" in currentQuality ? currentQuality.src : URL.createObjectURL(currentQuality);
  }

  play = () => {
    if (this.el) {
      this.props.setPlayState(true);

      this.el.play();
    }
  };

  pause = () => {
    if (this.el) {
      this.props.setPlayState(false);

      this.el.pause();
    }
  };

  toggle = () => {
    if (this.props.properties.playing) {
      this.pause();
    } else {
      this.play();
    }
  };

  setNativeElementTime = (e: PlayerEvent<number>) => {
    if (this.el) {
      this.el.currentTime = e.detail;

      this.props.setCurrentTime(e.detail);
    }
  };

  setNativeElementVolume = (e: PlayerEvent<number>) => {
    if (this.el) {
      this.el.volume = e.detail;

      this.props.setVolume(e.detail);
    }
  };

  setCurrentTime() {
    this.props.setCurrentTime(this.el.currentTime);
  }

  setVolume() {
    this.props.setVolume(this.el.volume);
  }

  handleSeeking = () => {
    this.seeking = true;
  };

  handleSeeked = () => {
    this.seeking = false;
  };
}

const HTMLPlayer = connect(
  mapStateToProps,
  actions
)(Player);

HTMLPlayer.__proto__.canPlay = (source: ISource) => {
  if ("src" in source) {
    if (document.createElement("video").canPlayType(source.mimetype)) {
      return true;
    }
  } else if (source instanceof MediaSource) {
    return true;
  }

  return false;
};

export default {
  entry: "Player",
  component: HTMLPlayer,
};

const styleVideo = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
