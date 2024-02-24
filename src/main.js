import Vue from "vue";

import "normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

import App from "./App.vue";
import store from "./store";
// import router from './router'

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
});
