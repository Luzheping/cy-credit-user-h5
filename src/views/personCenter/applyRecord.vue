<template>
  <div class='applyRecord'>
    <div class="apply-content">
      <div class="c-item mrb-10" v-for="(item,i) in list" :key="i">
        <div class="c-item-header">
          <label>申请时间: {{item.applyTime}}</label>
          <label>
            <mt-button v-if="item.state === 1" size="small" style="height: 25px" type="primary" @click="closeLoan(item.id,0)">关闭</mt-button>
            <mt-button v-if="item.state === 0" size="small" style="height: 25px" type="primary" @click="closeLoan(item.id,1)">打开</mt-button>
          </label>
        </div>
        <div class="c-item-content">
          <div class="c-item-time">
            <div class="c-item-num">申请金额: {{item.loanAmount}}万</div>
            <div>申请期限: {{item.expire}}</div>
          </div>
        </div>
      </div>
      <!--<div v-for="(item,i) in list" :key="i" class="item-box mrb-10">-->
      <!--<div class="item ft1">申请金额<span class="ft1 mrl-10">{{item.loanAmount}}万</span></div>-->
      <!--<div class="item ft1">申请时间<span class="ft1 mrl-10">{{item.expire}}个月</span></div>-->
      <!--<div class="item mrt-10 ft1 teshu">-->
      <!--申请时间<span class="ft2 mrl-10">{{item.applyTime}}</span>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <div class="apply-footer">
      <mt-button type="primary" style="width: 100%;height: 100%;border-radius: 0px" @click="applyLoan">申请贷款</mt-button>
    </div>
  </div>
</template>

<script>
import { postApplyList, closeLoan } from '@/api/personCenter'
import { MessageBox } from 'mint-ui'
export default {
  name: 'ApplyRecord',
  data() {
    return {
      userId: this.$route.query.userId,
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      let params = {
        userId: this.userId
      }
      postApplyList(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          this.list = data.records
        }
      })
    },
    applyLoan() {
      this.$router.push({ path: '/index' })
    },
    closeLoan(id, state) {
      if (state === 0) {
        MessageBox.confirm('关闭后银行将无法查看到你的借款需求?').then(action => {
          closeLoan({ id: id, state: state }).then(res => {
            if (res.code === 200) {
              this.getList()
            }
          })
        })
      } else {
        MessageBox.confirm('确认打开该订单吗?').then(action => {
          closeLoan({ id: id, state: state }).then(res => {
            if (res.code === 200) {
              this.getList()
            }
          })
        })
      }
    }
  }
}
</script>

<style scoped lang='less'>
.applyRecord {
  height: 100%;
  .item-box {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    flex-wrap: wrap;
    border-top: 1px solid rgba(195, 198, 211, 0.2);
    border-bottom: 1px solid rgba(195, 198, 211, 0.2);
    .item {
      width: 50%;
    }
    .teshu {
      width: 100%;
    }
  }
  .ft1 {
    color: #353d53;
    font-size: 16px;
    font-weight: bold;
  }
  .ft2 {
    color: #87898e;
    font-size: 12px;
  }
}
.apply-content{
  height: 92%;
  overflow-y: scroll;
}
.apply-footer{
  /*position: fixed;*/
  /*bottom: 0;*/
  width: 100%;
  height: 8%;
}
.c-item {
  color: #353d53;
  font-size: 14px;
  font-weight: bold;
  /*font-weight: bold;*/
  /*border-top: 1px solid rgba(195, 198, 211, 0.2);*/
  /*border-bottom: 1px solid rgba(195, 198, 211, 0.2);*/
  background: #ffffff;
  padding: 10px 15px;
  .c-item-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    border-bottom: 1px solid rgba(195, 198, 211, 0.2);
  }
  .c-item-content{
    height: 60px;
    display: flex;
    flex-direction: row;
    .c-item-time{
      width: 70%;
      padding: 10px 0px;
      .c-item-num{
        padding-bottom: 20px;
      }
    }
    .c-item-icon{
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .img-size {
    width: 23px;
    float: right;
  }
}
</style>
