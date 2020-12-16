(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),i=s.n(n),a=s(25),r=s.n(a),o=(s(58),s(15)),l=s(35),j=s.n(l),d="".concat("https://accounts.spotify.com/authorize/","?client_id=").concat("139cdf3246774391a2260c8258c4386d","&redirect_uri=").concat('"https://iampawan31.github.io/spotify-clone"',"&scopes=").concat(["user-read-currently-playing","user-read-currently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),b=Object(n.createContext)(),u=function(e){var t=e.initialState,s=e.reducer,i=e.children;return Object(c.jsx)(b.Provider,{value:Object(n.useReducer)(s,t),children:i})},O=function(){return Object(n.useContext)(b)};s(59),s(60);var x=function(){return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:"./images/logos/Spotify_Logo_RGB_White.png",alt:""})}),Object(c.jsx)("div",{className:"loginButton",children:Object(c.jsx)("a",{href:d,children:"Login with Spotify"})})]})},h=(s(61),s(62),s(63),s(26)),f=s.n(h),m=s(92);var v=function(){var e,t=O(),s=Object(o.a)(t,2),n=s[0].user;return s[1],Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header__left",children:[Object(c.jsx)(f.a,{}),Object(c.jsx)("input",{type:"text",placeholder:"Search for Artists, Songs, or Podcasts"})]}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsx)(m.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),Object(c.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})};s(69);var _=function(e){var t=e.track;return Object(c.jsxs)("div",{className:"songRow",children:[Object(c.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(c.jsxs)("div",{className:"songRow__info",children:[Object(c.jsx)("h1",{children:t.name}),Object(c.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," ",t.album.name]})]})]})},p=s(87),g=s(88),y=s(89);var N=function(e){var t=e.spotify,s=O(),n=Object(o.a)(s,2),i=n[0].discoverWeekly;return n[1],Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(v,{spotify:t}),Object(c.jsxs)("div",{className:"body__info",children:[Object(c.jsx)("img",{src:null===i||void 0===i?void 0:i.images[0].url,alt:""}),Object(c.jsxs)("div",{className:"body__infoText",children:[Object(c.jsx)("strong",{children:"PLAYLIST"}),Object(c.jsx)("h2",{children:null===i||void 0===i?void 0:i.name}),Object(c.jsx)("p",{children:null===i||void 0===i?void 0:i.description})]})]}),Object(c.jsxs)("div",{className:"body__songs",children:[Object(c.jsxs)("div",{className:"body__icons",children:[Object(c.jsx)(p.a,{className:"body__shuffle"}),Object(c.jsx)(g.a,{fontSize:"large"}),Object(c.jsx)(y.a,{})]}),null===i||void 0===i?void 0:i.tracks.items.map((function(e){return Object(c.jsx)(_,{track:e.track})}))]})]})};s(70),s(71);var S=function(e){var t=e.title,s=e.Icon;return Object(c.jsxs)("div",{className:"sidebarOption",children:[s&&Object(c.jsx)(s,{className:"sidebarOption__icon"}),s?Object(c.jsx)("h4",{children:t}):Object(c.jsx)("p",{children:t})]})},E=s(40),k=s.n(E),T=s(41),L=s.n(T);var w=function(){var e,t=O(),s=Object(o.a)(t,2),n=s[0].playlists;return s[1],Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("img",{className:"sidebar__logo",src:"/images/logos/Spotify_Logo_RGB_White.png",alt:""}),Object(c.jsx)(S,{Icon:k.a,title:"Home"}),Object(c.jsx)(S,{Icon:f.a,title:"Search"}),Object(c.jsx)(S,{Icon:L.a,title:"Your Library"}),Object(c.jsx)("br",{}),Object(c.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(c.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(c.jsx)(S,{title:e.name})}))]})},I=s(90),R=s(91),P=(s(72),s(44)),W=s.n(P),C=s(43),A=s.n(C),Y=s(45),U=s.n(Y),B=s(42),K=s.n(B),D=s(47),F=s.n(D),V=s(48),z=s.n(V),J=s(46),M=s.n(J);var q=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"footer__left",children:[Object(c.jsx)("img",{className:"footer_albumLogo",src:"",alt:""}),Object(c.jsxs)("div",{className:"footer__songInfo",children:[Object(c.jsx)("h4",{children:"No song playing"}),Object(c.jsx)("p",{children:"..."})]})]}),Object(c.jsxs)("div",{className:"footer__center",children:[Object(c.jsx)(K.a,{className:"footer__green"}),Object(c.jsx)(A.a,{className:"footer__icon"}),Object(c.jsx)(W.a,{fontSize:"large",className:"footer__icon"}),Object(c.jsx)(U.a,{className:"footer__icon"}),Object(c.jsx)(M.a,{className:"footer__green"})]}),Object(c.jsx)("div",{className:"footer__right",children:Object(c.jsxs)(I.a,{container:!0,spacing:2,children:[Object(c.jsx)(I.a,{item:!0,children:Object(c.jsx)(F.a,{})}),Object(c.jsx)(I.a,{item:!0,children:Object(c.jsx)(z.a,{})}),Object(c.jsx)(I.a,{item:!0,xs:!0,children:Object(c.jsx)(R.a,{})})]})})]})};var G=function(e){return e.spotify,Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"player__body",children:[Object(c.jsx)(w,{}),Object(c.jsx)(N,{})]}),Object(c.jsx)(q,{})]})},H=new j.a;var Q=function(){var e=O(),t=Object(o.a)(e,2),s=t[0],i=(s.user,s.token),a=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var s=t.split("=");return e[s[0]]=decodeURIComponent(s[1]),e}),{}).access_token;window.location.hash="",e&&(a({type:"SET_TOKEN",token:e}),H.setAccessToken(e),H.getMe().then((function(e){a({type:"SET_USER",user:e})})),H.getUserPlaylists().then((function(e){a({type:"SET_PLAYLISTS",playlists:e})})),H.getPlaylist("3EEtqDscUeqwVVdx6JuMKU").then((function(e){a({type:"SET_DISCOVER_WEEKLY",discoverWeekly:e})})))}),[]),Object(c.jsx)("div",{className:"App",children:i?Object(c.jsx)(G,{spotify:H}):Object(c.jsx)(x,{})})},X=s(13),Z=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(X.a)(Object(X.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(X.a)(Object(X.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(X.a)(Object(X.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(X.a)(Object(X.a)({},e),{},{discoverWeekly:t.discoverWeekly});default:return e}},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,94)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u,{initialState:{user:null,playlists:[],playing:!1,item:null,token:null,discoverWeekly:null},reducer:Z,children:Object(c.jsx)(Q,{})})}),document.getElementById("root")),$()}},[[73,1,2]]]);
//# sourceMappingURL=main.9ec2cc75.chunk.js.map