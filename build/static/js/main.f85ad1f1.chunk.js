(this.webpackJsonphooks_react_js=this.webpackJsonphooks_react_js||[]).push([[0],{10:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(10),a(2)),s=a(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(11),a(12);c.a.render(r.a.createElement((function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("json/enterprise.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),a}();return r.a.createElement("div",{className:"container mt-5",align:"center"},r.a.createElement("h4",null,"List of Employees"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Nombre"))),r.a.createElement("tbody",null,c.map((function(e){return r.a.createElement("tr",{key:e.ID_EMPRESA},r.a.createElement("td",null,e.ID_EMPRESA),r.a.createElement("td",null,e.NOMBRE_EMPRESA),r.a.createElement("td",null,e.AREAS.NOMBRE_AREAS))}))))),r.a.createElement("input",{type:"file",accept:".xlsx, .xls",onChange:function(e){var t=new FileReader;t.readAsBinaryString(e.target.files[0]),t.onload=function(e){var t=e.target.result,a=s.a(t,{type:"binary"}),n=a.SheetNames[0],r=a.Sheets[n],c=s.b.sheet_to_json(r);l(c)}}}),a.length>0&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(a[0]).map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t},Object.values(e).map((function(e,t){return r.a.createElement("td",{key:t},e)})))})))),r.a.createElement("br",null),r.a.createElement("br",null),"... Employees ..."),r.a.createElement("section",{className:"mt-5 mb-5"},r.a.createElement("div",{align:"center"},"Desarrollado por ",r.a.createElement("a",{href:"https://www.linkedin.com/in/pablo-farias-gallardo-3355a8b8/",target:"_blank"},"Pablo Farias Gallardo"))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports=a(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.f85ad1f1.chunk.js.map