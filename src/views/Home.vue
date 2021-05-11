<template>
  <div class="home">
    <h1>Vue 项目功能实例</h1>

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
    
    <el-button @click="startendsub">up</el-button>
    <div style="height: 300px; width: 60px">
      <div v-for="(item, index) in viewArr" :key="index">
        <img :src="item.url" style="height: 60px; width: 60px">
      </div>
    </div>
    <el-button @click="startendincrease">down</el-button>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      viewArr: [],
      start: 0,
      end: 5,
      all: [
        {
          index: 0,
          url:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3828769055,61949604&fm=26&gp=0.jpg'
        },
        {
          index: 1,
          url:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3216527670,1669312597&fm=26&gp=0.jpg'
        },
        {
          index: 2,
          url:
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3555255749,4279001161&fm=26&gp=0.jpg'
        },
        {
          index: 3,
          url:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1688760595,743524062&fm=26&gp=0.jpg'
        },
        {
          index: 4,
          url:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1773078332,2865754650&fm=26&gp=0.jpg'
        },
        {
          index: 5,
          url:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1773078332,2865754650&fm=26&gp=0.jpg'
        },
        {
          index: 6,
          url:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1773078332,2865754650&fm=26&gp=0.jpg'
        }
      ],
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
          description: '无限滚动夹杂',
          link: '/InfiniteScroll'
        },
        ]
    };
  },
  created() {
    this.viewArr = this.all.slice(this.start, this.end)
    // console.log(this.getCombination([['1', '2'], ['1']]))
    // this.$axios.get("./lang/en.json").then(res=>{
    //   console.log(res)
    // })
  },
  methods: {
    startendsub() {
      if (this.start > 0) {
        this.start -= 1
        this.end -= 1
        this.viewArr = this.all.slice(this.start, this.end)
      }
    },
    startendincrease() {
      if (this.end < this.all.length) {
        this.start += 1
        this.end += 1
        this.viewArr = this.all.slice(this.start, this.end)
      }
    },
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
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>