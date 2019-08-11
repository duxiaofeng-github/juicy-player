import { IPlayerStore } from "../interface";
import produce from "immer";

export type ISetPlayState = (playing: boolean) => IPlayerStore;

export function setPlayState(state: IPlayerStore, playing: boolean): IPlayerStore {
  return produce(state, (draft) => {
    draft.videoState.playing = playing;
  });
}

export type ISetCurrentTime = (time: number) => IPlayerStore;

export function setCurrentTime(state: IPlayerStore, time: number): IPlayerStore {
  return produce(state, (draft) => {
    draft.videoState.currentTime = time;
  });
}

export type ISetDuration = (duration: number) => IPlayerStore;

export function setDuration(state: IPlayerStore, duration: number): IPlayerStore {
  return produce(state, (draft) => {
    draft.videoState.duration = duration;
  });
}

export type ISetBuffered = (buffered: TimeRanges) => IPlayerStore;

export function setBuffered(state: IPlayerStore, buffered?: TimeRanges): IPlayerStore {
  return produce(state, (draft) => {
    draft.videoState.buffered = buffered;
  });
}
