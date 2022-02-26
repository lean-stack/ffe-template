import Vue from 'vue';

Vue.config.productionTip = false;

// Bootstrap
import BootstrapVue, { IconsPlugin } from 'bootstrap-vue';
import '@/assets/base.scss';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Router
import router from '@/router.js';

// The App
import App from '@/App.vue';
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
