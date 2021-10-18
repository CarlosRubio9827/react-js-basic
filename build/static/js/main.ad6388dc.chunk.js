(this["webpackJsonpmi-proyecto-react"]=this["webpackJsonpmi-proyecto-react"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),l=(a(12),a(5)),u=a(1);var m=o.a.createContext();function s(e){var t=function(e,t){var a=o.a.useState(!0),n=Object(u.a)(a,2),r=n[0],c=n[1],l=o.a.useState(!1),m=Object(u.a)(l,2),s=m[0],d=m[1],i=o.a.useState(t),p=Object(u.a)(i,2),f=p[0],E=p[1];return o.a.useEffect((function(){setTimeout((function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=t),E(a),c(!1)}catch(s){d(s)}}),3e3)})),{item:f,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),E(t)}catch(s){d(s)}},loading:r,error:s}}("TODOS_V1",[]),a=t.item,n=t.saveItem,r=t.loading,c=t.error,s=o.a.useState(""),d=Object(u.a)(s,2),i=d[0],p=d[1],f=o.a.useState(!1),E=Object(u.a)(f,2),T=E[0],v=E[1],h=a.filter((function(e){return!!e.completed})).length,g=a.length,N=[];N=!i>=1?a:a.filter((function(e){var t=e.text.toLowerCase(),a=i.toLowerCase();return t.includes(a)}));return o.a.createElement(m.Provider,{value:{error:c,loading:r,completedTodos:h,totalTodos:g,searchValue:i,setSearchValue:p,searchedTodos:N,completeTodo:function(e){var t=a.findIndex((function(t){return t.text===e})),o=Object(l.a)(a);o[t].completed=!0,n(o)},deleteTodo:function(e){var t=a.findIndex((function(t){return t.text===e})),o=Object(l.a)(a);o.splice(t,1),n(o)},addTodo:function(e){var t=Object(l.a)(a);t.push({completed:!1,text:e}),n(t)},openModal:T,setOpenModal:v}},e.children)}a(13);function d(){var e=o.a.useContext(m),t=e.totalTodos,a=e.completedTodos;return o.a.createElement("h2",{className:"todoCounter"},"Has completado ",a," de ",t," TODOs")}a(14);function i(){var e=o.a.useContext(m),t=e.searchValue,a=e.setSearchValue;return o.a.createElement("input",{className:"TodoSearch",type:"text",placeholder:"Search",value:t,onInput:function(e){a(e.target.value)}})}a(15);function p(e){return o.a.createElement("button",{className:"CreateTodoButton",type:"button",onClick:function(){e.setOpenModal((function(e){return!e}))}},"+")}a(16);function f(e){return o.a.createElement("section",{className:"TodoList"},o.a.createElement("ul",{className:"TodoList-ul"},e.children))}a(17);function E(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"TodoItem-check ".concat(e.completed&&"TodoItem-check-completed"," "),onClick:e.onComplete},"\u113c"),o.a.createElement("p",{className:"TodoItem-name ".concat(e.completed&&"TodoItem-name-completed")},e.text),o.a.createElement("span",{className:"TodoItem-close",onClick:e.onDelete},"X"))}a(18);function T(){var e=o.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=o.a.useContext(m),c=r.addTodo,l=r.setOpenModal;return o.a.createElement("form",{className:"TodoForm",onSubmit:function(e){e.preventDefault(),c(a),l(!1)}},o.a.createElement("label",{className:"TodoForm-title",htmlFor:"name-todo"},"Name TODO"),o.a.createElement("textarea",{value:a,onChange:function(e){n(e.target.value)},maxLength:"50",className:"TodoForm-description",id:"name-todo",placeholder:"Cortar cebolla para el almuerzo"}),o.a.createElement("div",{className:"TodoForm-container"},o.a.createElement("button",{className:"TodoForm-cancel",type:"button",onClick:function(){l(!1)}},"Cancelar"),o.a.createElement("button",{className:"TodoForm-add",type:"submit"},"A\xf1adir")))}a(19);function v(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("div",{className:"navbar-logo"}))}a(20);function h(e){var t=e.children;return c.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}function g(){return o.a.createElement("p",null,"Desesp\xe9rate, hubo un error...")}a(21);function N(){return o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"}))}function O(){return o.a.createElement("p",null,"\xa1Crea tu primer Todo!")}var b=function(){var e=o.a.useContext(m),t=e.error,a=e.loading,n=e.searchedTodos,r=e.completeTodo,c=e.deleteTodo,l=e.openModal,u=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement(d,null),o.a.createElement(i,null),o.a.createElement(f,null,t&&o.a.createElement(g,{error:t}),a&&o.a.createElement(N,null),!a&&!n.length&&o.a.createElement(O,null),n.map((function(e){return o.a.createElement(E,{completed:e.completed,key:e.text,text:e.text,onComplete:function(){return r(e.text)},onDelete:function(){return c(e.text)}})}))),l&&o.a.createElement(h,null,o.a.createElement(T,null)),o.a.createElement(p,{setOpenModal:u}))};var x=function(){return o.a.createElement(s,null,o.a.createElement(b,null))};c.a.render(o.a.createElement(x,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ad6388dc.chunk.js.map