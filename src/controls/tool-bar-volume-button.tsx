import { h, Component } from "preact";
import { css, cx } from "emotion";

import { IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { parsePercent } from "../utils";
import { colorPrimary, styleToolbarButtonIcon, colorDefault } from "../utils/style";
import { Emitter } from "../utils/emitter";
import { InnerEventType } from "../utils/event";
import { ISetVolume, setVolume } from "../utils/actions";

import * as volumeOnIcon from "../assets/volume-on.svg";
import * as volumeOffIcon from "../assets/volume-off.svg";
import { getToolBarButtonTemplate } from "../utils/render";

interface IProps {
  properties?: IProperties;
  emitter?: Emitter;
  setVolume?: ISetVolume;
}

interface IState {
  isShown?: boolean;
}

const actions = {
  setVolume,
};

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, emitter } = state;

  return {
    properties,
    emitter,
  };
}

class ToolBarVolumeButton extends Component<IProps, IState> {
  pluginName = "ToolBarVolumeButton";
  sliderEl: HTMLDivElement;
  cursorEl: HTMLDivElement;
  mouseDown: boolean;
  rectCache: ClientRect | DOMRect;
  volumeCache: number;
  timer;

  componentDidMount() {
    this.volumeCache = this.props.properties.volume;
  }

  setSliderRef = (el: HTMLDivElement) => (this.sliderEl = el);
  setCursorRef = (el: HTMLDivElement) => (this.cursorEl = el);

  render() {
    const svg = (
      <div
        className={styleToolbarButtonIcon}
        onClick={this.toggle}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: ((this.props.properties.volume !== 0 ? volumeOnIcon : volumeOffIcon) as any) as string,
          }}
        />
        <div className={cx(styleVolumeBar, this.state.isShown && "shown")} onClick={(e) => e.stopPropagation()}>
          <div className={styleVolumeBarText}>{(this.props.properties.volume * 100).toFixed(0)}</div>
          <div className={styleVolumeBarContent} onMouseDown={this.onMouseDown}>
            <div className={styleVolumeBarBackground} ref={this.setSliderRef}>
              <div className={styleVolumeBarFill} style={{ height: `${this.getCursorBottom()}%` }} />
              <div
                className={styleVolumeBarCursor}
                style={{ bottom: `${this.getCursorBottom()}%` }}
                ref={this.setCursorRef}
              />
            </div>
          </div>
        </div>
      </div>
    );

    return getToolBarButtonTemplate(svg);
  }

  getCursorBottom() {
    const { volume } = this.props.properties;
    return parsePercent(volume * 100);
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

  onMouseDown = (e: MouseEvent) => {
    if (e.target === this.sliderEl || e.target === this.cursorEl) {
      this.mouseDown = true;
      this.setVolumeBasedOnPoint(e.y);

      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
    }
  };

  onMouseMove = (e: MouseEvent) => {
    if (this.mouseDown) {
      this.setVolumeBasedOnPoint(e.y);
    }
  };

  onMouseUp = (e: MouseEvent) => {
    if (this.mouseDown) {
      this.applyVolumeToVideo();
      this.mouseDown = false;
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
    }
  };

  setVolumeBasedOnPoint(y: number) {
    const { setVolume } = this.props;

    if (!this.rectCache) {
      this.rectCache = this.sliderEl.getBoundingClientRect();
    }

    const length = this.rectCache.bottom - y;
    let rate = length / this.rectCache.height;

    if (rate < 0) {
      rate = 0;
    } else if (rate > 1) {
      rate = 1;
    }

    setVolume(rate);
  }

  applyVolumeToVideo() {
    const { emitter, properties } = this.props;
    this.rectCache = null;

    if (properties.volume !== 0) {
      this.volumeCache = properties.volume;
    }

    emitter.emit<number>(InnerEventType.InnerVideoSetVolume, properties.volume);
  }

  toggle = () => {
    if (this.props.properties.volume === 0) {
      this.unmuted();
    } else {
      this.muted();
    }
  };

  muted() {
    const { emitter, properties } = this.props;

    this.volumeCache = properties.volume;

    emitter.emit<number>(InnerEventType.InnerVideoSetVolume, 0);
  }

  unmuted() {
    const volume = this.volumeCache !== 0 ? this.volumeCache : 0.5;

    this.props.emitter.emit<number>(InnerEventType.InnerVideoSetVolume, volume);
  }
}

const component = connect(
  mapStateToProps,
  actions
)(ToolBarVolumeButton);

export const toolBarVolumeButtonPlugin: IPlugin = {
  entry: "ToolBar",
  index: 0,
  component,
};

const styleVolumeBar = css`
  position: absolute;
  width: 100%;
  height: 300%;
  left: 0;
  right: 0;
  bottom: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  padding-bottom: 8px;
  opacity: 0;
  transform: translateY(100%);
  transition: transform 0s 0.4s, opacity 0.4s ease-in;

  &.shown {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0.2s, opacity 0.4s ease-out;
  }
`;

const styleVolumeBarText = css`
  color: ${colorDefault};
  padding: 8px;
  text-align: center;
`;

const styleVolumeBarContent = css`
  flex-grow: 1;
  position: relative;
`;

const styleVolumeBarBackground = css`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 8%;
  max-width: 10px;
  background-color: rgba(200, 200, 200, 0.5);
  cursor: pointer;
  transform: translateX(-50%);
`;

const styleVolumeBarFill = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background-color: ${colorPrimary};
  pointer-events: none;
`;

const styleVolumeBarCursor = css`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  cursor: pointer;
`;
