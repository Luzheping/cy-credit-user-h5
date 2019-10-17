<template>
  <div class='socialSecurity'>
    <Dynamicnum :amount="amount" />
    <StepOne :isPopupOne="isPopupOne" :orderId="orderId" @handleChange="handleChange" />
    <StepTwo :isPopupTwo="isPopupTwo" :orderId="orderId" :amount="amount" @handleChange="handleChange" />
    <StepThree :isPopupThree="isPopupThree" :orderId="orderId" @handleChange="handleChange" />
    <StepFour :isPopupFour="isPopupFour" :orderId="orderId" @handleChange="handleChange" />
    <StepFive :isPopupFive="isPopupFive" :orderId="orderId" @handleChange="handleChange" />
  </div>
</template>

<script>
import Dynamicnum from '@/components/dynamic-num/dynamic-num'
import StepOne from '../components/socialSecurity/stepOne'
import StepTwo from '../components/socialSecurity/stepTwo'
import StepThree from '../components/socialSecurity/stepThree'
import StepFour from '../components/socialSecurity/stepFour'
import StepFive from '../components/socialSecurity/stepFive'
export default {
  name: 'SocialSecurity',
  data() {
    return {
      amount: this.$route.query.amount,
      orderId: this.$route.query.orderId,
      isPopupOne: true,
      isPopupTwo: false,
      isPopupThree: false,
      isPopupFour: false,
      isPopupFive: false
    }
  },
  components: {
    Dynamicnum,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive
  },
  mounted() {
  },
  methods: {
    handleChange(val, data) {
      let vm = this
      switch (val) {
        case '1':
          vm.amount = data.amount
          vm.orderId = data.orderId
          vm.isPopupOne = false
          vm.isPopupTwo = true
          vm.isPopupThree = false
          vm.isPopupFour = false
          vm.isPopupFive = false
          break
        case '2':
          vm.amount = data.amount
          vm.orderId = data.orderId
          vm.isPopupOne = false
          vm.isPopupTwo = false
          vm.isPopupThree = true
          vm.isPopupFour = false
          vm.isPopupFive = false
          break
        case '3':
          vm.amount = data.amount
          vm.orderId = data.orderId
          vm.isPopupOne = false
          vm.isPopupTwo = false
          vm.isPopupThree = false
          vm.isPopupFour = true
          vm.isPopupFive = false
          break
        case '4':
          vm.amount = data.amount
          vm.orderId = data.orderId
          vm.isPopupOne = false
          vm.isPopupTwo = false
          vm.isPopupThree = false
          vm.isPopupFour = false
          vm.isPopupFive = true
          break
        case '5':
          vm.amount = data.amount
          vm.orderId = data.orderId
          vm.$router.push('/applySuccess')
          break
      }
    }
  }
}
</script>

<style scoped lang='less'>
.socialSecurity {
}
</style>
