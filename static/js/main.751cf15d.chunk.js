(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),r=a.n(s),i=a(90),l=a.n(i),o=a(3),u=a(4),h=a(11),c=a.n(h),d=new(function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"validatefirsname",value:function(e){return c.a.isEmpty(e)?"firstname is required":c.a.isAlpha(e)?!c.a.isLength(e,{min:6})&&"Name should be minimum 6 characters":"name must be in letter"}},{key:"validatelastname",value:function(e){return c.a.isEmpty(e)?"lastname required":c.a.isAlpha(e)?!c.a.isLength(e,{min:5})&&"lastname should be minimum 5  characters":"name must be letters"}},{key:"validateEmail",value:function(e){return c.a.isEmpty(e)?"Email is required":!c.a.isEmail(e)&&"Invalid Email"}},{key:"validatePassword",value:function(e){return c.a.isEmpty(e)?"Password is required":!c.a.isLength(e,{min:8})&&"Password should be minimum 8 characters"}},{key:"validaterepeat_password",value:function(e){return c.a.isEmpty(e)?"repeat_password is required":!c.a.isLength(e,{min:8})&&"repeat_password should be minimum 8 characters"}}]),e}()),m=a(21),b=a(9),j=a(5),p=a(6),v=a(24),g=a.n(v),O={firsname:{value:"",validateOnChange:!1,error:""},lastname:{value:"",validateOnChange:!1,error:""},email:{value:"",validateOnChange:!1,error:""},password:{value:"",validateOnChange:!1,error:""},repeat_password:{value:"",validateOnChange:!1,error:""},submitCalled:!1,allFieldsValidated:!1},y=(s.Component,a(12)),f=a(19);r.a.Component,a(279),a(280);var C=a(13),x=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={students:[{Name:"shyjan",Age:"22",RollNo:"1111111"},{Name:"ratheesh",Age:"23",RollNo:"2222222"}]},n.handleChange=n.handleChange.bind(Object(C.a)(n)),n.onSubmit=n.onSubmit.bind(Object(C.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(m.a)({},t,a))}},{key:"onSubmit",value:function(){var e={Name:this.state.Name,Age:this.state.Age,RollNo:this.state.RollNo},t=this.state.students;t.push(e),this.setState({arrObj:t}),console.log(t),console.log(this.state.Age)}},{key:"renderTableData",value:function(){return this.state.students.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.Name}),Object(n.jsx)("td",{children:e.Age}),Object(n.jsx)("td",{children:e.RollNo})]},t)}))}},{key:"renderHead",value:function(){return Object.keys(this.state.students[0]).map((function(e,t){return Object(n.jsx)("th",{children:e},t)}))}},{key:"render",value:function(){var e=this.state.students,t=e.Name,a=e.Age,s=e.RollNo;return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",placeholder:"Enter the Name",name:"Name",value:t,onChange:this.handleChange}),Object(n.jsx)("input",{type:"text",placeholder:"Enter the Age",name:"Age",value:a,onChange:this.handleChange}),Object(n.jsx)("input",{type:"text",placeholder:"Enter the RollNo",name:"RollNo",value:s,onChange:this.handleChange}),Object(n.jsx)("button",{type:"button",onClick:this.onSubmit,children:"click"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:this.renderHead()})}),Object(n.jsx)("tbody",{children:this.renderTableData()})]})]})}}]),a}(r.a.Component);r.a.Component;l.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.751cf15d.chunk.js.map