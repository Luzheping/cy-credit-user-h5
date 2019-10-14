<template>
  <div class='index'>
    <div class="head" ref="head">
    </div>
    <div class="content" @scroll="handleScroll" ref="parent">
      <div class="shade" ref="child"></div>
      <div class="real-content">
        <div class="icon-box">
          <div v-for="(item,i) in iconList" :key="i">
            <img :src="item.src" alt="" class="mrb-5">
            <p class="mrb-5 fw ft1">{{item.num}}</p>
            <p class="ft2">{{item.name}}</p>
          </div>
        </div>
        <div>
          <md-field>
            <md-input-item ref="name" preview-type="text" value="张**" title="贷款金额" placeholder="您的期望贷款金额" is-title-latent>
              <div class="ft3" slot="right">万元</div>
            </md-input-item>
            <md-input-item ref="name" preview-type="text" value="张**" title="贷款期限" placeholder="您的期望贷款期限" is-title-latent>
              <div class="ft3" slot="right">个月</div>
            </md-input-item>
            <md-input-item ref="name" preview-type="text" value="张**" title="姓名" placeholder="您的姓名" is-title-latent></md-input-item>
            <md-input-item ref="name" preview-type="text" v-model="phone" title="手机号" placeholder="您的手机号" is-title-latent>
              <div class="ft4" slot="right" @click="handleGetCode">{{btnContent}}</div>
            </md-input-item>
            <md-input-item ref="name" preview-type="text" value="张**" title="验证码" placeholder="6位数验证码" is-title-latent></md-input-item>
          </md-field>
          <md-button type="primary">测算额度</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from '../assets/images/index/icon1.png'
import icon2 from '../assets/images/index/icon2.png'
import icon3 from '../assets/images/index/icon3.png'
import { queryStatistical, querySendSms } from '@/api/index'
import { Toast } from 'mand-mobile'
export default {
  name: 'Index',
  data() {
    return {
      btnContent: '获取验证码',
      time: 0,
      disabled: false,
      phone: '',
      iconList: [
        {
          src: icon1,
          num: '',
          name: '申请用户(人)'
        },
        {
          src: icon2,
          num: '',
          name: '入驻银行(家)'
        },
        {
          src: icon3,
          num: '',
          name: '注册客服(人)'
        }
      ]
    }
  },
  mounted() {
    let params = {}
    queryStatistical(params).then(res => {
      console.log(res)
      if (res.code === 200) {
        let data = res.data
        this.iconList[0].num = data.userApplyNum
        this.iconList[1].num = data.organApplyNum
        this.iconList[2].num = data.userRegisterNum
      }
    })
  },
  methods: {
    // 点击获取验证码
    handleGetCode() {
      var vm = this
      var myreg = /^[1][3-9][0-9]{9}$/
      console.log(vm.phone)
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
    handleScroll() {
      var parentScrollTop = this.$refs.parent.scrollTop
      var childH = this.$refs.child.scrollHeight
      if (parentScrollTop > 0 && parentScrollTop <= childH) {
        var a = parentScrollTop / childH
        this.$refs.head.style.opacity = 1 - a
      }
    }
  }
}
</script>

<style scoped lang='less'>
.index {
  height: 100%;
  .ft3 {
    font-size: 16px;
    color: #353d53;
  }
  .ft4 {
    font-size: 12px;
    color: #3077ff;
  }
  .head {
    width: 100%;
    height: 222px;
    background: url("../assets/images/index/title_bg.png");
    background-size: 100%;
  }
  .content {
    height: 100%;
    width: 100%;
    overflow: scroll;
    position: absolute;
    top: 0;
    .shade {
      width: 100%;
      height: 190px;
    }
    .real-content {
      height: 690px;
      border-radius: 15px 15px 0 0;
      background: #fff;
      .icon-box {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding-top: 20px;
        .ft1 {
          font-size: 16px;
        }
        .ft2 {
          font-size: 10px;
          color: #5d616e;
        }
        img {
          height: 31px;
        }
      }
    }
  }
  .md-button {
    width: 320px;
    border-radius: 2px;
  }
}
</style>
