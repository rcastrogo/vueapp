(function(t){function e(e){for(var n,a,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vueapp/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"3da9":function(t,e,r){"use strict";var n=r("535c"),o=r.n(n);o.a},"535c":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("menu-component"),r("router-view")],1)},i=[],a=r("9ab4"),s=r("60a3"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-bar w3-black"},[r("router-link",{staticClass:"w3-bar-item w3-button",attrs:{to:"/"}},[t._v("Inicio")]),r("router-link",{staticClass:"w3-bar-item w3-button",attrs:{to:"/counter"}},[t._v("Contador")]),r("div",{staticClass:"w3-dropdown-hover"},[r("button",{staticClass:"w3-button w3-black"},[t._v("Datos")]),r("div",{staticClass:"w3-dropdown-content w3-bar-block w3-card-4"},t._l(t.menuItems,(function(e){return r("router-link",{key:e.name,staticClass:"w3-bar-item w3-button w3-black",attrs:{to:e.route}},[t._v(" "+t._s(e.name)+" ")])})),1)]),r("router-link",{staticClass:"w3-bar-item w3-button",attrs:{to:"/tabbly-reports"}},[t._v("Informes")]),r("router-link",{staticClass:"w3-bar-item w3-button w3-black w3-right",attrs:{to:"/about"}},[t._v("?")])],1)},c=[],l=function(t){function e(){var e=t.call(this)||this;return e.menuItems=[{route:"/usuarios",name:"Usuarios"},{route:"/proveedores",name:"proveedores"},{route:"/vehiculos",name:"Vehículos"}],e}return Object(a["b"])(e,t),e=Object(a["a"])([s["a"]],e),e}(s["b"]),p=l,f=p,d=(r("3da9"),r("2877")),h=Object(d["a"])(f,u,c,!1,null,"5400db4c",null),m=h.exports,v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["b"])(e,t),e=Object(a["a"])([Object(s["a"])({components:{MenuComponent:m}})],e),e}(s["b"]),y=v,b=y,_=Object(d["a"])(b,o,i,!1,null,null,null),w=_.exports,g=r("8c4f"),S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container w3-margin-bottom w3-center"},[r("h1",[t._v("Página principal")]),r("p",[t._v("Bienvenido a la página principal de Vue App!!!")]),r("p",{staticClass:"w3-container w3-center"},[r("img",{staticStyle:{width:"50%"},attrs:{src:"https://vuejs.org/images/logo.png",alt:"Car"}}),r("br"),r("b",[t._v("Vue JS")])])])}],C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["b"])(e,t),e=Object(a["a"])([s["a"]],e),e}(s["b"]),T=C,O=T,k=Object(d["a"])(O,S,x,!1,null,null,null),E=k.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container w3-margin-bottom w3-center"},[r("h1",[t._v("Contador")]),r("div",{staticClass:"w3-card-4 w3-center",staticStyle:{width:"45%",margin:"0 auto"}},[r("img",{staticStyle:{width:"100%"},attrs:{src:"https://www.w3schools.com/w3css/img_snowtops.jpg",alt:"Alps"}}),r("h1",[t._v(t._s(t.currentCount))]),r("button",{staticClass:"w3-button w3-block w3-dark-grey",on:{click:function(e){return t.incrementCounter()}}},[t._v("Incrementar")]),r("p",{staticClass:"w3-margin-bottom"})])])},B=[],A=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.currentCount=0,e}return Object(a["b"])(e,t),e.prototype.incrementCounter=function(){this.currentCount+=1},e=Object(a["a"])([s["a"]],e),e}(s["b"]),D=A,R=D,$=Object(d["a"])(R,j,B,!1,null,null,null),H=$.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container w3-margin-bottom"},[r("h1",[t._v("Sobre Vue App")]),r("p",[t._v("Aplicación desarrollada por Rafael Castro Gómez como proyecto de pruebas.")])])}],L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["b"])(e,t),e=Object(a["a"])([s["a"]],e),e}(s["b"]),P=L,I=P,F=Object(d["a"])(I,M,N,!1,null,null,null),G=F.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"w3-container w3-margin-bottom",attrs:{id:"botonera"}},[r("h1",{staticClass:"w3-center"},[t._v("Tabbly Report sample")]),r("p",{staticClass:"w3-center"},[t._v("Informes de prueba usando Tabbly.js")]),r("button",{staticClass:"w3-button w3-white w3-border",on:{click:function(e){return t.listVehiculos()}}},[t._v("Vehículos")]),r("button",{staticClass:"w3-button w3-white w3-border",on:{click:function(e){return t.listUsuarios()}}},[t._v("Usuarios")]),r("button",{staticClass:"w3-button w3-white w3-border",on:{click:function(e){return t.listProveedores()}}},[t._v("Proveedores")]),r("button",{staticClass:"w3-button w3-white w3-border",on:{click:function(e){return t.runWebWorker()}}},[t._v("Web worker")])]),r("div",{staticClass:"w3-container w3-margin-bottom"},[r("div",{staticClass:"w3-bar w3-black"},[r("button",{staticClass:"w3-bar-item w3-button tablink w3-dark-grey",on:{click:function(e){return t.openTab(e,"tab-report")}}},[t._v("Report")]),r("button",{staticClass:"w3-bar-item w3-button tablink",on:{click:function(e){return t.openTab(e,"tab-report-txt")}}},[t._v("Txt")]),r("button",{staticClass:"w3-bar-item w3-button tablink",on:{click:function(e){return t.openTab(e,"tab-report-data")}}},[t._v("Data")]),r("button",{staticClass:"w3-bar-item w3-button tablink",on:{click:function(e){return t.openTab(e,"tab-report-log")}}},[t._v("Log")])]),t._m(0),r("div",{staticClass:"w3-container w3-border tab",staticStyle:{display:"none"},attrs:{id:"tab-report-txt"}},[r("p"),r("div",{staticClass:"w3-container w3-round w3-border",staticStyle:{"max-height":"30em",overflow:"auto"}},[r("pre",{staticClass:"w3-black w3-round w3-padding"},[t._v(t._s(t.reportFile))])])]),r("div",{staticClass:"w3-container w3-border tab",staticStyle:{display:"none"},attrs:{id:"tab-report-data"}},[r("p"),r("div",{staticClass:"w3-container w3-round w3-border",staticStyle:{"max-height":"30em",overflow:"scroll"}},[r("pre",{staticClass:"w3-black w3-round w3-padding",staticStyle:{overflow:"visible"}},[t._v(t._s(t.reportData))])])]),t._m(1)])])},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container w3-border tab",attrs:{id:"tab-report"}},[r("p"),r("div",{staticStyle:{display:"none"},attrs:{id:"progress-bar-container"}},[r("div",{staticClass:"w3-center",attrs:{id:"progress-bar-message"}}),r("div",{staticClass:"w3-light-grey w3-round"},[r("div",{staticClass:"w3-container w3-green w3-center w3-round",staticStyle:{width:"0"},attrs:{id:"progress-bar"}})])]),r("div",{staticClass:"w3-container w3-margin-bottom",attrs:{id:"table-container"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container w3-border tab",attrs:{id:"tab-report-log"}},[r("p"),r("div",{staticClass:"w3-container w3-margin-bottom"},[r("div",{attrs:{id:"rowsContainer"}})])])}],q=(r("b680"),r("ac1f"),r("5319"),r("4de4"),r("4160"),r("c975"),r("a15b"),r("d81d"),r("13d5"),r("fb6a"),r("a434"),r("b64b"),r("4d63"),r("25f0"),r("1276"),r("498a"),r("159b"),r("53ca")),U=function(){function t(){}return t.prototype.isNull=function(t){return null===t},t.prototype.toArray=function(t){return Array.prototype.slice.call(t)},t.prototype.isArray=function(t){return Array.isArray(t)},t.prototype.isString=function(t){return"string"==typeof t},t.prototype.isBoolean=function(t){return"boolean"==typeof t},t.prototype.isNumber=function(t){return"number"==typeof t},t.prototype.isFunction=function(t){return"function"==typeof t},t.prototype.isObject=function(t){return t&&"object"==Object(q["a"])(t)},t.prototype.apply=function(t,e,r){if(r&&this.apply(t,r),t&&this.isObject(e))for(var n in e)this.isObject(e[n])?this.apply(t[n]=t[n]||{},e[n]):t[n]=e[n];return t},t.prototype.clone=function(t){var e=this;return this.isArray(t)?t.slice(0):this.isObject(t)&&t.clone?t.clone():this.isObject(t)?Object.keys(t).reduce((function(r,n){return r[n]=e.clone(t[n]),r}),{}):t},t.prototype.join=function(t,e,r){return t.reduce((function(t,r){return t.append(r[e||"id"])}),[]).join(void 0===r?"-":r||"")},t.prototype.createStringBuilder=function(t){return{value:t||"",append:function(t){return this.value=this.value+t,this},appendLine:function(t){return this.value=this.value+(t||"")+"\n",this}}},t.prototype.getValue=function(t,e){return"this"==t?e:t.split(/\.|\[|\]/).reduce((function(e,r){return""===r?e:e[r]||window[r]||"{{0}}".format(t)}),e||window)},t.prototype.$=function(t,e){return this.isString(t)?document.getElementById(t)||this.toArray((e||document).querySelectorAll(t)||[]):t},t.prototype.$$=function(t,e){return this.apply(document.createElement(t),e)},t.prototype.fillTemplate=function(t,e){var r=this,n=function(t){return t.map((function(t){return t.trim()}))},o=this.$(t),i=this.$("[xbind]",o);return o.attributes.xbind&&i.push(o),i.forEach((function(t){n(t.attributes.xbind.value.split(";")).forEach((function(o){if(""!==o){var i=n(o.split(":")),a=n(i[1].split(/\s|\,/)),s=r.getValue(a[0],e);if(r.isFunction(s)){var u=a.slice(1).reduce((function(t,n){return t.push("@"==n.charAt(0)?r.getValue(n.slice(1),e):n),t}),[e,t]);s=s.apply(e,u)}else if(a[1]){var c=r.getValue(a[1],e);s=c(s,a[2],e,t)}t[i[0]]=s}}))})),o},t.prototype.executeTemplate=function(t,e,r){var n=this,o=this.$(t),i=e.reduce((function(t,e,r){var i={index:r,data:e,node:n.fillTemplate(o.cloneNode(!0),e)};return t.nodes.push(i),t.html.push(i.node.outerHTML.replace(/xbind="[^"]*"/g,"")),t}),{nodes:[],html:[]});return r?i.nodes:i.html.join("")},t}(),J=new U;String.prototype.format=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1]||self;return this.replace(/\{(\d+|[^{]+)\}/g,(function(e,n){if(n.indexOf(":")>0){var o=n.split(":");return o[0]=J.getValue(o[0].trim(),r),o[1]=J.getValue(o[1].trim(),r),o[0](o[1],r)}return/^\d+$/.test(n)?t[n]:"undefined"===typeof r[n]?J.getValue(n,r):r[n]}))},String.prototype.replaceAll=function(t,e){return this.split(t).join(e)},String.prototype.fixDate=function(){return this.split(" ")[0]},String.prototype.fixTime=function(){return this.split(" ")[1]},String.prototype.fixYear=function(){return this.fixDate().split("/")[2]},String.prototype.paddingLeft=function(t){return(t+this).slice(-t.length)},String.prototype.merge=function(t){var e=this.replace(/{([^{]+)?}/g,(function(e,r){if(r.indexOf(":")>0){var n=r.split(":"),o=J.getValue(n[0],t),i=J.getValue(n[1],t);return o(i,t)}var a=J.getValue(r,t);return"function"==typeof a?a(t):a}));return e},String.prototype.toXmlDocument=function(){return(new DOMParser).parseFromString(this,"text/xml")},Array.prototype.remove=function(t){var e=this.indexOf(t);return-1!=e&&this.splice(e,1),this},Array.prototype.add=function(t){return this.push(t),t},Array.prototype.append=function(t){return this.push(t),this},Array.prototype.select=function(t){return J.isString(t)?this.map((function(e){return e[t]})):this.map(t)},Array.prototype.item=function(t,e,r){return this.filter((function(r){return r[t]==e}))[0]||r},Array.prototype.contains=function(t,e){return this.item(t,e)},Array.prototype.lastItem=function(){return this[this.length-1]},Array.prototype.where=function(t){return J.isFunction(t)?this.filter(t):J.isObject(t)?this.filter(new Function("a",Object.keys(t).reduce((function(e,r,n){return e+(n>0?" && ":"")+function(){var e=t[r];return e instanceof RegExp?"{1}.test(a.{0})".format(r,e):J.isString(e)?"a.{0} === '{1}'".format(r,e):"a.{0} === {1}".format(r,e)}()}),"return "))):this},Array.prototype.sortBy=function(t,e){var r=[],n=t.split(",").map((function(t,e){var n=t.split(" ");return r[e]=n[1]&&"DESC"==n[1].toUpperCase()?-1:1,n[0]}));return r[0]=e?-1:1,this.sort((function(t,e){var o=0,i=function t(e,i){var a=e[n[o]],s=i[n[o]];return a<s?-1*r[o]:a>s?1*r[o]:(o++,o<n.length?t(e,i):0)};return i(t,e)})),this},Array.prototype.orderBy=function(t){var e=J.isString(t)?function(e){return e[t]}:t;return this.map((function(t){return t})).sort((function(t,r){var n=e(t),o=e(r);return n<o?-1:n>o?1:0}))},Array.prototype.distinct=function(t){void 0===t&&(t="");var e=J.isString(t)?function(e){return t?e[t]:e}:t,r=[];return this.forEach((function(t){var n=e(t);-1==r.indexOf(n)&&r.push(n)})),r},Array.prototype.groupBy=function(t){return this.reduce((function(e,r){var n=r[t];return(e[n]=e[n]||[]).push(r),e}),{})},Array.prototype.toGroupWrapper=function(t){var e=this,r=function r(n,o,i){return t[i]={},e.distinct((function(t){return t[n]})).forEach((function(r){t[i][r]=e.reduce((function(t,e,i,a){return e[n]==r?t+e[o]:t}),0)})),r};return r},Array.prototype.sum=function(t){return this.reduce((function(e,r){return e+r[t]}),0)},Array.prototype.toDictionary=function(t,e){return this.reduce((function(r,n){return r[n[t]]=e?n[e]:n,r}),{})};(function(){function t(){}t.paginate=function(t,e,r,n){void 0===e&&(e=1),void 0===r&&(r=10);var o=Math.ceil(t.length/r);e<1?e=1:e>o&&(e=o);var i=(e-1)*r,a=Math.min(i+r-1,t.length-1);return{totalItems:t.length,currentPage:e,pageSize:r,totalPages:o,startIndex:i,endIndex:a,allItems:t,visibleItems:t.slice(i,a+1),title:n,getChecked:function(){return t.where({__checked:!0}).map((function(e,r){return{index:t.indexOf(e),item:e}}))}}}})(),function(){function t(){}t.prototype.getDialogWrapper=function(t){var e=document.getElementById(t),r={container:e,title:e.querySelector(".js-title"),body:e.querySelector(".js-content"),closeButton:e.querySelector(".js-close-button"),acceptButton:e.querySelector(".js-accept-button"),close:function(){e.style.display="none"},show:function(t){t&&(r.acceptButton.onclick=function(){t(r)}),e.style.display="block"},setTitle:function(t){return r.title.innerHTML=t,r},setBody:function(t){return t.tagName?(r.body.innerHTML="",r.body.appendChild(t)):r.body.innerHTML=t,r},disableClickOutside:function(){return r.container.onclick=function(){},r}};return r.acceptButton.onclick=r.close,r.closeButton.onclick=r.close,r.container.onclick=function(t){t.target===r.container&&r.close()},r}}(),r("a623"),r("45fc"),r("b0c0"),r("d3b7"),r("466d"),r("2ca0");var z=function(){function t(){this.__context={headers:[],groups:[],details:[]},this.__cur=[{columns:[]}],this.__func="",this.__funcBody="",this.BS={},this.module_ReportEngine_processAll=function(t){var e=this,r=this,n=document.createDocumentFragment();if(n.appendChild(J.$$("div",{innerHTML:t.ReportTemplate})),t.DetailTemplate=r.__cloneRowTemplate(n.querySelector(t.DetailTemplateSelector)),t.HideTotal){var o=n.querySelector(t.TotalTemplateSelector);o.parentNode.removeChild(o)}else t.TotalTemplate=r.__cloneRowTemplate(n.querySelector(t.TotalTemplateSelector));t.GroupsTemplates=[],t.GroupsTemplates=t.Grupos.map((function(t){return r.__cloneRowTemplate(n.querySelector(t.selector))}));var i=-1;function a(){t.Grupos.forEach((function(e,n){if(!(n<i)){var o=t.Grupos[n];if(o.header){var a=J.getValue(o.header,r)(o.current,o.name);"hidden;"!=a&&(a.text?s.append("<tr {0}>{1}</tr>".format(a.attributes,a.text)):a.row?r.BS.reportDefinition.dom_tbody.appendChild(a.row):s.append('<tr class="group-header">{0}</tr>'.format(a))),t.RepeatHeadersAfter==n&&t.RepeatHeaders.forEach((function(e){""!=e&&s.append(t.Headers[e].html)}))}}}))}var s=J.createStringBuilder("");if(t.OnStart(t.DataSet),t.DataSet.forEach((function(r,n){0==n&&a(),t.OnRow(r),t.Grupos.every((function(t){return t.test(r)}))?t.Grupos.forEach((function(t){t.sum(r)})):(t.Grupos.some((function(n,o){if(!n.test(r)){i=o;var a=t.GroupsTemplates.map((function(t){return t}));a.splice(0,o),a.reverse();var u=t.Grupos.map((function(t){return t}));return u.splice(0,o),u.reverse(),e.__mergeTemplate(a,s,u,t.OnGroupFooter),t.Grupos.forEach((function(t,e){e>=o?(t.init(r),i=o):t.sum(r)})),!0}return!1})),t.OnRowEnd(r),a()),t.HideDetail||e.__mergeTemplate(t.DetailTemplate,s,{name:"detail"},t.g)})),t.DataSet.length>0){r.BS.previous=r.BS.data;var u=t.GroupsTemplates.map((function(t){return t}));u.reverse(),t.HideTotal||u.push(t.TotalTemplate);var c=t.Grupos.map((function(t){return t}));c.reverse(),c.push({name:"summary"}),r.__mergeTemplate(u,s,c,t.OnGroupFooter)}return n.querySelector(t.ReportTableSelector).innerHTML.replace("<tbody>","<tbody>"+s.value)},this.fromReportDefinition=function(t,e,r){var n=this,o=this;this.BS={reportDefinition:t},t.context.Iteratefn&&e.forEach(t.context.Iteratefn),t.context.orderBy&&e.sortBy(t.context.orderBy,!1);var i=JSON.parse(t.context.summary||"{}");function a(){return t.context.groups.where((function(e,r){return r<t.context.groups.length-1})).map((function(t,e){return{name:"G"+(e+1),selector:"#"+t.id,key:t.key,tag:t.tag||"",current:"",header:t.header,data:J.clone(i),init:function(t){var e=t[this.key].toString(),r=o.BS[this.name];r.all[e]=r.all[e]||[],r.all[e].push(t),r.recordCount=1,o.module_ReportEngine_Copy(t,this.data)},sum:function(t){var e=t[this.key].toString(),r=o.BS[this.name];r.all[e]=r.all[e]||[],r.all[e].push(t),r.recordCount+=1,o.module_ReportEngine_Sum(t,this.data)},test:function(t){return t[this.key]==this.current}}}))||[]}var s={DataSet:e,HideDetail:"true"==t.context.hideDetail||!1,HideTotal:0==t.context.groups.length||"true"==t.context.HideTotal||!1,ReportTemplate:t.html,ReportTableSelector:"#"+t.context.tableId,DetailTemplateSelector:"#"+t.context.details[0].id,TotalTemplateSelector:0==t.context.groups.length?"":"#"+t.context.groups.lastItem().id,Grupos:a(),OnGroupFooter:t.context.OnGroupFooter,Headers:t.context.headers,RepeatHeaders:(t.context.repeatHeader||"").split(","),RepeatHeadersAfter:t.context.repeatHeaderAfter,OnRow:function(e){o.BS.recordCount+=1,o.BS.previous=o.BS.data||e,o.BS.data=e,s.Grupos.forEach((function(t,e){o.BS[t.name].data=Object.create(t.data)})),o.module_ReportEngine_Sum(e,o.BS.G0),t.context.onRowfn&&new Function("ctx",t.context.onRowfn)(n.BS)},OnStart:function(e){o.BS={recordCount:0,G0:J.clone(i),dataSet:e,reportDefinition:o.BS.reportDefinition},s.Grupos.forEach((function(t,r){t.current=e&&e[0]?e[0][t.key]:"",o.BS[t.name]={recordCount:0,all:{}}})),t.context.onStartfn&&t.context.onStartfn(o.BS)},OnRowEnd:function(e){s.Grupos.forEach((function(t){t.current=e[t.key]})),t.context.onRowEndfn&&new Function("ctx",t.context.onRowEndfn)(o.BS)},PrintReport:function(t){return t&&t(n.module_ReportEngine_processAll(s)),n}};return s.PrintReport(r)},this.module_ReportEngine_Copy=function(t,e){for(var r in e)if(e.hasOwnProperty(r)){if(t.hasOwnProperty(r)){e[r]=t[r];continue}if("_max_"===r||"_mim_"===r){var n=e[r];for(var o in n)n.hasOwnProperty(o)&&t.hasOwnProperty(o)&&(n[o]=t[o])}if("_values_"===r){var i=e[r];for(var o in i)i.hasOwnProperty(o)&&t.hasOwnProperty(o)&&(i[o]=[t[o]])}}},this.module_ReportEngine_Sum=function(t,e){for(var r in e)if(e.hasOwnProperty(r)){if(t.hasOwnProperty(r)){e[r]+=t[r];continue}if("_max_"===r||"_min_"===r){var n=e[r];for(var o in n)n.hasOwnProperty(o)&&t.hasOwnProperty(o)&&(n[o]="_max_"==r?t[o]>n[o]?t[o]:n[o]:t[o]<n[o]?t[o]:n[o])}if("_values_"===r){var i=e[r];for(var o in i)i.hasOwnProperty(o)&&t.hasOwnProperty(o)&&i[o].add(t[o])}}}}return t.prototype.parse=function(t){var e=this;return this.__context={headers:[],groups:[],details:[]},t.split("\n").forEach((function(t){e.__parseLine(t.trim(),t)(e.__context)})),{context:this.__context,html:this.render(this.__context)}},t.prototype.__parseLine=function(t,e){var r=this;if(!r.__func&&!t.trim())return function(){};var n=/^(DEFINE|#|ADD_COL|CREATE|FUNCTION|END)/;if(n.test(t)){if(/^#/.test(t))return function(){};if(/^FUNCTION (\w.*)/.test(t)){var o=t.match(/^FUNCTION (\w.*)$/);return r.__func=o[1].trim(),r.__funcBody="",function(){}}if(/^END/.test(t)){var i=r.__funcBody,a=r.__func;return r.__func=r.__funcBody="",function(){return function(t){t[a]=new Function("ctx",i)}}()}if(/^ADD_COL /.test(t)){o=t.match(/ADD_COL (.*)$/);return function(){var t=o;return function(e){r.__cur[r.__cur.length-1].columns.push(r.__parse_cell(t[1]))}}()}if(/^DEFINE\s\s*(\w.*)\s*=\s*(.*)$/.test(t)){o=t.match(/^DEFINE\s\s*([a-zA-Z0-9_\-]*)\s*=\s*(.*)$/);return function(){var t=o;return function(e){e[t[1].trim()]=t[2].trim()}}()}if(/^CREATE\s\s*(\w*) (.*)$/.test(t)){o=t.match(/^CREATE\s\s*(\w*) (.*)$/);return"header"==o[1]?function(){var t=o;return function(e){e.headers.push(r.__parse_row(t[2])),r.__cur=e.headers}}():"group"==o[1]?function(){var t=o;return function(e){e.groups.push(r.__parse_row(t[2])),r.__cur=e.groups}}():"detail"==o[1]?function(){var t=o;return function(e){e.details.push(r.__parse_row(t[2])),r.__cur=e.details}}():function(){var t=o;return function(e){e[t[1]]=t[2]}}()}throw new Error("Tabbly : Unrecognized text after DEFINE")}if(r.__func)return r.__funcBody+=e,r.__funcBody+="\n",function(){};throw new Error("Tabbly : Unrecognized text")},t.prototype.__parse_properties=function(t){var e=/(id|colspan|rowspan|className|html|xbind|style|key|header|tag):('[^']*'|[^\s]*)/g,r={},n=e.exec(t);while(null!=n)r[n[1]]=this.getValue(n[2].replace(/^'([^']*)'$/g,"$1")),n=e.exec(t);return r},t.prototype.__parse_cell=function(t){return this.__parse_properties(t)},t.prototype.__parse_row=function(t){var e=this.__parse_properties(t);return e.columns=[],e},t.prototype.getValue=function(t){return t&&t.trim().startsWith("@")?this.__context[t.trim().split("@")[1].trim()]||"":t?t.trim():""},t.prototype.getAttributes=function(t){var e=this,r=[];return Object.keys(t).filter((function(e){return"columns"!=e&&"html"!=e&&t.hasOwnProperty(e)})).forEach((function(n){var o="className"==n?"class":n;r.push('{0}="{1}"'.format(o,e.getValue(t[n])))})),r.length>0?" "+r.join(" "):""},t.prototype.render=function(t){var e=this;function r(t,r,n){var o="",i=n?"th":"td";return(t||[]).forEach((function(t,n){var a="";a+="\n      <tr{0}>".format(e.getAttributes(t)),t.columns.forEach((function(t,r){a+="\n        <{2}{0}>{1}</{2}>".format(e.getAttributes(t),e.getValue(t.html),i)})),a+="\n      </tr>",t.html=a,r&&r.indexOf(n.toString())>-1||(o+=a)})),o}return'<div id="{3}">\n  <table class= "w3-table-all" style = "width:100%;" id="table-{3}" >\n     <thead>{0}    </thead>\n    <tbody>{1}{2}    </tbody>\n  </table>\n</div>'.format(r(t.headers,(t.hiddenHeaders||"").split(","),!0),r(t.details),r(t.groups),t.tableId||"")},t.prototype.__cloneRowTemplate=function(t){var e=t.cloneNode(!0);return t.parentNode.parentNode.deleteRow(t.rowIndex),e},t.prototype.__mergeTemplate=function(t,e,r,n){var o=this;if(t.forEach)return t.forEach((function(t,i){o.__mergeTemplate(t,e,r[i],n)}));J.fillTemplate(t,this),r.tag||"nofooter"==r.tag||(e.append(t.outerHTML.replace(/xbind="[^"]*"/g,"")),n&&n({sb:e,section:r}))},t}(),X=r("bc3a"),Y=r.n(X),Z=function(){function t(){this._url="{0}/api/v1/usuarios"}return t.prototype.getAll=function(){return Y.a.get("assets/json/usuarios.json")},t}(),K=function(){function t(){this._url="{0}/api/v1/proveedores"}return t.prototype.getAll=function(){return Y.a.get("assets/json/proveedores.json")},t}(),Q=function(){function t(){this._url="{0}/api/v1/vehiculos"}return t.prototype.getAll=function(){return Y.a.get("assets/json/vehiculos.json")},t}(),tt=function(){function t(t){this._url="",this._url=t}return t.prototype.getResource=function(t){return Y.a.get(this._url+t)},t}(),et=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.reportFile="",e.reportData="",e}return Object(a["b"])(e,t),e.prototype.mounted=function(){this._txtService=new tt("assets/"),this._userApiService=new Z,this._proveedorApiService=new K,this._vehiculoApiService=new Q,this._rptService=new z,this.initWorker()},e.prototype.listUsuarios=function(){var t=this,e=J.$("table-container"),r=J.$("rowsContainer");this._txtService.getResource("tabbly-reports/usu-0001.txt").then((function(e){return t.reportFile=e.data,{rd:t._rptService.parse(e.data),data:t._userApiService.getAll()}})).then((function(n){var o=n.rd,i=n.data;i.then((function(n){var i=n.data;t.reportData=JSON.stringify(i,void 0,2),t._rptService.fromReportDefinition(o,i,(function(t){e.innerHTML=t,r.innerHTML=""}))}))})).catch((function(t){console.log(t)}))},e.prototype.listProveedores=function(){var t=this,e=J.$("table-container"),r=J.$("rowsContainer");this._txtService.getResource("tabbly-reports/pro-0001.txt").then((function(e){return t.reportFile=e.data,{rd:t._rptService.parse(e.data),data:t._proveedorApiService.getAll()}})).then((function(n){var o=n.rd,i=n.data;i.then((function(n){var i=n.data;t.reportData=JSON.stringify(i,void 0,2),t._rptService.fromReportDefinition(o,i,(function(t){e.innerHTML=t,r.innerHTML=""}))}))})).catch((function(t){console.log(t)}))},e.prototype.listVehiculos=function(){var t=this,e=J.$("table-container"),r=J.$("rowsContainer");this._txtService.getResource("tabbly-reports/veh-0001.txt").then((function(e){return t.reportFile=e.data,{rd:t._rptService.parse(e.data),data:t._vehiculoApiService.getAll()}})).then((function(n){var o=n.rd,i=n.data;i.then((function(n){var i=n.data;t.reportData=JSON.stringify(i,void 0,2),t._rptService.fromReportDefinition(o,i,(function(t){e.innerHTML=t,r.innerHTML=""}))}))})).catch((function(t){console.log(t)}))},e.prototype.initWorker=function(){var t=this,e="./assets/web-worker-reports.worker.js?t{0}".format((new Date).getTime()),r=new nt;this._worker=new Worker(e),this._worker.onmessage=function(e){var n=e.data,o=JSON.parse(n);o.type&&"report.data.ready"===o.type?t.reportData=JSON.stringify(o,void 0,2):r.handle(o)}},e.prototype.runWebWorker=function(){if(this._worker){var t=J.$("table-container"),e=J.$("rowsContainer"),r={action:"load-report",report:{source:"./web-worker-reports/pro-0001.js",data:"./json/proveedores.json",method:"get"}};this._worker.postMessage(r),t.innerHTML="",e.innerHTML="",this.reportData="",this.reportFile=""}},e.prototype.openTab=function(t,e){var r,n,o;for(n=document.getElementsByClassName("tab"),r=0;r<n.length;r++)n[r].style.display="none";for(o=document.getElementsByClassName("tablink"),r=0;r<n.length;r++)o[r].className=o[r].className.replace(" w3-dark-grey","");document.getElementById(e).style.display="block",t.currentTarget.className+=" w3-dark-grey"},e=Object(a["a"])([s["a"]],e),e}(s["b"]),rt=et,nt=function(){function t(){this._container=J.$("table-container"),this._progressBarContainer=J.$("progress-bar-container"),this._progressBarMessage=J.$("progress-bar-message"),this._progressBar=J.$("progress-bar"),this._container.innerHTML=""}return t.prototype.build=function(t,e){var r=document.createElement(t);return e&&(r.innerHTML=e),r},t.prototype.handle=function(t){var e=this;if("report.content"!==t.type)if("report.log.message"!==t.type){if("report.begin"===t.type)return this._container.innerHTML="",this._progressBarContainer.style.display="block",this._progressBarMessage.innerHTML="",void(this._progressBar.style.width="0%");"report.render.rows"===t.type&&(this._progressBar.style.width="0%"),"report.render.row"===t.type&&(this._progressBar.style.width="{0}%".format(t.value.toFixed(1)),this._progressBar.innerHTML=t.text||""),"report.end"!==t.type||setTimeout((function(){e._progressBar.style.width="100%",e._progressBarMessage.innerHTML="",e._progressBarContainer.style.display="none"}),250)}else this._progressBarMessage.innerHTML=t.text||"";else this._container.appendChild(this.build("div",t.content).firstChild)},t}(),ot=rt,it=Object(d["a"])(ot,V,W,!1,null,null,null),at=it.exports;n["a"].use(g["a"]),n["a"].config.productionTip=!1;var st=[{path:"/",component:E},{path:"/counter",component:H},{path:"/about",component:G},{path:"/tabbly-reports",component:at}],ut=new g["a"]({mode:"history",routes:st}),ct=ut;new n["a"]({router:ct,render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=app.27b5afad.js.map