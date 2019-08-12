import { h, Component } from "preact";

import { IPlayerStore, IProperties } from "../interface";
import { connect } from "unistore/preact";
import { getToolBarTextTemplate } from "../utils/render";
import { secondToMMSS } from "../utils";
import { css } from "emotion";

interface IProps {
  properties?: IProperties;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties } = state;

  return {
    properties,
  };
}

@connect(mapStateToProps)
export class ToolBarCurrentTime extends Component<IProps, IState> {
  pluginName = "ToolBarCurrentTime";

  render() {
    return getToolBarTextTemplate(secondToMMSS(this.props.properties.currentTime), styleCurrentTime);
  }
}

const styleCurrentTime = css`
  padding-right: 0;
`;
