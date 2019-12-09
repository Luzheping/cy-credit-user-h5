// 个人中心
import axios from '@/libs/http'
// import { BXFQ } from '@/api/server'
let api = ''

export const queryUserStatus = params => {
  return axios.request({
    url: api + '/user/status',
    method: 'get',
    params
  })
}

export const queryPersonalCenter = params => {
  return axios.request({
    url: api + '/user/personalCenter',
    method: 'get',
    params
  })
}

export const setDisturb = params => {
  return axios.request({
    url: api + '/user/set/disturb',
    method: 'get',
    params
  })
}

export const concatCallBack = params => {
  return axios.request({
    url: api + '/user/concat/callBack',
    method: 'get',
    params
  })
}

export const postPageList = params => {
  return axios.request({
    url: api + '/user/call/getPageList',
    method: 'post',
    data: params
  })
}

export const postcallBackList = params => {
  return axios.request({
    url: api + '/user/callBack/getPageList',
    method: 'post',
    data: params
  })
}

export const postApplyList = params => {
  return axios.request({
    url: api + '/organ/order/getPageList',
    method: 'post',
    data: params
  })
}
