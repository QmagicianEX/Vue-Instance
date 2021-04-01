<template>
  <div class="home">
    <input type="checkbox" >
    <svg width="400" height="400">
      <circle fill="none" stroke="#68E534" stroke-width="20" cx="200" cy="200" r="190" 
        class="circle" stroke-linecap="round" transform="rotate(-90 200 200)"
      />
      <polyline fill="none" stroke="#38E534" stroke-width="24" points="88,214 173,284 304,138" stroke-linecap="round" stroke-linejoin="round" class="tick" />      
    </svg>
    <h2 class="title">Payment Success</h2>
    <div style="left: 38%;">
      <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
      <el-button type="primary" @click="$router.push('/AutoLayout')">next</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'successTick',
  data () {
    return {
    };
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
  }
  h2 {
    font-family:Helvetica;
    font-size: 36;
    margin-top: 40px;
    color: #333;
    opacity: 0;
  }
  input[type="checkbox"]:checked ~ h2 {
    animation: .6s title ease-in-out;
    animation-delay: 1.2s
    animation-fill-mode: forwards;
  }
  .circle {
    stroke-dasharray: 1194;
    stroke-dashoffset:1194; 
  }
  input[type="checkbox"]:checked + svg .circle {
    animation: circle 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .tick {
    stroke-dasharray: 350;
    stroke-dashoffset:350;
  }
  input[type="checkbox"]:checked + svg .tick {
    animation: tick .8s ease-out;
    animation-fill-mode: forwards;
    animation-delay: .95s
  }
  @keyframes circle {
    from {
      stroke-dashoffset: 1194;
    }
    to {
      stroke-dashoffset: 2388 
    }
  }
  @keyframes tick {
    from {
      stroke-dashoffset: 350;
    }
    to {
      stroke-dashoffset: 0 
    }
  }
  @keyframes title {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>