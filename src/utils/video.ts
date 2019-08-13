import { IPlayerStore } from "../interface";

export type ISetPlayState = (playing: boolean) => IPlayerStore;

export function setPlayState(state: IPlayerStore, playing: boolean): IPlayerStore {
  state.properties.playing = playing;

  return state;
}

export type ISetCurrentTime = (time: number) => IPlayerStore;

export function setCurrentTime(state: IPlayerStore, time: number): IPlayerStore {
  state.properties.currentTime = time;

  return state;
}

export type ISetVolume = (volume: number) => IPlayerStore;

export function setVolume(state: IPlayerStore, volume: number): IPlayerStore {
  state.properties.volume = volume;

  return state;
}

export type ISetDuration = (duration: number) => IPlayerStore;

export function setDuration(state: IPlayerStore, duration: number): IPlayerStore {
  state.properties.duration = duration;

  return state;
}

export type ISetBuffered = (buffered: TimeRanges) => IPlayerStore;

export function setBuffered(state: IPlayerStore, buffered?: TimeRanges): IPlayerStore {
  state.properties.buffered = buffered;

  return state;
}
