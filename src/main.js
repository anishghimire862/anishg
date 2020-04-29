import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'


import routes from './routes'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueClipboard)

const router = new VueRouter({mode: 'history', routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),
//   mounted () {
//     document.dispatchEvent(new Event('render-event'))
//   }
// })