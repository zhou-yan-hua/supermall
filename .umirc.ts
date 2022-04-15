import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/home/Home' },
        { exact: true, path: '/home', component: '@/pages/home/Home' },
        { exact: true, path: '/profile', component: '@/pages/profile/Profile' },
        { exact: true, path: '/cart', component: '@/pages/cart/Cart' },
        {
          exact: true,
          path: '/category',
          component: '@/pages/category/Category',
        },
      ],
    },
    { path: '/home', exact: true, component: '@/pages/home/Home' },
  ],
  fastRefresh: {},
  mfsu: {},
  // history: {
  //   type: 'hash'
  // },
});
