import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import GHAccounts from '@/views/GHAccounts.vue';
import DataAndMethods from '@/views/komponenten/DataAndMethods.vue';
import Directives from '@/views/komponenten/Direktiven.vue';
import Computed from '@/views/komponenten/Computed.vue';
import Properties from '@/views/komponenten/Properties.vue';
import Slots from '@/views/komponenten/Slots.vue';
import TemplateRefs from '@/views/komponenten/TemplateRefs.vue';
import LineChartDemo from '@/views/d3/LineChartDemo.vue';
import DynamicChartDemo from '@/views/d3/DynamicChartDemo.vue';

/**
 * @type { import("vue-router").RouteConfig[] }
 */
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/gh', component: GHAccounts },
  { path: '/komponenten/data-methods', component: DataAndMethods },
  { path: '/komponenten/directives', component: Directives },
  { path: '/komponenten/computed', name: 'computed', component: Computed },
  { path: '/komponenten/props', name: 'props', component: Properties },
  { path: '/komponenten/slots', name: 'slots', component: Slots },
  { path: '/komponenten/refs', name: 'refs', component: TemplateRefs },
  { path: '/d3/lcd', component: LineChartDemo },
  { path: '/d3/dcd', component: DynamicChartDemo },
  { path: '/:pathMatch(.*)*', component: Home },
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes,
});
