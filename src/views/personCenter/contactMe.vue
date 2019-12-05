<template>
  <div class='contactMe'>
    <div class="head mrb-10">
      <div class="item">
        <span>时间</span>
        <img src="../../assets/images/contactMe/icon.png" alt="" class="icon-1">
      </div>
      <div class="item">
        <span>次数</span>
        <img src="../../assets/images/contactMe/icon.png" alt="" class="icon-1">
      </div>
    </div>
    <div class="content">
      <div class="c-item mrb-10">
        <span class="ft1">重庆银行</span>
        <span class="ft1 mrl-20">张经理</span>
        <span class="ft2 mrl-20">2019-01-02 21:25:00</span>
        <span class="ft1 mrl-20">5次</span>
        <img src="../../assets/images/contactMe/phone.png" alt="" class="img-size">
      </div>
      <div class="c-item mrb-10">
        <span class="ft1">重庆银行</span>
        <span class="ft1 mrl-20">张经理</span>
        <span class="ft2 mrl-20">2019-01-02 21:25:00</span>
        <span class="ft1 mrl-20">5次</span>
        <img src="../../assets/images/contactMe/phone.png" alt="" class="img-size">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.contactMe {
  .head {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(195, 198, 211, 0.2);
    .item {
      width: 30%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      color: #353d53;
      .icon-1 {
        width: 12px;
        margin-left: 5px;
      }
    }
  }
  .content {
    height: calc(100% - 40px - 10px);
    overflow: scroll;
    .c-item {
      border-top: 1px solid rgba(195, 198, 211, 0.2);
      border-bottom: 1px solid rgba(195, 198, 211, 0.2);
      padding: 10px 15px;
      .img-size {
        width: 23px;
        float: right;
      }
    }
  }
  .ft1 {
    color: #353d53;
    font-size: 16px;
    font-weight: bold;
  }
  .ft2 {
    color: #87898e;
    font-size: 12px;
    display: inline-block;
    height: 100%;
    line-height: 2;
  }
}
</style>
