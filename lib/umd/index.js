!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["jane-component"]={},e.React)}(this,(function(e,t){"use strict";function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var o={exports:{}};
/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/!function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=r(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var i in e)t.call(e,i)&&e[i]&&(o=r(o,i));return o}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}(o);var r=n(o.exports);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".j-button{background-image:none;background:#fff;border:1px solid #d9d9d9;border-radius:2px;box-shadow:0 2px #00000004;color:#000000d9;cursor:pointer;display:inline-block;font-size:14px;font-weight:400;height:32px;padding:4px 15px;position:relative;text-align:center;touch-action:manipulation;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.j-button-primary{background:#1890ff;border-color:#1890ff}.j-button-danger,.j-button-primary{box-shadow:0 2px #0000000b;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.12)}.j-button-danger{background:red;border-color:red}");e.Button=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{children:"click",type:"default"},n="j-button";return t.createElement("button",{className:r(n,n+"-"+e.type)},e.children)},e.count=function(e,t){return e+t}}));