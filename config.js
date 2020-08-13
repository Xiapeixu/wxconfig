/**
 * 微信公众号 微信api配置
 * @param config { 
 *   debug, 是否是调试模式 debug 不传的话默认false
 *   appId, 必填,公众号的唯一标识
 *   timestamp, 必填,生成签名的时间戳
 *   nonceStr, 必填,生成签名的随机串
 *   signature, 必填,签名
 *   jsApiList 必填,需要使用的JS接口列表 如:["getLocation", "openLocation"]
 * } 
 * @param ready 当准备就绪的时候回调
 * @param error 当配置出错的时候回调
 */
export default function wxConfig(config, ready, error) {
    //配置js-sdk,根据路径传参获得必要的参数信息
    wx.config({
        debug: config.debug ? false : true,
        appId: config.appId, // 必填,公众号的唯一标识
        timestamp: config.timestamp, // 必填,生成签名的时间戳
        nonceStr: config.nonceStr, // 必填,生成签名的随机串
        signature: config.signature, // 必填,签名
        jsApiList: config.jsApiList, // 必填,需要使用的JS接口列表
    });
    wx.ready(() => {
        if (ready) {
            ready();
        }
    });
    wx.error((err) => {
        if (error) {
            error(err);
        }
    });
}