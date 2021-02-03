(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(0),o=i(12),s=i.n(o),r=(i(89),i(134)),c=i(72),l=i(14),u=i(73),d=Object(u.a)({typography:{fontFamily:'"Roboto"',fontSize:30,h1:{}},palette:{},color:{myBlack:"#111111",myRed:"#AA0000",myBlue:"#0044AA",myGreen:"#00BB00",myOrange:"#DD8800",myYellow:"#FFDF44",myBrown:"#BB6611",myPink:"#FFAAAA",myPurple:"#AA00FF",myMagenta:"#FF00FF",myDarkGreen:"#774400",myWhite:"#F5FFE8",red:"#FF4444",orange:"#FF8400",yellow:"#F0E900",lime:"#B0FF33",green:"#55FF77",cyan:"#22EEFF",blue:"#0088FF",purple:"#B400FF",skyGradient:"linear-gradient(to top, #E990F4, #FAE9FF)",conicGradient:"linear-gradient(to top right, red, orange, yellow, lime, green, lime, yellow, orange, red ) 1"}}),h=i(7),b=i(8),f=i(129),j=i(132),m=i(140),p=i(135),v=i(141),g=i(127),w=Object(g.a)((function(e){return{headingSelectRow:{direction:"row",display:"flex",padding:"0.5vw",paddingBottom:"1.4vh"},selectLabel:Object(b.a)({fontSize:"1.8vw",color:d.color.myBlack},e.breakpoints.down("sm"),{fontSize:"3.6vw"}),selectText:Object(b.a)({fontSize:"1.4vw",color:d.color.myBlue,height:"2vw"},e.breakpoints.down("sm"),{fontSize:"2.8vw",height:"4vw"}),selectWidth:Object(b.a)({width:"12vw"},e.breakpoints.down("sm"),{width:"24vw"}),selectIcon:Object(b.a)({fontSize:"2vw"},e.breakpoints.down("sm"),{fontSize:"4vw"})}})),O=function(e){var t=e.selectLabel,i=e.selectIndex,n=e.setItemIndex,o=e.itemsArray,s=w();return Object(a.jsxs)(f.a,{className:s.headingSelectRow,children:[Object(a.jsxs)(m.a,{className:s.selectLabel,children:[t,":"]}),Object(a.jsx)(p.a,{variant:"outlined",className:"".concat(s.selectText," ").concat(s.selectWidth),inputProps:{classes:{icon:s.selectIcon}},value:i,onChange:function(e){!function(e,t){t(e.target.value)}(e,n)},children:o.map((function(e,t){return Object(a.jsx)(v.a,{className:s.selectText,value:t,children:e})}))})]})},x=i(74),y=i(133),S=i(49),k=i(139),T=i(137),I=Object(g.a)((function(e){return{alert:Object(b.a)({fontSize:"2vw"},e.breakpoints.down("sm"),{fontSize:"4vw"})}}));function N(e){return Object(a.jsx)(T.a,Object(S.a)({elevation:6,variant:"filled"},e))}var A=function(e){var t=e.open,i=e.closeAlert,n=e.errorMessage,o=e.severity,s=I();return Object(a.jsx)(k.a,{open:t,autoHideDuration:6e3,onClose:i,children:Object(a.jsx)(N,{className:s.alert,onClose:i,severity:o,children:Object(a.jsx)("div",{children:n})})})},F=i(75),z=Object(g.a)((function(e){return{frame:{},centerRow:{display:"flex",justifyContent:"center"},topic:Object(b.a)({fontSize:"2.4vw",color:d.color.myOrange},e.breakpoints.down("sm"),{fontSize:"4.8vw",textAlign:"center"}),learningTool:Object(b.a)({fontSize:"1.6vw"},e.breakpoints.down("sm"),{fontSize:"3.2vw"})}})),C=function(e){var t=z(),i=e.children,n=e.topic,o=e.learningTool,s=Object(F.a)(e,["children","topic","learningTool"]);return Object(a.jsxs)(f.a,Object(S.a)(Object(S.a)({className:t.frame},s),{},{children:[Object(a.jsx)(f.a,{className:t.centerRow,children:Object(a.jsx)(j.a,{className:t.topic,children:n})}),Object(a.jsx)(f.a,{className:t.centerRow,children:Object(a.jsx)(j.a,{className:t.learningTool,children:o})}),i]}))},L=Object(g.a)((function(e){return{myInputText:Object(b.a)({width:"6vw",height:"2.4vw",fontSize:"2vw",margin:"0.5vw",textAlign:"right"},e.breakpoints.down("sm"),{width:"12vw",height:"4.8vw",fontSize:"4vw"}),centerRow:{display:"flex",justifyContent:"center"},keypadKey:Object(b.a)({width:"4vw",height:"4vw",fontSize:"2vw",minWidth:"1vw"},e.breakpoints.down("sm"),{width:"8vw",height:"8vw",fontSize:"4vw"})}})),q=function(e){var t=e.handleClick,i=(e.topicIndex,e.formulaFocusedIndex,["0","1","2","3","4","5","6","7","8","9"]),n=[d.color.red,d.color.orange,d.color.yellow,d.color.lime,d.color.green,d.color.cyan,d.color.blue,d.color.purple],o=Math.floor(Math.random()*n.length),s=L();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,{className:s.centerRow,children:i.map((function(e,i){if(i<5)return Object(a.jsx)(y.a,{className:s.keypadKey,value:e,variant:"contained",style:{color:d.color.myBlack,backgroundColor:n[(i+o)%n.length]},onClick:function(i){t(i,e)},children:e})}))}),Object(a.jsx)(f.a,{className:s.centerRow,children:i.map((function(e,i){if(i>4)return Object(a.jsx)(y.a,{className:s.keypadKey,value:e,variant:"contained",style:{color:d.color.myBlack,backgroundColor:n[(i+o+5)%n.length]},onClick:function(i){t(i,e)},children:e})}))})]})},B=i(136),R=Object(g.a)((function(e){return{integerInput:Object(b.a)({width:"4vw",height:"4vw",fontSize:"3.2vw",minWidth:0},e.breakpoints.down("sm"),{width:"8vw",height:"8vw",fontSize:"6.4vw"}),superscript:Object(b.a)({fontSize:"1.2vw",height:"3.6vw",lineHeight:"1vw",color:d.color.red},e.breakpoints.down("sm"),{fontSize:"2.4vw",height:"7.2vw",lineHeight:"2vw"})}})),M=function(e){var t,i,n,o=e.colorStage,s=e.value,r=e.superValue,c=R();switch(o){case"focused":t=d.color.myPink,i=d.color.myRed,n=1;break;case"highlighted":t=d.color.myYellow,i=d.color.myBlue,n=1;break;case"invisible":t=d.color.myWhite,i=d.color.myBlue,n=0;break;default:t=d.color.myWhite,i=d.color.myBlue,n=1}return Object(a.jsxs)(y.a,{className:c.integerInput,variant:"outlined",style:{backgroundColor:t,color:i,opacity:n},children:[Object(a.jsx)("sup",{className:c.superscript,children:0==r?"":r}),s]})},D=Object(g.a)((function(e){return{row:{display:"flex"},oneDigitLength:Object(b.a)({width:"4vw",height:"0.1vw"},e.breakpoints.down("sm"),{width:"8vw",height:"0.2vw"})}})),G=function(e){var t=e.lengthArray,i=D();return Object(a.jsx)(f.a,{className:i.row,children:t.map((function(e,t){return Object(a.jsx)(B.a,{borderBottom:3,className:i.oneDigitLength})}))})},E=Object(g.a)((function(e){return{oneDigitHeight:Object(b.a)({width:"0.1vw",height:"4vw"},e.breakpoints.down("sm"),{width:"0.2vw",height:"8vw"})}})),V=function(){var e=E();return Object(a.jsx)(B.a,{borderRight:3,className:e.oneDigitHeight})},W=i(71),P=i.n(W),H=Object(g.a)((function(e){return{centerRow:{display:"flex",justifyContent:"center"},endRow:{display:"flex",justifyContent:"flex-end"},formulaColumn:Object(b.a)({alignSelf:"center"},e.breakpoints.down("sm"),{}),spaceGrid:{height:"2vw"},formulaLine:Object(b.a)({fontSize:"2.5vw",letterSpacing:"0.6vw",textAlign:"left",justifyContent:"flex-start"},e.breakpoints.down("sm"),{fontSize:"5vw"}),formulaBox:Object(b.a)({width:"75vw"},e.breakpoints.down("sm"),{width:"90vw"}),verticalCenterRow:{display:"flex",alignItems:"center"},commonPadding:{margin:"1vw"},commonText:Object(b.a)({fontSize:"2vw",margin:"0.5vw"},e.breakpoints.down("sm"),{fontSize:"4vw"}),okButton:Object(b.a)({height:"4vw",width:"7vw",fontSize:"1vw",margin:"0.5vw"},e.breakpoints.down("sm"),{height:"8vw",width:"14vw",fontSize:"2vw"}),resetArrow:Object(b.a)({fontSize:"6vw"},e.breakpoints.down("sm"),{fontSize:"12vw"})}})),U=function(e){var t=e.languageIndex,i=e.topic,o=e.learningTool,s=e.topicIndex,r=e.learningToolIndex,c=Object(n.useState)(!1),l=Object(h.a)(c,2),u=l[0],d=l[1],b=Object(n.useState)(""),j=Object(h.a)(b,2),m=j[0],p=j[1],v=Object(n.useState)("error"),g=Object(h.a)(v,2),w=g[0],O=g[1],S=Object(n.useState)(!1),k=Object(h.a)(S,2),T=k[0],I=k[1],N=Object(n.useState)([]),F=Object(h.a)(N,2),z=F[0],L=F[1],B=Object(n.useState)(0),R=Object(h.a)(B,2),D=R[0],E=R[1],W=Object(n.useState)([]),U=Object(h.a)(W,2),J=U[0],Y=U[1],K=Object(n.useState)(0),Q=Object(h.a)(K,2),$=Q[0],X=Q[1],Z=Object(n.useState)(-1),_=Object(h.a)(Z,2),ee=_[0],te=_[1],ie=Object(n.useState)(!1),ae=Object(h.a)(ie,2),ne=ae[0],oe=ae[1],se=Object(n.useState)([]),re=Object(h.a)(se,2),ce=re[0],le=re[1],ue=Object(n.useState)(0),de=Object(h.a)(ue,2),he=de[0],be=de[1],fe=Object(n.useState)(0),je=Object(h.a)(fe,2),me=je[0],pe=je[1],ve=Object(n.useState)(r),ge=Object(h.a)(ve,2),we=ge[0],Oe=ge[1],xe=Object(n.useState)(!1),ye=Object(h.a)(xe,2),Se=ye[0],ke=ye[1],Te=Object(n.useState)(0),Ie=Object(h.a)(Te,2),Ne=Ie[0],Ae=Ie[1],Fe=Object(n.useState)([[]]),ze=Object(h.a)(Fe,2),Ce=ze[0],Le=ze[1],qe=Object(n.useState)(0),Be=Object(h.a)(qe,2),Re=Be[0],Me=Be[1],De=Object(n.useState)(0),Ge=Object(h.a)(De,2),Ee=Ge[0],Ve=Ge[1],We=Object(n.useState)([0]),Pe=Object(h.a)(We,2),He=Pe[0],Ue=Pe[1],Je=Object(n.useState)([s+1]),Ye=Object(h.a)(Je,2),Ke=Ye[0],Qe=Ye[1],$e=Object(n.useState)(!1),Xe=Object(h.a)($e,2),Ze=Xe[0],_e=Xe[1],et=Object(n.useState)(0),tt=Object(h.a)(et,2),it=tt[0],at=tt[1],nt=Object(n.useState)([]),ot=Object(h.a)(nt,2),st=ot[0],rt=ot[1],ct=Object(n.useState)(-1),lt=Object(h.a)(ct,2),ut=lt[0],dt=lt[1],ht=Object(n.useState)(0),bt=Object(h.a)(ht,2),ft=bt[0],jt=bt[1],mt=Object(n.useState)([]),pt=Object(h.a)(mt,2),vt=pt[0],gt=pt[1],wt=Object(n.useState)([]),Ot=Object(h.a)(wt,2),xt=Ot[0],yt=Ot[1],St=Object(n.useState)(!1),kt=Object(h.a)(St,2),Tt=kt[0],It=kt[1],Nt=Object(n.useState)(0),At=Object(h.a)(Nt,2),Ft=At[0],zt=At[1],Ct=Object(n.useState)([]),Lt=Object(h.a)(Ct,2),qt=Lt[0],Bt=Lt[1],Rt=200,Mt=1500,Dt=["\u4f60\u505a\u5f97\u5230\ufe57\u4f60\u5b8c\u6210\u4e86\u9019\u984c\u9664\u6cd5\u8a08\u7b97\ufe57","\u4f60\u505a\u5f97\u5230\ufe57\u4f60\u5b8c\u6210\u4e86\u8fd9\u9898\u9664\u6cd5\u8ba1\u7b97\ufe57","You can do it! You have completed this division calculation!","Vous pouvez le faire! Vous avez termin\xe9 ce calcul de division!"],Gt=["\u9019\u4f4d\u503c\u4e0a\u7684\u6578\u5b57\u4e0d\u6b63\u78ba\uff0c\u9019\u61c9\u662f\u4e0a\u65b9\u539f\u4f86\u88ab\u9664\u6578\u7684\u6578\u5b57\u3002","\u8fd9\u4f4d\u503c\u4e0a\u7684\u6570\u5b57\u4e0d\u6b63\u786e\uff0c\u8fd9\u5e94\u662f\u4e0a\u65b9\u539f\u6765\u88ab\u9664\u6570\u7684\u6570\u5b57\u3002","The digit on this place value is incorrect. This should be the digit from the original dividend above.","Le chiffre de cette valeur de position est incorrect. Cela devrait \xeatre le chiffre du dividende original ci-dessus."],Et=["0\u662f\u6b63\u78ba\u7684\uff0c\u5728\u5de6\u65b9\u76840\u4e0d\u7528\u5beb\u51fa\u4f86\u3002","0\u662f\u6b63\u786e\u7684\uff0c\u5728\u5de6\u65b9\u76840\u4e0d\u7528\u5199\u51fa\u6765\u3002","0 is correct, the 0 on the left does not need to be written.","0 est correct, le 0 \xe0 gauche n'a pas besoin d'\xeatre \xe9crit."],Vt=["\u9019\u4f4d\u503c\u4e0a\u7684\u5546\u592a\u5c0f\uff0c\u6240\u4ee5\u5f97\u51fa\u7684\u9918\u6578\u6bd4\u9664\u6578\u5927\u3002","\u8fd9\u4f4d\u503c\u4e0a\u7684\u5546\u592a\u5c0f\uff0c\u6240\u4ee5\u5f97\u51fa\u7684\u4f59\u6570\u6bd4\u9664\u6570\u5927\u3002","The quotient on this place value is too small, so the remainder obtained is larger than the divisor.","Le quotient sur cette valeur de position est trop petit, donc le reste obtenu est plus grand que le diviseur."],Wt=["\u9019\u4f4d\u503c\u4e0a\u7684\u6e1b\u6cd5\u4e0d\u6b63\u78ba\u3002","\u8fd9\u4f4d\u503c\u4e0a\u7684\u51cf\u6cd5\u4e0d\u6b63\u786e\u3002","The subtraction on this place value is incorrect.","La soustraction sur cette valeur de position est incorrecte."],Pt=["\u9019\u4f4d\u503c\u4e0a\u7684\u5546\u662f\u4e0d\u662f\u592a\u5927\u6216\u592a\u5c0f\ufe56\u8b93\u6211\u5011\u4f86\u9a57\u8a3c\u3002","\u8fd9\u4f4d\u503c\u4e0a\u7684\u5546\u662f\u4e0d\u662f\u592a\u5927\u6216\u592a\u5c0f\ufe56\u8ba9\u6211\u4eec\u6765\u9a8c\u8bc1\u3002","Is the quotient on this place value too small or too large? Let us check it.","Le quotient de cette valeur de position est-il trop petit ou trop grand? V\xe9rifions-le."],Ht=["\u9019\u4f4d\u503c\u4e0a\u7684\u5546\u592a\u5927\uff0c\u6240\u4ee5\u4e58\u51fa\u4f86\u7684\u7a4d\u6bd4\u9019\u4f4d\u503c\u4e0a\u7684\u88ab\u9664\u6578\u9084\u5927\u3002","\u8fd9\u4f4d\u503c\u4e0a\u7684\u5546\u592a\u5927\uff0c\u6240\u4ee5\u4e58\u51fa\u6765\u7684\u79ef\u6bd4\u8fd9\u4f4d\u503c\u4e0a\u7684\u88ab\u9664\u6570\u8fd8\u5927\u3002","The quotient on this place value is too large, so the product obtained is larger than the dividend on this place value.","Le quotient de cette valeur de position est trop grand, donc le produit obtenu est plus grand que le dividende de cette valeur de position."],Ut=["\u9019\u4f4d\u503c\u4e0a\u7684\u7a4d\u4e0d\u6b63\u78ba\uff0c\u9019\u61c9\u662f\u5546\u548c\u9664\u6578\u76f8\u95dc\u4f4d\u503c\u4e0a\u7684\u6578\u5b57\uff08\u9ec3\u8272\u683c\u5167\u7684\u6578\u5b57\uff09\u4e58\u51fa\u4f86\u7684\u7a4d\uff0c\u518d\u52a0\u4e0a\u53f3\u65b9\u4f4d\u503c\u7684\u9032\u4f4d\uff0c\u7136\u5f8c\u5beb\u4e0a\u9019\u6578\u7684\u500b\u4f4d\u6578\u5b57\u3002","\u8fd9\u4f4d\u503c\u4e0a\u7684\u79ef\u4e0d\u6b63\u786e\uff0c\u8fd9\u5e94\u662f\u5546\u548c\u9664\u6570\u76f8\u5173\u4f4d\u503c\u4e0a\u7684\u6570\u5b57\uff08\u9ec4\u8272\u683c\u5185\u7684\u6570\u5b57\uff09\u4e58\u51fa\u6765\u7684\u79ef\uff0c\u518d\u52a0\u4e0a\u53f3\u65b9\u4f4d\u503c\u7684\u8fdb\u4f4d\uff0c\u7136\u540e\u5199\u4e0a\u8fd9\u6570\u7684\u4e2a\u4f4d\u6570\u5b57\u3002","The product on this place value is incorrect. This should be the product of the digit (the digit in the yellow box) on the relevant place value of the quotient and the divisor, plus the carry of the right place value, and then write this number Ones digit.","Le produit de cette valeur de position est incorrect. Cela doit \xeatre le produit du chiffre (le chiffre dans la case jaune) sur la valeur de position appropri\xe9e du quotient et du diviseur, plus le report de la valeur de position correcte, puis \xe9crire ce nombre Un chiffre."],Jt=["\u9019\u4f4d\u503c\u4e0a\u7684\u9664\u6cd5\u662f ","\u8fd9\u4f4d\u503c\u4e0a\u7684\u9664\u6cd5\u662f ","The division on this place value is ","La division de cette valeur de position est "],Yt=["\b \uff0c\u9019\u4f4d\u503c\u4e0a\u7684\u5546\u63a5\u8fd1 "," \uff0c\u8fd9\u4f4d\u503c\u4e0a\u7684\u5546\u63a5\u8fd1 "," . The quotient of this value is close to "," . Le quotient de cette valeur est proche de "],Kt=[" \u3002"," \u3002"," ."," ."];Object(n.useEffect)((function(){Qt()}),[r]),Object(n.useEffect)((function(){Qt()}),[s]);function Qt(){O("error"),I(!1),E(0),X(0),te(-1),oe(!1),be(0),pe(0),Oe(r),ke(!1),Ae(0),Me(0),Ve(0),Ue([0]),Qe([s+1]),_e(!1),at(0),rt([]),dt(-1),jt(0),gt([]),yt([]),It(!1),zt(0),Bt([]);var e,t=[];for(e=0;e<s+2;e++)t.push(null);for(L(t),Y(t),Le([t]),t=[],e=0;e<r+1;e++)t.push(null);le(t)}function $t(e,t,i,a,n){var o=Object(x.a)(t);a>=o.length?o.push(e):a>=0&&(o[a]=e),n&&o.pop(),i(o)}function Xt(e,t,i,a,n,o){t((function(t){var s=t.map((function(t,o){return o==i?n?z:t.map((function(t,i){return i==a?e:t})):t}));return n&&i<0&&s.push(z),o&&s.pop(),s}))}var Zt=H();return Object(a.jsxs)(C,{topic:i+["\u9664\u4ee5","\u9664\u4ee5"," divided by "," divis\xe9 par "][t]+o,learningTool:"",children:[Object(a.jsx)(f.a,{className:Zt.spaceGrid}),Object(a.jsx)(f.a,{className:Zt.centerRow,children:Object(a.jsxs)(f.a,{className:Zt.formulaColumn,children:[Object(a.jsx)(f.a,{className:Zt.endRow,children:J.map((function(e,t){return Object(a.jsx)(M,{value:e,colorStage:t>ee||t<$?"invisible":2==D&&t==ee?"focused":ne&&t==ee?"highlighted":"usual"})}))}),Object(a.jsx)(f.a,{className:Zt.endRow,children:Object(a.jsx)(G,{lengthArray:z})}),Object(a.jsxs)(f.a,{className:Zt.endRow,children:[ce.map((function(e,t){return Object(a.jsx)(M,{value:e,colorStage:1==D&&he==t?"focused":Se&&t>=me&&t<=we?"highlighted":"usual"})})),Object(a.jsx)(V,{}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(f.a,{children:Ce[0].map((function(e,t){return Object(a.jsx)(M,{value:e,colorStage:0==D&&0==Re&&Ee==t?"focused":Ze&&t<=ee&&(2==D&&0==Re||0==D&&1==Re)?"highlighted":"usual"})}))}),st.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,{children:e.map((function(e,i){return Object(a.jsx)(M,{value:e,superValue:qt[t][i],colorStage:i<vt[t]||i>xt[t]?"invisible":3==D&&ut==t&&ft==i?"focused":Tt&&ut==t?"highlighted":"usual"})}))}),Object(a.jsx)(f.a,{className:Zt.endRow,children:Ce.length>t+1&&Object(a.jsx)(G,{lengthArray:z})}),Object(a.jsx)(f.a,{children:Ce.length>t+1&&Ce[t+1].map((function(e,i){return Object(a.jsx)(M,{value:e,colorStage:i<He[t+1]||i>Ke[t+1]?"invisible":0==D&&Re==t+1&&Ee==i?"focused":Ze&&(Re==t+1&&2==D||Re-2==t&&0==D)?"highlighted":"usual"})}))})]})}))]})]})]})}),Object(a.jsx)(f.a,{className:Zt.centerRow,children:T&&Object(a.jsx)(y.a,{className:Zt.okButton,variant:"contained",onClick:function(e){T&&Qt()},color:"primary",children:Object(a.jsx)(P.a,{className:Zt.resetArrow})})}),Object(a.jsx)(f.a,{className:Zt.spaceGrid}),Object(a.jsx)(q,{handleClick:function(e,i){var a=parseInt(i);switch(D){case 0:!function(e){if(Xt(e,Le,Re,Ee,!1,!1),0==Re)Ee<Ke[0]?Ve(Ee+1):E(1);else if(Ee>ee)if(e==Ce[0][ee+1]){var i,a=0;for(i=He[Re];i<Ke[Re];i++)a=10*a+Ce[Re][i];at(a=10*a+e),E(2),te(ee+1),pe(0),Oe(ce.length-1),ke(!0),_e(!0),It(!1)}else p(Gt[t]),O("error"),setTimeout((function(){d(!0)}),Rt);else{var n=it-Ft;e==Math.floor(n/Math.pow(10,ee-Ee))%10?Ee==He[Re-1]?(0==e&&(p(Et[t]),O("success"),setTimeout((function(){d(!0)}),Rt),setTimeout((function(){var e,t=Ee+1;for(e=t;e<=ee;e++)0==Ce[Re][e]?t=e+1:e=ee+1;$t(t,He,Ue,Re,!1)}),Mt)),n>=Ne?(p(Vt[t]),O("error"),setTimeout((function(){d(!0)}),Rt),setTimeout((function(){E(2),$t(null,J,Y,ee,!1),Oe(ce.length-1),Xt(0,Le,-1,-1,!1,!0),Me(Re-1),$t(0,He,Ue,-1,!0),$t(0,Ke,Qe,-1,!0),Xt(0,rt,-1,-1,!1,!0),Xt(0,Bt,-1,-1,!1,!0),dt(ut-1),$t(0,vt,gt,-1,!0),$t(0,xt,yt,-1,!0)}),Mt)):ee==Ce[0].length-1?(It(!1),I(!0),E(-1),p("\ud83d\udc4d"+Dt[t]),O("success"),setTimeout((function(){d(!0)}),Rt)):(Ve(ee+1),$t(ee+1,Ke,Qe,Re,!1))):(Ve(Ee-1),$t(Ee-1,He,Ue,He.length-1,!1)):(p(Wt[t]),O("error"),setTimeout((function(){d(!0)}),Rt))}}(a);break;case 1:!function(e){if($t(e,ce,le,he,!1),he<ce.length-1)be(he+1);else{E(2),te(0),_e(!0),ke(!0),at(Ce[0][0]);var t,i=0;for(t=0;t<ce.length-1;t++)i=10*i+ce[t];Ae(i=10*i+e)}}(a);break;case 2:!function(e){$t(e,J,Y,ee,!1);var i=Math.abs(Math.floor(it/Ne)-e);if(i>1||1==i&&(0==Math.floor(it/Ne)||0==e)){var a=Math.pow(10,ce.length-1),n=Math.round(Ne/a),o=n*a,s=Math.round(it/a);p(Jt[t]+(it+"\xf7")+Ne+Yt[t]+it+"\xf7"+o+"\u2248"+s+"\xf7"+n+Kt[t]),O("error"),setTimeout((function(){d(!0)}),Rt)}else if(0==e&&$==ee)if(ee==Ce[0].length-1)E(3),Xt(0,rt,-1,-1,!0,!1);else{var r=10*it+Ce[Re][ee+1];p(Et[t]),O("success"),setTimeout((function(){d(!0)}),Rt),setTimeout((function(){at(r),X($+1),te(ee+1)}),Mt)}else 1==i&&(p(Pt[t]),O("error"),setTimeout((function(){d(!0)}),Rt)),E(3),Xt(0,rt,-1,-1,!0,!1),Xt(0,Bt,-1,-1,!0,!1),oe(!0),ke(!0),Oe(ce.length-1),pe(ce.length-1),_e(!1),zt(0),dt(ut+1),jt(ee),$t(ee,vt,gt,vt.length,!1),$t(ee,xt,yt,xt.length,!1)}(a);break;case 3:!function(e){Xt(e,rt,ut,ft,!1,!1);var i=we<0?0:ce[we],a=J[ee]*i+(ft<ee?qt[ut][ft+1]:0);if(e==a%10)if(ft==He[Re]){0==e&&ft<ee&&(p(Et[t]),O("success"),setTimeout((function(){d(!0)}),Rt),setTimeout((function(){var e,t=ft+1;for(e=t;e<ee;e++)0==st[ut][e]?t=e+1:e=ee;$t(t,vt,gt,ut,!1)}),Mt));var n=a*Math.pow(10,xt[ut]-ft)+Ft;n>it?(p(Ht[t]),O("error"),setTimeout((function(){d(!0)}),Rt),setTimeout((function(){E(2),$t(null,J,Y,ee,!1),oe(!1),_e(!0),Oe(ce.length-1),Xt(0,rt,-1,-1,!1,!0),Xt(0,Bt,-1,-1,!1,!0),dt(ut-1),$t(0,vt,gt,-1,!0),$t(0,xt,yt,-1,!0)}),Mt)):(zt(n),E(0),oe(!1),ke(!1),_e(!0),It(!0),jt(-1),Xt(0,Le,-1,-1,!0,!1),Me(Re+1),Ve(ee),$t(ee,He,Ue,He.length,!1),$t(ee,Ke,Qe,Ke.length,!1))}else Xt(Math.floor(a/10),Bt,ut,ft,!1,!1),jt(ft-1),$t(ft-1,vt,gt,ut,!1),pe(me-1),Oe(we-1),zt(e*Math.pow(10,xt[ut]-ft)+Ft);else p(Ut[t]),O("error"),setTimeout((function(){d(!0)}),Rt)}(a)}}}),Object(a.jsx)(A,{open:u,closeAlert:function(e){d(!1)},errorMessage:m,severity:w})]})},J=i(6),Y=i.p+"static/media/createWater1.6439adad.jpg",K=i.p+"static/media/fiveBreadTwoFish2.eb800f24.jpg",Q=i.p+"static/media/prodigal1.7ae2e717.jpg",$=i.p+"static/media/prayer6.9c0c1bb5.jpg";var X=Object(J.a)((function(e){return{mathsLearningContainer:{margin:"1vw",minHeight:"97vh",backgroundImage:d.color.skyGradient},headingContainer:{direction:"row",display:"flex",alignItems:"center",justifyContent:"center"},scriptureVerseRow:{display:"flex",alignItems:"center",justifyContent:"center"},scriptureVerseBorder:Object(b.a)({direction:"row",display:"flex",alignItems:"center",justifyContent:"center",width:"80vw",borderWidth:"0.5vw",borderImage:d.color.conicGradient,border:"solid"},e.breakpoints.down("sm"),{width:"95vw"}),scriptureImage:Object(b.a)({height:"12vw",padding:"0.5vw"},e.breakpoints.down("sm"),{height:"20vw"}),scriptureVerse:Object(b.a)({width:"70vw",fontSize:"2vw",color:d.color.myPurple},e.breakpoints.down("sm"),{width:"90vw",fontSize:"4vw"}),prayerRow:{display:"flex",alignItems:"center",justifyContent:"center"},prayerImage:Object(b.a)({height:"6vw",padding:"0.5vw"},e.breakpoints.down("sm"),{height:"12vw"}),prayerText:Object(b.a)({width:"60vw",fontSize:"2vw",color:d.color.myPurple},e.breakpoints.down("sm"),{width:"80vw",fontSize:"4vw"}),commonText:Object(b.a)({fontSize:"1.4vw",textAlign:"center"},e.breakpoints.down("sm"),{fontSize:"2.8vw"}),emailText:Object(b.a)({width:"92vw",textAlign:"right",fontSize:"1.5vw",color:d.color.myBrown},e.breakpoints.down("sm"),{fontSize:"3vw"})}}))((function(e){var t=Object(n.useState)(2),i=Object(h.a)(t,2),o=i[0],s=i[1],r=Object(n.useState)(0),c=Object(h.a)(r,2),l=c[0],u=c[1],d=Object(n.useState)(0),b=Object(h.a)(d,2),m=b[0],p=b[1],v=Object(n.useState)(1),g=Object(h.a)(v,2),w=g[0],x=g[1],y=Object(n.useState)(0),S=Object(h.a)(y,2),k=S[0],T=S[1],I=[Y,K,Q],N=["\u5169\u4f4d\u6578","\u4e09\u4f4d\u6578","\u56db\u4f4d\u6578","\u4e94\u4f4d\u6578","\u4e24\u4f4d\u6570","\u4e09\u4f4d\u6570","\u56db\u4f4d\u6570","\u4e94\u4f4d\u6570","Two digits","Three digits","Four digits","Five digits","Deux chiffres","Trois chiffres","Quatre chiffres","Cinq chiffres"],A=["\u4e00\u4f4d\u6578","\u5169\u4f4d\u6578","\u4e09\u4f4d\u6578","\u4e00\u4f4d\u6578","\u5169\u4f4d\u6578","\u4e09\u4f4d\u6578","\u4e00\u4f4d\u6578","\u5169\u4f4d\u6578","\u4e09\u4f4d\u6578","\u4e00\u4f4d\u6578","\u5169\u4f4d\u6578","\u4e09\u4f4d\u6578","\u4e00\u4f4d\u6570","\u4e24\u4f4d\u6570","\u4e09\u4f4d\u6570","\u4e00\u4f4d\u6570","\u4e24\u4f4d\u6570","\u4e09\u4f4d\u6570","\u4e00\u4f4d\u6570","\u4e24\u4f4d\u6570","\u4e09\u4f4d\u6570","\u4e00\u4f4d\u6570","\u4e24\u4f4d\u6570","\u4e09\u4f4d\u6570","One digit","Two digits","Three digits","One digit","Two digits","Three digits","One digit","Two digits","Three digits","One digit","Two digits","Three digits","Un chiffre","Deux chiffres","Trois chiffres","Un chiffre","Deux chiffres","Trois chiffres","Un chiffre","Deux chiffres","Trois chiffres","Un chiffre","Deux chiffres","Trois chiffres"];Object(n.useEffect)((function(){var t=e.location.search,i=new URLSearchParams(t);null!=i.get("lang")&&""!=i.get("lang")&&i.get("lang")>=0&&i.get("lang")<4&&s(parseInt(i.get("lang"))),null!=i.get("ver")&&""!=i.get("ver")&&i.get("ver")>=0&&i.get("ver")<2&&u(parseInt(i.get("ver"))),T(Math.floor(3*Math.random()))}),[]);var F=e.classes;return Object(a.jsxs)(f.a,{className:F.mathsLearningContainer,spacing:0,children:[Object(a.jsxs)(f.a,{container:!0,className:F.headingContainer,children:[Object(a.jsx)(O,{selectLabel:"Language",selectIndex:o,setItemIndex:s,itemsArray:["\u7e41\u9ad4\u4e2d\u6587","\u7b80\u4f53\u4e2d\u6587","English","Fran\xe7aise"]}),Object(a.jsx)(O,{selectLabel:["\u7d93\u6587\u7248\u672c","\u7ecf\u6587\u7248\u672c","Scripture version","Version biblique"][o],selectIndex:l,setItemIndex:u,itemsArray:["\u5929\u4e3b\u6559","\u57fa\u7763\u6559","\u5929\u4e3b\u6559","\u57fa\u7763\u6559","Catholic","Christian","Catholique","Chr\xe9tienne"].slice(2*o,2*o+2)}),Object(a.jsx)(O,{selectLabel:["\u88ab\u9664\u6578","\u88ab\u9664\u6570","Dividend","Dividende"][o],selectIndex:m,setItemIndex:p,itemsArray:N.slice(4*o,4*o+4)}),Object(a.jsx)(O,{selectLabel:["\u9664\u6578","\u9664\u6570","Divisor","Diviseur"][o],selectIndex:w,setItemIndex:x,itemsArray:A.slice(3*(4*o+m),3*(4*o+m+1))})]}),Object(a.jsx)(f.a,{className:F.scriptureVerseRow,children:Object(a.jsxs)(f.a,{className:F.scriptureVerseBorder,border:1,children:[Object(a.jsx)("img",{className:F.scriptureImage,src:I[k]}),Object(a.jsx)(j.a,{className:F.scriptureVerse,children:["\u5929\u4e3b\u8aaa\uff1a\u300c\u5728\u6c34\u8207\u6c34\u4e4b\u9593\u8981\u6709\u7a79\u84bc\uff0c\u5c07\u6c34\u5206\u958b\uff01\u300d\u4e8b\u5c31\u9019\u6a23\u6210\u4e86\u3002\u5929\u4e3b\u9020\u4e86\u7a79\u84bc\uff0c\u5206\u958b\u4e86\u7a79\u84bc\u4ee5\u4e0b\u7684\u6c34\u548c\u7a79\u84bc\u4ee5\u4e0a\u7684\u6c34\u3002\u52751:6-7","\u9580\u5f92\u5c0d\u4ed6\u8aaa\uff1a\u300c\u6211\u5011\u9019\u88e1\u4ec0\u9ebc\u4e5f\u6c92\u6709\uff0c\u53ea\u6709\u4e94\u500b\u9905\u548c\u5169\u689d\u9b5a\u3002\u300d\u8036\u7a4c\u8aaa\uff1a\u300c\u4f60\u5011\u7d66\u6211\u62ff\u5230\u9019\u88e1\u4f86\uff01\u300d\u9042\u53c8\u5429\u5490\u7fa4\u773e\u5750\u5728\u8349\u5730\u4e0a\uff0c\u7136\u5f8c\u62ff\u8d77\u90a3\u4e94\u500b\u9905\u548c\u5169\u689d\u9b5a\uff0c\u671b\u5929\u795d\u798f\u4e86\uff1b\u628a\u9905\u64d8\u958b\uff0c\u905e\u7d66\u9580\u5f92\uff0c\u9580\u5f92\u518d\u5206\u7d66\u7fa4\u773e\u3002\u746a14:17-19","\u8036\u7a4c\u53c8\u8aaa\uff1a\u300c\u4e00\u500b\u4eba\u6709\u5169\u500b\u5152\u5b50\uff0c\u90a3\u5c0f\u7684\u5411\u7236\u89aa\u8aaa\uff1a\u7236\u89aa\uff0c\u8acb\u628a\u6211\u61c9\u5f97\u7684\u4e00\u5206\u5bb6\u7522\u7d66\u6211\u7f77\uff01\u7236\u89aa\u9042\u628a\u7522\u696d\u7d66\u4ed6\u5011\u5206\u958b\u4e86\u3002\u300d\u8def15:11-12","\u795e\u8aaa\uff1a\u300c\u773e\u6c34\u4e4b\u9593\u8981\u6709\u7a79\u84bc\uff0c\u628a\u6c34\u548c\u6c34\u5206\u958b\u3002\u300d\u795e\u5c31\u9020\u4e86\u7a79\u84bc\uff0c\u628a\u7a79\u84bc\u4ee5\u4e0b\u7684\u6c34\u548c\u7a79\u84bc\u4ee5\u4e0a\u7684\u6c34\u5206\u958b\u3002\u4e8b\u5c31\u9019\u6a23\u6210\u4e86\u3002\u52751:6-7","\u9580\u5f92\u8aaa\uff1a\u300c\u6211\u5011\u9019\u88cf\u53ea\u6709\u4e94\u500b\u9905\u3001\u5169\u689d\u9b5a\u3002\u300d\u8036\u7a4c\u8aaa\uff1a\u300c\u62ff\u904e\u4f86\u7d66\u6211\u3002\u300d\u65bc\u662f\u4ed6\u5429\u5490\u773e\u4eba\u5750\u5728\u8349\u5730\u4e0a\uff0c\u5c31\u62ff\u8457\u9019\u4e94\u500b\u9905\u548c\u5169\u689d\u9b5a\uff0c\u671b\u8457\u5929\u795d\u798f\uff0c\u64d8\u958b\u9905\uff0c\u905e\u7d66\u9580\u5f92\uff0c\u9580\u5f92\u53c8\u905e\u7d66\u773e\u4eba\u3002\u592a14:17-19","\u8036\u7a4c\u53c8\u8aaa\uff1a\u300c\u4e00\u500b\u4eba\u6709\u5169\u500b\u5152\u5b50\u3002\u5c0f\u5152\u5b50\u5c0d\u7236\u89aa\u8aaa\uff1a\u300e\u7236\u89aa\uff0c\u8acb\u4f60\u628a\u6211\u61c9\u5f97\u7684\u5bb6\u696d\u5206\u7d66\u6211\u3002\u300f\u4ed6\u7236\u89aa\u5c31\u628a\u8ca1\u7522\u5206\u7d66\u4ed6\u5011\u3002\u300d\u8def15:11-12","\u5929\u4e3b\u8bf4\uff1a\u300c\u5728\u6c34\u4e0e\u6c34\u4e4b\u95f4\u8981\u6709\u7a79\u82cd\uff0c\u5c06\u6c34\u5206\u5f00\uff01\u300d\u4e8b\u5c31\u8fd9\u6837\u6210\u4e86\u3002\u5929\u4e3b\u9020\u4e86\u7a79\u82cd\uff0c\u5206\u5f00\u4e86\u7a79\u82cd\u4ee5\u4e0b\u7684\u6c34\u548c\u7a79\u82cd\u4ee5\u4e0a\u7684\u6c34\u3002\u521b1:6-7","\u95e8\u5f92\u5bf9\u4ed6\u8bf4\uff1a\u300c\u6211\u4eec\u8fd9\u91cc\u4ec0\u4e48\u4e5f\u6ca1\u6709\uff0c\u53ea\u6709\u4e94\u4e2a\u997c\u548c\u4e24\u6761\u9c7c\u3002\u300d\u8036\u7a23\u8bf4\uff1a\u300c\u4f60\u4eec\u7ed9\u6211\u62ff\u5230\u8fd9\u91cc\u6765\uff01\u300d\u9042\u53c8\u5429\u5490\u7fa4\u4f17\u5750\u5728\u8349\u5730\u4e0a\uff0c\u7136\u540e\u62ff\u8d77\u90a3\u4e94\u4e2a\u997c\u548c\u4e24\u6761\u9c7c\uff0c\u671b\u5929\u795d\u798f\u4e86\uff1b\u628a\u997c\u64d8\u5f00\uff0c\u9012\u7ed9\u95e8\u5f92\uff0c\u95e8\u5f92\u518d\u5206\u7ed9\u7fa4\u4f17\u3002\u739b14:17-19","\u8036\u7a23\u53c8\u8bf4\uff1a\u300c\u4e00\u4e2a\u4eba\u6709\u4e24\u4e2a\u513f\u5b50\uff0c\u90a3\u5c0f\u7684\u5411\u7236\u4eb2\u8bf4\uff1a\u7236\u4eb2\uff0c\u8bf7\u628a\u6211\u5e94\u5f97\u7684\u4e00\u5206\u5bb6\u4ea7\u7ed9\u6211\u7f62\uff01\u7236\u4eb2\u9042\u628a\u4ea7\u4e1a\u7ed9\u4ed6\u4eec\u5206\u5f00\u4e86\u3002\u300d\u8def15:11-12 ","\u795e\u8bf4\uff1a\u300c\u4f17\u6c34\u4e4b\u95f4\u8981\u6709\u7a79\u82cd\uff0c\u628a\u6c34\u548c\u6c34\u5206\u5f00\u3002\u300d\u795e\u5c31\u9020\u4e86\u7a79\u82cd\uff0c\u628a\u7a79\u82cd\u4ee5\u4e0b\u7684\u6c34\u548c\u7a79\u82cd\u4ee5\u4e0a\u7684\u6c34\u5206\u5f00\u3002\u4e8b\u5c31\u8fd9\u6837\u6210\u4e86\u3002\u521b1:6-7","\u95e8\u5f92\u8bf4\uff1a\u300c\u6211\u4eec\u8fd9\u91cc\u53ea\u6709\u4e94\u4e2a\u997c\u3001\u4e24\u6761\u9c7c\u3002\u300d\u8036\u7a23\u8bf4\uff1a\u300c\u62ff\u8fc7\u6765\u7ed9\u6211\u3002\u300d\u4e8e\u662f\u4ed6\u5429\u5490\u4f17\u4eba\u5750\u5728\u8349\u5730\u4e0a\uff0c\u5c31\u62ff\u7740\u8fd9\u4e94\u4e2a\u997c\u548c\u4e24\u6761\u9c7c\uff0c\u671b\u7740\u5929\u795d\u798f\uff0c\u64d8\u5f00\u997c\uff0c\u9012\u7ed9\u95e8\u5f92\uff0c\u95e8\u5f92\u53c8\u9012\u7ed9\u4f17\u4eba\u3002\u592a14:17-19","\u8036\u7a23\u53c8\u8bf4\uff1a\u300c\u4e00\u4e2a\u4eba\u6709\u4e24\u4e2a\u513f\u5b50\u3002\u5c0f\u513f\u5b50\u5bf9\u7236\u4eb2\u8bf4\uff1a\u300e\u7236\u4eb2\uff0c\u8bf7\u4f60\u628a\u6211\u5e94\u5f97\u7684\u5bb6\u4e1a\u5206\u7ed9\u6211\u3002\u300f\u4ed6\u7236\u4eb2\u5c31\u628a\u8d22\u4ea7\u5206\u7ed9\u4ed6\u4eec\u3002\u300d\u8def15:11-12 ","God said, 'Let there be a vault through the middle of the waters to divide the waters in two.' And so it was. God made the vault, and it divided the waters under the vault from the waters above the vault.Genesis1:6-7","But they answered, 'All we have with us is five loaves and two fish.' So he said, 'Bring them here to me.' He gave orders that the people were to sit down on the grass; then he took the five loaves and the two fish, raised his eyes to heaven and said the blessing. And breaking the loaves he handed them to his disciples, who gave them to the crowds.Matthew14:17-19","Then he said, 'There was a man who had two sons. The younger one said to his father, 'Father, let me have the share of the estate that will come to me.' So the father divided the property between them.'Luke15:11-12","And God said, Let there be a solid arch stretching over the waters, parting the waters from the waters. And God made the arch for a division between the waters which were under the arch and those which were over it: and it was so.Genesis1:6-7","And they say to him, We have here but five cakes of bread and two fishes. And he said, Give them to me. And he gave orders for the people to be seated on the grass; and he took the five cakes of bread and the two fishes and, looking up to heaven, he said words of blessing, and made division of the food, and gave it to the disciples, and the disciples gave it to the people.Matthew14:17-19","And he said, A certain man had two sons: And the younger of them said to his father, Father, give me that part of your property which will be mine. And he made division of his goods between them.Luke15:11-12","Dieu dit: ' Qu'il y ait un firmament entre les eaux, et qu'il s\xe9pare les eaux d'avec les eaux. ' Et Dieu fit le firmament, et il s\xe9para les eaux qui sont au-dessous du firmament d'avec les eaux qui sont au-dessus du firmament. Et cela fut ainsi.Gen\xe8se1:6-7","Ils lui dirent: ' Nous n'avons ici que cinq pains et deux poissons. ' \t' Apportes-les-moi, ici, ' dit-il. Apr\xe8s avoir fait asseoir les foules sur l'herbe, il prit les cinq pains et les deux poissons, leva les yeux au ciel, pronon\xe7a la b\xe9n\xe9diction, rompit les pains et les donna aux disciples, et les disciples les donn\xe8rent aux foules.Matthieu14:17-19","Il dit encore: ' Un homme avait deux fils. Le plus jeune dit \xe0 son p\xe8re: ' Mon p\xe8re, donne-moi la part de biens qui doit me revenir. ' Et il leur partagea son avoir. 'Luc15:11-12","Dieu dit : \xab Qu'il y ait une \xe9tendue entre les eaux pour les s\xe9parer les unes des autres ! \xbb Dieu fit l'\xe9tendue et s\xe9para ainsi l\u2019eau qui est au-dessous de l'\xe9tendue de celle qui est au-dessus. Cela se passa ainsi.Gen\xe8se1:6-7","Mais ils lui dirent : \xab Nous n'avons ici que cinq pains et deux poissons. \xbb \xab Apportez-les-moi ici \xbb, leur dit J\xe9sus. Il fit asseoir la foule sur l'herbe, prit les cinq pains et les deux poissons, leva les yeux vers le ciel et pronon\xe7a la pri\xe8re de b\xe9n\xe9diction. Puis il rompit les pains et les donna aux disciples, qui les distribu\xe8rent \xe0 la foule.Matthieu14:17-19","Il dit encore : \xab Un homme avait deux fils. Le plus jeune dit \xe0 son p\xe8re : \u2018Mon p\xe8re, donne-moi la part de l\u2019h\xe9ritage qui doit me revenir.\u2019Le p\xe8re leur partagea alors ses biens.Luc15:11-12"][3*(2*o+l)+k]})]})}),Object(a.jsx)(U,{languageIndex:o,topic:N[4*o+m],learningTool:A[3*(4*o+m)+w],topicIndex:m,learningToolIndex:w}),Object(a.jsxs)(f.a,{className:F.prayerRow,children:[Object(a.jsx)("img",{className:F.prayerImage,src:$}),Object(a.jsx)(j.a,{className:F.prayerText,children:["\u4e3b\u8036\u7a4c\uff0c\u611f\u8b1d\u7962\u8cdc\u7d66\u6211\u7368\u7279\u7684\u6069\u5178\uff0c\u9019\u6069\u5178\u5728\u4e00\u751f\u4e2d\u5f15\u5c0e\u6211\u8d70\u5411\u5929\u7236\u7684\u5149\u660e\uff0c\u4e26\u61f7\u62b1\u611b\u53bb\u5e6b\u52a9\u6709\u56f0\u96e3\u7684\u4eba\uff01","\u4e3b\u8036\u7a23\uff0c\u611f\u8c22\u7962\u8d50\u7ed9\u6211\u72ec\u7279\u7684\u6069\u5178\uff0c\u8fd9\u6069\u5178\u5728\u4e00\u751f\u4e2d\u5f15\u5bfc\u6211\u8d70\u5411\u5929\u7236\u7684\u5149\u660e\uff0c\u5e76\u6000\u62b1\u7231\u53bb\u5e2e\u52a9\u6709\u56f0\u96be\u7684\u4eba\uff01","Lord Jesus, thank you for giving me the unique grace that guides me to the light of the Father in my life, and embraces love to help people in difficulties!","Seigneur J\xe9sus, merci de m'accorder la gr\xe2ce unique qui me guide vers la lumi\xe8re du P\xe8re dans ma vie, et embrasse l'amour pour aider les gens en difficult\xe9!"][o]})]}),Object(a.jsx)(f.a,{className:F.prayerRow,children:Object(a.jsx)(j.a,{className:F.commonText,children:["\u4f7f\u7528\u65b9\u6cd5\uff1a\u5148\u6309\u7a7a\u683c\uff0c\u518d\u8f38\u5165\u6578\u5b57\u6216\u904b\u7b97\u7b26\u865f\u3002","\u4f7f\u7528\u65b9\u6cd5\uff1a\u5148\u6309\u7a7a\u683c\uff0c\u518d\u8f93\u5165\u6570\u5b57\u6216\u8fd0\u7b97\u7b26\u53f7\u3002","How to use: Press the space first, then enter a number or an operator.","Comment utiliser: appuyez d'abord sur l'espace, puis entrez un nombre ou un op\xe9rateur."][o]})}),Object(a.jsx)(f.a,{className:F.prayerRow,children:Object(a.jsx)(j.a,{className:F.commonText,children:["\u958b\u555f\u901a\u77e5\uff0c\u8a08\u7b97\u904e\u7a0b\u6703\u986f\u793a\u63d0\u793a\u3002","\u5f00\u542f\u901a\u77e5\uff0c\u8ba1\u7b97\u8fc7\u7a0b\u4f1a\u663e\u793a\u63d0\u793a\u3002","Turn on the notification, prompts will be displayed during the calculation.","Activez la notification, des invites seront affich\xe9es pendant le calcul."][o]})}),Object(a.jsx)(f.a,{className:F.emailRow,children:Object(a.jsx)(j.a,{className:F.emailText,children:"samsoncsyuapple@gmail.com"})})]})}));i(97);var Z=function(){return Object(a.jsx)(r.a,{theme:d,children:Object(a.jsx)(c.a,{children:Object(a.jsx)(l.a,{path:"/",component:X})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(Z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,i){},97:function(e,t,i){}},[[100,1,2]]]);
//# sourceMappingURL=main.2a7a3e9a.chunk.js.map