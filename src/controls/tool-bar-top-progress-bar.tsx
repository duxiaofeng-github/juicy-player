import { h, Component } from "preact";
import { css, cx } from "emotion";

import { IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { parsePercent } from "../utils";
import { colorPrimary } from "../utils/style";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";

interface IProps {
  properties?: IProperties;
  emitter?: Emitter;
}

interface IState {
  isShown: boolean;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter } = state;

  return {
    properties,
    emitter,
  };
}

@connect(mapStateToProps)
class ToolBarTopProgressBar extends Component<IProps, IState> {
  pluginName = "ToolBarTopProgressBar";

  componentWillMount() {
    const emitter = this.props.emitter;
    emitter.on(InnerEventType.InnerToolBarShown, this.hide);
    emitter.on(InnerEventType.InnerToolBarHidden, this.show);
  }

  componentWillUnmount() {
    const emitter = this.props.emitter;
    emitter.off(InnerEventType.InnerToolBarShown, this.hide);
    emitter.off(InnerEventType.InnerToolBarHidden, this.show);
  }

  render() {
    const { currentTime, duration } = this.props.properties;
    const percent = parsePercent((currentTime / duration) * 100);

    return (
      <div className={cx(styleProgressBar, this.state.isShown && "shown")}>
        <div className={styleProgressBarFill} style={{ width: `${percent}%` }} />
      </div>
    );
  }

  hide = () => {
    this.setState({
      isShown: false,
    });
  };

  show = () => {
    this.setState({
      isShown: true,
    });
  };
}

const plugin: IPlugin = {
  entry: "ToolBar",
  index: 0,
  component: ToolBarTopProgressBar,
};

export default plugin;

const styleProgressBar = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8%;
  max-height: 10px;
  background-color: rgba(200, 200, 200, 0.5);
  transform: translateY(-100%);
  opacity: 0;
  transition: none;

  &.shown {
    transition: opacity 0.2s 0.35s;
    opacity: 1;
  }
`;

const styleProgressBarFill = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background-color: ${colorPrimary};
`;
