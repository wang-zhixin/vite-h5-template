import { closeToast, showLoadingToast } from 'vant'

/**
 * @description 不需要Loading动画的请求
 */
export const NotLoadingRequestArray = [
  '/medic/consultOrderList',
]

// 当前正在进行中的请求数量
let time = 0

/**
 * @param url 请求地址
 */
export function onLoading(url: string) {
  if (NotLoadingRequestArray.length && NotLoadingRequestArray.some(path => url.includes(path)))
    return

  if (time === 0) {
    showLoadingToast({
      message: '加载中...',
      duration: 0,
      forbidClick: true,
    })
  }
  time++
}

/**
 * @param url 请求地址
 */
export function clearLoading(url: string) {
  if (NotLoadingRequestArray.length && NotLoadingRequestArray.some(path => url.includes(path)))
    return

  time--
  if (time === 0)
    closeToast()
}
