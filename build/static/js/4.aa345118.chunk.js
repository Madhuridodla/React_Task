(this["webpackJsonpreact-task"]=this["webpackJsonpreact-task"]||[]).push([[4],{55:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(a=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){r=!0,l=c}finally{try{a||null==u.return||u.return()}finally{if(r)throw l}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},61:function(e,t,n){"use strict";n.r(t);var a=n(55),r=n(26),l=n(0),o=n.n(l),u=n(25),c=n(14);t.default=Object(u.b)((function(e){return{login_details:e.reducer.loginData,employee_details:e.reducer.employeeDetails}}),{Logout:c.f})((function(e){var t=e.employee_details,n=e.login_details,u=e.Logout,c=Object(r.a)(e,["employee_details","login_details","Logout"]),i=Object(l.useState)([]),m=Object(a.a)(i,2),s=m[0],d=m[1];return Object(l.useEffect)((function(){t&&t.length&&d(t)}),[]),o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Login Details"),o.a.createElement("p",null,"Username: ",n&&n.username),o.a.createElement("p",null,"Password: ",n&&n.password),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Id"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Age"),o.a.createElement("th",null,"Gender"),o.a.createElement("th",null,"Email"))),o.a.createElement("tbody",null,s&&s.length&&s.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.age),o.a.createElement("td",null,e.gender),o.a.createElement("td",null,e.email))})))),o.a.createElement("div",{className:"col-2 pull-right m-2"},o.a.createElement("button",{className:"btn btn-lg btn-danger",type:"button",onClick:function(){u(),c.history.push("/")}},"Logout")))}))}}]);
//# sourceMappingURL=4.aa345118.chunk.js.map