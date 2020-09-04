import Vue from 'vue'
import VueRouter from 'vue-router'
import DOSCG from '../views/DOSCG.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'DOSCG',
    component: DOSCG
  },
  {
    path: '/xyzvalue',
    name: 'XYZvalue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/XYZvalue.vue')
  },
  {
    path: '/bcvalue',
    name: 'BCvalue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BCvalue.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
