import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index'
import {store} from './store/index'
import './registerServiceWorker'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'

Vue.config.productionTip = false

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
