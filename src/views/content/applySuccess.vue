<template>
  <div class='applySuccess'>
    <div class="head">
      <img src="../../assets/images/applySuccess/head.png" alt="">
    </div>
    <div class="content">
      <img src="../../assets/images/applySuccess/icon.png" alt="">
      <p class="text">最高可贷</p>
      <md-amount :value="val" :duration="800" transition class="amount"></md-amount>
      <p class="tips">系统已将您的需求发送给银行客户经理</p>
      <p class="text">请保持您的手机畅通</p>
      <div class="parent">
        <div class="son-1">
          <span></span>
          <div>平台不向您收取任何费用</div>
        </div>
        <div class="son-2">
          <span></span>
          <div>除银行利息外，向您收取任何费用的“客户经理”均有可能是中介人员，请到个人中心-联系过我的界面投诉该客户经理”。</div>
        </div>
      </div>
      <div class="apply-footer">
        <md-button type="primary" class="btn-apply" @click="goApply">申请信用贷款</md-button>
        <md-button type="primary" class="btn-contact" @click="goContact">返回</md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplySuccess',
  data() {
    return {
      val: window.amount
    }
  },
  mounted() {
  },
  methods: {
    goContact() {
      this.$router.go(-1)
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
    min-height: 400px;
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
      margin-bottom: 10px;
      color: #353d53;
      font-size: 36px;
      font-weight: bold;
      &::after {
        content: "元";
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
      width: 40%;
    }
    .btn-contact {
      width: 40%;
      background: #fff;
      border: 1px solid rgba(48, 119, 255, 1);
      color: #3077ff;
    }
  }
}
.apply-footer{
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
}
.parent {
  margin:15px 35px;
  padding-top: 15px;
  text-align: left;
  color:#62636A;
  line-height: 18px;
  border-top:2px dashed #EAEAEA;
  .son-1,.son-2{
    position: relative;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
  }
  .son-1 > span,
  .son-2 > span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background: rgba(195, 198, 211, 1);
    border-radius: 50%;
    position: absolute;
    /*top:7px;*/
  }
  .son-1 > div,
  .son-2 > div{
    display: inline-block;
    margin-left: 15px;
  }
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
</style>
