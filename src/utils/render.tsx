import { h } from "preact";
import { IPlugin, IPlayerStore } from "../interface";
import { css } from "emotion";

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

const styleButtonPlaceholder = css`
  height: 100%;
`;

export const imagePlaceHolder = (
  <img
    className={styleButtonPlaceholder}
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  />
);

export function getToolBarButtonTemplate(content) {
  return (
    <div className={styleButtonContainer}>
      {imagePlaceHolder}
      {content}
    </div>
  );
}
