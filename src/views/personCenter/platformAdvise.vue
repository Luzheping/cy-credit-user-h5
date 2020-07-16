<template>
  <div class="plat">
    <advise @onSubmit="submit" :dataList="dataList" :adviseType="params.type">
      <mt-field  label="建议" placeholder="建议" type="textarea" rows="5" v-model="params.content"></mt-field>
    </advise>
  </div>
</template>

<script>
import Advise from '../components/platform/advise'
import { platFrom, getAdvise } from '@/api/personCenter'
export default {
  name: 'platformAdvise',
  components: {
    Advise
  },
  data() {
    return {
      params: {
        userId: this.$route.query.userId,
        content: '',
        type: this.$route.query.type
      },
      dataList: []
    }
  },
  mounted() {
    this.getAdviseList()
  },
  methods: {
    getAdviseList() {
      getAdvise({ userId: this.params.userId, type: this.params.type }).then(res => {
        if (res.code === 200) {
          this.dataList = res.data
        }
      })
    },
    submit() {
      platFrom(this.params).then(res => {
        if (res.code === 200) {
          this.$router.push({ path: '/personCenter' })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .plat{
    height: 100%;
    font-size: 14px;
    font-weight: bold;
  }
</style>
