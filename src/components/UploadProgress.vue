<template>
  <div>

    <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :before-upload="beforUplod"
        :on-progress="uploadProgress"
        :file-list="fileList"
        :auto-upload="true"
        multiple
        :show-file-list="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>

      <div>
			<draggable v-model="tmpFileList" animation='800'>
				<transition-group>
					<div v-for="(item, index) in tmpFileList" :key="index" style="overflow: hidden; position: relative; float: left; cursor: pointer; border: 1px solid #aaa; border-radius: 4px">
							<v-hover-mask>
								<img :src="item.url" width="100" height="100" />
							</v-hover-mask>
              <div v-if="!hideProgress(item)" :style="{'top': (100-Math.ceil(item.progress))+'%'}" style="position: absolute; background-color: #000; opacity: 0.3; width: 100px; height: 100px"></div>
              <div v-if="!hideProgress(item)" style="position: absolute; top: 40px; left: 30%; color: white; font-weight: 700">{{Math.ceil(item.progress) }}%</div>
					</div>
				</transition-group>
			</draggable>
		</div>

    <div style="position: fixed; bottom:20px; left: 38%;">
			<el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
			<el-button type="primary" @click="$router.push('/PicZoom')">next</el-button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"
import HoverMask from './HoverMask'

export default {
  components: {
     draggable,
		 'v-hover-mask': HoverMask
  },

  data() {
    return {
      fileList: [],
      tmpFileList: []
    }
  },

  created() {

  },

  methods: {
    beforUplod(file) {
      let index  = this.tmpFileList.findIndex(item=>item.name===file.name)
      if (index >= 0) {
        this.$message('该文件已在上传列表中')
        return false
      }
			const reader = new FileReader()
			reader.onload = (event) => {
        this.tmpFileList.push({
          name: file.name,
          url: event.target.result,
          progress: 0,
          complete: false
        })
			};
			reader.readAsDataURL(file);
		},

    uploadProgress(event, file, fileList) {
      let index  = this.tmpFileList.findIndex(item=>item.name===file.name)
      this.tmpFileList[index]['progress'] = event.percent
    },

    hideProgress(item) {
      if (Math.ceil(item.progress) === 100) {
        setTimeout(()=>item.complete=true, 500)
      }
      return item.complete
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>