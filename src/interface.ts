import { Emitter } from "./utils/emitter";
import { ILang } from "./i18n";

export interface IProperties {
  playing: boolean;
  currentListIndex: number;
  currentVideoIndex: number;
  duration: number;
  currentTime: number;
  buffered: TimeRanges;
  volume: number;
  isFullScreen: boolean;
}

export interface IMethods {
  enterFullScreen?: () => void;
  exitFullScreen?: () => void;
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
  methods: IMethods;
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
  title: string;
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
  preload?: string;
  loop?: boolean;
  playsinline?: boolean;
  muted?: boolean;
  poster?: string;
  controls?: boolean | IControlsOption;
  mode?: PlayerMode;
}
