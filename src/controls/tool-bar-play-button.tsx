import { h, Component } from "preact";

import * as playIcon from "../assets/play.svg";
import * as pauseIcon from "../assets/pause.svg";

import { IPlayerStore, IProperties } from "../interface";
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
export class ToolBarPlayButton extends Component<IProps, IState> {
  pluginName = "ToolBarPlayButton";

  render() {
    const svg = this.props.properties.playing ? (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (pauseIcon as any) as string }}
        onClick={this.pause}
      />
    ) : (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (playIcon as any) as string }}
        onClick={this.play}
      />
    );

    return !IS_TOUCHABLE_DEVICE ? getToolBarButtonTemplate(svg) : null;
  }

  play = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPlay);
  };

  pause = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPause);
  };
}
