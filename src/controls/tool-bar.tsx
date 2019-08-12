import { h, Component } from "preact";
import { css, cx } from "emotion";

import { IOptions, IPlayerStore, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { renderPlugins } from "../utils/render";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";

interface IProps {
  options?: IOptions;
  plugins?: IPlugin[];
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

@connect(mapStateToProps)
export class ToolBar extends Component<IProps, IState> {
  pluginName = "ToolBar";
  timer: number;

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
        className={cx(styleToolBar, this.state.isShown !== true && styleToolbarHidden)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        {renderPlugins(this.pluginName, plugins)}
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

const styleToolBar = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(3% + 25px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: transform 0.5s;
  transform: translateY(0);
`;

const styleToolbarHidden = css`
  transform: translateY(100%);
`;
