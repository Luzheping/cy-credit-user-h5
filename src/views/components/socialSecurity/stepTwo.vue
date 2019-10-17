<template>
  <div class='stepTwo'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">是否有公积金</span>
          <span class="cl5">2/5</span>
        </div>
        <div class="mrl-10">
          <md-radio name="0" v-model="checked" label="有" />
          <md-radio name="1" v-model="checked" label="无" />
        </div>
      </div>
    </md-popup>
  </div>
</template>

<script>
import { queryProvident } from '@/api/socialSecurity'
export default {
  name: 'stepTwo',
  props: {
    isPopupTwo: {
      default: false
    },
    orderId: {
      default: ''
    },
    amount: {
      default: ''
    }
  },
  data() {
    return {
      isPopupShow: this.isPopupTwo,
      checked: ''
    }
  },
  watch: {
    checked() {
      let vm = this
      let params = {
        id: vm.orderId,
        amount: vm.amount,
        houseProvident: vm.checked
      }
      queryProvident(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          vm.$emit('handleChange', '2', data)
          window.amount = data.amount
        }
      })
    },
    isPopupTwo(val) {
      this.isPopupShow = val
      if (val) {
        document.title = '公积金信息'
      }
    }
  },
  //   document.title = '公积金信息'
  methods: {
  }
}
</script>

<style scoped lang='less'>
.stepTwo {
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
  }
}
</style>
