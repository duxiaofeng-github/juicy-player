import { IPlugin } from "../interface";
import { Player } from "../player";
import { Controls } from "../controls";
import { HTMLPlayer } from "../player/html-player";
import { BigPlayButton } from "../controls/big-play-button";
import { ToolBar } from "../controls/tool-bar";
import { ToolBarPlayButton } from "../controls/tool-bar-play-button";
import { ToolBarTopProgressBar } from "../controls/tool-bar-top-progress-bar";
import { ToolBarProgressBar } from "../controls/tool-bar-progress-bar";
import { IS_TOUCHABLE_DEVICE } from ".";

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
  !IS_TOUCHABLE_DEVICE && {
    entry: "ToolBar",
    module: ToolBarPlayButton,
  },
  {
    entry: "ToolBar",
    module: ToolBarProgressBar,
  },
].filter((item) => item != null);
