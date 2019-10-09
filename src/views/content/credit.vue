<template>
  <div class='credit'>
    <div class="head">
      <p class="f1 mrb-10">最高可贷额度</p>
      <md-amount :value="val" :duration="800" transition class="amount"></md-amount>
      <div class="f2-box mrt-15">
        <span>1分钟申请</span>
        <span>1小时审批</span>
        <span>1工作日放款</span>
      </div>
      <md-button type="primary" class="btn-apply">立即申请</md-button>
    </div>
    <div class="content">
      <p class="text mrb-10">贷款钱柜</p>
      <div class="list-box">
        <div class="list-child">
          <div class="middle">
            <p class="cf1">会员贷</p>
            <p class="cf2">
              <span>3个月</span><span>10000元</span>
            </p>
            <p class="cf3">
              <span>借款周期</span><span>最高可贷</span>
            </p>
          </div>
          <img src="../../assets/images/credit/icon.png" alt="" class="icon">
          <img src="../../assets/images/credit/arrar.png" alt="" class="arrar">
        </div>
        <div class="list-child">
          <div class="middle">
            <p class="cf1">会员贷</p>
            <p class="cf2">
              <span>3个月</span><span>10000元</span>
            </p>
            <p class="cf3">
              <span>借款周期</span><span>最高可贷</span>
            </p>
          </div>
          <img src="../../assets/images/credit/icon.png" alt="" class="icon">
          <img src="../../assets/images/credit/arrar.png" alt="" class="arrar">
        </div>
        <div class="list-child">
          <div class="middle">
            <p class="cf1">会员贷</p>
            <p class="cf2">
              <span>3个月</span><span>10000元</span>
            </p>
            <p class="cf3">
              <span>借款周期</span><span>最高可贷</span>
            </p>
          </div>
          <img src="../../assets/images/credit/icon.png" alt="" class="icon">
          <img src="../../assets/images/credit/arrar.png" alt="" class="arrar">
        </div>
        <div class="list-child">
          <div class="middle">
            <p class="cf1">会员贷</p>
            <p class="cf2">
              <span>3个月</span><span>10000元</span>
            </p>
            <p class="cf3">
              <span>借款周期</span><span>最高可贷</span>
            </p>
          </div>
          <img src="../../assets/images/credit/icon.png" alt="" class="icon">
          <img src="../../assets/images/credit/arrar.png" alt="" class="arrar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Credit',
  data() {
    return {
      val: 1000
    }
  },
  mounted() {
    setTimeout(() => {
      this.val = 1500
      setTimeout(() => {
        this.val = 500
      }, 2000)
    }, 2000)
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.credit {
  background: #f9f9f9;
  .head {
    height: 250px;
    background: url("../../assets/images/applySuccess/head.png");
    background-size: 375px 250px;
    color: #ffffff;
    padding: 25px;
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
      width: 74px;
      height: 24px;
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
      margin-top: 35px;
    }
  }
  .content {
    padding: 20px;
    .text {
      font-size: 14px;
      color: #353d53;
    }
    .list-box {
      height: 348px;
      overflow: scroll;
      padding-bottom:10px;
      &>.list-child:not(:nth-child(1)){
        margin-top:20px;
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
            color:#353D53;
            margin:7px 0 10px 0;
          }
          .cf2 {
            font-size: 20px;
            font-weight: bold;
            color:#353D53;
            margin-bottom:3px;
          }
          .cf3 {
            font-size: 14px;
            font-weight: 400;
            color:#ABADB4;
          }
          .cf2>span:nth-child(1),.cf3>span:nth-child(1){
            display: inline-block;
            width: 100px;
          }
          &:after{
            content: "";
            display: block;
            width:1px;
            height:34px;
            background: #F3F3F4;
            position: absolute;
            top:48px;
            left:79px;
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
