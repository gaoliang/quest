import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import vuetify from './plugins/vuetify'
import db from './server/dbstore'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.prototype.$db = db
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
