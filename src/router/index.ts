import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import("../view/Index/index.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


