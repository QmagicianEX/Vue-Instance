import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ScreenShotUpload',
    name: 'ScreenShotUpload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/ScreenShotUpload')
  },
  {
    path: '/AutoLayout',
    name: 'AutoLayout',
    component: () => import('@/components/AutoLayout')
  },
  {
    path: '/SuccessTick',
    name: 'SuccessTick',
    component: () => import('@/components/SuccessTick')
  },
  {
    path: '/UploadImgAndDragSort',
    name: 'UploadImgAndDragSort',
    component: () => import('@/components/UploadImgAndDragSort')
  },
  {
    path: '/UploadProgress',
    name: 'UploadProgress',
    component: () => import('@/components/UploadProgress')
  },
  {
    path: '/PicZoom',
    name: 'PicZoom',
    component: () => import('@/components/PicZoom')
  },
  {
    path: '/TableDislocation',
    name: 'TableDislocation',
    component: () => import('@/components/TableDislocation')
  },
  {
    path: '/VmodelObject',
    name: 'VmodelObject',
    component: () => import('@/components/VmodelObject')
  },
  {
    path: '/InfiniteScroll',
    name: 'InfiniteScroll',
    component: () => import('@/components/InfiniteScroll')
  },
  {
    path: '/Transition',
    name: 'Transition',
    component: () => import('@/components/Transition')
  },
  {
    path: '/Cascader',
    name: 'Cascader',
    component: () => import('@/components/Cascader')
  },
  {
    path: '/Qrcode',
    name: 'Qrcode',
    component: () => import('@/components/Qrcode')
  },
  {
    path: '/VueEsign',
    name: 'VueEsign',
    component: () => import('@/components/VueEsign')
  },
  {
    path: '/ImagePreview',
    name: 'ImagePreview',
    component: () => import('@/components/ImagePreview')
  },
  {
    path: '/Drag',
    name: 'Drag',
    component: () => import('@/components/ZoomPictureDrag')
  },
  {
    path: '/VDatePicker',
    name: 'VDatePicker',
    component: () => import('@/components/VDatePicker')
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: () => import('@/components/Calendar/main.vue')
  },
  {
    path: '/Html2canvas',
    name: 'Html2canvas',
    component: () => import('@/components/Html2canvas')
  },
  {
    path: '/DataSelect',
    name: 'DataSelect',
    component: () => import('@/components/DataSelect')
  },
  {
    path: '/LazyLoad',
    name: 'LazyLoad',
    component: () => import('@/components/LazyLoad')
  },
  {
    path: '/ClickTypeShow',
    name: 'ClickTypeShow',
    component: () => import('@/components/ClickTypeShow')
  }
]

const router = new VueRouter({
  routes
})

export default router
