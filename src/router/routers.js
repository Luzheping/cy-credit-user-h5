export default [
  {
    path: '/',
    name: 'index',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '车云信贷'
    },
    component: () => import('@/views/index.vue')
  },
  {
    path: '/socialSecurity',
    name: 'socialSecurity',
    meta: {
      title: '社保信息'
    },
    component: () => import('@/views/content/socialSecurity.vue')
  },
  {
    path: '/error404',
    name: 'error404',
    meta: {
      title: '404'
    },
    component: () => import('@/views/error/error404.vue')
  }
]
