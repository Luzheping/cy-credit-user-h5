<template>
  <div class='applySuccess'>
    <div class="head">
      <img src="../../assets/images/applySuccess/head.png" alt="">
    </div>
    <div class="content">
      <img src="../../assets/images/applySuccess/icon.png" alt="">
      <p class="text">最高可贷</p>
      <md-amount :value="val" :duration="800" transition class="amount"></md-amount>
      <md-button type="primary" class="btn-apply" @click="goApply">申请信用贷款</md-button>
      <md-button type="primary" class="btn-contact" @click="goContact">请银行联系我</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplySuccess',
  data() {
    return {
      val: window.amount / 10000
    }
  },
  mounted() {
  },
  methods: {
    goContact() {
      let vm = this
      vm.$router.push('/contact')
    },
    goApply() {
      let vm = this
      vm.$router.push('/credit')
    }
  }
}
</script>

<style scoped lang='less'>
.applySuccess {
  background: #f9f9f9;
  .head {
    img {
      height: 250px;
    }
  }
  .content {
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 335px;
    height: 400px;
    text-align: center;
    img {
      width: 67px;
      margin-top: 38px;
    }
    .text {
      margin: 10px 0;
      color: #62636a;
      font-size: 14px;
    }
    .amount {
      color: #353d53;
      font-size: 36px;
      font-weight: bold;
      &::after {
        content: "万";
      }
    }
    .md-button {
      width: 260px;
      height: 40px;
      border-radius: 100px;
      &::after {
        display: none;
      }
    }
    .btn-apply {
      margin-top: 40px;
    }
    .btn-contact {
      background: #fff;
      border: 1px solid rgba(48, 119, 255, 1);
      color: #3077ff;
    }
  }
}
</style>
