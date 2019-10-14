import axios from '@/libs/http'
let api = ''

// 根据条件查询订单列表
export const queryouth = params => {
  return axios.request({
    url: api + '/wx/auth/login',
    method: 'get',
    params
  })
}
