<template>
  <div class='socialSecurity'>
    <div class="num">
      <DigitRoll ref='digitroll' :rollDigits='digits' :flipStra="true" />
      <div class="ft">万</div>
    </div>
    <input type="text" v-model='digits'>
    <button @click='changeDigit'>click me</button>
  </div>
</template>

<script>
import DigitRoll from '@huoyu/vue-digitroll'
export default {
  name: 'SocialSecurity',
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
    changeDigit() {
      var digits = this.digits.split(',')
      this.$refs.digitroll.setDigit([{
        value: digits[0],
        dur: 600
      }, {
        value: digits[1],
        dur: 900
      }, {
        value: digits[2],
        dur: 1200
      }])
    }
  }
}
</script>

<style lang="less">
.d-roll-list {
  margin: 0 !important;
  width: 210px;
  height: 70px;
  font-size: 38px;
  color:#353D53;
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
.socialSecurity {
  .num {
    position: relative;
    width: 280px;
    background: url("../../assets/images/socialSecurity/num-bg.png") no-repeat;
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
      color:#353D53;
    }
  }
}
</style>
