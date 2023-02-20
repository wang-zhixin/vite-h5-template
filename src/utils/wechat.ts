import { getSignature } from '@/api/common'

export default {
  /**
   * 是否为空
   * @param str 字符串
   */
  async getSignature() {
    const { data } = await getSignature({ url: window.location.href })
    if (data.value) {
      console.log('xwx', data.value)
      this.getWXInit(data.value.appid, data.value.timestamp, data.value.noncestr, data.value.signature)
    }
  },
  getWXInit(appId: string, timestamp: number, nonceStr: string, signature: string) {
    // @ts-expect-error window.wx
    const wx = window.wx
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
      appId, // 必填，公众号的唯一标识
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名
      jsApiList: ['chooseImage'],
      openTagList: ['wx-open-launch-weapp'],
    })
    wx.ready(() => {
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中
    })
    wx.error((res) => {
      console.log('res', res)
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    })
  },
  isWeiXin() {
    // 判断是否是微信环境
    const ua = navigator.userAgent.toLowerCase() // 将用户代理头的值转为小写
    // @ts-expect-error ua.
    if (ua.match(/MicroMessenger/i) === 'micromessenger' || ua.match(/_SQ_/i) === '_sq_')
      return true

    else
      return false
  },

}
