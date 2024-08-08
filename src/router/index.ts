import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TeacherDetail from '@/views/TeacherDetail.vue'
import TeachersView from '@/views/TeachersView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: TeachersView
    },
    {
      path: '/teacher_detail',
      name: 'teacher_detail',
      component: TeacherDetail
    },
    {
      path: '/admin',
      name: 'admin',
      component: DashboardView
    },
  ]
})

export default router
