import { h, Component } from "preact";

import * as toolBarPlayButton from "../assets/play-button.svg";
import * as toolBarPauseButton from "../assets/pause-button.svg";

import { IPlayerStore, IProperties } from "../interface";
import { connect } from "unistore/preact";
import { styleToolbarButtonIcon } from "../utils/style";
import { getToolBarButtonTemplate } from "../utils/render";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";
import { IS_TOUCHABLE_DEVICE } from "../utils";

interface IProps {
  videoState?: IProperties;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties: videoState, emitter } = state;

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

    return !IS_TOUCHABLE_DEVICE ? getToolBarButtonTemplate(svg) : null;
  }

  play = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPlay);
  };

  pause = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPause);
  };
}
