(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"alphabet":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],"months":["May","June","July","August","September","October","November","December","January","February","March","April"]}')},30:function(e,t,s){},31:function(e,t,s){},58:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),r=s(4),a=s.n(r),i=(s(30),s(31),s(19)),o=s(20),l=s(25),j=s(24),u=s(5),h=s(22),p=s.n(h),b=function(){return p.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users")},d=s(3),m="SET-EMPLOYEE",O="STATUS-CHANGE",f={},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case m:return Object(d.a)(Object(d.a)({},e),{},{persons:t.persons});case O:return Object(d.a)(Object(d.a)({},e),{},{persons:e.persons.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{status:t.status}):e}))})}},x=s(6),v=s.n(x),N=s(10),g=s(0),M=function(e){var t=N.alphabet,s=N.months,n=function(t,s){e.setStatus(s,t)};return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"main",children:[Object(g.jsxs)("div",{className:"employeesBlock",children:[Object(g.jsx)("h1",{className:"employees-title",children:"Employees"}),Object(g.jsx)("div",{className:"byLetter",children:t.map((function(t){return Object(g.jsxs)("div",{className:"letter",children:[Object(g.jsx)("h2",{children:t}),Object(g.jsx)("div",{children:e.employee.filter((function(e){return e.lastName.match(t)})).map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:e.status?"active":"not-active",children:[e.lastName," ",e.firstName]}),Object(g.jsxs)("form",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"radio",name:"status",onChange:function(){return n(!0,e.id)},checked:!0===e.status}),"Active"]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"radio",name:"status",onChange:function(){return n(!1,e.id)},checked:!1===e.status}),"Not active"]})]})]})}))}),0===e.employee.filter((function(e){return e.lastName[0].match(t)})).length?Object(g.jsx)("h2",{children:"-----------"}):Object(g.jsx)(g.Fragment,{})]})}))})]}),Object(g.jsxs)("div",{className:"birthdayBlock",children:[Object(g.jsx)("hr",{className:"verticalLine"}),Object(g.jsx)("h1",{className:"birthday",children:"Employees birthday"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"birthday",children:[0===e.employee.filter((function(e){return e.status})).length?Object(g.jsx)("h2",{children:"Employees List is empty"}):Object(g.jsx)(g.Fragment,{}),s.map((function(t){return Object(g.jsxs)("div",{children:[e.employee.filter((function(e){return e.status&&t===v()(e.dob).format("MMMM")})).length>0?Object(g.jsx)("h2",{children:t}):Object(g.jsx)(g.Fragment,{}),e.employee.filter((function(e){return e.status})).map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("ul",{children:t===v()(e.dob).format("MMMM")?Object(g.jsx)("li",{children:Object(g.jsxs)("h3",{children:[" ",e.lastName," ",e.firstName," - ",v()(e.dob).format("D MMMM YYYY")]})}):Object(g.jsx)("h4",{})})})}))]})}))]})]})]}),Object(g.jsx)("hr",{className:"centralLine"})]})},S=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),n=t.call(this,e),localStorage.getItem("userData")&&(n.state={employee:JSON.parse(localStorage.getItem("userData")).persons}),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.state?this.props.setEmployee(this.state.employee):this.props.getEmployee()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("userData",JSON.stringify(this.props))}},{key:"render",value:function(){return null!=this.props.persons?Object(g.jsx)("div",{children:Object(g.jsx)(M,{employee:this.props.persons,setStatus:this.props.setStatus})}):Object(g.jsx)(g.Fragment,{})}}]),s}(n.Component),E=Object(u.b)((function(e){return{persons:e.employee.persons}}),{getEmployee:function(){return function(e){b().then((function(t){if(t){var s=t.data;s.forEach((function(e){e.status=!1})),e({type:m,persons:s})}}))}},setStatus:function(e,t){return{type:O,id:e,status:t}},setEmployee:function(e){return{type:m,persons:e}}})(S),k=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(E,{})})},J=s(7),D=s(23),A=Object(J.b)({employee:y}),F=Object(J.c)(A,Object(J.a)(D.a)),L=F;window.store=F,a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(u.a,{store:L,children:Object(g.jsx)(k,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.1bd06c75.chunk.js.map