"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[948],{5948:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var s=n(2791),i=n(9439),r=n(7689),a=n(1243),c=n(184),o=function(){var e,t,n=(0,r.UO)().movieId,o=(0,s.useState)({}),l=(0,i.Z)(o,2),m=l[0],u=l[1],d=(0,s.useState)(!1),h=(0,i.Z)(d,2),f=h[0],p=h[1],v=(0,r.TH)(),b=(0,r.s0)(),j=null!==(e=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,s.useEffect)((function(){a.Z.get("https://api.themoviedb.org/3/movie/".concat(n),{params:{api_key:"488a10199f756ebd19425cffe6e22e26"}}).then((function(e){u(e.data)})).catch((function(e){console.error("Error fetching movie details:",e)}))}));return(0,c.jsxs)("div",{className:"container mt-4",children:[(0,c.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){window.history.back()},children:"Go back"}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:m.title}),(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(m.poster_path),alt:m.title,className:"img-fluid"})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{className:"mt-2",children:["Rating: ",m.vote_average]}),(0,c.jsxs)("p",{children:["Description: ",m.overview]}),(0,c.jsxs)("p",{children:["Genre:"," ",m.genres&&m.genres.map((function(e){return e.name})).join(", ")]})]})]}),(0,c.jsx)("button",{style:{cursor:"pointer"},onClick:function(){p(!f),f?b(j):b("cast",{state:{from:v.pathname}})},className:"btn btn-primary mb-3 me-3",children:"Cast"}),(0,c.jsx)("button",{style:{cursor:"pointer"},onClick:function(){p(!f),f?b(j):b("reviews",{state:{from:v.pathname}})},className:"btn btn-primary mb-3",children:"Review"})]})},l=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{}),(0,c.jsx)(r.j3,{}),(0,c.jsx)(r.j3,{})]})}}}]);
//# sourceMappingURL=948.c242023a.chunk.js.map