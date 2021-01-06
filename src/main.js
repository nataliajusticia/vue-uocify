import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import './firebase'
import './filters'

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import custom styles
import './styles/main.scss'

// Import service worker
import './registerServiceWorker'

// Use fontawesome icons
library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt, faSignInAlt)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Use vue-meta
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
