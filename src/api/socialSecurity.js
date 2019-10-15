import axios from '@/libs/http'
// import { BXFQ } from '@/api/server'
let api = ''

export const querySocial = params => {
  return axios.request({
    url: api + '/user/order/update/social',
    method: 'get',
    params
  })
}

export const queryProvident = params => {
  return axios.request({
    url: api + '/user/order/update/provident',
    method: 'get',
    params
  })
}
