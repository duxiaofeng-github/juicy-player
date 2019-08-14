import { h, render } from "preact";
import { IOptions, IPlayerStore, IPlugin, IPlugins } from "./interface";
import { initOptions, initState } from "./utils";

import createStore, { Store } from "unistore";
import { Provider } from "unistore/preact";
import { Container } from "./container";
import { ILang } from "./i18n";
import en from "./i18n/en";
import { buildInPlugins, checkPluginExistence } from "./plugins";
import { Emitter } from "./utils/emitter";
import { InnerEventType } from "./utils/event";

export default class JuicyPlayer {
  emitter = new Emitter();
  store: Store<IPlayerStore>;
  private containerPositionCache = "";

  static defaultPlugin: IPlugins = buildInPlugins;
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

    this.store = createStore(initState(options, this.emitter, JuicyPlayer.defaultPlugin, JuicyPlayer.defaultLang));
    this.render();
  }

  addEventListener = this.emitter.on;
  removeEventListener = this.emitter.off;
  on = this.emitter.on;
  off = this.emitter.off;
  once = this.emitter.once;
  emit = this.emitter.emit;

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

  set brightness(value: number) {
    this.store.setState({
      properties: {
        ...this.store.getState().properties,
        brightness: value,
      },
    });

    this.emitter.emit(InnerEventType.InnerVideoSetBrightness, value);
  }

  get brightness() {
    return this.store.getState().properties.brightness;
  }

  set volume(value: number) {
    this.store.setState({
      properties: {
        ...this.store.getState().properties,
        volume: value,
      },
    });

    this.emitter.emit(InnerEventType.InnerVideoSetVolume, value);
  }

  get volume() {
    return this.store.getState().properties.volume;
  }
}
