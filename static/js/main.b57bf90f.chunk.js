(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(5),i=c(2),d=c(3),r=c.n(d),o=c(1),j=(c(13),c(14),c(4)),u=c.n(j),b=c(0),h=function(e){var t=e.searchedTodos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":e.id===c}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed?Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})}):Object(b.jsx)(b.Fragment,{})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye":c!==e.id,"fa-eye-slash":c===e.id})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(s||(s={}));var m=function(e){var t=e.setFilteredSelect,c=e.query,a=e.setQuery;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case s.Completed:t(s.Completed);break;case s.Active:t(s.Active);break;default:t(s.All)}},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){a(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a("")}})})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){return O("/users/".concat(e))},f=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),v=function(e){var t=e.todo,c=e.selectedTodo,s=Object(o.useState)(),a=Object(i.a)(s,2),n=a[0],d=a[1],j=Object(o.useState)(!1),h=Object(i.a)(j,2),m=h[0],O=h[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:(c=e.sent)&&(d(c),O(!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t&&e(t.userId)}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),m?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:u()({"has-text-success":null===t||void 0===t?void 0:t.completed,"has-text-danger":!(null!==t&&void 0!==t&&t.completed)}),children:null!==t&&void 0!==t&&t.completed?"Done":"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(b.jsx)(f,{})]})},p=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(s.All),d=Object(i.a)(n,2),j=d[0],u=d[1],x=Object(o.useState)(""),p=Object(i.a)(x,2),N=p[0],y=p[1],g=Object(o.useState)(0),k=Object(i.a)(g,2),w=k[0],S=k[1],C=Object(o.useState)(!1),T=Object(i.a)(C,2),A=T[0],_=T[1];Object(o.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/todos");case 2:t=e.sent,a(t),_(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var E,F=c.filter((function(e){switch(j){case s.Active:return!e.completed;case s.Completed:return e.completed;case s.All:default:return e}})).filter((function(e){var t=e.title.toLowerCase(),c=N.toLowerCase();return t.includes(c)}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{setFilteredSelect:u,query:N,setQuery:y})}),Object(b.jsxs)("div",{className:"block",children:[!A&&Object(b.jsx)(f,{}),c.length>0&&Object(b.jsx)(h,{searchedTodos:F,selectedTodo:w,setSelectedTodo:S})]})]})})}),0!==w&&Object(b.jsx)(v,{todo:(E=w,c.find((function(e){return e.id===E}))||null),selectedTodo:S})]})};n.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b57bf90f.chunk.js.map