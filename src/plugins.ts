import { IPlugin, IPlugins } from "./interface";

import controls from "./controls";
import htmlPlayer from "./player/html-player";
import player from "./player";
import bigPlayButton from "./controls/big-play-button";
import toolBar from "./controls/tool-bar";
import toolBarTopProgressBar from "./controls/tool-bar-top-progress-bar";
import toolBarPlayButton from "./controls/tool-bar-play-button";
import toolBarProgressBar from "./controls/tool-bar-progress-bar";
import toolBarVolumeButton from "./controls/tool-bar-volume-button";
import toolBarFullScreenButton from "./controls/tool-bar-full-screen-button";
import toolBarVideoSelector from "./controls/tool-bar-video-selector";
import mobileActions from "./controls/mobile-actions";
import { IS_TOUCHABLE_DEVICE } from "./utils";

export const buildInPlugins = [
  player,
  htmlPlayer,
  controls,
  bigPlayButton,
  toolBar,
  IS_TOUCHABLE_DEVICE ? mobileActions : null,
  toolBarTopProgressBar,
  !IS_TOUCHABLE_DEVICE ? toolBarPlayButton : null,
  toolBarProgressBar,
  toolBarVideoSelector,
  !IS_TOUCHABLE_DEVICE ? toolBarVolumeButton : null,
  toolBarFullScreenButton,
].filter((item) => item != null);

export function checkPluginExistence(plugin: IPlugin, plugins: IPlugins) {
  let existed = false;

  for (let oldPlugin of plugins) {
    if (oldPlugin === plugin) {
      existed = true;
      break;
    }
  }

  return existed;
}
