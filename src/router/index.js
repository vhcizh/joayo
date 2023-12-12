import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'board',
    component: () => import('@/views/BoardView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/LoginView.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('@/views/JoinView.vue')
  },
  {
    path: '/write',
    name: 'write',
    component: () => import('@/views/WriteView.vue')
  },
  {
    path: '/postings/:postingId',
    name: 'postings',
    component: () => import('@/views/PostingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
