(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],f=0,u=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/d3-convid19/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0502":function(t,e,a){t.exports=a.p+"img/snow.1476404f.svg"},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},5387:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("b680"),a("ac1f"),a("5319"),a("e623"),a("e379"),a("5dc8"),a("37e1");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main-container"},[t._m(0),a("div",{staticClass:"title-detail"},[a("div",{staticClass:"title-icon blue-border"},[a("div",{staticClass:"detail-icon"},[a("span",{staticClass:"blue"},[t._v("TOTAL CASES")]),a("p",[t._v(t._s(t._f("comman")(t.infectionPeopleTotal.cases)))])]),a("i",{staticClass:"blue fa fa-users fa-2x"})]),a("div",{staticClass:"title-icon red-border"},[a("div",{staticClass:"detail-icon"},[a("span",{staticClass:"red"},[t._v("TOTAL DEATHS")]),a("p",[t._v(t._s(t._f("comman")(t.infectionPeopleTotal.deaths)))])]),a("i",{staticClass:"red fa fa-plus-square fa-2x"})]),a("div",{staticClass:"title-icon green-border"},[a("div",{staticClass:"detail-icon"},[a("span",{staticClass:"green"},[t._v("TOTAL RECOVERD")]),a("p",[t._v(t._s(t._f("comman")(t.infectionPeopleTotal.recovered)))])]),a("i",{staticClass:"green fa fa-child fa-2x"})]),a("div",{staticClass:"title-icon yellow-border"},[a("div",{staticClass:"detail-icon"},[a("span",{staticClass:"yellow"},[t._v("NEW CASES")]),a("p",[t._v(t._s(t._f("comman")(t.infectionPeopleTotal.todayCases)))])]),a("i",{staticClass:"yellow fa fa-exclamation-circle fa-2x"})])])]),t.loading?t._e():a("div",{staticClass:"main-container"},[a("h2",[t._v("Top 10 Epidemic Country")]),a("barChart",{attrs:{chartData:t.getTempChartData}})],1),a("div",{staticClass:"main-container"},[a("h2",[t._v("Confirmed Cases and Deaths by Country")]),a("div",{staticClass:"select-wrapper"},[a("ul",{staticClass:"pagination",domProps:{innerHTML:t._s(t.pagination)},on:{click:t.switchPages}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],attrs:{id:"optionchoice"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newItem=e.target.multiple?a:a[0]},function(e){return t.fliter(t.newItem)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("ALL Country")]),t._l(t.zone,(function(e){return a("option",{attrs:{selected:""},domProps:{value:e}},[t._v(t._s(e))])}))],2)]),a("table",{staticClass:"table table-striped table-bordered table-hover",attrs:{id:"country-detail"}},[a("thead",[a("tr",t._l(t.infectionDataTitle,(function(e){return a("th",[t._v(t._s(e))])})),0)]),a("tbody",t._l(t.displayDataResult,(function(e,s){return a("tr",[a("td",[t._v(t._s(e.id))]),a("td",{staticClass:"country-title"},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:e.flag}})]),t._v(t._s(e.Country))]),a("td",{staticClass:"importantnumber"},[t._v(t._s(t._f("comman")(e.Cases)))]),a("td",{staticClass:"yellow"},[t._v(t._s(t._f("comman")(e.NewCases)))]),a("td",[t._v(t._s(t._f("comman")(e.Deaths)))]),a("td",{staticClass:"red"},[t._v(t._s(t._f("comman")(e.NewDeaths)))]),a("td",[t._v(t._s(e.ActiveCases))]),a("td",[t._v(t._s(e.Critical))]),a("td",{staticClass:"blue"},[t._v(t._s(t._f("comman")(e.Recovered)))])])})),0)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h1",[t._v("COVID-19 CORONAVIRUS TRACKER")])])}],r=(a("4160"),a("c975"),a("d81d"),a("498a"),a("159b"),a("bc3a")),c=a.n(r),o=a("4a7a"),l=a.n(o),d=(a("c1df"),a("d180"),a("6dfc"),a("0502"),a("cb4b"),a("9dc7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"},attrs:{id:"bar-chart-"+t.id}})}),f=[],u=(a("99af"),a("a623"),a("5698")),p={name:"LineChart",props:["title","chartData"],data:function(){return{id:Date.now()}},mounted:function(){this.drawChart()},methods:{drawChart:function(){var t=this.chartData,e=t.every((function(t){return 0===t.Cases})),a={top:20,bottom:20,left:10,right:10},s=window.innerWidth>768?900:window.innerWidth,n=s-a.left-a.right,i=210-a.top-a.bottom,r=u["d"]().domain(t.map((function(t){return t.Country}))).range([0,n]).paddingInner(.4),c=u["e"]().domain([0,u["c"](t.map((function(t){return t.Cases})))]).range([i,0]),o=u["f"]("#bar-chart-".concat(this.id)).append("svg").attr("width",n+a.left+a.right).attr("height",i+a.top+a.bottom),l=o.append("g").attr("transform","translate(".concat(a.left,", ").concat(a.top,")")),d=u["a"](c).tickSize(n);l.append("g").attr("class","y-axis").call(d).attr("transform","translate(".concat(n,", 0)")),l.selectAll(".bar").data(t).enter().append("rect").attr("class","bar").attr("x",(function(t){return r(t.Country)})).attr("y",(function(){return i})).attr("width",r.bandwidth).attr("fill","#00BAB6").attr("rx",3).attr("height",0).transition().duration(750).delay((function(t,e){return 30*e})).ease(u["b"]).attr("height",(function(t){return e?0:i-c(t.Cases)})).attr("y",(function(t){return c(t.Cases)})),l.selectAll(".label").data(t).enter().append("text").attr("class","label").attr("x",(function(t){return r(t.Country)+r.bandwidth()/2})).attr("y",i+15).attr("text-anchor","middle").attr("font-size",12).attr("fill","#9B9B9B").text((function(t,e){return t.Country}));var f=l.append("line").attr("class","dash-line").attr("y1",0).attr("y2",i).attr("stroke","#454545").attr("stroke-width",1).attr("stroke-dasharray",8).attr("opacity","0"),p=u["f"]("#bar-chart-".concat(this.id)).append("div").attr("class","message-wrapper").html('<div class="circle"></div><div class="data"></div>').attr("style","display: none;");l.selectAll(".hover-block").data(t).enter().append("rect").attr("class","hover-block").attr("width",r.step).attr("height",i).attr("fill","transparent").attr("x",(function(t){return r(t.Country)-(r.step()-r.bandwidth())/2})).on("mouseover",(function(t){f.attr("x1",(function(){return r(t.Country)+r.bandwidth()/2})).attr("x2",(function(){return r(t.Country)+r.bandwidth()/2})).attr("opacity",1);var e="\n            <div class='barIcondetail barFont'> \n              ".concat(t.Country,"\n            </div>\n            <div class='barIcondetail'> \n              <i class=\"blue fa fa-users fa-2x\"></i> ").concat(t.Cases," \n            </div>\n            <div class='barIcondetail'> \n              <i class=\"red fa fa-users fa-2x\"></i> ").concat(t.Deaths,"\n            </div>\n            <div class='barIcondetail'> \n              <i class=\"green fa fa-users fa-2x\"></i> ").concat(t.Recovered,"\n            </div>\n          ");u["f"](".message-wrapper .data").html(e),p.attr("style",(function(){return"display: flex; left: ".concat(r(t.Country)+30,"px")}))})).on("mouseleave",(function(){f.attr("opacity",0),p.attr("style","display: none;")}))}}},h=p,b=(a("c660"),a("2877")),m=Object(b["a"])(h,d,f,!1,null,null,null),v=m.exports,j={name:"app",components:{vSelect:l.a,barChart:v},data:function(){return{cityData:[],infectionPeopleTotal:{},infectionDataTitle:["Number","Country","Cases","New Cases","Deaths","New Deaths","Active Cases","Critical","Recovered"],infectionCountryDataOri:[],loading:!0,newItem:"",listData:[],zone:[],displayData:[],displayDataResult:[],totalPages:0,pageNum:1,contentNum:20,pageLeng:0,limitPage:5,pagination:""}},computed:{getTempChartData:function(){var t=this.infectionCountryDataOri.filter((function(t,e){return e<11}));return t}},created:function(){this.getNovelCovid(),this.getAllCountryNovelCovid()},watch:{selected:function(){this.getWeatherData(this.selected.value)}},methods:{getNovelCovid:function(){var t=this;c.a.get("https://corona.lmao.ninja/all").then((function(e){t.infectionPeopleTotal=e.data})).catch((function(t){console.error(t)}))},getAllCountryNovelCovid:function(){var t=this;c.a.get("https://corona.lmao.ninja/countries?sort=country").then((function(e){var a=e.data;a.map((function(e){t.infectionCountryDataOri.push({Country:e.country,flag:e.countryInfo.flag,Cases:e.cases,NewCases:e.todayCases,Deaths:e.deaths,NewDeaths:e.todayDeaths,ActiveCases:e.active,Critical:e.critical,Recovered:e.recovered})}))})).then((function(){t.infectionCountryDataOri.sort((function(t,e){return t.Cases<e.Cases?1:-1})),t.infectionCountryDataOri.map((function(t,e){t["id"]=e+1})),t.loading=!1})).then((function(){t.zoneChoice(),t.fliter(t.newItem)})).catch((function(t){console.error(t)}))},zoneChoice:function(){var t=this;this.infectionCountryDataOri.forEach((function(e,a){-1===t.zone.indexOf(e.Country)&&t.zone.push(e.Country)}))},fliter:function(t){var e=this;this.newItem="Country"!==t?t:"",this.displayData=[],this.infectionCountryDataOri.map((function(t){t.Country===e.newItem.trim()&&e.displayData.push(t)})),""===this.newItem.trim()&&(this.displayData=this.infectionCountryDataOri),this.pageNum=1,this.displayDistrice()},displayDistrice:function(){var t=this.pageNum*this.contentNum,e=[],a=this.displayData.length;this.calPageNumb(a),this.totalPages=a,a=a>t?t:this.displayData.length;for(var s=t-this.contentNum;s<a;s++)e.push(this.displayData[s]);this.displayDataResult=e},calPageNumb:function(t){var e="";if(t>this.contentNum){this.pageLeng=Math.ceil(t/this.contentNum);for(var a='<li class="pagePrev"><a href="#">Prev</a></li>',s='<li class="pageNext"><a href="#">Next</a></li>',n=1;n<=this.pageLeng;n++)n===this.pageNum?e+='<li class="pageItem"><a class="pageLink active" href="#">'.concat(n,"</a></li>"):e+='<li class="pageItem"><a class="pageLink" href="#">'.concat(n,"</a></li>");this.pagination=a+e+s}else e='<li class="pageItem"><a class="pageLink active" href="#">1</a></li>',this.pagination=e},switchPages:function(t){t.preventDefault(),"A"===t.target.nodeName&&("Next"===t.target.textContent?this.pageNum===this.pageLeng?this.pageNum=this.pageLeng:this.pageNum++:"Prev"===t.target.textContent?1===this.pageNum?this.pageNum=1:this.pageNum--:this.pageNum=parseInt(t.target.textContent),this.calPageNumb(this.totalPages),this.displayDistrice())}}},g=j,y=(a("5c0b"),Object(b["a"])(g,n,i,!1,null,null,null)),C=y.exports;s["a"].filter("comman",(function(t){return t.toFixed(0).replace(/./g,(function(t,e,a){return e&&"."!==t&&(a.length-e)%3===0?","+t:t}))})),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("5387"),n=a.n(s);n.a},7048:function(t,e,a){},"9dc7":function(t,e,a){t.exports=a.p+"img/water.924de90a.svg"},c660:function(t,e,a){"use strict";var s=a("7048"),n=a.n(s);n.a},cb4b:function(t,e,a){t.exports=a.p+"img/temp.12cbedcb.svg"}});
//# sourceMappingURL=app.d7e3858d.js.map