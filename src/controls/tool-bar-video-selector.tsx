import { h, Component } from "preact";

import { IPlayerStore, IProperties, IOptions, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { ILang, printf } from "../i18n";
import { cx, css } from "emotion";
import { styleToolBarText, colorPrimary, styleToolBarTextContainer } from "../utils/style";
import { IS_TOUCHABLE_DEVICE } from "../utils";
import { IInnerSetSourceData, InnerEventType, NativeEvent } from "../utils/event";

interface IProps {
  options?: IOptions;
  lang?: ILang;
  properties?: IProperties;
  emitter?: Emitter;
}

interface IState {
  isShown?: boolean;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter, options, lang } = state;

  return {
    options,
    properties,
    emitter,
    lang,
  };
}

@connect(mapStateToProps)
class ToolBarVideoSelector extends Component<IProps, IState> {
  pluginName = "ToolBarVideoSelector";
  timer;

  render() {
    const { options, lang, properties } = this.props;
    const { currentListIndex, currentVideoIndex } = properties;
    const list = options.playList[currentListIndex];

    if (!list || list.length <= 1) {
      return null;
    }

    const currentVideo = list && list[currentVideoIndex];
    let currentText: string;
    if (!currentVideo) {
      currentText = lang.UnknownSource;
    } else if (typeof currentVideo.name === "string") {
      currentText = currentVideo.name;
    } else {
      currentText = printf(lang.SourceN, currentVideoIndex);
    }

    const popup = (
      <div className={cx(!IS_TOUCHABLE_DEVICE ? stylePopup : stylePopupMobile, this.state.isShown && "shown")}>
        {list.map((video, index) => {
          const text = typeof video.name === "string" ? video.name : printf(lang.SourceN, index);

          return (
            <div
              className={cx("item", currentVideoIndex === index && "selected")}
              onClick={(e) => {
                this.onPopupItemClick(e, index);
              }}
            >
              {text}
            </div>
          );
        })}
      </div>
    );

    return (
      <div
        onMouseEnter={!IS_TOUCHABLE_DEVICE && this.onMouseEnter}
        onMouseLeave={!IS_TOUCHABLE_DEVICE && this.onMouseLeave}
        onClick={IS_TOUCHABLE_DEVICE && this.onTouchClick}
        className={cx(styleToolBarTextContainer, !IS_TOUCHABLE_DEVICE && styleContainer)}
      >
        <div className={styleToolBarText}>{currentVideo ? currentText : printf(lang.UnknownSource)}</div>
        {popup}
      </div>
    );
  }

  onMouseEnter = () => {
    clearTimeout(this.timer);

    this.setState({
      isShown: true,
    });
  };

  onMouseLeave = () => {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.setState({
        isShown: false,
      });
    }, 200);
  };

  onPopupItemClick(e: Event, videoIndex: number) {
    const { options, emitter, properties } = this.props;
    const currentCache = properties.currentTime;
    const playingCache = properties.playing;

    e.stopPropagation();

    emitter.emit<IInnerSetSourceData>(InnerEventType.InnerVideoSetSource, {
      listIndex: properties.currentListIndex,
      videoIndex,
    });

    emitter.once(NativeEvent.Loadedmetadata, () => {
      if (!options.playFromStart) {
        emitter.emit<number>(InnerEventType.InnerVideoSetCurrentTime, currentCache);
      }

      if (playingCache) {
        emitter.emit(InnerEventType.InnerVideoPlay);
      }
    });

    this.setState({
      isShown: false,
    });

    emitter.emit(InnerEventType.InnerToolBarHide);
  }

  onTouchClick = () => {
    this.setState({
      isShown: true,
    });

    const documentListener = () => {
      this.setState({
        isShown: false,
      });

      document.removeEventListener("click", documentListener);
    };

    document.addEventListener("click", documentListener);
  };
}

const styleContainer = css`
  position: relative;
`;

const styleItem = css`
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;

  &.selected {
    background-color: ${colorPrimary};
  }
`;

const stylePopup = css`
  position: absolute;
  left: 50%;
  bottom: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(100%) translateX(-50%);
  transition: none;
  display: flex;
  flex-direction: column-reverse;
  max-height: calc((100% - 25px) * 20);
  overflow: scroll;

  &.shown {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
    transition: transform 0.2s, opacity 0.4s ease-out;
  }

  .item {
    padding: 10px;
    max-width: 9em;
    ${styleItem};

    &:hover {
      color: ${colorPrimary};

      &.selected {
        color: inherit;
      }
    }
  }
`;

const stylePopupMobile = css`
  position: absolute;
  left: auto;
  right: 0;
  bottom: 100%;
  transform: translateX(100%);
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  height: calc((100% - 25px) * 33.33 - 100%);
  overflow: scroll;
  opacity: 0;
  transition: none;
  background-color: rgba(0, 0, 0, 0.5);

  &.shown {
    opacity: 1;
    transform: translateX(0);
    transition: transform 0s, opacity 0.2s ease-out;
  }

  .item {
    padding: 20px;
    width: 6em;
    ${styleItem};
  }
`;

const plugin: IPlugin = {
  entry: "ToolBar",
  component: ToolBarVideoSelector,
};

export default plugin;
