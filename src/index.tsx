import { h, render } from "preact";
import { IOptions, IPlayerStore, IPlugin } from "./interface";
import { initOptions, initState } from "./utils";

import createStore, { Store } from "unistore";
import { Provider } from "unistore/preact";
import { Container } from "./container";
import { buildInPluginList } from "./utils/build-in-plugin-list";

function checkPluginExistence(plugin: IPlugin, plugins: IPlugin[]) {
  let existed = false;

  for (let oldPlugin of plugins) {
    if (oldPlugin.entry === plugin.entry && oldPlugin.module === plugin.module) {
      existed = true;
      break;
    }
  }

  return existed;
}

export default class JuicyPlayer {
  store: Store<IPlayerStore>;
  private containerPositionCache = "";

  static plugins = buildInPluginList;
  static use(plugin: IPlugin) {
    if (!checkPluginExistence(plugin, this.plugins)) {
      this.plugins.push(plugin);
    }
  }

  constructor(options: IOptions) {
    initOptions(options);

    this.store = createStore(initState(options, JuicyPlayer.plugins));
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
