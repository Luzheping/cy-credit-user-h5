<template>
  <div class='socialSecurity'>
    <Dynamicnum />
    <StepOne :isPopup="false"/>
    <StepTwo :isPopup="true"/>
    <StepThree :isPopup="true"/>
    <StepFour :isPopup="true"/>
    <StepFive :isPopup="true"/>
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
  }
}
</script>

<style scoped lang='less'>
.socialSecurity {
}
</style>
