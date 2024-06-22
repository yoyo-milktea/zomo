import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import service from './utils/http.js'
import './common/common.scss'
import '../theme/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
