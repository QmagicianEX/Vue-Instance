<template>
  <div>
    <div id="qrcode" style="width: 150px; height: 150px; margin: 0 auto"></div>
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
    const qr = new QRcode('qrcode', {
      width: 150,
      height: 150,
      text: 'http://192.168.0.101:9999/#/VueEsign?id=123',
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