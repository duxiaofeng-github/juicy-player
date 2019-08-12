import { h, Component } from "preact";

import { IPlayerStore } from "../interface";
import { connect } from "unistore/preact";
import { Emitter } from "../utils/emitter";
import { css, cx } from "emotion";

interface IProps {
  emitter?: Emitter;
}

interface IState {
  needRender: boolean;
}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { emitter } = state;

  return {
    emitter,
  };
}

@connect(mapStateToProps)
export class ImagePlaceHolder extends Component<IProps, IState> {
  componentWillMount() {
    window.addEventListener("resize", this.toggle);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.toggle);
  }

  render() {
    return (
      <div className={cx(styleButtonPlaceholder, this.state.needRender && "rerender")}>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      </div>
    );
  }

  toggle = () => {
    this.setState({
      needRender: !this.state.needRender,
    });
  };
}

const styleButtonPlaceholder = css`
  height: 100%;
  pointer-events: none;

  img {
    height: 100%;
  }

  &.rerender {
    &:before {
      display: block;
      content: " ";
      height: 1px;
    }

    img {
      margin-top: -1px;
    }
  }
`;
