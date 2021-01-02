import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home') // dynamic imports
const SearchResults = () => import('@/views/SearchResults')
const PlaylistDetail = () => import('@/views/PlaylistDetail')
const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const NotFound = () => import('@/views/NotFound')

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
