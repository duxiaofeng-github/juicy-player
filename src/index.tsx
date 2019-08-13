import { h, render } from "preact";
import { IOptions, IPlayerStore, IPlugin, IPlugins } from "./interface";
import { initOptions, initState } from "./utils";

import createStore, { Store } from "unistore";
import { Provider } from "unistore/preact";
import { Container } from "./container";
import controls from "./controls";
import htmlPlayer from "./player/html-player";
import player from "./player";
import bigPlayButton from "./controls/big-play-button";
import toolBar from "./controls/tool-bar";
import toolBarTopProgressBar from "./controls/tool-bar-top-progress-bar";
import toolBarPlayButton from "./controls/tool-bar-play-button";
import toolBarProgressBar from "./controls/tool-bar-progress-bar";
import toolBarVolumeButton from "./controls/tool-bar-volume-button";
import toolBarFullScreenButton from "./controls/tool-bar-full-screen-button";
import toolBarVideoSelector from "./controls/tool-bar-video-selector";
import { ILang } from "./i18n";
import en from "./i18n/en";

function checkPluginExistence(plugin: IPlugin, plugins: IPlugins) {
  let existed = false;

  for (let oldPlugin of plugins) {
    if (oldPlugin === plugin) {
      existed = true;
      break;
    }
  }

  return existed;
}

export default class JuicyPlayer {
  store: Store<IPlayerStore>;
  private containerPositionCache = "";

  static defaultPlugin: IPlugins = [
    player,
    htmlPlayer,
    controls,
    bigPlayButton,
    toolBar,
    toolBarTopProgressBar,
    toolBarPlayButton,
    toolBarProgressBar,
    toolBarVideoSelector,
    toolBarVolumeButton,
    toolBarFullScreenButton,
  ];
  static use(plugin: IPlugin) {
    if (!checkPluginExistence(plugin, this.defaultPlugin)) {
      this.defaultPlugin.push(plugin);
    }
  }

  static defaultLang = en;
  static lang(lang: ILang) {
    this.defaultLang = lang;
  }

  constructor(options: IOptions) {
    initOptions(options);

    this.store = createStore(initState(options, JuicyPlayer.defaultPlugin, JuicyPlayer.defaultLang));
    this.render();
  }

  use(plugin: IPlugin) {
    const plugins = this.store.getState().plugins;

    if (!checkPluginExistence(plugin, plugins)) {
      this.store.setState({
        plugins: plugins.concat([plugin]),
      });
    }
  }

  lang(lang: ILang) {
    this.store.setState({
      lang,
    });
  }

  private getTargetElement() {
    const options = this.store.getState().options;
    const ele =
      options.element instanceof HTMLElement ? options.element : document.getElementById(options.element as string);
    if (!ele) throw new Error("can not found target element");
    return ele;
  }

  private setPostionStyle() {
    const container = this.getTargetElement();
    const style: CSSStyleDeclaration = window.getComputedStyle
      ? getComputedStyle(container, null)
      : (container as any)["currentStyle"];
    if (style.position !== "relative" && style.position !== "absolute") {
      this.containerPositionCache = style.position;
      container.style.position = "relative";
    }
  }

  render() {
    this.setPostionStyle();

    render(
      <Provider store={this.store}>
        <Container />
      </Provider>,
      this.getTargetElement()
    );
  }

  destroy() {
    const container = this.getTargetElement();

    container.style.position = this.containerPositionCache;

    render(null, this.getTargetElement());
  }
}
