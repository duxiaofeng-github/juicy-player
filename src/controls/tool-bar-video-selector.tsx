import { h, Component } from "preact";

import { IPlayerStore, IProperties, IOptions } from "../interface";
import { connect } from "unistore/preact";
import { IS_TOUCHABLE_DEVICE } from "../utils";
import { Emitter } from "../utils/emitter";
import { getToolBarTextTemplate } from "../utils/render";
import { I18n, I18nKey } from "../i18n";

interface IProps {
  options?: IOptions;
  i18n?: I18n;
  properties?: IProperties;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter, options, i18n } = state;

  return {
    options,
    properties,
    emitter,
    i18n,
  };
}

@connect(mapStateToProps)
class ToolBarVideoSelector extends Component<IProps, IState> {
  pluginName = "ToolBarVideoSelector";

  render() {
    const { options, i18n, properties } = this.props;
    const { currentListIndex, currentVideoIndex } = properties;
    const list = options.playList[currentListIndex];
    const video = list && list[currentVideoIndex];
    const text = "quality" in video ? video.quality : i18n.translate(I18nKey.SourceN, currentVideoIndex);

    return video ? getToolBarTextTemplate(text) : i18n.translate(I18nKey.UnknownSource);
  }
}

export default [
  {
    entry: "ToolBar",
    component: ToolBarVideoSelector,
  },
];
