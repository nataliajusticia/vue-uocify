import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './firebase'

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import custom styles
import './styles/main.scss'

// Use fontawesome icons
library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
