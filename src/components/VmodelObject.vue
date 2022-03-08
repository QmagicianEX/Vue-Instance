<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" style="width: 30%">

      <el-form-item v-for="(item, index) in form.requiredAttributes" :key="index" :label="item.label" :prop="'requiredAttributes.' + index + '.val'" :rules="[{required: true, message: '此选项为必填项', trigger: 'change'}]">
        
        <el-select v-if="isSelect(item)" v-model="form.requiredAttributes[index].val" style="width: 240px">
          <el-option v-for="(v, i) in item.value_range" :key="i" :label="v" :value="v" />
        </el-select>

        <el-input v-else v-model="item.val" style="width: 240px"></el-input>

      </el-form-item>

      <el-form-item label="密码框自动填充测试" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="new-password"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password2" :class="{'circle-style': isShowPlaintext}">
          <i slot="suffix" class="el-icon-view el-input__icon" @click="isShowPlaintext=!isShowPlaintext" />
        </el-input>
      </el-form-item>

      <el-button @click="isShowMore = !isShowMore">
        更多
      </el-button>

      <transition name="el-zoom-in-top">
        <div v-show="isShowMore" style="margin-top: 20px">

          <el-form-item v-for="(item, index) in form.optionsAttributes" :key="index" :label="item.label">

            <el-select v-if="isSelect(item)" v-model="item.val" style="width: 240px">
              <el-option v-for="(v, i) in item.value_range" :key="i" :label="v" :value="v" />
            </el-select>

            <el-input v-else v-model="item.val" style="width: 240px"></el-input>

          </el-form-item>

        </div>
      </transition>

    </el-form>
    <el-col style="text-align: left">
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button>取消</el-button>
    </el-col>
    <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>

    <el-form ref="test-form" :model="testForm" :rules="rules">
      <el-form-item :label="'test'" prop="test.input1">
        <el-input v-model="testForm.test.input1"></el-input>
      </el-form-item>
      <el-form-item :label="'test'" prop="test.input2">
        <el-input v-model="testForm.test.input2"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionType: 'edit',
      oldData: {
        key1_: "3",
        key2_: "true",
        key3_: "4",
        key4_: "5",
        key5_: "",
        key6_: ""
      },
      allAttributes:[],
      form: {
        password: '',
        password2: '',
        requiredAttributes: [],
        optionsAttributes: [],
      },
      isShowMore: false,
      isShowPlaintext: true,
      testForm: {
        test: {
          input1: '',
          input2: ''
        }
      },
      rules: {
        'test.input1': { required: true, message: '必填项', trigger: 'blur' },
        'test.input2': { required: true, message: '必填项', trigger: 'blur' },
      }
    }
  },
  created() {
    this.allAttributes = [
      {
        label: 'must1',
        key: 'key1_',
        val: '',
        is_must: true
      },
      {
        label: 'must2',
        key: 'key2_',
        val: '',
        is_must: true,
        value_range: ['true', 'false']
      },
      {
        label: 'must3',
        key: 'key3_',
        val: '',
        is_must: true
      },
      {
        label: 'option1',
        key: 'key4_',
        val: '',
        is_must: false
      },
      {
        label: 'option2',
        key: 'key5_',
        val: '',
        is_must: false,
        value_range: ['aaa', 'bbb']
      },
      {
        label: 'option3',
        key: 'key6_',
        val: '',
        is_must: false
      }
    ]

    if (this.optionType === 'edit') {
      this.allAttributes.forEach(attr => attr.val = this.oldData[attr.key])
    }
    
    this.form.requiredAttributes = this.allAttributes.filter(attr => attr.is_must)
    this.form.optionsAttributes = this.allAttributes.filter(attr => !attr.is_must)
  },
  methods: {
    isSelect(item) {
      return Reflect.has(item, 'value_range')
    },

    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const params = {}
          this.form.requiredAttributes.forEach(attr => params[attr.key] = attr.val)
          this.form.optionsAttributes.forEach(attr => params[attr.key] = attr.val)
          console.log(params)
        }
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.circle-style {
  /deep/ .el-input__inner {
    -webkit-text-security: disc !important
  }
}
</style>