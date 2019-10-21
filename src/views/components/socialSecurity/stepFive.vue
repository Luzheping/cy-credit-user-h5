<template>
  <div class='stepFive'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">名下是否有车</span>
          <span class="cl5">5/5</span>
           <Select :queryList="carData" @handleSure="handleSure" />
        </div>
        <div class="title clear mrb-40">
          <span class="fw">车辆价值 (万元)</span>
          <md-input-item placeholder="请输入房产价值（万）" v-model="carMoney"></md-input-item>
        </div>
        <md-button type="primary" @click="handleSubmit">提交</md-button>
      </div>
    </md-popup>
  </div>
</template>

<script>
import { Select } from '@/components'
import { postCar, getConstant } from '@/api/socialSecurity'
export default {
  name: 'StepFive',
  data() {
    return {
      isPopupShow: this.isPopupFive,
      carData: '',
      type: 0,
      carMoney: ''
    }
  },
  components: {
    Select
  },
  props: {
    isPopupFive: {
      default: false
    },
    orderId: {
      default: ''
    }
  },
  watch: {
    isPopupFive(val) {
      this.isPopupShow = val
    }
  },
  mounted() {
    let vm = this
    let params = {
      coding: 'car'
    }
    getConstant(params).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.carData = data
        vm.type = data[0].key
      }
    })
  },
  methods: {
    handleSure(val) {
      this.type = val.key
    },
    handleSubmit() {
      let vm = this
      let params = {
        car: {
          type: vm.type,
          carMoney: vm.carMoney
        },
        hasCar: true,
        id: vm.orderId,
        amount: window.amount
      }
      postCar(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          window.amount = data.amount
          vm.$emit('handleChange', '5', data)
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.stepFive {
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
