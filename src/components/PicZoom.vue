<template>
    <div>
        <div style="border: 1px solid red; width: 400px;height: 400px">
            <pic-zoom :url="imgSrc" :scale="3" style="width: 400px;height: 400px"></pic-zoom>
        </div>
        <div style="position: fixed; bottom:20px; left: 38%;">
            <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
            <!-- <el-button type="primary" @click="$router.push('/PicZoom')">next</el-button> -->
        </div>
    </div>
</template>

<script>
    import PicZoom from 'vue-piczoom'
    export default {
        name: "GoBuy",
        
        components: {
            PicZoom
        },
        data() {
            return {
                imgSrc: require('../assets/logo.png'),
            }
        }
        
    }
</script>

<style scoped>

</style>