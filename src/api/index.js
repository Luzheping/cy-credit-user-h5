// 首页
import axios from '@/libs/http'
// import { BXFQ } from '@/api/server'
let api = ''

export const queryStatistical = params => {
  return axios.request({
    url: api + '/user/statistical',
    method: 'get',
    params
  })
}

export const querySendSms = params => {
  return axios.request({
    url: api + '/common/sendSms',
    method: 'get',
    params
  })
}
