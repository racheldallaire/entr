(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e){e.exports={a:{A:{name:"Sweetums",description:"Sweetums is Pawnee's leading sweet treat manufacturer and has been for over 80 years. Its slogan is: 'If you can't beat 'em, Sweetums.' The pollution from the factory results in beautiful sunsets.",users:[]},B:{name:"Gryzzl",description:"Gryzzl is an internet company that is headquartered in Pawnee. Gryzzl delivers 'Gryzzlboxes' to Pawnee residents full of their favorite things via drone. This leads to the revelation that Gryzzl has been using data mining to learn the wishes of Pawnee residents.",users:["4","5"]},C:{name:"JJ's Diner",description:"JJ's Diner has been a staple for the citizens of Pawnee since its opening in 1976. It is owned by JJ Lipscomb and is located at 122 Sunderland, between TrampStamp Tattoos and the ChloroTech Cadmium Refinery. The speciality at JJ's are its world-famous waffles.",users:["1","2","3"]}},c:{1:"Leslie Knope",2:"Ron Swanson",3:"April Ludgate",4:"Donna Meagle",5:"Tom Haverford",6:"Andy Dwyer"},b:["A","B","C"]}},5418:function(e,t,n){e.exports=n(5565)},5423:function(e,t,n){},5424:function(e,t,n){},5425:function(e,t,n){},5426:function(e,t,n){},5560:function(e,t,n){},5561:function(e,t,n){},5562:function(e,t,n){},5565:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(16),c=n.n(s),l=(n(5423),n(17)),o=n(18),i=n(20),m=n(19),u=n(21),p=n(28),d=n.n(p),h=(n(5424),n(5425),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb entr challenge")}}]),t}(a.Component)),y=n(39),f=n(53),b=n(86),E=n(29),v=n(9),O=n(54),C=(n(5426),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.props.setSelectedUsers(e.target.value)},n.handleDelete=function(e){return function(){var t=Object(y.a)(n.props.selectedUsers);t.splice(n.props.selectedUsers.indexOf(e),1),n.props.setSelectedUsers(t)}},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.h,{className:"selectUsers"},r.a.createElement(v.j,{htmlFor:"select-multiple-checkbox"},"Assign Users"),r.a.createElement(v.p,{multiple:!0,value:this.props.selectedUsers,onChange:this.handleChange,input:r.a.createElement(v.i,{id:"select-multiple-checkbox"}),renderValue:function(t){return t.map(function(t,n){return r.a.createElement(v.d,{key:n,label:e.props.users[t],onDelete:e.handleDelete(t)})})}},Object.keys(this.props.users).map(function(t){return r.a.createElement(v.o,{key:t,value:t},r.a.createElement(v.c,{checked:e.props.selectedUsers.indexOf(t)>-1,style:{color:"#7c60e3"}}),r.a.createElement(v.n,{primary:e.props.users[t]}))})))}}]),t}(a.Component)),g=(n(5560),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).setSelectedUsers=function(e){n.setState({selectedUsers:e})},n.state={selectedUsers:n.props.initialSelectedUsers},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(v.l,null,r.a.createElement(v.e,{className:"companyListItem"},r.a.createElement(v.g,{expandIcon:r.a.createElement(E.c,null)},r.a.createElement(v.m,null,r.a.createElement("div",null,r.a.createElement(v.a,null,this.props.name[0].toUpperCase()),r.a.createElement(E.a,{className:"smallIcon"}),r.a.createElement("span",{className:"userCount"},this.state.selectedUsers.length))),r.a.createElement(v.n,{primary:r.a.createElement(v.r,{variant:"h6",style:{color:"#7c60e3"}},this.props.name),secondary:this.props.description})),r.a.createElement(v.f,null,r.a.createElement(C,{users:this.props.users,initialSelectedUsers:this.props.initialSelectedUsers,selectedUsers:this.state.selectedUsers,setSelectedUsers:this.setSelectedUsers}),r.a.createElement("p",null),0===this.state.selectedUsers.length?r.a.createElement(v.b,{"aria-label":"Delete",className:"deleteCompany",onClick:this.props.deleteCompany,color:"secondary",variant:"contained"},r.a.createElement(E.b,null)," Delete"):"")))}}]),t}(a.Component)),j=(n(5561),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).addCompany=function(){var e="c-"+Math.random().toString(36).substr(2,9)+"-"+String(Date.now()).substr(4);n.setState({addingCompany:!1,companies:Object(b.a)({},n.state.companies,Object(f.a)({},e,{name:n.state.companyNameInput,description:n.state.companyDescInput,users:[]})),companyNameInput:"",companyDescInput:"",companyOrder:[].concat(Object(y.a)(n.state.companyOrder),[e])})},n.onDeleteCompany=function(e){return function(){var t=Object(b.a)({},n.state.companies);delete t[e];var a=Object(y.a)(n.state.companyOrder);a.splice(a.indexOf(e),1),n.setState({companies:t,companyOrder:a})}},n.generateInput=function(e){return r.a.createElement(v.l,{key:e},r.a.createElement(v.m,null,r.a.createElement(v.a,null,void 0!==n.state.companyNameInput[0]?n.state.companyNameInput[0].toUpperCase():"")),r.a.createElement(v.n,null,r.a.createElement(v.q,{id:"standard-uncontrolled",label:"Company Name",className:"companyNameInput",onChange:function(e){n.setState({companyNameInput:e.target.value})},margin:"normal"}),r.a.createElement("br",null),r.a.createElement(v.q,{id:"outlined-name",label:"Description",className:"companyDescInput",onChange:function(e){n.setState({companyDescInput:e.target.value})},margin:"normal",variant:"outlined"})))},n.renderInput=function(){if(n.state.addingCompany)return n.generateInput("a")},n.renderList=function(){var e=[];return n.state.companyOrder.forEach(function(t){var a=n.state.companies[t];e.push(r.a.createElement(g,{key:t,id:t,name:a.name,description:a.description,users:O.c,initialSelectedUsers:a.users,deleteCompany:n.onDeleteCompany(t)}))}),r.a.createElement(v.k,null,e)},n.toggleCompanyInput=function(){n.setState({addingCompany:!0})},n.cancelCompanyInput=function(){n.setState({addingCompany:!1,companyNameInput:"",companyDescInput:""})},n.state={addingCompany:!1,companies:O.a,companyNameInput:"",companyDescInput:"",companyOrder:O.b},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"companyList"},r.a.createElement("div",{className:"list"},this.renderList(),this.renderInput()),this.state.addingCompany?r.a.createElement("div",{className:"buttonContainer"},""===this.state.companyNameInput?r.a.createElement(v.b,{disabled:!0,variant:"contained"},r.a.createElement(E.d,null)," Save"):r.a.createElement(v.b,{"aria-label":"Save",onClick:this.addCompany,variant:"contained",color:"primary"},r.a.createElement(E.d,null)," Save"),r.a.createElement(v.b,{"aria-label":"Cancel",className:"cancelEntry",onClick:this.cancelCompanyInput,variant:"outlined",color:"secondary"},"Cancel")):r.a.createElement(v.b,{className:"addCompany",onClick:this.toggleCompanyInput,variant:"contained",color:"primary"},"New Company"))}}]),t}(a.Component)),w=(n(5562),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null))}}]),t}(a.Component)),I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(d.a,{container:!0,spacing:24},r.a.createElement(d.a,{item:!0,xs:!0}),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(w,null)),r.a.createElement(d.a,{item:!0,xs:!0})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5418,1,2]]]);
//# sourceMappingURL=main.7a8a08d0.chunk.js.map