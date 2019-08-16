import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { IOptions, IPlayerStore, IProperties, IPlugins, IPlugin } from "../interface";
import { Emitter } from "../utils/emitter";
import { getPlugins } from "../utils/render";
import {
  InnerEventType,
  PlayerEvent,
  IInnerSetSourceData,
  NativeEvent,
  ICustomSourceChangeData,
  CustomEventType,
} from "../utils/event";
import { ISetVideoError, setVideoError } from "../utils/actions";
import { MediaError } from "../utils";

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  emitter?: Emitter;
  plugins?: IPlugins;
  setSource?: (listIndex: number, videoIndex: number) => void;
  setVideoError?: ISetVideoError;
}

interface IState {
  resetTime: number;
}

const actions = {
  setSource: (state: IPlayerStore, listIndex: number, videoIndex: number): Partial<IPlayerStore> => {
    return {
      properties: {
        ...state.properties,
        currentListIndex: listIndex,
        currentVideoIndex: videoIndex,
      },
    };
  },
  setVideoError,
};

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, properties, emitter, plugins } = state;

  return {
    options,
    properties,
    emitter,
    plugins,
  };
}

class Player extends Component<IProps, IState> {
  pluginName = "Player";

  constructor(props) {
    super(props);

    this.state = {
      resetTime: 0,
    };
  }

  componentDidMount() {
    const { properties } = this.props;

    this.checkCanPlay(properties.currentListIndex, properties.currentVideoIndex);
  }

  componentWillMount() {
    const { emitter } = this.props;

    emitter.on<IInnerSetSourceData>(InnerEventType.InnerVideoSetSource, this.handleSettingSource);
    emitter.on(CustomEventType.RetryPlaying, this.handleRetryPlaying);
  }

  componentWillUnmount() {
    const { emitter } = this.props;

    emitter.off(InnerEventType.InnerVideoSetSource, this.handleSettingSource);
    emitter.off(CustomEventType.RetryPlaying, this.handleRetryPlaying);
  }

  componentDidUpdate(prevProps: IProps) {
    const { properties, emitter, options } = this.props;
    const { currentListIndex, currentVideoIndex } = properties;
    const prevProperties = prevProps.properties;

    if (prevProperties.currentListIndex != currentListIndex || prevProperties.currentVideoIndex != currentVideoIndex) {
      emitter.emit<ICustomSourceChangeData>(CustomEventType.SourceChange, {
        from: prevProps.options.playList[prevProperties.currentListIndex][prevProperties.currentVideoIndex],
        fromListIndex: prevProperties.currentListIndex,
        fromVideoIndex: prevProperties.currentListIndex,
        to: options.playList[currentListIndex][currentVideoIndex],
        toListIndex: currentListIndex,
        toVideoIndex: currentVideoIndex,
      });
    }
  }

  render() {
    return this.getPlayer();
  }

  getSource(listIndex: number, videoIndex: number) {
    const { options } = this.props;
    const playList = options.playList;

    if (!playList) {
      return null;
    }

    const currentList = playList[listIndex];
    if (!currentList) {
      return null;
    }

    const currentVideo = currentList[videoIndex];
    if (!currentVideo) {
      return null;
    }

    return currentVideo;
  }

  canPlay(listIndex: number, videoIndex: number) {
    const src = this.getSource(listIndex, videoIndex);

    if (src == null) {
      return false;
    }

    const playerPlugins = getPlugins(this.pluginName, this.props.plugins);

    for (let player of playerPlugins) {
      if (player.component && player.component.canPlay(src)) {
        return true;
      }
    }

    return false;
  }

  getPlayer() {
    const { properties } = this.props;
    const { currentListIndex, currentVideoIndex } = properties;
    const src = this.getSource(currentListIndex, currentVideoIndex);

    if (src == null) {
      return null;
    }

    const playerPlugins = getPlugins(this.pluginName, this.props.plugins);

    for (let player of playerPlugins) {
      if (player.component && player.component.canPlay(src)) {
        return <player.component key={`${this.state.resetTime}-${currentListIndex}-${currentVideoIndex}`} />;
      }
    }

    return null;
  }

  checkCanPlay(listIndex: number, videoIndex: number) {
    if (this.canPlay(listIndex, videoIndex)) {
      return;
    }

    const { emitter, setVideoError } = this.props;
    const err = new MediaError(MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED);

    emitter.emit<MediaError>(NativeEvent.Error, err);

    setVideoError(err);

    console.error(`can not play video: `, this.getSource(listIndex, videoIndex));
  }

  handleSettingSource = (e: PlayerEvent<IInnerSetSourceData>) => {
    const { setSource } = this.props;
    const { listIndex, videoIndex } = e.detail;

    setSource(e.detail.listIndex, e.detail.videoIndex);

    this.checkCanPlay(listIndex, videoIndex);
  };

  handleRetryPlaying = () => {
    this.setState({
      resetTime: this.state.resetTime + 1,
    });
  };
}

const component = connect(
  mapStateToProps,
  actions
)(Player);

export const playerPlugin: IPlugin = {
  entry: "Container",
  index: 0,
  component,
};
