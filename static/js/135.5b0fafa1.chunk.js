"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(439),r=n(184),i=function(e){var t=e.dataActors;return(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.profile_path),alt:e.original_name,width:50,height:75}),(0,r.jsxs)("p",{children:["Name: ",e.original_name]}),(0,r.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})},c=n(791),o=n(689),s="idle",d="loading",h="resolved",u=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)(s),n=(0,a.Z)(t,2),u=n[0],l=n[1],f=(0,c.useState)([]),p=(0,a.Z)(f,2),m=p[0],g=p[1];return(0,c.useEffect)((function(){l(d),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=17cad80f9662381de06e4551c499d7de&language=en-US")).then((function(e){return e.json()})).then((function(e){g(e.cast),l(h)}))}),[e]),u===d?(0,r.jsx)("div",{children:"LOADING..."}):u===h&&0!==m.length?(0,r.jsx)(i,{dataActors:m}):void 0}}}]);
//# sourceMappingURL=135.5b0fafa1.chunk.js.map