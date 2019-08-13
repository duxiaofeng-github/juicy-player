import { h, Component } from "preact";

import * as enterFullScreenIcon from "../assets/enter-full-screen.svg";
import * as exitFullScreenIcon from "../assets/exit-full-screen.svg";

import { IPlayerStore, IPlugin, IProperties, IMethods } from "../interface";
import { connect } from "unistore/preact";
import { styleToolbarButtonIcon } from "../utils/style";
import { getToolBarButtonTemplate } from "../utils/render";

interface IProps {
  properties?: IProperties;
  methods?: IMethods;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, methods } = state;

  return {
    properties,
    methods,
  };
}

@connect(mapStateToProps)
class ToolBarFullScreenButton extends Component<IProps, IState> {
  pluginName = "ToolBarFullScreenButton";

  render() {
    const { properties, methods } = this.props;
    if (!methods.enterFullScreen || !methods.exitFullScreen) {
      return null;
    }

    const svg = (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{
          __html: (!properties.isFullScreen ? enterFullScreenIcon : (exitFullScreenIcon as any)) as string,
        }}
        onClick={this.toggle}
      />
    );

    return getToolBarButtonTemplate(svg);
  }

  toggle = () => {
    const { properties, methods } = this.props;

    if (properties.isFullScreen) {
      methods.exitFullScreen();
    } else {
      methods.enterFullScreen();
    }
  };
}

const plugin: IPlugin = {
  entry: "ToolBar",
  component: ToolBarFullScreenButton,
};

export default plugin;
