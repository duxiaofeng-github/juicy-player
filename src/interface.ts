import { Emitter } from "./utils/emitter";
import { I18n } from "./i18n";

export interface IProperties {
  playing: boolean;
  currentListIndex: number;
  currentVideoIndex: number;
  duration: number;
  currentTime: number;
  buffered: TimeRanges;
  volume: number;
}

export type IPlugins = IPlugin[];

export type IPlugin = IPluginInfo | IPluginInfo[];

export interface IPluginInfo {
  entry: string;
  component: any;
}

export interface IPlayerStore {
  options: IOptions;
  properties: IProperties;
  emitter: Emitter;
  plugins: IPlugins;
  i18n: I18n;
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

export interface ISourceOption {
  src: string;
  quality: string;
  mimetype: string;
}

export type ISource = ISourceOption | MediaSource;

export enum PlayerMode {
  Mobile = "mobile",
  Destop = "destop",
}

export interface IOptions {
  element: string | HTMLElement;
  playList: ISource[][];

  autoplay?: boolean;
  preload?: string;
  loop?: boolean;
  playsinline?: boolean;
  muted?: boolean;
  poster?: string;
  controls?: boolean | IControlsOption;
  mode?: PlayerMode;
}
