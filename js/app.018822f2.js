(function(t){function s(s){for(var a,n,l=s[0],c=s[1],o=s[2],f=0,p=[];f<l.length;f++)n=l[f],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(p.length)p.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,l=1;l<e.length;l++){var c=e[l];0!==r[c]&&(a=!1)}a&&(i.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},r={app:0},i=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=s,l=l.slice();for(var o=0;o<l.length;o++)s(l[o]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0504":function(t,s,e){},3088:function(t,s,e){"use strict";var a=e("b87c"),r=e.n(a);r.a},"44b0":function(t,s,e){"use strict";var a=e("4a84"),r=e.n(a);r.a},"4a84":function(t,s,e){},"4e0e":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"top"},[e("navbar",{staticClass:"app-nav"}),e("main-content",{staticClass:"app-main"}),e("friends",{staticClass:"app-friends"})],1),e("music-player",{staticClass:"app-player"})],1)},i=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"container bg-dark-100",attrs:{id:"main-nav"}},[t._m(0),e("ul",{staticClass:"nav-list"},[e("li",[e("a",{staticClass:"active",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.activateLink(s)}}},[e("i",{staticClass:"fas fa-home"}),e("span",{staticClass:"bold"},[t._v("Home")])])]),e("li",[e("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.activateLink(s)}}},[e("i",{staticClass:"fas fa-compact-disc "}),e("span",{staticClass:"bold"},[t._v("Browse")])])]),e("li",[e("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.activateLink(s)}}},[e("i",{staticClass:"fas fa-broadcast-tower "}),e("span",{staticClass:"bold"},[t._v("Radio")])])])]),t._m(1),t._m(2)])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-ellipsis-h "})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"specials"},[e("section",{staticClass:"your-library"},[e("h4",{staticClass:"upper normal"},[t._v("Your Library")]),e("ul",[e("li",[e("a",{staticClass:"bold",attrs:{href:"#"}},[t._v("Made For You")])]),e("li",[e("a",{staticClass:"bold",attrs:{href:"#"}},[t._v("Recently Played")])]),e("li",[e("a",{staticClass:"bold",attrs:{href:"#"}},[t._v("Liked Songs")])]),e("li",[e("a",{staticClass:"bold",attrs:{href:"#"}},[t._v("Albums")])]),e("li",[e("a",{staticClass:"bold",attrs:{href:"#"}},[t._v("Artists")])])])]),e("section",{staticClass:"playlists"},[e("h4",{staticClass:"upper normal"},[t._v("Playlists")]),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("Global Top 50")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Naruto Shippuden OST")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("PES 2010 soundtrack")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"add-playlist"},[e("div",{staticClass:"divider"}),e("p",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-plus"}),e("span",[t._v("New Playlist")])])])])}],c=(e("4160"),e("159b"),{name:"",methods:{activateLink:function(t){document.querySelectorAll(".nav-list li a").forEach((function(t){t.classList.remove("active")})),t.target.classList.add("active")}}}),o=c,u=(e("7be5"),e("2877")),f=Object(u["a"])(o,n,l,!1,null,"201c8d84",null),p=f.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container bg-dark-200",attrs:{id:"main"}},[e("div",{staticClass:"search-line"},[e("div",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-chevron-left",class:{disabled:!t.backword}})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-chevron-right",class:{disabled:!t.forword}})]),e("input",{attrs:{type:"text",id:"search-input",placeholder:"Search"}})]),e("div",[e("button",{staticClass:"upgrade"},[t._v("Upgrade")]),t._m(0),e("a",{staticClass:"dropdown",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.toggleDropDown(s)}}},[t._m(1)])])]),t._m(2),e("section",{staticClass:"short-cuts"},[e("h3",{staticClass:"section-heading"},[t._v("Short Cuts")]),e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1)],1)],1),e("section",{staticClass:"reccomended"},[e("h3",{staticClass:"section-heading"},[t._v("Reccomended")]),e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://lorempixel.com/g/150/150/nature"}})],1)],1)],1),e("section",{staticClass:"reccomended"},[e("h3",{staticClass:"section-heading"},[t._v("Top Of The Week")]),e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://unsplash.it/g/150?random&gravity=center",round:"rounded"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://unsplash.it/g/150?random&gravity=center",round:"rounded"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://unsplash.it/g/150?random&gravity=center",round:"rounded"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://unsplash.it/g/150?random&gravity=center",round:"rounded"}})],1),e("swiper-slide",{staticClass:"box"},[e("music-box",{attrs:{image:"http://unsplash.it/g/150?random&gravity=center",round:"rounded"}})],1)],1)],1)])},d=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"user-account",attrs:{href:"#"}},[e("i",{staticClass:"far fa-user"}),t._v(" ahmdbhgat4 ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("i",{staticClass:"fas fa-chevron-down"},[e("div",{staticClass:"dropdown-menu"},[e("a",{attrs:{href:"#"}},[t._v("Private Session")]),e("a",{attrs:{href:"#"}},[t._v("Account")]),e("a",{attrs:{href:"#"}},[t._v("Upgrade Your Account")]),e("a",{attrs:{href:"#"}},[t._v("Settings")]),e("a",{attrs:{href:"#"}},[t._v("Log Out")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ads"},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"https://dummyimage.com/500x150/333/555.jpg",alt:"ads"}})])])}],v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{attrs:{id:"music-box"}},[e("img",{class:{rounded:t.round},attrs:{src:t.image,alt:"music"}}),e("h4",{staticClass:"name"},[e("a",{attrs:{href:"#"}},[t._v(t._s(t.randName))])]),t.round?t._e():e("div",{staticClass:"info"},[t._m(0),t.collection?e("p",{staticClass:"followers"},[t._v("22,351 "),e("span",{staticClass:"upper"},[t._v("Followers")])]):t._e()])])},h=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("a",{staticClass:"author",attrs:{href:"#"}},[t._v("The Weekend")])])}],_={name:"music-box",props:["image","round"],data:function(){return{singer:!1,music:!0,collection:!0}},computed:{randName:function(){var t=Math.floor(5*Math.random()),s=["quam culpa officia","earum et ullam","fuga numquam eos","modi sint eveniet","quidem molestias molestiae"];return s[t]}}},g=_,b=(e("44b0"),Object(u["a"])(g,v,h,!1,null,null,null)),C=b.exports,w={name:"",components:{MusicBox:C},data:function(){return{backword:!1,forword:!0,swiperOptions:{slidesPerView:3.5,spaceBetween:30,simulateTouch:!0}}},methods:{toggleDropDown:function(t){t.target.classList.contains("active")?(t.target.querySelector(".dropdown-menu").style.cssText="pointer-events: none; opacity: 0",t.target.classList.remove("active")):(t.target.querySelector(".dropdown-menu").style.cssText="pointer-events: auto; opacity: 1",t.target.classList.add("active"))}}},x=w,y=(e("8cfb"),Object(u["a"])(x,m,d,!1,null,"6db8a50e",null)),k=y.exports,E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container bg-dark-100",attrs:{id:"friends"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.availableFriends,expression:"!availableFriends"}],staticClass:"no-friends align-center"},[e("h3",{staticClass:"bold white"},[t._v("See what your friends are playing")]),e("button",{on:{click:function(s){t.availableFriends=!t.availableFriends}}},[t._v("Find Friends")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.availableFriends,expression:"availableFriends"}],staticClass:"with-friends"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])])},$=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user"},[e("img",{attrs:{src:"http://placeskull.com/30",alt:"user"}}),e("div",[e("h4",{staticClass:"username"},[e("a",{attrs:{href:"#"}},[t._v("John Williams")])]),e("p",{staticClass:"followers"},[t._v("Followers: 150")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user"},[e("img",{attrs:{src:"http://placeskull.com/30",alt:"user"}}),e("div",[e("h4",{staticClass:"username"},[e("a",{attrs:{href:"#"}},[t._v("Jake Logan")])]),e("p",{staticClass:"followers"},[t._v("Followers: 67")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user"},[e("img",{attrs:{src:"http://placeskull.com/30",alt:"user"}}),e("div",[e("h4",{staticClass:"username"},[e("a",{attrs:{href:"#"}},[t._v("Jessica Dan")])]),e("p",{staticClass:"followers"},[t._v("Followers: 1017")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user"},[e("img",{attrs:{src:"http://placeskull.com/30",alt:"user"}}),e("div",[e("h4",{staticClass:"username"},[e("a",{attrs:{href:"#"}},[t._v("Jark Anthony")])]),e("p",{staticClass:"followers"},[t._v("Followers: 15")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user"},[e("img",{attrs:{src:"http://placeskull.com/30",alt:"user"}}),e("div",[e("h4",{staticClass:"username"},[e("a",{attrs:{href:"#"}},[t._v("Liam Doe")])]),e("p",{staticClass:"followers"},[t._v("Followers: 506")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user"},[e("img",{attrs:{src:"http://placeskull.com/30",alt:"user"}}),e("div",[e("h4",{staticClass:"username"},[e("a",{attrs:{href:"#"}},[t._v("Josh Washington")])]),e("p",{staticClass:"followers"},[t._v("Followers: 701")])])])}],O={name:"",data:function(){return{availableFriends:!1}}},S=O,F=(e("3088"),Object(u["a"])(S,E,$,!1,null,"002bff18",null)),j=F.exports,P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container bg-dark-300",attrs:{id:"player"}},[e("div",{staticClass:"music"},[t._m(0),t._m(1),e("i",{staticClass:"far fa-heart",class:{fas:t.liked},on:{click:function(s){t.liked=!t.liked}}})]),e("div",{staticClass:"controls"},[e("div",{staticClass:"ctrl"},[t._m(2),t._m(3),e("a",{attrs:{href:"#",id:"play-btn"}},[e("i",{staticClass:"fas",class:{"fa-pause":t.paused,"fa-play":!t.paused},on:{click:function(s){return s.preventDefault(),t.playToggler(s)}}})]),t._m(4),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-sync",staticStyle:{transition:"all 0.5s"},on:{click:function(s){return s.preventDefault(),t.spin(s)}}})])]),e("div",{staticClass:"progress"},[e("span",[t._v("0:00")]),t._v(" "),e("input",{staticClass:"slider",attrs:{type:"range",min:"1",max:t.time_length},domProps:{value:t.progressVal},on:{click:t.progressEffect}}),t._v(" "),e("span",[t._v(t._s(t.min+":"+t.sec))])])]),e("div",{staticClass:"else"},[t._m(5),t._m(6),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas",class:{"fa-volume-mute":t.muted,"fa-volume-up":!t.muted},on:{click:function(s){t.muted=!t.muted}}})]),e("input",{staticClass:"volume",attrs:{type:"range",min:"1",max:"100"}})])])},T=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"pointer",attrs:{href:"#"}},[e("img",{attrs:{src:"http://fakeimg.pl/50/#333?font=lobster",alt:"music_poster"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h4",{staticClass:"music_name"},[e("a",{staticClass:"normal white",attrs:{href:"#"}},[t._v('Fire On Fire - From "Wathership"')])]),e("p",{staticClass:"author"},[e("a",{attrs:{href:"#"}},[t._v("Sam Smith")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-random"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-step-backward"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-step-forward"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-list-ul"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-tablet-alt"})])}],L={name:"",data:function(){return{liked:!1,paused:!1,progressVal:0,time_length:36,sec:"00",min:"0",muted:!0}},computed:{},created:function(){var t=Math.floor(this.time_length/60),s=this.time_length%60;this.min=t,this.sec=s<10?"0"+s:s},methods:{playToggler:function(t){this.paused=!this.paused,t.target.parentElement.nextElementSibling.style.cssText="color: rgba(255,255,255,0.2); pointer-events: none",t.target.parentElement.previousElementSibling.style.cssText="color: rgba(255,255,255,0.2); pointer-events: none"},progressEffect:function(t){this.progressVal=t.target.value},spin:function(t){"rotate(180deg)"==t.target.style.transform?t.target.style.transform="rotate(0deg)":t.target.style.transform="rotate(180deg)"}}},D=L,M=(e("d21d"),Object(u["a"])(D,P,T,!1,null,"72a0ec05",null)),A=M.exports,J={name:"App",components:{Navbar:p,MainContent:k,Friends:j,MusicPlayer:A}},N=J,q=(e("5c0b"),Object(u["a"])(N,r,i,!1,null,null,null)),W=q.exports,V=e("7212"),B=e.n(V);e("bbe3");a["default"].use(B.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";var a=e("9c0c"),r=e.n(a);r.a},7191:function(t,s,e){},"7be5":function(t,s,e){"use strict";var a=e("0504"),r=e.n(a);r.a},"8cfb":function(t,s,e){"use strict";var a=e("4e0e"),r=e.n(a);r.a},"9c0c":function(t,s,e){},b87c:function(t,s,e){},d21d:function(t,s,e){"use strict";var a=e("7191"),r=e.n(a);r.a}});
//# sourceMappingURL=app.018822f2.js.map