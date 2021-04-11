<template>
	<div>
		<!-- <draggable v-model="mainImagelist" :move="onMove" @start="isDragging=true" @end="isDragging=false">
			<transition-group type="transition">
					<li v-for="item in mainImagelist" :key="item" class="item">
							<img :src="item" width="100" height="100" />
					</li>
			</transition-group>
		</draggable> -->

		<!-- <draggable v-model="mainImagelist" @update="datadragEnd">
			<transition-group>
				<div class="box" v-for="(item, index) in mainImagelist" :key="index">
					<img :src="item" width="100" height="100" />
				</div>
			</transition-group>
		</draggable> -->

		<el-upload
			class="upload-demo"
			action=""
			multiple
			:limit="9"
			:on-exceed="handleExceed"
			:on-change="setImage"
			:show-file-list="false">
			<el-button size="small" type="primary">点击上传</el-button>
		</el-upload>
		<div>
			<draggable v-model="fileList" @update="datadragEnd" animation='800'>
				<transition-group>
					<div v-for="(item, index) in fileList" :key="index" style="float: left; cursor: pointer; border: 1px solid #aaa; border-radius: 4px">
							<v-hover-mask>
								<img :src="item.url" width="100" height="100" />
							</v-hover-mask>
					</div>
				</transition-group>
			</draggable>
		</div>

		<div style="position: fixed; bottom:20px; left: 38%;">
			<el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
			<el-button type="primary" @click="$router.push('/UploadProgress')">next</el-button>
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
				imgSrc: '',
				fileList: [],
				isDragging: true,
				mainImagelist: [],
			}
	},
	methods: {

		//创建url路径
		getObjectURL(file) {
			var url = null;
			if (window.createObjectURL != undefined) {
				// basic
				url = window.createObjectURL(file);
			} else if (window.URL != undefined) {
				// mozilla(firefox)
				url = window.URL.createObjectURL(file);
			} else if (window.webkitURL != undefined) {
				// webkit or chrome
				url = window.webkitURL.createObjectURL(file);
			}
			return url;
		},

		setImage(files) {
			this.fileList = []
			const file = files.raw;
			// if (!file.type.includes('image/')) {
			// alert('Please select an image file');
			// return;
			// }
			if (typeof FileReader === 'function') {
			const reader = new FileReader();
			reader.onload = (event) => {
				this.imgSrc = event.target.result;
				this.fileList.push({
					name: file.name,
					url: this.imgSrc
				})
			};
			reader.readAsDataURL(file);
			} else {
			alert('Sorry, FileReader API not supported');
			}
		},

		handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
		datadragEnd() {

		}
		// onMove({ relatedContext, draggedContext }) {
    //   const relatedElement = relatedContext.item;
    //   const draggedElement = draggedContext.item;
    // } 
	}
}
</script>
<style lang="stylus" scoped>

</style>