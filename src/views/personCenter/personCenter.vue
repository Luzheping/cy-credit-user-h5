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
        <mt-switch v-model="state" class="mtswitch" @change="handleChange"></mt-switch>
      </div>
      <div class="mrt-20 item-box" @click="handleModPhone">
        <span class="bf"></span>
        <span class="ft4">修改手机号</span>
        <img src="../../assets/images/personCenter/jiantou.png" alt="" class="jiantou">
      </div>
      <!-- <div class="mrt-20 item-box">
        <span class="bf"></span>
        <span class="ft4">投诉与建议</span>
        <img src="../../assets/images/personCenter/jiantou.png" alt="" class="jiantou">
      </div> -->
    </div>
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
      customerName: '',
      id: '',
      mobile: '',
      state: false
    }
  },
  mounted() {
    let params = {}
    let vm = this
    queryUserStatus(params).then(res => {
      if (res.code === 200) {
        queryPersonalCenter(params).then(res => {
          if (res.code === 200) {
            let data = res.data
            vm.customerName = data.customerName
            vm.mobile = data.mobile
            vm.applyNum = data.applyNum
            vm.callBackNum = data.callBackNum
            vm.callNum = data.callNum
            vm.id = data.id
            if (data.state === 0) {
              vm.state = true
            } else {
              vm.state = false
            }
          }
        })
      } else {
        this.$router.push('/')
      }
    })
  },
  methods: {
    handleModPhone() {
      this.$router.push('/modPhone')
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
        disturb: vm.state ? 0 : 1
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
    background: url("../../assets/images/personCenter/headbg.png");
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
      width: 335px;
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
</style>
