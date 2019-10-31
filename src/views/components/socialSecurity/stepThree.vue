<template>
  <div class='stepThree'>
    <md-popup v-model="isPopupShow" position="bottom" :has-mask="false">
      <div class="content">
        <div class="title clear mrb-40">
          <span class="fw">职业身份</span>
          <span class="cl5">3/5</span>
        </div>
        <div class="mrl-10">
          <md-radio name="1" v-model="checked" label="上班族" />
          <md-radio name="2" v-model="checked" label="企业主" />
        </div>
        <div v-show="checked==1">
          <div class="title clear mrb-40">
            <span class="fw">收入类型</span>
            <Select :queryList="incomeData" @handleSure="handleSure1" />
          </div>
          <div class="title clear mrb-40">
            <span class="fw">月薪</span>
            <Select :queryList="mothSalaryData" @handleSure="handleSure2" />
          </div>
          <div class="title clear mrb-40">
            <span class="fw">工作年限</span>
            <Select :queryList="workYearData" @handleSure="handleSure3" />
          </div>
        </div>
        <div v-show="checked==2">
          <div class="title clear mrb-40">
            <span class="fw">成立时间</span>
            <SelectDate @handleSure="handleSure4" />
          </div>
          <div class="title clear mrb-40">
            <span class="fw">营业额</span>
            <Select :queryList="turnoverData" @handleSure="handleSure5" />
          </div>
        </div>
        <md-button type="primary" @click="handleNext">下一题</md-button>
      </div>
    </md-popup>
  </div>
</template>

<script>
import moment from 'moment'
import { Select, SelectDate } from '@/components'
import { postWork, getConstant } from '@/api/socialSecurity'
export default {
  name: 'stepThree',
  props: {
    isPopupThree: {
      default: false
    },
    orderId: {
      default: ''
    }
  },
  components: {
    Select,
    SelectDate
  },
  data() {
    return {
      isPopupShow: this.isPopupThree,
      checked: '1',
      incomeData: '', //  收入类型
      mothSalaryData: '', //  月薪
      workYearData: '', // 工作年限
      turnoverData: '', // 营业额
      incomeType: 0,
      salary: 0,
      workYear: 0,
      establishTime: moment().format('YYYY-MM-DD'),
      turnover: 0
    }
  },
  mounted() {
    let vm = this
    let params1 = {
      coding: 'income'
    }
    let params2 = {
      coding: 'mothSalary'
    }
    let params3 = {
      coding: 'workYear'
    }
    let params4 = {
      coding: 'turnover'
    }
    getConstant(params1).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.incomeData = data
        vm.incomeType = data[0].key
      }
    })
    getConstant(params2).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.mothSalaryData = data
        vm.salary = data[0].key
      }
    })
    getConstant(params3).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.workYearData = data
        vm.workYear = data[0].key
      }
    })
    getConstant(params4).then(res => {
      if (res.code === 200) {
        let data = res.data
        vm.turnoverData = data
        // vm.turnoverData = data[0].key
      }
    })
  },
  watch: {
    checked() {
      this.$emit('handleChange', '3')
    },
    isPopupThree(val) {
      this.isPopupShow = val
    }
  },
  methods: {
    handleSure1(val) {
      this.incomeType = val.key
    },
    handleSure2(val) {
      this.salary = val.key
    },
    handleSure3(val) {
      this.workYear = val.key
    },
    handleSure4(val) {
      this.establishTime = val
    },
    handleSure5(val) {
      this.turnover = val.key
    },
    handleNext() {
      let vm = this
      let params = {
        work: {
          type: vm.checked,
          incomeType: vm.incomeType,
          salary: vm.salary,
          workYear: vm.workYear,
          establishTime: vm.establishTime,
          turnover: vm.turnover
        },
        hasWork: true,
        id: vm.orderId,
        amount: window.amount
      }
      postWork(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          vm.$emit('handleChange', '3', data)
          window.amount = data.amount
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.stepThree {
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
  }
}
</style>
