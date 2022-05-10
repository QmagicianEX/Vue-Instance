<template>
  <div>
    <div ref="qrcode" style="width: 150px; height: 150px; margin: 0 auto"></div>
    <div style="left: 38%;">
      <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
      <!-- <el-button type="primary" @click="$router.push('/Transition')">next</el-button> -->
    </div>
  </div>
</template>

<script>

import QRcode from 'qrcodejs2'

export default {
  data() {
    return {

    }
  },

  mounted() {
    this.$refs.qrcode.innerHTML = ''
    const qr = new QRcode(this.$refs.qrcode, {
      width: 150,
      height: 150,
      text: 'http://192.168.0.101:9999/#/VueEsign?id=123&t=' + new Date().getTime(),
      colorDark : "#000",
      colorLight : "#fff"
    })
  },

  methods: {

  }
}
</script>

<style lang="stylus" scoped>

</style>