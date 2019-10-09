<template>
  <div class='dynamic-num'>
    <div class="header">
      <p class="title">预估贷款额度 (万元)</p>
      <div class="num">
        <DigitRoll ref='digitroll' :rollDigits='digits' :flipStra="true" />
        <div class="ft">万</div>
      </div>
    </div>
    <p class="tips tc mrt-10">回答5个问题，即可评估您的可贷款额度</p>
  </div>
</template>

<script>
import DigitRoll from '@huoyu/vue-digitroll'
export default {
  name: 'Dynamic-num',
  data() {
    return {
      digits: '000'
    }
  },
  components: {
    DigitRoll
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less">
.d-roll-list {
  margin: 0 !important;
  width: 210px;
  height: 70px;
  font-size: 38px;
  color: #353d53;
  font-weight: bold;
  li {
    position: relative;
    &.d-roll-item::after {
      content: "";
      width: 1px;
      height: 41px;
      position: absolute;
      top: 14px;
      right: 0;
      background: #aabdde;
    }
    height: auto;
  }
}
</style>

<style scoped lang='less'>
.dynamic-num {
  background: #3077FF;
  height:293px;
  padding-top:60px;
  .header {
    width:317px;
    height:129px;
    margin:0 auto;
    text-align: center;
    background: #1B62EA;
    border-radius:8px;
    .title{
      font-size: 14px;
      color: #fff;
      padding-top: 10px;
      &::before,&::after{
        display: inline-block;
        content: "";
        background: #fff;
        width:10px;
        height:2px;
        margin:0 10px 3px;
      }
    }
    .num {
      position: relative;
      width: 280px;
      margin:0 auto;
      margin-top:-7px;
      background: url("../../assets/images/dynamic-num/num-bg.png") no-repeat;
      background-size: 280px 70px;
      .ft {
        width: 70px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 38px;
        position: absolute;
        top: 0;
        right: 0;
        color: #353d53;
      }
    }
  }
  .tips{
    color: #F9E382;
  }
}
</style>
