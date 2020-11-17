import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchResults
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
