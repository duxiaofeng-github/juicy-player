import { h, Component } from "preact";

import * as enterFullScreenIcon from "../assets/enter-full-screen.svg";
import * as exitFullScreenIcon from "../assets/exit-full-screen.svg";

import { IPlayerStore, IPlugin, IProperties } from "../interface";
import { connect } from "unistore/preact";
import { styleToolbarButtonIcon } from "../utils/style";
import { getToolBarButtonTemplate } from "../utils/render";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";

interface IProps {
  properties?: IProperties;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter } = state;

  return {
    properties,
    emitter,
  };
}

@connect(mapStateToProps)
class ToolBarFullScreenButton extends Component<IProps, IState> {
  pluginName = "ToolBarFullScreenButton";

  render() {
    const { properties } = this.props;
    if (properties.isFullScreen == null) {
      return null;
    }

    const svg = (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{
          __html: ((properties.isFullScreen === false ? enterFullScreenIcon : exitFullScreenIcon) as any) as string,
        }}
        onClick={this.toggle}
      />
    );

    return getToolBarButtonTemplate(svg);
  }

  toggle = () => {
    this.props.emitter.emit(InnerEventType.InnerToggleFullScreen);
  };
}

const plugin: IPlugin = {
  entry: "ToolBar",
  component: ToolBarFullScreenButton,
};

export default plugin;
