<template>
  <div :id="`bar-chart-${id}`" style="position:relative"></div>
</template>

<script>
import * as d3 from 'd3';
export default {
  name: 'LineChart',
  props: ['title', 'chartData'],
  data() {
    return {
      id: Date.now()
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const data = this.chartData;
      const isAllZero = data.every(e => e.Cases === 0);
      const margin = {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10
      };
      const rwdWitdh = (window.innerWidth > 768) ? 900 : window.innerWidth;
      const chartWidth = rwdWitdh - margin.left - margin.right;
      const chartHeight = 210 - margin.top - margin.bottom;
      const x = d3
        .scaleBand()
        .domain(data.map(e => e.Country))
        .range([0, chartWidth])
        .paddingInner(0.4);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data.map(e => e.Cases))])
        .range([chartHeight, 0]);

      const svg = d3
        .select(`#bar-chart-${this.id}`)
        .append('svg')
        .attr('width', chartWidth + margin.left + margin.right)
        .attr('height', chartHeight + margin.top + margin.bottom);

      const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

      const yAxisCall = d3.axisLeft(y).tickSize(chartWidth);

      g.append('g')
        .attr('class', 'y-axis')
        .call(yAxisCall)
        .attr('transform', `translate(${chartWidth}, 0)`);

      g.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.Country))
        .attr('y', () => chartHeight)
        .attr('width', x.bandwidth)
        .attr('fill', '#00BAB6')
        .attr('rx', 3)
        .attr('height', 0)
        .transition()
        .duration(750)
        .delay((d, i) => i * 30)
        .ease(d3.easeCubic)
        .attr('height', d => isAllZero ? 0 : chartHeight - y(d.Cases))
        .attr('y', d => y(d.Cases));

      g.selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', d => x(d.Country) + x.bandwidth() / 2)
        .attr('y', chartHeight + 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', 12)
        .attr('fill', '#9B9B9B')
        .text((d, i) => (d.Country));

      const dashLine = g
        .append('line')
        .attr('class', 'dash-line')
        .attr('y1', 0)
        .attr('y2', chartHeight)
        .attr('stroke', '#454545')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', 8)
        .attr('opacity', '0');

      const messageWrapper = d3
        .select(`#bar-chart-${this.id}`)
        .append('div')
        .attr('class', 'message-wrapper')
        .html('<div class="circle"></div><div class="data"></div>')
        .attr('style', 'display: none;');


      
      g.selectAll('.hover-block')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'hover-block')
        .attr('width', x.step)
        .attr('height', chartHeight)
        .attr('fill', 'transparent')
        .attr('x', d => x(d.Country) - (x.step() - x.bandwidth()) / 2)
        .on('mouseover', (d) => {
          dashLine
            .attr('x1', () => x(d.Country) + x.bandwidth() / 2)
            .attr('x2', () => x(d.Country) + x.bandwidth() / 2)
            .attr('opacity', 1);
          let spanIcon = `
            <div class='barIcondetail barFont'> 
              ${d.Country}
            </div>
            <div class='barIcondetail'> 
              <i class="blue fa fa-users fa-2x"></i> ${d.Cases} 
            </div>
            <div class='barIcondetail'> 
              <i class="red fa fa-users fa-2x"></i> ${d.Deaths}
            </div>
            <div class='barIcondetail'> 
              <i class="green fa fa-users fa-2x"></i> ${d.Recovered}
            </div>
          `;

          d3.select('.message-wrapper .data').html(spanIcon);

          messageWrapper
            .attr('style', () => `display: flex; left: ${x(d.Country) + 30}px`);
        })
        .on('mouseleave', () => {
          dashLine.attr('opacity', 0);
          messageWrapper.attr('style', 'display: none;');
        });
    }
  }
};
</script>

<style>
/* //隱藏座標的數值 */
.y-axis text {
  display: none;
}
/* //隱藏座標的y直線 */
.y-axis .domain {
  display: none;
}
/* //改變tick的顏色 */
.y-axis .tick line {
  stroke: #E8E8E8;
}
/* //太多條線了 將偶數的隱藏 */
.y-axis .tick:nth-child(even) {
  display: none;
}

.message-wrapper {
  border-radius: 4px;
  width: auto;
  background: #ffffff;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.09);
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  padding:10px;
  padding-left: 15px;
}
.message-wrapper .circle {
  border-radius: 50%;
  height: 11px;
  width: 11px;
  background-color: #00bab6;
}
.message-wrapper .data {
  font-size: 12px;
  color: #7e7e7e;
  margin-left: 10px;
}
</style>