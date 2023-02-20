/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import wechat from '@/utils/wechat'

export default {
    goBack(router: any, route: any) {
        if (wechat.isWeiXin()) {
            router.go(-(window.history.length - 1))
        } else {
            if (route.query.edition.includes('ios')) {
                window.webkit.messageHandlers.GoBack.postMessage(null)
            } else if (route.query.edition === 'Android' || route.query.edition === 'tai_yi_bao') {
                // 安卓
                window.pukangbao.goBack()
            } else {
                router.back()
            }
        }
    },
    setNavBarHidden(path) {
        const edition = sessionStorage.getItem('edition')
        if (wechat.isWeiXin())
            return

        if (edition.includes('ios')) {
            if (window.webkit != null) {
                // 设置状态栏颜色
                if (path === '/home') {
                    window.webkit.messageHandlers.SetStatusBarBgColor.postMessage({
                        red: 86,
                        green: 152,
                        blue: 242,
                        alpha: 1
                    })
                    window.webkit.messageHandlers.SetNavBarHidden.postMessage({ hidden: 1 })
                } else if (path === '/orderDetail') {
                    window.webkit.messageHandlers.SetStatusBarBgColor.postMessage({
                        red: 255,
                        green: 255,
                        blue: 255,
                        alpha: 1
                    })
                    window.webkit.messageHandlers.SetNavBarHidden.postMessage({ hidden: 0 })
                } else {
                    window.webkit.messageHandlers.SetStatusBarBgColor.postMessage({
                        red: 255,
                        green: 255,
                        blue: 255,
                        alpha: 1
                    })
                    window.webkit.messageHandlers.SetNavBarHidden.postMessage({ hidden: 1 })
                }
            }
        } else if (edition === 'Android' || edition === 'tai_yi_bao') {
            if (window.pukangbao != null) {
                // 安卓
                if (path === '/home') {
                    window.pukangbao.setStatusBarBgColor(86, 152, 242, 255)
                    window.pukangbao.setNavBarHidden(1)
                } else if (path === '/orderDetail') {
                    window.pukangbao.setNavBarHidden(0)
                } else {
                    window.pukangbao.setStatusBarBgColor(255, 255, 255, 255)
                    window.pukangbao.setNavBarHidden(1)
                }
            }
        }
    },
    setNavBarShow() {
        console.log('显示原生导航栏')
        const edition = sessionStorage.getItem('edition')
        if (edition.includes('ios')) {
            if (window.webkit != null) {
                window.webkit.messageHandlers.SetStatusBarBgColor.postMessage({
                    red: 255,
                    green: 255,
                    blue: 255,
                    alpha: 1
                })
                window.webkit.messageHandlers.SetNavBarHidden.postMessage({ hidden: 0 })
            }
        } else if (edition === 'Android') {
            if (window.pukangbao != null) {
                window.pukangbao.setStatusBarBgColor(255, 255, 255, 255)
                window.pukangbao.setNavBarHidden(0)
            }
        }
    }
}
