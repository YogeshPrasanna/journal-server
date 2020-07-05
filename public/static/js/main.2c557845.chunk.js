(this.webpackJsonpjournal=this.webpackJsonpjournal||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(14),l=a.n(s),r=(a(66),a(15)),c=a(3),i=a(26),m=a.n(i),d=a(13),p=a.n(d),h=function(e){e?p.a.defaults.headers.common.Authorization=e:delete p.a.defaults.headers.common.Authorization},u=function(e){return{type:"SET_CURRENT_USER",payload:e}},g=function(){return function(e){localStorage.removeItem("jwtToken"),h(!1),e(u({})),window.location.href="/login"}},b=a(4),E=a(17),f=a(58),v=a(16),y=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},C={isAuthenticated:!1,user:{}},N={},k=a(36),j={loading:!1,showModal:!1,editPostId:null,posts:[]},w=Object(E.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(v.a)({},e,{isAuthenticated:!y(t.payload),user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTS_LOADING":return Object(v.a)({},e,{loading:!0});case"GET_CURRENT_USER_POSTS":return Object(v.a)({},e,{posts:t.payload,loading:!1});case"CREATE_POST":return Object(v.a)({},e,{posts:[].concat(Object(k.a)(e.posts),[t.payload])});case"DELETE_POST":return Object(v.a)({},e,{posts:e.posts.filter((function(e){return e._id!==t.payload}))});case"EDIT_POST":return console.log(t.payload),Object(v.a)({},e,{posts:[].concat(Object(k.a)(e.posts.filter((function(e){return e._id!==t.payload._id}))),[t.payload])});case"SHOW_MODAL":return Object(v.a)({},e,{showModal:t.payload.shouldShowModal,editPostId:t.payload.postId});default:return e}}}),O=[f.a],P=Object(E.e)(w,{},Object(E.d)(E.a.apply(void 0,O))),S=a(6),M=a(7),x=a(8),H=a(9),T=function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"onLogoutClick",value:function(e){e.preventDefault(),this.props.logoutUser()}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,o=n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"",onClick:this.onLogoutClick.bind(this),className:"nav-link"},n.a.createElement("img",{src:a.avatar,alt:"not found",className:"rounded-circle",style:{width:"25px",marginRight:"5px"},title:"You must have a gravatar connected to youe email to display image"}),"Logout"))),s=n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{className:"nav-link",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{className:"nav-link",to:"/login"},"Login")));return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-cust "},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(r.b,{className:"navbar-brand",to:"/"},"J O U R N A L"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-list",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}))),n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},t?o:s)))}}]),a}(o.Component),_=Object(b.b)((function(e){return{auth:e.auth}}),{logoutUser:g})(T);function R(){return n.a.createElement("div",null,n.a.createElement("footer",{className:"bg-dark text-white p-2 text-center"},"Copyright \xa9 ",(new Date).getFullYear()," Journal"))}var D=function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/home")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing landing-mob"},n.a.createElement("div",{className:"dark-overlay landing-inner text-light"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:window.screen.width>641?"display-3 mb-4":"display-4 md-4"},"J O U R N A L"),n.a.createElement("p",{className:"lead"}," ","This is your life - Lets keep a track of it and lets make it memorable day by day"),n.a.createElement("hr",null),n.a.createElement(r.b,{to:"/register",className:"btn btn-lg btn-info mr-2"},"Sign Up"),n.a.createElement(r.b,{to:"/login",className:"btn btn-lg btn-light"},"Login"))))))}}]),a}(o.Component),I=Object(b.b)((function(e){return{auth:e.auth}}))(D),A=a(18),U=a(2),F=a(5),L=a.n(F),z=function(e){var t=e.name,a=e.placeholder,o=e.value,s=(e.label,e.error),l=e.info,r=e.type,c=e.onChange,i=e.disabled;return n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:r,className:L()("form-control form-control-lg",{"is-invalid":s}),placeholder:a,value:o,onChange:c,name:t,disabled:i}),l&&n.a.createElement("small",{className:"form-text text-muted"},l),s&&n.a.createElement("div",{className:"invalid-feedback"},s))};z.defaultProps={type:"text"};var B=z,G=function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(S.a)(this,a),(e=t.call(this)).state={name:"",email:"",password:"",password2:"",errors:{}},e.onChange=e.onChange.bind(Object(U.a)(e)),e.onSubmit=e.onSubmit.bind(Object(U.a)(e)),e}return Object(M.a)(a,[{key:"onChange",value:function(e){this.setState(Object(A.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/home")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,email:this.state.email,password:this.state.password,password2:this.state.password2};this.props.registeruser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"auth-pages"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"dark-overlay landing-inner text-light"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:window.screen.width>641?"display-3 mb-4":"display-4 md-4"},"J O U R N A L"),n.a.createElement("p",{className:"lead"}," ","This is your life - Lets keep a track of it and lets make it memorable day by day"))))))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Journal account"),n.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},n.a.createElement(B,{type:"text",error:e.name,placeholder:"Name",value:this.state.name,onChange:this.onChange,name:"name"}),n.a.createElement("small",{className:"form-text text-muted"},"This site uses Gravatar so if you want a profile image, use a Gravatar email"),n.a.createElement(B,{type:"email",error:e.email,placeholder:"Email Address",name:"email",value:this.state.email,onChange:this.onChange}),n.a.createElement(B,{type:"password",error:e.password,placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),n.a.createElement(B,{type:"password",error:e.password2,placeholder:"Confirm Password",name:"password2",value:this.state.password2,onChange:this.onChange}),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"})))))))}}]),a}(o.Component),J=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registeruser:function(e,t){return function(a){p.a.post("/api/users/signup",e).then((function(e){t.push("/login")})).catch((function(e){a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(c.e)(G)),W=function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(S.a)(this,a),(e=t.call(this)).state={email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(U.a)(e)),e.onSubmit=e.onSubmit.bind(Object(U.a)(e)),e}return Object(M.a)(a,[{key:"onChange",value:function(e){this.setState(Object(A.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/home")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/home"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};this.props.loginUser(t)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"auth-pages"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"dark-overlay landing-inner text-light"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:window.screen.width>641?"display-3 mb-4":"display-4 md-4"},"J O U R N A L"),n.a.createElement("p",{className:"lead"}," ","This is your life - Lets keep a track of it and lets make it memorable day by day"))))))),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("p",{className:"lead text-center"},"Sign in to your Journal account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement(B,{type:"email",error:e.email,placeholder:"Email Address",value:this.state.email,onChange:this.onChange,name:"email"}),n.a.createElement(B,{type:"password",error:e.password,placeholder:"Password",value:this.state.password,onChange:this.onChange,name:"password"}),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"})))))))}}]),a}(o.Component),$=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){p.a.post("/api/users/signin",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),h(a);var o=m()(a);t(u(o))})).catch((function(e){t({type:"GET_ERRORS",payload:e.response.data})}))}}})(W),V=function(){return function(e){e(Y()),p.a.get("/api/posts").then((function(t){e({type:"GET_CURRENT_USER_POSTS",payload:t.data})})).catch((function(t){e({type:"GET_CURRENT_USER_POSTS",payload:{}})}))}},Y=function(){return{type:"POSTS_LOADING"}},q=a(60),K=a(19),Q=a.n(K),X=a(20),Z=a.n(X),ee=a(21),te=a(28),ae=a.n(te),oe=(a(56),function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(e){var o;Object(S.a)(this,a),o=t.call(this,e);var n=e.posts&&e.editPostId&&e.posts.filter((function(t){return t._id===e.editPostId}))[0]||"";return o.state={posts:[],postId:n._id||"",postContent:n.postContent||"",postHeader:n.postHeader||"",postMood:n.postMood||{happy:!1,sad:!1,funny:!1,tired:!1,bored:!1,love:!1,blessed:!1,crying:!1,angry:!1,calm:!1},postHashtags:n.postHashtags||[],memorablePost:n.memorablePost||!1,postDate:n.postDate},o.onSubmit=o.onSubmit.bind(Object(U.a)(o)),o.onChange=o.onChange.bind(Object(U.a)(o)),o.memorablePostChange=o.memorablePostChange.bind(Object(U.a)(o)),o.handleHashtagsChange=o.handleHashtagsChange.bind(Object(U.a)(o)),o.postMoodChange=o.postMoodChange.bind(Object(U.a)(o)),o}return Object(M.a)(a,[{key:"onSubmit",value:function(e){e.stopPropagation(),this.props.editPost(this.state.postId,{postHeader:this.state.postHeader,postContent:this.state.postContent,postMood:this.state.postMood,postHashtags:this.state.postHashtags,memorablePost:this.state.memorablePost,postDate:new Date(this.state.postDate)}),this.props.onHide(),console.log(this.state.postContent,"form submitted")}},{key:"onChange",value:function(e){console.log(e.target.value),this.setState({postHeader:e.target.value})}},{key:"memorablePostChange",value:function(e){console.log("$$$$$$$$",e.target.checked),this.setState({memorablePost:e.target.checked})}},{key:"postMoodChange",value:function(e){var t=e.target.name.split("-")[1],a=e.target.checked;this.setState((function(e){var o=Object.assign({},e.postMood);return o[t]=a,{postMood:o}}))}},{key:"componentDidUpdate",value:function(e,t){console.log(e.editPostId,this.state.postId);var a=e.posts&&e.editPostId&&e.posts.filter((function(t){return t._id===e.editPostId}))[0]||"";if(a&&(console.log(e.editPostId,this.state.postId),e.editPostId!==this.state.postId))return this.setState({postId:a._id,postHeader:a.postHeader,postContent:a.postContent,postMood:a.postMood,postHashtags:a.postHashtags,memorablePost:a.memorablePost,postDate:a.postDate})}},{key:"handleHashtagsChange",value:function(e){this.setState({postHashtags:e})}},{key:"inputProps",value:function(){return{placeholder:"Hashtags"}}},{key:"render",value:function(){var e=this,t=this.props.posts&&this.props.editPostId&&this.props.posts.filter((function(t){return t._id===e.props.editPostId}))[0]||"";return n.a.createElement(ee.a,Object.assign({},this.props,{"aria-labelledby":"contained-modal-title-vcenter"}),n.a.createElement(ee.a.Header,{closeButton:!0},n.a.createElement(ee.a.Title,{id:"contained-modal-title-vcenter"},n.a.createElement("h5",{className:"alert alert-danger"},"Past is Past!! Try not to change it"))),n.a.createElement(ee.a.Body,{className:"show-grid"},t&&n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("input",{type:"text",value:this.state.postHeader,className:"form-control form-control-lg",onChange:this.onChange,name:"postHeader"}),n.a.createElement(Q.a,{editor:Z.a,data:t.postContent,onChange:function(t,a){var o=a.getData();e.setState({postContent:o})}}),n.a.createElement("div",{className:"row",style:{padding:"0px"}},n.a.createElement("div",{className:"col-sm-12",style:{paddingTop:"6px",marginBottom:"15px"}},n.a.createElement(ae.a,{value:this.state.postHashtags,onChange:this.handleHashtagsChange,inputProps:this.inputProps()})),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.memorablePost,onChange:this.memorablePostChange,name:"memorablePost",style:{display:"inline",width:"45px"}}),n.a.createElement("h4",{className:"memorablePostLabel"},"Was today a memorable Day ?")),n.a.createElement("div",{className:"row mood-section"},n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.angry,onChange:this.postMoodChange,name:"mood-angry",id:"edited-angry"}),n.a.createElement("label",{htmlFor:"aedited-angry",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"angry"},"\ud83d\ude20\ud83d\ude21"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.blessed,onChange:this.postMoodChange,name:"mood-blessed",id:"edited-blessed"}),n.a.createElement("label",{htmlFor:"edited-blessed",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"blessed"},"\ud83d\ude07\ud83d\uded5"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.bored,onChange:this.postMoodChange,name:"mood-bored",id:"edited-bored"}),n.a.createElement("label",{htmlFor:"edited-bored",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"bored"},"\ud83e\udd71\ud83d\udca4"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.calm,onChange:this.postMoodChange,name:"mood-calm",id:"edited-calm"}),n.a.createElement("label",{htmlFor:"edited-calm",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"calm"},"\ud83d\ude0c\ud83e\uddd8\ud83c\udffc\u200d\u2642\ufe0f"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.crying,onChange:this.postMoodChange,name:"mood-crying",id:"edited-crying"}),n.a.createElement("label",{htmlFor:"edited-crying",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"crying"},"\ud83d\ude22\ud83d\ude2d"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.funny,onChange:this.postMoodChange,name:"mood-funny",id:"edited-funny"}),n.a.createElement("label",{htmlFor:"edited-funny",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"funny"},"\ud83e\udd73\ud83e\udd29"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.happy,onChange:this.postMoodChange,name:"mood-happy",id:"edited-happy"}),n.a.createElement("label",{htmlFor:"edited-happy",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"happy"},"\ud83d\ude00\ud83d\ude42"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.love,onChange:this.postMoodChange,name:"mood-love",id:"edited-love"}),n.a.createElement("label",{htmlFor:"edited-love",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\ude0d\u2764\ufe0f"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.sad,onChange:this.postMoodChange,name:"mood-sad",id:"edited-sad"}),n.a.createElement("label",{htmlFor:"edited-sad",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"sad"},"\ud83d\ude1e\ud83d\ude1f"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.tired,onChange:this.postMoodChange,name:"mood-tired",id:"edited-tired"}),n.a.createElement("label",{htmlFor:"edited-tired",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"tired"},"\ud83e\udd12\ud83e\ude7a"))))))),n.a.createElement(ee.a.Footer,null,this.state.postHeader&&this.state.postContent&&n.a.createElement("button",{type:"submit",className:"btn save-btn",onClick:this.onSubmit},"Save")))}}]),a}(o.Component)),ne=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors,posts:e.post.posts,editPostId:e.post.editPostId}}),{getCurrentUsersPosts:V,editPost:function(e,t){return function(a){p.a.put("/api/posts/".concat(e),t).then((function(e){a({type:"EDIT_POST",payload:e.data})})).catch((function(e){console.log(e),a({type:"EDIT_POST",payload:{}})}))}}})(oe),se=function(e){return e.memorablePost?n.a.createElement("span",{className:"badge badge-pill badge-success",style:{margin:"7px"}},"Memorable Day"):null},le=function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(S.a)(this,a),(e=t.call(this)).state={posts:[],showModal:!1},e.deletePost=e.deletePost.bind(Object(U.a)(e)),e.editPost=e.editPost.bind(Object(U.a)(e)),e}return Object(M.a)(a,[{key:"componentDidMount",value:function(){this.props.getCurrentUsersPosts()}},{key:"deletePost",value:function(e){this.props.deletePost(e)}},{key:"editPost",value:function(e){this.props.shouldShowModal(!0,e),this.props.getCurrentUsersPosts(),console.log(this.props)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(ne,{show:this.props.showModal,size:"lg",onHide:function(){return e.props.shouldShowModal(!1)}}),this.props.posts&&this.props.posts.length&&this.props.posts.map((function(t){var a=new Date(t.postDate),o=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit"}).formatToParts(a),s=Object(q.a)(o,5),l=s[0].value,r=s[2].value,c=s[4].value,i={angry:"\ud83d\ude20\ud83d\ude21",blessed:"\ud83d\ude07\ud83d\uded5",bored:"\ud83e\udd71\ud83d\udca4",calm:"\ud83d\ude0c\ud83e\uddd8\ud83c\udffc\u200d\u2642\ufe0f",crying:"\ud83d\ude22\ud83d\ude2d",funny:"\ud83e\udd73\ud83e\udd29",happy:"\ud83d\ude00\ud83d\ude42",love:"\ud83d\ude0d\u2764\ufe0f",sad:"\ud83d\ude1e\ud83d\ude1f",tired:"\ud83e\udd12\ud83e\ude7a"},m=t.postMood;return n.a.createElement("div",{className:"card bg-light",key:t._id,style:{minWidth:"15rem"}},n.a.createElement("div",{className:"card-body custom-card"},n.a.createElement("h4",{className:"custom-card-date"},"".concat(r," ").concat(l," ").concat(c),n.a.createElement("span",{onClick:function(){return e.deletePost(t._id)},style:{float:"right",cursor:"pointer",paddingLeft:"10px"},title:"Delete"},n.a.createElement("svg",{className:"bi bi-trash-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"}))),n.a.createElement("span",{onClick:function(){return e.editPost(t._id)},style:{float:"right",cursor:"pointer"},title:"Edit"},n.a.createElement("svg",{className:"bi bi-pencil",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"})))),n.a.createElement("h5",{className:"card-title custom-card-header"},t.postHeader),n.a.createElement("div",{className:"card-text custom-card-content"},n.a.createElement(Q.a,{editor:Z.a,data:t.postContent,disabled:!0,config:{toolbar:[]},onChange:function(t,a){var o=a.getData();e.setState({postContent:o})}})),n.a.createElement(se,{memorablePost:t.memorablePost}),n.a.createElement("div",{className:"moodSection"},Object.keys(m).map((function(e){return m[e]?n.a.createElement("span",{value:e,className:"emoji postEmoji postEmojiActive",style:{margin:"5px"}},i[e]):null}))),n.a.createElement("div",{className:"custom-card-tags"},t.postHashtags.map((function(e,t){return n.a.createElement("span",{className:"badge badge-pill badge-info",style:{margin:"2px 4px",padding:"5px",borderRadius:"5px"},key:t},"#",e)})))))})))}}]),a}(o.Component),re=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors,posts:e.post.posts,showModal:e.post.showModal}}),{getCurrentUsersPosts:V,deletePost:function(e){return function(t){p.a.delete("/api/posts/".concat(e)).then((function(a){console.log(a),t({type:"DELETE_POST",payload:e})})).catch((function(e){console.log(e),t({type:"DELETE_POST",payload:{}})}))}},shouldShowModal:function(e,t){return function(a){return a({type:"SHOW_MODAL",payload:{shouldShowModal:e,postId:t}})}}})(le),ce=function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(S.a)(this,a),(e=t.call(this)).state={postHeader:"",postContent:"",postMood:{happy:!1,sad:!1,funny:!1,tired:!1,bored:!1,love:!1,blessed:!1,crying:!1,angry:!1,calm:!1},postHashtags:[],memorablePost:!1},e.postHeaderChange=e.postHeaderChange.bind(Object(U.a)(e)),e.postContentChange=e.postContentChange.bind(Object(U.a)(e)),e.memorablePostChange=e.memorablePostChange.bind(Object(U.a)(e)),e.handleHashtagsChange=e.handleHashtagsChange.bind(Object(U.a)(e)),e.postMoodChange=e.postMoodChange.bind(Object(U.a)(e)),e.onSubmit=e.onSubmit.bind(Object(U.a)(e)),e}return Object(M.a)(a,[{key:"postHeaderChange",value:function(e){this.setState({postHeader:e.target.value})}},{key:"handleHashtagsChange",value:function(e){this.setState({postHashtags:e})}},{key:"postContentChange",value:function(e){this.setState({postContent:e.target.value})}},{key:"memorablePostChange",value:function(e){console.log(e.target),this.setState({memorablePost:e.target.checked})}},{key:"postMoodChange",value:function(e){var t=e.target.name.split("-")[1],a=e.target.checked;this.setState((function(e){var o=Object.assign({},e.postMood);return o[t]=a,{postMood:o}}))}},{key:"onSubmit",value:function(){this.props.createPost(this.state),this.setState({postHeader:"",postContent:"",postMood:{happy:!1,sad:!1,funny:!1,tired:!1,bored:!1,love:!1,blessed:!1,crying:!1,angry:!1,calm:!1},postHashtags:[],memorablePost:!1})}},{key:"inputProps",value:function(){return{placeholder:"Hashtags"}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid create-post-section"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-sm-4 create-post-left-section pad15"},n.a.createElement("h3",{style:{display:"inline-block"}}," Hello ",this.props.auth.user.name,", \xa0 "),n.a.createElement("h5",{style:{display:"inline-block"}}," Hope it was a good day "),n.a.createElement("hr",null),n.a.createElement("input",{type:"text",className:"form-control form-control-md",placeholder:"Brief description of your day... !!",value:this.state.postHeader,onChange:this.postHeaderChange,name:"postHeader"}),n.a.createElement("div",{className:"row",style:{padding:"15px 0"}},n.a.createElement("div",{className:"col-sm-12",style:{paddingTop:"6px",marginBottom:"15px"}},n.a.createElement(ae.a,{value:this.state.postHashtags,onChange:this.handleHashtagsChange,inputProps:this.inputProps()})),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.memorablePost,onChange:this.memorablePostChange,name:"memorablePost",style:{display:"inline",width:"45px"}}),n.a.createElement("h4",{className:"memorablePostLabel"},"Was today a memorable Day ?")))),n.a.createElement("div",{className:"col-sm-8 create-post-right-section"},n.a.createElement(Q.a,{editor:Z.a,data:this.state.postContent,config:{placeholder:"Okay how good was your day !!"},onChange:function(t,a){var o=a.getData();e.setState({postContent:o})}}),n.a.createElement("div",{className:"row mood-section"},n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.angry,onChange:this.postMoodChange,name:"mood-angry",id:"angry"}),n.a.createElement("label",{htmlFor:"angry",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"angry"},"\ud83d\ude20\ud83d\ude21"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.blessed,onChange:this.postMoodChange,name:"mood-blessed",id:"blessed"}),n.a.createElement("label",{htmlFor:"blessed",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"blessed"},"\ud83d\ude07\ud83d\uded5"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.bored,onChange:this.postMoodChange,name:"mood-bored",id:"bored"}),n.a.createElement("label",{htmlFor:"bored",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"bored"},"\ud83e\udd71\ud83d\udca4"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.calm,onChange:this.postMoodChange,name:"mood-calm",id:"calm"}),n.a.createElement("label",{htmlFor:"calm",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"calm"},"\ud83d\ude0c\ud83e\uddd8\ud83c\udffc\u200d\u2642\ufe0f"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.crying,onChange:this.postMoodChange,name:"mood-crying",id:"crying"}),n.a.createElement("label",{htmlFor:"crying",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"crying"},"\ud83d\ude22\ud83d\ude2d"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.funny,onChange:this.postMoodChange,name:"mood-funny",id:"funny"}),n.a.createElement("label",{htmlFor:"funny",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"funny"},"\ud83e\udd73\ud83e\udd29"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.happy,onChange:this.postMoodChange,name:"mood-happy",id:"happy"}),n.a.createElement("label",{htmlFor:"happy",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"happy"},"\ud83d\ude00\ud83d\ude42"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.love,onChange:this.postMoodChange,name:"mood-love",id:"love"}),n.a.createElement("label",{htmlFor:"love",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\ude0d\u2764\ufe0f"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.sad,onChange:this.postMoodChange,name:"mood-sad",id:"sad"}),n.a.createElement("label",{htmlFor:"sad",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"sad"},"\ud83d\ude1e\ud83d\ude1f"))),n.a.createElement("span",null,n.a.createElement("input",{type:"checkbox",className:"form-control form-control-lg",checked:this.state.postMood.tired,onChange:this.postMoodChange,name:"mood-tired",id:"tired"}),n.a.createElement("label",{htmlFor:"tired",className:"emoji"},n.a.createElement("span",{role:"img","aria-label":"tired"},"\ud83e\udd12\ud83e\ude7a")))),this.state.postHeader&&this.state.postContent&&n.a.createElement("button",{value:"submit",className:"btn save-btn",onClick:this.onSubmit},"Save"))))}}]),a}(o.Component),ie=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors,posts:e.post.posts}}),{createPost:function(e){return function(t){p.a.post("/api/posts",e).then((function(e){t({type:"CREATE_POST",payload:e.data})})).catch((function(e){console.log(e),t({type:"CREATE_POST",payload:{}})}))}}})(ce),me=function(e){Object(H.a)(a,e);var t=Object(x.a)(a);function a(){var e;return Object(S.a)(this,a),(e=t.call(this)).state={posts:[]},e}return Object(M.a)(a,[{key:"componentDidMount",value:function(){this.props.getCurrentUsersPosts()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid action-pages"},n.a.createElement(ie,{user:this.props.user}),n.a.createElement("div",{className:"card-deck"},n.a.createElement(re,null)))}}]),a}(o.Component),de=Object(b.b)((function(e){return{auth:e.auth,errors:e.errors,posts:e.post.posts}}),{getCurrentUsersPosts:V})(me);a(108);if(localStorage.jwtToken){h(localStorage.jwtToken);var pe=m()(localStorage.jwtToken);P.dispatch(u(pe));var he=Date.now()/1e3;pe.exp<he&&(P.dispatch(g()),window.location.href="/login")}var ue=function(){return n.a.createElement(b.a,{store:P},n.a.createElement(r.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(_,null),n.a.createElement(c.a,{exact:!0,path:"/",component:I}),n.a.createElement("div",{className:"container-fluid",style:{padding:0}},n.a.createElement(c.a,{exact:!0,path:"/register",component:J}),n.a.createElement(c.a,{exact:!0,path:"/login",component:$}),n.a.createElement(c.a,{exact:!0,path:"/home",component:de})),n.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a(109)},66:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.2c557845.chunk.js.map