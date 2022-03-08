<template>
<div>
    <el-dialog
      title="预览图片"
      :visible.sync="dialog"
      width="30%">
    <div class="outer_box">
        <div class="img_box">
            <img :src="imgSrc" ref="imgDiv" v-drag @mousewheel.prevent="rollImg">    
        </div>
    </div>
    </el-dialog>
    <el-button @click="dialog = true">click</el-button>
</div>
</template>
<script>
    export default{
        data(){
            return{
                imgSrc:'https://publish-pic-cpu.baidu.com/cf60d547-a35c-4e77-8ef3-30d0e5b0e48b.jpeg@q_90,w_450',
                deg:0,
                multiples:1,
                dialog: false
            }
        },
        methods:{
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
<style scoped>
    .outer_box{
        width: 600px;
        height: 600px;
        border: 1px solid red
    }
    .outer_box>div{
        white-space: nowrap;
        display: inline-block;
    }
    .outer_box>div>img{
        width: auto;
        height: auto;
        position: absolute;
    }
</style>