<template>
  <div class="platformAdvise">
    <div class="head mrb-10">
      <div class="item">
        {{adviseType === '0' ? '我的意见与建议' : '我的协助'}}
      </div>
    </div>
    <ul v-if="dataList.length > 0">
      <li v-for="(item,index) in dataList" :key="index">
        <div class="advise-list">
          <div class="advise-head">
            <label>时间: {{item.createTime.substr(0, item.createTime.length - 2)}}</label>
          </div>
          <div class="advise-body">
            <span>
              {{item.content}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div>
      <div class="submit-advise">
        <slot></slot>
      </div>
      <div class="advise-footer">
        <mt-button type="primary" style="width: 100%" @click="onSubmit">提交</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advise',
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    adviseType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit')
    }
  }
}
</script>

<style scoped lang="less">
  .platformAdvise {
    height: 100%;

    .advise-title {
      height: 50px;
    }

    ul {
      height: 55%;
      overflow-y: scroll;

      li {
        margin-bottom: 20px;
        background: #ffffff;
        padding: 0px 20px;
        height: 80px;

        .advise-head {
          height: 30px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(195, 198, 211, 0.2);
        }

        .advise-body {
          height: 50px;
          display: flex;
          align-items: center;
        }
      }
    }

    .submit-advise {
      margin: 20px;
      height: 20%;
      border: 1px solid rgba(195, 198, 211, 0.2)
    }

    .advise-footer {
      /*position: absolute;*/
      padding: 10px 20px;
      width: 100%;
      bottom: 0px;
    }
  }
  .head {
    display: flex;
    justify-content: space-around;
    background: #ffffff;
    border-bottom: 1px solid rgba(195, 198, 211, 0.2);
    .item {
      width: 30%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: #353d53;
    }
  }
</style>
