<template>
  <div class='personCenter'>
    <div class="head">
      <div class="head-info">
        <p class="ft1">{{customerName}}</p>
        <p class="ft1 mrt-10">{{mobile}}</p>
      </div>
      <div class="head-detail">
        <div @click="handleContact">
          <p class="ft2 tc">{{callNum}}次</p>
          <p class="mrt-10 ft3">联系过我</p>
        </div>
        <div @click="handleView">
          <p class="ft2 tc">{{viewNum}}次</p>
          <p class="mrt-10 ft3">查看过我</p>
        </div>
        <div @click="handleCallback">
          <p class="ft2 tc">{{callBackNum}}次</p>
          <p class="mrt-10 ft3">回拨记录</p>
        </div>
        <div @click="handleApply">
          <p class="ft2 tc">{{applyNum}}次</p>
          <p class="mrt-10 ft3">申请记录</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="mrt-50 item-box">
        <span class="bf"></span>
        <span class="ft4">免打扰设置</span>
        <div style="white-space: nowrap;width: 100%">
          <input type="text" style="margin-left: 150px" placeholder="请选择" v-model="params.startTime">
          <!--<div class="icon" style="right:46%"></div>-->
          <div class="box" style="right: 158px;" @click="handleTime('start')"></div>
          <span style="margin-left:5px;font-size: 16px;">-</span>
          <input type="text" style="margin-left: 5px" placeholder="请选择" v-model="params.endTime">
          <!--<div class="icon" style="right: 28%"></div>-->
          <div class="box" style="right: 87px" @click="handleTime('end')"></div>
          <mt-switch v-model="state" class="mtswitch" @change="handleChange"></mt-switch>
        </div>
      </div>
      <div class="mrt-20 item-box" @click="handleModPhone">
        <span class="bf"></span>
        <span class="ft4">修改手机号</span>
        <img src="../../assets/images/personCenter/jiantou.png" alt="" class="jiantou">
      </div>
      <div class="mrt-20 item-box" @click="handleAdvise">
        <span class="bf"></span>
        <span class="ft4">意见与建议</span>
        <img src="../../assets/images/personCenter/jiantou.png" alt="" class="jiantou">
      </div>
      <div class="mrt-20 item-box" @click="handleHelpLoan">
        <span class="bf"></span>
        <span class="ft4">贷款协助</span>
        <img src="../../assets/images/personCenter/jiantou.png" alt="" class="jiantou">
      </div>
    </div>
    <mt-datetime-picker
      ref="picker"
      v-model="pickerVisible"
      type="time"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
import { queryUserStatus, queryPersonalCenter, setDisturb } from '@/api/personCenter'
export default {
  name: 'PersonCenter',
  data() {
    return {
      applyNum: 0,
      callBackNum: 0,
      callNum: 0,
      viewNum: 0,
      customerName: '',
      id: '',
      mobile: '',
      state: false,
      params: {
        startTime: '00:00',
        endTime: '12:00'
      },
      cache: {
        startOrEnd: ''
      },
      pickerVisible: ''
    }
  },
  mounted() {
    let params = {}
    let vm = this
    queryUserStatus(params).then(res => {
      if (res.code === 200) {
        if (res.data === 'SUCCESS') {
          queryPersonalCenter(params).then(res => {
            if (res.code === 200) {
              let data = res.data
              vm.customerName = data.customerName
              vm.mobile = data.mobile
              vm.applyNum = data.applyNum
              vm.callBackNum = data.callBackNum
              vm.viewNum = data.viewNum
              vm.callNum = data.callNum
              vm.id = data.id
              if (data.startTime) {
                vm.params.startTime = data.startTime
              }
              if (data.endTime) {
                vm.params.endTime = data.endTime
              }
              if (data.state === 1) {
                vm.state = true
              } else {
                vm.state = false
              }
            }
          })
        } else {
          this.$router.push('/')
        }
      }
    })
  },
  methods: {
    handleTime(val) {
      this.cache.startOrEnd = val
      this.$refs.picker.open()
    },
    handleConfirm() {
      if (this.cache.startOrEnd === 'start') {
        this.params.startTime = this.pickerVisible
      } else if (this.cache.startOrEnd === 'end') {
        this.params.endTime = this.pickerVisible
      }
    },
    handleModPhone() {
      this.$router.push('/modPhone')
    },
    handleAdvise() {
      this.$router.push({ path: '/platformAdvise', query: { type: '0', userId: this.id } })
    },
    handleHelpLoan() {
      this.$router.push({ path: '/helpLoan', query: { type: '1', userId: this.id } })
    },
    handleContact() {
      this.$router.push({
        path: '/contactMe',
        query: { userId: this.id }
      })
    },
    handleCallback() {
      this.$router.push({
        path: '/callbackRecord',
        query: { userId: this.id }
      })
    },
    handleView() {
      this.$router.push({
        path: '/viewMe',
        query: { userId: this.id }
      })
    },
    handleApply() {
      this.$router.push({
        path: '/applyRecord',
        query: { userId: this.id }
      })
    },
    handleChange() {
      let vm = this
      let params = {
        userId: vm.id,
        disturb: vm.state ? 1 : 0,
        startTime: this.params.startTime,
        endTime: this.params.endTime
      }
      setDisturb(params).then(res => {
        if (res.code === 200) {
          // let data = res.data

        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.personCenter {
  font-size: 14px;
  height: 100%;
  background: #fff;
  .head {
    background: url("../../assets/images/personCenter/headbg.jpg");
    height: 195px;
    position: relative;
    top: -30px;
    &-info {
      position: absolute;
      top: 75px;
      left: 100px;
      .ft1 {
        color: #ffffff;
        font-size: 14px;
      }
    }
    &-detail {
      width: 350px;
      height: 75px;
      position: absolute;
      top: 160px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0px 2px 4px rgba(207, 214, 216, 0.16);
      .ft2 {
        color: #568fea;
      }
      .ft3 {
        color: #353d53;
        font-weight: bold;
      }
    }
  }
  .content {
    // height: calc(100% - 210px);
    .item-box {
      padding: 0 15px;
      height: 50px;
      line-height: 50px;
      position: relative;
      border-bottom: 1px solid rgba(195, 198, 211, 0.2);
    }
    .ft4 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 30px;
    }
    .bf {
      width: 4px;
      height: 13px;
      background: #62636a;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .jiantou {
      width: 9px;
      float: right;
      margin-top: 14px;
    }
    .mtswitch {
      float: right;
      top: 7px;
    }
  }
}
.icon {
  width: 0;
  height: 0;
  border-top: 6px solid rgba(216, 216, 216, 1);
  border-right: 6px solid #ffffff;
  border-bottom: 6px solid #ffffff;
  border-left: 6px solid #ffffff;
  position: absolute;
  top: 22px;
}

.box {
  width: 15%;
  height: 50px;
  position: absolute;
  top: 0;
  text-align: center;
}
input{
  width: 15%;
  height: 22px;
  border: 1px solid #ddd;
  outline: none;
  background: transparent;
  font-size:12px;
  font-family:Arial;
  font-weight:400;
  color:rgba(53,61,83,1);
  opacity:1;
}
</style>
