webpackJsonp([1],{"4nJI":function(e,r){},"7zck":function(e,r){},EfBJ:function(e,r){},Ist8:function(e,r){},LLK7:function(e,r,s){e.exports=s.p+"static/img/aftertaste-logo.22af1f6.png"},NHnr:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s("7+uW"),a=s("hz7P"),n=(s("UdIB"),s("3EgV")),i=s.n(n),o=(s("7zck"),s("dNzQ")),l=s.n(o),c={data:function(){return{windowSize:{x:NaN,y:NaN}}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}}},computed:{mixinIsMobile:function(){return console.log(this.$vuetify.breakpoint.thresholds.xs),this.windowSize.x<=this.$vuetify.breakpoint.thresholds.xs}}},u={mixins:[c],data:function(){return{drawer:!1,logoUrl:l.a}},methods:{slideTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=this.mixinIsMobile?56:64;console.log(r,this.mixinIsMobile);var s=document.querySelector(e).getBoundingClientRect().top,t=window.pageYOffset+s-r;window.scrollTo({top:t,behavior:"smooth"})}}},v={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"app-header",attrs:{id:"header"}},[s("v-navigation-drawer",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],attrs:{app:"",temporary:""},model:{value:e.drawer,callback:function(r){e.drawer=r},expression:"drawer"}},[s("v-list",{attrs:{dense:""}},[s("v-list-item",{on:{click:function(r){return e.slideTo("#whyus")}}},[s("v-list-item-content",[s("v-list-item-title",[e._v("Why us?")])],1)],1),e._v(" "),s("v-list-item",{on:{click:function(r){return e.slideTo("#about")}}},[s("v-list-item-content",[s("v-list-item-title",[e._v("About")])],1)],1),e._v(" "),s("v-list-item",{on:{click:function(r){return e.slideTo("#signupnow")}}},[s("v-list-item-content",[s("v-list-item-title",[e._v("Sign up now")])],1)],1)],1)],1),e._v(" "),s("v-app-bar",{attrs:{height:e.mixinIsMobile?56:64,app:"",light:""}},[e.mixinIsMobile?s("v-app-bar-nav-icon",{on:{click:function(r){r.stopPropagation(),e.drawer=!e.drawer}}}):e._e(),e._v(" "),s("v-toolbar-title",{staticClass:"title"},[s("v-img",{staticClass:"logo",attrs:{"max-width":"80","max-height":"57",src:e.logoUrl},on:{click:function(r){return e.slideTo("#landing")}}})],1),e._v(" "),s("v-spacer"),e._v(" "),e.mixinIsMobile?e._e():[s("v-btn",{attrs:{text:"",large:"",depressed:""},on:{click:function(r){return e.slideTo("#whyus")}}},[e._v("Why us?")]),e._v(" "),s("v-btn",{attrs:{text:"",large:"",depressed:""},on:{click:function(r){return e.slideTo("#about")}}},[e._v("About")]),e._v(" "),s("v-btn",{attrs:{text:"",large:"",depressed:""},on:{click:function(r){return e.slideTo("#signupnow")}}},[e._v("Sign up now")])]],2)],1)},staticRenderFns:[]};var d=s("VU/8")(u,v,!1,function(e){s("rO+o")},"data-v-1ec9965c",null).exports,p=s("krxu"),f=s.n(p),h={mixins:[c],data:function(){return{ghostKitchenUrl:f.a}},methods:{slideTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=this.mixinIsMobile?56:64;console.log(r,this.mixinIsMobile);var s=document.querySelector(e).getBoundingClientRect().top,t=window.pageYOffset+s-r;window.scrollTo({top:t,behavior:"smooth"})}}},m={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("v-container",{staticClass:"fill-height container",style:{"--bgImage":"url("+e.ghostKitchenUrl+")"},attrs:{id:"landing",fluid:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("div",{staticClass:"landing-text"},[s("div",{staticClass:"landing-title"},[e._v("Aftertaste Cloud Kitchen")]),e._v(" "),s("div",{staticClass:"text-subtitle-1"},[e._v("A whole new way of F&B business")]),e._v(" "),s("div",{staticClass:"text-subtitle-1"},[e._v("Coming to Klang Valley Soon!")]),e._v(" "),s("v-btn",{on:{click:function(r){return e.slideTo("#signupnow")}}},[e._v("Let's talk")])],1)])],1)},staticRenderFns:[]};var b=s("VU/8")(h,m,!1,function(e){s("kR6y")},"data-v-3bdeda7d",null).exports,y=s("LLK7"),g=s.n(y),x={mixins:[c],data:function(){return{logoUrl:g.a}},methods:{slideTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=this.mixinIsMobile?56:64;console.log(r,this.mixinIsMobile);var s=document.querySelector(e).getBoundingClientRect().top,t=window.pageYOffset+s-r;window.scrollTo({top:t,behavior:"smooth"})}}},_={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("v-container",{staticClass:"fill-height container about-container",attrs:{id:"about",fluid:""}},[s("div",{staticClass:"about-wrapper max-width"},[s("v-img",{staticClass:"about-logo",attrs:{src:e.logoUrl,contain:""},on:{click:function(r){return e.slideTo("#landing")}}}),e._v(" "),s("div",{staticClass:"about-desc"},[s("span",[e._v("Aftertaste cloud kitchen will be a subscription-based, fully equipped\n        kitchen that helps our clients to operate delivery-only restaurants.\n        Our mission is to create an ecosystem that empowers the sustainable\n        growth of delivery-only kitchens.")]),e._v(" "),s("v-btn",{staticClass:"about-button",on:{click:function(r){return e.slideTo("#signupnow")}}},[e._v("Let's talk")])],1)],1)])},staticRenderFns:[]};var k=s("VU/8")(x,_,!1,function(e){s("Ist8")},"data-v-6580c0a6",null).exports,A=s("P+JG"),w=s.n(A),T=s("s3bp"),B=s.n(T),E=s("ubHr"),C=s.n(E),N={data:function(){return{cookingUrl:w.a,choiceUrl:B.a,graphUrl:C.a}}},S={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("v-container",{staticClass:"fill-height container whyus-container",attrs:{id:"whyus",fluid:""}},[s("div",{staticClass:"whyus-title"},[e._v("Why Us?")]),e._v(" "),s("div",{staticClass:"whyus-wrapper max-width"},[s("div",{staticClass:"whyus-card"},[s("v-img",{staticClass:"card-img",attrs:{src:e.cookingUrl,"aspect-ratio":"1",contain:""}}),e._v(" "),s("div",{staticClass:"card-title"},[e._v("Focus on What Matters")]),e._v(" "),s("div",{staticClass:"card-desc"},[e._v("\n        We take care of your investment needs so that you only need to focus\n        on making delicious food , and going by our slogan, creating the\n        aftertaste for customers.\n      ")])],1),e._v(" "),s("div",{staticClass:"whyus-card card"},[s("v-img",{staticClass:"card-img",attrs:{src:e.choiceUrl,"aspect-ratio":"1",contain:""}}),e._v(" "),s("div",{staticClass:"card-title"},[e._v("Become demand-centric")]),e._v(" "),s("div",{staticClass:"card-desc"},[e._v("\n        Flexibility is what makes our offer special. You could pivot your F&B\n        menu in a swift manner to cater to customer demand. Alternatively, you\n        could operate different restaurants from the same kitchen too.\n      ")])],1),e._v(" "),s("div",{staticClass:"whyus-card"},[s("v-img",{staticClass:"card-img",attrs:{src:e.graphUrl,"aspect-ratio":"1",contain:""}}),e._v(" "),s("div",{staticClass:"card-title"},[e._v("Enhance profitability")]),e._v(" "),s("div",{staticClass:"card-desc"},[e._v("\n        With cloud kitchen you will be able to optimize your costs because you\n        could now deploy your capital to hiring talented chefs and\n        experimenting with different recipe s, rather than spending it on\n        renovation and equipment purchase.\n      ")])],1)])])},staticRenderFns:[]};var R=s("VU/8")(N,S,!1,function(e){s("EfBJ")},"data-v-123c32f5",null).exports,F=s("Gu7T"),M=s.n(F),U=s("Xxa5"),I=s.n(U),z=s("mvHQ"),q=s.n(z),P=s("exGp"),K=s.n(P),L={mixins:[c],data:function(){return{valid:!0,email:"",lastname:"",firstname:"",phone:"",company:"",businessType:[],otherBusinessType:"",businessTypeErrorMsg:"",fNBType:[],otherFNBType:"",fNBTypeErrorMsg:"",serveArea:[],otherServeArea:"",serveAreaError:"",phoneRules:[function(e){return!!e||"Phone is required"}],companyRules:[function(e){return!!e||"Company is required"}],nameRules:[function(e){return!!e||"Name is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{submit:function(e){var r=this;return K()(I.a.mark(function s(){var t,a;return I.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t="https://ca2bdh2iqd.execute-api.ap-southeast-1.amazonaws.com/default/postContactDetails",r.next=3,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:q()(e)});case 3:return a=r.sent,console.log("response",a),r.abrupt("return",a.json());case 6:case"end":return r.stop()}},s,r)}))()},handleSubmit:function(){var e=this;return K()(I.a.mark(function r(){var s,t;return I.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(s=[!e.$refs.form.validate(),e.isBusinessTypeError,e.isFNBTypeError,e.isServeAreaError],e.$refs.form.validate(),console.log("this.isFNBTypeError",e.isFNBTypeError),e.isBusinessTypeError&&(e.businessTypeErrorMsg="Please select your business"),e.isFNBTypeError&&(e.fNBTypeErrorMsg="Please select your F&B business"),e.isServeAreaError&&(e.serveAreaError="Please select your area"),!s.some(function(e){return e})){r.next=8;break}return r.abrupt("return");case 8:return t={firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,company:e.company,businessType:[].concat(M()(e.businessType),[e.otherBusinessType]),fNBType:[].concat(M()(e.fNBType),[e.otherFNBType]),serveArea:[].concat(M()(e.serveArea),[e.otherServeArea])},r.next=11,e.submit(t);case 11:e.$swal("Your request has been submited!");case 12:case"end":return r.stop()}},r,e)}))()}},computed:{isBusinessTypeError:function(){return!this.businessType.length&&!this.otherBusinessType},isFNBTypeError:function(){return!this.fNBType.length&&!this.otherFNBType},isServeAreaError:function(){return!this.serveArea.length&&!this.otherServeArea}}},W={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("v-container",{staticClass:"fill-height container signupnow-container",attrs:{id:"signupnow",fluid:""}},[s("div",{staticClass:"title-wrapper"},[s("div",{staticClass:"title-text"},[e._v("Let’s talk")]),e._v(" "),s("div",{staticClass:"text-subtitle-1"},[e._v("\n      Leave your contact details below and we can kick start our process\n    ")])]),e._v(" "),s("v-form",{ref:"form",staticClass:"form-wrapper max-width",model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{rules:e.nameRules,label:"First name",required:""},model:{value:e.firstname,callback:function(r){e.firstname=r},expression:"firstname"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{rules:e.nameRules,label:"Last name",required:""},model:{value:e.lastname,callback:function(r){e.lastname=r},expression:"lastname"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone",required:""},model:{value:e.phone,callback:function(r){e.phone=r},expression:"phone"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{rules:e.companyRules,label:"Company ('NA' if none)",required:""},model:{value:e.company,callback:function(r){e.company=r},expression:"company"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"text-subtitle-1"},[e._v("\n            What type of business are you? (select all that applies)\n          ")])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-checkbox",{attrs:{label:"Aspiring F&B business",value:"Aspiring F&B business","error-messages":e.isBusinessTypeError&&e.businessTypeErrorMsg||""},model:{value:e.businessType,callback:function(r){e.businessType=r},expression:"businessType"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Existing F&B business",value:"Existing F&B business","error-messages":e.isBusinessTypeError&&e.businessTypeErrorMsg||""},model:{value:e.businessType,callback:function(r){e.businessType=r},expression:"businessType"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Restaurant chain",value:"Restaurant chain","error-messages":e.isBusinessTypeError&&e.businessTypeErrorMsg||""},model:{value:e.businessType,callback:function(r){e.businessType=r},expression:"businessType"}}),e._v(" "),s("v-text-field",{attrs:{label:"Others (Please specify)"},model:{value:e.otherBusinessType,callback:function(r){e.otherBusinessType=r},expression:"otherBusinessType"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"text-subtitle-1"},[e._v("\n            What type of F&B business are you looking at? (select all that\n            applies)\n          ")])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-checkbox",{attrs:{label:"Chinese",value:"Chinese","error-messages":e.isFNBTypeError&&e.fNBTypeErrorMsg||""},model:{value:e.fNBType,callback:function(r){e.fNBType=r},expression:"fNBType"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Indian",value:"Indian","error-messages":e.isFNBTypeError&&e.fNBTypeErrorMsg||""},model:{value:e.fNBType,callback:function(r){e.fNBType=r},expression:"fNBType"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Malay halal",value:"Malay halal","error-messages":e.isFNBTypeError&&e.fNBTypeErrorMsg||""},model:{value:e.fNBType,callback:function(r){e.fNBType=r},expression:"fNBType"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Bakery",value:"Bakery","error-messages":e.isFNBTypeError&&e.fNBTypeErrorMsg||""},model:{value:e.fNBType,callback:function(r){e.fNBType=r},expression:"fNBType"}}),e._v(" "),s("v-text-field",{attrs:{label:"Others (Please specify)"},model:{value:e.otherBusinessType,callback:function(r){e.otherBusinessType=r},expression:"otherBusinessType"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"text-subtitle-1"},[e._v("\n            Which areas (within Klang Valley) are you looking to serve?\n            (select all that applies)\n          ")])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-checkbox",{attrs:{label:"I’m not sure yet",value:"I’m not sure yet","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Bandar Utama",value:"Bandar Utama","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Bangsar",value:"Bangsar","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Bukit Bintang",value:"Bukit Bintang","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Bukit Jalil",value:"Bukit Jalil","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Cheras",value:"Cheras","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Cyberjaya",value:"Cyberjaya","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Kepong",value:"Kepong","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Kota Damansara",value:"Kota Damansara","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Mont Kiara",value:"Mont Kiara","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Puchong",value:"Puchong","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-checkbox",{attrs:{label:"Subang Jaya",value:"Subang Jaya","error-messages":e.isServeAreaError&&e.serveAreaError||""},model:{value:e.serveArea,callback:function(r){e.serveArea=r},expression:"serveArea"}}),e._v(" "),s("v-text-field",{attrs:{label:"Others (Please specify)"},model:{value:e.otherServeArea,callback:function(r){e.otherServeArea=r},expression:"otherServeArea"}})],1)],1),e._v(" "),s("v-row",{attrs:{justify:"center"}},[s("v-btn",{on:{click:e.handleSubmit}},[e._v("submit")])],1)],1)],1)],1)},staticRenderFns:[]};var J={components:{Header:d,Landing:b,WhyUs:R,SignUpNow:s("VU/8")(L,W,!1,function(e){s("sRjD")},"data-v-752b2402",null).exports,About:k}},O={render:function(){var e=this.$createElement,r=this._self._c||e;return r("v-app",[r("Header"),this._v(" "),r("v-main",[r("Landing"),this._v(" "),r("About"),this._v(" "),r("WhyUs"),this._v(" "),r("SignUpNow")],1),this._v(" "),r("footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var $=s("VU/8")(J,O,!1,function(e){s("4nJI")},null,null).exports;t.default.use(a.a),t.default.use(i.a),t.default.config.productionTip=!1,new t.default({el:"#app",vuetify:new i.a({icons:{iconfont:"mdiSvg"}}),components:{App:$},template:"<App/>"})},"P+JG":function(e,r,s){e.exports=s.p+"static/img/cooking.4324b95.png"},UdIB:function(e,r){},dNzQ:function(e,r,s){e.exports=s.p+"static/img/aftertaste-logo-variation-3.a335028.png"},kR6y:function(e,r){},krxu:function(e,r,s){e.exports=s.p+"static/img/ghostKitchen-lead.1eea28d.jpg"},"rO+o":function(e,r){},s3bp:function(e,r,s){e.exports=s.p+"static/img/choice.b9b9884.png"},sRjD:function(e,r){},ubHr:function(e,r,s){e.exports=s.p+"static/img/graph.aec6ecd.png"}},["NHnr"]);
//# sourceMappingURL=app.b1e47a229f14f8e04ca6.js.map