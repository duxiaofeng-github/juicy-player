import { h, Component } from "preact";

import { IPlayerStore, IProperties } from "../interface";
import { connect } from "unistore/preact";
import { getToolBarTextTemplate } from "../utils/render";
import { secondToMMSS } from "../utils";
import { css } from "emotion";

interface IProps {
  videoState?: IProperties;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties: videoState } = state;

  return {
    videoState,
  };
}

@connect(mapStateToProps)
export class ToolBarDuration extends Component<IProps, IState> {
  pluginName = "ToolBarDuration";

  render() {
    return getToolBarTextTemplate(secondToMMSS(this.props.videoState.duration), styleDuration);
  }
}

const styleDuration = css`
  padding-left: 0;
`;
