import { IPlayerStore } from "../interface";
import { NetworkState, ReadyState, MediaError } from ".";

export type ISetPlayState = (playing: boolean) => void;

export function setPlayState(state: IPlayerStore, playing: boolean): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      playing,
    },
  };
}

export type ISetCurrentTime = (time: number) => void;

export function setCurrentTime(state: IPlayerStore, currentTime: number): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      currentTime,
    },
  };
}

export type ISetVolume = (volume: number) => void;

export function setVolume(state: IPlayerStore, volume: number): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      volume,
    },
  };
}

export type ISetDuration = (duration: number) => void;

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

export type ISetIsFullScreen = (isFullScreen: boolean) => Partial<IPlayerStore>;

export function setIsFullScreen(state: IPlayerStore, isFullScreen: boolean): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      isFullScreen,
    },
  };
}

export interface ISetVideoStateData {
  networkState?: NetworkState;
  readyState?: ReadyState;
}

export type ISetVideoState = (videoState: ISetVideoStateData) => Partial<IPlayerStore>;

export function setVideoState(state: IPlayerStore, videoState: ISetVideoStateData): Partial<IPlayerStore> {
  const { networkState, readyState } = videoState;

  return {
    properties: {
      ...state.properties,
      networkState,
      readyState,
    },
  };
}

export type ISetVideoError = (err: MediaError) => Partial<IPlayerStore>;

export function setVideoError(state: IPlayerStore, err: MediaError): Partial<IPlayerStore> {
  return {
    properties: {
      ...state.properties,
      error: err,
    },
  };
}
