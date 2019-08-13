export enum NativeEvent {
  Ready = "ready",
  Abort = "abort",
  Canplay = "canplay",
  Canplaythrough = "canplaythrough",
  Durationchange = "durationchange",
  Emptied = "emptied",
  Encrypted = "encrypted",
  Ended = "ended",
  Interruptbegin = "interruptbegin",
  Interruptend = "interruptend",
  Loadeddata = "loadeddata",
  Loadedmetadata = "loadedmetadata",
  Loadstart = "loadstart",
  Mozaudioavailable = "mozaudioavailable",
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
  RetryPlay = "retryplay",
  Error = "error",
}

export enum InnerEventType {
  InnerVideoPlay = "inner.videoPlay",
  InnerVideoPause = "inner.videoPause",
  InnerVideoToggle = "inner.videoToggle",
  InnerVideoSetSource = "inner.videoSetSource",
  InnerVideoSetCurrentTime = "inner.videoSetCurrentTime",
  InnerVideoSetVolume = "inner.videoSetVolume",
  InnerProgressBarHide = "inner.progressBarHide",
  InnerProgressBarShow = "inner.progressBarShow",
  InnerToolBarHide = "inner.toolBarHide",
  InnerToolBarShow = "inner.toolBarShow",
  InnerToolBarToggle = "inner.toolBarToggle",
  InnerToolBarHidden = "inner.toolBarHidden",
  InnerToolBarShown = "inner.toolBarShown",
  InnerSeeking = "inner.seeking",
  InnerSeeked = "inner.seeked",
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
