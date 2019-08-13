import { h, Component } from "preact";
import { css } from "emotion";
import { renderComponents } from "./utils/render";
import { connect } from "unistore/preact";
import { fontSizeDefault } from "./utils/style";
import { IPlugins, IPlayerStore } from "./interface";
import { Emitter } from "./utils/emitter";
import { fullScreenApiList } from "./utils";
import { setFullScreenMethods, ISetFullScreenMethods, setIsFullScreen, ISetIsFullScreen } from "./utils/actions";

interface IProps {
  plugins?: IPlugins;
  emitter?: Emitter;
  setFullScreenMethods?: ISetFullScreenMethods;
  setIsFullScreen?: ISetIsFullScreen;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { plugins, emitter } = state;

  return {
    plugins,
    emitter,
  };
}

const actions = {
  setFullScreenMethods,
  setIsFullScreen,
};

@connect(
  mapStateToProps,
  actions
)
export class Container extends Component<IProps> {
  pluginName = "Container";
  el: HTMLDivElement;
  fullscreenchangeName: string;
  fullscreenElementName: string;

  componentWillUnmount() {
    this.props.setFullScreenMethods(null, null);
    document.removeEventListener(this.fullscreenchangeName, this.fullScreenChanged);
  }

  setRef = (el: HTMLDivElement) => {
    for (let item of fullScreenApiList) {
      const requestFullscreen = item[0];
      const exitFullscreen = item[1];
      const fullscreenElement = item[2];
      const fullscreenchange = item[4];

      if (`on${fullscreenchange}` in document) {
        const enterFullScreen = () => {
          el[requestFullscreen]();
        };

        const exitFullScreen = () => {
          document[exitFullscreen]();
        };

        document.addEventListener(fullscreenchange, this.fullScreenChanged);

        this.fullscreenchangeName = fullscreenchange;
        this.fullscreenElementName = fullscreenElement;
        this.el = el;

        this.props.setFullScreenMethods(enterFullScreen, exitFullScreen);

        break;
      }
    }
  };

  fullScreenChanged = () => {
    const currentFullScreenElement = document[this.fullscreenElementName];

    this.props.setIsFullScreen(currentFullScreenElement === this.el);
  };

  render() {
    return (
      <div className={styleContainer} ref={this.setRef}>
        {renderComponents(this.pluginName, this.props.plugins)}
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
