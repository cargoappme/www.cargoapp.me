webpackJsonp([0],Array(142).concat([function(t,e,n){n(206);var r=n(17)(n(151),n(203),null,null);t.exports=r.exports},function(t,e,n){function r(t,e){if(l(t))return new Date(t.getTime());if("string"!=typeof t)return new Date(t);var n=e||{},r=n.additionalDigits;r=null==r?h:Number(r);var c=o(t),f=a(c.date,r),p=f.year,v=f.restDateString,g=s(v,p);if(g){var m,y=g.getTime(),_=0;return c.time&&(_=i(c.time)),c.timezone?m=u(c.timezone):(m=new Date(y+_).getTimezoneOffset(),m=new Date(y+_+m*d).getTimezoneOffset()),new Date(y+_+m*d)}return new Date(t)}function o(t){var e,n={},r=t.split(p);if(v.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1]),e){var o=O.exec(e);o?(n.time=e.replace(o[1],""),n.timezone=o[1]):n.time=e}return n}function a(t,e){var n,r=m[e],o=_[e];if(n=y.exec(t)||o.exec(t)){var a=n[1];return{year:parseInt(a,10),restDateString:t.slice(a.length)}}if(n=g.exec(t)||r.exec(t)){var s=n[1];return{year:100*parseInt(s,10),restDateString:t.slice(s.length)}}return{year:null}}function s(t,e){if(null===e)return null;var n,r,o,a;if(0===t.length)return r=new Date(0),r.setUTCFullYear(e),r;if(n=w.exec(t))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(e,o),r;if(n=M.exec(t)){r=new Date(0);var s=parseInt(n[1],10);return r.setUTCFullYear(e,0,s),r}if(n=x.exec(t)){r=new Date(0),o=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(e,o,i),r}if(n=D.exec(t))return a=parseInt(n[1],10)-1,c(e,a);if(n=b.exec(t)){a=parseInt(n[1],10)-1;return c(e,a,parseInt(n[2],10)-1)}return null}function i(t){var e,n,r;if(e=T.exec(t))return(n=parseFloat(e[1].replace(",",".")))%24*f;if(e=j.exec(t))return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),n%24*f+r*d;if(e=S.exec(t)){n=parseInt(e[1],10),r=parseInt(e[2],10);var o=parseFloat(e[3].replace(",","."));return n%24*f+r*d+1e3*o}return null}function u(t){var e,n;return(e=Y.exec(t))?0:(e=k.exec(t))?(n=60*parseInt(e[2],10),"+"===e[1]?-n:n):(e=F.exec(t),e?(n=60*parseInt(e[2],10)+parseInt(e[3],10),"+"===e[1]?-n:n):0)}function c(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var o=r.getUTCDay()||7,a=7*e+n+1-o;return r.setUTCDate(r.getUTCDate()+a),r}var l=n(146),f=36e5,d=6e4,h=2,p=/[T ]/,v=/:/,g=/^(\d{2})$/,m=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],y=/^(\d{4})/,_=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],w=/^-(\d{2})$/,M=/^-?(\d{3})$/,x=/^-?(\d{2})-?(\d{2})$/,D=/^-?W(\d{2})$/,b=/^-?W(\d{2})-?(\d{1})$/,T=/^(\d{2}([.,]\d*)?)$/,j=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,S=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,O=/([Z+-].*)$/,Y=/^(Z)$/,k=/^([+-])(\d{2})$/,F=/^([+-])(\d{2}):?(\d{2})$/;t.exports=r},function(t,e,n){function r(t){return o(t,{weekStartsOn:1})}var o=n(195);t.exports=r},function(t,e,n){function r(t){var e=o(t),n=e.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var s=a(r),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var u=a(i);return e.getTime()>=s.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}var o=n(143),a=n(144);t.exports=r},function(t,e){function n(t){return t instanceof Date}t.exports=n},function(t,e){function n(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var o=r.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];t.exports=n},function(t,e,n){var r=n(188),o=n(189);t.exports={distanceInWords:r(),format:o()}},function(t,e,n){"use strict";n.d(e,"a",function(){return v});var r=n(155),o=n.n(r),a=n(157),s=n.n(a),i=n(158),u=n.n(i),c=n(160),l=n.n(c),f=n(159),d=n.n(f),h=n(197),p=n.n(h),v=function(t){function e(t){s()(this,e);var n=l()(this,(e.__proto__||o()(e)).call(this));return n.url=t,n}return d()(e,t),u()(e,[{key:"start",value:function(){var t=this;this.stopped=!1,this.ws=new window.WebSocket(this.url),this.ws.onopen=function(e){t.emit("open",e)},this.ws.onclose=function(e){t.emit("close",e),t.stopped||setTimeout(t.start.bind(t),2e3)},this.ws.onerror=function(e){t.emit("error",e)},this.ws.onmessage=function(e){t.emit("message",e.data)}}},{key:"stop",value:function(){this.ws&&this.ws.close(),this.stopped=!0}},{key:"send",value:function(t){this.ws.send(t)}}]),e}(p.a)},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(161),o=n.n(r),a=n(192),s=n.n(a),i=n(183),u=n.n(i),c=n(184),l=n.n(c),f=n(149),d={NO_TOKEN:4e3,NON_EXISTENT_TOKEN:4001};e.default={head:{script:[{src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAswGeCJTj45iAENRAflQJPEBeu-pW2PVQ",async:!0,defer:!0}]},data:function(){return{ws:null,isLoading:!1,id:null,journey:{isFinished:null,start:{date:new Date,geo:{lat:0,long:0}},end:{date:new Date,geo:{lat:0,long:0}},totalDistance:0},lastPosition:{date:new Date,geo:{lat:0,long:0}},map:null,mapBounds:null,fromMarker:null,toMarker:null,positionsMarker:[],positionMarker:null,pathPolyline:null,pathHistory:null}},created:function(){var t=this;if(this.id=this.$route.query.id,!this.id)return void this.$router.replace("/");var e=setInterval(function(){void 0!==window.google&&(t.initMap(),clearInterval(e))},100)},mounted:function(){var t=this;this.isLoading=!0,this.ws=new f.a("wss://cargo-api.herokuapp.com?token="+this.id),this.ws.start(),this.ws.on("open",function(){}),this.ws.on("message",function(e){var n=JSON.parse(e),r=o()(n,2),a=r[0],s=r[1];if("initial"===a){t.journey.isFinished=s.isFinished,t.journey.start.date=new Date(s.start.date),t.journey.start.geo.lat=parseFloat(s.start.geo.lat),t.journey.start.geo.long=parseFloat(s.start.geo.long),t.journey.isFinished&&(t.journey.end.date=new Date(s.end.date)),t.journey.end.geo.lat=parseFloat(s.end.geo.lat),t.journey.end.geo.long=parseFloat(s.end.geo.long),t.journey.totalDistance=t.distanceBetweenTwoCoordinates(t.journey.start,t.journey.end);var i=new window.google.maps.LatLng(t.journey.start.geo.lat,t.journey.start.geo.long);t.fromMarker=new window.google.maps.Marker({icon:"/map-icons/marker_blue.png",title:"Position de départ",position:i,map:t.map});var u=new window.google.maps.LatLng(t.journey.end.geo.lat,t.journey.end.geo.long);t.toMarker=new window.google.maps.Marker({icon:"/map-icons/marker_red.png",title:"Position d'arrivée",position:u,map:t.map}),t.mapBounds.extend(i),t.mapBounds.extend(u),t.map.fitBounds(t.mapBounds),t.addPosition(t.journey.start),s.positions.forEach(function(e){t.addPosition(e)}),t.isLoading=!1}else"position"===a?(s.geo.lat=parseFloat(s.geo.lat),s.geo.long=parseFloat(s.geo.long),t.addPosition(s)):"finished"===a&&(t.isFinished=!0)}),this.ws.on("close",function(e){e.code===d.NON_EXISTENT_TOKEN?(t.ws.stop(),t.$router.replace("/")):t.pathHistory=[]}),this.ws.on("error",function(t){console.log(t)})},methods:{initMap:function(){var t={lat:48.85837,lng:2.294481};this.map=new window.google.maps.Map(this.$refs.map,{zoom:5,center:t}),this.mapBounds=new window.google.maps.LatLngBounds,this.positionMarker=new window.google.maps.Marker({icon:"/map-icons/person.png",title:"Position actuelle",position:t,map:this.map}),this.pathHistory=[],this.pathPolyline=new window.google.maps.Polyline({path:this.pathHistory,geodesic:!0,strokeColor:"#27ae60",strokeOpacity:1,strokeWeight:5,map:this.map})},addPosition:function(t){this.lastPosition=t;var e={lat:parseFloat(t.geo.lat),lng:parseFloat(t.geo.long)};this.positionMarker.setPosition(e),this.pathHistory.push(e),this.pathPolyline.setPath(this.pathHistory)},distanceBetweenTwoCoordinates:function(t,e){var n=function(t){return t*Math.PI/180},r=n(t.geo.lat),o=n(e.geo.lat),a=n(e.geo.lat-t.geo.lat),s=n(e.geo.long-t.geo.long),i=Math.sin(a/2)*Math.sin(a/2)+Math.cos(r)*Math.cos(o)*Math.sin(s/2)*Math.sin(s/2),u=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)),c=6371e3*u;return parseInt(c/1e3)},distanceInWords:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return u()(t,e,{locale:s.a})},formatDate:function(t){return l()(t,"DD/MM/YYYY à HH:mm",{locale:s.a})}}}},function(t,e,n){t.exports={default:n(162),__esModule:!0}},function(t,e,n){t.exports={default:n(163),__esModule:!0}},function(t,e,n){t.exports={default:n(164),__esModule:!0}},function(t,e,n){t.exports={default:n(165),__esModule:!0}},function(t,e,n){t.exports={default:n(166),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(154),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(156),a=r(o),s=n(153),i=r(s),u=n(26),c=r(u);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,c.default)(e)));t.prototype=(0,i.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(a.default?(0,a.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(26),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(152),a=r(o),s=n(46),i=r(s);e.default=function(){function t(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var s,u=(0,i.default)(t);!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,a.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){n(29),n(28),t.exports=n(168)},function(t,e,n){n(169);var r=n(1).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(170);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(171),t.exports=n(1).Object.getPrototypeOf},function(t,e,n){n(172),t.exports=n(1).Object.setPrototypeOf},function(t,e,n){var r=n(13),o=n(4),a=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(19)(Function.call,n(67).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},function(t,e,n){var r=n(47),o=n(0)("iterator"),a=n(14);t.exports=n(1).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||a.hasOwnProperty(r(e))}},function(t,e,n){var r=n(12);r(r.S,"Object",{create:n(48)})},function(t,e,n){var r=n(12);r(r.S+r.F*!n(5),"Object",{defineProperty:n(6).f})},function(t,e,n){var r=n(27),o=n(68);n(69)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(12);r(r.S,"Object",{setPrototypeOf:n(167).set})},,,function(t,e,n){e=t.exports=n(16)(void 0),e.push([t.i,"#__nuxt,.application,.container,.map_container,.row_full,body,html{height:100%}.no_padding{padding:0}.without_margin{margin:0}#map{width:100%;height:100%}.map_container,.map_data{padding:0!important}.progress{float:left}.progress_text{height:50px;line-height:50px;margin-left:60px}",""])},function(t,e,n){function r(t,e){var n=o(t),r=n.getTime(),a=o(e),s=a.getTime();return r<s?-1:r>s?1:0}var o=n(143);t.exports=r},function(t,e,n){function r(t,e){var n=o(t),r=n.getTime(),a=o(e),s=a.getTime();return r>s?-1:r<s?1:0}var o=n(143);t.exports=r},function(t,e,n){function r(t,e){var n=o(t),r=o(e),i=n.getTime()-n.getTimezoneOffset()*a,u=r.getTime()-r.getTimezoneOffset()*a;return Math.round((i-u)/s)}var o=n(193),a=6e4,s=864e5;t.exports=r},function(t,e,n){function r(t,e){var n=o(t),r=o(e);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}var o=n(143);t.exports=r},function(t,e,n){function r(t,e){var n=o(t),r=o(e);return n.getTime()-r.getTime()}var o=n(143);t.exports=r},function(t,e,n){function r(t,e){var n=o(t),r=o(e),i=s(n,r),u=Math.abs(a(n,r));return n.setMonth(n.getMonth()-i*u),i*(u-(s(n,r)===-i))}var o=n(143),a=n(179),s=n(176);t.exports=r},function(t,e,n){function r(t,e){var n=o(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var o=n(180);t.exports=r},function(t,e,n){function r(t,e,n){var r=n||{},h=o(t,e),p=r.locale,v=u.distanceInWords.localize;p&&p.distanceInWords&&p.distanceInWords.localize&&(v=p.distanceInWords.localize);var g,m,y={addSuffix:Boolean(r.addSuffix),comparison:h};h>0?(g=a(t),m=a(e)):(g=a(e),m=a(t));var _,w=s(m,g),M=m.getTimezoneOffset()-g.getTimezoneOffset(),x=Math.round(w/60)-M;if(x<2)return r.includeSeconds?w<5?v("lessThanXSeconds",5,y):w<10?v("lessThanXSeconds",10,y):w<20?v("lessThanXSeconds",20,y):w<40?v("halfAMinute",null,y):w<60?v("lessThanXMinutes",1,y):v("xMinutes",1,y):0===x?v("lessThanXMinutes",1,y):v("xMinutes",x,y);if(x<45)return v("xMinutes",x,y);if(x<90)return v("aboutXHours",1,y);if(x<c){return v("aboutXHours",Math.round(x/60),y)}if(x<l)return v("xDays",1,y);if(x<f){return v("xDays",Math.round(x/c),y)}if(x<d)return _=Math.round(x/f),v("aboutXMonths",_,y);if((_=i(m,g))<12){return v("xMonths",Math.round(x/f),y)}var D=_%12,b=Math.floor(_/12);return D<3?v("aboutXYears",b,y):D<9?v("overXYears",b,y):v("almostXYears",b+1,y)}var o=n(177),a=n(143),s=n(182),i=n(181),u=n(148),c=1440,l=2520,f=43200,d=86400;t.exports=r},function(t,e,n){function r(t,e,n){var r=e?String(e):"YYYY-MM-DDTHH:mm:ss.SSSZ",a=n||{},s=a.locale,i=h.format.formatters,u=h.format.formattingTokensRegExp;s&&s.format&&s.format.formatters&&(i=s.format.formatters,s.format.formattingTokensRegExp&&(u=s.format.formattingTokensRegExp));var c=f(t);return d(c)?o(r,i,u)(c):"Invalid Date"}function o(t,e,n){var r,o,s=t.match(n),i=s.length;for(r=0;r<i;r++)o=e[s[r]]||p[s[r]],s[r]=o||a(s[r]);return function(t){for(var e="",n=0;n<i;n++)s[n]instanceof Function?e+=s[n](t,p):e+=s[n];return e}}function a(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|]$/g,""):t.replace(/\\/g,"")}function s(t,e){e=e||"";var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;return n+i(o,2)+e+i(a,2)}function i(t,e){for(var n=Math.abs(t).toString();n.length<e;)n="0"+n;return n}var u=n(185),c=n(186),l=n(145),f=n(143),d=n(187),h=n(148),p={M:function(t){return t.getMonth()+1},MM:function(t){return i(t.getMonth()+1,2)},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},D:function(t){return t.getDate()},DD:function(t){return i(t.getDate(),2)},DDD:function(t){return u(t)},DDDD:function(t){return i(u(t),3)},d:function(t){return t.getDay()},E:function(t){return t.getDay()||7},W:function(t){return c(t)},WW:function(t){return i(c(t),2)},YY:function(t){return i(t.getFullYear(),4).substr(2)},YYYY:function(t){return i(t.getFullYear(),4)},GG:function(t){return String(l(t)).substr(2)},GGGG:function(t){return l(t)},H:function(t){return t.getHours()},HH:function(t){return i(t.getHours(),2)},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return i(p.h(t),2)},m:function(t){return t.getMinutes()},mm:function(t){return i(t.getMinutes(),2)},s:function(t){return t.getSeconds()},ss:function(t){return i(t.getSeconds(),2)},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return i(Math.floor(t.getMilliseconds()/10),2)},SSS:function(t){return i(t.getMilliseconds(),3)},Z:function(t){return s(t.getTimezoneOffset(),":")},ZZ:function(t){return s(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};t.exports=r},function(t,e,n){function r(t){var e=o(t);return s(e,a(e))+1}var o=n(143),a=n(196),s=n(178);t.exports=r},function(t,e,n){function r(t){var e=o(t),n=a(e).getTime()-s(e).getTime();return Math.round(n/i)+1}var o=n(143),a=n(144),s=n(194),i=6048e5;t.exports=r},function(t,e,n){function r(t){if(o(t))return!isNaN(t);throw new TypeError(toString.call(t)+" is not an instance of Date")}var o=n(146);t.exports=r},function(t,e){function n(){function t(t,n,r){r=r||{};var o;return o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:t}}t.exports=n},function(t,e,n){function r(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=["AM","PM"],u=["am","pm"],c=["a.m.","p.m."],l={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return s[t.getDay()]},A:function(t){return t.getHours()/12>=1?i[1]:i[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){l[t+"o"]=function(e,n){return o(n[t](e))}}),{formatters:l,formattingTokensRegExp:a(l)}}function o(t){var e=t%100;if(e>20||e<10)switch(e%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"}var a=n(147);t.exports=r},function(t,e){function n(){function t(t,n,r){r=r||{};var o;return o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"dans "+o:"il y a "+o:o}var e={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}};return{localize:t}}t.exports=n},function(t,e,n){function r(){var t=["janv.","févr.","mars","avr.","mai","juin","juill.","août","sept.","oct.","nov.","déc."],e=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],n=["di","lu","ma","me","je","ve","sa"],r=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],i=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],u=["AM","PM"],c=["am","pm"],l=["du matin","de l’après-midi","du soir"],f={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return i[t.getDay()]},A:function(t){return t.getHours()/12>=1?u[1]:u[0]},a:function(t){return t.getHours()/12>=1?c[1]:c[0]},aa:function(t){var e=t.getHours();return e<=12?l[0]:e<=16?l[1]:l[2]},Wo:function(t,e){return a(e.W(t))}};return["M","D","DDD","d","Q"].forEach(function(t){f[t+"o"]=function(e,n){return o(n[t](e))}}),["MMM","MMMM"].forEach(function(t){f["Do "+t]=function(e,n){var r=1===e.getDate()?"Do":"D";return(f[r]||n[r])(e,n)+" "+f[t](e)}}),{formatters:f,formattingTokensRegExp:s(f)}}function o(t){return 1===t?"1er":t+"e"}function a(t){return 1===t?"1re":t+"e"}var s=n(147);t.exports=r},function(t,e,n){var r=n(190),o=n(191);t.exports={distanceInWords:r(),format:o()}},function(t,e,n){function r(t){var e=o(t);return e.setHours(0,0,0,0),e}var o=n(143);t.exports=r},function(t,e,n){function r(t){var e=o(t),n=new Date(0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),a(n)}var o=n(145),a=n(144);t.exports=r},function(t,e,n){function r(t,e){var n=e?Number(e.weekStartsOn)||0:0,r=o(t),a=r.getDay(),s=(a<n?7:0)+a-n;return r.setDate(r.getDate()-s),r.setHours(0,0,0,0),r}var o=n(143);t.exports=r},function(t,e,n){function r(t){var e=o(t),n=new Date(0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}var o=n(143);t.exports=r},function(t,e,n){"use strict";function r(){}function o(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function a(){this._events=new r,this._eventsCount=0}var s=Object.prototype.hasOwnProperty,i="~";Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(i=!1)),a.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)s.call(t,e)&&n.push(i?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},a.prototype.listeners=function(t,e){var n=i?i+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,a=r.length,s=new Array(a);o<a;o++)s[o]=r[o].fn;return s},a.prototype.emit=function(t,e,n,r,o,a){var s=i?i+t:t;if(!this._events[s])return!1;var u,c,l=this._events[s],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,n),!0;case 4:return l.fn.call(l.context,e,n,r),!0;case 5:return l.fn.call(l.context,e,n,r,o),!0;case 6:return l.fn.call(l.context,e,n,r,o,a),!0}for(c=1,u=new Array(f-1);c<f;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var d,h=l.length;for(c=0;c<h;c++)switch(l[c].once&&this.removeListener(t,l[c].fn,void 0,!0),f){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,e);break;case 3:l[c].fn.call(l[c].context,e,n);break;case 4:l[c].fn.call(l[c].context,e,n,r);break;default:if(!u)for(d=1,u=new Array(f-1);d<f;d++)u[d-1]=arguments[d];l[c].fn.apply(l[c].context,u)}}return!0},a.prototype.on=function(t,e,n){var r=new o(e,n||this),a=i?i+t:t;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],r]:this._events[a].push(r):(this._events[a]=r,this._eventsCount++),this},a.prototype.once=function(t,e,n){var r=new o(e,n||this,!0),a=i?i+t:t;return this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],r]:this._events[a].push(r):(this._events[a]=r,this._eventsCount++),this},a.prototype.removeListener=function(t,e,n,o){var a=i?i+t:t;if(!this._events[a])return this;if(!e)return 0==--this._eventsCount?this._events=new r:delete this._events[a],this;var s=this._events[a];if(s.fn)s.fn!==e||o&&!s.once||n&&s.context!==n||(0==--this._eventsCount?this._events=new r:delete this._events[a]);else{for(var u=0,c=[],l=s.length;u<l;u++)(s[u].fn!==e||o&&!s[u].once||n&&s[u].context!==n)&&c.push(s[u]);c.length?this._events[a]=1===c.length?c[0]:c:0==--this._eventsCount?this._events=new r:delete this._events[a]}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=i?i+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new r:delete this._events[e])):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prototype.setMaxListeners=function(){return this},a.prefixed=i,a.EventEmitter=a,t.exports=a},,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"no_padding",attrs:{fluid:""}},[n("v-layout",{staticClass:"row_full without_margin"},[n("v-flex",{staticClass:"map_container",attrs:{xs9:""}},[n("div",{ref:"map",attrs:{id:"map"}})]),n("v-flex",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"map_data",attrs:{xs3:""}},[t.journey.isFinished?n("v-card",{staticClass:"green darken-1 white--text"},[n("v-card-text",[n("div",[t._v("\n            Trajet terminé à "),n("b",[t._v(t._s(t.formatDate(t.journey.end.date))+" (il y a "+t._s(t.distanceInWords(t.journey.end.date))+")")]),t._v(".\n          ")])])],1):n("v-card",{staticClass:"blue darken-1 white--text"},[n("v-card-text",[n("div",[t._v("\n            Trajet démarré le "),n("b",[t._v(t._s(t.formatDate(t.journey.start.date))+" (il y a "+t._s(t.distanceInWords(t.journey.start.date))+")")]),t._v("."),n("br"),t._v("\n            Dernière mise à jour : "),n("b",[t._v(t._s(t.formatDate(t.lastPosition.date))+" (il y a "+t._s(t.distanceInWords(t.lastPosition.date))+")")])])])],1),n("v-card",{staticClass:"white"},[n("v-card-text",[n("div",[n("v-icon",[t._v("hourglass_empty")]),n("b",[t._v(t._s(t.journey.isFinished?t.distanceInWords(t.journey.start.date,t.journey.end.date):t.distanceInWords(t.journey.start.date)))]),t._v(" de trajet"),n("br"),n("v-icon",[t._v("trending_up")]),n("b",[t._v("~"+t._s(t.distanceBetweenTwoCoordinates(t.journey.start,t.lastPosition))+"km")]),t._v(" parcourus"),n("br"),n("v-icon",[t._v("linear_scale")]),n("b",[t._v("~"+t._s(parseInt(t.distanceBetweenTwoCoordinates(t.journey.start,t.lastPosition)/(((t.journey.isFinished?t.journey.end.date:new Date)-t.journey.start.date)/36e5)))+"km/h")]),t._v(" de vitesse moyenne"),n("br"),n("v-icon",[t._v("trending_down")]),n("b",[t._v("~"+t._s(t.journey.totalDistance-t.distanceBetweenTwoCoordinates(t.journey.start,t.lastPosition))+"km")]),t._v(" restants"),n("br"),n("br"),n("v-progress-circular",{staticClass:"teal--text progress",attrs:{size:50,width:5,rotate:-90,value:parseInt(100*t.distanceBetweenTwoCoordinates(t.journey.start,t.lastPosition)/t.journey.totalDistance)}},[t._v("\n              ~"+t._s(parseInt(100*t.distanceBetweenTwoCoordinates(t.journey.start,t.lastPosition)/t.journey.totalDistance))+"%\n            ")]),n("div",{staticClass:"progress_text"},[t._v("du trajet effectué")])],1)])],1)],1)],1),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:""},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("v-card",[n("v-card-row",[n("v-card-title",[t._v("Chargement...")])],1),n("v-card-row",[n("v-card-text",{staticClass:"text-xs-center"},[n("v-progress-circular",{staticClass:"green--text",attrs:{indeterminate:"",size:70,width:7}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},,,function(t,e,n){var r=n(175);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(18)("8435429a",r,!0)}]));