import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'
import NotFound from '@/views/NotFound'

export const routes = [
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
