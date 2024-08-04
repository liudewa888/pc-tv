export const isMobileBrowser = () => {
  var userAgent = navigator.userAgent || window.opera;

  // 正则表达式用于检测手机设备
  var mobileRegex =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

  return mobileRegex.test(userAgent);
};
