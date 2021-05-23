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
  }
]

const router = new VueRouter({
  routes
})

export default router
