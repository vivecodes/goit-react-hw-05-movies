"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[833],{1842:function(n,t,e){e.d(t,{O:function(){return m}});var r,o,i,c=e(6871),a=e(168),u=e(6031),s=u.ZP.li(r||(r=(0,a.Z)(["\n    color: ",";\n    font-size: 18px;\n    text-align: center;\n\n    transition: transform 250ms ease, color 250ms ease;\n\n    &:hover {\n        cursor: pointer;\n        color: ",";\n        transform: scale(1.02);\n    }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.backgroundColor})),f=u.ZP.p(o||(o=(0,a.Z)(["\n    height: 45px;\n    margin-top: ",";\n    margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)})),p=e(184),h=function(n){var t=n.movie,e=(0,c.s0)(),r=(0,c.TH)();return(0,p.jsxs)(s,{onClick:function(){return n=t.id,void e("/movies/".concat(n),{state:{from:r}});var n},children:[(0,p.jsx)("img",{src:t.poster_path,alt:"movie poster"}),(0,p.jsx)(f,{children:t.title})]})},l=u.ZP.ul(i||(i=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n\n    list-style: none;\n\n    padding-left: ",";\n    padding-right: ",";\n\n    @media(min-width: 480px) {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-row-gap: ",";\n        grid-column-gap: ",";\n    };\n\n    @media(min-width: 768px) {\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n    };\n\n    @media(min-width: 1280px) {\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    };\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)})),m=function(n){var t=n.movies;return(0,p.jsx)(l,{children:t.map((function(n){return(0,p.jsx)(h,{movie:n},n.id)}))})}},2407:function(n,t,e){e.d(t,{z:function(){return i}});var r,o=e(168),i=e(6031).ZP.button(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 35px;\n\n  font-size: 15px;\n  font-weight: bold;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n  cursor: pointer;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out,\n    transform 250ms ease-in-out;\n  \n    &:hover,\n    &:focus-visible {\n      border-color: ",";\n      background-color: ",";\n    }\n    \n    &:active {\n      transform: scale(0.9);\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.buttonHoverBackgroundColor}),(function(n){return n.theme.colors.buttonHoverBackgroundColor}))},6693:function(n,t,e){e.d(t,{D:function(){return i}});var r,o=e(168),i=e(6031).ZP.h1(r||(r=(0,o.Z)(["\n    margin-top: ",";\n    margin-bottom: ",";\n\n    text-align: center;\n    font-size: 28px;\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)}))},1833:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,o,i=e(885),c=e(2791),a=e(501),u=e(168),s=e(6031),f=s.ZP.form(r||(r=(0,u.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: ","\n"])),(function(n){return n.theme.spacing(3)})),p=s.ZP.input(o||(o=(0,u.Z)(["\n    width: 190px;\n    height: 30px;\n    margin-right: ",";\n    padding-left: ",";\n    border: 1px solid black;\n    border-radius: 4px;\n    transition: border-color 250ms ease-in-out;\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    &:focus {\n        border-color: ",";\n        outline: none;\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.backgroundColor})),h=e(6693),l=e(2407),m=e(1842),d=e(2658),g=e(971),v=e(7391),x=e(184),b=new v.s,y=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],o=(0,c.useState)(!1),u=(0,i.Z)(o,2),s=u[0],v=u[1],y=(0,a.lr)(),Z=(0,i.Z)(y,2),k=Z[0],w=Z[1],_=k.get("query");(0,c.useEffect)((function(){if(_){v(!0);try{b.fetchMoviesByName(_).then((function(n){n.map((function(n){return n.poster_path?n.poster_path="https://www.themoviedb.org/t/p/w440_and_h660_face".concat(n.poster_path):n.poster_path=g,n})),r(n)}))}catch(n){console.log(n)}v(!1)}}),[_]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(f,{onSubmit:function(n){n.preventDefault(),n.target.elements.searchQuery.value.trim()&&(w({query:n.target.elements.searchQuery.value.trim()}),n.target.reset())},children:[(0,x.jsx)(p,{placeholder:"Search movies",type:"text",name:"searchQuery",autocomplete:"off"}),(0,x.jsx)(l.z,{type:"submit",children:"Search"})]}),s?(0,x.jsx)(d.Z,{}):0===e.length?(0,x.jsx)(h.D,{children:"No movies yet..."}):(0,x.jsx)(m.O,{movies:e})]})}},7391:function(n,t,e){e.d(t,{s:function(){return m}});var r=e(5861),o=e(5671),i=e(3144),c=e(6274),a=e(9359),u=e(7757),s=e.n(u),f=e(4569),p=e.n(f),h=(0,a.Z)("BASE_URL"),l=(0,a.Z)("API_KEY"),m=function(){function n(){(0,o.Z)(this,n),Object.defineProperty(this,h,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,l,{writable:!0,value:"5bb22c57348a36de617928c842cde881"})}return(0,i.Z)(n,[{key:"fetchTrendingMovies",value:function(){var n=(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().get("".concat((0,c.Z)(this,h)[h],"trending/movie/day?api_key=").concat((0,c.Z)(this,l)[l]));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"fetchMovieDetails",value:function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().get("".concat((0,c.Z)(this,h)[h],"movie/").concat(t,"?api_key=").concat((0,c.Z)(this,l)[l]));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"fetchMovieCast",value:function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().get("".concat((0,c.Z)(this,h)[h],"movie/").concat(t,"/credits?api_key=").concat((0,c.Z)(this,l)[l]));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"fetchMovieReviews",value:function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().get("".concat((0,c.Z)(this,h)[h],"movie/").concat(t,"/reviews?api_key=").concat((0,c.Z)(this,l)[l]));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"fetchMoviesByName",value:function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().get("".concat((0,c.Z)(this,h)[h],"search/movie?api_key=").concat((0,c.Z)(this,l)[l],"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()}]),n}()},971:function(n,t,e){n.exports=e.p+"static/media/01.13abf58b8e9406ec5a41.jpg"}}]);
//# sourceMappingURL=833.3b9d0143.chunk.js.map