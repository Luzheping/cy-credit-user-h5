<template>
  <div class='stepFour'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">名下是否有房产</span>
          <span class="cl5">4/5</span>
          <Select :queryList="houseData" @handleSure="handleSure" />
        </div>
        <div class="title clear mrb-40">
          <span class="fw">房产价值 (万元)</span>
          <md-input-item placeholder="请输入房产价值（万）" v-model="houseMoney"></md-input-item>
        </div>
        <div class="title clear mrb-40">
          <span class="fw">房产面积 (平方)</span>
          <md-input-item placeholder="请输入房产面积（平方）" v-model="houseArea"></md-input-item>
        </div>
        <md-button type="primary" @click="handleNext">下一题</md-button>
      </div>
    </md-popup>
  </div>
</template>

<script>
import { Select } from '@/components'
import { postHouse, getConstant } from '@/api/socialSecurity'
export default {
  name: 'stepFour',
  data() {
    return {
      isPopupShow: this.isPopupFour,
      houseData: '',
      type: 0,
      houseMoney: '',
      houseArea: ''
    }
  },
  components: {
    Select
  },
  props: {
    isPopupFour: {
      default: false
    },
    orderId: {
      default: ''
    }
  },
  watch: {
    isPopupFour(val) {
      this.isPopupShow = val
    }
  },
  mounted() {
    let vm = this
    let params = {
      coding: 'house'
    }
    getConstant(params).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.houseData = data
        vm.type = data[0].key
      }
    })
  },
  // mounted() {
  //   document.title = '房产信息'
  // },
  methods: {
    handleSure(val) {
      this.type = val.key
    },
    handleNext() {
      let vm = this
      let params = {
        house: {
          type: vm.type,
          houseMoney: vm.houseMoney,
          houseArea: vm.houseArea
        },
        hasHouse: true,
        id: vm.orderId,
        amount: window.amount
      }
      postHouse(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          vm.$emit('handleChange', '4', data)
          window.amount = data.amount
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.stepFour {
  .content {
    height: 399px;
    border-radius: 14px 14px 0 0;
    background: #fff;
    padding: 40px 20px 60px 20px;
    overflow: scroll;
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
      margin-top: 10px;
    }
  }
}
</style>
