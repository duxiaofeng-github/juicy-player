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
  RetryPlay = "custom.retryplay",
  SourceChange = "custom.sourceChange",
}

export enum InnerEventType {
  InnerVideoPlay = "inner.videoPlay",
  InnerVideoPause = "inner.videoPause",
  InnerVideoToggle = "inner.videoToggle",
  InnerVideoSetSource = "inner.videoSetSource",
  InnerVideoSetCurrentTime = "inner.videoSetCurrentTime",
  InnerVideoSetBrightness = "inner.videoSetBrightness",
  InnerVideoSetVolume = "inner.videoSetVolume",
  InnerProgressBarHide = "inner.progressBarHide", // need remove
  InnerProgressBarShow = "inner.progressBarShow", // need remove
  InnerToolBarHide = "inner.toolBarHide", // need remove
  InnerToolBarShow = "inner.toolBarShow", // need remove
  InnerToolBarToggle = "inner.toolBarToggle", // need remove
  InnerToolBarHidden = "inner.toolBarHidden",
  InnerToolBarShown = "inner.toolBarShown",
  InnerSeeking = "inner.seeking",
  InnerSeeked = "inner.seeked",
  InnerToggleFullScreen = "inner.toggleFullScreen",
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
