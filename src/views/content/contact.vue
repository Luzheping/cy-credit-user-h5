<template>
  <div class='contact'>
    <div class="head">
      <img src="../../assets/images/applySuccess/head.png" alt="">
    </div>
    <div class="content">
      <img src="../../assets/images/contact/icon.png" alt="">
      <p class="tips">系统已将您的需求推荐给客服</p>
      <p class="text">请保持您的手机畅通</p>
      <div class="parent">
        <div class="son-1">
          <span></span>
          <div>平台不像您收取任何费用</div>
        </div>
        <div class="son-2">
          <span></span>
          <div>除银行利息外，向您收取任何费用的“客户经理”均有可能是中介人员，请联系我们并投诉该“客户经理”。</div>
        </div>
      </div>
      <md-button type="primary" class="btn-back" @click="goBack">返回</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
    }
  },
  methods: {
    goBack() {
      let vm = this
      vm.$router.push('/index')
    }
  }
}
</script>

<style scoped lang='less'>
.contact {
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
    height: 430px;
    text-align: center;
    .parent {
      margin:0 35px;
      padding-top: 15px;
      text-align: left;
      color:#62636A;
      border-top:2px dashed #EAEAEA;
      .son-1,.son-2{
        position: relative;
        font-size: 14px;
      }
      .son-1 > span,
      .son-2 > span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgba(195, 198, 211, 1);
        border-radius: 50%;
        position: absolute;
        top:7px;
      }
      .son-1 > div,
      .son-2 > div{
        display: inline-block;
        margin-left: 15px;
      }
    }
    img {
      width: 94px;
      margin-top: 38px;
    }
    .tips {
      margin-top: 20px;
      color: #62636a;
      font-size: 18px;
      font-weight: bold;
    }
    .text {
      margin: 20px 0;
      color: #62636a;
      font-size: 14px;
    }
    .md-button {
      width: 260px;
      height: 40px;
      border-radius: 100px;
      &::after {
        display: none;
      }
    }
    .btn-back {
      background: #fff;
      border: 1px solid rgba(48, 119, 255, 1);
      color: #3077ff;
      margin-top: 60px;
    }
  }
}
</style>
