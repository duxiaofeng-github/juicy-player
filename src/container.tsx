import { h, Component } from "preact";
import { css } from "emotion";
import { renderPlugins } from "./utils/render";
import { connect } from "unistore/preact";
import { fontSizeDefault } from "./utils/style";
import { IPlugin, IPlayerStore } from "./interface";
import { Emitter } from "./utils/emitter";
import { InnerEventType } from "./utils/event";

interface IProps {
  plugins?: IPlugin[];
  emitter?: Emitter;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { plugins, emitter } = state;

  return {
    plugins,
    emitter,
  };
}

@connect(mapStateToProps)
export class Container extends Component<IProps> {
  pluginName = "Container";
  el: HTMLDivElement;

  componentDidMount() {
    this.props.emitter.emit<HTMLDivElement>(InnerEventType.InnerContainerMountedOrUnmounted, this.el);
  }

  componentWillUnmount() {
    this.props.emitter.emit<HTMLDivElement>(InnerEventType.InnerContainerMountedOrUnmounted, null);
  }

  setRef = (el: HTMLDivElement) => (this.el = el);

  render() {
    return (
      <div className={styleContainer} ref={this.setRef}>
        {renderPlugins(this.pluginName, this.props.plugins)}
      </div>
    );
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
  font-size: ${fontSizeDefault};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
  user-select: none;

  * {
    box-sizing: content-box;
    margin: 0;
  }
`;
