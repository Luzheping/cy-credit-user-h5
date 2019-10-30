import { queryouth } from '../api/outh'
import { setToken, getdToken } from './utils'
const getToken = function(success) {
  if (getdToken()) {
    success && success()
    return
  }
  let url = location.href
  let code = ''
  // 开发
  // let appid = 'wx9a8a8d1b51655d58'
  // 测试
  let appid = 'wx565e9d850275f8a9'
  // 测试公众号
  // let appid = 'wx76b9ead3105c56fe'
  // 获取token
  if (url.indexOf('code=') > -1) {
    code = url.split('code=')[1]
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
    // 开发环境修改切换
    // url =
    //   'http://52.83.51.72:8082/cysk/wx/url/get?returnUrl=http://172.17.203.139:8080/user/'
    // 测试环境修改切换
    url =
      'http://52.83.51.72:8082/cysk/wx/url/get?returnUrl=http://52.83.51.72:8081/user'
    location.href =
      'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
      appid +
      '&redirect_uri=' +
      encodeURI(url) +
      '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    return
  }
  let codeProcess = decodeURIComponent(code)
  queryouth({ code: codeProcess }).then(res => {
    if (res.code === 200) {
      let data = res.data
      setToken(data.token)
      // 解决bug
      // sessionStorage.userInfo = JSON.stringify(data.WeChatLoginUser)
      // localStorage['userInfo'] = JSON.stringify(data.WeChatLoginUser)
      success && success()
    }
  })
}

export { getToken }
