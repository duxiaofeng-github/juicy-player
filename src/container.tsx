import { h, Component } from "preact";
import { css } from "emotion";
import { renderPlugins, mapPluginsToProps, IPluginsProps } from "./utils/render";
import { connect } from "unistore/preact";
import JuicyPlayer from ".";

@connect(mapPluginsToProps)
export class Container extends Component<IPluginsProps> {
  pluginName = "Container";

  render() {
    return <div className={styleContainer}>{renderPlugins(this.pluginName, this.props.plugins)}</div>;
  }
}

const styleContainer = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #000;
  font-family: "PingFang SC", Arial, "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
  user-select: none;

  * {
    box-sizing: content-box;
    padding: 0;
    margin: 0;
  }
`;
