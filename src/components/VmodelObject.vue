<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item v-for="(item, index) in tmpForm" :key="index" label="活动名称">
        <el-input v-model="form[item['key']]"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpForm:[],
      attrForm: {},
      form: {}
    }
  },
  created() {
    this.tmpForm = [
      {
        label: 'test1',
        key: 'key1_',
        val: ''
      },
      {
        label: 'test2',
        key: 'key2_',
        val: ''
      },
      {
        label: 'tes3t',
        key: 'key3_',
        val: ''
      }
    ]
    for (let i = 0; i < this.tmpForm.length; i++) {
      this.attrForm[this.tmpForm[i]['key']] = this.tmpForm[i]['val']
    }
  },
  methods: {
    onSubmit() {
      const params = Object.assign(this.attrForm, this.form)
      console.log(params)
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>