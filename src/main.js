import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import vueEsign from 'vue-esign'
Vue.use(vueEsign)

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)

import vuePicturePreview from 'vue-picture-preview';
Vue.component('Previewer', vuePicturePreview);

Vue.prototype.$axios = Axios
Vue.use(ElementUI)
Vue.config.productionTip = false

//自定义拖动
Vue.directive('drag',
     function (el, binding) {
        let oDiv = el;   //当前元素
         oDiv.onmousedown = function (e) {
            e.preventDefault();
            let bw = document.body.clientWidth;
            let bh = document.body.clientHeight;
            //鼠标按下，计算当前元素距离可视区的距离
             let disX = e.clientX - oDiv.offsetLeft;
             let disY = e.clientY - oDiv.offsetTop;
             // 计算两边坐标
             document.onmousemove = function (e) {
                 let l = 0, t = 0;
                 // 拖动边界
                 if (e.clientX >= bw) {
                     l = bw - disX;
                 } else if (e.clientX <= 0) {
                     {
                         l = 0- disX;
                     }
                 } else {
                     l = e.clientX - disX;
                 }
                 if (e.clientY >= bh) {
                     t = bh - disY;
                 }else if(e.clientY <= 0) {
                     t = 0- disY;
                 }
                 else {
                     t = e.clientY - disY;
                 }
                 //移动当前元素
                 oDiv.style.left = l + 'px';
                 oDiv.style.top = t + 'px';
             };
             // 鼠标停止移动时，事件移除
             document.onmouseup = function (e) {
                 document.onmousemove = null;
                 document.onmouseup = null;
             };
         };
     }
 )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
