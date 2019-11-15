let env = process.env.NODE_ENV
let appid = ''
let url = ''
switch (env) {
  // 测试
  case 'development':
    appid = 'wx9a8a8d1b51655d58'
    url =
      'http://52.82.81.239:8082/cysk/wx/url/get?returnUrl=http://52.82.81.239:8081/user'
    break
  // 生产
  case 'production':
    appid = 'wx76b9ead3105c56fe'
    url =
      'http://xdy.e-whole.com/cysk/wx/url/get?returnUrl=http://xdy.e-whole.com/user'
    break
  // 开发
  default:
    appid = 'wx9a8a8d1b51655d58'
    url =
      'http://52.82.81.239:8082/cysk/wx/url/get?returnUrl=http://172.17.203.139:8080/user/'
    break
}
export default {
  appid,
  url
}
