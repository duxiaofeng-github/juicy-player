import { IPlayerStore } from "../interface";
import produce from "immer";

export type ISetPlayState = (playing: boolean) => IPlayerStore;

export function setPlayState(state: IPlayerStore, playing: boolean): IPlayerStore {
  return produce(state, (draft) => {
    draft.properties.playing = playing;
  });
}

export type ISetCurrentTime = (time: number) => IPlayerStore;

export function setCurrentTime(state: IPlayerStore, time: number): IPlayerStore {
  return produce(state, (draft) => {
    draft.properties.currentTime = time;
  });
}

export type ISetVolume = (volume: number) => IPlayerStore;

export function setVolume(state: IPlayerStore, volume: number): IPlayerStore {
  return produce(state, (draft) => {
    draft.properties.volume = volume;
  });
}

export type ISetDuration = (duration: number) => IPlayerStore;

export function setDuration(state: IPlayerStore, duration: number): IPlayerStore {
  return produce(state, (draft) => {
    draft.properties.duration = duration;
  });
}

export type ISetBuffered = (buffered: TimeRanges) => IPlayerStore;

export function setBuffered(state: IPlayerStore, buffered?: TimeRanges): IPlayerStore {
  return produce(state, (draft) => {
    draft.properties.buffered = buffered;
  });
}
