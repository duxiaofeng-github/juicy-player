import { IPlugin, IPlugins } from "./interface";

import { controlsPlugin } from "./controls";
import { htmlPlayerPlugin } from "./player/html-player";
import { playerPlugin } from "./player";
import { bigPlayButtonPlugin } from "./controls/big-play-button";
import { toolBarPlugin } from "./controls/tool-bar";
import { toolBarTopProgressBarPlugin } from "./controls/tool-bar-top-progress-bar";
import { toolBarPlayButtonPlugin } from "./controls/tool-bar-play-button";
import { toolBarProgressBarPlugin } from "./controls/tool-bar-progress-bar";
import { toolBarVolumeButtonPlugin } from "./controls/tool-bar-volume-button";
import { toolBarFullScreenButtonPlugin } from "./controls/tool-bar-full-screen-button";
import { toolBarVideoSelectorPlugin } from "./controls/tool-bar-video-selector";
import { mobileActionsPlugin } from "./controls/mobile-actions";
import { loadingPlugin } from "./controls/loading";
import { IS_TOUCHABLE_DEVICE } from "./utils";
import { errorPlugin } from "./controls/error";

export const buildInPlugins = [
  playerPlugin,
  htmlPlayerPlugin,
  controlsPlugin,
  bigPlayButtonPlugin,
  toolBarPlugin,
  IS_TOUCHABLE_DEVICE ? mobileActionsPlugin : null,
  toolBarTopProgressBarPlugin,
  !IS_TOUCHABLE_DEVICE ? toolBarPlayButtonPlugin : null,
  toolBarProgressBarPlugin,
  toolBarVideoSelectorPlugin,
  !IS_TOUCHABLE_DEVICE ? toolBarVolumeButtonPlugin : null,
  toolBarFullScreenButtonPlugin,
  loadingPlugin,
  errorPlugin,
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
