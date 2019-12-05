<template>
  <div class='applyRecord'>
    <div v-for="(item,i) in list" :key="i" class="item-box mrb-10">
      <div class="item ft1">申请金额<span class="ft1 mrl-10">90万</span></div>
      <div class="item ft1">申请时间<span class="ft1 mrl-10">8个月</span></div>
      <div class="item mrt-10 ft1 teshu">申请时间<span class="ft2 mrl-10">2019-01-02 21:25:00</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyRecord',
  data() {
    return {
      list: [{ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }]
    }
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.applyRecord {
  .item-box {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    flex-wrap: wrap;
    border-top:1px solid rgba(195,198,211,0.2);
    border-bottom:1px solid rgba(195,198,211,0.2);
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
