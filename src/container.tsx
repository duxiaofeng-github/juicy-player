import { h, Component } from "preact";
import { css } from "emotion";
import { renderComponents } from "./utils/render";
import { connect } from "unistore/preact";
import { fontSizeDefault } from "./utils/style";
import { IPlugins, IPlayerStore, IProperties } from "./interface";
import { Emitter } from "./utils/emitter";
import { fullScreenApiList } from "./utils";
import { setIsFullScreen, ISetIsFullScreen } from "./utils/actions";
import { InnerEventType } from "./utils/event";

interface IProps {
  properties?: IProperties;
  plugins?: IPlugins;
  emitter?: Emitter;
  setIsFullScreen?: ISetIsFullScreen;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { plugins, emitter, properties } = state;

  return {
    plugins,
    emitter,
    properties,
  };
}

const actions = {
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
  enterFullScreen: () => void;
  exitFullScreen: () => void;

  componentWillMount() {
    this.props.emitter.on(InnerEventType.InnerToggleFullScreen, this.handleChangeFullScreen);
  }

  componentWillUnmount() {
    this.props.emitter.off(InnerEventType.InnerToggleFullScreen, this.handleChangeFullScreen);

    document.removeEventListener(this.fullscreenchangeName, this.fullScreenChanged);
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

  handleChangeFullScreen = () => {
    if (this.enterFullScreen && this.exitFullScreen) {
      if (!this.props.properties.isFullScreen) {
        this.enterFullScreen();
      } else {
        this.exitFullScreen();
      }
    }
  };
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
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
