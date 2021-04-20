/**
 * @Date:   2021-02-21T12:50:35+00:00
 * @Last modified time: 2021-04-20T17:08:11+01:00
 */


// importing plugins and 3rd party components 

import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'


Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
