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
// 查询公共接口信息
export const getConstant = params => {
  return axios.request({
    url: api + '/common/getConstant',
    method: 'get',
    params
  })
}

export const postWork = params => {
  return axios.request({
    url: api + '/user/order/update/work',
    method: 'post',
    data: params
  })
}

export const postHouse = params => {
  return axios.request({
    url: api + '/user/order/update/house',
    method: 'post',
    data: params
  })
}

export const postCar = params => {
  return axios.request({
    url: api + '/user/order/update/car',
    method: 'post',
    data: params
  })
}
