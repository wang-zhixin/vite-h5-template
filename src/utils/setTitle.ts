/**
 * Created by slipkinem on 5/25/2017.
 */
'use strict'

/**
 * @description 设置网页title，兼容微信
 * @param title 标题
 */
export default function (title) {
  document.title = title
  const ua = navigator.userAgent
  if (/\bMicroMessenger\/([\d.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement('iframe')
    i.src = '/favicon.ico'
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(() => {
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
  }
}
