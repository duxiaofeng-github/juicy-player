import { h, Component } from "preact";
import { css } from "emotion";
import { renderComponents } from "./utils/render";
import { connect } from "unistore/preact";
import { fontSizeDefault, styleAbsFull } from "./utils/style";
import { IPlugins, IPlayerStore, IProperties, IOptions } from "./interface";
import { Emitter } from "./utils/emitter";
import { fullScreenApiList } from "./utils";
import { setIsFullScreen, ISetIsFullScreen } from "./utils/actions";
import { InnerEventType } from "./utils/event";

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  plugins?: IPlugins;
  emitter?: Emitter;
  setIsFullScreen?: ISetIsFullScreen;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, plugins, emitter, properties } = state;

  return {
    options,
    plugins,
    emitter,
    properties,
  };
}

const actions = {
  setIsFullScreen,
};

class ContainerComponent extends Component<IProps> {
  pluginName = "Container";
  el: HTMLDivElement;
  fullscreenchangeName: string;
  fullscreenElementName: string;
  enterFullScreen: () => void;
  exitFullScreen: () => void;

  componentWillMount() {
    if (!this.props.options.controlFullScreen) {
      this.props.emitter.on(InnerEventType.InnerToggleFullScreen, this.handleToggleFullScreen);
    }
  }

  componentWillUnmount() {
    if (this.props.options.controlFullScreen) {
      this.props.emitter.off(InnerEventType.InnerToggleFullScreen, this.handleToggleFullScreen);
      document.removeEventListener(this.fullscreenchangeName, this.fullScreenChanged);
    }
  }

  setRef = (el: HTMLDivElement) => {
    for (let item of fullScreenApiList) {
      const requestFullscreen = item[0];
      const exitFullscreen = item[1];
      const fullscreenElement = item[2];
      const fullscreenchange = item[4];

      if (`on${fullscreenchange}` in document) {
        this.enterFullScreen = () => {
          el[requestFullscreen]();
        };

        this.exitFullScreen = () => {
          document[exitFullscreen]();
        };

        document.addEventListener(fullscreenchange, this.fullScreenChanged);

        this.fullscreenchangeName = fullscreenchange;
        this.fullscreenElementName = fullscreenElement;
        this.el = el;

        this.fullScreenChanged();

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

  handleToggleFullScreen = () => {
    if (this.enterFullScreen && this.exitFullScreen) {
      if (!this.props.properties.isFullScreen) {
        this.enterFullScreen();
      } else {
        this.exitFullScreen();
      }
    }
  };
}

export const Container = connect(
  mapStateToProps,
  actions
)(ContainerComponent);

const styleContainer = css`
  ${styleAbsFull};

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
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
