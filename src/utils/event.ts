import { ISource } from "../interface";

export enum NativeEvent {
  Abort = "abort",
  Canplay = "canplay",
  Canplaythrough = "canplaythrough",
  Durationchange = "durationchange",
  Emptied = "emptied",
  Ended = "ended",
  Error = "error",
  Loadeddata = "loadeddata",
  Loadedmetadata = "loadedmetadata",
  Loadstart = "loadstart",
  Pause = "pause",
  Play = "play",
  Playing = "playing",
  Progress = "progress",
  Ratechange = "ratechange",
  Seeked = "seeked",
  Seeking = "seeking",
  Stalled = "stalled",
  Suspend = "suspend",
  Timeupdate = "timeupdate",
  Volumechange = "volumechange",
  Waiting = "waiting",
}

export enum CustomEventType {
  RetryPlaying = "c.retryPlaying",
  SourceChange = "c.sourceChange",
}

export enum InnerEventType {
  InnerVideoPlay = "i.videoPlay",
  InnerVideoPause = "i.videoPause",
  InnerVideoToggle = "i.videoToggle",
  InnerVideoSetSource = "i.videoSetSource",
  InnerVideoSetCurrentTime = "i.videoSetCurrentTime",
  InnerVideoSetBrightness = "i.videoSetBrightness",
  InnerVideoSetVolume = "i.videoSetVolume",
  InnerProgressBarHide = "i.progressBarHide", // need remove
  InnerProgressBarShow = "i.progressBarShow", // need remove
  InnerToolBarHide = "i.toolBarHide", // need remove
  InnerToolBarShow = "i.toolBarShow", // need remove
  InnerToolBarToggle = "i.toolBarToggle", // need remove
  InnerToolBarHidden = "i.toolBarHidden",
  InnerToolBarShown = "i.toolBarShown",
  InnerSeeking = "i.seeking",
  InnerSeeked = "i.seeked",
  InnerToggleFullScreen = "i.toggleFullScreen",
}

export interface IInnerSetSourceData {
  listIndex: number;
  videoIndex: number;
}

export interface ICustomSourceChangeData {
  from: ISource;
  fromListIndex: number;
  fromVideoIndex: number;
  to: ISource;
  toListIndex: number;
  toVideoIndex: number;
}

export type PlayerEventType = InnerEventType | CustomEventType | NativeEvent;

export class PlayerEvent<T = any> {
  readonly type: PlayerEventType;
  readonly detail: T;

  constructor(type: PlayerEventType, detail: T) {
    this.type = type;
    this.detail = detail;
  }
}
