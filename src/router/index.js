import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/search/:q',
    name: 'Search',
    component: () => import('@/views/SearchResults')
  },
  {
    path: '/playlist/:pId',
    name: 'Playlist',
    component: () => import('@/views/PlaylistDetail'),
    props: true
  },
  {
    path: '/artist/:aId',
    name: 'Artist',
    component: () => import('@/views/ArtistDetail'),
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('@/views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
