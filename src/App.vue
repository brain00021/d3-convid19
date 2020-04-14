<template lang='pug'>
#app
  .main-container
    .header
      h1 COVID-19 CORONAVIRUS TRACKER
    .title-detail
      .title-icon.blue-border
        .detail-icon
          span.blue TOTAL CASES
          p {{ infectionPeopleTotal.cases | comman }}
        i.blue.fa.fa-users.fa-2x
      .title-icon.red-border
        .detail-icon
          span.red TOTAL DEATHS
          p {{ infectionPeopleTotal.deaths | comman }}
        i.red.fa.fa-plus-square.fa-2x
      .title-icon.green-border
        .detail-icon
          span.green TOTAL RECOVERD
          p {{ infectionPeopleTotal.recovered | comman }}
        i.green.fa.fa-child.fa-2x
      .title-icon.yellow-border
        .detail-icon
          span.yellow NEW CASES
          p {{ infectionPeopleTotal.todayCases | comman }}
        i.yellow.fa.fa-exclamation-circle.fa-2x
  .main-container(v-if="!loading")
    h2 Top 10 Epidemic Country
    barChart(:chartData="getTempChartData")
  .main-container
    h2 Confirmed Cases and Deaths by Country
    .select-wrapper
      ul.pagination(v-html='pagination' @click="switchPages")
      select#optionchoice(@change='fliter(newItem)' v-model="newItem")
        option(value="" selected="selected" ) ALL Country
        option(v-for="item in zone" :value="item"  selected) {{item}}
    table#country-detail.table.table-striped.table-bordered.table-hover
      thead
        tr
          th(v-for="title in infectionDataTitle") {{title}}
      tbody
        tr(v-for="(value,index) in displayDataResult")
          td
            | {{ value.id }}
          td.country-title
            .icon
              img(:src="value.flag")
            | {{value.Country}}
          td.importantnumber {{value.Cases | comman}}
          td.yellow {{value.NewCases  | comman }}
          td {{value.Deaths | comman}}
          td.red {{value.NewDeaths | comman}}
          td {{value.ActiveCases}}
          td {{value.Critical}}
          td.blue {{value.Recovered | comman}}


</template>

<script>
import axios from 'axios';
import vSelect from 'vue-select';
import moment from 'moment';
import sum from 'lodash/sum';
import 'vue-select/dist/vue-select.css';

// import RainfallBlock from './components/RainfallBlock';
// import SunBlock from './components/SunBlock';
// import LineChartBlock from './components/LineChartBlock';
import snow from './assets/snow.svg';
import temp from './assets/temp.svg';
import water from './assets/water.svg';
import barChart from './components/BarChart';
// 武漢病毒的呼叫
// const { NovelCovid } = require('novelcovid');
// const track = new NovelCovid();

