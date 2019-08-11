import { Emitter } from "./utils/emitter";

export interface IVideoState {
  playing: boolean;
  currentListIndex: number;
  currentQualityIndex: number;
  duration: number;
  currentTime: number;
  videoInited: boolean;
  buffered: TimeRanges;
}

export interface IPlugin {
  entry: string;
  module: any;
}

export interface IPlayerStore {
  options: IOptions;
  videoState: IVideoState;
  emitter: Emitter;
  plugins: IPlugin[];
}

export interface IControlsOption {
  showBigPlay: boolean;
  showPlayPause: boolean;
  showProgressBar: boolean;
  showVolume: boolean;
  showDuration: boolean;
  showFullScreen: boolean;
  showQuality: boolean;
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
