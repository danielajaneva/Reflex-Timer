(function(e){function t(t){for(var r,i,s=t[0],a=t[1],u=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="Reflex-Timer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27f2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["f"])("h1",null,"Finger Reflex Timer",-1),c=["disabled"];function i(e,t,n,i,s,a){var u=Object(r["j"])("Block"),l=Object(r["j"])("Results");return Object(r["g"])(),Object(r["e"])(r["a"],null,[o,Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return a.start&&a.start.apply(a,arguments)}),disabled:s.isPlaying},"Play",8,c),s.isPlaying?(Object(r["g"])(),Object(r["c"])(u,{key:0,delay:s.delay,onEnd:a.endGame},null,8,["delay","onEnd"])):Object(r["d"])("",!0),s.showScore?(Object(r["g"])(),Object(r["c"])(l,{key:1,score:s.score},null,8,["score"])):Object(r["d"])("",!0)],64)}function s(e,t,n,o,c,i){return c.showBlock?(Object(r["g"])(),Object(r["e"])("div",{key:0,class:"block",onClick:t[0]||(t[0]=function(){return i.stopTimer&&i.stopTimer.apply(i,arguments)})}," click me ")):Object(r["d"])("",!0)}var a={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var e=this;console.log("component is mounted"),setTimeout((function(){e.showBlock=!0,e.startTimer()}),this.delay)},updated:function(){console.log("component updated")},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),console.log(this.reactionTime),this.$emit("end",this.reactionTime)}}},u=(n("c66d"),n("6b0d")),l=n.n(u);const f=l()(a,[["render",s]]);var d=f,p={class:"rank"};function b(e,t,n,o,c,i){return Object(r["g"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("p",null,"Reaction time : "+Object(r["k"])(n.score)+" ms.",1),Object(r["f"])("p",p,Object(r["k"])(c.rank),1)],64)}var h={name:"Results",props:["score"],data:function(){return{rank:null}},mounted:function(){this.score<=250?this.rank="Ninja fingers":this.score<400?this.rank="Rapid Reflexis":this.rank="Snail pace..."}};n("6ec5");const m=l()(h,[["render",b],["__scopeId","data-v-1c6a8bc0"]]);var y=m,j={name:"App",components:{Block:d,Results:y},data:function(){return{isPlaying:!1,delay:null,score:null,showScore:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showScore=!1},endGame:function(e){this.score=e,this.isPlaying=!1,this.showScore=!0}}};n("930f");const O=l()(j,[["render",i]]);var v=O;Object(r["b"])(v).mount("#app")},"6c9b":function(e,t,n){},"6ec5":function(e,t,n){"use strict";n("6c9b")},"930f":function(e,t,n){"use strict";n("27f2")},b775:function(e,t,n){},c66d:function(e,t,n){"use strict";n("b775")}});
//# sourceMappingURL=app.2372d12a.js.map