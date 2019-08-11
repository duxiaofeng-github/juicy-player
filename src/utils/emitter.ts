import { PlayerEvent, PlayerEventType } from "./event";

export type EventListener<T = any> = (e: PlayerEvent<T>) => boolean | void;

export class Emitter {
  private events: { [event: string]: EventListener[] } = {};

  on<T>(event: PlayerEventType, listener: EventListener<T>) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
  }

  off(event: PlayerEventType, listener: EventListener) {
    const listeners = this.events[event];

    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
        }
      }
    }
  }

  emit<T>(type: PlayerEventType, data?: T) {
    const listeners = this.events[type];

    if (listeners) {
      for (let listener of listeners) {
        const event = new PlayerEvent(type, data);
        const result = listener(event);

        if (result === false) {
          break;
        }
      }
    }
  }
}
