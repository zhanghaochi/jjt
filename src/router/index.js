import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

import {bonus} from './modules'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    component: layout,
    redirect: 'homepage',
    children: [
      {
        path: 'homepage',
        component: () => import('@/views/homepage/index'),
        name: 'homepage',
        meta: { title: '首页', icon: 'homepage'}
      }
    ]
  },
  {
    path: '/ceshi',
    component: layout,
    redirect: '/ceshi',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ceshi/index'),
        name: 'ceshi',
        meta: { title: '测试页', icon: 'ceshi'}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401')
  }
]


export const asyncRouterMap = [
  {
    bonus
  }
]



export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
