<template>
  <div class="contactMe">
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
        <div class="c-item-header">
          <label>{{item.organName}}</label>
          <label>{{item.manager}}</label>
        </div>
        <div class="c-item-content">
          <div class="c-item-time">
            <div class="c-item-num">呼叫次数: {{item.callNum}}次</div>
            <div>最近呼叫时间: {{item.lastCallTime}}</div>
          </div>
          <div class="c-item-icon">
            <span @click="callPhone(item.id,item.phone)">
              <img src="../../assets/images/contactMe/phone.png" alt="" class="img-size">
            </span>
            <span @click="complaint(item)" style="color: #4a87d8">
              投诉
              <!--<img src="../../assets/images/contactMe/complaint.png" alt="" class="img-size">-->
            </span>
          </div>
        </div>
        <!--<span class="ft1 shenglue">{{item.organName}}</span>-->
        <!--<span class="ft1 shenglue mrl-20">{{item.manager}}</span>-->
        <!--<span class="ft2 mrl-20">{{item.lastCallTime}}</span>-->
        <!--<span class="ft1 ft3 mrl-20">{{item.callNum}}次</span>-->
      </div>
    </div>
    <mt-popup
      v-model="cache.popupVisible"
      position="bottom"
      class="item-popup"
      popup-transition="popup-fade">
      <div class="popup-content">
        <p class="tit">投诉选项</p>
        <ul>
          <li v-for="(item,index) in dataList" :key="index">
            <span>{{item.text}}</span>
            <div @click="imgCheckClick(index,item)" class="checked" style="float: right;">
              <img v-if="!item.ckeBox" src="@/assets/images/common/icon-7.png">
              <img v-if="item.ckeBox" src="@/assets/images/common/icon-8.png">
            </div>
          </li>
          <div class="com-line"></div>
        </ul>
        <div class="order-text-cont over-flow">
          <mt-button @click="submitComplaint()" :class="flag?'c-btn m-top but-bot':'c-btn-1 m-top but-bot'">投诉</mt-button>
        </div>
      </div>

    </mt-popup>
  </div>
</template>

<script>
import { concatCallBack, postPageList, getConstant, complaint } from '@/api/personCenter'
import { MessageBox } from 'mint-ui'
export default {
  name: 'ContactMe',
  mounted() {
    this.queryList()
    this.getComplaint()
  },
  data() {
    return {
      queryParams: {
        current: 1,
        size: 999999,
        userId: this.$route.query.userId,
        orders: []
      },
      flag: false,
      params: {
        userId: '', // 投诉人id
        organId: '', // 被投诉人id
        content: '',
        complaintList: [] // 投诉内容
      },
      dataNum: [
        {
          num: 0
        },
        {
          num: 0
        }
      ],
      manage: '', // 投诉经理
      cache: {
        popupVisible: false
      },
      dataList: [],
      list: []
    }
  },
  watch: {
    params: {
      deep: true,
      immediate: true,
      handler: function(oldValue) {
        if (oldValue.complaintList.length < 1) {
          this.flag = false
        } else {
          this.flag = true
        }
      }
    }
  },
  methods: {
    complaint(item) {
      this.cache.popupVisible = true
      this.params.organId = item.organId
      this.manage = item.manager
    },
    submitComplaint() {
      this.params.userId = this.queryParams.userId
      this.params.content = this.params.complaintList.join(',')
      complaint(this.params).then(res => {
        if (res.code === 200) {
          this.cache.popupVisible = false
          MessageBox('提示', '投诉' + this.manage + '成功')
        }
      })
    },
    callPhone(id, phone) {
      let params = {
        id: id
      }
      concatCallBack(params).then(res => {
        if (res.code === 200) {
          location.href = 'tel://' + phone
        }
      })
    },
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
    },
    imgCheckClick(index) {
      this.dataList[index].ckeBox = !this.dataList[index].ckeBox
      this.dataList[index].ckeBox ? this.params.complaintList.push(this.dataList[index].key) : this.params.complaintList = this.params.complaintList.filter(e => e !== this.dataList[index].key)
    },
    getComplaint() {
      getConstant({ coding: 'complaint' }).then(res => {
        if (res.code === 200) {
          this.dataList = res.data
          this.dataList.forEach(e => { this.$set(e, 'ckeBox', false) })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.contactMe {
  height: 100%;
  background: rgba(195, 198, 211, 0.2);
  .head {
    display: flex;
    justify-content: space-around;
    background: #ffffff;
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
      font-size: 14px;
      font-weight: bold;
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
  .item-popup{
    width: 100%;
    .popup-content {
      width: 100%;
      ul {
        li {
          /*width: 100%;*/
          padding: 15px 20px;
          img {
            width: 14px;
          }
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
  .order-text-cont {
    margin-top: 30px;
    padding: 15px 20px;
    margin-bottom: 50px;
    .m-top {
      margin-top: 60px;
    }
  }
  }
</style>
