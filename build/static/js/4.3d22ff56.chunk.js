(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[4],{1136:function(e,t,a){"use strict";a.r(t);var r,n,c=a(21),o=a(1026),s=a(75),i=a(101),u=a(2),l=a(0),d=a.n(l),p=a(5),b=a(52),f=a(11),m=a(36),h=a(1067),g=a(1028),x=a(982),O=a(181),j=a(1048),v=a(106),y=a(272),S=a.n(y),C=a(8),k=a.n(C),w=a(17),R=a(9),E=a(20),N=a.n(E),A=Object(R.b)("chatApp/contacts/getContacts",function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/chat/contacts",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(R.c)({}),L=I.getSelectors((function(e){return e.chatApp.contacts})),_=L.selectAll,T=L.selectById,B=Object(R.d)({name:"chatApp/contacts",initialState:I.getInitialState({selectedContactId:null}),reducers:{setSelectedContactId:function(e,t){e.selectedContactId=t.payload},removeSelectedContactId:function(e,t){return function(e,t){e.selectedContactId=null}}},extraReducers:Object(c.a)({},A.fulfilled,I.setAll)}),D=B.actions,M=D.setSelectedContactId,U=(D.removeSelectedContactId,B.reducer),W=Object(R.d)({name:"chatApp/sidebars",initialState:{mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},reducers:{openMobileChatsSidebar:function(e,t){e.mobileChatsSidebarOpen=!0},closeMobileChatsSidebar:function(e,t){e.mobileChatsSidebarOpen=!1},openUserSidebar:function(e,t){e.userSidebarOpen=!0},closeUserSidebar:function(e,t){e.userSidebarOpen=!1},openContactSidebar:function(e,t){e.contactSidebarOpen=!0},closeContactSidebar:function(e,t){e.contactSidebarOpen=!1}}}),H=W.actions,z=(H.openMobileChatsSidebar,H.closeMobileChatsSidebar),Y=(H.openUserSidebar,H.closeUserSidebar,H.openContactSidebar,H.closeContactSidebar,W.reducer),F=Object(R.b)("chatApp/user/getUserData",Object(w.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/chat/user");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),P=Object(R.b)("chatApp/user/updateUserData",function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/chat/user/data",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(R.d)({name:"chatApp/user",initialState:null,reducers:{updateUserChatList:function(e,t){e.chatList=t.payload}},extraReducers:(r={},Object(c.a)(r,F.fulfilled,(function(e,t){return t.payload})),Object(c.a)(r,P.fulfilled,(function(e,t){return t.payload})),r)}),G=J.actions.updateUserChatList,q=J.reducer,K=Object(R.b)("chatApp/chat/getMessages",function(){var e=Object(w.a)(k.a.mark((function e(t,a){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,N.a.get("".concat("https://mesh-back-end.herokuapp.com","/chat/messages/0001"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Q=Object(R.b)("chatApp/chat/getChat",function(){var e=Object(w.a)(k.a.mark((function e(t,a){var r,n,c,o,s,i,u,l,d;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.contactId,n=t.isMobile,c=a.dispatch,o=a.getState,s=o().chatApp.user.id,e.next=5,N.a.get("/api/chat/get-chat",{params:{contactId:r,userId:s}});case 5:return i=e.sent,e.next=8,i.data;case 8:return u=e.sent,l=u.chat,d=u.userChatList,c(M(r)),c(G(d)),n&&c(z()),e.abrupt("return",l);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(R.b)("chatApp/chat/sendMessage",function(){var e=Object(w.a)(k.a.mark((function e(t,a){var r,n,c,o,s,i,u,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.messageText,n=t.chatId,c=t.contactId,o=a.dispatch,a.getState,e.next=4,N.a.post("/api/chat/send-message",{chatId:n,messageText:r,contactId:c});case 4:return s=e.sent,e.next=7,s.data;case 7:return i=e.sent,u=i.message,l=i.userChatList,o(G(l)),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),X=Object(R.d)({name:"chatApp/chat",initialState:null,reducers:{removeChat:function(e,t){return t.payload}},extraReducers:(n={},Object(c.a)(n,Q.fulfilled,(function(e,t){return t.payload})),Object(c.a)(n,V.fulfilled,(function(e,t){e.dialog=[].concat(Object(b.a)(e.dialog),[t.payload])})),Object(c.a)(n,K.fulfilled,(function(e,t){return t.payload})),n)}).reducer,Z=a(1103),$=a.n(Z),ee=Object(o.a)((function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.primary.darkGrey,color:e.palette.getContrastText(e.palette.background.paper),borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}})),te=$()("https://mesh-back-end.herokuapp.com");var ae=function(e){Object(p.b)();var t=Object(p.c)(_),a=(Object(p.c)((function(e){return e.chatApp.contacts.selectedContactId})),Object(p.c)((function(e){return e.chatApp.chat}))),r=Object(p.c)((function(e){return e.auth.user})),n=Object(l.useState)([]),c=Object(f.a)(n,2),o=c[0],s=c[1],i=Object(l.useState)(""),y=Object(f.a)(i,2),C=y[0],k=y[1],w=ee(e),R=Object(l.useRef)(null);function E(){R.current.scrollTop=R.current.scrollHeight}function N(e,t){return 0===t||o[t-1]&&o[t-1].user_id!==e.user_id}function A(e,t){return t===o.length-1||o[t+1]&&o[t+1].user_id!==e.user_id}return Object(l.useEffect)((function(){a&&(s(a),E())}),[a]),Object(l.useEffect)((function(){te.on("from back",(function(e){s([].concat(Object(b.a)(o),[e])),E()}))})),d.a.createElement("div",{className:Object(u.a)("flex flex-col relative",e.className)},d.a.createElement(m.a,{ref:R,className:"flex flex-1 flex-col overflow-y-auto"},o&&o.length>0?d.a.createElement("div",{className:"flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40"},o.map((function(e,a){e.user_id===r._id||t.find((function(t){return t.id===e.user_id}));return d.a.createElement("div",{key:a,className:Object(u.a)(w.messageRow,"flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative px-16 pb-4",{me:e.user_id===r._id},{contact:e.user_id!==r._id},{"first-of-group":N(e,a)},{"last-of-group":A(e,a)},a+1===o.length&&"pb-96")},function(e,t){return e.user_id!==r._id}(e)&&d.a.createElement(h.a,{className:"avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32",src:"/assets/images/avatars/avatar.png"}),d.a.createElement("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full shadow-1"},d.a.createElement("div",{className:"leading-tight whitespace-pre-wrap"},e.content),d.a.createElement(v.a,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-no-wrap",color:"textSecondary"},S()(e.createdAt).format("dddd DD/MM/YYYY HH:mm"))))}))):d.a.createElement("div",{className:"flex flex-col flex-1"},d.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center"},d.a.createElement(g.a,{className:"text-128",color:"disabled"},"chat")),d.a.createElement(v.a,{className:"px-16 pb-24 text-center",color:"textSecondary"},"Start a conversation by typing your message below."))),o&&d.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==C&&(te.emit("chatRoom_0001_toBack",{content:C,chatRoom_id:"0001",deleted:!1,user_id:r._id}),k(""),E())},className:"absolute bottom-0 right-0 left-0 py-16 px-8"},d.a.createElement(O.a,{className:"flex items-center relative rounded-24",elevation:3},d.a.createElement(j.a,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:w.bootstrapFormLabel},onChange:function(e){k(e.target.value)},value:C}),d.a.createElement(x.a,{className:"absolute ltr:right-0 rtl:left-0 top-0",type:"submit"},d.a.createElement(g.a,{className:"text-24",style:{color:"#55e7b5"}},"send")))))};a(13),a(241),a(27),a(1035),a(983),a(987),a(1047),a(1040),a(469),a(1030),a(40),a(1036),a(1043),a(988);Object(o.a)((function(e){return{contactListItem:{borderBottom:"1px solid ".concat(e.palette.divider),"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));var re=a(88),ne=Object(re.c)({sidebars:Y,user:q,contacts:U,chat:X});a(84),a(989),a(1031),a(990),a(1062),a(1068);var ce=Object(o.a)((function(e){var t;return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(c.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(c.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:8,maxHeight:"100%",width:500},drawerPaper:Object(c.a)({width:400,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(s.fade)(e.palette.background.paper,.8)," 0,").concat(Object(s.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(s.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}}));t.default=Object(i.a)("chatApp",ne)((function(e){var t=Object(p.b)(),a=(Object(p.c)((function(e){return e.chatApp.chat})),Object(p.c)((function(e){return e.chatApp.sidebars.mobileChatsSidebarOpen})),Object(p.c)((function(e){return e.chatApp.sidebars.userSidebarOpen})),Object(p.c)((function(e){return e.chatApp.sidebars.contactSidebarOpen})),Object(p.c)((function(e){return T(e,e.chatApp.contacts.selectedContactId)})),ce(e));return Object(l.useEffect)((function(){t(K())}),[t]),d.a.createElement("div",{className:Object(u.a)(a.root)},d.a.createElement("div",{className:Object(u.a)(a.contentCardWrapper,"container"),style:{margin:0,maxWidth:600}},d.a.createElement("div",{id:"ici",className:a.contentCard},d.a.createElement("main",{className:Object(u.a)(a.contentWrapper,"z-10")},d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:a.content},d.a.createElement(ae,{className:"flex flex-1 z-10"})))))))}))}}]);