"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[52],{52:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),u=n(87),i=n(184),c=function(e){var t=e.onClick,n=(0,a.useState)(""),u=(0,r.Z)(n,2),c=u[0],l=u[1];return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements.search.value.trim();t(""!==n?n:[]),l("")},children:[(0,i.jsx)("label",{children:(0,i.jsx)("input",{type:"text",value:c,name:"search",onChange:function(e){l(e.target.value)}})}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},l=n(689),s=function(e){var t=e.serchData.results,n=(0,l.TH)();return(0,i.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.original_title;return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"".concat(t),state:{from:n},children:r})},t)}))})},o="idle",h="loading",d="resolved",f=function(){var e,t=(0,a.useState)(o),n=(0,r.Z)(t,2),l=n[0],f=n[1],v=(0,a.useState)([]),m=(0,r.Z)(v,2),p=m[0],g=m[1],j=(0,u.lr)(),x=(0,r.Z)(j,2),k=x[0],b=x[1],_=null!==(e=k.get("quary"))&&void 0!==e?e:"";return(0,a.useEffect)((function(){f(h),fetch("\nhttps://api.themoviedb.org/3/search/movie?api_key=17cad80f9662381de06e4551c499d7de&language=en-US&query=".concat(_,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){g(e),f(d)}))}),[_]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{onClick:function(e){if(""===e)return b({});b({quary:e})}}),l===h&&(0,i.jsx)("div",{children:"LOADING..."}),l===d&&0===p.results.length&&(0,i.jsx)("div",{children:"\u0422\u0443\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"}),l===d&&p.results.length>0&&(0,i.jsx)(s,{serchData:p})]})}}}]);
//# sourceMappingURL=52.f0ea869f.chunk.js.map