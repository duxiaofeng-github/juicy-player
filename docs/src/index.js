import JuicyPlayer from "../../dist";

const srcHD = {
  src: "http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-HD.mp4",
  name: "超清超清超清",
  mimetype: "video/mp4",
};
// const srcSD = {
//   src:
//     "rtmp://ali-live.zaojiu.com/zaojiu/59313bd2647259000183041d_sd?auth_key=1512472740-0-0-845571a71200e6c83807d4e399f3ad00",
//   // src: 'http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-MD.mp4',
//   name: "高清",
//   mimetype: "rtmp/mp4",
// };
const srcMD = {
  src: "http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-MD.mp4",
  name: "高清",
  mimetype: "video/mp4",
};
// const srcMD = {
//   src: '//edge.flowplayer.org/flowplayer-700.flv',
//   // src: 'http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-MD.mp4',
//   name: '高清',
//   mimetype: 'video/mp4'
// };
const srcSD = {
  src: "http://7qnbk6.com1.z0.glb.clouddn.com/The-Battle-of-Evony-SD.mp4",
  name: "标清",
  mimetype: "video/mp4",
};
const player = new JuicyPlayer({
  element: "player",
  playList: [[srcSD, srcMD, srcHD]],
  // autoplay: true,
  playsinline: true,
  // controlFullScreen: true,
  // controlVolume: true,
  // controlBrightness: true,
  // muted: true,
});
