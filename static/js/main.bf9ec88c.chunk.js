(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),s=n.n(o),l=(n(17),n(1)),c=n(2),r=n(4),m=n(3),u=n(5),h=n(6),g=(n(7),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("h1",null,"Awesome Food Timing Solver"))}}]),t}(a.Component)),d=n(10),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.calculateTimes=function(){console.log("STATE:",n.state);for(var e={},t=[],a=0;a<5;++a){var i="foodName_"+a.toString(),o="foodTime_"+a.toString();""!==n.state[i]&&(e={food:n.state[i],time:n.state[o]},t.push(e))}var s=t.sort(function(e,t){return e.time-t.time});s=s.reverse();for(var l=n.state.endTime.split(":"),c=new Date,r=new Date(c.getFullYear(),c.getMonth(),c.getDate(),l[0],l[1]),m=0;m<s.length;++m){var u=new Date(r),h=s[m].time;u.setMinutes(r.getMinutes()-h),s[m].ovenTime=u}console.log("FINAL",s),n.setState({timings:s}),n.props.updateTimings(s)},n.state={foodList:[],foodName_0:"",foodName_1:"",foodName_2:"",foodName_3:"",foodName_4:"",foodTime_0:"",foodTime_1:"",foodTime_2:"",foodTime_3:"",foodTime_4:"",endTime:"17:00",timings:[]},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){console.log(this.state.foodList);for(var e,t,n=[],a=0;a<5;a++)e="foodName_"+a.toString(),t="foodTime_"+a.toString(),n.push(i.a.createElement("div",{key:a},i.a.createElement("input",{type:"text",name:e,placeholder:"what food?",onChange:this.handleChange}),i.a.createElement("input",{type:"number",name:t,placeholder:"minutes to cook",min:"0",onChange:this.handleChange})));for(var o=[],s=0;s<this.state.timings.length;s++)o.push(i.a.createElement("div",{key:s},i.a.createElement("b",null,this.state.timings[s].food)," start cooking @ ",i.a.createElement("b",null,("0"+this.state.timings[s].ovenTime.getHours()).slice(-2),":",("0"+this.state.timings[s].ovenTime.getMinutes()).slice(-2))));return i.a.createElement("div",{className:"App"},"Add up to 5 foods and cooking time",n,i.a.createElement("div",null,"Time to finish?",i.a.createElement("input",{type:"time",name:"endTime",onChange:this.handleChange})),i.a.createElement("button",{onClick:this.calculateTimes},"Go"),i.a.createElement("div",null,i.a.createElement("div",{className:"timingList"})))}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={timings:n.props.timings,late:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"checkLate",value:function(){var e=new Date;this.state.timings[0].ovenTime<e&&(console.log("too late"),this.setState({late:!0}))}},{key:"componentDidMount",value:function(){this.checkLate()}},{key:"render",value:function(){var e=[];console.log(this.state.timings);for(var t=0;t<this.state.timings.length;t++)console.log(this.state.timings[t]),e.push(i.a.createElement("div",{key:t},i.a.createElement("b",null,this.state.timings[t].food)," start cooking @ ",i.a.createElement("b",null,("0"+this.state.timings[t].ovenTime.getHours()).slice(-2),":",("0"+this.state.timings[t].ovenTime.getMinutes()).slice(-2))));return i.a.createElement("div",{className:"timingList"},this.state.late&&i.a.createElement("h2",{className:"late"},"Too late - better eat later or have something else"),e)}}]),t}(a.Component),v=function(e){function t(e){var n;Object(l.a)(this,t);return(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).updateTimings=function(e){n.setState({timings:e})},n.restart=function(){window.location.reload()},n.state={timings:[]},n.updateTimings=n.updateTimings.bind(Object(h.a)(Object(h.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null),0===this.state.timings.length&&i.a.createElement(f,{updateTimings:this.updateTimings,listLength:this.listLength}),this.state.timings.length>0&&i.a.createElement(p,{timings:this.state.timings}),this.state.timings.length>0&&i.a.createElement("div",null,i.a.createElement("button",{onClick:this.restart},"Start again")))}}]),t}(a.Component);s.a.render(i.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.bf9ec88c.chunk.js.map