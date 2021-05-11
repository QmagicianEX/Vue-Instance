<template>
  <div>
  <div id="box">
    <div class="box" v-infinite-scroll="load" infinite-scroll-disabled="disabled" >
        <ul class="list" >
          <li v-for="(i,index) in list" class="list-item" :key="index">{{ i.noticeTitle }}</li>
        </ul>
        <p v-if="loading" style="margin-top:10px;" class="loading">
          <span></span>
        </p>
        <p v-if="noMore" style="margin-top:10px;font-size:13px;color:#ccc">没有更多了</p>
    </div>
  </div>
  <div style="left: 38%;">
      <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
      <el-button type="primary" @click="$router.push('/AutoLayout')">next</el-button>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      count: 0,//起始页数值为0
      loading: false,
      totalPages: "",//取后端返回内容的总页数
      list: [] //后端返回的数组
    };
  },
  computed: {
    noMore() {
      //当起始页数大于总页数时停止加载
      return this.count >= this.totalPages - 1;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  created() {
    this.getMessage();
  },
  methods: {
    load() {
      //滑到底部时进行加载
      this.loading = true;
      setTimeout(() => {
        this.count += 1; //页数+1
        this.getMessage(); //调用接口，此时页数+1，查询下一页数据
      }, 500);
    },
    getMessage() {
      console.log(this.count)
      this.list = this.list.concat([{noticeTitle: this.count}]); //因为每次后端返回的都是数组，所以这边把数组拼接到一起
      this.totalPages = 100;
      this.loading = false;
    }
  }
};
</script>
 
<style scoped>
#box{
  width: 80%;
  height: 500px;
  overflow-y: auto;
  margin-left: 100px;
}
.box {
  width: 100%;
  margin:  0 auto;
}
.list {
  padding: 0;
  font-size: 14px;
}
.list-item {
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style: none;
  box-sizing: border-box;
  height: 50px;
  line-height: 70px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  background-color: lightpink;
}
.loading span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #409eff;
  border-left: transparent;
  animation: zhuan 0.5s linear infinite;
  border-radius: 50%;
}
@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>