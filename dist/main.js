!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=()=>{console.log("home");return'<img src="img/SamSpud-home.jpg" alt="">'};const o=document.querySelector("#home-button"),u=document.querySelector("#menu-button"),c=document.querySelector("#contact-button"),i=(()=>{let e=document.createElement("div");return e.setAttribute("id","content-container"),e})();document.querySelector("#page-container").appendChild(i),i.innerHTML=r(),o.addEventListener("click",e=>{e.preventDefault(),i.innerHTML="",i.innerHTML=r()}),u.addEventListener("click",e=>{e.preventDefault(),i.innerHTML="",i.innerHTML=(()=>{console.log("menu");return'<iframe src="https://giphy.com/embed/105OwsN7a4UQ2Q" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/food-the-lord-of-rings-sam-105OwsN7a4UQ2Q">via GIPHY</a></p>'})()}),c.addEventListener("click",e=>{e.preventDefault(),i.innerHTML="",i.innerHTML=(()=>{console.log("contact");return'<img src="img/SamSpud-contact.jpg" alt="">'})()})}]);