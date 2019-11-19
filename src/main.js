import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/AHlogin.css'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
