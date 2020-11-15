import Vue from 'vue'
import App from './App.vue'

// Import libraries
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import styles
import './styles/main.scss'

// Use fontwesome icons
library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt)
Vue.component('fa-icon', FontAwesomeIcon)

// Use bootstrap
Vue.use(BootstrapVue)

// Vue config
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
