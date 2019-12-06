<template>
  <div class='applyRecord'>
    <div v-for="(item,i) in list" :key="i" class="item-box mrb-10">
      <div class="item ft1">申请金额<span class="ft1 mrl-10">{{item.loanAmount}}万</span></div>
      <div class="item ft1">申请时间<span class="ft1 mrl-10">{{item.expire}}个月</span></div>
      <div class="item mrt-10 ft1 teshu">申请时间<span class="ft2 mrl-10">{{item.applyTime}}</span></div>
    </div>
  </div>
</template>

<script>
import { postApplyList } from '@/api/personCenter'
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
    }
  }
}
</script>

<style scoped lang='less'>
.applyRecord {
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
</style>
