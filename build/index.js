module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=require("react")},function(e,n,t){e.exports=t(5)()},function(e,n,t){var r=t(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(9)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Description=n.ContentBody=n.ContentYear=n.Content=n.Timeline=void 0;var r=c(t(4)),o=c(t(11)),i=c(t(12)),a=c(t(13)),l=c(t(14));function c(e){return e&&e.__esModule?e:{default:e}}n.Timeline=r.default,n.Content=o.default,n.ContentYear=i.default,n.ContentBody=a.default,n.Description=l.default},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(0)),o=i(t(1));function i(e){return e&&e.__esModule?e:{default:e}}t(2);var a=function(e){var n=e.children;return r.default.createElement("section",{className:"timeline"},n)};a.propTypes={children:o.default.node.isRequired},n.default=a},function(e,n,t){"use strict";var r=t(6);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){(e.exports=t(8)(!0)).push([e.i,".timeline {\n  padding: 10px 20px 20px;\n  width: 100%; }\n  .timeline__container {\n    display: flex;\n    line-height: 1; }\n    .timeline__container__year {\n      color: #002a3a;\n      font-size: 1em;\n      font-weight: 400;\n      padding-right: 15px;\n      position: relative;\n      width: 40px; }\n      .timeline__container__year__item {\n        margin-bottom: 8px; }\n      .timeline__container__year::after {\n        background: #ccc;\n        border-radius: 50%;\n        content: '';\n        height: 6px;\n        position: absolute;\n        right: -1px;\n        top: 5px;\n        width: 6px; }\n    .timeline__container__body {\n      color: #002a3a;\n      font-size: .9em;\n      padding-bottom: 20px;\n      padding-left: 15px;\n      position: relative; }\n      @media (min-width: 1200px) {\n        .timeline__container__body {\n          font-size: 1em; } }\n      .timeline__container__body::before {\n        background-color: #ccc;\n        content: '';\n        height: 100%;\n        left: -3px;\n        min-height: 95%;\n        position: absolute;\n        top: 10px;\n        width: 2px; }\n      .timeline__container__body__title {\n        font-weight: bold;\n        margin-bottom: 5px;\n        margin-top: 0;\n        text-align: left; }\n      .timeline__container__body__description {\n        margin-bottom: 10px;\n        margin-top: 10px;\n        text-align: left; }\n        .timeline__container__body__description__text {\n          font-weight: 300; }\n        .timeline__container__body__description__optional {\n          color: #818a91;\n          font-style: italic; }\n          .timeline__container__body__description__optional::before {\n            content: '- (';\n            margin-left: 5px; }\n          .timeline__container__body__description__optional::after {\n            content: ')'; }\n    .timeline__container:last-child .timeline__container__body::before {\n      display: none; }\n","",{version:3,sources:["/Users/eduardo.alvarez/Documents/PERSONALS/vertical-timeline-component-react/src/assets/styles.scss","/Users/eduardo.alvarez/Documents/PERSONALS/vertical-timeline-component-react/src/assets/_colors.scss"],names:[],mappings:"AAEA;EACE,uBAAuB;EACvB,WAAW,EAAA;EAEX;IACE,aAAa;IACb,cAAc,EAAA;IAEd;MACE,cCXkB;MDYlB,cAAc;MACd,gBAAgB;MAChB,mBAAmB;MACnB,kBAAkB;MAClB,WAAW,EAAA;MAEX;QACE,kBAAkB,EAAA;MATrB;QAaG,gBCtBS;QDuBT,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,QAAQ;QACR,UAAU,EAAA;IAId;MACE,cCnCkB;MDoClB,eAAe;MACf,oBAAoB;MACpB,kBAAkB;MAClB,kBAAkB,EAAA;MAElB;QAPF;UAQI,cAAc,EAAA,EA4CjB;MApDA;QAYG,sBC7CS;QD8CT,WAAW;QACX,YAAY;QACZ,UAAU;QACV,eAAe;QACf,kBAAkB;QAClB,SAAS;QACT,UAAU,EAAA;MAGZ;QACE,iBAAiB;QACjB,kBAAkB;QAClB,aAAa;QACb,gBAAgB,EAAA;MAGlB;QACE,mBAAmB;QACnB,gBAAgB;QAChB,gBAAgB,EAAA;QAEhB;UACE,gBAAgB,EAAA;QAGlB;UACE,cCvEc;UDwEd,kBAAkB,EAAA;UAFnB;YAKG,cAAc;YACd,gBAAgB,EAAA;UANnB;YAUG,YAAY,EAAA;IA5ErB;MAqFO,aAAa,EAAA",file:"styles.scss",sourcesContent:["@import './colors';\n\n.timeline {\n  padding: 10px 20px 20px;\n  width: 100%;\n\n  &__container {\n    display: flex;\n    line-height: 1;\n\n    &__year {\n      color: $title-color;\n      font-size: 1em;\n      font-weight: 400;\n      padding-right: 15px;\n      position: relative;\n      width: 40px;\n\n      &__item {\n        margin-bottom: 8px;\n      }\n\n      &::after {\n        background: $dot-color;\n        border-radius: 50%;\n        content: '';\n        height: 6px;\n        position: absolute;\n        right: -1px;\n        top: 5px;\n        width: 6px;\n      }\n    }\n\n    &__body {\n      color: $text-color;\n      font-size: .9em;\n      padding-bottom: 20px;\n      padding-left: 15px;\n      position: relative;\n\n      @media (min-width: 1200px) {\n        font-size: 1em;\n      }\n\n      &::before {\n        background-color: $line-color;\n        content: '';\n        height: 100%;\n        left: -3px;\n        min-height: 95%;\n        position: absolute;\n        top: 10px;\n        width: 2px;\n      }\n\n      &__title {\n        font-weight: bold;\n        margin-bottom: 5px;\n        margin-top: 0;\n        text-align: left;\n      }\n\n      &__description {\n        margin-bottom: 10px;\n        margin-top: 10px;\n        text-align: left;\n\n        &__text {\n          font-weight: 300;\n        }\n\n        &__optional {\n          color: $text-optional-color;\n          font-style: italic;\n\n          &::before {\n            content: '- (';\n            margin-left: 5px;\n          }\n\n          &::after {\n            content: ')';\n          }\n        }\n      }\n    }\n\n    &:last-child {\n      .timeline__container__body {\n        &::before {\n          display: none;\n        }\n      }\n    }\n  }\n}\n","$darkblue-color: #002a3a;\n$grey-color: #ccc;\n$darkgrey-color: #818a91;\n\n\n$title-color: $darkblue-color;\n$text-color: $darkblue-color;\n$text-optional-color: $darkgrey-color;\n\n$line-color: $grey-color;\n$dot-color: $grey-color;\n"]}])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,s=0,u=[],f=t(10);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],n))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(b(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:l}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function A(e,n){var t=l(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertAt.before,t);t.insertBefore(n,o)}}function _(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return h(n,e.attrs),A(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=s++;t=c||(c=m(n)),r=g.bind(null,t,a,!1),o=g.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),A(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,t,n),o=function(){_(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){_(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(l=i[a.id]).refs--,r.push(l)}e&&d(p(e,n),n);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}};var y,v=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function g(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(0)),o=i(t(1));function i(e){return e&&e.__esModule?e:{default:e}}t(2);var a=function(e){var n=e.children;return r.default.createElement("section",{className:"timeline__container"},n)};a.propTypes={children:o.default.node.isRequired},n.default=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(0)),o=i(t(1));function i(e){return e&&e.__esModule?e:{default:e}}t(2);var a=function(e){var n=e.year;return r.default.createElement("div",{className:"timeline__container__year"},r.default.createElement("div",{className:"timeline__container__year__item"},n))};a.propTypes={year:o.default.string.isRequired},n.default=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(0)),o=i(t(1));function i(e){return e&&e.__esModule?e:{default:e}}t(2);var a=function(e){var n=e.title,t=e.children;return r.default.createElement("div",{className:"timeline__container__body"},r.default.createElement("p",{className:"timeline__container__body__title"},n),t)};a.propTypes={title:o.default.string.isRequired,children:o.default.node.isRequired},n.default=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(0)),o=i(t(1));function i(e){return e&&e.__esModule?e:{default:e}}t(2);var a=function(e){var n=e.text,t=e.optional;return r.default.createElement("div",{className:"timeline__container__body__description"},r.default.createElement("span",{className:"timeline__container__body__description__text"},n),t?r.default.createElement("span",{className:"timeline__container__body__description__optional"},t):"")};a.propTypes={text:o.default.string.isRequired,optional:o.default.string},a.defaultProps={optional:""},n.default=a}]);