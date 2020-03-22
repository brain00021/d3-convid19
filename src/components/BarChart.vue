<template>
  <div :id="`bar-chart-${id}`" style="position:relative"></div>
</template>

<script>
import * as d3 from 'd3';
export default {
  name: 'LineChart',
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
      const data = [
        {
          value: 10,
          name: '18:35'
        },
        {
          value: 12,
          name: '18:55'
        },
        {
          value: 0,
          name: '19:15'
        },
        {
          value: 3,
          name: '19:35'
        },
        {
          value: 18,
          name: '19:55'
        },
        {
          value: 0,
          name: '20:15'
        },
        {
          value: 5,
          name: '20:35'
        },
        {
          value: 9,
          name: '20:55'
        },
        {
          value: 5,
          name: '21:15'
        },
        {
          value: 4,
          name: '21:35'
        },
        {
          value: 16,
          name: '21:55'
        },
        {
          value: 8,
          name: '22:15'
        }
      ];
        //   svg 設置要布置的區塊
      const margin = {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10
      };
      const chartWidth = 470 - margin.left - margin.right;
      const chartHeight = 210 - margin.top - margin.bottom;

    // 調整大小
      
      const x = d3
        //  計算寬度
        .scaleBand()
        // 實際的最小值為30、最大值為1000
        .domain(data.map(e => e.name))
        // 畫布長度的最小值為0、最大值為400
        .range([0, chartWidth])
        // padding的寬度
        .paddingInner(0.4);
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data.map(e => e.value))])
        .range([chartHeight, 0]);
    
      const svg = d3
        .select(`#bar-chart-${this.id}`)
        .append('svg')
        .attr('width', chartWidth + margin.left + margin.right)
        .attr('height', chartHeight + margin.top + margin.bottom);
        // .attr('height', chartHeight + margin.top + margin.bottom)
        // .append('g')
        // .attr('transform', `translate(${margin.left}, ${margin.top})`);
      const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);
      // tickSize就是tick的長度，設定為chart的寬度就會是滿版了
      const yAxisCall = d3.axisLeft(y).tickSize(chartWidth);
      g.append('g')
        .attr('class', 'y-axis')
        .call(yAxisCall)
        .attr('transform', `translate(${chartWidth}, 0)`);

      g.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        //將name直接丟進去x()
        .attr('class','bar')
        .attr('x', d => x(d.name))
        .attr('y', () => chartHeight)
        // 寬度直接使用它幫我們算好的
        .attr('width', x.bandwidth)
        // .attr('height', d => chartHeight - y(d.value))
        .attr('fill', '#00BAB6')
        .attr('rx', 3)
        .attr('height', 0)
        .transition()
        .duration(750)
        .delay((d, i) => i * 30)
        .ease(d3.easeCubic)
        .attr('height', d => chartHeight - y(d.value))
        .attr('y', d => y(d.value));

        // 建立標籤
        g.selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        // x(d.name)的位置其實是柱子的最左邊，所以文字位置還必須加上半個柱子的寬度
        .attr('x', d => x(d.name) + x.bandwidth() / 2) 
        .attr('y', chartHeight + 15)
        // 文字置中
        .attr('text-anchor', 'middle')
        .attr('font-size', 12)
        .attr('fill', '#9B9B9B')
        // 第2、4、6...的資料不要顯示，不然會太擠
        .text((d, i) => i % 2 === 0 ? d.name : '')

        // hover的線條
        const dashLine = g
        .append('line')
        .attr('class', 'dash-line')
        .attr('y1',0)
        .attr('y2',chartHeight)
        .attr('stroke','#454545')
        .attr('stroke-width',1)
        .attr('stroke-dasharray',8)
        .attr('opacity','0')

        const messageWrapper = d3
        .select(`#bar-chart-${this.id}`) // 先做一組 id
        .append('div') // 新增一個div
        .attr('class', 'message-wrapper') // 加上class
        .html('<div class="circle"></div><div class="data"></div>') // 放入要放的資料
        .attr('style', 'display: none;'); // 先預設style

        g.selectAll('.hover-block')
        .data(data)
        .enter()
        .append('rect')
        .attr('class','hover-block')
        .attr('width',x.step)
        .attr('height',chartHeight)
        .attr('fill','transparent')
        .attr('x',d=> x(d.name) - (x.step() - x.bandwidth()) /2)
        .on('mouseover',(d,i)=>{
          console.log(d,i);
          dashLine
          .attr('x1', () => x(d.name) + x.bandwidth() / 2)
          .attr('x2', () => x(d.name) + x.bandwidth() / 2)
          .attr('opacity',1);
          d3.select('.message-wrapper .data').html(`${d.value} mm`);
          messageWrapper
            .attr('style', () => `display: flex; left: ${x(d.name) + 30}px`);
        })
        .on('mouseleave',(d,i) =>{
          dashLine.attr('opacity',0);
          messageWrapper.attr('style','display:none;');
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
  width: 102px;
  height: 34px;
  background: #ffffff;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.09);
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
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