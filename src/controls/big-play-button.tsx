import { h, Component } from "preact";
import { css } from "emotion";

import * as bigPlayIcon from "../assets/big-play.svg";
import { IOptions, IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";
import { ImagePlaceHolder } from "../utils/image-placeholder";

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, emitter, properties } = state;

  return {
    options,
    emitter,
    properties,
  };
}

@connect(mapStateToProps)
class BigPlayButton extends Component<IProps, IState> {
  pluginName = "BigPlayButton";

  render() {
    return !this.props.properties.playing ? (
      <div className={stylePlayButton} onClick={this.play}>
        <ImagePlaceHolder />
        <div className={stylePlayButtonIcon} dangerouslySetInnerHTML={{ __html: (bigPlayIcon as any) as string }} />
      </div>
    ) : null;
  }

  play = (e: Event) => {
    this.props.emitter.emit(InnerEventType.InnerVideoPlay);

    e.stopPropagation();
  };
}

const plugin: IPlugin = {
  entry: "Controls",
  component: BigPlayButton,
};

export default plugin;

const stylePlayButton = css`
  position: absolute;
  top: 50%;
  left: 50%;
  height: calc(15% + 25px);
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
