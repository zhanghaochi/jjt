import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
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
    redirect: '/ceshi/index',
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
    path: '/bonus',
    component: layout,
    redirect: '/bonus/index',
    meta: { title: '奖金条上传', icon: 'bonus',roles: ['jingjike']},
    children: [
      {
        path: 'index',
        component: () => import('@/views/bonus/index'),
        name: 'bonus',
        meta: { title: '奖金条上传', icon: 'bonus',roles: ['jingjike']}
      }
    ]
  },
  {
    path: '/salary',
    component: layout,
    redirect: '/salary/index',
    meta: { title: '工资条上传', icon: 'salary',roles: ['caiwuke']},
    children: [
      {
        path: 'index',
        component: () => import('@/views/salary/index'),
        name: 'salary',
        meta: { title: '工资条上传', icon: 'salary',roles: ['caiwuke']}
      }
    ]
  },
  {
    path: '/tel',
    component: layout,
    redirect: '/tel/index',
    meta: { title: '座机固话', icon: 'tel',roles: ['yuanban']},
    children: [
      {
        path: 'index',
        component: () => import('@/views/tel/index'),
        name: 'tel',
        meta: { title: '座机固话', icon: 'tel',roles: ['yuanban']}
      }
    ]
  }
]



export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
