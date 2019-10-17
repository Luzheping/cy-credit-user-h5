import axios from '@/libs/http'
// import { BXFQ } from '@/api/server'
let api = ''

export const queryTop = params => {
  return axios.request({
    url: api + '/user/product/top',
    method: 'get',
    params
  })
}

export const postProductList = params => {
  return axios.request({
    url: api + '/manage/product/getPageList',
    method: 'post',
    data: params
  })
}
