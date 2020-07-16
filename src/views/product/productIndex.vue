<template>
  <div class="product-page">
    <div class="product-head" @click="goLoan()">
      <div class="top-img">
        <img src="../../assets/images/product/top@2x.jpeg">
      </div>
      <div class="top2-img">
        <img src="../../assets/images/product/img2@2x.jpeg">
      </div>
    </div>
    <div class="product-content">
      <div class="product-intro" v-for="(item,i) in bankList" :key="i" @click="goPage(item.productUrl)">
        <div class="img-box">
          <img :src="item.productIcon">
        </div>
        <div class="text-con">
          <div>{{item.bankName}}</div>
          <div style="margin-top: 10px">{{item.productDesc}}</div>
        </div>
      </div>
    </div>
    <div class="product-footer">
      <ul>
        <li>
          <a href="https://tv.cctv.com/cctv2/"><img src="../../assets/images/product/cj.png" style="width: 86px;height: 36px"></a>
          <a href="https://finance.sina.com.cn/"><img src="../../assets/images/product/xl.png" style="width: 122px;height: 36px"></a>
          <a href="https://money.163.com/"><img src="../../assets/images/product/wy.png" style="width: 88px;height: 33px;"></a>
        </li>
        <li>
          <a href="https://www.yicai.com/"><img src="../../assets/images/product/d1.png" style="width: 83px;height: 34px"></a>
          <a href="http://www.cfi.net.cn/"><img src="../../assets/images/product/zg.png" style="width: 51px;height: 56px;"></a>
          <a href="https://finance.huanqiu.com/"><img src="../../assets/images/product/hq.png" style="width: 56px;height: 54px"></a>
          <a href="https://tv.cctv.com/cctv2/"><img src="../../assets/images/product/jr.png" style="width: 93px;height: 27px"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { productListIndex } from '@/api/index'
export default {
  name: 'productIndex',
  data() {
    return {
      bankList: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      productListIndex({}).then(res => {
        this.bankList = res.data
      })
    },
    goPage(url) {
      window.location.href = url
    },
    goLoan() {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style scoped lang="less">
  .product-page{
    height: 100%;
    background: #F2F2F2;
    padding: 6px;
    display: block;
    .product-head{
      .top-img{
        img{
          width: 100%;
          height: 136px;
        }
      }
      .top2-img{
        img{
          width: 100%;
          height: 121px;
          border-radius: 5px;
        }
      }
    }
    .product-content{
      background-color: #ffffff;
      margin-top: 20px;
      padding: 10px;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .product-intro{
        background-color: #F2F7FF;
        height: 60px;
        width: 46%;
        border-radius: 5px;
        margin: 5px;
        display: flex;
        .img-box{
          height: 100%;
          width: 20%;
          display: flex;
          align-items: center;
          img{
            width: 31px;
            height: 31px;
          }
        }
        .text-con{
          width: 80%;
          font-size: 14px;
          display: flex;
          font-weight: bold;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

        }
      }
    }
    .product-footer{
      background-color: #fff;
      border-radius: 20px;
      margin-top: 20px;
      height: 160px;
      margin-bottom: 10px;
      ul{
        padding: 10px;
        li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          img{
            /*margin-right: 15px;*/
            margin: 13px 0px;
          }
        }
      }
    }
  }
</style>
