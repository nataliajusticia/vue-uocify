import Vue from 'vue'

// Format numbers
Vue.filter('formatNumber', function (value) {
  const rounded = Math.round(value * 100) / 100
  return rounded.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
})

// Format time
Vue.filter('formatTime', function (value) {
  const hours = Math.floor(value / 60)
  const minutes = value % 60
  const hh = hours < 10 ? `0${hours}` : hours
  const mm = minutes < 10 ? `0${minutes}` : minutes
  return `${hh}:${mm}`
})
