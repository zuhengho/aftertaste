// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// for vutify
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
const vuetifyOptions = {
  icons: {
    iconfont: "mdiSvg" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
};

Vue.use(VueSweetalert2);
Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  vuetify: new Vuetify(vuetifyOptions),
  components: { App },
  template: "<App/>"
});
