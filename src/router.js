import { createRouter, createWebHashHistory } from 'vue-router'


import App from './App.vue'
import RegistreraView from './views/RegistreraView.vue'
import SignView from './views/SignView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: RegistreraView,
      path: '/medlem'
    },
    {
      component: SignView,
      path: '/loggain'
    },

  ]
})
