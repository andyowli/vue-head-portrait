import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import("../view/Index/index.vue")
  },
  {
    path:'/wrapper',
    name:'wrapper',
    component:() => import("../view/Wrapper/wrapper.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


