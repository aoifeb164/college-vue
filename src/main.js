/**
 * @Date:   2021-02-21T12:50:35+00:00
 * @Last modified time: 2021-02-21T17:25:55+00:00
 */



import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
