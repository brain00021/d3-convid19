import Vue from 'vue'
import App from './App.vue'
// import filters from './filters';
Vue.filter('comman', function (n) {
  return n.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
  });
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
