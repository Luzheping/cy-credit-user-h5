<template>
  <div class='select'>
    <div class="item mrt-10" @click="handlePopup">
      <span>{{text}}</span>
      <span class="arrow-bottom"></span>
    </div>
    <md-popup v-model="isPopupShow" position="bottom">
      <md-popup-title-bar ok-text="确认" cancel-text="取消" @confirm="handleOk" @cancel="handleCancel"></md-popup-title-bar>
      <md-picker ref="picker" :data="pickerData" @initialed="onPickerInitialed" @change="onPickerConfirm" is-view>
      </md-picker>
    </md-popup>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    defaultValue: {
      default: ''
    },
    queryList: {
      default: ''
    }
  },
  data() {
    return {
      text: '', // 确认后的text
      sureData: '',
      pickerValue: '', // picker过渡存储
      isPopupShow: false,
      pickerData: []
    }
  },
  watch: {
    queryList(val) {
      this.pickerData.push(val)
      this.text = val[0].text
      this.pickerValue = val[0].text
    }
  },
  methods: {
    handlePopup() {
      let vm = this
      vm.isPopupShow = true
    },
    handleOk() {
      let vm = this
      vm.text = this.pickerValue
      vm.isPopupShow = false
      vm.$emit('handleSure', vm.sureData)
    },
    handleCancel() {
      let vm = this
      vm.isPopupShow = false
    },
    onPickerInitialed() {
      // const value = this.$refs.picker.getColumnValues()
      // console.log(`[Mand Mobile] Picker Initialed: ${JSON.stringify(value)}`)
    },
    onPickerConfirm(columnIndex, itemIndex, value) {
      if (value) {
        this.pickerValue = value.text
        this.sureData = value
      }
    },
    getColumnValues(picker) {
      // const value = this.$refs[picker].getColumnValues()
      // Dialog.alert({
      //   content: `<pre>${JSON.stringify(value)}</pre>`,
      // })
    },
    getColumnIndexs(picker) {
      // const value = this.$refs[picker].getColumnIndexs()
      // Dialog.alert({
      //   content: `<pre>${JSON.stringify(value)}</pre>`,
      // })
    },
    setColumnValues(picker) {
      // this.$refs[picker].setColumnValues(0, this.pickerDataNew, vm => {
      //   vm.refresh(null, 0)
      // })
    }
  }
}
</script>
<style scoped lang='less'>
.select {
  .item {
    float: left;
    clear: both;
    margin-bottom: 23px;
    width: 336px;
    height: 50px;
    line-height: 50px;
    border: 1px solid rgba(243, 243, 244, 1);
    border-radius: 2px;
    padding: 0 20px;
    position: relative;
  }
  /* 向下的箭头 */
  .arrow-bottom {
    font-size: 0;
    line-height: 0;
    border-width: 6px;
    border-color: #c3c6d3;
    border-bottom-width: 0;
    border-style: dashed;
    border-top-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}
</style>
