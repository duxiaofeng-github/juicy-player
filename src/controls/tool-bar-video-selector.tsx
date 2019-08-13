import { h, Component } from "preact";

import { IPlayerStore, IProperties, IOptions, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { getToolBarTextTemplate } from "../utils/render";
import { ILang, printf } from "../i18n";

interface IProps {
  options?: IOptions;
  lang?: ILang;
  properties?: IProperties;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter, options, lang } = state;

  return {
    options,
    properties,
    emitter,
    lang,
  };
}

@connect(mapStateToProps)
class ToolBarVideoSelector extends Component<IProps, IState> {
  pluginName = "ToolBarVideoSelector";

  render() {
    const { options, lang, properties } = this.props;
    const { currentListIndex, currentVideoIndex } = properties;
    const list = options.playList[currentListIndex];
    const video = list && list[currentVideoIndex];
    const text = "quality" in video ? video.quality : printf(lang.SourceN, currentVideoIndex);

    return video ? getToolBarTextTemplate(text) : printf(lang.UnknownSource);
  }
}

const plugin: IPlugin = [
  {
    entry: "ToolBar",
    component: ToolBarVideoSelector,
  },
];

export default plugin;
