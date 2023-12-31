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
    component: () => import('@/components/ScreenShotUpload.vue')
  },
  {
    path: '/AutoLayout',
    name: 'AutoLayout',
    component: () => import('@/components/AutoLayout.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
