import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { IOptions, IPlayerStore, IProperties, ISource, IPlugin } from "../interface";
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
  setIsFullScreen,
  ISetIsFullScreen,
} from "../utils/actions";
import { css } from "emotion";
import { Emitter } from "../utils/emitter";
import { InnerEventType, NativeEvent, PlayerEvent } from "../utils/event";
import { IS_DOCUMENT_SUPPORT_FULLSCREEN, fullScreenApiList, saveVolumnToLocalData } from "../utils";

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  setPlayState?: ISetPlayState;
  setDuration?: ISetDuration;
  setCurrentTime?: ISetCurrentTime;
  setVolume?: ISetVolume;
  setBuffered?: ISetBuffered;
  setIsFullScreen?: ISetIsFullScreen;
  emitter: Emitter;
}

interface IState {}

const actions = {
  setPlayState,
  setDuration,
  setCurrentTime,
  setVolume,
  setBuffered,
  setIsFullScreen,
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
  enterFullScreen: () => void;
  exitFullScreen: () => void;

  componentWillMount() {
    const { emitter } = this.props;

    emitter.on(InnerEventType.InnerVideoPlay, this.play);
    emitter.on(InnerEventType.InnerVideoPause, this.pause);
    emitter.on(InnerEventType.InnerVideoToggle, this.toggle);
    emitter.on(InnerEventType.InnerSeeking, this.handleSeeking);
    emitter.on(InnerEventType.InnerSeeked, this.handleSeeked);
    emitter.on<number>(InnerEventType.InnerVideoSetCurrentTime, this.handleNativeElementTime);

    if (!this.props.options.controlVolume) {
      emitter.on<number>(InnerEventType.InnerVideoSetVolume, this.handleNativeElementVolume);
    }

    if (!this.props.options.controlFullScreen) {
      emitter.on(InnerEventType.InnerToggleFullScreen, this.handleFullScreen);
    }
  }

  componentWillUnmount() {
    if (this.el) {
      this.unbindEvents(this.el);
    }

    const { emitter } = this.props;

    emitter.off(InnerEventType.InnerVideoPlay, this.play);
    emitter.off(InnerEventType.InnerVideoPause, this.pause);
    emitter.off(InnerEventType.InnerVideoToggle, this.toggle);
    emitter.off(InnerEventType.InnerVideoSetCurrentTime, this.handleNativeElementTime);
    emitter.off(InnerEventType.InnerSeeking, this.handleSeeking);
    emitter.off(InnerEventType.InnerSeeked, this.handleSeeked);

    if (!this.props.options.controlVolume) {
      emitter.off(InnerEventType.InnerVideoSetVolume, this.handleNativeElementVolume);
    }

    if (!this.props.options.controlFullScreen) {
      emitter.off(InnerEventType.InnerToggleFullScreen, this.handleFullScreen);
    }
  }

  render() {
    const { playsinline, autoplay, preload = "metadata", loop, muted } = this.props.options;

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
        controls={false}
      />
    );
  }

  createRef = (el: HTMLVideoElement) => {
    this.el = el;

    this.init();
  };

  init() {
    this.setNativeElementVolume(this.props.properties.volume);

    this.setFullScreenMethods();

    this.props.setBuffered(null);

    this.bindEvents(this.el);
  }

  setFullScreenMethods() {
    if (IS_DOCUMENT_SUPPORT_FULLSCREEN) {
      return;
    }

    for (let item of fullScreenApiList) {
      const requestFullscreen = item[0];
      const exitFullscreen = item[1];
      const fullscreenElement = item[2];

      if (requestFullscreen in this.el) {
        const { setIsFullScreen } = this.props;

        this.enterFullScreen = () => {
          this.el[requestFullscreen]();
        };

        this.exitFullScreen = () => {
          this.el[exitFullscreen]();
        };

        const fullScreenChanged = () => {
          const currentFullScreenElement = this.el[fullscreenElement];

          setIsFullScreen(currentFullScreenElement === this.el);
        };

        this.el.addEventListener("webkitbeginfullscreen", fullScreenChanged);
        this.el.addEventListener("webkitendfullscreen", fullScreenChanged);

        fullScreenChanged();

        break;
      }
    }
  }

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
    const currentVideo = options.playList[properties.currentListIndex][properties.currentVideoIndex];

    return typeof currentVideo.src === "string" ? currentVideo.src : URL.createObjectURL(currentVideo.src);
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

  handleNativeElementTime = (e: PlayerEvent<number>) => {
    this.setNativeElementTime(e.detail);
  };

  setNativeElementTime(time: number) {
    if (this.el) {
      this.el.currentTime = time;

      this.props.setCurrentTime(time);
    }
  }

  handleNativeElementVolume = (e: PlayerEvent<number>) => {
    this.setNativeElementVolume(e.detail);
  };

  setNativeElementVolume(volume: number) {
    if (this.el) {
      this.el.volume = volume;

      if (!this.props.options.controlVolume) {
        saveVolumnToLocalData(volume);
      }

      this.props.setVolume(volume);
    }
  }

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

  handleFullScreen = () => {
    if (this.enterFullScreen && this.exitFullScreen) {
      if (!this.props.properties.isFullScreen) {
        this.enterFullScreen();
      } else {
        this.exitFullScreen();
      }
    }
  };
}

const HTMLPlayer = connect(
  mapStateToProps,
  actions
)(Player);

HTMLPlayer.__proto__.canPlay = (source: ISource) => {
  if (typeof source.src === "string") {
    if (document.createElement("video").canPlayType(source.mimetype)) {
      return true;
    }
  } else if (source.src instanceof MediaSource) {
    return true;
  }

  return false;
};

const plugin: IPlugin = {
  entry: "Player",
  index: 0,
  component: HTMLPlayer,
};

export default plugin;

const styleVideo = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
