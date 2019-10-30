<template>
  <div class='stepOne'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">是否有社保</span>
          <span class="cl5">1/5</span>
        </div>
        <div class="mrl-10">
          <md-radio name="1" label="有" v-model="checked" />
          <md-radio name="0" label="无" v-model="checked" />
        </div>
      </div>
    </md-popup>
  </div>
</template>

<script>
import { querySocial } from '@/api/socialSecurity'
export default {
  name: 'StepOne',
  props: {
    isPopupOne: {
      default: false
    },
    orderId: {
      default: ''
    }
  },
  data() {
    return {
      isPopupShow: this.isPopupOne,
      checked: ''
    }
  },
  watch: {
    checked() {
      let vm = this
      let params = {
        id: vm.orderId,
        socialSecurity: vm.checked
      }
      querySocial(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          vm.$emit('handleChange', '1', data)
        }
      })
    },
    isPopupOne(val) {
      this.isPopupShow = val
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
  }
}
</style>
