import { h } from "preact";
import { IPlugin, IPlayerStore } from "../interface";
import { css, cx } from "emotion";
import { colorDefault } from "./style";
import { ImagePlaceHolder } from "./image-placeholder";

export interface IPluginsProps {
  plugins?: IPlugin[];
}

export function mapPluginsToProps(state: IPlayerStore, props): IPluginsProps {
  const { plugins } = state;

  return {
    plugins,
  };
}

export function renderPlugins(entry: string, plugins: IPlugin[]) {
  return plugins
    .filter((item) => item.entry === entry)
    .map((item) => {
      return <item.module />;
    });
}

export function getPlugins(entry: string, plugins: IPlugin[]) {
  return plugins.filter((item) => item && item.entry === entry);
}

const styleButtonContainer = css`
  position: relative;
  height: 100%;
`;

export function getToolBarButtonTemplate(content) {
  return (
    <div className={styleButtonContainer}>
      <ImagePlaceHolder />
      {content}
    </div>
  );
}

const styleTextContainer = css`
  height: 100%;
  padding: 0 10px;
  color: ${colorDefault};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function getToolBarTextTemplate(content, className?: string) {
  return <div className={cx(styleTextContainer, className)}>{content}</div>;
}
