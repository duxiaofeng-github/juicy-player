import { h, Component } from "preact";

import * as playIcon from "../assets/play.svg";
import * as pauseIcon from "../assets/pause.svg";

import { IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { styleToolbarButtonIcon } from "../utils/style";
import { getToolBarButtonTemplate } from "../utils/render";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";
import { IS_TOUCHABLE_DEVICE } from "../utils";

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
class ToolBarPlayButton extends Component<IProps, IState> {
  pluginName = "ToolBarPlayButton";

  render() {
    const svg = (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (this.props.properties.playing ? pauseIcon : (playIcon as any)) as string }}
        onClick={this.toggle}
      />
    );

    return !IS_TOUCHABLE_DEVICE ? getToolBarButtonTemplate(svg) : null;
  }

  toggle = () => {
    if (this.props.properties.playing) {
      this.pause();
    } else {
      this.play();
    }
  };

  play() {
    this.props.emitter.emit(InnerEventType.InnerVideoPlay);
  }

  pause() {
    this.props.emitter.emit(InnerEventType.InnerVideoPause);
  }
}

const plugin: IPlugin = {
  entry: "ToolBar",
  component: ToolBarPlayButton,
};

export default plugin;
