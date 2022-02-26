import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import DataAndMethods from '@/views/komponenten/DataAndMethods.vue';
import Directives from '@/views/komponenten/Direktiven.vue';
import Computed from '@/views/komponenten/Computed.vue';
import Properties from '@/views/komponenten/Properties.vue';

/**
 * @type { import("vue-router").RouteConfig[] }
 */
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/komponenten/data-methods', component: DataAndMethods },
  { path: '/komponenten/directives', component: Directives },
  { path: '/komponenten/computed', name: 'computed', component: Computed },
  { path: '/komponenten/props', name: 'props', component: Properties },
  { path: '/:pathMatch(.*)*', component: Home },
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes,
});
