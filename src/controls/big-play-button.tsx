import { h, Component } from "preact";
import { css } from "emotion";

import * as bigPlayIcon from "../assets/big-play.svg";
import { IOptions, IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";
import { ImagePlaceHolder } from "../utils/image-placeholder";
import { styleSvg } from "../utils/style";

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

class BigPlayButton extends Component<IProps, IState> {
  pluginName = "BigPlayButton";

  render() {
    const { playing } = this.props.properties;

    return !playing ? (
      <div className={stylePlayButton} onClick={this.play}>
        <ImagePlaceHolder />
        <div className={styleSvg} dangerouslySetInnerHTML={{ __html: (bigPlayIcon as any) as string }} />
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
  height: calc(15% + 25px);
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const component = connect(mapStateToProps)(BigPlayButton);

export const bigPlayButtonPlugin: IPlugin = {
  entry: "Controls",
  index: 2,
  component,
};
