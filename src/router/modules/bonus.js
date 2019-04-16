import layout from '@/views/layout/layout'

const bonusrouter = {
  path: '/bonus',
  component: layout,
  redirect: '/bonus/index',
  meta: { title: '奖金条', icon: 'bonus',roles: ['jingjike']},
  children: [
    {
      path: 'index',
      component: () => import('@/views/bonus/index'),
      name: 'bonus',
      meta: { title: '奖金条', icon: 'bonus',roles: ['jingjike']}
    }
  ]
}

export default bonusrouter