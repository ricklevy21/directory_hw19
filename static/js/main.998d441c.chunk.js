(this.webpackJsonpdirectory_hw19=this.webpackJsonpdirectory_hw19||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=(a(22),a(16)),m=a(4);a(23);var s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-light bg-success"},l.a.createElement("span",{className:"navbar-brand mb-0 h1 col-12"},"Employee Directory")),l.a.createElement("br",null))};var u=function(e){var t=e.employeeSearch;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("form",{className:"col-12"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search By Name","aria-label":"Search",onChange:function(e){t(e.target.value)},name:"search",id:"search"}))),l.a.createElement("br",null))},i=function(e){var t=e.employee;return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{className:"img-fluid",alt:"".concat(t.name.first," ").concat(t.name.last),src:t.picture.thumbnail})," "),l.a.createElement("td",null,"".concat(t.name.first," ").concat(t.name.last)),l.a.createElement("td",null,t.phone),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.dob.date)))},h=function(e){var t=e.employees,a=e.employeeSort;return l.a.createElement("table",{className:"table table-striped table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",{onClick:function(){a()}},"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"DOB"))),t.map((function(e,t){return l.a.createElement(i,{key:t,employee:e})})))},E=function(e){var t=e.employees,a=e.employeeSort;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{employees:t,employeeSort:a}))},f=a(15),p=a.n(f);var d=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),h=i[0],f=i[1],d=Object(n.useState)([]),b=Object(m.a)(d,2),v=(b[0],b[1]);return Object(n.useEffect)((function(){p.a.get("https://randomuser.me/api/?results=50&nat=us").then((function(e){r(e.data.results),f(e.data.results),v(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement("div",{className:"container"},l.a.createElement(u,{employeeSearch:function(e){if(e){var t=e.toLowerCase(),n=a.filter((function(e){return e.name.first.toLowerCase().startsWith(t)||e.name.last.toLowerCase().startsWith(t)}));f(n)}else console.log("reseting state"),f(a)}}),l.a.createElement(E,{employees:h,employeeSort:function(){console.log("inisde of employee sort");var e=Object(o.a)(a).sort((function(e,t){return e.name.last>t.name.last?1:-1}));f(e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.998d441c.chunk.js.map