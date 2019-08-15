import { h, Component, ComponentChild } from "preact";

import { IPlayerStore, IProperties, IPlugin } from "../interface";
import { connect } from "unistore/preact";
import { css } from "emotion";
import { ILang, printf } from "../i18n";
import { colorDefault, styleSvg, styleLink, styleAbsFull } from "../utils/style";
import { ImagePlaceHolder } from "../utils/image-placeholder";
import errorIcon from "../assets/error.svg";
import { NetworkState, MediaError } from "../utils";
import { Emitter } from "../utils/emitter";
import { CustomEventType } from "../utils/event";

interface IProps {
  properties?: IProperties;
  lang?: ILang;
  emitter?: Emitter;
}

interface IState {}

function mapStateToProps(state: IPlayerStore, props): IProps {
  const { properties, lang, emitter } = state;

  return {
    properties,
    lang,
    emitter,
  };
}

class Error extends Component<IProps, IState> {
  pluginName = "Error";

  render() {
    return this.props.properties.error ? (
      <div className={styleError}>
        <div className={styleErrorIcon}>
          <ImagePlaceHolder />
          <div className={styleSvg} dangerouslySetInnerHTML={{ __html: (errorIcon as any) as string }} />
        </div>
        <div className={styleErrorMessage}>{this.getMessage()}</div>
      </div>
    ) : null;
  }

  getMessage() {
    const { properties, lang } = this.props;
    const retryComponent = (
      <a className={styleLink} onClick={this.onClick}>
        {lang.RetryPlaying}
      </a>
    );

    switch (properties.error.code) {
      case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
        return lang.SourceNotSupproted;
      case MediaError.MEDIA_ERR_ABORTED:
      case MediaError.MEDIA_ERR_NETWORK:
        return printf(lang.NetworkError, retryComponent);
      case MediaError.MEDIA_ERR_DECODE:
        return lang.DecodeError;
      default:
        return printf(lang.OtherErrors, retryComponent);
    }
  }

  onClick = () => {
    this.props.emitter.emit(CustomEventType.RetryPlaying);
  };
}

const styleErrorIcon = css`
  position: relative;
  height: calc(15% + 25px);
`;

const styleErrorMessage = css`
  color: ${colorDefault};
  line-height: 1.5em;
  text-align: center;
  width: 80%;
  margin: 2em auto 0;
`;

const styleError = css`
  ${styleAbsFull};

  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const component = connect(mapStateToProps)(Error);

export const errorPlugin: IPlugin = {
  entry: "Controls",
  index: 3,
  component,
};
