import { h, Component } from "preact";
import { css } from "emotion";

import * as bigPlayButton from "../assets/big-play-button.svg";
import { IOptions, IPlayerStore, IProperties } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";
import { imagePlaceHolder } from "../utils/render";

interface IProps {
  options?: IOptions;
  videoState?: IProperties;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, emitter, properties: videoState } = state;

  return {
    options,
    emitter,
    videoState,
  };
}

@connect(mapStateToProps)
export class BigPlayButton extends Component<IProps, IState> {
  pluginName = "BigPlayButton";

  render() {
    return !this.props.videoState.playing ? (
      <div className={stylePlayButton} onClick={this.play}>
        {imagePlaceHolder}
        <div className={stylePlayButtonIcon} dangerouslySetInnerHTML={{ __html: (bigPlayButton as any) as string }} />
      </div>
    ) : null;
  }

  play = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPlay);

    e.stopPropagation();
  };
}

const stylePlayButton = css`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 25%;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const stylePlayButtonIcon = css`
  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
