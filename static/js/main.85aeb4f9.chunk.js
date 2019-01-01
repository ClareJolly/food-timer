(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(13),s=n.n(o),r=(n(23),n(3)),c=n(4),l=n(6),m=n(5),u=n(7),d=n(2),h=(n(8),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("h1",null,"Awesome Food Timing Solver"))}}]),t}(a.Component)),g=n(11),f=n(9),v=n(14),p=n.n(v),b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.handleFoodChange=function(e){return function(t){console.log(e);var a=n.state.foodList.map(function(n,a){return e!==a?n:Object(g.a)({},n,{food:t.target.value})});n.setState({foodList:a})}},n.handleFoodTimeChange=function(e){return function(t){var a=n.state.foodList.map(function(n,a){return e!==a?n:Object(g.a)({},n,{time:t.target.value})});n.setState({foodList:a})}},n.handleAddFood=function(){n.setState({foodList:n.state.foodList.concat([{food:"",time:"",ovenTime:""}])})},n.cleanFoodList=function(){return n.state.foodList.filter(function(e){return""!==e.food}).sort(function(e,t){return e.time-t.time}).reverse()},n.getEndTime=function(){var e=n.state.endTime.split(":"),t=new Date;return new Date(t.getFullYear(),t.getMonth(),t.getDate(),e[0],e[1])},n.setOventimes=function(e,t){for(var n=0;n<e.length;++n){var a=new Date(t),i=e[n].time;a.setMinutes(t.getMinutes()-i),e[n].ovenTime=a}return e},n.saveFinalTimings=function(e){n.setState({timings:e,foodList:e})},n.calculateTimesDynamic=function(){var e=n.cleanFoodList(),t=n.getEndTime();n.setOventimes(e,t),n.saveFinalTimings(e),n.props.toggleForm(),n.props.updateTimings(e)},n.setInitialFoodList=function(){var e=[];if(0===n.props.timings.length)for(var t=0;t<5;++t)e.push({food:"",time:"",ovenTime:""});for(var a=0;a<n.props.timings.length;++a)e.push(n.props.timings[a]);n.setState({foodList:e})},n.state={foodList:[],endTime:"17:00",timings:[]},n.handleFoodChange=n.handleFoodChange.bind(Object(d.a)(Object(d.a)(n))),n.handleFoodTimeChange=n.handleFoodTimeChange.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setInitialFoodList()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"TimeForm"},i.a.createElement("h3",null,"Add foods and cooking time"),this.state.foodList.map(function(t,n){return i.a.createElement(p.a,{key:n,width:24,gap:24},i.a.createElement("div",{className:"leftStyle"},i.a.createElement("input",{type:"text",placeholder:"What food?",value:t.food,onChange:e.handleFoodChange(n)})),i.a.createElement("div",{className:"rightStyle"},i.a.createElement("input",{type:"number",placeholder:"minutes to cook",value:t.time,min:"0",onChange:e.handleFoodTimeChange(n)}),n===e.state.foodList.length-1&&i.a.createElement("button",{className:"addButton",onClick:e.handleAddFood},"Add")))}),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"endTime"},"Time to finish?"),i.a.createElement("input",{type:"time",name:"endTime",id:"endTime",className:"timefield",onChange:this.handleChange})),i.a.createElement("button",{onClick:this.calculateTimesDynamic},"Go"))}}]),t}(a.Component),F=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={timings:n.props.timings,late:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"checkLate",value:function(){var e=new Date;this.state.timings[0].ovenTime<e&&this.setState({late:!0})}},{key:"componentDidMount",value:function(){this.checkLate()}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.timings.length;t++)e.push(i.a.createElement("div",{key:t},i.a.createElement("b",null,this.state.timings[t].food)," start cooking @ ",i.a.createElement("b",null,("0"+this.state.timings[t].ovenTime.getHours()).slice(-2),":",("0"+this.state.timings[t].ovenTime.getMinutes()).slice(-2))));return i.a.createElement("div",{className:"timingList"},this.state.late&&i.a.createElement("h2",{className:"late"},"Too late - better eat later or have something else"),e)}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).updateTimings=function(e){n.setState({timings:e})},n.restart=function(){window.location.reload()},n.toggleForm=function(){n.setState({showForm:!n.state.showForm})},n.goBack=function(){n.toggleForm()},n.state={timings:[],showForm:!0},n.updateTimings=n.updateTimings.bind(Object(d.a)(Object(d.a)(n))),n.toggleForm=n.toggleForm.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),this.state.showForm&&i.a.createElement(b,{timings:this.state.timings,updateTimings:this.updateTimings,toggleForm:this.toggleForm,listLength:this.listLength}),!this.state.showForm&&i.a.createElement(F,{timings:this.state.timings}),!this.state.showForm&&i.a.createElement("div",null,i.a.createElement("button",{onClick:this.goBack},"Back")),!this.state.showForm&&i.a.createElement("div",null,i.a.createElement("button",{onClick:this.restart},"Start again")))}}]),t}(a.Component);s.a.render(i.a.createElement(O,null),document.getElementById("root"))},8:function(e,t,n){}},[[17,2,1]]]);
//# sourceMappingURL=main.85aeb4f9.chunk.js.map