<template>
  <div class='credit'>
    <div class="head">
      <p class="f1 mrb-10">最高可贷额度</p>
      <md-amount :value="maxAmount" :duration="800" transition class="amount"></md-amount>
      <div class="f2-box mrt-15">
        <span>1分钟申请</span>
        <span>1小时审批</span>
        <span>1工作日放款</span>
      </div>
      <md-button type="primary" class="btn-apply">立即申请</md-button>
      <div class="side tc">
        {{productName}}
      </div>
    </div>
    <div class="content">
      <p class="text mrb-10">贷款钱柜</p>
      <div class="list-box">
        <div class="list-child" v-for="(item,i) in productList" :key="i">
          <div class="middle">
            <p class="cf1">{{item.productName}}</p>
            <p class="cf2">
              <span>{{item.borrowCycle}}个月</span><span>{{item.maxAmount}}元</span>
            </p>
            <p class="cf3">
              <span>借款周期</span><span>最高可贷</span>
            </p>
          </div>
          <img :src="item.productLog" alt="" class="icon">
          <img src="../../assets/images/credit/arrar.png" alt="" class="arrar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryTop, postProductList } from '@/api/credit'
export default {
  name: 'Credit',
  data() {
    return {
      maxAmount: 0,
      productName: '',
      productList: []
    }
  },
  mounted() {
    let vm = this
    let params1 = {}
    let params2 = {
      current: 1,
      size: 10000
    }
    queryTop(params1).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.maxAmount = data.maxAmount / 10000
        vm.productName = data.productName
      }
    })
    postProductList(params2).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.productList = data.records
      }
    })
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.credit {
  background: #f9f9f9;
  .head {
    height: 220px;
    background: url("../../assets/images/applySuccess/head.png");
    background-size: 375px 220px;
    color: #ffffff;
    padding: 25px;
    .side {
      width: 60px;
      height: 30px;
      line-height: 30px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 100px 0px 0px 100px;
      position: absolute;
      top: 30px;
      right: 0;
    }
    .f1 {
      font-size: 14px;
    }
    .amount {
      font-size: 54px;
      font-weight: bold;
      &::after {
        content: "万";
        font-size: 17px;
        font-weight: normal;
        margin-left: 5px;
      }
    }
    .f2-box {
      font-size: 12px;
      width: 250px;
      display: flex;
      justify-content: space-between;
    }
    .md-button {
      width: 140px;
      height: 34px;
      border-radius: 100px;
      &::after {
        display: none;
      }
    }
    .btn-apply {
      background: #fff;
      color: #3077ff;
      font-size: 12px;
      margin: 0;
      margin-top: 25px;
    }
  }
  .content {
    padding: 20px;
    .text {
      font-size: 14px;
      color: #353d53;
    }
    .list-box {
      height: 308px;
      overflow: scroll;
      padding-bottom: 10px;
      & > .list-child:not(:nth-child(1)) {
        margin-top: 20px;
      }
      .list-child {
        height: 100px;
        background: #fff;
        border-radius: 4px;
        position: relative;
        .middle {
          position: absolute;
          left: 90px;
          .cf1 {
            font-size: 14px;
            font-weight: bold;
            color: #353d53;
            margin: 7px 0 10px 0;
          }
          .cf2 {
            font-size: 20px;
            font-weight: bold;
            color: #353d53;
            margin-bottom: 3px;
          }
          .cf3 {
            font-size: 14px;
            font-weight: 400;
            color: #abadb4;
          }
          .cf2 > span:nth-child(1),
          .cf3 > span:nth-child(1) {
            display: inline-block;
            width: 100px;
          }
          &:after {
            content: "";
            display: block;
            width: 1px;
            height: 34px;
            background: #f3f3f4;
            position: absolute;
            top: 48px;
            left: 79px;
          }
        }
        img.icon {
          width: 54px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 10px;
        }
        img.arrar {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
        }
      }
    }
  }
}
</style>