export default {
  name: 'app',
  components: {
    vSelect,
    barChart
  },
  data() {
    return {
      cityData: [],
      infectionPeopleTotal: {},
      infectionDataTitle:[
        'Number',
        'Country',
        'Cases',
        'New Cases',
        'Deaths',
        'New Deaths',
        'Active Cases',
        'Critical',
        'Recovered'
      ],
      infectionCountryDataOri:[],
      loading: true,
      // 頁面樣式
      newItem: '',
      listData: [],
      zone: [],
      displayData: [],
      displayDataResult: [],
      totalPages: 0,
      pageNum: 1,
      contentNum: 20,
      pageLeng: 0,
      limitPage: 5,
      pagination: ''
    };
  },
  computed: {
    getTempChartData() {
      let result =  this.infectionCountryDataOri.filter((e,i)=>{
        return i < 11;
      });
      
      return result;
    },
  },
  created() {
    // this.getCityData();
    this.getNovelCovid();
    this.getAllCountryNovelCovid();
  },
  watch: {
    selected() {
      this.getWeatherData(this.selected.value);
    }
  },
  methods: {
    getNovelCovid() {
      axios.get('https://corona.lmao.ninja/all')
        .then((response) => {
          this.infectionPeopleTotal = response.data;
          // this.infectionPeopleTotal['recovered'] = data.recovered
          // this.infectionPeopleTotal['deaths'] = data.deaths
          // this.infectionPeopleTotal['cases'] = data.cases
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    getAllCountryNovelCovid() {
      axios.get('https://corona.lmao.ninja/countries?sort=country')
        .then((response) => {
          let recentData = response.data;
          recentData.map((value)=>{
            this.infectionCountryDataOri.push(
              {
                'Country': value.country,
                'flag': value.countryInfo.flag,
                'Cases': value.cases,
                'NewCases': value.todayCases,
                'Deaths': value.deaths,
                'NewDeaths': value.todayDeaths,
                'ActiveCases': value.active,
                'Critical': value.critical,
                'Recovered': value.recovered
              }
            )
          })
        }).then(() =>{
          this.infectionCountryDataOri.sort(function(a,b){
            return a.Cases < b.Cases ? 1: -1;
          })
          this.infectionCountryDataOri.map((d,i)=>{
            d['id'] = i+1
          })
          this.loading = false;
        }).then(()=>{
          this.zoneChoice()
          this.fliter(this.newItem)
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    zoneChoice: function () {
      this.infectionCountryDataOri.forEach((item, key) => {
        if (this.zone.indexOf(item.Country) === -1) {
          this.zone.push(item.Country)
        }
      })
    },
    fliter: function (val) {
      this.newItem = (val !== 'Country') ? val : ''
      this.displayData = []
      

      this.infectionCountryDataOri.map((item) => {
        if (item.Country === this.newItem.trim()) {
          this.displayData.push(item)
        };
      })

      if (this.newItem.trim() === '') {
        this.displayData = this.infectionCountryDataOri
      }
      this.pageNum = 1
      this.displayDistrice()
    },
    displayDistrice: function () {
      let start = this.pageNum * this.contentNum
      let newListData = []
      let dataLen = this.displayData.length

      // 頁數
      this.calPageNumb(dataLen)
      this.totalPages = dataLen

      if (dataLen > start) {
        dataLen = start
      } else {
        dataLen = this.displayData.length
      }

      for (let i = start - this.contentNum; i < dataLen; i++) {
        newListData.push(this.displayData[i])
      }

      this.displayDataResult = newListData
    },
    calPageNumb: function (counter) {
      let str = ''
      if (counter > this.contentNum) {
        this.pageLeng = Math.ceil(counter / this.contentNum)
        const prev = `<li class="pagePrev"><a href="#">Prev</a></li>`
        const next = `<li class="pageNext"><a href="#">Next</a></li>`
        for (let i = 1; i <= this.pageLeng; i++) {
          if (i === this.pageNum) {
            str += `<li class="pageItem"><a class="pageLink active" href="#">${i}</a></li>`
          } else {
            str += `<li class="pageItem"><a class="pageLink" href="#">${i}</a></li>`
          }
        }
        this.pagination = prev + str + next
      } else {
        str = `<li class="pageItem"><a class="pageLink active" href="#">1</a></li>`
        this.pagination = str
      }
    },
    switchPages: function (e) {
      // 切換頁面
      e.preventDefault()
      if (e.target.nodeName !== 'A') {
        return
      }

      // 切換頁碼
      if (e.target.textContent === 'Next') {
        if (this.pageNum === this.pageLeng) {
          this.pageNum = this.pageLeng
        } else {
          this.pageNum++
        }
      } else if (e.target.textContent === 'Prev') {
        if (this.pageNum === 1) {
          this.pageNum = 1
        } else {
          this.pageNum--
        }
      } else {
        this.pageNum = parseInt(e.target.textContent)
      }
      this.calPageNumb(this.totalPages)
      // 更新資料
      this.displayDistrice()
    }
  }
};
</script>

<style lang="scss">
@import './css/reset.css';
// @import './assets/scss/all.scss';

#app {
  font-family: 'Lato', sans-serif;
  background: #f4f5f7;
  min-height: 100vh;
}

.main-container {
  max-width: 900px;
  margin: 0 auto;
  padding:10px;
  padding-top: 40px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.vs__dropdown-toggle {
  background: #ffffff;
}

.vs__open-indicator {
  fill: #979797;
  opacity: 0.3;
}

.vs__selected {
  color: #7e7e7e;
}

.vs__dropdown-option {
  padding: 10px;
  color: #7e7e7e;
}

.vs__dropdown-option--highlight {
  background: rgba(0, 186, 183, 0.7);
  color: white;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #44ba00;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
