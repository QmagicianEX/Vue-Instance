<template>
  <div class="home">
    <h1>Vue 项目功能实例</h1>

    <el-table :data="tableData" border style="width: 80%; margin-left: 10%;" >
    <el-table-column prop="function" label="功能" min-width="20%" align="center">
    </el-table-column>
    <el-table-column prop="description" label="描述" min-width="65%" align="center">
    </el-table-column>
    <el-table-column prop="link" label="跳转" min-width="15%" align="center">
      <template slot-scope="scope">
        <el-button type='primary' @click="gotoPage(scope.row)">{{scope.row.function}}</el-button>
      </template>
    </el-table-column>
  </el-table>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      tableData: [{
          function: '截图上传',
          description: '截图上传，在上传图片前可先对图片进行剪切，再上传。',
          link: '/ScreenShotUpload'
        },
        {
          function: '成功打钩动画',
          description: '操作完成，显示成功打钩效果。',
          link: '/SuccessTick'
        },  
        {
          function: '布局调整',
          description: '布局调整，根据电脑屏幕分辨率，调整布局。',
          link: '/AutoLayout'
        },
        ]
    };
  },
  created() {
    this.$axios.get("./lang/en.json").then(res=>{
      console.log(res)
    })
  },
  methods: {
    gotoPage(row)
    {
      console.log(row);
      this.$router.push({path:row.link});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>