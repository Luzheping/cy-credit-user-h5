<template>
  <div class='contactMe'>
    <div class="head mrb-10">
      <div class="item">
        <div class="search-txt" @click="handleQuery(0,'lastCallTime')">
          <p>时间</p>
          <div class="box-icon">
            <div class="box-top" :style="{'border-bottom-color':dataNum[0].num == 1?'#568FEA':''}"></div>
            <div class="box-bot" :style="{'border-top-color':dataNum[0].num == 2?'#568FEA':''}"></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="search-txt" @click="handleQuery(1,'callNum')">
          <p>次数</p>
          <div class="box-icon">
            <div class="box-top" :style="{'border-bottom-color':dataNum[1].num == 1?'#568FEA':''}"></div>
            <div class="box-bot" :style="{'border-top-color':dataNum[1].num == 2?'#568FEA':''}"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="c-item mrb-10" v-for="(item,i) in list" :key="i">
        <span class="ft1 shenglue">{{item.organName}}</span>
        <span class="ft1 shenglue mrl-20">{{item.manager}}</span>
        <span class="ft2 mrl-20">{{item.lastCallTime}}</span>
        <span class="ft1 ft3 mrl-20">{{item.callNum}}次</span>
        <a :href="'tel:'+item.phone">
          <img src="../../assets/images/contactMe/phone.png" alt="" class="img-size">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { postPageList } from '@/api/personCenter'
export default {
  name: 'ContactMe',
  mounted() {
    this.queryList()
  },
  data() {
    return {
      queryParams: {
        current: 1,
        size: 999999,
        userId: this.$route.query.userId,
        orders: []
      },
      dataNum: [
        {
          num: 0
        },
        {
          num: 0
        }
      ],
      list: []
    }
  },
  methods: {
    // 条件查询
    queryList() {
      let params = this.queryParams
      postPageList(params).then(res => {
        if (res.code === 200) {
          this.list = res.data.records
        }
      })
    },
    // 条件查询参数处理
    handleParams(asc, column) {
      let obj = {}
      for (let index = 0; index < this.queryParams.orders.length; index++) {
        const item = this.queryParams.orders[index]
        if (item.column === column) {
          if (asc === '') {
            this.queryParams.orders.splice(index, 1)
            return
          }
          this.queryParams.orders[index].asc = asc
          return
        }
      }
      obj.asc = asc
      obj.column = column
      this.queryParams.orders[0] = obj
    },
    // 升序排序
    handleQuery(index, column) {
      this.dataNum[index].num++
      if (this.dataNum[index].num > 2) {
        this.dataNum[index].num = 0
      }
      switch (index) {
        case 0:
          if (this.dataNum[index].num === 0) {
            this.handleParams('', 'lastCallTime')
          } else if (this.dataNum[index].num === 1) {
            console.log('时间升序')
            this.dataNum[1].num = 0
            this.handleParams(true, 'lastCallTime')
          } else {
            console.log('时间降序')
            this.handleParams(false, 'lastCallTime')
          }
          break
        case 1:
          if (this.dataNum[index].num === 0) {
            console.log('次数原始')
            this.handleParams('', 'callNum')
          } else if (this.dataNum[index].num === 1) {
            console.log('次数升序')
            this.dataNum[0].num = 0
            this.handleParams(true, 'callNum')
          } else {
            console.log('次数降序')
            this.handleParams(false, 'callNum')
          }
          break
      }
      this.queryList()
    }
  }
}
</script>

<style scoped lang='less'>
.contactMe {
  .head {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(195, 198, 211, 0.2);
    .item {
      width: 30%;
      height: 40px;
      line-height: 52px;
      text-align: center;
      font-size: 14px;
      color: #353d53;
    }
  }
  .content {
    height: calc(100% - 40px - 10px);
    overflow: scroll;
    .c-item {
      border-top: 1px solid rgba(195, 198, 211, 0.2);
      border-bottom: 1px solid rgba(195, 198, 211, 0.2);
      padding: 10px 15px;
      .img-size {
        width: 23px;
        float: right;
      }
    }
  }
  .ft1 {
    color: #353d53;
    font-size: 16px;
    font-weight: bold;
    width: 50px;
    float: left;
  }
  .ft2 {
    color: #87898e;
    font-size: 12px;
    display: inline-block;
    height: 100%;
    line-height: 2;
  }
  .ft3 {
    width: 30px;
  }
  .box-top {
    margin-bottom: 2px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #c3c6d3;
  }
  .box-bot {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #c3c6d3;
  }
  .search-txt {
    display: inline-block;
    p {
      float: left;
      margin-right: 4px;
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(93, 97, 110, 1);
      opacity: 1;
    }
    .box-icon {
      float: left;
      margin-top: 5px;
    }
  }
  .search-ul {
    width: 100%;
    padding-top: 52px;
    overflow: scroll;
    li {
      width: 100%;
      padding: 12px 0;
      font-size: 12px;
      color: rgba(93, 97, 110, 1);
      background: #fff;
      p {
        margin-bottom: 8px;
      }
    }
  }
  .search-name {
    margin-top: 8px;
    margin-bottom: 18px;
    span {
      color: rgba(34, 40, 64, 1);
      font-size: 14px;
    }
    span:nth-of-type(1) {
      font-size: 18px;
    }
    span:nth-of-type(2) {
      margin-left: 59px;
      margin-right: 29px;
    }
  }
  .search-infor {
    margin-bottom: 18px;
    span {
      display: inline-block;
      height: 21px;
      background: #fff0ef;
      color: #ff6a62;
      padding: 4px 9px;
      margin-right: 12px;
    }
  }
  .serch-test {
    span {
      margin-right: 18px;
      color: rgba(93, 97, 110, 1);
    }
  }
  .search-cont {
    padding: 0 16px;
    height: 122px;
  }
  .cont-left {
    float: left;
  }
  .cont-right {
    float: right;
    margin-top: 25px;
  }
  .popup-content {
    ul {
      li {
        width: 100%;
        padding: 15px 20px;
        img {
          width: 14px;
        }
      }
    }
  }
  .tit {
    margin: 65px 20px 34px;
    height: 25px;
    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
    line-height: 25px;
    color: rgba(53, 61, 83, 1);
    opacity: 1;
  }
  .order-text-cont {
    margin-top: 30px;
    padding: 15px 20px;
    margin-bottom: 50px;
    p {
      font-size: 14px;
      margin-bottom: 12px;
    }
    .ord-bac-top {
      margin-bottom: 80px;
      height: 8px;
      width: 100%;
      background: rgba(243, 243, 244, 1);
      border-radius: 100px;
    }
    .ord-pos-top {
      position: relative;
      height: 8px;
      background: #568fea;
      border-radius: 100px;
      img {
        width: 38px;
      }
      .ord-img1 {
        position: absolute;
        left: -12px;
        top: -12px;
      }
      .ord-img2 {
        position: absolute;
        right: -17px;
        top: -12px;
      }
    }
    .btn-reset {
      background: #fff;
      font-size: 14px;
      width: 100%;
    }
  }
}
</style>
