<template>
  <div>
    <app-hero>
      <h2>Dynamic D3 Line Chart</h2>
      <template #footer>
        <a
          class="text-light"
          href="https://medium.com/@lambrospd/5-simple-rules-to-data-visualization-with-vue-js-and-d3-js-f6b2bd6a1d40"
          >Link</a
        >
      </template>
    </app-hero>
    <div class="container mt-4 text-center">
      <div class="d-flex">
        <div class="flex-grow-1">
          <h3>Daten</h3>
          <div class="my-2" v-for="(v, ix) in data" :key="ix">
            <input
              max="100"
              min="1"
              class="bg-primary"
              type="range"
              v-model="data[ix]"
            />
            <span>{{ v }}</span>
          </div>
        </div>
        <line-chart :data="data" />
        <wrong-line-chart :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue';
import LineChart from './LineChart.vue';
import WrongLineChart from './WrongLineChart.vue';

export default {
  components: { AppHero, LineChart, WrongLineChart },
  data: () => ({
    data: [33, 71, 78, 25, 36, 92],
  }),
};
</script>

<style></style>
