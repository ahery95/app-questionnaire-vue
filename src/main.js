import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import AHlogin from './components/AHlogin.vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/AHlogin.css'
import './assets/question.json'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  render: h => h(AHlogin)
}).$mount('#AHlogin')
