export default [
  {
    path: '/',
    name: 'redindex',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '小豆芽助手'
    },
    component: () => import('@/views/index.vue')
  },
  {
    path: '/socialSecurity',
    name: 'socialSecurity',
    meta: {
      title: '小豆芽助手'
    },
    component: () => import('@/views/content/socialSecurity.vue')
  },
  {
    path: '/applySuccess',
    name: 'applySuccess',
    meta: {
      title: '小豆芽助手'
    },
    component: () => import('@/views/content/applySuccess.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: '小豆芽助手'
    },
    component: () => import('@/views/content/contact.vue')
  },
  {
    path: '/credit',
    name: 'credit',
    meta: {
      title: '小豆芽助手'
    },
    component: () => import('@/views/content/credit.vue')
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
