import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { IOptions, IPlayerStore, IProperties, IPlugin } from "../interface";
import { Emitter } from "../utils/emitter";
import { getComponents } from "../utils/render";

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  emitter?: Emitter;
  plugins?: IPlugin[];
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, properties, emitter, plugins } = state;

  return {
    options,
    properties,
    emitter,
    plugins,
  };
}

@connect(mapStateToProps)
class Player extends Component<IProps, IState> {
  pluginName = "Player";

  componentWillMount() {
    // TODO: init video state when sourceChange event received
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

    const currentQuality = currentList[properties.currentQualityIndex];
    if (!currentQuality) {
      return null;
    }

    const playerPlugins = getComponents(this.pluginName, this.props.plugins);

    for (let player of playerPlugins) {
      if (player.component && player.component.canPlay(currentQuality)) {
        return <player.component />;
      }
    }

    console.error(`can not play video: `, currentQuality);

    return null;
  }
}

export default {
  entry: "Container",
  component: Player,
};
