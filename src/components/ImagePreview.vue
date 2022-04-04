<template>
  <div class="home">
    <el-dialog
        title="预览图片"
        :visible.sync="dialog"
        width="800px">
      <div class="kuang">
        <img alt="Vue logo" ref="imgDiv" src="../assets/images/img2.jpeg" @mousewheel.prevent="rollImg" @dragstart="ondragstart" @dragend="ondragend" :style="positionYX">
      </div>
    </el-dialog>
    <el-button @click="dialog = true">click</el-button>
  </div>
</template>
<script>

export default {

  name: 'Home',

  components: {

  },

  data(){

    return{
      dialog: false,
       xStart:0,

       yStart:0,

       xEnd:0,

       yEnd:0,

       positionYX:{

         position:'relative',

         left:0,

         top:0

       },

      //  移动位置

      moveLeft:0,

      moveTop:0,

      // 当前位置

      currentLeft:0,

      currentTop:0,

    }

  },

  methods:{

    // 用户开始拖动元素时触发

    ondragstart(e){

      this.xStart = e.clientX;

      this.yStart = e.clientY;

    },

    // - 元素正在拖动时触发

    ondrag(){

    },

    //  - 用户完成元素拖动后触发

    ondragend(e){

      this.xEnd = e.clientX;

      this.yEnd = e.clientY;

      // 移动位置

      let leftx = -(this.xStart - this.xEnd);

      let topy = -(this.yStart - this.yEnd);

      // 移动位置

      this.moveLeft = leftx;

      this.moveTop = topy;

      // 目标位置

      let objectiveLeft = leftx + this.currentLeft;

      let objectiveTop = topy + this.currentTop;

       // 当前位置

      this.currentLeft = objectiveLeft;

      this.currentTop = objectiveTop;

      this.positionYX.left = this.currentLeft + 'px';

      this.positionYX.top = this.currentTop + 'px';

    },

    // 缩放图片
    rollImg() {
      /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */

      var zoom = parseInt(this.$refs.imgDiv.style.zoom) || 100
      /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */

      zoom += event.wheelDelta / 12
      /* 最小范围 和 最大范围 的图片缩放尺度 */

      if (zoom >= 80 && zoom < 500) {
        this.$refs.imgDiv.style.zoom = zoom + '%'
      }
      return false
    }

  }

}

</script>

<style>

*{margin: 0;padding: 0;}

  .kuang{width: 600px;height: 600px;border: 1px solid red;position: relative;left: 300px;top: 100px;}

</style>