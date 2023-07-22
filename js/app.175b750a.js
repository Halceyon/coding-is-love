(function(){var t={9405:function(t,e,n){"use strict";var r=n(1508),a=function(){var t=this,e=t._self._c;return e(t.resolveLayout,{tag:"component"},[e("router-view")],1)},i=[];const o=()=>{const t=(0,r.FN)().proxy,e=(0,r.qj)({route:t.$route});return(0,r.YP)((()=>t.$route),(t=>{e.route=t})),{...(0,r.BK)(e),router:t.$router}};var s=n(8312),l=n(2099),c=function(){var t=this,e=t._self._c;return e(s.Z,[e(l.Z,[e("router-view")],1)],1)},u=[],d={},m=d,p=n(2242),f=(0,p.Z)(m,c,u,!1,null,null,null),v=f.exports,h=n(2585),g=n(4901),b=n(8058),y=n(2645),_=n(1301),C=n(3484),Z=n(1678),k=function(){var t=this,e=t._self._c;return e(s.Z,[e("vertical-nav-menu",{attrs:{"is-drawer-open":t.isDrawerOpen},on:{"update:isDrawerOpen":function(e){t.isDrawerOpen=e},"update:is-drawer-open":function(e){t.isDrawerOpen=e}}}),e(h.Z,{attrs:{app:"",flat:"",absolute:"",color:"transparent"}},[e("div",{staticClass:"boxed-container w-full"},[e("div",{staticClass:"d-flex align-center mx-6"},[e(g.Z,{staticClass:"d-block d-lg-none me-2",on:{click:function(e){t.isDrawerOpen=!t.isDrawerOpen}}}),e(Z.Z,{staticClass:"app-bar-search flex-grow-0",attrs:{rounded:"",dense:"",outlined:"","prepend-inner-icon":t.icons.mdiMagnify,"hide-details":""}}),e(C.Z),e("a",{attrs:{href:"https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free",target:"_blank",rel:"nofollow"}},[e(_.Z,{staticClass:"ms-6 me-4"},[t._v(" "+t._s(t.icons.mdiGithub)+" ")])],1),e("theme-switcher"),e(b.Z,{staticClass:"ms-3",attrs:{icon:"",small:""}},[e(_.Z,[t._v(" "+t._s(t.icons.mdiBellOutline)+" ")])],1),e("app-bar-user-menu")],1)])]),e(l.Z,[e("div",{staticClass:"app-content-container boxed-container pa-6"},[t._t("default")],2)]),e(y.Z,{staticClass:"px-0",attrs:{app:"",inset:"",color:"transparent",absolute:"",height:"56"}},[e("div",{staticClass:"boxed-container w-full"},[e("div",{staticClass:"mx-6 d-flex justify-space-between"},[e("span",[t._v(" © 2021 "),e("a",{staticClass:"text-decoration-none",attrs:{href:"https://themeselection.com",target:"_blank"}},[t._v("ThemeSelection")])]),e("span",{staticClass:"d-sm-inline d-none"},[e("a",{staticClass:"me-6 text--secondary text-decoration-none",attrs:{href:"https://themeselection.com/products/category/download-free-admin-templates/",target:"_blank"}},[t._v("Freebies")]),e("a",{staticClass:"me-6 text--secondary text-decoration-none",attrs:{href:"https://themeselection.com/blog/",target:"_blank"}},[t._v("Blog")]),e("a",{staticClass:"text--secondary text-decoration-none",attrs:{href:"https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/blob/main/LICENSE",target:"_blank"}},[t._v("MIT Licence")])])])])])],1)},x=[],O=n(6992),w=n(9532),F=n(7063),S=n(9672),P=n(5162),A=function(){var t=this,e=t._self._c;return e(S.Z,{staticClass:"app-navigation-menu",attrs:{value:t.isDrawerOpen,app:"",floating:"",width:"260",right:t.$vuetify.rtl},on:{input:e=>t.$emit("update:is-drawer-open",e)}},[e("div",{staticClass:"vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2"},[e("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:"/"}},[e(w.Z,{staticClass:"app-logo me-3",attrs:{src:n(3183),"max-height":"30px","max-width":"30px",alt:"logo",contain:"",eager:""}}),e(P.Qn,[e("h2",{staticClass:"app-title text--primary"},[t._v(" Coding is ♥ ")])])],1)],1),e(F.Z,{staticClass:"vertical-nav-menu-items pr-5",attrs:{expand:"",shaped:""}},[e("nav-menu-link",{attrs:{title:"Dashboard",to:{name:"dashboard"},icon:t.icons.mdiHomeOutline}}),e("nav-menu-link",{attrs:{title:"Account Settings",to:{name:"pages-account-settings"},icon:t.icons.mdiAccountCogOutline}}),e("nav-menu-group",{attrs:{title:"Pages",icon:t.icons.mdiFileOutline}},[e("nav-menu-link",{attrs:{title:"Login",to:{name:"pages-login"},target:"_blank"}}),e("nav-menu-link",{attrs:{title:"Register",to:{name:"pages-register"},target:"_blank"}}),e("nav-menu-link",{attrs:{title:"Error",to:{name:"error-404"},target:"_blank"}})],1),e("nav-menu-section-title",{attrs:{title:"USER INTERFACE"}}),e("nav-menu-link",{attrs:{title:"Typography",to:{name:"typography"},icon:t.icons.mdiAlphaTBoxOutline}}),e("nav-menu-link",{attrs:{title:"Icons",to:{name:"icons"},icon:t.icons.mdiEyeOutline}}),e("nav-menu-link",{attrs:{title:"Cards",to:{name:"cards"},icon:t.icons.mdiCreditCardOutline}}),e("nav-menu-link",{attrs:{title:"Tables",to:{name:"simple-table"},icon:t.icons.mdiTable}}),e("nav-menu-link",{attrs:{title:"Form Layouts",to:{name:"form-layouts"},icon:t.icons.mdiFormSelect}})],1),e("a",{attrs:{href:"https://themeselection.com/products/materio-vuetify-vuejs-admin-template",target:"_blank",rel:"nofollow"}},[e(w.Z,{staticClass:"upgrade-banner mx-auto",attrs:{src:n(9422)(`./upgrade-banner-${t.$vuetify.theme.dark?"dark":"light"}.png`),alt:"upgrade-banner",transition:"scale-transition","max-width":"230"}})],1)],1)},E=[],j=n(6093),T=function(){var t=this,e=t._self._c;return e(j.Z,[e("span",{staticClass:"title-wrapper"},[e("span",[t._v(t._s(t.title))])])])},D=[],L={props:{title:{type:String,required:!0}}},N=L,B=(0,p.Z)(N,T,D,!1,null,"f0ff47be",null),V=B.exports,M=n(2119),$=n(4868),I=function(){var t=this,e=t._self._c;return e(M.Z,{ref:"refVListGroup",staticClass:"vertical-nav-menu-group text--primary",scopedSlots:t._u([{key:"prependIcon",fn:function(){return[e(_.Z,{class:{"alternate-icon-small":!t.icon}},[t._v(" "+t._s(t.icon)+" ")])]},proxy:!0},{key:"activator",fn:function(){return[e($.V9,[t._v(" "+t._s(t.title)+" ")])]},proxy:!0}])},[t._t("default")],2)},z=[],U={props:{title:{type:String,required:!0},icon:{type:String,required:!0}},setup(){return{}}},q=U,G=(0,p.Z)(q,I,z,!1,null,null,null),H=G.exports,W=n(3377),R=n(3142),Q=function(){var t=this,e=t._self._c;return e(W.Z,t._b({staticClass:"vertical-nav-menu-link",attrs:{"active-class":"bg-gradient-primary white--text"}},"v-list-item",t.$attrs,!1),[e(R.Z,[e(_.Z,{staticClass:"mx-auto",class:{"alternate-icon-small":!t.icon}},[t._v(" "+t._s(t.icon||t.alternateIcon)+" ")])],1),e($.V9,[t._v(" "+t._s(t.title)+" ")])],1)},J=[],K={props:{title:{type:String,required:!0},icon:{type:String,default:void 0}},setup(){return{alternateIcon:O.Ws4}}},X=K,Y=(0,p.Z)(X,Q,J,!1,null,"414b5d6a",null),tt=Y.exports,et={components:{NavMenuSectionTitle:V,NavMenuGroup:H,NavMenuLink:tt},props:{isDrawerOpen:{type:Boolean,default:null}},setup(){return{icons:{mdiHomeOutline:O.C1V,mdiAlphaTBoxOutline:O.IkO,mdiEyeOutline:O._VZ,mdiCreditCardOutline:O.pDq,mdiTable:O._sG,mdiFileOutline:O.FA_,mdiFormSelect:O.rjP,mdiAccountCogOutline:O.PrU}}}},nt=et,rt=(0,p.Z)(nt,A,E,!1,null,"199a6898",null),at=rt.exports,it=function(){var t=this,e=t._self._c;return e(P.Z5,{attrs:{mode:"out-in"}},[e(_.Z,{key:t.$vuetify.theme.dark,on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[t._v(" "+t._s(t.$vuetify.theme.dark?t.icons.mdiWeatherSunny:t.icons.mdiWeatherNight)+" ")])],1)},ot=[],st={setup(){return{icons:{mdiWeatherNight:O.j0g,mdiWeatherSunny:O.bFF}}}},lt=st,ct=(0,p.Z)(lt,it,ot,!1,null,null,null),ut=ct.exports,dt=n(3934),mt=n(2559),pt=n(3404),ft=n(203),vt=n(8366),ht=function(){var t=this,e=t._self._c;return e(vt.Z,{attrs:{"offset-y":"",left:"","nudge-bottom":"14","min-width":"230","content-class":"user-profile-menu-content"},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:a}){return[e(mt.Z,{staticClass:"ms-4",attrs:{bottom:"",color:"success",overlap:"","offset-x":"12","offset-y":"12",dot:""}},[e(dt.Z,t._g(t._b({attrs:{size:"40px"}},"v-avatar",a,!1),r),[e(w.Z,{attrs:{src:n(6843)}})],1)],1)]}}])},[e(F.Z,[e("div",{staticClass:"pb-3 pt-2"},[e(mt.Z,{staticClass:"ms-4",attrs:{bottom:"",color:"success",overlap:"","offset-x":"12","offset-y":"12",dot:""}},[e(dt.Z,{attrs:{size:"40px"}},[e(w.Z,{attrs:{src:n(6843)}})],1)],1),e("div",{staticClass:"d-inline-flex flex-column justify-center ms-3",staticStyle:{"vertical-align":"middle"}},[e("span",{staticClass:"text--primary font-weight-semibold mb-n1"},[t._v(" John Doe ")]),e("small",{staticClass:"text--disabled text-capitalize"},[t._v("Admin")])])],1),e(pt.Z),e(W.Z,{attrs:{link:""}},[e(R.Z,{staticClass:"me-2"},[e(_.Z,{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiAccountOutline)+" ")])],1),e($.km,[e($.V9,[t._v("Profile")])],1)],1),e(W.Z,{attrs:{link:""}},[e(R.Z,{staticClass:"me-2"},[e(_.Z,{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiEmailOutline)+" ")])],1),e($.km,[e($.V9,[t._v("Inbox")])],1)],1),e(W.Z,{attrs:{link:""}},[e(R.Z,{staticClass:"me-2"},[e(_.Z,{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiChatOutline)+" ")])],1),e($.km,[e($.V9,[t._v("Chat")])],1),e(ft.Z,[e(mt.Z,{attrs:{inline:"",color:"error",content:"2"}})],1)],1),e(pt.Z,{staticClass:"my-2"}),e(W.Z,{attrs:{link:""}},[e(R.Z,{staticClass:"me-2"},[e(_.Z,{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiCogOutline)+" ")])],1),e($.km,[e($.V9,[t._v("Settings")])],1)],1),e(W.Z,{attrs:{link:""}},[e(R.Z,{staticClass:"me-2"},[e(_.Z,{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiCurrencyUsd)+" ")])],1),e($.km,[e($.V9,[t._v("Pricing")])],1)],1),e(W.Z,{attrs:{link:""}},[e(R.Z,{staticClass:"me-2"},[e(_.Z,{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiHelpCircleOutline)+" ")])],1),e($.km,[e($.V9,[t._v("FAQ")])],1)],1),e(pt.Z,{staticClass:"my-2"}),e(W.Z,{attrs:{link:""}},[e(R.Z,{staticClass:"me-2"},[e(_.Z,{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiLogoutVariant)+" ")])],1),e($.km,[e($.V9,[t._v("Logout")])],1)],1)],1)],1)},gt=[],bt={setup(){return{icons:{mdiAccountOutline:O.jiR,mdiEmailOutline:O.VAU,mdiCheckboxMarkedOutline:O.$Cb,mdiChatOutline:O.doy,mdiCogOutline:O.eYM,mdiCurrencyUsd:O.c_b,mdiHelpCircleOutline:O.Gir,mdiLogoutVariant:O.JXX}}}},yt=bt,_t=(0,p.Z)(yt,ht,gt,!1,null,null,null),Ct=_t.exports,Zt={components:{VerticalNavMenu:at,ThemeSwitcher:ut,AppBarUserMenu:Ct},setup(){const t=(0,r.iH)(null);return{isDrawerOpen:t,icons:{mdiMagnify:O.I0v,mdiBellOutline:O.QWc,mdiGithub:O.LcO}}}},kt=Zt,xt=(0,p.Z)(kt,k,x,!1,null,"3bf00ba4",null),Ot=xt.exports,wt={components:{LayoutBlank:v,LayoutContent:Ot},setup(){const{route:t}=o(),e=(0,r.Fl)((()=>null===t.value.name?null:"blank"===t.value.meta.layout?"layout-blank":"layout-content"));return{resolveLayout:e}}},Ft=wt,St=(0,p.Z)(Ft,a,i,!1,null,null,null),Pt=St.exports,At=n(5250);n(2176);var Et={theme:{themes:{light:{primary:"#9155FD",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"},dark:{primary:"#9155FD",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"}}}};r.ZP.use(At.Z);var jt=new At.Z({preset:Et,icons:{iconfont:"mdiSvg"},theme:{options:{customProperties:!0,variations:!1}}}),Tt=n(8842);r.ZP.use(Tt.ZP);const Dt=[{path:"/",redirect:"dashboard"},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([n.e(528),n.e(989),n.e(30)]).then(n.bind(n,8464))},{path:"/typography",name:"typography",component:()=>n.e(391).then(n.bind(n,6391))},{path:"/icons",name:"icons",component:()=>n.e(554).then(n.bind(n,2554))},{path:"/cards",name:"cards",component:()=>Promise.all([n.e(555),n.e(416)]).then(n.bind(n,3416))},{path:"/simple-table",name:"simple-table",component:()=>Promise.all([n.e(989),n.e(745)]).then(n.bind(n,8745))},{path:"/form-layouts",name:"form-layouts",component:()=>n.e(931).then(n.bind(n,5931))},{path:"/pages/account-settings",name:"pages-account-settings",component:()=>Promise.all([n.e(555),n.e(528),n.e(606)]).then(n.bind(n,2126))},{path:"/pages/login",name:"pages-login",component:()=>Promise.all([n.e(912),n.e(833)]).then(n.bind(n,3054)),meta:{layout:"blank"}},{path:"/pages/register",name:"pages-register",component:()=>Promise.all([n.e(912),n.e(442)]).then(n.bind(n,1537)),meta:{layout:"blank"}},{path:"/error-404",name:"error-404",component:()=>n.e(569).then(n.bind(n,7569)),meta:{layout:"blank"}},{path:"*",redirect:"error-404"}],Lt=new Tt.ZP({mode:"history",base:"/",routes:Dt});var Nt=Lt,Bt=n(8836);r.ZP.use(Bt.ZP);var Vt=new Bt.ZP.Store({state:{},mutations:{},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:Nt,store:Vt,vuetify:jt,render:t=>t(Pt)}).$mount("#app")},2176:function(t,e,n){"use strict";n.r(e)},9422:function(t,e,n){var r={"./upgrade-banner-dark.png":8449,"./upgrade-banner-light.png":6743};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id=9422},3183:function(t,e,n){"use strict";t.exports=n.p+"img/logo.7bb0bd72.svg"},6843:function(t,e,n){"use strict";t.exports=n.p+"img/1.d5a41fee.png"},8449:function(t,e,n){"use strict";t.exports=n.p+"img/upgrade-banner-dark.3a941628.png"},6743:function(t,e,n){"use strict";t.exports=n.p+"img/upgrade-banner-light.5edced48.png"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{30:"994ac900",391:"8a1fbc59",416:"86989d02",442:"8f3882a1",528:"c56d9c88",554:"d93c7ee2",555:"060d3013",569:"89e6e997",606:"fc4674ac",745:"4ea39344",833:"ad092469",912:"b23d618f",931:"70461a05",989:"1b7f57f1"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{30:"da1d2264",391:"b35a86f1",416:"f9f86f29",442:"0e9e8679",554:"49a476a4",555:"a73d4ea7",569:"53180180",606:"5476cb62",833:"0e9e8679",931:"b624b48d",989:"1d44b72a"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="coding-is-love:";n.l=function(r,a,i,o){if(t[r])t[r].push(a);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[a];var m=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,i.parentNode&&i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=o,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],i=a.getAttribute("data-href");if(i===t||i===e)return a}},r=function(r){return new Promise((function(a,i){var o=n.miniCssF(r),s=n.p+o;if(e(o,s))return a();t(r,s,null,a,i)}))},a={143:0};n.f.miniCss=function(t,e){var n={30:1,391:1,416:1,442:1,554:1,555:1,569:1,606:1,833:1,931:1,989:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else if(989!=e){var i=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(e),s=new Error,l=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};n.l(o,l,"chunk-"+e,e)}else t[e]=0},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(e&&e(r);c<o.length;c++)i=o[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkcoding_is_love"]=self["webpackChunkcoding_is_love"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9405)}));r=n.O(r)})();
//# sourceMappingURL=app.175b750a.js.map