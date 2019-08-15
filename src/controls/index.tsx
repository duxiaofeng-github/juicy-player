import { h, Component } from "preact";
import { css } from "emotion";

import { IOptions, IPlayerStore, IPlugins, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { renderComponents } from "../utils/render";
import { IS_TOUCHABLE_DEVICE } from "../utils";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";
import { styleAbsFull } from "../utils/style";

interface IProps {
  options?: IOptions;
  plugins?: IPlugins;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, emitter, plugins } = state;

  return {
    options,
    emitter,
    plugins,
  };
}

class Controls extends Component<IProps, IState> {
  pluginName = "Controls";
  timer;

  render() {
    return (
      <div className={styleAbsFull} onClick={this.onClick} onMouseMove={!IS_TOUCHABLE_DEVICE && this.onMouseMove}>
        {renderComponents(this.pluginName, this.props.plugins)}
      </div>
    );
  }

  onClick = () => {
    if (this.timer) {
      this.handleDoubleClick();
    } else {
      this.handleSingleClick();
    }
  };

  handleDoubleClick() {
    clearTimeout(this.timer);

    this.timer = null;

    const { emitter } = this.props;

    if (IS_TOUCHABLE_DEVICE) {
      emitter.emit(InnerEventType.InnerVideoToggle);
    } else {
      emitter.emit(InnerEventType.InnerToggleFullScreen);
    }
  }

  handleSingleClick() {
    this.timer = setTimeout(() => {
      const { emitter } = this.props;

      if (IS_TOUCHABLE_DEVICE) {
        emitter.emit(InnerEventType.InnerToolBarToggle);
      } else {
        emitter.emit(InnerEventType.InnerVideoToggle);
      }

      this.timer = null;
    }, 200);
  }

  onMouseMove = () => {
    const { emitter } = this.props;

    emitter.emit(InnerEventType.InnerToolBarShow);
  };
}

const component = connect(mapStateToProps)(Controls);

export const controlsPlugin: IPlugin = {
  entry: "Container",
  index: 2,
  component,
};
