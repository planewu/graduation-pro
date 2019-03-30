!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(3)},,,function(module,exports){function _clearTimeTickers(){for(var t=0;t<_intervalIdList.length;t++)clearInterval(_intervalIdList[t]);for(var t=0;t<_timeoutIdList.length;t++)clearTimeout(_timeoutIdList[t]);_intervalIdList=[],_timeoutIdList=[]}function syncBackOption(t){var e=t.getOption();if(_windowTopOrigin){var n={series:[]};try{n=JSON.stringify(e)}catch(i){console.error(i)}window.top.postMessage({action:"optionUpdated",computedOption:n},_windowTopOrigin)}}function _wrapEChartsSetOption(t){var e=t.setOption;t.setOption=function(){var n=e.apply(t,arguments);return clearTimeout(syncBackTimeout),syncBackTimeout=setTimeout(function(){syncBackOption(t)},2e3),n}}function _wrapOnMethods(t){var e=t.on;t.on=function(n){var i=e.apply(t,arguments);return _events.push(n),i}}function _clearChartEvents(){_events.forEach(function(t){if(myChart)myChart.off(t);else for(var e=0;e<myCharts.length;++e)myCharts[e].off(t)}),_events.length=0}function updateConfigGUI(){if(gui&&($(gui.domElement).remove(),gui.destroy(),gui=null),app.config){gui=new dat.GUI({autoPlace:!1}),$(gui.domElement).css({position:"absolute",right:5,top:0,zIndex:1e3}),$("#chart-panel").append(gui.domElement);var t=app.configParameters||{};for(var e in app.config){var n=app.config[e];if("onChange"!==e&&"onFinishChange"!==e){var i=!1,o=null;if(t[e]&&(t[e].options?o=gui.add(app.config,e,t[e].options):null!=t[e].min&&(o=gui.add(app.config,e,t[e].min,t[e].max),null!=t[e].step&&o.step(t[e].step))),"string"==typeof n)try{var a=echarts.color.parse(n);i=!!a,i&&(n=echarts.color.stringify(a,"rgba")),app.config[e]=n}catch(r){}o||(o=gui[i?"addColor":"add"](app.config,e)),app.config.onChange&&o.onChange(app.config.onChange),app.config.onFinishChange&&o.onFinishChange(app.config.onFinishChange)}}}}function renderPartialCanvas(t,e,n,i){var o=document.createElement("canvas");o.width=2*e,o.height=2*n;var a=document.createElement("canvas");a.width=e,a.height=n;var r=a.getContext("2d"),s=echarts.init(o),h=myChart?myChart.getOption():myCharts[t].getOption(),_=myChart?myChart.getModel():myCharts[t].getModel(),p=_.getComponent("title"),l=[],c=["markLine","markPoint","markArea","series","xAxis","yAxis","xAxis3D","yAxis3D","zAxis3D","angleAxis","radiusAxis","parallelAxis","axisPointer"];for(var u in h)c.indexOf(u)<0&&_.getComponent(u)&&("grid"===u&&_.getComponent("xAxis")&&_.getComponent("yAxis")||"grid"!==u)&&l.push({type:"component",value:u});var d={};_.eachComponent("series",function(t){var e=t.subType;d[e]||(d[e]=!0,l.push({type:"chart",value:e}))});var g={};if(_.eachComponent("series",function(t){["markPoint","markLine","markArea"].forEach(function(e){t.get(e,!0)&&!g[e]&&(l.push({type:"component",value:e}),g[e]=!0)})}),h.timeline&&h.timeline.length){var m=h.timeline[0];m.currentIndex=0,h.timeline=null;var w={timeline:m,options:[]};h.animation=!1;for(var f=0;f<m.data.length;f++)w.options.push(h);h=w}h.animation=!1,h.series&&h.series.forEach(function(t){"graph"===t.type&&"force"===t.layout&&(t.force=t.force||{},t.force.layoutAnimation=!1),t.progressive=0,t.progressiveThreshold=1/0}),s.setOption(h,!0),setTimeout(function(){r.drawImage(o,0,0,a.width,a.height),i({title:p&&p.get("text")||"",subtitle:p&&p.get("subtext")||"",tags:l,canvas:a})},100)}var _originWhiteList=["https://gallery.echartsjs.com","https://echarts.duapp.com","http://127.0.0.1:3000","https://127.0.0.1:3000"],myChart=null,myCharts=[];$(document).ready(function(){function t(t){var e=t.data,n=e.action;__actions__[n]&&__actions__[n](e)}if(window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent("onmessage",t),window.__currentLayout__&&window.__layoutCustomized__)var e=window.__layoutWidth__.length*window.__layoutHeight__.length;else var e=0;__actions__.create(e)});var app={},gui,_intervalIdList=[],_timeoutIdList=[],_oldSetTimeout=window.setTimeout,_oldSetInterval=window.setInterval,_windowTopOrigin="";window.setTimeout=function(t,e){var n=_oldSetTimeout(t,e);return _timeoutIdList.push(n),n},window.setInterval=function(t,e){var n=_oldSetInterval(t,e);return _intervalIdList.push(n),n};var syncBackTimeout=0,_events=[],__actions__={useOrigin:function(t){_originWhiteList.indexOf(t.origin)>=0&&(_windowTopOrigin=t.origin)},resize:function(){myChart&&myChart.resize();for(var t=0;t<myCharts.length;++t)myCharts[t].resize();_windowTopOrigin&&window.top.postMessage({action:"afterResize"},_windowTopOrigin)},create:function(t){if(t){myChart&&myChart.dispose(),myChart=null,$("#chart-panel").html("");for(var e=0;e<myCharts.length;++e)myCharts[e]&&myCharts[e].dispose();myCharts=[];var n=t;if(window.__currentLayout__&&window.__layoutCustomized__)n=window.__layoutWidth__.length*window.__layoutHeight__.length;else if(window.__layoutWidth__=[],window.__layoutHeight__=[],"1xN"===window.__currentLayout__){for(var e=0;e<n;++e)window.__layoutWidth__.push(100/n+"%");window.__layoutHeight__.push("100%")}else if("NxM"===window.__currentLayout__){for(var i=Math.ceil(Math.sqrt(n)),e=0;e<i;++e)window.__layoutWidth__.push(100/i+"%");for(var o=Math.ceil(n/i),e=0;e<o;++e)window.__layoutHeight__.push(100/o+"%")}else{window.__layoutWidth__.push("100%");for(var e=0;e<n;++e)window.__layoutHeight__.push(100/n+"%")}t<n&&console.warn("部分图表没有对应的布局项，因而未被显示。");for(var a=0,r=0;r<window.__layoutHeight__.length;++r)for(var s=0;s<window.__layoutWidth__.length&&!(a>=t);++s){var h=$('<div style="width: '+window.__layoutWidth__[s]+"; height: "+window.__layoutHeight__[r]+'; float: left; display: inline-block"></div>');$("#chart-panel").append(h);var _=echarts.init(h[0],window.__currentTheme__);_wrapEChartsSetOption(_),_wrapOnMethods(_),myCharts.push(_),++a}}else myChart&&myChart.dispose(),myChart=echarts.init($("#chart-panel")[0],window.__currentTheme__),myCharts=[myChart],_wrapEChartsSetOption(myChart),_wrapOnMethods(myChart)},run:function(data){_clearTimeTickers(),_clearChartEvents(),app.config=null;var __err__,option,options;try{eval(data.code),updateConfigGUI()}catch(e){option=myChart.getModel()?null:{series:[]},__err__=e.toString()}if(option)myChart.setOption(option,!0);else if(options){options.length!==myCharts.length&&__actions__.create(options.length);for(var i=0;i<myCharts.length;++i)options[i]&&myCharts[i].setOption(options[i])}_windowTopOrigin&&window.top.postMessage({action:"afterRun",error:__err__,chartCnt:myChart?1:myCharts.length},_windowTopOrigin)},prepareChartDetail:function(t){function e(e){_windowTopOrigin&&window.top.postMessage({onlyScreenshot:t.onlyScreenshot,action:"afterPrepared",echartsVersion:echarts.version,title:a,description:r,tags:s,thumbUrl:e},_windowTopOrigin)}function n(t,e){var _=c[t],l=(_.right-_.left)/g*i.width,u=(_.bottom-_.top)/m*i.height,d={left:h+(_.left-h)/g*i.width,top:p+(_.top-p)/m*i.height};renderPartialCanvas(t,l,u,function(i){o.drawImage(i.canvas,d.left,d.top),a=a||i.title,r=r||i.subtitle,s=s.concat(i.tags),t+1<myCharts.length?n(t+1,e):e()})}var i=document.createElement("canvas");i.width=400,i.height=300;for(var o=i.getContext("2d"),a="",r="",s=[],h=Number.MAX_VALUE,_=0,p=Number.MAX_VALUE,l=0,c=[],u=0;u<myCharts.length;++u){var d=myCharts[u].getDom().getBoundingClientRect();c.push(d),h=Math.min(h,d.left),_=Math.max(_,d.right),p=Math.min(p,d.top),l=Math.max(l,d.bottom)}var g=_-h,m=l-p;try{n(0,function(){e(i.toDataURL())})}catch(w){console.error(w),e("")}}}}]);