(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),l=n(2),o=n.n(l),r=n(3),u=n(4),s=n(6),c=n(5),d=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={input:"",list:[],edit:!1,editInput:""},t.onChange=function(e){t.setState({input:e.target.value})},t.onClick=function(){var e=t.state.list;e.push(t.state.input),t.setState({list:e,input:""})},t.onDelete=function(e){console.log(e),console.log(e.currentTarget),console.log(e.currentTarget.name);var n=t.state.list;n.splice(e.currentTarget.name,1),t.setState({list:n})},t.onEdit=function(){var e=t.state.edit;t.setState({edit:!e})},t.onEditInput=function(e){t.setState({editInput:e.target.value})},t.onSubmit=function(e){console.log(e.currentTarget.name);var n=e.currentTarget.name;if(0!==t.state.editInput.length){var a=t.state.list;a[n]=t.state.editInput,t.setState({list:a,editInput:"",edit:!1})}},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.state.editInput),console.log(this.state.edit),i.a.createElement("div",null,i.a.createElement("input",{value:this.state.input,type:"text",onChange:this.onChange}),i.a.createElement("button",{onClick:this.onClick},"ADD"),i.a.createElement("ul",null,this.state.list.map((function(e,n){return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("li",{key:n,style:{display:"inline-block"}},!0===t.state.edit?i.a.createElement("input",{type:"text",defaultValue:e,onChange:t.onEditInput}):e),i.a.createElement("button",{name:n,onClick:t.onDelete},"Delete"),!1===t.state.edit?i.a.createElement("div",null):i.a.createElement("button",{name:n,onClick:t.onSubmit},"Sbumit"),!0===t.state.edit?i.a.createElement("div",null):i.a.createElement("button",{name:n,onClick:t.onEdit},"Edit"))}))))}}]),n}(i.a.Component),p=function(){return i.a.createElement(d,null)};o.a.render(i.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.93ae718e.chunk.js.map