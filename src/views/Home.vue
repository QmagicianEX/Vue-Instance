<template>
  <div class="home">
    <h1>Vue 项目功能实例</h1>
    <div>
      <el-button @click="apiTest">接口测试</el-button>
    </div>
    <el-table :data="tableData" border style="width: 80%; margin-left: 10%;" >
      <el-table-column prop="function" label="功能" min-width="20%" align="center">
      </el-table-column>
      <el-table-column prop="description" label="描述" min-width="60%" align="center">
      </el-table-column>
      <el-table-column prop="link" label="跳转" min-width="20%" align="center">
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
          function: '布局调整（待完成）',
          description: '布局调整，根据电脑屏幕分辨率，调整布局。',
          link: '/AutoLayout'
        },
        {
          function: '上传图片并可拖拽排序',
          description: '上传图片，可拖拽进行排序。',
          link: '/UploadImgAndDragSort'
        },
        {
          function: '上传文件进度',
          description: '上传图片，显示上传进度效果。',
          link: '/UploadProgress'
        },
        {
          function: '图片放大预览',
          description: '图片放大预览。',
          link: '/PicZoom'
        },
        // {
        //   function: '表格错位',
        //   description: '嵌套表格错位问题。',
        //   link: '/TableDislocation'
        // },
        {
          function: '动态表单',
          description: '动态表单。',
          link: '/VmodelObject'
        },
        {
          function: '无限滚动加载',
          description: '无限滚动加载',
          link: '/InfiniteScroll'
        },
        {
          function: '平滑过渡',
          description: '平滑过渡',
          link: '/Transition'
        },
        {
          function: '级联选择',
          description: '级联选择',
          link: '/Cascader'
        },
        {
          function: '手写签名',
          description: '手写签名',
          link: '/VueEsign'
        },
        {
          function: '二维码',
          description: '手机扫描二维码，执行相关操作',
          link: '/Qrcode'
        },
        {
          function: '图片预览',
          description: '点击图片进行预览，可放大缩小等',
          link: '/ImagePreview'
        },
        {
          function: '拖拽',
          description: '拖拽',
          link: '/Drag'
        },
        {
          function: '日期选择',
          description: '日期选择',
          link: '/VDatePicker'
        },
        {
          function: '日历表格',
          description: '日历表格',
          link: '/Calendar'
        },
        {
          function: 'html页面转pdf并下载',
          description: 'html页面转pdf并下载',
          link: '/Html2canvas'
        },
        {
          function: '数据选择',
          description: '数据选择',
          link: '/DataSelect'
        },
        {
          function: '懒加载',
          description: '懒加载',
          link: '/lazyLoad'
        },
        ]
    };
  },
  created() {
    // console.log(this.getCombination([['1', '2'], ['1']]))
    // this.$axios.get("./lang/en.json").then(res=>{
    //   console.log(res)
    // })
  },
  methods: {
    getCombination(array) {
    let result = [];
    array.forEach((arrItem) => {
      if (result.length === 0) {
        result = arrItem;
      } else {
        const emptyArray = [];
        result.forEach((item) => {
          arrItem.forEach((value) => {
            emptyArray.push([...item, value]);
          });
        });
        result = emptyArray;
      }
    });
    return result;
  },

    gotoPage(row)
    {
      // console.log(row);
      this.$router.push({path:row.link});
    },
    apiTest() {
      this.$axios.get("gpt/gpt/test").then(res=>{
        console.log(res)
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>