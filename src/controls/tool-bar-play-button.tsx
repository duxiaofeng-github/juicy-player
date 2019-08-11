import { h, Component } from "preact";

import * as toolBarPlayButton from "../assets/tool-bar-play-button.svg";
import * as toolBarPauseButton from "../assets/tool-bar-pause-button.svg";

import { IPlayerStore, IVideoState } from "../interface";
import { connect } from "unistore/preact";
import { styleToolbarButtonIcon } from "../utils/style";
import { getToolBarButtonTemplate } from "../utils/render";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";

interface IProps {
  videoState?: IVideoState;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { videoState, emitter } = state;

  return {
    videoState,
    emitter,
  };
}

@connect(mapStateToProps)
export class ToolBarPlayButton extends Component<IProps, IState> {
  pluginName = "ToolBarPlayButton";

  render() {
    const svg = this.props.videoState.playing ? (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (toolBarPauseButton as any) as string }}
        onClick={this.pause}
      />
    ) : (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (toolBarPlayButton as any) as string }}
        onClick={this.play}
      />
    );

    return getToolBarButtonTemplate(svg);
  }

  play = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPlay);
  };

  pause = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPause);
  };
}
