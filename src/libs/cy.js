import { queryouth } from '../api/outh'
import { setToken, getdToken } from './utils'
const getToken = function(success) {
  if (getdToken()) {
    success && success()
    return
  }
  let url = location.href
  let code = ''
  let appid = 'wx9a8a8d1b51655d58'
  // 获取token
  if (url.indexOf('?') > -1) {
    code = url.split('?code=')[1]
    // code = url.split('?')[1]
    // if (url.indexOf('#') > -1) {
    //   code = code.split('#')[0]
    // }
  }
  // base64解码
  // function b64DecodeUnicode(str) {
  //   return decodeURIComponent(
  //     atob(str)
  //       .split('')
  //       .map(function(c) {
  //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  //       })
  //       .join('')
  //   )
  // }
  // 如果没有token，去获取token，开发直接启动本地开发端口即可

  if (code === '' || code.split('=')[0] === 'type') {
    if (getdToken()) {
      success && success()
      return
    }
    // 后端接口来跳转前端回填地址
    url =
      'http://172.17.210.100:8080/wx/url/get?returnUrl=http://172.17.203.139:8080/index'
    location.href =
      'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
      appid +
      '&redirect_uri=' +
      encodeURI(url) +
      '&response_type=code&scope=snsapi_userinfo#wechat_redirect'
    return
  }
  let codeProcess = decodeURIComponent(code)
  queryouth({ code: codeProcess }).then(res => {
    if (res.code === 200) {
      let data = res.data
      setToken(data.token)
      sessionStorage.userInfo = JSON.stringify(data.WeChatLoginUser)
      success && success()
    }
  })
}

export { getToken }
