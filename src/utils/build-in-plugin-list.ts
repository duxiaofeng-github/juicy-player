import { IPlugin } from "../interface";
import { Player } from "../player";
import { Controls } from "../controls";
import { HTMLPlayer } from "../player/html-player";
import { BigPlayButton } from "../controls/big-play-button";
import { ToolBar } from "../controls/tool-bar";
import { ToolBarPlayButton } from "../controls/tool-bar-play-button";
import { ToolBarTopProgressBar } from "../controls/tool-bar-top-progress-bar";
import { ToolBarProgressBar } from "../controls/tool-bar-progress-bar";
import { ToolBarDuration } from "../controls/tool-bar-duration";
import { ToolBarCurrentTime } from "../controls/tool-bar-current-time";
import { ToolBarFullScreenButton } from "../controls/tool-bar-full-screen-button";
import { ToolBarVolumeButton } from "../controls/tool-bar-volume-button";

export const buildInPluginList: IPlugin[] = [
  {
    entry: "Container",
    module: Player,
  },
  {
    entry: "Container",
    module: Controls,
  },
  {
    entry: "Player",
    module: HTMLPlayer,
  },
  {
    entry: "Controls",
    module: BigPlayButton,
  },
  {
    entry: "Controls",
    module: ToolBar,
  },
  {
    entry: "ToolBar",
    module: ToolBarTopProgressBar,
  },
  {
    entry: "ToolBar",
    module: ToolBarPlayButton,
  },
  {
    entry: "ToolBar",
    module: ToolBarCurrentTime,
  },
  {
    entry: "ToolBar",
    module: ToolBarProgressBar,
  },
  {
    entry: "ToolBar",
    module: ToolBarDuration,
  },
  {
    entry: "ToolBar",
    module: ToolBarVolumeButton,
  },
  {
    entry: "ToolBar",
    module: ToolBarFullScreenButton,
  },
];
