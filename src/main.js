import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuex from "vuex";
import store from "./store/index";
import "nprogress/nprogress.css";
import Notifications from "vue-notification";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Notifications);
new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
