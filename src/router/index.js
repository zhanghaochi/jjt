import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)


export const constantRouterMap = [
  {
    path: '/',
    name: 'layout',
    // component: () => import('./views/About.vue')
    component:layout
  },

]
export const asyncRouterMap = []



export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
