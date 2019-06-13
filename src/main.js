import Vue from 'vue'
import './app/plugins/vuetify'
import Vuetify from "vuetify";
import App from './app/App.vue'
import router from "./router";
import store from "./app/stores";
import AuthPlugin from "./app/plugins/auth";

import { CHECK_AUTH } from "./app/stores/actionTypes";
import ApiService from "./common/apiService";

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

ApiService.init();

router.beforeEach((to, from, next) => {
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next);
} )

Vue.use(AuthPlugin);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
