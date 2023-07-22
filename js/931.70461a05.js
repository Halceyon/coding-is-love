"use strict";(self["webpackChunkcoding_is_love"]=self["webpackChunkcoding_is_love"]||[]).push([[931],{3467:function(e,t,i){i.d(t,{Z:function(){return o}});var s=i(8025),l=i(7358),a=i(4171),n=i(1472),o=(0,n.Z)(l.Z,a.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const e={...s.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=l.Z.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},3098:function(e,t,i){i.d(t,{EB:function(){return r},Qq:function(){return n},ZB:function(){return o},h7:function(){return a}});var s=i(3467),l=i(5593);const a=(0,l.Ji)("v-card__actions"),n=(0,l.Ji)("v-card__subtitle"),o=(0,l.Ji)("v-card__text"),r=(0,l.Ji)("v-card__title");s.Z},1427:function(e,t,i){i.d(t,{Z:function(){return n}});i(8022);var s=i(4319),l=i(3680),a=i(1566),n=a.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...l.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick((()=>this.inputIndeterminate=e))},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},3945:function(e,t,i){i(3705);var s=i(1472),l=i(5083),a=i(1900);t.Z=(0,s.Z)(l.Z,(0,a.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),i={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(i.valid=t(e)))})):i.valid=t(e),i},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const i=this.watchers.find((e=>e._uid===t._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},2356:function(e,t,i){i(3705),i(7017);var s=i(1508),l=i(3507),a=i(5593);const n=["sm","md","lg","xl"],o=(()=>n.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),r=(()=>n.reduce(((e,t)=>(e["offset"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>n.reduce(((e,t)=>(e["order"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(o),offset:Object.keys(r),order:Object.keys(c)};function u(e,t,i){let s=e;if(null!=i&&!1!==i){if(t){const i=t.replace(e,"");s+=`-${i}`}return"col"!==e||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const m=new Map;t.Z=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:i,children:s,parent:a}){let n="";for(const l in t)n+=String(t[l]);let o=m.get(n);if(!o){let e;for(e in o=[],d)d[e].forEach((i=>{const s=t[i],l=u(e,i,s);l&&o.push(l)}));const i=o.some((e=>e.startsWith("col-")));o.push({col:!i||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),m.set(n,o)}return e(t.tag,(0,l.ZP)(i,{class:o}),s)}})},3026:function(e,t,i){i(3705),i(7017);var s=i(1508),l=i(3507),a=i(5593);const n=["sm","md","lg","xl"],o=["start","end","center"];function r(e,t){return n.reduce(((i,s)=>(i[e+(0,a.jC)(s)]=t(),i)),{})}const c=e=>[...o,"baseline","stretch"].includes(e),d=r("align",(()=>({type:String,default:null,validator:c}))),u=e=>[...o,"space-between","space-around"].includes(e),m=r("justify",(()=>({type:String,default:null,validator:u}))),h=e=>[...o,"space-between","space-around","stretch"].includes(e),p=r("alignContent",(()=>({type:String,default:null,validator:h}))),f={align:Object.keys(d),justify:Object.keys(m),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(e,t,i){let s=b[e];if(null!=i){if(t){const i=t.replace(e,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const Z=new Map;t.Z=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...m,alignContent:{type:String,default:null,validator:h},...p},render(e,{props:t,data:i,children:s}){let a="";for(const l in t)a+=String(t[l]);let n=Z.get(a);if(!n){let e;for(e in n=[],f)f[e].forEach((i=>{const s=t[i],l=v(e,i,s);l&&n.push(l)}));n.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),Z.set(a,n)}return e(t.tag,(0,l.ZP)(i,{staticClass:"row",class:n}),s)}})},5443:function(e,t,i){i(3705);var s=i(3149),l=i(1508);t.Z=l.ZP.extend({name:"rippleable",directives:{ripple:s.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},1566:function(e,t,i){i.d(t,{X:function(){return o}});i(3705);var s=i(3680),l=i(5443),a=i(9383),n=i(1472);function o(e){e.preventDefault()}t.Z=(0,n.Z)(s.Z,l.Z,a.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:o},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const i=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===i&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})},7017:function(){},8022:function(){},5931:function(e,t,i){i.r(t),i.d(t,{default:function(){return W}});var s=i(3467),l=i(3098),a=i(2356),n=i(3026),o=function(){var e=this,t=e._self._c;return t(n.Z,{staticClass:"match-height"},[t(a.Z,{attrs:{cols:"12",md:"6"}},[t(s.Z,[t(l.EB,[e._v("Horizontal Form")]),t(l.ZB,[t("demo-form-layout-horizontal")],1)],1)],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(s.Z,[t(l.EB,[e._v("Horizontal Form with Icons")]),t(l.ZB,[t("demo-form-layout-horizontal-icon")],1)],1)],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(s.Z,[t(l.EB,[e._v("Vertical Form")]),t(l.ZB,[t("demo-form-layout-vertical-form")],1)],1)],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(s.Z,[t(l.EB,[e._v("Vertical Form with Icons")]),t(l.ZB,[t("demo-form-layout-vertical-form-with-icons")],1)],1)],1),t(a.Z,{attrs:{cols:"12"}},[t(s.Z,[t(l.EB,[e._v("Multiple Column")]),t(l.ZB,[t("demo-form-layout-multiple-column")],1)],1)],1)],1)},r=[],c=i(8058),d=i(1427),u=i(3945),m=i(1678),h=function(){var e=this,t=e._self._c;return t(u.Z,[t(n.Z,[t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"firstname"}},[e._v("First Name")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"firstname",outlined:"",dense:"",placeholder:"First Name","hide-details":""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"email"}},[e._v("Email")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"email",outlined:"",dense:"",placeholder:"Email","hide-details":""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"mobile"}},[e._v("Mobile")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"mobile",type:"number",outlined:"",dense:"",placeholder:"Number","hide-details":""},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"password"}},[e._v("Password")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"password",type:"password",outlined:"",dense:"",placeholder:"Password","hide-details":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t(a.Z,{attrs:{"offset-md":"3",cols:"12"}},[t(d.Z,{staticClass:"mt-0",attrs:{label:"Remember me","hide-details":""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1),t(a.Z,{attrs:{"offset-md":"3",cols:"12"}},[t(c.Z,{attrs:{color:"primary"}},[e._v(" Submit ")]),t(c.Z,{staticClass:"mx-2",attrs:{type:"reset",outlined:""}},[e._v(" Reset ")])],1)],1)],1)},p=[],f=i(1508),b={setup(){const e=(0,f.iH)(""),t=(0,f.iH)(""),i=(0,f.iH)(),s=(0,f.iH)(),l=(0,f.iH)(!1);return{firstname:e,email:t,mobile:i,password:s,checkbox:l}}},v=b,Z=i(2242),g=(0,Z.Z)(v,h,p,!1,null,null,null),y=g.exports,k=function(){var e=this,t=e._self._c;return t(u.Z,[t(n.Z,[t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"firstnameHorizontalIcons"}},[e._v("First Name")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"firstnameHorizontalIcons","prepend-inner-icon":e.icons.mdiAccountOutline,outlined:"",dense:"",placeholder:"First Name","hide-details":""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"emailHorizontalIcons"}},[e._v("Email")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"emailHorizontalIcons","prepend-inner-icon":e.icons.mdiEmailOutline,outlined:"",dense:"",placeholder:"Email","hide-details":""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"mobileHorizontalIcons"}},[e._v("Mobile")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"mobileHorizontalIcons",type:"number",outlined:"","prepend-inner-icon":e.icons.mdiCellphone,dense:"",placeholder:"Number","hide-details":""},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),t(a.Z,{attrs:{cols:"12",md:"3"}},[t("label",{attrs:{for:"passwordHorizontalIcons"}},[e._v("Password")])]),t(a.Z,{attrs:{cols:"12",md:"9"}},[t(m.Z,{attrs:{id:"passwordHorizontalIcons","prepend-inner-icon":e.icons.mdiLockOutline,type:"password",outlined:"",dense:"",placeholder:"Password","hide-details":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t(a.Z,{attrs:{"offset-md":"3",cols:"12"}},[t(d.Z,{staticClass:"mt-0",attrs:{label:"Remember me","hide-details":""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1),t(a.Z,{attrs:{"offset-md":"3",cols:"12"}},[t(c.Z,{attrs:{color:"primary"}},[e._v(" Submit ")]),t(c.Z,{staticClass:"mx-2",attrs:{type:"reset",outlined:""}},[e._v(" Reset ")])],1)],1)],1)},x=[],C=i(6992),_={setup(){const e=(0,f.iH)(""),t=(0,f.iH)(""),i=(0,f.iH)(),s=(0,f.iH)(),l=(0,f.iH)(!1);return{firstname:e,email:t,mobile:i,password:s,checkbox:l,icons:{mdiAccountOutline:C.jiR,mdiEmailOutline:C.VAU,mdiCellphone:C.i2F,mdiLockOutline:C.$BC}}}},w=_,B=(0,Z.Z)(w,k,x,!1,null,null,null),S=B.exports,H=function(){var e=this,t=e._self._c;return t(u.Z,[t(m.Z,{attrs:{label:"First Name",outlined:"",dense:"",placeholder:"First Name"},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}}),t(m.Z,{attrs:{label:"Email",type:"email",outlined:"",dense:"",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(m.Z,{attrs:{label:"Mobile",outlined:"",dense:"",type:"number",placeholder:"Number"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),t(m.Z,{attrs:{label:"Password",outlined:"",dense:"",type:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t(d.Z,{staticClass:"mt-0",attrs:{label:"Remember me"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),t(c.Z,{attrs:{color:"primary"}},[e._v(" Submit ")]),t(c.Z,{staticClass:"mx-2",attrs:{type:"reset",outlined:""}},[e._v(" Reset ")])],1)},V=[],$={setup(){const e=(0,f.iH)(""),t=(0,f.iH)(""),i=(0,f.iH)(),s=(0,f.iH)(),l=(0,f.iH)(!1);return{firstname:e,email:t,mobile:i,password:s,checkbox:l}}},I=$,E=(0,Z.Z)(I,H,V,!1,null,null,null),N=E.exports,F=function(){var e=this,t=e._self._c;return t(u.Z,[t(m.Z,{attrs:{"prepend-inner-icon":e.icons.mdiAccountOutline,label:"First Name",outlined:"",dense:"",placeholder:"First Name"},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}}),t(m.Z,{attrs:{"prepend-inner-icon":e.icons.mdiEmailOutline,label:"Email",type:"email",outlined:"",dense:"",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(m.Z,{attrs:{"prepend-inner-icon":e.icons.mdiCellphone,label:"Mobile",outlined:"",dense:"",type:"number",placeholder:"Number"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),t(m.Z,{attrs:{"prepend-inner-icon":e.icons.mdiLockOutline,label:"Password",outlined:"",dense:"",type:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t(d.Z,{staticClass:"mt-0",attrs:{label:"Remember me"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),t(c.Z,{attrs:{color:"primary"}},[e._v(" Submit ")]),t(c.Z,{staticClass:"mx-2",attrs:{type:"reset",outlined:""}},[e._v(" Reset ")])],1)},O=[],j={setup(){const e=(0,f.iH)(""),t=(0,f.iH)(""),i=(0,f.iH)(),s=(0,f.iH)(),l=(0,f.iH)(!1);return{firstname:e,email:t,mobile:i,password:s,checkbox:l,icons:{mdiAccountOutline:C.jiR,mdiEmailOutline:C.VAU,mdiCellphone:C.i2F,mdiLockOutline:C.$BC}}}},A=j,z=(0,Z.Z)(A,F,O,!1,null,null,null),L=z.exports,P=function(){var e=this,t=e._self._c;return t(u.Z,{staticClass:"multi-col-validation"},[t(n.Z,[t(a.Z,{attrs:{cols:"12",md:"6"}},[t(m.Z,{attrs:{label:"First Name",outlined:"",dense:"",placeholder:"First Name","hide-details":""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(m.Z,{attrs:{label:"Last Name",outlined:"",dense:"",placeholder:"Last Name","hide-details":""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(m.Z,{attrs:{label:"Email",outlined:"",dense:"",placeholder:"Email","hide-details":""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(m.Z,{attrs:{label:"City",outlined:"",dense:"",placeholder:"City","hide-details":""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(m.Z,{attrs:{label:"Country",outlined:"",dense:"",placeholder:"Country","hide-details":""},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),t(a.Z,{attrs:{cols:"12",md:"6"}},[t(m.Z,{attrs:{label:"Company",outlined:"",dense:"",placeholder:"Company","hide-details":""},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}})],1),t(a.Z,{attrs:{cols:"12"}},[t(d.Z,{staticClass:"mt-0",attrs:{label:"Remember me","hide-details":""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1),t(a.Z,{attrs:{cols:"12"}},[t(c.Z,{attrs:{color:"primary"}},[e._v(" Submit ")]),t(c.Z,{staticClass:"mx-2",attrs:{type:"reset",outlined:""}},[e._v(" Reset ")])],1)],1)],1)},R=[],D={setup(){const e=(0,f.iH)(""),t=(0,f.iH)(""),i=(0,f.iH)(""),s=(0,f.iH)(""),l=(0,f.iH)(""),a=(0,f.iH)(""),n=(0,f.iH)(!1);return{firstName:e,lastName:t,city:i,country:s,company:l,email:a,checkbox:n}}},M=D,J=(0,Z.Z)(M,P,R,!1,null,null,null),T=J.exports,G={components:{DemoFormLayoutHorizontal:y,DemoFormLayoutHorizontalIcon:S,DemoFormLayoutVerticalForm:N,DemoFormLayoutVerticalFormWithIcons:L,DemoFormLayoutMultipleColumn:T},setup(){return{}}},K=G,U=(0,Z.Z)(K,o,r,!1,null,null,null),W=U.exports}}]);
//# sourceMappingURL=931.70461a05.js.map