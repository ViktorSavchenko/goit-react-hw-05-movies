"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[420],{420:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(439),s=a(791),n=a(87),i=a(184),c=function(e){var t=e.onClick,a=(0,s.useState)(""),n=(0,r.Z)(a,2),c=n[0],l=n[1];return(0,i.jsx)("div",{className:"Container",children:(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=e.target.elements.search.value.trim();t(""!==a?a:[]),l("")},className:"Search-form",children:[(0,i.jsx)("label",{children:(0,i.jsx)("input",{type:"text",value:c,name:"search",placeholder:"Search...",onChange:function(e){l(e.target.value)},className:"Search-form__input"})}),(0,i.jsx)("button",{type:"submit",className:"Search-form__button",children:"Search"})]})})},l=a(689),o=function(e){var t=e.serchData.results,a=(0,l.TH)();return(0,i.jsx)("div",{className:"Container",children:(0,i.jsx)("ul",{className:"Search-movies-list",children:t.map((function(e){var t=e.id,r=e.original_title,s=e.poster_path,c=e.vote_average,l=e.release_date;return(0,i.jsx)("li",{className:"Search-movies-list__item",children:(0,i.jsxs)(n.rU,{to:"".concat(t),state:{from:a},children:[(0,i.jsxs)("div",{className:"Banner-wrapper",children:[(0,i.jsx)("img",{className:"Movies-list__img Search-movies-list__img",src:"https://image.tmdb.org/t/p/w300".concat(s),alt:r,width:223,height:335}),(0,i.jsx)("p",{className:"Movies-list__rating",children:c.toFixed(1)})]}),(0,i.jsxs)("div",{className:"Descriprion-wrapper",children:[(0,i.jsx)("p",{className:"Descriprion-title",children:r}),(0,i.jsxs)("p",{className:"Descriprion-date",children:["(",Number.parseInt(l),")"]})]})]})},t)}))})})},u="idle",h="loading",d="resolved",m=function(){var e,t=(0,s.useState)(u),a=(0,r.Z)(t,2),l=a[0],m=a[1],p=(0,s.useState)([]),f=(0,r.Z)(p,2),v=f[0],x=f[1],_=(0,n.lr)(),g=(0,r.Z)(_,2),j=g[0],N=g[1],S=null!==(e=j.get("quary"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){m(h),fetch("\nhttps://api.themoviedb.org/3/search/movie?api_key=17cad80f9662381de06e4551c499d7de&language=en-US&query=".concat(S,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){x(e),m(d)}))}),[S]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{onClick:function(e){if(""===e)return N({});N({quary:e})}}),l===h&&(0,i.jsx)("div",{children:"LOADING..."}),l===d&&0===v.results.length&&(0,i.jsx)("div",{children:"\u0422\u0443\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"}),l===d&&v.results.length>0&&(0,i.jsx)(o,{serchData:v})]})}}}]);
//# sourceMappingURL=420.4c95bf07.chunk.js.map