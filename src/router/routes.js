import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'

export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/search',
    component: SearchResults
  }
]
