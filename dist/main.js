!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(2),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],u=n.base?o[0]+n.base:o[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var d=c(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:l,updater:b(p,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function b(e,n){var t,r,a;if(n.singleton){var o=v++;t=m||(m=s(n)),r=p.bind(null,t,o,!1),a=p.bind(null,t,o,!0)}else t=s(n),r=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=c(t[r]);i[a].references--}for(var o=u(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=o}}}},function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r)()(!1);a.push([e.i,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n  background:\r\n  radial-gradient(black 15%, transparent 16%) 0 0,\r\n  radial-gradient(black 15%, transparent 16%) 8px 8px,\r\n  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,\r\n  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;\r\n  background-color:#282828;\r\n  background-size: 16px 16px;\r\n  min-height: 100vh;\r\n  color: #efefef;\r\n}\r\n\r\n.footer a {\r\n  color: #efefef;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  padding: 4%;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n.about-header {\r\n  text-align: center;\r\n  margin: 3%;\r\n}\r\n\r\n.navbar {\r\n  height: 80px;\r\n  border-bottom: 1.2px solid burlywood;\r\n  padding: 1.8%;\r\n}\r\n\r\n.nav-item {\r\n  cursor: pointer;\r\n  margin: 1.2em;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.nav-item:hover {\r\n  border-bottom: 2px solid burlywood;\r\n}\r\n\r\n.home-page > h1 {\r\n  text-align: center;\r\n  padding-top: 3%;\r\n}\r\n\r\n.about-page {\r\n  padding: 4%;\r\n}\r\n\r\n.hero-img {\r\n  position: absolute;\r\n  left: 25%;\r\n  bottom: 10%;\r\n  object-fit: contain;\r\n  z-index: -1;\r\n  height: 80%;\r\n  width: 50%;\r\n  opacity: 0.3;\r\n}\r\n",""]),n.default=a},function(e,n,t){"use strict";t.r(n);t(0);var r=function(){const e=document.getElementById("content"),n=document.createElement("header");n.className="navbar",e.appendChild(n);const t=document.createElement("span");t.textContent="home",t.className="nav-item";const r=document.createElement("span");r.textContent="about",r.className="nav-item",n.appendChild(t),n.appendChild(r)};const a=document.createElement("footer");a.setAttribute("class","footer");const o=document.createElement("a");o.setAttribute("href","https://alfredezaka.netlify.app/"),o.textContent="© 2020 Alfred Ezaka",a.appendChild(o),a.classList.add("footer");var i=a,c=t.p+"f8c8776ebc67d10995fcfe9dc7f7bf22.png";const u=document.querySelector("#content"),s=document.createElement("section");s.id="wrapper";var l=`\n  <div class="home-page">\n    <h1 class='welcome'>WELCOME TO LOREM RESTAURANT</h1>\n    <img src=${c} class='hero-img' />\n  </div>\n`;r(),s.innerHTML=l,u.appendChild(s),u.appendChild(i);document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{"home"===e.textContent&&(s.innerHTML=l,u.appendChild(s)),"about"===e.textContent&&(s.innerHTML="\n  <div class=\"about-page\">\n    <h2 class='about-header'>ABOUT</h2>\n    <p>\n  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptatem. \n  Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa \n  dicta corporis eligendi aspernatur facere eum.\n  Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta corporis eligendi \n  aspernatur facere eum Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta \n  corporis eligendi aspernatur facere eum. aspernatur facere eum Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta \n  corporis eligendi aspernatur facere eum.\n</p>\n  </div>\n",u.appendChild(s))})})}]);