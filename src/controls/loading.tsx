import { h, Component } from "preact";
import { css, keyframes } from "emotion";

import { IOptions, IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { clearInterval } from "timers";
import { NativeEvent } from "../utils/event";
import { ReadyState, NetworkState } from "../utils";
import { styleAbsFull } from "../utils/style";

const boxSize = "1.5em";
const color = `rgba(255, 255, 255, 1)`;
const color2 = `rgba(255, 255, 255, 0.2)`;

interface IProps {
  options?: IOptions;
  properties?: IProperties;
  emitter?: Emitter;
}

interface IState {
  isShown: boolean;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { options, emitter, properties } = state;

  return {
    options,
    emitter,
    properties,
  };
}

class Loading extends Component<IProps, IState> {
  pluginName = "Loading";
  timer;
  lastPostion = -1;
  lastStuckTime = -1;
  played: boolean;

  componentDidMount() {
    this.props.emitter.on(NativeEvent.Play, this.handlePlay);

    this.timer = setInterval(this.loadingChecker, 500);
  }

  componentWillUnmount() {
    this.props.emitter.off(NativeEvent.Play, this.handlePlay);

    clearInterval(this.timer);
  }

  render() {
    return this.state.isShown ? <div className={styleLoading} /> : null;
  }

  handlePlay = () => {
    this.played = true;
  };

  loadingChecker = () => {
    const { properties } = this.props;
    const { playing, currentTime, error, readyState, networkState } = properties;

    const hasMediaError = !!error;
    const isStuck = this.played && this.lastPostion === currentTime;
    // stucking more than 2 minutes is considered as network issue occurred
    const isNeedLoading = isStuck && !hasMediaError;

    if (playing) {
      if (this.lastPostion !== currentTime) {
        this.lastStuckTime = -1;
      }

      if (this.lastPostion === -1 || this.lastPostion !== currentTime) {
        this.lastPostion = currentTime;
      }

      if (isStuck && this.lastStuckTime === -1) {
        this.lastStuckTime = new Date().getTime();
      }
    } else {
      if (
        (readyState === ReadyState.HAVE_METADATA || readyState === ReadyState.HAVE_CURRENT_DATA) &&
        networkState === NetworkState.NETWORK_LOADING
      ) {
        if (this.lastStuckTime === -1) this.lastStuckTime = new Date().getTime();
      } else {
        this.lastStuckTime = -1;
      }
    }

    if (this.state.isShown !== isNeedLoading) {
      this.setState({
        isShown: isNeedLoading,
      });
    }
  };
}

const loadingAnimation = keyframes`
  0%,
  100% {
    box-shadow: ${boxSize} ${boxSize} ${color2}, -${boxSize} ${boxSize} ${color}, -${boxSize} -${boxSize} ${color2},
      ${boxSize} -${boxSize} ${color};
  }

  25% {
    box-shadow: -${boxSize} ${boxSize} ${color}, -${boxSize} -${boxSize} ${color2}, ${boxSize} -${boxSize} ${color},
      ${boxSize} ${boxSize} ${color2};
  }

  50% {
    box-shadow: -${boxSize} -${boxSize} ${color2}, ${boxSize} -${boxSize} ${color}, ${boxSize} ${boxSize} ${color2},
      -${boxSize} ${boxSize} ${color};
  }

  75% {
    box-shadow: ${boxSize} -${boxSize} ${color}, ${boxSize} ${boxSize} ${color2}, -${boxSize} ${boxSize} ${color},
      -${boxSize} -${boxSize} ${color2};
  }
`;

const styleLoading = css`
  ${styleAbsFull};

  margin: auto;
  border-radius: 100%;
  width: ${boxSize};
  height: ${boxSize};
  box-shadow: ${boxSize} ${boxSize} ${color2}, -${boxSize} ${boxSize} ${color}, -${boxSize} -${boxSize} ${color2},
    ${boxSize} -${boxSize} ${color};
  animation: ${loadingAnimation} ease infinite 3s;
`;

const component = connect(mapStateToProps)(Loading);

export const loadingPlugin: IPlugin = {
  entry: "Controls",
  index: 0,
  component,
};
