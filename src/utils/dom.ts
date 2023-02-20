import { useThrottleFn, useWindowSize } from '@vueuse/core'

/**
 * @description 响应式基于当前window.width设置根元素font-size
 * @param title 标题
 */
export const setDomFontSize = useThrottleFn(() => {
  const { width } = useWindowSize()
  const fontsize = `${width.value / 10}px`;
  (document.getElementsByTagName('html')[0].style as any)['font-size'] = fontsize
}, 400)
