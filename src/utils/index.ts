import { IPlayerStore } from "../interface";
import { Emitter } from "./emitter";

const canPlayFormat = {
  "video/flv": "FLV",
  "video/x-flv": "FLV",
  "video/flash": "FLV",
};

const canPlayRtmpFormat = {
  "rtmp/mp4": "MP4",
  "rtmp/flv": "FLV",
};

export function canPlayTypeByFlash(type: string) {
  if (type in Object.assign(canPlayFormat, canPlayRtmpFormat)) {
    return "maybe";
  }

  return "";
}

export const IS_IOS = /iPhone|iPad/i.test(navigator.userAgent);
export const IS_SUPPORT_MSE = "MediaSource" in window;
export const IS_SUPPORT_FLASH = flashVersion()[0] >= "10";
export const IS_TOUCHABLE_DEVICE = (() => {
  var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
  var mq = function(query) {
    return window.matchMedia(query).matches;
  };

  if (
    "ontouchstart" in window ||
    ((window as any).DocumentTouch && document instanceof (window as any).DocumentTouch)
  ) {
    return true;
  }

  var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
  return mq(query);
})();

function flashVersion() {
  let version = "0,0,0";
  try {
    version = new (<any>window).ActiveXObject("ShockwaveFlash.ShockwaveFlash")
      .GetVariable("$version")
      .replace(/\D+/g, ",")
      .match(/^,?(.+),?$/)[1];
  } catch (e) {
    try {
      if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
        version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description
          .replace(/\D+/g, ",")
          .match(/^,?(.+),?$/)[1];
      }
    } catch (err) {}
  }
  return version.split(",");
}

export function initOptions(opt) {
  if (!opt) throw new Error("option cannot be empty");
}

export function initState(options, plugins): IPlayerStore {
  return {
    options,
    videoState: {
      playing: false,
      currentListIndex: 0,
      currentQualityIndex: 0,
      currentTime: 0,
      duration: 0,
      videoInited: false,
      buffered: null,
    },
    emitter: new Emitter(),
    plugins,
  };
}

export function parsePercent(percent: number): number {
  if (percent > 100) percent = 100;
  if (percent < 0) percent = 0;

  return percent;
}

export function parseRate(rate: number): number {
  if (rate > 1) rate = 1;
  if (rate < 0) rate = 0;

  return parseFloat(rate.toFixed(2));
}

export function getTouchTarget(e: TouchEvent): Touch {
  if (!e || !(e.touches && e.targetTouches && e.changedTouches)) return null;

  if (e.touches && e.touches.length) {
    return e.touches.item(0);
  }

  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches.item(0);
  }

  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches.item(0);
  }

  return null;
}

export function getMouseX(e: MouseEvent | TouchEvent) {
  let mouseX = 0;

  if (e instanceof MouseEvent) {
    mouseX = e.x;
  } else {
    const target = getTouchTarget(e);

    if (target) {
      mouseX = target.pageX;
    }
  }

  return mouseX;
}
