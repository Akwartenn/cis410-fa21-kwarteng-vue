(function(t){function e(e){for(var r,c,l=e[0],s=e[1],u=e[2],b=0,j=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&j.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(j.length)j.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var i=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container-fluid"},a={class:"row justify-content-center"},c=Object(r["g"])("div",{class:"col-md-10 col-lg-7"},null,-1);function l(t,e,n,l,s,u){var i=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["g"])("div",o,[Object(r["g"])("div",a,[c,Object(r["i"])(b)])])],64)}var s=function(t){return Object(r["u"])("data-v-1bd9fc8a"),t=t(),Object(r["s"])(),t},u={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},b=Object(r["h"])("Hotel Reviews"),j=s((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),O={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav ms-auto"},m={class:"nav-item"},d=Object(r["h"])("Hotel Rooms"),g={key:0,class:"nav-item"},f=Object(r["h"])("My Account"),h={key:1,class:"nav-item"},v=s((function(){return Object(r["g"])("button",{class:"btn-warning"},"Log in",-1)})),y={key:2,class:"nav-item"},w=s((function(){return Object(r["g"])("button",{class:"btn-outline-warning text-dark"}," Sign Up ",-1)})),k={key:3,class:"nav-item"};function R(t,e,n,o,a,c){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",u,[Object(r["g"])("div",i,[Object(r["i"])(l,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),j,Object(r["g"])("div",O,[Object(r["g"])("ul",p,[Object(r["g"])("li",m,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/rooms"},{default:Object(r["E"])((function(){return[d]})),_:1})]),c.auth?(Object(r["r"])(),Object(r["f"])("li",g,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(r["E"])((function(){return[f]})),_:1})])):Object(r["e"])("",!0),c.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",h,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[v]})),_:1})])),c.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",y,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[w]})),_:1})])),c.auth?(Object(r["r"])(),Object(r["f"])("li",k,[Object(r["g"])("button",{class:"btn-warning",onClick:e[0]||(e[0]=function(){return c.PleaseLogout&&c.PleaseLogout.apply(c,arguments)})},"Log out")])):Object(r["e"])("",!0)])])])])}var A={computed:{auth:function(){return this.$store.state.token}},methods:{PleaseLogout:function(){this.$store.dispatch("logout")}}},x=(n("ee22"),n("6b0d")),E=n.n(x);const S=E()(A,[["render",R],["__scopeId","data-v-1bd9fc8a"]]);var F=S,P={name:"App",components:{"my-header":F},created:function(){this.$store.dispatch("getRooms")}};n("a637");const $=E()(P,[["render",l]]);var N=$,U=n("bc3a"),C=n.n(U),_=n("6c02"),H=Object(r["g"])("h1",null,"Home",-1),L=[H];function M(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",null,L)}var q={};const T=E()(q,[["render",M]]);var V=T,I=Object(r["g"])("h1",null,"Log in",-1),K={key:0,class:"alert alert-success"},B={class:"mb-3"},z=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),D={class:"mb-3"},G=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),J=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},W={key:1,class:"form-text text-danger"};function X(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",null,[I,this.$route.query.signupsuccess?(Object(r["r"])(),Object(r["f"])("div",K," Thanks for signing up, please log in now. ")):Object(r["e"])("",!0)]),Object(r["g"])("form",{onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",B,[z,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.email=t})},null,512),[[r["C"],a.email]])]),Object(r["g"])("div",D,[G,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.password=t})},null,512),[[r["C"],a.password]])]),J,a.credentialsError?(Object(r["r"])(),Object(r["f"])("p",Q," Invalid Credentials ")):Object(r["e"])("",!0),a.loginError?(Object(r["r"])(),Object(r["f"])("p",W," Could not log you in, Please try again later ")):Object(r["e"])("",!0)],32)],64)}n("ac1f"),n("5319");var Y={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var t=this,e={email:this.email,password:this.password};C.a.post("/guests/login",e).then((function(e){t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),t.$router.replace("/account")})).catch((function(e){401===e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const Z=E()(Y,[["render",X]]);var tt=Z,et=Object(r["g"])("h1",null,"Hotel Rooms",-1),nt=Object(r["g"])("hr",null,null,-1),rt={class:"table"},ot=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Hotel"),Object(r["g"])("th",null,"Room Type"),Object(r["g"])("th",null,"Floor Number"),Object(r["g"])("th")])],-1),at=Object(r["g"])("button",{class:"btn btn-primary"},"Details",-1);function ct(t,e,n,o,a,c){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[et,nt,Object(r["g"])("table",rt,[ot,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(c.theRooms,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.RoomPK},[Object(r["g"])("th",null,Object(r["A"])(t.HotelName),1),Object(r["g"])("th",null,Object(r["A"])(t.RoomType),1),Object(r["g"])("th",null,Object(r["A"])(t.FloorNumber),1),Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/rooms/".concat(t.RoomPK)},{default:Object(r["E"])((function(){return[at]})),_:2},1032,["to"])])])})),128))])])])}var lt={computed:{theRooms:function(){return this.$store.state.rooms}}};const st=E()(lt,[["render",ct]]);var ut=st,it={class:"card"},bt={class:"card-body"},jt={class:"text-primary"},Ot=Object(r["g"])("br",null,null,-1),pt=Object(r["h"])(" Hotel ID: "),mt=Object(r["g"])("br",null,null,-1),dt=Object(r["h"])(" Room Type: "),gt=Object(r["g"])("br",null,null,-1),ft=Object(r["h"])(" Floor Number "),ht=Object(r["g"])("br",null,null,-1),vt=Object(r["h"])(" Hotel Star "),yt=Object(r["g"])("br",null,null,-1),wt=Object(r["g"])("button",{class:"btn btn-success"},"Add a Review",-1),kt=Object(r["g"])("button",{class:"btn btn-outline-success"},"Sign In to Add a Review",-1),Rt=Object(r["g"])("br",null,null,-1),At=Object(r["g"])("br",null,null,-1);function xt(t,e,n,o,a,c){var l=Object(r["y"])("router-link"),s=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",it,[Object(r["g"])("div",bt,[Object(r["g"])("h2",jt,Object(r["A"])(c.room.HotelName),1),Ot,Object(r["g"])("p",null,[pt,mt,Object(r["g"])("strong",null,Object(r["A"])(c.room.HotelFK),1)]),Object(r["g"])("p",null,[dt,gt,Object(r["g"])("strong",null,Object(r["A"])(c.room.RoomType),1)]),Object(r["g"])("p",null,[ft,ht,Object(r["g"])("strong",null,Object(r["A"])(c.room.FloorNumber),1)]),Object(r["g"])("p",null,[vt,yt,Object(r["g"])("strong",null,Object(r["A"])(c.room.HotelStar),1)])])]),c.auth?(Object(r["r"])(),Object(r["d"])(l,{key:0,to:"/rooms/".concat(this.$route.params.pk,"/review")},{default:Object(r["E"])((function(){return[wt]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(l,{key:1,to:"/login"},{default:Object(r["E"])((function(){return[kt]})),_:1})),Rt,At,Object(r["i"])(s)])}n("7db0"),n("d3b7");var Et={computed:{room:function(){var t=this,e=this.$store.state.rooms,n=e.find((function(e){return e.RoomPK==t.$route.params.pk}));return n},auth:function(){return this.$store.state.token}}};const St=E()(Et,[["render",xt]]);var Ft=St,Pt=Object(r["g"])("h1",null,"Not Found",-1),$t=Object(r["g"])("h4",null,"Sorry, this page can't be found.",-1),Nt=[Pt,$t];function Ut(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",null,Nt)}var Ct={};const _t=E()(Ct,[["render",Ut]]);var Ht=_t,Lt={class:"row justify-content-center"},Mt={class:"col-lg-10"},qt={class:"card"},Tt={class:"card-body"},Vt=Object(r["g"])("h4",null,"Create a Review",-1),It={class:"mb-3"},Kt=Object(r["g"])("label",{for:"rating-input",class:"form-label"},"Rating",-1),Bt={class:"mb-3"},zt=Object(r["g"])("label",{for:"summary-input",class:"form-label"},"Review",-1),Dt=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"}," Submit Review",-1),Gt={key:0,class:"form-text text-danger"};function Jt(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",Lt,[Object(r["g"])("div",Mt,[Object(r["g"])("div",qt,[Object(r["g"])("div",Tt,[Vt,Object(r["g"])("form",{id:"review-form",onSubmit:e[3]||(e[3]=Object(r["G"])((function(){return c.submitReview&&c.submitReview.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",It,[Kt,Object(r["F"])(Object(r["g"])("input",{type:"number",class:"form-control",id:"rating-input",required:"",min:"1",max:"10","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.rating=t})},null,512),[[r["C"],a.rating]])]),Object(r["g"])("div",Bt,[zt,Object(r["F"])(Object(r["g"])("input",{type:"text",row:"3",class:"form-control",id:"summary-input",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.summary=t})},null,512),[[r["C"],a.summary]])]),Dt,Object(r["g"])("button",{onClick:e[2]||(e[2]=function(){return c.cancelReview&&c.cancelReview.apply(c,arguments)}),type:"clear",class:"btn btn-outline-danger"}," Cancel "),a.errorMessage?(Object(r["r"])(),Object(r["f"])("p",Gt,Object(r["A"])(a.errorMessage),1)):Object(r["e"])("",!0)],32)])])])])])}var Qt=n("1da1"),Wt=(n("96cf"),{data:function(){return{rating:null,summary:"",errorMessage:null}},methods:{submitReview:function(){var t=this;return Object(Qt["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$store.state.rooms,e.next=3,n.find((function(e){return e.RoomPK==t.$route.params.pk}));case 3:r=e.sent,console.log(t.$store.state.token),o={Rating:t.rating,Summary:t.summary,HotelFK:r.HotelFK},C.a.post("/reviews",o,{headers:{Authorization:"Bearer ".concat(t.$store.state.token)}}).then((function(){t.$router.replace("/account")})).catch((function(){t.errorMessage="Unable to create a review, please try again later"}));case 7:case"end":return e.stop()}}),e)})))()},cancelReview:function(){this.$router.go(-1)}}});n("af31");const Xt=E()(Wt,[["render",Jt]]);var Yt=Xt,Zt=Object(r["g"])("h1",null,"Sign Up",-1),te={class:"mb-3"},ee=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),ne={class:"mb-3"},re=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),oe={class:"mb-3"},ae=Object(r["g"])("label",{for:"phone-input",class:"form-label"},"Phone number",-1),ce={class:"mb-3"},le=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),se={key:0,class:"text-danger"},ue={class:"mb-3"},ie=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),be=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),je={id:"error-signup",class:"text-danger"};function Oe(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",null,[Zt,Object(r["g"])("form",{onSubmit:e[5]||(e[5]=Object(r["G"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",te,[ee,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.nameFirst=t})},null,512),[[r["C"],a.nameFirst]])]),Object(r["g"])("div",ne,[re,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.nameLast=t})},null,512),[[r["C"],a.nameLast]])]),Object(r["g"])("div",oe,[ae,Object(r["F"])(Object(r["g"])("input",{type:"tel",class:"form-control",id:"phone-input",required:"",placeholder:"000-000-0000","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.phoneNumber=t})},null,512),[[r["C"],a.phoneNumber]])]),Object(r["g"])("div",ce,[le,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.email=t})},null,512),[[r["C"],a.email]]),a.dupEmail?(Object(r["r"])(),Object(r["f"])("small",se,"Please choose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",ue,[ie,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[4]||(e[4]=function(t){return a.password=t})},null,512),[[r["C"],a.password]])]),be,Object(r["g"])("p",je,Object(r["A"])(a.errorMessage),1)],32)])}var pe={data:function(){return{nameFirst:"",nameLast:"",phoneNumber:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={NameFirst:this.nameFirst,NameLast:this.nameLast,Phone:this.phoneNumber,Email:this.email,Password:this.password};C.a.post("/guests",e).then((function(e){console.log("the response",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="Cannot sign you up, please try again later"}))}}};const me=E()(pe,[["render",Oe]]);var de=me,ge=Object(r["g"])("h1",null,"Account",-1),fe=Object(r["g"])("hr",null,null,-1),he={key:0,class:"text-danger"},ve={key:1,class:"table"},ye=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Hotel"),Object(r["g"])("th",null,"Summary"),Object(r["g"])("th",null,"Rating")],-1);function we(t,e,n,o,a,c){return Object(r["r"])(),Object(r["f"])("div",null,[ge,fe,Object(r["g"])("h3",null,Object(r["A"])(c.firstName)+"'s Reviews",1),a.accountError?(Object(r["r"])(),Object(r["f"])("p",he,"Cannot get your account information, please try again later.")):Object(r["e"])("",!0),a.reviewsByUser?(Object(r["r"])(),Object(r["f"])("table",ve,[ye,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.reviewsByUser,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.ReviewPK},[Object(r["g"])("th",null,Object(r["A"])(t.HotelName),1),Object(r["g"])("th",null,Object(r["A"])(t.Summary),1),Object(r["g"])("th",null,Object(r["A"])(t.Rating),1)])})),128))])])):Object(r["e"])("",!0)])}var ke={data:function(){return{reviewsByUser:null,accountError:!1}},computed:{firstName:function(){return this.$store.state.user.NameFirst}},created:function(){var t=this;C.a.get("/reviews/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){t.reviewsByUser=e.data})).catch((function(){t.accountError=!0}))}};const Re=E()(ke,[["render",we]]);var Ae=Re,xe=n("5502"),Ee=Object(xe["a"])({state:{token:null,user:null,rooms:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storeRooms:function(t,e){t.rooms=e},clearAuthData:function(t){t.token=null,t.user=null}},actions:{getRooms:function(t){var e=t.commit;C.a.get("/rooms").then((function(t){e("storeRooms",t.data)}))},logout:function(t){var e=t.commit,n=t.state;C.a.post("/guests/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){e("clearAuthData"),Fe.replace("/")})).catch((function(){console.log("error in logging out")}))}}}),Se=Object(_["a"])({history:Object(_["b"])(),routes:[{path:"/",component:V},{path:"/account",component:Ae,beforeEnter:function(t,e,n){Ee.state.token?n():n("/login")}},{path:"/login",component:tt},{path:"/rooms",component:ut},{path:"/rooms/:pk",component:Ft,children:[{path:"review",component:Yt}]},{path:"/signup",component:de},{path:"/:invalidroute(.*)",component:Ht}]}),Fe=Se;C.a.defaults.baseURL="https://cis410-fa21-kwarteng-api.azurewebsites.net/";var Pe=Object(r["c"])(N);Pe.use(Fe),Pe.use(Ee),Pe.mount("#app")},"5ee5":function(t,e,n){},"6bb9":function(t,e,n){},a637:function(t,e,n){"use strict";n("5ee5")},af31:function(t,e,n){"use strict";n("6bb9")},b584:function(t,e,n){},ee22:function(t,e,n){"use strict";n("b584")}});
//# sourceMappingURL=app.50c6649c.js.map