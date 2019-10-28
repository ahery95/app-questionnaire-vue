import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AHLogin from '../components/AHlogin.vue'
import AHQuestion from '../components/AHQuestion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: AHLogin
  },
  {
    path: '/questionnaire',
    name: 'Question',
    component: AHQuestion
  }
]

const router = new VueRouter({
  routes
})

export default router
