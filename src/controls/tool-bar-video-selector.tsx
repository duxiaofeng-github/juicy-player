import { h, Component } from "preact";

import { IPlayerStore, IProperties, IOptions, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { ILang, printf } from "../i18n";
import { cx, css } from "emotion";
import { styleToolBarText, colorPrimary } from "../utils/style";
import { IS_TOUCHABLE_DEVICE } from "../utils";

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
    } else if (typeof currentVideo.title === "string") {
      currentText = currentVideo.title;
    } else {
      currentText = printf(lang.SourceN, currentVideoIndex);
    }

    const listComponent = list.map((video, index) => {
      const text = typeof video.title === "string" ? video.title : printf(lang.SourceN, index);

      return <div className={cx("item", currentVideoIndex === index && "selected")}>{text}</div>;
    });

    const popup = (
      <div className={cx(stylePopup, IS_TOUCHABLE_DEVICE && "mobile", this.state.isShown && "shown")}>
        {[...listComponent].reverse()}
      </div>
    );

    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={cx(styleToolBarText, styleText, IS_TOUCHABLE_DEVICE && "mobile")}
      >
        {currentVideo ? currentText : printf(lang.UnknownSource)}
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
}

const styleText = css`
  position: relative;

  &.mobile {
    position: static;
  }
`;

const stylePopup = css`
  position: absolute;
  left: 50%;
  bottom: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(100%) translateX(-50%);
  transition: transform 0s 0.4s, opacity 0.4s ease-out;

  &.shown {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
    transition: transform 0.2s, opacity 0.4s ease-out;
  }

  .item {
    white-space: nowrap;
    padding: 10px;
    text-align: center;

    &.selected {
      background-color: ${colorPrimary};
    }
  }

  &.mobile {
    height: calc(97% - 25px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .item {
      padding: 10px;
    }
  }
`;

const plugin: IPlugin = {
  entry: "ToolBar",
  component: ToolBarVideoSelector,
};

export default plugin;
