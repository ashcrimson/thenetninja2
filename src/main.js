import Vue from 'vue'
import App from './App.vue'
import router from './router'

export const bus = new Vue();

new Vue({
  el:'#app',
  router,
  render: h => h(App)
}).$mount('#app')
