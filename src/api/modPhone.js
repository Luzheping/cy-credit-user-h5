// 首页
import axios from '@/libs/http'
// import { BXFQ } from '@/api/server'
let api = ''

export const querySendSms = params => {
  return axios.request({
    url: api + '/common/sendSms',
    method: 'get',
    params
  })
}

export const queryVerify = params => {
  return axios.request({
    url: api + '/common/get/verify',
    method: 'get',
    params
  })
}

export const postSave = params => {
  return axios.request({
    url: api + '/user/update/phone',
    method: 'get',
    params
  })
}
