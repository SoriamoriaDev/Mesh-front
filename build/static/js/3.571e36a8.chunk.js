(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[3],{1070:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(85),l=a(102),o=a(0),i=a.n(o),c=a(5),s=a(38),m=a(83),d=a(454),u=a(84),p=a(51),g=a(1034),f=a(1024),b=a(1022),h=a(1023),E=a(106),y=a(29),v=a(151),j=a.n(v);var O=function(e){var t=e.data;return i.a.createElement("div",{className:"flex flex-1 items-center p-4 sm:p-24"},i.a.createElement("div",{style:{marginBottom:"auto"}},i.a.createElement(p.a,{animation:"transition.slideRightIn",delay:300},i.a.createElement(E.a,{className:"normal-case flex items-center sm:mb-12",component:y.a,role:"button",to:"/teams",color:"inherit"},i.a.createElement(f.a,{className:"text-20"},"arrow_back"),i.a.createElement("span",{className:"mx-4"},"Return")))),i.a.createElement("div",{className:"inline-block",style:{paddingLeft:"100px"}},t?i.a.createElement("img",{style:{height:100},alt:t.logo,src:t.logo}):""),i.a.createElement("div",{className:"p-24 inline-block"},i.a.createElement("h1",{style:{marginBottom:5}},t?t.name:""),i.a.createElement("div",{style:{marginBottom:5}},i.a.createElement("div",{className:"inline-block"},i.a.createElement(j.a,{style:{fontSize:"20",color:"#55e7b5"}}," You")),i.a.createElement("div",{className:"inline-block"},i.a.createElement("p",null,t?t.city:"",", ",t?t.country:""))),i.a.createElement("div",{className:"inline-block"},i.a.createElement("span",null,"Total members : ")," ",i.a.createElement("span",{style:{color:"#55e7b5"}},t?t.members_confirmed.length:""))))},k=a(1062),x=a(1046),C=a(1050),M=a(1047),N=(a(99),a(12)),z=a(978),R=Object(b.a)((function(e){return{layoutRoot:{},root:{maxWidth:400,minWidth:400}}}));var W=function(e){Object(k.a)("MyprofilePage").t,R(e);var t=e.id,a=e.players.find((function(e){return e._id==t}));return N.a.isEmpty(a)?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement("div",null,"Pending"==e.title?i.a.createElement("div",{style:{verticalAlign:"-10%",marginRight:"10px",display:"inline-block",backgroundColor:"orange",borderRadius:"50%",width:10,height:10,bottom:0}}):i.a.createElement("div",{style:{verticalAlign:"-10%",marginRight:"10px",display:"inline-block",backgroundColor:"#55e7b5",borderRadius:"50%",width:10,height:10,bottom:0}}),i.a.createElement("img",{src:a&&a.data.photoURL?a.data.photoURL:"/assets/images/avatars/max.jpg",alt:"avatar",style:{width:30,height:30,borderRadius:75,borderColor:"white",borderWidth:2,objectFit:"cover",display:"inline-block"}}),i.a.createElement("p",{style:{paddingLeft:"10px",display:"inline-block"}},i.a.createElement("b",null,a.f_name," ",a.l_name)),i.a.createElement("div",{className:"float-right"},i.a.createElement("p",{style:{fontSize:"12px",paddingRight:"20px",display:"inline-block"}},e.title),i.a.createElement(z.a,{size:"small","aria-label":"edit",color:"secondary"},i.a.createElement(f.a,null,"edit")))),i.a.createElement("br",null))},w=Object(b.a)((function(e){return{layoutRoot:{},root:{maxWidth:400,minWidth:400}}}));var L=function(e){Object(k.a)("MyprofilePage").t;var t=w(e),a=Object(c.b)(),n=Object(s.h)(),r=e.currentTeam.titles,l=e.currentTeam.members_pending,o=(Object(c.c)((function(e){return e.auth.user})),Object(c.c)((function(e){return e.teams.teams.teamPlayers})));if(console.log("Players in team : ",o),Object(m.b)((function(){console.log("useDeepCompareEffect..."),a(Object(u.e)(n))}),[o,a,n]),N.a.isEmpty(o))return null;var d=[];r.coach.length&&(d=r.coach.map((function(e,t){return i.a.createElement(W,{key:t,title:"Coach",id:e,players:o})})));var p=[];r.key_player.length&&(p=r.key_player.map((function(e,t){return i.a.createElement(W,{key:t,title:"Key player",id:e,players:o})})));var g=[];r.first_team.length&&(g=r.first_team.map((function(e,t){return i.a.createElement(W,{key:t,title:"First team",id:e,players:o})})));var f=[];r.rotation.length&&(f=r.rotation.map((function(e,t){return i.a.createElement(W,{key:t,title:"Rotation",id:e,players:o})})));var b=[];r.youngster.length&&(b=r.youngster.map((function(e,t){return i.a.createElement(W,{key:t,title:"Youngster",id:e,players:o})})));var h=[];return l.length&&(console.log("generating applicant List..."),h=l.map((function(e,t){return i.a.createElement(W,{key:t,title:"Pending",id:e,players:o})}))),i.a.createElement(x.a,{className:t.root},i.a.createElement(C.a,{title:"Players"}),i.a.createElement(M.a,null,r.founder?i.a.createElement(W,{title:"Founder",id:r.founder,players:o}):"",r.legend?i.a.createElement(W,{title:"Legend",id:r.legend,players:o}):"",r.president?i.a.createElement(W,{title:"President",id:r.president,players:o}):"",r.manager?i.a.createElement(W,{title:"Manager",id:r.manager,players:o}):"",d,p,g,f,r.wonderkid?i.a.createElement(W,{title:"Wonderkid",id:r.wonderkid,players:o}):"",b,h))},S=Object(b.a)((function(e){return{layoutRoot:{},root:{maxWidth:400,minWidth:400,top:0}}}));var A=function(e){Object(k.a)("MyprofilePage").t;var t=S(e);return Object(c.c)((function(e){return e.auth.user})),i.a.createElement(x.a,{className:t.root},i.a.createElement(C.a,{title:"Stats"}),i.a.createElement(M.a,null,"Team statistics"))},I=Object(b.a)((function(e){return{layoutRoot:{},root:{maxWidth:400,minWidth:400}}}));var _=function(e){Object(k.a)("MyprofilePage").t;var t=I(e);return Object(c.c)((function(e){return e.auth.user})),i.a.createElement(x.a,{className:t.root},i.a.createElement(C.a,{title:"Chat"}),i.a.createElement(M.a,null,"Team chat between players"))},P=a(1029),T=a(4),$=a(1),B=(a(3),a(2)),H=a(15),F=a(7),D=a(181),V=a(45),Y=Object(V.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),q=Object(V.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),J=Object(V.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),U=Object(V.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Z=Object(V.a)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),K=a(10),G={success:o.createElement(Y,{fontSize:"inherit"}),warning:o.createElement(q,{fontSize:"inherit"}),error:o.createElement(J,{fontSize:"inherit"}),info:o.createElement(U,{fontSize:"inherit"})},Q=o.createElement(Z,{fontSize:"small"}),X=o.forwardRef((function(e,t){var a=e.action,n=e.children,r=e.classes,l=e.className,i=e.closeText,c=void 0===i?"Close":i,s=e.color,m=e.icon,d=e.iconMapping,u=void 0===d?G:d,p=e.onClose,g=e.role,f=void 0===g?"alert":g,b=e.severity,h=void 0===b?"success":b,E=e.variant,y=void 0===E?"standard":E,v=Object(T.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(D.a,Object($.a)({role:f,square:!0,elevation:0,className:Object(B.a)(r.root,r["".concat(y).concat(Object(K.a)(s||h))],l),ref:t},v),!1!==m?o.createElement("div",{className:r.icon},m||u[h]||G[h]):null,o.createElement("div",{className:r.message},n),null!=a?o.createElement("div",{className:r.action},a):null,null==a&&p?o.createElement("div",{className:r.action},o.createElement(z.a,{size:"small","aria-label":c,title:c,color:"inherit",onClick:p},Q)):null)})),ee=Object(F.a)((function(e){var t="light"===e.palette.type?H.a:H.e,a="light"===e.palette.type?H.e:H.a;return{root:Object($.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:a(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:a(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:a(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:a(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(X);function te(e){return i.a.createElement(ee,Object.assign({elevation:6,variant:"filled"},e))}var ae=Object(b.a)((function(e){return{addButton:{position:"absolute",right:12,top:40,zIndex:99},joinButton:{position:"absolute",right:12,top:53,zIndex:99},toaster:{position:"absolute",right:12,bottom:90,zIndex:99}}}));t.default=Object(l.a)("teams",d.a)((function(e){var t,a=ae(e),l=Object(c.b)(),d=Object(o.useRef)(null),b=Object(s.h)(),E=Object(o.useState)(!1),y=Object(n.a)(E,2),v=y[0],j=y[1],k=Object(o.useState)(!1),x=Object(n.a)(k,2),C=x[0],M=x[1],z=Object(o.useState)(!1),R=Object(n.a)(z,2),W=R[0],w=(R[1],Object(c.c)((function(e){return e.teams.teams.oneTeam}))),S=Object(c.c)((function(e){return e.auth.user}));return w&&(t=w.members_confirmed.find((function(e){return e==S._id}))),t&&!C&&M(!0),Object(m.b)((function(){l(Object(u.d)(b))}),[l,b]),N.a.isEmpty(w)?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{classes:{contentWrapper:"p-0 sm:p-12 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136",wrapper:"min-h-0"},header:i.a.createElement(O,{data:w,pageLayout:d}),content:i.a.createElement("div",null,i.a.createElement("div",{style:{padding:"12px",display:"inline-block",verticalAlign:"top"}},i.a.createElement(L,{currentTeam:w})),i.a.createElement("div",{style:{padding:"12px",display:"inline-block",verticalAlign:"top"}},i.a.createElement(A,null)),i.a.createElement("div",{style:{padding:"12px",display:"inline-block",verticalAlign:"top"}},i.a.createElement(_,null))),sidebarInner:!0,ref:d,innerScroll:!0}),W?i.a.createElement(p.a,{animation:"transition.expandIn",delay:1e3},i.a.createElement(g.a,{color:"secondary","aria-label":"add",className:a.addButton,onClick:function(){console.log("Edit the team...")}},i.a.createElement(f.a,null,"edit"))):"",C?"":i.a.createElement(p.a,{animation:"transition.expandIn",delay:1e3},i.a.createElement(P.a,{variant:"outlined",size:"small",color:"secondary",className:a.joinButton,onClick:function(){return function(){console.log("Asked to join"),j(!0);var e={teamID:b.teamId,userID:S._id};l(Object(u.a)(e))}()}},"Ask to join team")),i.a.createElement(h.a,{open:v,autoHideDuration:4e3,onClose:function(){j(!1)},className:a.toaster},i.a.createElement(te,{severity:"success",style:{backgroundColor:"#55e7b5"}},"Your request has been recorded !")))}))}}]);