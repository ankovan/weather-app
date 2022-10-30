(function(){"use strict";var e={5656:function(e,t,n){var a=n(9242),r=n(3396),o=n(4870),s=n(7139),c=n(70);const i=(0,o.iH)("weather");function u(){return{weatherDescription:i}}const l={class:"card"},p={class:"card-content"},d={class:"input-wrapper"},v=(0,r._)("i",{class:"fas fa-search"},null,-1),f=[v],h={class:"card-text"},w={class:"card-text",id:"temp"},m={class:"card-text"},g={class:"additional-weather-info"},_={class:"card-text"},y={class:"card-text"},b=(0,r._)("i",{class:"fas fa-wind"},null,-1);var k={__name:"WeatherCard",setup(e){const t=(0,o.iH)({apiKey:"be4261006129ada8fc29a02ca53218d4"}),n=(0,o.iH)("Moscow"),i=(0,o.iH)({}),{weatherDescription:v}=u();(0,r.bv)((()=>{k(),console.log(i.value)}));const k=async()=>{try{const e=await c.ZP.get(`https://api.openweathermap.org/data/2.5/weather?q=${n.value}&units=metric&appid=${t.value.apiKey}`);i.value=e.data,v.value=i.value?.weather?.[0]?.main}catch(e){console.log(e)}};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",p,[(0,r._)("div",d,[(0,r.wy)((0,r._)("input",{class:"card-text search",id:"city-input","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),onKeyup:t[1]||(t[1]=(0,a.D2)((e=>k()),["enter"]))},null,544),[[a.nr,n.value]]),(0,r._)("button",{class:"card-text search",id:"search-button",onClick:t[2]||(t[2]=e=>k())},f)]),(0,r._)("h1",h,(0,s.zw)(i.value.name),1),(0,r._)("p",w,(0,s.zw)(Math.round(i.value?.main?.temp))+"°C",1),(0,r._)("p",m,(0,s.zw)(i.value?.weather?.[0]?.main),1),(0,r._)("div",g,[(0,r._)("p",_,"Humidity: "+(0,s.zw)(i.value?.main?.humidity)+"%",1),(0,r._)("p",y,[b,(0,r.Uk)((0,s.zw)(i.value?.wind?.speed)+"m/s",1)])])])]))}};const x=k;var O=x,D=n(3576);const P={class:"img-wrapper"},H=["src"],z=["href"];var C={__name:"ImageBackground",setup(e){const{weatherDescription:t}=u(),n=(0,D.LC)({accessKey:"vscr7l0Hv9EYK5fu8UFkARZylMktB3B5pFoVDoaI0uo",secretKey:"om6MDFSpJpYF2NFY6mVf_2DPed8yPaq3nB04w3oTPLg"}),a=(0,o.iH)({});(0,r.bv)((()=>{c()})),(0,r.YP)(t,(()=>{c()}));const c=async()=>{try{const e=await n.search.getPhotos({query:t.value,orientation:"landscape",page:1,perPage:10});a.value=e.response.results.length?e.response.results[Math.floor(Math.random()*e.response.results.length)]:{},console.log(a.value)}catch(e){console.log("something went wrong!")}};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("img",{id:"background-image",src:a.value?.urls?.full},null,8,H),(0,r._)("a",{className:"credit",target:"_blank",href:`https://unsplash.com/@${a.value?.user?.username}`}," Photo by "+(0,s.zw)(a.value?.user?.name)+" on Unsplash ",9,z)]))}};const M=C;var j=M,F={__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)((0,o.SU)(O)),(0,r.Wm)((0,o.SU)(j))],64))}};const K=F;var U=K,B=n(3494),I=n(7749),Y=n(8539),N=n(4551),V=n(8429);B.vI.add(Y.mRB),B.vI.add(N.vnX),B.vI.add(V.NCV),B.vz.watch();const q=(0,a.ri)(U);q.component("font-awesome-icon",I.GN).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var s=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,i=0;i<a.length;i++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(c=!1,o<s&&(s=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,s=a[0],c=a[1],i=a[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(i)var l=i(n)}for(t&&t(a);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5656)}));a=n.O(a)})();
//# sourceMappingURL=app.a72c4da5.js.map