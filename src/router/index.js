import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'
import NotFound from '@/views/NotFound'
import Login from '@/views/Login'
import Register from '@/views/Register'
import PlaylistDetail from '@/views/PlaylistDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:q',
    name: 'Search',
    component: SearchResults
  },
  {
    path: '/playlist/:pId',
    name: 'Playlist',
    component: PlaylistDetail,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
