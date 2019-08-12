import { h, Component } from "preact";
import { css } from "emotion";

import { IOptions, IPlayerStore, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { renderPlugins } from "../utils/render";
import { IS_TOUCHABLE_DEVICE } from "../utils";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";

interface IProps {
  options?: IOptions;
  plugins?: IPlugin[];
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

@connect(mapStateToProps)
export class Controls extends Component<IProps, IState> {
  pluginName = "Controls";
  timer: number;

  render() {
    return (
      <div className={styleControls} onClick={this.onClick} onMouseMove={!IS_TOUCHABLE_DEVICE && this.onMouseMove}>
        {renderPlugins(this.pluginName, this.props.plugins)}
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
      // TODO: fullscreen
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

const styleControls = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;