import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN"; // lang i18n
import VCharts from "v-charts";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(VCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
