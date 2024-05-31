import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import Axios from "axios";

Vue.config.productionTip = false;

import "swiper/css/swiper.css";
import "swiper/swiper.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import "@/assets/main.scss";
Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  // console.log(token);
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
