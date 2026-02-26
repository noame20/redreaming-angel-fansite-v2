import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Members from '../views/Members.vue'
import Music from '../views/Music.vue'
import Gallery from '../views/Gallery.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/members/:id',
    name: 'MemberDetail',
    component: () => import('../views/MemberDetail.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
