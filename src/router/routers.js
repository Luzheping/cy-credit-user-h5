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
      title: '小豆芽助手',
      keepAlive: true
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
    path: '/personCenter',
    name: 'personCenter',
    meta: {
      title: '个人中心'
    },
    component: () => import('@/views/personCenter/personCenter.vue')
  },
  {
    path: '/modPhone',
    name: 'modPhone',
    meta: {
      title: '变更手机号'
    },
    component: () => import('@/views/personCenter/modPhone.vue')
  },
  {
    path: '/contactMe',
    name: 'contactMe',
    meta: {
      title: '联系过我'
    },
    component: () => import('@/views/personCenter/contactMe.vue')
  },
  {
    path: '/viewMe',
    name: 'viewMe',
    meta: {
      title: '查看过我'
    },
    component: () => import('@/views/personCenter/viewMe.vue')
  },
  {
    path: '/callbackRecord',
    name: 'callbackRecord',
    meta: {
      title: '回拨记录'
    },
    component: () => import('@/views/personCenter/callbackRecord.vue')
  },
  {
    path: '/applyRecord',
    name: 'applyRecord',
    meta: {
      title: '申请记录'
    },
    component: () => import('@/views/personCenter/applyRecord.vue')
  },
  {
    path: '/platformAdvise',
    name: 'platformAdvise',
    meta: {
      title: '平台建议'
    },
    component: () => import('@/views/personCenter/platformAdvise.vue')
  },
  {
    path: '/helpLoan',
    name: 'helpLoan',
    meta: {
      title: '协助贷款'
    },
    component: () => import('@/views/personCenter/helpLoan.vue')
  },
  {
    path: '/protocol',
    name: 'protocol',
    meta: {
      title: '小豆芽助手协议'
    },
    component: () => import('@/views/protocol/protocol.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      title: '小豆芽助手'
    },
    component: () => import('@/views/product/productIndex.vue')
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
