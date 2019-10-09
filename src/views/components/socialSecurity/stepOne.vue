<template>
  <div class='stepOne'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">是否有社保</span>
          <span class="cl5">1/5</span>
        </div>
        <div class="mrl-10">
          <md-radio name="0" v-model="checked" label="有" />
          <md-radio name="1" v-model="checked" label="无" />
        </div>
        <div class="pre-btn">上一题</div>
      </div>
    </md-popup>
  </div>
</template>

<script>
export default {
  name: 'StepOne',
  data() {
    return {
      isPopupShow: false,
      checked: '0'
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
.stepOne {
  .content {
    height: 399px;
    border-radius: 14px 14px 0 0;
    background: #fff;
    padding: 40px 20px 60px 20px;
    .title {
      font-size: 14px;
      height: 20px;
      &::before {
        content: "";
        float: left;
        width: 4px;
        height: 14px;
        background: #3077ff;
        margin-top: 3px;
        margin-right: 5px;
      }
      & > span:nth-child(1) {
        float: left;
      }
      & > span:nth-child(2) {
        float: right;
      }
    }
    .pre-btn {
      color: #3077ff;
      font-size: 14px;
      text-align: center;
      margin-top: 100px;
    }
  }
}
</style>
