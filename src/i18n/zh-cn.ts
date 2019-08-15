import { ILang } from "./index";

const dict: ILang = {
  SourceN: "视频源%s",
  UnknownSource: "未知视频源",
  Progress: "进度: %s / %s",
  Volume: "音量: %s",
  Brightness: "亮度: %s",
  SourceNotSupproted: "当前浏览器不支持播放该视频格式，请使用其他浏览器打开",
  NetworkError: "网络错误，请检查网络配置并%s",
  DecodeError: "视频解码错误",
  OtherErrors: "有些不对劲，请%s",
  RetryPlaying: "重试播放",
};

export default dict;
