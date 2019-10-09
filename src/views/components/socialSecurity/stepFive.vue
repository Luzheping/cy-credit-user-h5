<template>
  <div class='stepFour'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">名下是否有车</span>
          <span class="cl5">5/5</span>
        </div>
        <div class="title clear mrb-40">
          <span class="fw">车辆价值 (万元)</span>
        </div>
        <md-button type="primary">提交</md-button>
      </div>
    </md-popup>
  </div>
</template>

<script>
export default {
  name: 'stepFour',
  data() {
    return {
      isPopupShow: true,
      checked: '0'
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
.stepFour {
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
