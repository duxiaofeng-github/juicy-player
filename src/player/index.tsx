import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { IOptions, IPlayerStore, IProperties, IPlugins, IPlugin } from "../interface";
import { Emitter } from "../utils/emitter";
import { getPlugins } from "../utils/render";
import { InnerEventType, PlayerEvent, IInnerSetSourceData } from "../utils/event";

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  emitter?: Emitter;
  plugins?: IPlugins;
  setSource?: (listIndex: number, videoIndex: number) => void;
}

interface IState {}

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

@connect(
  mapStateToProps,
  actions
)
class Player extends Component<IProps, IState> {
  pluginName = "Player";

  componentWillMount() {
    this.props.emitter.on<IInnerSetSourceData>(InnerEventType.InnerVideoSetSource, this.handleSettingSource);
  }

  componentWillUnmount() {
    this.props.emitter.off(InnerEventType.InnerVideoSetSource, this.handleSettingSource);
  }

  render() {
    return this.getPlayer();
  }

  getPlayer() {
    const { options, properties } = this.props;
    const playList = options.playList;

    if (!playList) {
      return null;
    }

    const currentList = playList[properties.currentListIndex];
    if (!currentList) {
      return null;
    }

    const currentVideo = currentList[properties.currentVideoIndex];
    if (!currentVideo) {
      return null;
    }

    const playerPlugins = getPlugins(this.pluginName, this.props.plugins);

    for (let player of playerPlugins) {
      if (player.component && player.component.canPlay(currentVideo)) {
        return <player.component />;
      }
    }

    console.error(`can not play video: `, currentVideo);

    return null;
  }

  handleSettingSource = (e: PlayerEvent<IInnerSetSourceData>) => {
    const { setSource } = this.props;

    setSource(e.detail.listIndex, e.detail.videoIndex);
  };
}

const plugin: IPlugin = {
  entry: "Container",
  index: 0,
  component: Player,
};

export default plugin;
