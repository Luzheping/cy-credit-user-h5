<template>
  <div class='contact'>
    <div class="head">
      <img src="../../assets/images/applySuccess/head.png" alt="">
    </div>
    <div class="content">
      <img src="../../assets/images/contact/icon.png" alt="">
      <p class="tips">系统已将您的需求推荐给客服</p>
      <p class="text">请保持您的手机畅通</p>
      <md-button type="primary" class="btn-back">返回</md-button>
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
  methods: {}
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
    height: 400px;
    text-align: center;
    img {
      width: 94px;
      margin-top: 38px;
    }
    .tips {
      margin-top: 20px;
      color: #62636A;
      font-size:18px;
      font-weight:bold;
    }
    .text {
      margin: 20px 0;
      color: #62636A;
      font-size: 14px;
    }
    .md-button {
      width: 260px;
      height: 40px;
      border-radius: 100px;
      &::after{
        display: none;
      }
    }
    .btn-back{
      background: #fff;
      border:1px solid rgba(48,119,255,1);
      color:#3077FF;
      margin-top:60px;
    }
  }
}
</style>
