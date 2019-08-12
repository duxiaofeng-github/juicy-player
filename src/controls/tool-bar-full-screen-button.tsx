import { h, Component } from "preact";

import * as toolBarEnterFullScreenButton from "../assets/enter-full-screen-button.svg";
import * as toolBarExitFullScreenButton from "../assets/exit-full-screen-button.svg";

import { IPlayerStore } from "../interface";
import { connect } from "unistore/preact";
import { styleToolbarButtonIcon } from "../utils/style";
import { getToolBarButtonTemplate } from "../utils/render";
import { Emitter } from "../utils/emitter";
import { InnerEventType, PlayerEvent } from "../utils/event";

const fullScreenApiList = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror",
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror",
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror",
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror",
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError",
  ],
  [
    "webkitEnterFullscreen",
    "webkitExitFullscreen",
    "webkitDisplayingFullscreen",
    "webkitSupportsFullscreen",
    "webkitbeginfullscreen",
    "webkitfullscreenerror",
  ],
  [
    "webkitEnterFullScreen",
    "webkitExitFullScreen",
    "webkitDisplayingFullscreen",
    "webkitSupportsFullscreen",
    "webkitbeginfullscreen",
    "webkitfullscreenerror",
  ],
];

interface IProps {
  emitter?: Emitter;
}

interface IState {
  isFullScreen: boolean;
  isFullScreenEnabled: boolean;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { emitter } = state;

  return {
    emitter,
  };
}

@connect(mapStateToProps)
export class ToolBarFullScreenButton extends Component<IProps, IState> {
  pluginName = "ToolBarFullScreenButton";
  enterFullScreen: () => void;
  exitFullScreen: () => void;

  componentWillMount() {
    this.props.emitter.on<HTMLDivElement>(
      InnerEventType.InnerContainerMountedOrUnmounted,
      this.prepareFullScreenApiByContainer
    );
    this.props.emitter.on<HTMLVideoElement>(
      InnerEventType.InnerPlayerMountedOrUnmounted,
      this.prepareFullScreenApiByPlayer
    );
  }

  componentWillUnmount() {
    this.props.emitter.off(InnerEventType.InnerContainerMountedOrUnmounted, this.prepareFullScreenApiByContainer);
    this.props.emitter.off(InnerEventType.InnerPlayerMountedOrUnmounted, this.prepareFullScreenApiByPlayer);
  }

  render() {
    if (!this.state.isFullScreenEnabled) {
      return null;
    }

    const svg = !this.state.isFullScreen ? (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (toolBarEnterFullScreenButton as any) as string }}
        onClick={this.enter}
      />
    ) : (
      <div
        className={styleToolbarButtonIcon}
        dangerouslySetInnerHTML={{ __html: (toolBarExitFullScreenButton as any) as string }}
        onClick={this.exit}
      />
    );

    return getToolBarButtonTemplate(svg);
  }

  checkIsContainerFullScreenEnabled() {
    let isEnabled = false;

    for (let item of fullScreenApiList) {
      const fullscreenchange = item[4];

      if (`on${fullscreenchange}` in document) {
        isEnabled = true;
        break;
      }
    }

    return isEnabled;
  }

  prepareFullScreenApiByContainer = (e: PlayerEvent<HTMLDivElement>) => {
    const el = e.detail;

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

        document.addEventListener(fullscreenchange, (e) => {
          const currentFullScreenElement = document[fullscreenElement];

          if (currentFullScreenElement === el) {
            this.setState({
              isFullScreen: true,
            });
          } else {
            this.setState({
              isFullScreen: false,
            });
          }
        });

        this.setState({
          isFullScreenEnabled: true,
        });

        break;
      }
    }
  };

  prepareFullScreenApiByPlayer = (e: PlayerEvent<HTMLVideoElement>) => {
    if (this.checkIsContainerFullScreenEnabled()) {
      return;
    }

    const el = e.detail;

    for (let item of fullScreenApiList) {
      const requestFullscreen = item[0];
      const exitFullscreen = item[1];
      const fullscreenElement = item[2];

      if (requestFullscreen in el) {
        this.enterFullScreen = () => {
          el[requestFullscreen]();
        };

        this.exitFullScreen = () => {
          el[exitFullscreen]();
        };

        const fullScreenChanged = (e) => {
          const currentFullScreenElement = el[fullscreenElement];

          if (currentFullScreenElement === el) {
            this.setState({
              isFullScreen: true,
            });
          } else {
            this.setState({
              isFullScreen: false,
            });
          }
        };

        el.addEventListener("webkitbeginfullscreen", fullScreenChanged);
        el.addEventListener("webkitendfullscreen", fullScreenChanged);

        this.setState({
          isFullScreenEnabled: true,
        });

        break;
      }
    }
  };

  enter = () => {
    this.enterFullScreen();
  };

  exit = () => {
    this.exitFullScreen();
  };
}
