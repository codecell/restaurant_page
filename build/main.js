!function(n){var e={};function r(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)r.d(t,a,function(e){return n[e]}.bind(null,a));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=4)}([function(n,e,r){var t=r(2),a=r(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var a=(o=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([a]).join("\n")}var o,c,s;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&a[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(n,e,r){"use strict";var t,a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),o=[];function c(n){for(var e=-1,r=0;r<o.length;r++)if(o[r].identifier===n){e=r;break}return e}function s(n,e){for(var r={},t=[],a=0;a<n.length;a++){var i=n[a],s=e.base?i[0]+e.base:i[0],d=r[s]||0,l="".concat(s," ").concat(d);r[s]=d+1;var u=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:g(p,e),references:1}),t.push(l)}return t}function d(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function f(n,e,r){var t=r.css,a=r.media,i=r.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,h=0;function g(n,e){var r,t,a;if(e.singleton){var i=h++;r=m||(m=d(e)),t=p.bind(null,r,i,!1),a=p.bind(null,r,i,!0)}else r=d(e),t=f.bind(null,r,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var r=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var a=c(r[t]);o[a].references--}for(var i=s(n,e),d=0;d<r.length;d++){var l=c(r[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}r=i}}}},function(n,e,r){"use strict";r.r(e);var t=r(1),a=r.n(t)()(!1);a.push([n.i,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n  background:\r\n    radial-gradient(black 15%, transparent 16%) 0 0,\r\n    radial-gradient(black 15%, transparent 16%) 8px 8px,\r\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,\r\n    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;\r\n  background-color: #282828;\r\n  background-size: 16px 16px;\r\n  min-height: 100vh;\r\n  color: #efefef;\r\n}\r\n\r\n.footer a {\r\n  color: #efefef;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  padding: 4%;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: -20px;\r\n}\r\n\r\n.about-header {\r\n  text-align: center;\r\n  margin: 3%;\r\n}\r\n\r\n.navbar {\r\n  height: 80px;\r\n  width: 100%;\r\n  border-bottom: 1.2px solid burlywood;\r\n  padding: 1.8%;\r\n}\r\n\r\n.nav-item {\r\n  cursor: pointer;\r\n  margin: 1.2em;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.nav-item:hover {\r\n  border-bottom: 2px solid burlywood;\r\n}\r\n\r\n.home-page > h1 {\r\n  text-align: center;\r\n  padding-top: 3%;\r\n}\r\n\r\n.about-page {\r\n  padding: 4%;\r\n}\r\n\r\n.hero-img {\r\n  position: absolute;\r\n  left: 25%;\r\n  bottom: 10%;\r\n  object-fit: contain;\r\n  z-index: -1;\r\n  height: 80%;\r\n  width: 50%;\r\n  opacity: 0.3;\r\n}\r\n\r\n\r\n/* Menu page */\r\n.canvas {\r\n  display: flex;\r\n}\r\n\r\n.card {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  max-height: 300px;\r\n  width: 300px;\r\n  height: 220px;\r\n}\r\n\r\n.menu-img {\r\n  object-fit: contain;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.food-label {\r\n  margin-top: 2%;\r\n}\r\n\r\n/* Contact Page */\r\nform {\r\n  width: 40%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.field {\r\n  padding: 1.2em 1em;\r\n  height: 40px;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\ntextarea {\r\n  height: 200px;\r\n  width: 100%;\r\n  display: block;\r\n  padding: 1.2em 1em;\r\n}\r\n\r\n.contact-button {\r\n  color: orangered;\r\n  font-weight: bold;\r\n  padding: 9px 1em;\r\n  width: 30%;\r\n  margin-top: 3%;\r\n  cursor: pointer;\r\n  border-radius: 2px;\r\n  border: 1.2px solid #fff;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .navbar {\r\n    padding-top: 7%;\r\n    padding-left: 10%;\r\n  }\r\n\r\n  .nav-item {\r\n    margin: 0.6em;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .canvas {\r\n    display: block;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  .card {\r\n    height: 300px;\r\n    padding-left: 12%;\r\n  }\r\n\r\n  .menu-img {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  form {\r\n    width: 80%;\r\n  }\r\n}\r\n",""]),e.default=a},function(n,e,r){"use strict";r.r(e);r(0);var t=function(){const n=document.getElementById("content"),e=document.createElement("header");e.className="navbar",n.appendChild(e);const r=document.createElement("span");r.textContent="home",r.className="nav-item";const t=document.createElement("span");t.textContent="menu",t.className="nav-item";const a=document.createElement("span");a.textContent="contact",a.className="nav-item";const i=document.createElement("span");i.textContent="about",i.className="nav-item",e.appendChild(r),e.appendChild(t),e.appendChild(a),e.appendChild(i)};const a=document.createElement("footer");a.setAttribute("class","footer");const i=document.createElement("a");i.setAttribute("href","https://alfredezaka.netlify.app/"),i.textContent="© 2020 Alfred Ezaka",a.appendChild(i),a.classList.add("footer");var o=a,c=r.p+"f8c8776ebc67d10995fcfe9dc7f7bf22.png";const s=document.querySelector("#content"),d=document.createElement("section");d.id="wrapper";var l=`\n  <div class="home-page">\n    <h1 class='welcome'>WELCOME TO LOREM RESTAURANT</h1>\n    <img src=${c} class='hero-img' />\n  </div>\n`,u=r.p+"18a8625f6b66750208214536438181f4.png",p=r.p+"979e232ae86096d27d3c0cfc68bdca2d.png";var f=`\n  <div>\n    <h2 class='about-header'>MENU</h2>\n    <div class="canvas">\n      ${[{image:u,title:"Continental"},{image:r.p+"e52823020be8c8a6666a5e8f155e1ebe.png",title:"Health Booze"},{image:p,title:"Best Bite"},{image:r.p+"85cf0719267546395ba66be995bfb4e3.png",title:"Custom Mix"}].map(n=>`\n          <div class="card">\n            <img src=${n.image} class="menu-img" />\n            <p class="food-label">${n.title}</p>\n          </div>\n        `)}\n    </div>\n  </div>\n`;t(),d.innerHTML=l,s.appendChild(d),s.appendChild(o);const m=document.querySelectorAll(".nav-item");m.forEach(n=>{n.addEventListener("click",()=>{(n=>{switch(n.textContent){case"home":d.innerHTML=l,s.appendChild(d);break;case"menu":d.innerHTML=f,s.appendChild(d);break;case"contact":d.innerHTML="\n  <div class=\"contact-page\">\n    <h2 class='about-header'>HAVE AN INQUIRY ?</h2>\n    <form>\n      <input class='field' type='text' placeholder='Enter Your Name' />\n      <input type='email' class='field' placeholder='Enter Your Email' />\n      <textarea placeholder='Enter message/inquiry'></textarea>\n      <button class='contact-button'>LOREM</button>\n    </form>\n  </div>\n",s.appendChild(d);break;case"about":d.innerHTML="\n  <div class=\"about-page\">\n    <h2 class='about-header'>ABOUT</h2>\n    <p>\n  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptatem. \n  Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa \n  dicta corporis eligendi aspernatur facere eum.\n  Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta corporis eligendi \n  aspernatur facere eum Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta \n  corporis eligendi aspernatur facere eum. aspernatur facere eum Nostrum odio aperiam libero omnis velit natus id quisquam itaque? Sit, nulla velit ipsa dicta \n  corporis eligendi aspernatur facere eum.\n</p>\n  </div>\n",s.appendChild(d);break;default:d.innerHTML=l,s.appendChild(d)}})(n)})})}]);