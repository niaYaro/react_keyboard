(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),s=n(8),c=n(9),o=n(12),i=n(11),p=n(0),l=n.n(p),u=n(34),d=n(2),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:null},e.handleKeyUp=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:Object(d.jsx)(u.a,{variant:"h5",color:"primary",fontStyle:"italic",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})})}}]),n}(l.a.Component);n(23);r.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.32a4466f.chunk.js.map