import { IPlayerStore, IPlugins } from "../interface";
import { Emitter } from "./emitter";
import { ILang } from "../i18n";

const canPlayFormat = {
  "video/flv": "FLV",
  "video/x-flv": "FLV",
  "video/flash": "FLV",
};

const canPlayRtmpFormat = {
  "rtmp/mp4": "MP4",
  "rtmp/flv": "FLV",
};

export const fullScreenApiList = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror",
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror",
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror",
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror",
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError",
  ],
  [
    "webkitEnterFullscreen",
    "webkitExitFullscreen",
    "webkitDisplayingFullscreen",
    "webkitSupportsFullscreen",
    "webkitbeginfullscreen",
    "webkitfullscreenerror",
  ],
  [
    "webkitEnterFullScreen",
    "webkitExitFullScreen",
    "webkitDisplayingFullscreen",
    "webkitSupportsFullscreen",
    "webkitbeginfullscreen",
    "webkitfullscreenerror",
  ],
];

export function canPlayTypeByFlash(type: string) {
  if (type in Object.assign(canPlayFormat, canPlayRtmpFormat)) {
    return "maybe";
  }

  return "";
}

// export const IS_SUPPORT_MSE = "MediaSource" in window;
// export const IS_SUPPORT_FLASH = flashVersion()[0] >= "10";
export const IS_DOCUMENT_SUPPORT_FULLSCREEN = (() => {
  let isEnabled = false;

  for (let item of fullScreenApiList) {
    const fullscreenchange = item[4];

    if (`on${fullscreenchange}` in document) {
      isEnabled = true;
      break;
    }
  }

  return isEnabled;
})();
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

// function flashVersion() {
//   let version = "0,0,0";
//   try {
//     version = new (<any>window).ActiveXObject("ShockwaveFlash.ShockwaveFlash")
//       .GetVariable("$version")
//       .replace(/\D+/g, ",")
//       .match(/^,?(.+),?$/)[1];
//   } catch (e) {
//     try {
//       if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
//         version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description
//           .replace(/\D+/g, ",")
//           .match(/^,?(.+),?$/)[1];
//       }
//     } catch (err) {}
//   }
//   return version.split(",");
// }

export function initOptions(opt) {
  if (!opt) throw new Error("option cannot be empty");
}

export function initState(options, plugins: IPlugins, lang: ILang): IPlayerStore {
  return {
    options,
    properties: {
      playing: false,
      currentListIndex: 0,
      currentVideoIndex: 0,
      currentTime: 0,
      duration: 0,
      buffered: null,
      volume: 0,
      isFullScreen: false,
    },
    methods: {},
    emitter: new Emitter(),
    plugins,
    lang,
  };
}

export function parsePercent(percent: number): number {
  if (percent > 100) percent = 100;
  if (percent < 0) percent = 0;

  return percent;
}

export const secondToMMSS = (seconds: number) => {
  if (!seconds) return "00:00";
  const date = new Date(null);
  date.setSeconds(seconds); // specify value for SECONDS here
  return date
    .toISOString()
    .substr(11, 8)
    .replace(/^00:(.+:.+)$/, "$1");
};
