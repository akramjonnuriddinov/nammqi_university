import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TeacherDetail from '@/views/TeacherDetail.vue'
import TeachersView from '@/views/TeachersView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProfileView from '@/views/ProfileView.vue'

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
      path: '/teacher/:id',
      name: 'teacher',
      component: TeacherDetail
    },
    {
      path: '/admin',
      name: 'admin',
      component: DashboardView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
