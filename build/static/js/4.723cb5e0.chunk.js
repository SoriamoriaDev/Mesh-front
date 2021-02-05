(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[4],{1137:function(e,t,a){"use strict";a.r(t);var r=a(21),n=a(1027),c=a(75),o=a(102),s=a(2),i=a(0),l=a.n(i),u=a(5),d=a(52),p=a(11),b=a(36),f=a(1068),m=a(1029),h=a(983),g=a(181),x=a(1049),O=a(107),v=a(272),j=a.n(v),y=a(8),S=a.n(y),k=a(17),w=a(9),C=a(20),E=a.n(C),R=Object(w.b)("chatApp/contacts/getContacts",function(){var e=Object(k.a)(S.a.mark((function e(t){var a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("https://mesh-back-end.herokuapp.com","/users"));case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(w.c)({}),I=N.getSelectors((function(e){return e.chatApp.contacts})),L=I.selectEntities,_=(I.selectAll,I.selectById),A=Object(w.d)({name:"chatApp/contacts",initialState:N.getInitialState({selectedContactId:null}),reducers:{setSelectedContactId:function(e,t){e.selectedContactId=t.payload},removeSelectedContactId:function(e,t){return function(e,t){e.selectedContactId=null}}},extraReducers:Object(r.a)({},R.fulfilled,(function(e,t){e.entities=t.payload.data}))}),T=A.actions,B=T.setSelectedContactId,U=(T.removeSelectedContactId,A.reducer),W=a(1104),D=a.n(W),M=Object(n.a)((function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.primary.darkGrey,color:e.palette.getContrastText(e.palette.background.paper),borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}})),H=D()("https://mesh-back-end.herokuapp.com");var z=function(e){Object(u.b)();var t=M(e),a=Object(i.useRef)(null),r=Object(u.c)((function(e){return e.auth.user})),n=Object(u.c)((function(e){return e.chatApp.chat})),c=Object(i.useState)([]),o=Object(p.a)(c,2),v=o[0],y=o[1],S=Object(i.useState)(""),k=Object(p.a)(S,2),w=k[0],C=k[1],E=Object(u.c)(L);function R(){a.current.scrollTop=a.current.scrollHeight}function N(e,t){return 0===t||v[t-1]&&v[t-1].user_id!==e.user_id}function I(e,t){return t===v.length-1||v[t+1]&&v[t+1].user_id!==e.user_id}return Object(i.useEffect)((function(){n&&y(n)}),[n]),Object(i.useEffect)(R,[v]),Object(i.useEffect)((function(){return H.on("from back",(function(e){y((function(t){return[].concat(Object(d.a)(t),[e])})),R()})),function(){H.off("from back")}}),[]),l.a.createElement("div",{className:Object(s.a)("flex flex-col relative",e.className)},l.a.createElement(b.a,{ref:a,className:"flex flex-1 flex-col overflow-y-auto"},v&&E&&v.length>0?l.a.createElement("div",{className:"flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40"},v.map((function(e,a){var n=e.user_id===r._id?r:E.find((function(t){return t._id===e.user_id}));return l.a.createElement("div",{key:a,className:Object(s.a)(t.messageRow,"flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative px-16 pb-4",{me:e.user_id===r._id},{contact:e.user_id!==r._id},{"first-of-group":N(e,a)},{"last-of-group":I(e,a)},a+1===v.length&&"pb-96")},function(e,t){return e.user_id!==r._id}(e)&&I(e,a)&&l.a.createElement(f.a,{className:"avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32",src:n.data.photoURL}),l.a.createElement("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full shadow-1"},l.a.createElement("div",{className:"leading-tight whitespace-pre-wrap",style:{floatLeft:"auto"}},n._id!==r._id&&N(e,a)?l.a.createElement("div",{style:{color:"yellow",marginBottom:"5px",fontWeight:"bold"}},n.f_name):"",e.content),l.a.createElement(O.a,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-no-wrap",color:"textSecondary"},j()(e.createdAt).format("dddd DD/MM/YYYY HH:mm"))))}))):l.a.createElement("div",{className:"flex flex-col flex-1"},l.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center"},l.a.createElement(m.a,{className:"text-128",color:"disabled"},"chat")),l.a.createElement(O.a,{className:"px-16 pb-24 text-center",color:"textSecondary"},"Start a conversation by typing your message below."))),v&&l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==w&&(H.emit("chatRoom_0001_toBack",{content:w,chatRoom_id:"0001",deleted:!1,user_id:r._id}),C(""),R())},className:"absolute bottom-0 right-0 left-0 py-16 px-8"},l.a.createElement(g.a,{className:"flex items-center relative rounded-24",elevation:3},l.a.createElement(x.a,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:t.bootstrapFormLabel},onChange:function(e){C(e.target.value)},value:w}),l.a.createElement(h.a,{className:"absolute ltr:right-0 rtl:left-0 top-0",type:"submit"},l.a.createElement(m.a,{className:"text-24",style:{color:"#55e7b5"}},"send")))))};a(13),a(241),a(27),a(1036),a(984),a(988),a(1048),a(1041),a(469),a(1031),a(40),a(1037),a(1044),a(989);Object(n.a)((function(e){return{contactListItem:{borderBottom:"1px solid ".concat(e.palette.divider),"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));var Y,F,P=Object(w.d)({name:"chatApp/sidebars",initialState:{mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},reducers:{openMobileChatsSidebar:function(e,t){e.mobileChatsSidebarOpen=!0},closeMobileChatsSidebar:function(e,t){e.mobileChatsSidebarOpen=!1},openUserSidebar:function(e,t){e.userSidebarOpen=!0},closeUserSidebar:function(e,t){e.userSidebarOpen=!1},openContactSidebar:function(e,t){e.contactSidebarOpen=!0},closeContactSidebar:function(e,t){e.contactSidebarOpen=!1}}}),G=P.actions,J=(G.openMobileChatsSidebar,G.closeMobileChatsSidebar),q=(G.openUserSidebar,G.closeUserSidebar,G.openContactSidebar,G.closeContactSidebar,P.reducer),K=Object(w.b)("chatApp/user/getUserData",Object(k.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/chat/user");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Q=Object(w.b)("chatApp/user/updateUserData",function(){var e=Object(k.a)(S.a.mark((function e(t){var a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/chat/user/data",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=Object(w.d)({name:"chatApp/user",initialState:null,reducers:{updateUserChatList:function(e,t){e.chatList=t.payload}},extraReducers:(Y={},Object(r.a)(Y,K.fulfilled,(function(e,t){return t.payload})),Object(r.a)(Y,Q.fulfilled,(function(e,t){return t.payload})),Y)}),X=V.actions.updateUserChatList,Z=V.reducer,$=Object(w.b)("chatApp/chat/getMessages",function(){var e=Object(k.a)(S.a.mark((function e(t,a){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,E.a.get("".concat("https://mesh-back-end.herokuapp.com","/chat/messages/0001"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ee=Object(w.b)("chatApp/chat/getChat",function(){var e=Object(k.a)(S.a.mark((function e(t,a){var r,n,c,o,s,i,l,u,d;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.contactId,n=t.isMobile,c=a.dispatch,o=a.getState,s=o().chatApp.user.id,e.next=5,E.a.get("/api/chat/get-chat",{params:{contactId:r,userId:s}});case 5:return i=e.sent,e.next=8,i.data;case 8:return l=e.sent,u=l.chat,d=l.userChatList,c(B(r)),c(X(d)),n&&c(J()),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),te=Object(w.b)("chatApp/chat/sendMessage",function(){var e=Object(k.a)(S.a.mark((function e(t,a){var r,n,c,o,s,i,l,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.messageText,n=t.chatId,c=t.contactId,o=a.dispatch,a.getState,e.next=4,E.a.post("/api/chat/send-message",{chatId:n,messageText:r,contactId:c});case 4:return s=e.sent,e.next=7,s.data;case 7:return i=e.sent,l=i.message,u=i.userChatList,o(X(u)),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ae=Object(w.d)({name:"chatApp/chat",initialState:null,reducers:{removeChat:function(e,t){return t.payload}},extraReducers:(F={},Object(r.a)(F,ee.fulfilled,(function(e,t){return t.payload})),Object(r.a)(F,te.fulfilled,(function(e,t){e.dialog=[].concat(Object(d.a)(e.dialog),[t.payload])})),Object(r.a)(F,$.fulfilled,(function(e,t){return t.payload})),F)}).reducer;var re=a(88),ne=Object(re.c)({sidebars:q,user:Z,contacts:U,chat:ae});a(84),a(990),a(1032),a(991),a(1063),a(1069);var ce=a(41);var oe=function(e){return console.log("ChatHeader"),l.a.createElement("div",{className:"flex flex-1 items-center justify-between p-4 sm:p-24"},l.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement(ce.a,{animation:"transition.expandIn",delay:300},l.a.createElement(m.a,{className:"text-32"},"chat")),l.a.createElement(ce.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(O.a,{variant:"h6",className:"mx-12 hidden sm:flex"},"Global chat")))))},se=a(85),ie=Object(n.a)((function(e){var t;return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(r.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(r.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:8,maxHeight:"100%",width:350},drawerPaper:Object(r.a)({width:400,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(c.fade)(e.palette.background.paper,.8)," 0,").concat(Object(c.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(c.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}}));t.default=Object(o.a)("chatApp",ne)((function(e){var t=Object(u.b)(),a=(Object(u.c)((function(e){return e.chatApp.chat})),Object(u.c)((function(e){return e.chatApp.sidebars.mobileChatsSidebarOpen})),Object(u.c)((function(e){return e.chatApp.sidebars.userSidebarOpen})),Object(u.c)((function(e){return e.chatApp.sidebars.contactSidebarOpen})),Object(u.c)((function(e){return _(e,e.chatApp.contacts.selectedContactId)})),Object(i.useRef)(null)),r=ie(e);return Object(i.useEffect)((function(){t($()),t(R())}),[t]),l.a.createElement(se.a,{classes:{contentWrapper:"p-0 sm:p-24 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136",wrapper:"min-h-0"},header:l.a.createElement(oe,{pageLayout:a}),content:l.a.createElement("div",{className:Object(s.a)(r.root)},l.a.createElement("div",{className:Object(s.a)(r.contentCardWrapper,"container"),style:{margin:0,maxWidth:600}},l.a.createElement("div",{id:"ici",className:r.contentCard},l.a.createElement("main",{className:Object(s.a)(r.contentWrapper,"z-10")},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r.content},l.a.createElement(z,{className:"flex flex-1 z-10"}))))))),sidebarInner:!0,ref:a,innerScroll:!0})}))}}]);