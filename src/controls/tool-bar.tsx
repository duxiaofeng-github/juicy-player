import { h, Component } from "preact";
import { css, cx } from "emotion";

import { IOptions, IPlayerStore, IPlugins, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { renderComponents } from "../utils/render";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";

interface IProps {
  options?: IOptions;
  plugins?: IPlugins;
  emitter?: Emitter;
}

interface IState {
  isShown: boolean;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, emitter, plugins } = state;

  return {
    options,
    emitter,
    plugins,
  };
}

class ToolBar extends Component<IProps, IState> {
  pluginName = "ToolBar";
  timer;

  componentWillMount() {
    const { emitter } = this.props;

    emitter.on(InnerEventType.InnerToolBarShow, this.show);
    emitter.on(InnerEventType.InnerToolBarHide, this.hide);
    emitter.on(InnerEventType.InnerToolBarToggle, this.toggle);
    emitter.on(InnerEventType.InnerSeeking, this.clearTimer);
    emitter.on(InnerEventType.InnerSeeked, this.setTimer);
  }

  componentDidMount() {
    this.hide();
  }

  componentWillUnmount() {
    const { emitter } = this.props;

    emitter.off(InnerEventType.InnerToolBarShow, this.show);
    emitter.off(InnerEventType.InnerToolBarHide, this.hide);
    emitter.off(InnerEventType.InnerToolBarToggle, this.toggle);
    emitter.off(InnerEventType.InnerSeeking, this.clearTimer);
    emitter.off(InnerEventType.InnerSeeked, this.setTimer);
  }

  render() {
    const { plugins } = this.props;

    return (
      <div
        className={cx(styleToolBar, this.state.isShown && "shown")}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        {renderComponents(this.pluginName, plugins)}
      </div>
    );
  }

  setTimer = () => {
    this.clearTimer();

    this.timer = setTimeout(() => {
      this.hide();
    }, 2000);
  };

  clearTimer = () => {
    clearTimeout(this.timer);
  };

  onClick = (e: Event) => {
    e.stopPropagation();

    this.clearTimer();
  };

  onMouseEnter = this.clearTimer;

  onMouseLeave = this.setTimer;

  show = () => {
    if (this.state.isShown !== true) {
      this.setState({
        isShown: true,
      });

      this.props.emitter.emit(InnerEventType.InnerToolBarShown);

      this.setTimer();
    }
  };

  hide = () => {
    if (this.state.isShown !== false) {
      this.setState({
        isShown: false,
      });

      this.props.emitter.emit(InnerEventType.InnerToolBarHidden);
    }
  };

  toggle = () => {
    if (this.state.isShown === true) {
      this.hide();
    } else {
      this.show();
    }
  };
}

const component = connect(mapStateToProps)(ToolBar);

export const toolBarPlugin: IPlugin = {
  entry: "Controls",
  index: 4,
  component,
};

const styleToolBar = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(3% + 25px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: transform 0.5s ease-in;
  transform: translateY(100%);

  &.shown {
    transition: transform 0.5s ease-out;
    transform: translateY(0);
  }
`;
