<template>
  <div>
    <el-col :span="12">
    <i class="el-icon-arrow-up icon-style" @click="startendsub" />
    <div class="out-div">
      <div v-for="(item, index) in viewArr" :key="index">
        <img :src="item.url" class="inner-img">
      </div>
    </div>
    <i class="el-icon-arrow-down icon-style" @click="startendincrease" />
    </el-col>
    <el-col :span="12">
      <i class="el-icon-arrow-up icon-style" @click="transitionUp" />
      <div class="out-div">
        <div class="transition-div" style="transition: transform 1s">
          <div v-for="(item, index) in all" :key="index">
            <img :src="item.url" class="inner-img">
          </div>
        </div>
        <!-- <div class="transition-div" style="transition: transform 1s; width: 58px; height: 60px; border-radius: 5px; border: 1px solid #409eff">1</div> -->
      </div>
      <i class="el-icon-arrow-down icon-style" @click="transitionDown" />
    </el-col>
    <div style="position: fixed; bottom:20px; left: 38%;">
			<el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewArr: [],
      transitionTimes: 0,
      start: 0,
      end: 5,
      all: [
        {
          index: 0,
          url: require('../assets/images/img1.jpeg')
        },
        {
          index: 1,
          url:require('../assets/images/img2.jpeg')
        },
        {
          index: 2,
          url:require('../assets/images/img3.jpeg')
        },
        {
          index: 3,
          url:require('../assets/images/img4.jpeg')
        },
        {
          index: 4,
          url:require('../assets/images/img5.jpeg')
        },
        {
          index: 5,
          url:require('../assets/images/img6.jpeg')
        },
        {
          index: 6,
          url:require('../assets/images/img7.jpeg')
        },
        {
          index: 7,
          url:require('../assets/images/img8.jpeg')
        },
        {
          index: 8,
          url:require('../assets/images/img9.jpeg')
        }
      ],
    }
  },

  created() {
    this.viewArr = this.all.slice(this.start, this.end)
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

    transitionUp() {
      this.transitionTimes !== 5 - this.all.length ? this.transitionTimes -= 1 : ''
      let e = document.getElementsByClassName('transition-div')[0]
      e.style.transform = 'translateY(' + this.transitionTimes * 64 + 'px)'
    },

    transitionDown() {
      this.transitionTimes < 0 ? this.transitionTimes += 1 : ''
      let e = document.getElementsByClassName('transition-div')[0]
      e.style.transform = 'translateY(' + this.transitionTimes * 64 + 'px)'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .icon-style {
    margin-bottom: 10px;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: #409eff
    }
  }

  .out-div {
    height: 320px;
    width: 60px;
    margin: 0 auto;
    overflow: hidden

    .inner-img {
      width: 60px;
      height: 60px;
    }
  }

  // .transition-div:hover  {
  //   transform: translateX(300px)
  // }
</style>