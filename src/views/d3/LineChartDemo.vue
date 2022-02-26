<template>
  <div>
    <app-hero>
      <h2>Most Basic D3 Line Chart</h2>
      <template #footer>
        <a
          class="text-light"
          href="https://www.d3-graph-gallery.com/graph/line_basic.html"
          >Link</a
        >
      </template>
    </app-hero>
    <div class="container mt-4 text-center">
      <div ref="lineChart" id="d3-sample"></div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import AppHero from '@/components/AppHero.vue';

const dataUrl =
  'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv';

export default {
  components: { AppHero },
  mounted() {
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select('#d3-sample')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    d3.csv(
      dataUrl,

      // When reading the csv, I must format variables:
      function (d) {
        return { date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value };
      },

      // Now I can use this dataset:
      function (data) {
        data = [data];
        // Add X axis --> it is a date format
        var x = d3
          .scaleTime()
          .domain(
            d3.extent(data, function (d) {
              return d.date;
            })
          )
          .range([0, width]);
        svg
          .append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3
          .scaleLinear()
          .domain([
            0,
            d3.max(data, function (d) {
              return +d.value;
            }),
          ])
          .range([height, 0]);
        svg.append('g').call(d3.axisLeft(y));

        data = data[0];
        // Add the line
        svg
          .append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', 'steelblue')
          .attr('stroke-width', 1.5)
          .attr(
            'd',
            d3
              .line()
              .x(function (d) {
                return x(d.date);
              })
              .y(function (d) {
                return y(d.value);
              })
          );
      }
    );
  },
};
</script>

<style></style>
