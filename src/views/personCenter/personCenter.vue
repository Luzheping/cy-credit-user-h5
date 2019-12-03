<template>
  <div class='personCenter'>
    <div class="head">
      <div class="head-info">
        <p class="ft1">江小北</p>
        <p class="ft1 mrt-10">13982717473</p>
      </div>
      <div class="head-detail">
        <div @click="handleContact">
          <p class="ft2 tc">1次</p>
          <p class="mrt-10 ft3">联系过我</p>
        </div>
        <div @click="handleCallback">
          <p class="ft2 tc">1次</p>
          <p class="mrt-10 ft3">回拨记录</p>
        </div>
        <div @click="handleApply">
          <p class="ft2 tc">1次</p>
          <p class="mrt-10 ft3">申请记录</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="mrt-50 item-box">
        <span class="bf"></span>
        <span class="ft4">免打扰设置</span>
        <mt-switch v-model="value" class="mtswitch"></mt-switch>
      </div>
      <div class="mrt-20 item-box" @click="handleModPhone">
        <span class="bf"></span>
        <span class="ft4">修改手机号</span>
        <img src="../../assets/images/personCenter/jiantou.png" alt="" class="jiantou">
      </div>
      <!-- <div class="mrt-20 item-box">
        <span class="bf"></span>
        <span class="ft4">投诉与建议</span>
        <img src="../../assets/images/personCenter/jiantou.png" alt="" class="jiantou">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCenter',
  data() {
    return {

    }
  },
  methods: {
    handleModPhone() {
      this.$router.push('/modPhone')
    },
    handleContact() {
      this.$router.push('/contactMe')
    },
    handleCallback() {
      this.$router.push('/callbackRecord')
    },
    handleApply() {
      this.$router.push('/applyRecord')
    }
  }
}
</script>

<style scoped lang='less'>
.personCenter {
  font-size: 14px;
  height: 100%;
  background: #fff;
  .head {
    background: url("../../assets/images/personCenter/headbg.png");
    height: 195px;
    position: relative;
    top: -30px;
    &-info {
      position: absolute;
      top: 75px;
      left: 100px;
      .ft1 {
        color: #ffffff;
        font-size: 14px;
      }
    }
    &-detail {
      width: 335px;
      height: 75px;
      position: absolute;
      top: 160px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0px 2px 4px rgba(207, 214, 216, 0.16);
      .ft2 {
        color: #568fea;
      }
      .ft3 {
        color: #353d53;
        font-weight: bold;
      }
    }
  }
  .content {
    height: calc(100% - 210px);
    .item-box {
      padding: 0 15px;
      height: 50px;
      line-height: 50px;
      position: relative;
      border-bottom: 1px solid rgba(195, 198, 211, 0.2);
    }
    .ft4 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 30px;
    }
    .bf {
      width: 4px;
      height: 13px;
      background: #62636a;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .jiantou {
      width: 9px;
      float: right;
      margin-top: 14px;
    }
    .mtswitch {
      float: right;
      top: 7px;
    }
  }
}
</style>
