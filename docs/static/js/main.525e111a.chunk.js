(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(42),r=n.n(c),o=(n(82),n(14)),s=n(17),i=n(44),u=n(32),l=n(13),j=n(0),d=n.n(j),b=n(1),p=n(31),O=n.n(p),f="[Auth] Login",m="[Auth] Logout",h="[UI] Set Error",x="[UI] Remove Error",v="[UI] Start loading",g="[UI] Finish loading",y="[Notes] New Note",_="[Notes] Set Active Note",N="[Notes] Load Note",w="[Notes] Update Note",k="[Notes] Delete Note",C="[Notes] Cleaning Note",E=n(27),S=n(74),L=n(28),I=Object(S.a)({apiKey:"AIzaSyA0noEADx9K8dEd6wolQHvBMv-l4KKhE3c",authDomain:"react-app-journal-17d0a.firebaseapp.com",projectId:"react-app-journal-17d0a",storageBucket:"react-app-journal-17d0a.appspot.com",messagingSenderId:"991033802136",appId:"1:991033802136:web:f1a22ab6a53d29e0d27fed"}),D=Object(L.e)(I),A=new E.a,U=function(e){return{type:h,payload:e}},B=function(){return{type:g}},T=n(11),P=n(37),z=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.e)(Object(P.b)(D,"".concat(t),"journal/notes"));case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(T.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dnzouokvp/upload",(n=new FormData).append("upload_preset","journal-app"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dnzouokvp/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){return{type:_,payload:Object(T.a)({id:e},t)}},K=function(e){return{type:N,payload:e}},q=function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n,a){var c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.date=(new Date).getTime(),e.url||delete e.url,delete(r=Object(T.a)({},e)).id,t.next=7,Object(L.f)(Object(L.d)(D,"".concat(c),"/journal/notes/".concat(e.id)),r);case 7:n(M(e.id,e)),O.a.fire({title:"Update ! :D ",text:"La nota se actualizo",icon:"success",confirmButtonText:"Entendido"});case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},M=function(e,t){return{type:w,payload:{id:e,note:t}}},G=function(e){return{type:k,payload:e}},J=function(e,t){return{type:y,payload:Object(T.a)({id:e},t)}},W=function(e,t){return function(n){n({type:v});var a=Object(E.c)();Object(E.d)(a,e,t).then((function(e){var t=e.user;n(B()),n(X(t.uid,t.displayName))})).catch((function(e){n(B()),console.log(e),O.a.fire({title:"Error !",text:"Correo o contrase\xf1a erroneo",icon:"error",confirmButtonText:"Entendido"})}))}},X=function(e,t){return{type:f,payload:{uid:e,displayName:t}}},H=function(){return{type:m}},Q=n(47),V=n.n(Q),Y=n(2),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(T.a)(Object(T.a)({},c),{},Object(Y.a)({},t.name,t.value)))};return[c,i,o]},$=n(6),ee=function(e){var t=e.day,n=Object(o.c)((function(e){return e.notes})).active,a=Object(o.b)();return Object($.jsxs)("div",{className:"notes__appbar",children:[Object($.jsx)("span",{children:t}),Object($.jsx)("input",{id:"file",type:"file",style:{display:"none"},onChange:function(e){var t=e.target.files[0];a(function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n,a){var c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,O.a.fire({title:"Uploading ...",text:"Pls Wait... :D",showConfirmButton:!1,showLoaderOnConfirm:!0,onBeforeOpen:function(){O.a.showLoading()}}),t.next=4,R(e);case 4:r=t.sent,c.url=r,n(q(c)),O.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}),Object($.jsxs)("div",{children:[Object($.jsx)("button",{className:"buttons mr-5",onClick:function(){document.querySelector("#file").click()},children:"Picture"}),Object($.jsx)("button",{className:"buttons",onClick:function(){a(q(n))},children:"Save"})]})]})},te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=Z(t),c=Object(s.a)(n,3),r=c[0],i=c[1],u=c[2],l=r.url,j=r.title,p=r.body,O=r.date,f=r.id,m=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==m.current&&(u(t),m.current=t.id)}),[t,m,u]),Object(a.useEffect)((function(){e(F(r.id,Object(T.a)({},r)))}),[r,e]);var h=V()(O);return Object($.jsxs)("div",{className:"notes__main-content animate__animated animate__fadeIn",children:[Object($.jsx)(ee,{day:h.format("LL")}),Object($.jsxs)("div",{className:"notes__content",children:[Object($.jsx)("input",{type:"text",name:"title",value:j,onChange:i,autoComplete:"off",placeholder:"Some awesome title",className:"notes__title-input"}),Object($.jsx)("textarea",{placeholder:"What happened today ?",className:"notes__textarea",name:"body",value:p,onChange:i}),l&&Object($.jsx)("div",{className:"notes__image",children:Object($.jsx)("img",{src:"".concat(l),alt:"planetas"})}),Object($.jsx)("button",{onClick:function(){e(function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n,a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,Object(L.c)(Object(L.d)(D,"".concat(c),"/journal/notes/".concat(e)));case 3:return t.next=5,n(G(e));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(f))},className:"buttons danger",children:"Delete"})]})]})},ne=function(){return Object($.jsxs)("div",{className:"nothing__main-content animate__animated animate__fadeInLeftBig ",children:[Object($.jsxs)("p",{children:["Select something",Object($.jsx)("br",{}),"Or Create an entry!"]}),Object($.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ae=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,s=V()(n),i=Object(o.b)();return Object($.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeInLeft",id:t,onClick:function(){i(F(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object($.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object($.jsxs)("div",{className:"journal__entry-body",children:[Object($.jsx)("p",{className:"journal__entry-title",children:a}),Object($.jsx)("p",{className:"journal__entry-content",children:c})]}),Object($.jsxs)("div",{className:"journal__entry-date-box",children:[Object($.jsx)("span",{children:s.format("dddd")}),Object($.jsx)("h4",{children:s.format("Do")})]})]})},ce=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return console.log(e),Object($.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object($.jsx)(ae,Object(T.a)({},e),e.id)}))})},re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object($.jsxs)("aside",{className:"journal__sidebar",children:[Object($.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object($.jsxs)("h3",{className:"mt-5",children:[Object($.jsx)("i",{className:"far fa-moon mr-1"}),Object($.jsx)("span",{children:t})]}),Object($.jsx)("button",{className:"buttons mt-5",onClick:function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(E.c)(),e.next=3,n.signOut();case 3:t(H()),t({type:C});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object($.jsxs)("div",{className:"journal__new-entry pointer",onClick:function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t,n){var a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,Object(L.a)(Object(L.b)(D,"".concat(a),"journal/notes"),c);case 4:r=e.sent,t(F(r.id,c)),t(J(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object($.jsx)("i",{className:"far fa-calendar-plus mt-5"}),Object($.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object($.jsx)(ce,{})]})},oe=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object($.jsxs)("div",{className:"journal__main-content",children:[Object($.jsx)(re,{}),Object($.jsx)("main",{children:e?Object($.jsx)(te,{}):Object($.jsx)(ne,{})})]})},se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=Z({email:"mpercig@gmail.com",password:"123456"}),a=Object(s.a)(n,2),c=a[0],r=a[1],i=c.email,l=c.password;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)("h3",{className:"auth__title",children:"Login"}),Object($.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(W(i,l))},children:[Object($.jsx)("input",{type:"text",name:"email",placeholder:"email",autoComplete:"off",className:"auth__input",value:i,onChange:r}),Object($.jsx)("input",{type:"password",name:"password",placeholder:"password",className:"auth__input",value:l,onChange:r}),Object($.jsx)("button",{className:"buttons pointer buttons__btn-primary",type:"submit",disabled:t,children:"Ingresar"}),Object($.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){var t=Object(E.c)();Object(E.e)(t,A).then((function(t){var n=t.user;e(X(n.uid,n.displayName))}))}))},children:[Object($.jsx)("div",{className:"google-icon-wrapper",children:Object($.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object($.jsx)("p",{className:"btn-text",children:Object($.jsx)("b",{children:"Sign in with google"})})]}),Object($.jsx)(u.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},ie=n(76),ue=n.n(ie),le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=Z({name:"Miguel Angel",email:"mpercig@gmail.com",password:"123456",confirm:"123456"}),a=Object(s.a)(n,2),c=a[0],r=a[1],i=c.name,l=c.email,j=c.password,p=c.confirm,f=function(){return 0===i.trim().length?(e(U("El nombre es requerido")),!1):ue.a.isEmail(l)?j!==p&&j.length<5?(e(U("Las contrase\xf1as no coinciden")),!1):(e({type:x}),!0):(e(U("Email no valido")),!1)};return Object($.jsxs)($.Fragment,{children:[Object($.jsx)("h3",{className:"auth__title",children:"Register"}),Object($.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,n){return function(a){var c=Object(E.c)();Object(E.b)(c,e,t).then(function(){var e=Object(b.a)(d.a.mark((function e(t){var r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,o=c.currentUser,e.next=4,Object(E.f)(o,{displayName:n});case 4:return e.next=6,a(X(r.uid,r.displayName));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){O.a.fire({title:"Error !",text:"Correo o contrase\xf1a erroneo",icon:"error",confirmButtonText:"Entendido"})}))}}(l,j,i))},children:[t&&Object($.jsx)("div",{className:"auth__errors",children:"".concat(t)}),Object($.jsx)("input",{type:"text",name:"name",placeholder:"Name",autoComplete:"off",className:"auth__input",value:i,onChange:r}),Object($.jsx)("input",{type:"text",name:"email",placeholder:"Email",autoComplete:"off",className:"auth__input",value:l,onChange:r}),Object($.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"auth__input",value:j,onChange:r}),Object($.jsx)("input",{type:"password",name:"confirm",placeholder:"Confirm Pass",className:"auth__input",value:p,onChange:r}),Object($.jsx)("button",{className:"buttons buttons__btn-primary",type:"submit",children:"Register..."}),Object($.jsx)(u.b,{className:"link",to:"/auth/login",children:"Already registered?"})]})]})},je=function(){return Object($.jsx)("div",{className:"auth__main",children:Object($.jsx)("div",{className:"auth__box-container",children:Object($.jsxs)(l.d,{children:[Object($.jsx)(l.b,{path:"/auth/login",component:se}),Object($.jsx)(l.b,{path:"/auth/register",component:le}),Object($.jsx)(l.a,{to:"/auth/login"})]})})})},de=n(48),be=["isLoggedIn","component"],pe=function(e){var t=e.isLoggedIn,n=e.component,a=Object(de.a)(e,be);return Object($.jsx)(l.b,Object(T.a)(Object(T.a)({},a),{},{component:function(e){return t?Object($.jsx)(n,Object(T.a)({},e)):Object($.jsx)(l.a,{to:"/auth/login"})}}))},Oe=["isLoggedIn","component"],fe=function(e){var t=e.isLoggedIn,n=e.component,a=Object(de.a)(e,Oe);return Object($.jsx)(l.b,Object(T.a)(Object(T.a)({},a),{},{component:function(e){return t?Object($.jsx)(l.a,{to:"/"}):Object($.jsx)(n,Object(T.a)({},e))}}))},me=function(){var e=Object(o.b)(),t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=n[0],r=n[1],j=Object(a.useState)(!1),p=Object(s.a)(j,2),O=p[0],f=p[1];return Object(a.useEffect)((function(){Object(i.c)().onAuthStateChanged((function(t){var n;(null===t||void 0===t?void 0:t.uid)?(e(X(t.uid,t.displayName)),f(!0),e((n=t.uid,function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(n);case 2:a=e.sent,t(K(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):f(!1),r(!1)}))}),[e,r,f]),c?Object($.jsx)("h1",{children:"Espere..."}):Object($.jsx)(u.a,{children:Object($.jsx)("div",{children:Object($.jsxs)(l.d,{children:[Object($.jsx)(fe,{isLoggedIn:O,path:"/auth",component:je}),Object($.jsx)(pe,{isLoggedIn:O,path:"/",component:oe})]})})})},he=n(40),xe=n(77),ve=n(18),ge={notes:[],active:null},ye={loading:!1,msgError:null},_e=Object(he.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{uid:t.payload.uid,name:t.payload.displayName};case m:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(T.a)(Object(T.a)({},e),{},{msgError:t.payload});case x:return Object(T.a)(Object(T.a)({},e),{},{msgError:null});case v:return Object(T.a)(Object(T.a)({},e),{},{loading:!0});case g:return Object(T.a)(Object(T.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(T.a)(Object(T.a)({},e),{},{active:Object(T.a)({},t.payload)});case y:return Object(T.a)(Object(T.a)({},e),{},{notes:[t.payload].concat(Object(ve.a)(e.notes))});case N:return Object(T.a)(Object(T.a)({},e),{},{notes:Object(ve.a)(t.payload)});case w:return Object(T.a)(Object(T.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case k:return Object(T.a)(Object(T.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case C:return Object(T.a)(Object(T.a)({},e),{},{active:null,notes:[]});default:return e}}}),Ne="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c,we=Object(he.d)(_e,Ne(Object(he.a)(xe.a))),ke=function(){return Object($.jsx)(o.a,{store:we,children:Object($.jsx)(me,{})})},Ce=document.querySelector("#root");r.a.render(Object($.jsx)(ke,{}),Ce)},82:function(e,t,n){}},[[178,1,2]]]);
//# sourceMappingURL=main.525e111a.chunk.js.map