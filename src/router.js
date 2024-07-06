import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/home'
import BlogsPage from './pages/blogs'

const routes = [
  { path: '/', component: HomeView },
  { path: '/myblog', component: BlogsPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router