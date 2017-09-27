webpackJsonp([1],[,function(e,t,i){"use strict";(function(t){var n=(i(2),{});n.numberOfSections=t(".section").length,n.upArrow=t(".panel-arrow-up"),n.downArrow=t(".panel-arrow-down"),n.$characterContainers=t("#character-gallery .character-container"),n.characterDetails=[{id:"general",title:"The General",description:"lorem ipsum"},{id:"archivist",title:"The Archivist",description:"lorem ipsum"},{id:"freetown",title:"Freetown",description:"lorem ipsum"}],n.getActiveSection=function(){return t(".fp-section.active").index()+1},n.togglePanelArrows=function(e){1===e?n.upArrow.css("visibility","hidden"):e===n.numberOfSections?(n.upArrow.css("visibility","visible"),n.downArrow.css("visibility","hidden")):(n.downArrow.css("visibility","visible"),n.upArrow.css("visibility","visible"))},n.expandCharacterContainer=function(e){if(e.target.id&&0!==t("#character-gallery #"+e.target.id).length){var i=(e.target.id.split("character-")[1],t("#character-gallery .character-container:not(#"+e.target.id+")")),o=t("#character-gallery .character-container#"+e.target.id);t(".character-caption").css("display","none"),n.$characterContainers.removeClass("active"),n.$characterContainers.removeClass("col-xs-3"),n.$characterContainers.removeClass("col-xs-6"),n.$characterContainers.removeClass("col-xs-2"),t("#character-gallery #"+e.target.id).addClass("col-xs-6"),o.addClass("active"),i.addClass("col-xs-2"),t("#"+e.target.id+" .character-caption").css("display","block")}},n.registerCharacterContainerClick=function(){t("#character-gallery").on("click",n.expandCharacterContainer),n.$characterContainers.hover(n.expandCharacterContainer)},e.exports=n}).call(t,i(0))},function(e,t,i){(function(t){var n={};i(1);n.timeLineLength=t(".bayou-timeline__textContainer").length,n.timeLineTextContainerHeight=100/n.timeLineLength,n.navBlock=t(".bayou-timeline__navBlock.travel.extra"),n.navBlockPosition=[3.5],n.$timeline=t(".bayou-timeline"),n.timelineStartIndex=2,function(){for(var e=n.navBlockPosition[0],t=n.navBlockPosition[0]/100,i=0;i<n.timeLineLength;i+=1)e+=n.timeLineTextContainerHeight,n.navBlockPosition.push(e+t)}(),n.setNavBlockTop=function(e){n.navBlock.css("top",n.navBlockPosition[e]+"%")},n.activateTimeLineComponent=function(e){if(console.log("INDEX",e),!(e<n.timelineStartIndex)){var t=e-n.timelineStartIndex;n.setNavBlockTop(t),setTimeout(function(){n.iterateTimelineText(e-1)},200)}},n.iterateTimelineText=function(e){var i=e+1;t(".bayou-timeline__textContainer").removeClass("active"),t(".bayou-timeline__textContainer:nth-child("+i+")").addClass("active")},n.initTimeline=function(){t(".bayou-timeline__textContainer").css("height",n.timeLineTextContainerHeight+"%")},n.initTimeline(),e.exports=n}).call(t,i(0))},function(e,t,i){"use strict";(function(e){var t=i(4);e(document).ready(function(){t.init()})}).call(t,i(0))},function(e,t,i){var n=i(0),o=(i(5),i(1)),a=i(2),r=i(7),s=i(8),l={};"function"==typeof n.fn.fullpage.destroy&&n.fn.fullpage.destroy("all"),l.init=function(){var e=0,t=n("#introVid");n("#fullpage").fullpage({verticalCentered:!1,css3:!0,sectionsColor:["rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)"],anchors:[],animateAnchor:!0,navigation:!0,navigationPosition:"hide",navigationTooltips:["Home","Pipeline Gallery","Vieo 1"],afterLoad:function(e,t){console.log("INDEX",t),t>1&&o.downArrow.removeClass("bounce-down"),o.togglePanelArrows(t),r.hideIframeEmbeds(),t===a.timelineStartIndex||t===o.numberOfSections-1?a.$timeline.css("visibility","visible"):t===o.numberOfSections&&a.$timeline.css("visibility","hidden"),"pipeline"===s.currentGallerySlide()?(s.switchVideo("pipeline","us_etp_pipelines"),s.buildHotspots("pipeline")):"louisiana"===s.currentGallerySlide()&&(s.switchVideo("louisiana","la_pipeline_path_tb"),s.buildHotspots("louisiana")),r.handleVideoSlide(t)},onLeave:function(e,i,o){a.activateTimeLineComponent(i);var r=0===n("#introVid:visible").length;1!==e||r?2===e&&1===i&&(r||t.fadeTo("slow",1)):t.fadeTo("slow",0),e===a.timelineStartIndex&&i===a.timelineStartIndex-1&&a.$timeline.css("visibility","hidden")}}),o.downArrow.on("click",function(){e=o.getActiveSection(),n.fn.fullpage.moveTo(e+1,0)}),o.upArrow.on("click",function(){e=o.getActiveSection(),n.fn.fullpage.moveTo(e-1,0)}),o.registerCharacterContainerClick(),s.init()},e.exports=l},function(e,t,i){"use strict";(function(i){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o,a,r,s,s,l=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i){if("object"===A(t)&&void 0!==e)e.exports=i();else{a=[],o=i,void 0!==(r="function"==typeof o?o.apply(t,a):o)&&(e.exports=r)}}(function(){return function e(t,i,n){function o(r,l){if(!i[r]){if(!t[r]){var A="function"==typeof s&&s;if(!l&&A)return s(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var h=i[r]={exports:{}};t[r][0].call(h.exports,function(e){var i=t[r][1][e];return o(i||e)},h,h.exports,e,t,i,n)}return i[r].exports}for(var a="function"==typeof s&&s,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(e,t,i){function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},i=0;i<10;i++)t["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var i,s,l=n(e),A=1;A<arguments.length;A++){i=Object(arguments[A]);for(var c in i)a.call(i,c)&&(l[c]=i[c]);if(o){s=o(i);for(var h=0;h<s.length;h++)r.call(i,s[h])&&(l[s[h]]=i[s[h]])}}return l}},{}],2:[function(e,t,i){var o=e("raf"),a=e("object-assign"),r={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(e,t,i){return t<i?e<t?t:e>i?i:e:e<i?i:e>t?t:e},data:function(e,t){return r.deserialize(e.getAttribute("data-"+t))},deserialize:function(e){return"true"===e||"false"!==e&&("null"===e?null:!isNaN(parseFloat(e))&&isFinite(e)?parseFloat(e):e)},camelCase:function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},accelerate:function(e){r.css(e,"transform","translate3d(0,0,0) rotate(0.0001deg)"),r.css(e,"transform-style","preserve-3d"),r.css(e,"backface-visibility","hidden")},transformSupport:function(e){for(var t=document.createElement("div"),i=!1,n=null,o=!1,a=null,s=null,l=0,A=r.vendors.length;l<A;l++)if(null!==r.vendors[l]?(a=r.vendors[l][0]+"transform",s=r.vendors[l][1]+"Transform"):(a="transform",s="transform"),void 0!==t.style[s]){i=!0;break}switch(e){case"2D":o=i;break;case"3D":if(i){var c=document.body||document.createElement("body"),h=document.documentElement,u=h.style.overflow,d=!1;document.body||(d=!0,h.style.overflow="hidden",h.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(t),t.style[s]="translate3d(1px,1px,1px)",n=window.getComputedStyle(t).getPropertyValue(a),o=void 0!==n&&n.length>0&&"none"!==n,h.style.overflow=u,c.removeChild(t),d&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return o},css:function(e,t,i){var n=r.propertyCache[t];if(!n)for(var o=0,a=r.vendors.length;o<a;o++)if(n=null!==r.vendors[o]?r.camelCase(r.vendors[o][1]+"-"+t):t,void 0!==e.style[n]){r.propertyCache[t]=n;break}e.style[n]=i}},s={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},A=function(){function e(t,i){n(this,e),this.element=t,this.layers=t.getElementsByClassName("layer");var o={calibrateX:r.data(this.element,"calibrate-x"),calibrateY:r.data(this.element,"calibrate-y"),invertX:r.data(this.element,"invert-x"),invertY:r.data(this.element,"invert-y"),limitX:r.data(this.element,"limit-x"),limitY:r.data(this.element,"limit-y"),scalarX:r.data(this.element,"scalar-x"),scalarY:r.data(this.element,"scalar-y"),frictionX:r.data(this.element,"friction-x"),frictionY:r.data(this.element,"friction-y"),originX:r.data(this.element,"origin-x"),originY:r.data(this.element,"origin-y"),pointerEvents:r.data(this.element,"pointer-events"),precision:r.data(this.element,"precision"),relativeInput:r.data(this.element,"relative-input"),clipRelativeInput:r.data(this.element,"clip-relative-input"),hoverOnly:r.data(this.element,"hover-only"),inputElement:document.querySelector(r.data(this.element,"input-element")),selector:r.data(this.element,"selector")};for(var l in o)null===o[l]&&delete o[l];a(this,s,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return l(e,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=r.transformSupport("2D"),this.transform3DSupport=r.transformSupport("3D")),this.transform3DSupport&&r.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var e=0;e<this.layers.length;e++){var t=this.layers[e];this.transform3DSupport&&r.accelerate(t),t.style.position=e?"absolute":"relative",t.style.display="block",t.style.left=0,t.style.top=0;var i=r.data(t,"depth")||0;this.depthsX.push(r.data(t,"depth-x")||i),this.depthsY.push(r.data(t,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(e){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,e)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=o(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),o.cancel(this.raf))}},{key:"calibrate",value:function(e,t){this.calibrateX=void 0===e?this.calibrateX:e,this.calibrateY=void 0===t?this.calibrateY:t}},{key:"invert",value:function(e,t){this.invertX=void 0===e?this.invertX:e,this.invertY=void 0===t?this.invertY:t}},{key:"friction",value:function(e,t){this.frictionX=void 0===e?this.frictionX:e,this.frictionY=void 0===t?this.frictionY:t}},{key:"scalar",value:function(e,t){this.scalarX=void 0===e?this.scalarX:e,this.scalarY=void 0===t?this.scalarY:t}},{key:"limit",value:function(e,t){this.limitX=void 0===e?this.limitX:e,this.limitY=void 0===t?this.limitY:t}},{key:"origin",value:function(e,t){this.originX=void 0===e?this.originX:e,this.originY=void 0===t?this.originY:t}},{key:"setInputElement",value:function(e){this.inputElement=e,this.updateDimensions()}},{key:"setPosition",value:function(e,t,i){t=t.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?r.css(e,"transform","translate3d("+t+","+i+",0)"):this.transform2DSupport?r.css(e,"transform","translate("+t+","+i+")"):(e.style.left=t,e.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var e=this.inputX-this.calibrationX,t=this.inputY-this.calibrationY;(Math.abs(e)>this.calibrationThreshold||Math.abs(t)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?t:this.inputY,this.motionY=this.calibrateY?e:this.inputX):(this.motionX=this.calibrateX?e:this.inputX,this.motionY=this.calibrateY?t:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=r.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=r.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],a=this.depthsX[i],s=this.depthsY[i],l=this.velocityX*(a*(this.invertX?-1:1)),A=this.velocityY*(s*(this.invertY?-1:1));this.setPosition(n,l,A)}this.raf=o(this.onAnimationFrame)}},{key:"rotate",value:function(e,t){var i=(e||0)/30,n=(t||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(e){var t=e.beta,i=e.gamma;null!==t&&null!==i&&(this.orientationStatus=1,this.rotate(t,i))}},{key:"onDeviceMotion",value:function(e){var t=e.rotationRate.beta,i=e.rotationRate.gamma;null!==t&&null!==i&&(this.motionStatus=1,this.rotate(t,i))}},{key:"onMouseMove",value:function(e){var t=e.clientX,i=e.clientY;if(this.hoverOnly&&(t<this.elementPositionX||t>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(t=Math.max(t,this.elementPositionX),t=Math.min(t,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(t-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(t-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}}]),e}();t.exports=A},{"object-assign":1,raf:5}],3:[function(e,t,i){(function(e){(function(){var i,n,o,a,r,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:void 0!==e&&null!==e&&e.hrtime?(t.exports=function(){return(i()-r)/1e6},n=e.hrtime,i=function(){var e;return e=n(),1e9*e[0]+e[1]},a=i(),s=1e9*e.uptime(),r=a-s):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,e("_process"))},{_process:4}],4:[function(e,t,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(h===setTimeout)return setTimeout(e,0);if((h===n||!h)&&setTimeout)return h=setTimeout,setTimeout(e,0);try{return h(e,0)}catch(t){try{return h.call(null,e,0)}catch(t){return h.call(this,e,0)}}}function r(e){if(u===clearTimeout)return clearTimeout(e);if((u===o||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}function s(){v&&p&&(v=!1,p.length?m=p.concat(m):f=-1,m.length&&l())}function l(){if(!v){var e=a(s);v=!0;for(var t=m.length;t;){for(p=m,m=[];++f<t;)p&&p[f].run();f=-1,t=m.length}p=null,v=!1,r(e)}}function A(e,t){this.fun=e,this.array=t}function c(){}var h,u,d=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:n}catch(e){h=n}try{u="function"==typeof clearTimeout?clearTimeout:o}catch(e){u=o}}();var p,m=[],v=!1,f=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];m.push(new A(e,t)),1!==m.length||v||a(l)},A.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],5:[function(e,t,n){(function(i){for(var n=e("performance-now"),o="undefined"==typeof window?i:window,a=["moz","webkit"],r="AnimationFrame",s=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],A=0;!s&&A<a.length;A++)s=o[a[A]+"Request"+r],l=o[a[A]+"Cancel"+r]||o[a[A]+"CancelRequest"+r];if(!s||!l){var c=0,h=0,u=[];s=function(e){if(0===u.length){var t=n(),i=Math.max(0,1e3/60-(t-c));c=i+t,setTimeout(function(){var e=u.slice(0);u.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(i))}return u.push({handle:++h,callback:e,cancelled:!1}),h},l=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}}t.exports=function(e){return s.call(o,e)},t.exports.cancel=function(){l.apply(o,arguments)},t.exports.polyfill=function(){o.requestAnimationFrame=s,o.cancelAnimationFrame=l}}).call(this,void 0!==i?i:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":3}]},{},[2])(2)})}).call(t,i(6))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){(function(t){var n=i(1),o={},a=null,r=null;o.player=null,o.$videoPaneContainers=t(".video-pane__container");var s=document.createElement("script");s.src="https://www.youtube.com/iframe_api";var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(s,l),o.playCurrentVimeoVideo=function(){var e=n.getActiveSection()-1,t=document.querySelector("#slide0"+e);o.player=new Vimeo.Player(t),o.player.play(),o.player.on("play",function(){console.log("played the video!")})},o.playCurrentYoutubeVideo=function(e){var t=n.getActiveSection()-1;document.querySelector("#videoslide0"+t).src+="&autoplay=1",e.preventDefault()},o.hideIframeEmbeds=function(){o.$videoPaneContainers.removeClass("show")},o.currentVideoSlide=function(){return t(".fp-section.active #video_0").length>0?0:t(".fp-section.active #video_1").length>0?1:t(".fp-section.active #video_2").length>0?2:t(".fp-section.active #video_3").length>0?3:t(".fp-section.active #video_4").length>0&&4},o.playIframeVideo=function(){r.addClass("show"),r.removeClass("hide"),a.removeClass("show"),a.addClass("hide"),o.$videoPaneContainers.addClass("show"),currentIframe.playVideo(),n.upArrow.css("visibility","hidden"),n.downArrow.css("visibility","hidden")},o.stopIframeVideo=function(){o.$videoPaneContainers.addClass("hide"),o.$videoPaneContainers.removeClass("show"),a.addClass("show"),a.removeClass("hide"),r.removeClass("show"),r.addClass("hide"),currentIframe.pauseVideo(),n.upArrow.css("visibility","visible"),n.downArrow.css("visibility","visible")},o.handleVideoSlide=function(e){o.player&&o.player.pause(),currentIframe=iframeSvc.players[o.currentVideoSlide()],console.log("IFRAME PLAYERS",iframeSvc.players),a=t(".hide-on-play"),r=t(".video-pane__youtube"),a.removeClass("hide"),r.removeClass("show"),t(".fp-section.active .watch-video").on("click",o.playIframeVideo),t(".fp-section.active .video-pane__video-close").on("click",o.stopIframeVideo)},document.body.onkeyup=function(e){32==e.keyCode&&(console.log("CAPTURED KEYSTROKE"),o.playIframeVideo())},o.scaleVideo=function(){var e=t(window),i=t("iframe"),n=e.height();i.css("height",n);var o=i.width(),a=e.width(),r=(a-o)/2;i.css({height:n,marginLeft:r})},e.exports=o}).call(t,i(0))},function(e,t,i){(function(t){var n=i(9),o={};o.videoHost="https://s3.amazonaws.com/fireriver/trueblack/",o.videoUrls=[{url:"us_etp_pipelines",caption:"The Bayou Bridge Pipeline would carry oil transported via the Dakota Access Pipeline to refineries and international export terminals in Louisiana. They are both projects that would be completed by Energy Transfer Partners.",mapId:"pipeline",loop:!1,title:"Connection of Dakota Access Pipeline and Bayou Bridge Pipeline",default:!0,coords:{x:6,y:20}},{url:"us_all_pipelines",caption:"Approximately 299,000 miles of onshore gas transmission pipelines and 171,000 miles of onshore hazardous liquid pipelines move natural gas, crude oil, and petroleum products throughout the U.S. every day. There are over 2.1 million miles of distribution pipelines in service today. <hr> <ul><li style='color:red'>Crude Oil Pipelines</li><li style='color:yellow'>Natural Gas Pipelines</li></ul>",mapId:"pipeline",loop:!1,source:"Graphic source: American Energy Mapping",title:"Map of US Pipelines",coords:{x:6,y:40}},{url:"us_spills_2010",caption:"In a span of 5 years, More than 7 million gallons of crude oil have spilled from pipelines in the United States. There have been more than 3,300 incidents of crude oil and liquefied natural gas leaks or ruptures.",title:"Pipeline Spills Since 2010",loop:!1,mapId:"pipeline",coords:{x:6,y:60}},{url:"us_etp_spills",caption:"Energy Transfer Partners and its subsidiary Sunoco have filed 69 accidents over the past two years. An average of 2.8 spills every month. They have had more accidents than any other pipeline company this decade.",mapId:"pipeline",loop:!0,title:"Energy Transfer Partners Spills in 2015-2016",source:"Source: Pipeline and Hazardous Materials Safety Administration; LA Bucket Brigade with data from The National Response Center",coords:{x:6,y:80}},{url:"la_pipeline_path_tb",caption:"The 162 mile Bayou Bridge pipeline would cross 11 parishes, 700 bodies of water, and impact over 600 acres of wetlands. The pipeline route runs through Bayou Lafourche, the drinking water supply for at least 300,000 people.",mapId:"louisiana",loop:!1,default:!0,title:"The Path Of The Bayou Bridge Pipeline",coords:{x:6,y:20}},{url:"la_current_pipelines_tb",caption:"Pipelines",mapId:"louisiana",loop:!1,caption:"Louisiana currently has more than 50,000 miles of pipelines. This integrated system of pipelines criss-cross every major highway, railroad and navigable waterway in Louisiana.",title:"Map of Louisiana Pipelines",source:"Sources: Louisiana Mid Continent Oil & Gas Association; Department of Natural Resources",coords:{x:6,y:40}},{url:"la_coastal_erosion_tb",caption:"Louisiana has lost just under 1,900 square miles of land between 1932 and 2000 (equivalent to the state of Delaware). The three main causes of land loss are reduced sediment flow from the Mississippi River (caused by man-made levees), subsidence (caused in part by oil exploration) and rising sea levels (caused by increased greenhouse gas emissions).",mapId:"louisiana",title:"Louisiana's Current Walkable Land",source:"Source: US Geological Survey; Tulane University Geology Department",loop:!1,coords:{x:6,y:60}},{url:"la_pipeline_spills_tb",caption:'There were 144 reported pipeline accidents in 2016. n average of 2.7 per week (not including unreported accidents). 48% of the accidents were caused by corrosion, leaks, holes and ruptures. 33% have "unknown or unexplained causes."',mapId:"louisiana",loop:!0,source:"Sources: LA Bucket Brigade; National Response Center",title:"Louisiana Pipeline Accidents",coords:{x:6,y:80}}],o.getVideoObject=function(e){for(var t=0;t<o.videoUrls.length;t++){var i=o.videoUrls[t];if(i.url===e)return i}},o.currentGallerySlide=function(){return t(".fp-section.active #pipeline").length>0?"pipeline":t(".fp-section.active #louisiana").length>0&&"louisiana"},o.initGalleryKeyControls=function(){t(document).keydown(function(e){switch(e.which){case 37:case 38:break;case 39:console.log("RIGHTKEY");break;case 40:break;default:return}e.preventDefault()})},o.handleVideoReplace=function(e,i){var a=o.videoHost+i.url,r=t("video#"+e);r.prop("loop",i.loop);var s=a;s=n.video&&n.video.webm?a+".webm":n.video&&n.video.ogg?a+".ogv":a+".mp4",r.attr("src",s)},o.setActiveButton=function(e,i){t(".toggle-"+e).removeClass("btn-warning"),t(".toggle-"+e).addClass("btn-primary"),t(".toggle-"+e+"#"+i).removeClass("btn-primary"),t(".toggle-"+e+"#"+i).addClass("btn-warning")},o.switchVideo=function(e,i){var n=t(".gallery-display-wrapper."+e),a=0===t(".gallery-player:visible").length,r="url('app/assets/img/maps/"+e+"_background.png')";a?t(".gallery-display-wrapper."+e).css("background-image","url('app/assets/img/maps/map-"+i+".png')"):n.css("background-image")!==r&&n.css("background-image",r);var s=o.getVideoObject(i),l=(o.videoHost,s.url,s.caption),A=s.source,c=s.title;o.setActiveButton(e,i),o.handleVideoReplace(e,s),console.log(t(".toggle-"+e+"-title")),t(".toggle-"+e+"-title").text(c),t(".toggle-"+e+"-caption").html(l),t(".toggle-"+e+"-source").text(A)},o.buildHotspots=function(e){for(var i="",n=0;n<o.videoUrls.length;n+=1){var a=o.videoUrls[n],r=a.default?"btn-warning":"btn-primary";a.mapId===e&&(i+='<div class="hotspot toggle-'+e+" "+r+'" id="'+a.url+'" style="top:'+a.coords.y+"%;right:"+a.coords.x+'%" />')}t(".hotspot-container#"+e).html(i)},o.init=function(){t(".toggle-gallery").on("click",function(e){var t=e.target.id,i=o.getVideoObject(t),n=i.mapId;o.switchVideo(n,t)}),o.initGalleryKeyControls()},e.exports=o}).call(t,i(0))},function(e,t){!function(t){var i="Modernizr"in t,n=t.Modernizr;/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-video-videoautoplay-videocrossorigin-videoloop-videopreload-setclasses !*/
!function(e,t,i){function n(e,t){return typeof e===t}function o(e){var t=h.className,i=A._config.classPrefix||"";if(u&&(t=t.baseVal),A._config.enableJSClass){var n=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");t=t.replace(n,"$1"+i+"js$2")}A._config.enableClasses&&(t+=" "+i+e.join(" "+i),u?h.className.baseVal=t:h.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):u?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(e,t){if("object"==typeof e)for(var i in e)d(e,i)&&r(i,e[i]);else{e=e.toLowerCase();var n=e.split("."),a=A[n[0]];if(2==n.length&&(a=a[n[1]]),void 0!==a)return A;t="function"==typeof t?t():t,1==n.length?A[n[0]]=t:(!A[n[0]]||A[n[0]]instanceof Boolean||(A[n[0]]=new Boolean(A[n[0]])),A[n[0]][n[1]]=t),o([(t&&0!=t?"":"no-")+n.join("-")]),A._trigger(e,t)}return A}var s=[],l={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var i=this;setTimeout(function(){t(i[e])},0)},addTest:function(e,t,i){s.push({name:e,fn:t,options:i})},addAsyncTest:function(e){s.push({name:null,fn:e})}},A=function(){};A.prototype=l,A=new A;var c=[],h=t.documentElement,u="svg"===h.nodeName.toLowerCase();A.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t});var d;!function(){var e={}.hasOwnProperty;d=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,i){return e.call(t,i)}}(),l._l={},l.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),A.hasOwnProperty(e)&&setTimeout(function(){A._trigger(e,A[e])},0)},l._trigger=function(e,t){if(this._l[e]){var i=this._l[e];setTimeout(function(){var e;for(e=0;e<i.length;e++)(0,i[e])(t)},0),delete this._l[e]}},A._q.push(function(){l.addTest=r}),A.addAsyncTest(function(){function e(a){o++,clearTimeout(t);var l=a&&"playing"===a.type||0!==s.currentTime;return!l&&n>o?void(t=setTimeout(e,i)):(s.removeEventListener("playing",e,!1),r("videoautoplay",l),void(s.parentNode&&s.parentNode.removeChild(s)))}var t,i=200,n=5,o=0,s=a("video"),l=s.style;if(!(A.video&&"autoplay"in s))return void r("videoautoplay",!1);l.position="absolute",l.height=0,l.width=0;try{if(A.video.ogg)s.src="data:video/ogg;base64,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";else{if(!A.video.h264)return void r("videoautoplay",!1);s.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(e){return void r("videoautoplay",!1)}s.setAttribute("autoplay",""),s.style.cssText="display:none",h.appendChild(s),setTimeout(function(){s.addEventListener("playing",e,!1),t=setTimeout(e,i)},0)}),A.addTest("videocrossorigin","crossOrigin"in a("video")),A.addTest("videoloop","loop"in a("video")),A.addTest("videopreload","preload"in a("video")),function(){var e,t,i,o,a,r,l;for(var h in s)if(s.hasOwnProperty(h)){if(e=[],t=s[h],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(i=0;i<t.options.aliases.length;i++)e.push(t.options.aliases[i].toLowerCase());for(o=n(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)r=e[a],l=r.split("."),1===l.length?A[l[0]]=o:(!A[l[0]]||A[l[0]]instanceof Boolean||(A[l[0]]=new Boolean(A[l[0]])),A[l[0]][l[1]]=o),c.push((o?"":"no-")+l.join("-"))}}(),o(c),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<A._q.length;p++)A._q[p]();e.Modernizr=A}(t,document),e.exports=t.Modernizr,i?t.Modernizr=n:delete t.Modernizr}(window)}],[3]);