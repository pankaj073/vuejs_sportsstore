import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import store from "./store";
import router from "./router";


Vue.filter("currency", (value) => Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" })
  .format(value));
  
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
