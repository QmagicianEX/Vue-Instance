<template>
  <div :style="{height: conHeight+'px', overflow: 'auto', position: 'relative'}" id="lazy-load-container">
    <div style="width: 100%; height: 500px;" v-for="(item, index) in list" :key="index" :style="item">{{ index }}</div>
    <div v-load="loading" style="width: 100%; height: 60px; text-align: center; line-height: 60px; color: #fff; position: fixed; top: 900px; background: rgba(38,38,38,.5);" v-if="loading">加载中......</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        list: [{background: "rgb(233, 32, 38)"}],
        conHeight: 900,
        scrollTop: 0
      }
    },
    created() {
      this.getList(10)
    },
    mounted() {
      document.getElementById('lazy-load-container').addEventListener('scroll', this.loadData)
    },
    beforeDestroy() {
      document.getElementById('lazy-load-container').removeEventListener('scroll', this.loadData)
    },
    methods: {
      getList(num) {
        this.loading = true
        let t = parseInt(Math.random()*5000)
        setTimeout(() => {
          for(let i = 0; i < num; i++) {
            let r = parseInt(Math.random()*255)
            let g = parseInt(Math.random()*255)
            let b = parseInt(Math.random()*255)
            this.list.push({background: `rgb(${r},${g},${b})`})
          }
          this.loading = false
        }, t)
      },
      loadData(e) {
        if (this.list.length < 50 && !this.loading) {
          let ele = document.getElementById('lazy-load-container')
          if (ele && ele.scrollTop > this.scrollTop && ele.scrollTop > ele.scrollHeight/2) {
            this.scrollTop = ele.scrollTop
            this.getList(10)
          }
        }
      }
    }
  }
</script>