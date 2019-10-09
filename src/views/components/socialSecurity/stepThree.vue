<template>
  <div class='stepThree'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">职业身份</span>
          <span class="cl5">3/5</span>
        </div>
        <div class="mrl-10">
          <md-radio name="0" v-model="checked" label="有" />
          <md-radio name="1" v-model="checked" label="无" />
        </div>
        <div class="title clear mrb-40">
          <span class="fw">收入类型</span>
        </div>
        <div class="title clear mrb-40">
          <span class="fw">月薪</span>
        </div>
        <div class="title clear mrb-40">
          <span class="fw">工作年限</span>
        </div>
        <md-button type="primary">下一题</md-button>
        <div class="pre-btn">上一题</div>
      </div>
    </md-popup>
  </div>
</template>

<script>
export default {
  name: 'stepThree',
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
.stepThree {
  .content {
    height: 399px;
    border-radius: 14px 14px 0 0;
    background: #fff;
    padding:40px 20px 60px 20px;
    overflow: scroll;
    .title {
      font-size: 14px;
      height:20px;
      &::before{
        content: "";
        float: left;
        width:4px;
        height:14px;
        background: #3077FF;
        margin-top:3px;
        margin-right:5px;
      }
      &>span:nth-child(1){
        float: left;
      }
      &>span:nth-child(2){
        float: right;
      }
    }
    .pre-btn{
      color:#3077FF;
      font-size: 14px;
      text-align: center;
      margin-top:10px;
    }
  }
}
</style>
