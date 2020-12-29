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
    component: Home,
    meta: { title: 'Home | uocify' }
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchResults,
    props: true,
    meta: { title: 'Búsqueda | uocify' }
  },
  {
    path: '/playlist/:playlistId',
    name: 'Playlist',
    component: PlaylistDetail,
    props: true,
    meta: { title: 'Playlist | uocify' }
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound,
    meta: { title: '404 | uocify' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Iniciar sesión | uocify' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Registrar | uocify' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Set Meta Title for every page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'uocify'
  next()
})

export default router
