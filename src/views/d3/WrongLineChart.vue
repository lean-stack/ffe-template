<script>
// https://medium.com/@lambrospd/5-simple-rules-to-data-visualization-with-vue-js-and-d3-js-f6b2bd6a1d40
import * as d3 from 'd3';

export default {
  name: 'WrongLineChart',
  props: {
    data: {
      required: true,
      type: Array,
    },
  },
  mounted() {
    const svg = d3.select(this.$el)
      .append('svg')
      .attr('width', 500)
      .attr('height', 270)
      .append('g')
      .attr('transform', 'translate(0, 10)');
    const x = d3.scaleLinear().range([0, 430]);
    const y = d3.scaleLinear().range([210, 0]);
    d3.axisLeft().scale(x);
    d3.axisTop().scale(y);
    x.domain(d3.extent(this.data, (d, i) => i));
    y.domain([0, d3.max(this.data, d => d)]);
    const createPath = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d));
    svg.append('path')
      .attr('d', createPath(this.data))
      .attr('fill', 'none')
      .attr('stroke', '#76BF8A')
      .attr('stroke-width', '3px')
  },
};
</script>

<template>
  <div class="demo-chart" />
</template>

<style lang="sass">
.demo-chart
  svg
    margin: 25px
</style>