import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/hire',
    name: 'hire',
    component: () => import('../pages/content2020/Hire.vue')
  },
  {
    path: '/lighting',
    name: 'lighting',
    component: () => import('../pages/content2020/Lighting.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../pages/content2020/Services.vue')
  },
  {
    path: '/sfx',
    name: 'sfx',
    component: () => import('../pages/content2020/Sfx.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
