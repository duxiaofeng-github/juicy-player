import { Emitter } from "./utils/emitter";
import { ILang } from "./i18n";
import { NetworkState, ReadyState, MediaError } from "./utils";

export interface IProperties {
  playing: boolean;
  currentListIndex: number;
  currentVideoIndex: number;
  duration: number;
  currentTime: number;
  buffered: TimeRanges;
  volume: number;
  brightness: number;
  isFullScreen: boolean;
  networkState: NetworkState;
  readyState: ReadyState;
  error: MediaError;
}

export type IPlugins = IPlugin[];

export type IPlugin = IPluginInfo | IPluginInfo[];

export interface IPluginInfo {
  entry: string;
  index: number;
  component: any;
}

export interface IPlayerStore {
  options: IOptions;
  properties: IProperties;
  emitter: Emitter;
  plugins: IPlugins;
  lang: ILang;
}

export interface IControlsOption {
  showBigPlay: boolean;
  showPlayPause: boolean;
  showProgressBar: boolean;
  showVolume: boolean;
  showDuration: boolean;
  showFullScreen: boolean;
  showVideoSelector: boolean;
}

export interface ISource {
  src: string | MediaSource;
  name: string;
  mimetype: string;
}

export enum PlayerMode {
  Mobile = "mobile",
  Destop = "destop",
}

export interface IOptions {
  element: string | HTMLElement;
  playList: ISource[][];

  autoplay?: boolean;
  preload?: "none" | "metadata" | "auto";
  loop?: boolean;
  playsinline?: boolean;
  muted?: boolean;
  poster?: string;
  controls?: boolean | IControlsOption;
  mode?: PlayerMode;
  playFromStart?: boolean;
  controlBrightness?: boolean;
  controlVolume?: boolean;
  controlFullScreen?: boolean;
}
