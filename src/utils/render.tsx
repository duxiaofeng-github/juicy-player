import { h } from "preact";
import { IPluginInfo, IPlugins, IPlayerStore } from "../interface";
import { css, cx } from "emotion";
import { colorDefault } from "./style";
import { ImagePlaceHolder } from "./image-placeholder";

export interface IPluginsProps {
  plugins?: IPlugins;
}

export function mapPluginsToProps(state: IPlayerStore, props): IPluginsProps {
  const { plugins } = state;

  return {
    plugins,
  };
}

export function renderComponents(entry: string, plugins: IPlugins) {
  return getPlugins(entry, plugins).map((plugin) => {
    return <plugin.component />;
  });
}

function getPluginByEntry(entry: string, plugin: IPluginInfo) {
  if (entry === plugin.entry) {
    return plugin;
  }
}

export function getPlugins(entry: string, plugins: IPlugins) {
  const components = [];

  for (let pluginArray of plugins) {
    if (Array.isArray(pluginArray)) {
      for (let plugin of pluginArray) {
        const component = getPluginByEntry(entry, plugin);

        if (component != null) {
          components.push(component);
        }
      }
    } else {
      const component = getPluginByEntry(entry, pluginArray);

      if (component != null) {
        components.push(component);
      }
    }
  }

  return components;
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
