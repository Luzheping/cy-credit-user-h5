<template>
  <div class='callbackRecord'>
    <div class="head">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">近一个月</mt-tab-item>
        <mt-tab-item id="2">一个月前</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="content">
      <mt-tab-container v-model="selected" class="mrt-10">
        <mt-tab-container-item id="1">
          <div v-for="(item,i) in list" :key="i" class="item">
            <img src="../../assets/images/callbackRecord/phone.png" alt="" class="icon-1">
            <span class="ft3 mrl-20 shenglue">{{item.organName}}</span>
            <span class="ft3 mrl-20 shenglue">{{item.organManageName}}</span>
            <span class="ft4 right">{{item.concatDate+' '+item.concatTime}}</span>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div v-for="(item,i) in list" :key="i" class="item">
            <img src="../../assets/images/callbackRecord/phone.png" alt="" class="icon-1">
            <span class="ft3 mrl-20 shenglue">{{item.organName}}</span>
            <span class="ft3 mrl-20 shenglue">{{item.organManageName}}</span>
            <span class="ft4 right">{{item.concatDate+' '+item.concatTime}}</span>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="foot mrt-10">
      <div>
        <span class="ft1">共计联系：</span>
        <span class="ft2">{{concatCountNum}}次</span>
      </div>
      <div>
        <span class="ft1">本月联系：</span>
        <span class="ft2">{{currentMothNum}}次</span>
      </div>
    </div>
  </div>
</template>

<script>
import { postcallBackList } from '@/api/personCenter'
import moment from 'moment'
export default {
  name: 'CallbackRecord',
  data() {
    return {
      selected: '1',
      userId: this.$route.query.userId,
      list: [],
      concatCountNum: 0,
      currentMothNum: 0
    }
  },
  mounted() {
    this.getList(this.selected)
  },
  watch: {
    selected(val) {
      this.getList(val)
    }
  },
  methods: {
    getList(month) {
      let params = {}
      if (month === '1') {
        params = {
          userId: this.userId,
          concatTimeStart: moment().subtract(1, 'months').format('YYYY-MM-DD'),
          concatTimeEnd: moment().format('YYYY-MM-DD')
        }
      }
      if (month === '2') {
        params = {
          userId: this.userId,
          concatTimeEnd: moment().subtract(1, 'months').format('YYYY-MM-DD')
        }
      }
      postcallBackList(params).then(res => {
        if (res.code === 200) {
          let data = res.data
          this.list = data.concatInfoVos
          this.concatCountNum = data.concatCountNum
          this.currentMothNum = data.currentMothNum
        }
      })
    }
  }
}
</script>
<style lang="less">
.callbackRecord {
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid rgba(86, 143, 234, 1);
    color: rgba(86, 143, 234, 1);
    margin-bottom: 0;
  }
  .mint-tab-item {
    border-bottom: 3px solid rgba(235, 235, 235, 1);
  }
  .mint-tab-item-label {
    font-size: 14px;
  }
}
</style>
<style scoped lang='less'>
.callbackRecord {
  height: 100%;
  background: #fff;
  .head {
    height: 50px;
  }
  .content {
    height: calc(100% - 60px - 50px);
    overflow: scroll;
  }
  .item {
    padding: 10px;
    height: 45px;
    border-top: 1px solid rgba(195, 198, 211, 0.2);
    border-bottom: 1px solid rgba(195, 198, 211, 0.2);
  }
  .foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    height: 50px;
    border-top: 1px solid rgba(195, 198, 211, 0.2);
  }
  .ft1 {
    color: #484f54;
    font-size: 14px;
  }
  .ft2 {
    color: #568fea;
    font-size: 16px;
    font-weight: bold;
  }
  .ft3 {
    color: #353d53;
    font-size: 16px;
    font-weight: bold;
    width:50px;
    float: left;
  }
  .ft4 {
    color: #87898e;
    font-size: 12px;
    display: inline-block;
    height: 100%;
    line-height: 2;
  }
  .icon-1 {
    width: 13px;
    float: left;
    margin-top:5px;
  }
}
</style>
