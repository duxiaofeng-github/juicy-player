import { h, Component } from "preact";

import * as playIcon from "../assets/play.svg";
import * as pauseIcon from "../assets/pause.svg";

import { IPlayerStore, IProperties, IPlugin } from "../interface";
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

class ToolBarPlayButton extends Component<IProps, IState> {
  pluginName = "ToolBarPlayButton";

  render() {
    const svg = (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: ((this.props.properties.playing ? pauseIcon : playIcon) as any) as string }}
        onClick={this.toggle}
      />
    );

    return getToolBarButtonTemplate(svg);
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

const component = connect(mapStateToProps)(ToolBarPlayButton);

export const toolBarPlayButtonPlugin: IPlugin = {
  entry: "ToolBar",
  index: 0,
  component,
};
