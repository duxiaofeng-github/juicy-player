import { IPlayerStore } from "../interface";

export type ISetPlayState = (playing: boolean) => Partial<IPlayerStore>;

export function setPlayState(state: IPlayerStore, playing: boolean): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      playing,
    },
  };
}

export type ISetCurrentTime = (time: number) => Partial<IPlayerStore>;

export function setCurrentTime(state: IPlayerStore, currentTime: number): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      currentTime,
    },
  };
}

export type ISetVolume = (volume: number) => Partial<IPlayerStore>;

export function setVolume(state: IPlayerStore, volume: number): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      volume,
    },
  };
}

export type ISetDuration = (duration: number) => Partial<IPlayerStore>;

export function setDuration(state: IPlayerStore, duration: number): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      duration,
    },
  };
}

export type ISetBuffered = (buffered: TimeRanges) => Partial<IPlayerStore>;

export function setBuffered(state: IPlayerStore, buffered?: TimeRanges): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      buffered,
    },
  };
}
