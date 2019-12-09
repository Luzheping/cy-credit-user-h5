<template>
  <div class='modPhone'>
    <md-field>
      <md-input-item ref="name" preview-type="text" v-model="phone" title="新手机号" placeholder="请输入手机号" maxlength="11" is-title-latent @change="handleChange" @blur="scrollVal">
        <div class="ft4" slot="right" @click="handleGetCode">{{btnContent}}</div>
      </md-input-item>
      <md-input-item ref="name" preview-type="text" v-model="verifyCode" title="短信验证码" placeholder="请输入短信验证码" is-title-latent @change="handleChange" @blur="scrollVal"></md-input-item>
      <md-input-item ref="name" preview-type="text" v-model="imgCode" title="图形验证码" placeholder="请输入图形验证码" is-title-latent @change="handleChange" @blur="scrollVal">
        <img slot="right" :src="pic" @click="handleVerify" style="width:80px;" />
      </md-input-item>
    </md-field>
    <md-button type="primary" @click="handleSubmit" v-show="flag">提交修改</md-button>
    <md-button type="primary" class="btn-g" v-show="!flag">提交修改</md-button>
  </div>
</template>

<script>
import { scrollTo } from '@/libs/utils'
import { Toast } from 'mand-mobile'
import { querySendSms, queryVerify, postSave } from '@/api/modPhone'
export default {
  name: 'ModPhone',
  data() {
    return {
      phone: '',
      verifyCode: '',
      imgCode: '',
      flag: false,
      btnContent: '获取验证码',
      time: 0,
      pic: ''
    }
  },
  mounted() {
    this.handleVerify()
  },
  methods: {
    scrollVal() {
      scrollTo()
    },
    handleChange() {
      let vm = this
      if (vm.phone && vm.verifyCode && vm.imgCode) {
        vm.flag = true
        return
      }
      vm.flag = false
    },
    handleVerify() {
      queryVerify({})
        .then(res => {
          if (res.code === 200) {
            var data = res.data
            this.pic = data
          }
        })
    },
    // 点击获取验证码
    handleGetCode() {
      var vm = this
      var myreg = /^[1][3-9][0-9]{9}$/
      var params = {
        cellPhone: vm.phone
      }
      if (!vm.phone) {
        Toast({
          content: '手机号码不能为空',
          position: 'bottom',
          duration: 3000
        })
        return
      }
      if (!myreg.test(vm.phone)) {
        Toast({
          content: '手机号码格式错误',
          position: 'bottom',
          duration: 3000
        })
        return
      }
      if (this.disabled) {
        return
      }
      querySendSms(params)
        .then(res => {
          if (res.status === 200) {
            var data = res.data
            Toast({
              content: data.message,
              position: 'bottom',
              duration: 3000
            })
          }
        })
      this.time = 60
      this.timer()
    },
    // 定时器
    timer() {
      if (this.time > 0) {
        this.time--
        this.btnContent = this.time + 's后重新获取'
        this.disabled = true
        var timer = setTimeout(this.timer, 1000)
      } else if (this.time === 0) {
        this.btnContent = '获取验证码'
        clearTimeout(timer)
        this.disabled = false
      }
    },
    handleSubmit() {
      let vm = this
      let myreg = /^[1][3-9][0-9]{9}$/
      let params = {
        phone: vm.phone,
        verifyCode: vm.verifyCode,
        imageCode: vm.imgCode
      }
      if (!myreg.test(vm.phone)) {
        Toast({
          content: '手机号码格式错误',
          position: 'bottom',
          duration: 3000
        })
        return
      }
      postSave(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          console.log(data)
          this.$router.push('/personCenter')
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.modPhone {
  height: 100%;
  background: #fff;
  .ft4 {
    font-size: 12px;
    color: #3077ff;
  }
  .md-button {
    width: 320px;
    border-radius: 2px;
  }
  .btn-g {
    background: rgba(0, 122, 255, 1);
    opacity: 0.3;
  }
}
</style>
