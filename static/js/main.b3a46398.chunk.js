(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{189:function(n,e,t){},545:function(n,e,t){"use strict";t.r(e);var a,i,c,o,r,s,d,l,j,x,p,b,m,h,g,f,O,u,w,v,y,k,z,S,N,I,M,C,B,A,L,E,F,P,_,T,H,R,D,G,J,W,Y,Q,q,K,U,V,X,Z,$,nn,en,tn,an,cn,on,rn,sn,dn,ln,jn,xn,pn,bn,mn,hn,gn,fn=t(2),On=t.n(fn),un=t(52),wn=t.n(un),vn=(t(189),t(98)),yn=t(25),kn=t(21),zn=t(6),Sn=t(7),Nn=t(43),In=t(32),Mn=Sn.a.aside(a||(a=Object(zn.a)(["\n background: #143642;\n position: fixed;\n z-index: 999;\n width: 100%;\n height: 100%;\n display: grid;\n align-items: center;\n top: 0;\n left: 0;\n transition: 0.5s ease-in-out;\n opacity: ",";\n top: ",";\n"])),(function(n){return n.isSideNavOpen?"100%":"0"}),(function(n){return n.isSideNavOpen?"0":"-100%"})),Cn=Sn.a.div(i||(i=Object(zn.a)(["\n top: 1.5rem;\n right: 1.5rem;\n position: absolute;\n background: transparent;\n font-size: 2rem;\n cursor: pointer;\n outline: none;\n \n  &:hover {\n  font-size: 2.5rem;\n }\n"]))),Bn=Object(Sn.a)(In.j)(c||(c=Object(zn.a)(["\n color: #fff;\n"]))),An=Sn.a.div(o||(o=Object(zn.a)(["\n color: #fff;\n"]))),Ln=Sn.a.ul(r||(r=Object(zn.a)(["\n display: grid;\n grid-template-column: 1fr;\n grid-template-rows: repeat(4, 75px);\n text-align: center;\n\n @media screen and (max-width: 480px) {\n  grid-template-rows: repeat(4, 55px);\n }\n"]))),En=Object(Sn.a)(Nn.Link)(s||(s=Object(zn.a)(["\n align-items: center;\n justify-content: center;\n display: flex;\n font-size: 1.5rem;\n text-decoration: none;\n list-style: none;\n text-decoration: none;\n color: #fff;\n cursor: pointer;\n transition: 0.5s ease-in-out;\n\n &:hover {\n  color: #A56336;\n  font-size: 2rem;\n  transition: 0.3s ease-in-out;\n  border-bottom: 1px solid #fff;\n  border-top: 1px solid #fff;\n }\n"]))),Fn=Sn.a.div(d||(d=Object(zn.a)(["\n display: flex;\n justify-content: center\n"]))),Pn=[{section:"about",label:"About Me"},{section:"technologies",label:"Technologies"},{section:"projects",label:"Projects"},{section:"contact",label:"Contact"}],_n=t(1),Tn=function(n){var e=n.isSideNavOpen,t=n.toggle;return Object(_n.jsxs)(Mn,{isSideNavOpen:e,onClick:t,children:[Object(_n.jsx)(Cn,{onClick:t,children:Object(_n.jsx)(Bn,{})}),Object(_n.jsxs)(An,{children:[Object(_n.jsx)(Ln,{children:Pn.map((function(n){return Object(_n.jsx)(En,{to:n.section,onClick:t,children:n.label})}))}),Object(_n.jsx)(Fn,{})]})]})},Hn=t(91),Rn=t(0),Dn=Sn.a.nav(l||(l=Object(zn.a)(["\n background: ",";\n margin-top: -65px;\n height: 65px;\n display: flex;\n justify-content: center;\n font-size: 1rem;\n top: 0;\n z-index: 10;\n position: sticky;\n\n @media screen and (max-width: 960px) {\n  transition: 0.5s all ease;\n }\n"])),(function(n){return n.positionScrollNav?"#A56336":"transparent"})),Gn=Sn.a.div(j||(j=Object(zn.a)(["\n display: none;\n\n @media screen and (max-width: 768px) {\n  color: #fff;\n  font-size: 2rem;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-100%, 50%);\n }\n"]))),Jn=Sn.a.ul(x||(x=Object(zn.a)(["\n display: flex;\n margin-right: -20px;\n align-items: center;\n list-style: none;\n text-align: center;\n\n @media screen and (max-width: 768px) {\n  display: none;\n }\n"]))),Wn=Sn.a.div(p||(p=Object(zn.a)(["\n width: 100%;\n padding: 25px;\n max-width: 1000px;\n justify-content: space-between;\n display: flex;\n height: 65px;\n z-index: 1;\n"]))),Yn=Object(Sn.a)(vn.b)(b||(b=Object(zn.a)(["\n color: #fff;\n cursor: pointer;\n text-decoration: none;\n font-size: 1.5rem;\n display: flex;\n align-items: center;\n margin-left: 20px;\n font-weight: bold;\n\n &:hover {\n font-size: 2rem;\n}\n"]))),Qn=Object(Sn.a)(Nn.Link)(m||(m=Object(zn.a)(["\n color: #fff;\n display: flex;\n align-items: center;\n text-decoration: none;\n padding: 1rem;\n height: 100%;\n cursor: pointer;\n \n &:hover {\n  font-size: 1.5rem;\n }\n\n &.active {\n  border-bottom: 4px solid #fff;\n  color: #143642;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n }\n\n"]))),qn=[{section:"about",label:"About Me"},{section:"technologies",label:"Technologies"},{section:"projects",label:"Projects"},{section:"contact",label:"Contact"}],Kn=function(n){var e=n.toggle,t=Object(fn.useState)(!1),a=Object(kn.a)(t,2),i=a[0],c=a[1],o=function(){window.scrollY>=65?c(!0):c(!1)};return Object(fn.useEffect)((function(){window.addEventListener("scroll",o)}),[]),Object(_n.jsx)(_n.Fragment,{children:Object(_n.jsx)(Rn.b.Provider,{value:{color:"#fff"},children:Object(_n.jsx)(Dn,{positionScrollNav:i,children:Object(_n.jsxs)(Wn,{children:[Object(_n.jsx)(Yn,{to:"/",onClick:function(){Nn.animateScroll.scrollToTop()},children:"My Portfolio"}),Object(_n.jsx)(Gn,{onClick:e,children:Object(_n.jsx)(Hn.b,{})}),Object(_n.jsx)(Jn,{children:qn.map((function(n){return Object(_n.jsx)(Qn,{to:n.section,offset:-65,smooth:!0,duration:1e3,spy:!0,exact:"true",children:n.label})}))})]})})})})},Un=t(100),Vn=t.n(Un),Xn=t(173),Zn=Sn.a.div(h||(h=Object(zn.a)(["\n position: absolute;\n width: 100%;\n height: 100%;\n overflow: hidden;\n"]))),$n=Sn.a.div(g||(g=Object(zn.a)(["\n height: 800px;\n background: #143642;\n display: flex;\n justify-content: center;\n position: relative;\n z-index: 1;\n align-items: center;\n padding: 0 30px;\n\n :before {\n  position: absolute;\n  z-index: 2;\n  content: '';\n  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);\n }\n"]))),ne=Sn.a.div(f||(f=Object(zn.a)(["\n z-index: 3;\n max-width: 1000px;\n position: absolute;\n padding: 10px 25px;\n display: flex;\n flex-direction: column;\n align-items: center;\n"]))),ee=Sn.a.h1(O||(O=Object(zn.a)(["\n font-size: 50px;\n text-align: center;\n color: #fff;\n\n @media screen and (max-width: 768px) {\n  font-size: 40px;\n }\n\n @media screen and (max-width: 480px) {\n  font-size: 30px\n }\n"]))),te=Sn.a.p(u||(u=Object(zn.a)(["\n max-width: 600px;\n margin-top: 25px;\n font-size: 25px;\n text-align: center;\n color: #fff;\n\n @media screen and (max-width: 768px) {\n  font-size: 20px;\n }\n\n @media screen and (max-width: 480px) {\n  font-size: 15px\n }\n"]))),ae=Sn.a.div(w||(w=Object(zn.a)(["\n margin-top: 35px;\n margin-bottom: 35px;\n align-items: center\n display: flex;\n flex-direction: column;\n"]))),ie=Object(Sn.a)(Xn.a)(v||(v=Object(zn.a)(["\n margin-left: 5px;\n font-size: 20px;\n"]))),ce=Object(Sn.a)(Hn.a)(y||(y=Object(zn.a)(["\n margin-left: 5px;\n font-size: 20px;\n"]))),oe=Object(Sn.a)(Nn.Link)(k||(k=Object(zn.a)(["\n background: #6F523B;\n border-radius: 10px;\n white-space: nowrap;\n cursor: pointer;\n align-items: center;\n justify-content: center;\n color: #fff;\n padding: 15px;\n box-shadow: 0 5px 5px rgba(0,0,0,0.2);\n\n &:hover {\n  background-color: #fff;\n  color: #A56336;\n  transition: all 0.5s ease-in-out;\n }\n"]))),re=t(174),se=t.n(re),de=t(575),le=Object(de.a)({particlesCanva:{position:"absolute"}}),je=function(){var n=le();return Object(_n.jsx)(_n.Fragment,{children:Object(_n.jsx)(se.a,{canvasClassName:n.particlesCanva,params:{particles:{number:{value:30,density:{enable:!0,value_area:2e3}},shape:{type:"octogon",stroke:{width:2}},size:{value:5,random:!0,anim:{enable:!0,sync:!0}},opacity:{value:1,random:!0,anim:{enable:!0,opacity_min:.1,sync:!0}}}}})})},xe=function(){var n=Object(fn.useState)(!1),e=Object(kn.a)(n,2),t=e[0],a=e[1],i=function(){a(!t)};return Object(_n.jsxs)($n,{children:[Object(_n.jsx)(Zn,{children:Object(_n.jsx)(je,{})}),Object(_n.jsxs)(ne,{children:[Object(_n.jsx)(ee,{children:Object(_n.jsx)(Vn.a,{strings:["Hello, I'm Scott."],typeSpeed:75})}),Object(_n.jsx)(ae,{children:Object(_n.jsxs)(oe,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",onMouseEnter:i,onMouseLeave:i,children:[Object(_n.jsx)(Vn.a,{strings:["Say Hello!"],typeSpeed:75}),t?Object(_n.jsx)(ie,{}):Object(_n.jsx)(ce,{})]})}),Object(_n.jsx)(te,{children:Object(_n.jsx)(Vn.a,{strings:["Web Development","Full Stack Software Engineering","MERN"],typeSpeed:70,backSpeed:90,loop:!0})})]})]})},pe=Sn.a.div(z||(z=Object(zn.a)(["\n background: #A56336;\n color: #fff;\n\n @media screen and (max-width: 768px) {\n  padding: 90px 0;\n }\n"]))),be=Sn.a.div(S||(S=Object(zn.a)(["\n height: 850px;\n width: 100%;\n max-width: 1000px;\n justify-content: center;\n display: grid;\n z-index: 1;\n margin-right: auto;\n margin-left: auto;\n padding: 25px;\n"]))),me=Sn.a.div(N||(N=Object(zn.a)(["\n text-align: center;\n max-width: 555px;\n height: 100%;\n"]))),he=Sn.a.img(I||(I=Object(zn.a)(["\n width: 85%;\n margin-right: 1%;\n margin-left: 1%;\n margin-top: 5%;\n margin-bottom: 5%;\n border-radius: 10px;\n opacity: 75%;\n"]))),ge=Sn.a.div(M||(M=Object(zn.a)(["\n align-items: center;\n display: grid;\n grid-auto-columns: minmax(auto, 1fr);\n grid-template-areas: 'column1 column2';\n"]))),fe=Sn.a.div(C||(C=Object(zn.a)(["\n text-align: center;\n padding: 10px;\n margin-bottom: 10px;\n grid-area: column1;\n"]))),Oe=Sn.a.div(B||(B=Object(zn.a)(["\n text-align: center;\n padding: 10px;\n margin-bottom: 10px;\n grid-area: column2;\n"]))),ue=Sn.a.div(A||(A=Object(zn.a)(["\n padding-top: 0;\n padding-bottom: 50px;\n max-width: 500px;\n"]))),we=Sn.a.h1(L||(L=Object(zn.a)(["\n margin-bottom: 25px; \n font-size: 45px;\n line-height: 1;\n font-weight: 750;\n text-transform: uppercase;\n color: #fff;\n\n @media screen and (max-width: 480px) {\n  font-size: 30px;\n }\n"]))),ve=Sn.a.p(E||(E=Object(zn.a)(["\n max-width: 430px;\n margin-bottom: 30px;\n font-size: 19px;\n line-height: 25px;\n color: #fff;\n\n @media screen and (max-width: 480px) {\n  font-size: 15px;\n }\n"]))),ye="About Me",ke="I am a Southern California resident and love to go hiking with my partner Emily and my two amazing pups. I have a team oriented personality and love working with others to build exciting applications and implement new technologies",ze=t.p+"static/media/self.9d99baed.jpeg",Se=t(580),Ne=function(){return Object(_n.jsx)(_n.Fragment,{children:Object(_n.jsx)(pe,{id:"about",children:Object(_n.jsx)(be,{children:Object(_n.jsxs)(ge,{children:[Object(_n.jsx)(fe,{children:Object(_n.jsxs)(ue,{children:[Object(_n.jsx)(we,{children:ye}),Object(_n.jsx)("hr",{}),Object(_n.jsx)("br",{}),Object(_n.jsx)(ve,{children:ke})]})}),Object(_n.jsx)(Oe,{children:Object(_n.jsx)(Se.a,{elevation:8,style:{backgroundColor:"#6F523B"},children:Object(_n.jsx)(me,{children:Object(_n.jsx)(he,{src:ze,alt:"Self Pic"})})})})]})})})})},Ie=Sn.a.div(F||(F=Object(zn.a)(["\n background: #143642;\n color: #fff;\n\n @media screen and (max-width: 768px) {\n  padding: 90px 0;\n }\n"]))),Me=Sn.a.div(P||(P=Object(zn.a)(["\n height: 850px;\n width: 100%;\n max-width: 1000px;\n justify-content: center;\n display: grid;\n z-index: 1;\n margin-right: auto;\n margin-left: auto;\n padding: 25px;\n"]))),Ce=Sn.a.div(_||(_=Object(zn.a)(["\n align-items: center;\n display: grid;\n grid-auto-columns: minmax(auto, 1fr);\n grid-template-areas: 'column2 column1'\n"]))),Be=Sn.a.div(T||(T=Object(zn.a)(["\n text-align: center;\n padding: 10px;\n margin-bottom: 10px;\n grid-area: column1;\n"]))),Ae=Sn.a.div(H||(H=Object(zn.a)(["\n text-align: center;\n padding: 10px;\n margin-bottom: 10px;\n grid-area: column2;\n"]))),Le=Sn.a.div(R||(R=Object(zn.a)(["\npadding-top: 0;\npadding-bottom: 50px;\nmax-width: 550px;\n"]))),Ee=Sn.a.h1(D||(D=Object(zn.a)(["\n margin-bottom: 25px;\n font-size: 45px;\n line-height: 1;\n font-weight: 750;\n text-transform: uppercase;\n color: #fff;\n\n @media screen and (max-width: 480px) {\n  font-size: 30px;\n }\n"]))),Fe=Sn.a.p(G||(G=Object(zn.a)(["\n max-width: 430px;\n margin-bottom: 30px;\n font-size: 19px;\n line-height: 25px;\n color: #fff;\n\n @media screen and (max-width: 480px) {\n  font-size: 15px;\n }\n"]))),Pe=(Sn.a.div(J||(J=Object(zn.a)(["\n display: flex;\n justify-content: flex-start;\n"]))),Sn.a.div(W||(W=Object(zn.a)(["\n display: grid;\n grid-template-columns: repeat(4, 1fr);\n\n @media screen and (max-width: 480px) {\n grid-template-columns: repeat(2, 1fr);\n}\n"]))),Sn.a.div(Y||(Y=Object(zn.a)(["\n font-size: 25px;\n margin-bottom: 35px;\n color: #fff;\n \n @media screen and (max-width: 480px) {\n font-size: 10px;\n margin-bottom: 10px;\n}\n"])))),_e=Sn.a.div(Q||(Q=Object(zn.a)(["\n font-size: 50px;\n margin-bottom: 5px;\n color: #fff;\n\n &:hover {\n  color: #A56336;\n }\n\n @media screen and (max-width: 480px) {\n font-size: 20px;\n margin-bottom: 2px;\n}\n"]))),Te=t(39),He=t(96),Re=[{icon:Object(_n.jsx)(In.d,{}),desc:"HTML"},{icon:Object(_n.jsx)(In.b,{}),desc:"CSS"},{icon:Object(_n.jsx)(In.e,{}),desc:"Javascript"},{icon:Object(_n.jsx)(In.h,{}),desc:"Python"},{icon:Object(_n.jsx)(In.i,{}),desc:"React"},{icon:Object(_n.jsx)(He.a,{}),desc:"MySQL"},{icon:Object(_n.jsx)(Te.f,{}),desc:"MongoDB"},{icon:Object(_n.jsx)(In.g,{}),desc:"npm"},{icon:Object(_n.jsx)(In.f,{}),desc:"NodeJS"},{icon:Object(_n.jsx)(In.c,{}),desc:"Git"},{icon:Object(_n.jsx)(Te.d,{}),desc:"Heroku"},{icon:Object(_n.jsx)(In.a,{}),desc:"Bootstrap"}],De="Technology Highlights",Ge="Some of the technologies I work with and enjoy",Je=t(581),We=t(579),Ye=function(){return Object(_n.jsx)(_n.Fragment,{children:Object(_n.jsx)(Ie,{id:"technologies",children:Object(_n.jsx)(Me,{children:Object(_n.jsxs)(Ce,{children:[Object(_n.jsx)(Be,{children:Object(_n.jsxs)(Le,{children:[Object(_n.jsx)(Ee,{children:De}),Object(_n.jsx)("hr",{}),Object(_n.jsx)("br",{}),Object(_n.jsx)(Fe,{children:Ge})]})}),Object(_n.jsx)(Ae,{style:{marginRight:"10px"},children:Object(_n.jsx)(Se.a,{elevation:5,style:{backgroundColor:"#263C41"},children:Object(_n.jsx)(Je.a,{sx:{flexGrow:1},children:Object(_n.jsx)(We.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Re.map((function(n,e){return Object(_n.jsxs)(We.a,{item:!0,xs:3,sm:4,md:4,children:[Object(_n.jsx)(_e,{children:n.icon}),Object(_n.jsx)(Pe,{children:n.desc})]},e)}))})})})})]})})})})},Qe=t(582),qe=Sn.a.div(q||(q=Object(zn.a)(["\n background: #A56336;\n height: 850px;\n display: flex;\n flex-direction: column;\n justify-content: center;\n align-items: center;\n \n @media screen and (max-width: 768px) {\n  height: 1200px;\n }\n\n @media screen and (max-width: 480px) {\n  height: 1500px;\n }\n"]))),Ke=Sn.a.div(K||(K=Object(zn.a)(["\n max-width: 1000px;\n margin: 0 auto;\n display: grid;\n grid-template-columns: 1fr 1fr 1fr;\n align-items: center;\n grid-gap: 15px;\n padding: 50px;\n border-top: solid #fff 2px;\n border-bottom: solid #fff 2px;\n\n @media screen and (max-width: 1000px) {\n  grid-template-columns: 1fr 1fr\n }\n\n @media screen and (max-width: 768px) {\n  grid-template-columns: 1fr;\n  padding: 1.8px;\n }\n"]))),Ue=Object(Sn.a)(Qe.a)(U||(U=Object(zn.a)(["\n background: #6F523B !important;\n color: #fff !important;\n display: flex;\n flex-direction: column;\n justify-content: flex-start;\n align-items: center;\n max-height: 350px;\n padding: 5px;\n transition: all 0.5s ease-in-out;\n\n &:hover {\n  background: #fff !important;\n  color: #A56336 !important;\n  transform: scale(1.05);\n  transition: all 0.5s ease-in-out;\n  box-shadow: 0 10px 10px rgba(0,0,0,0.5);\n }\n"]))),Ve=Sn.a.img(V||(V=Object(zn.a)(["\n height: 160px;\n width: 160px;\n margin-bottom: 10px;\n border-radius: 10px;\n border: solid #fff 0.5px;\n\n &:hover {\n  transform: scale(1.05);\n  box-shadow: 0 5px 5px rgba(0,0,0,0.5);\n}\n\n"]))),Xe=Sn.a.h1(X||(X=Object(zn.a)(["\n margin-bottom: 25px;\n font-size: 45px;\n line-height: 1;\n font-weight: 750;\n text-transform: uppercase;\n color: #fff;\n\n @media screen and (max-width: 480px) {\n  font-size: 30px;\n }\n"]))),Ze=Sn.a.h2(Z||(Z=Object(zn.a)(["\n font-size: 1rem;\n margin-bottom: 10px;\n font-weight: bold;\n"]))),$e=Sn.a.p($||($=Object(zn.a)(["\n font-size: 1rem;\n text-align: center;\n margin-bottom: 10px;\n"]))),nt=Sn.a.div(nn||(nn=Object(zn.a)(["\n max-width: 1000px;\n margin: 0 auto;\n display: grid;\n grid-template-columns: 1fr 1fr;\n align-items: center;\n grid-gap: 10px;\n padding: 0 50px;\n\n @media screen and (max-width: 1000px) {\n  grid-template-columns: 1fr 1fr;\n }\n\n @media screen and (max-width: 768px) {\n  grid-template-columns: 1fr 1fr;\n  padding: 0 2px;\n }\n"]))),et=Sn.a.div(en||(en=Object(zn.a)(["\n max-width: 1000px;\n margin: 0 auto;\n display: grid;\n grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n align-items: center;\n grid-gap: 10px;\n padding: 0 50px;\n\n @media screen and (max-width: 1000px) {\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n }\n\n @media screen and (max-width: 768px) {\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  padding: 0 2px;\n }\n"]))),tt=Sn.a.div(tn||(tn=Object(zn.a)(["\n height: 30px;\n width: 30px;\n margin-bottom: 10px;\n"]))),at=t(103),it=t.n(at),ct=t(102),ot=t.n(ct),rt=t(583),st=t(175),dt=t.p+"static/media/BookBuster700x530.c74decb1.png",lt=t.p+"static/media/mePlant530x530.f092f14d.png",jt=t.p+"static/media/SynergizeLogin.132c0a2a.png",xt=Object(de.a)({demoBtn:{color:"#fff !important",backgroundColor:"#A56336 !important"},repoBtn:{color:"#fff !important",backgroundColor:"#A56336 !important"},badgeIcon:{height:"30px",width:"30px"},chckMoreBtn:{marginTop:"40px !important",background:"#6F523B !important",borderRadius:"10px !important",whiteSpace:"nowrap",cursor:"pointer",alignItems:"center",justifyContent:"center",color:"#fff !important",padding:"10px !important",boxShadow:"0 5px 5px rgba(0,0,0,0.2); !important","&:hover":{backgroundColor:"#fff !important",color:"#0A0908 !important",transition:"all 0.5s ease-in-out"}}}),pt=function(){var n=Object(fn.useState)(!1),e=Object(kn.a)(n,2),t=e[0],a=e[1],i=Object(fn.useState)(!1),c=Object(kn.a)(i,2),o=c[0],r=c[1],s=Object(fn.useState)(!1),d=Object(kn.a)(s,2),l=d[0],j=d[1],x=Object(fn.useState)(!1),p=Object(kn.a)(x,2),b=p[0],m=p[1],h=Object(fn.useState)(!1),g=Object(kn.a)(h,2),f=g[0],O=g[1],u=Object(fn.useState)(!1),w=Object(kn.a)(u,2),v=w[0],y=w[1],k=function(){a(!t)},z=function(){r(!o)},S=function(){j(!l)},N=function(){m(!b)},I=function(){O(!f)},M=function(){y(!v)},C=xt();return Object(_n.jsxs)(qe,{id:"projects",children:[Object(_n.jsx)(Xe,{children:"Highlighted Projects"}),Object(_n.jsxs)(Ke,{children:[Object(_n.jsxs)(Ue,{elevation:8,children:[Object(_n.jsx)(Ze,{children:"BookBuster"}),Object(_n.jsx)(Ve,{src:dt}),Object(_n.jsx)($e,{children:"Search for your favorite books and movies!"}),Object(_n.jsxs)(et,{children:[Object(_n.jsx)(tt,{children:Object(_n.jsx)(In.d,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(In.b,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(In.e,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.a,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(st.a,{className:C.badgeIcon})})]}),Object(_n.jsxs)(nt,{children:[Object(_n.jsx)(rt.a,{href:"https://polyca123.github.io/Bookbuster/",target:"_blank",className:C.demoBtn,smooth:!0,duration:500,spy:!0,exact:"true",onMouseEnter:k,onMouseLeave:k,primary:"true",dark:"true",children:t?Object(_n.jsx)(ot.a,{}):"Demo"}),Object(_n.jsx)(rt.a,{href:"https://github.com/polyca123/Bookbuster",target:"_blank",className:C.repoBtn,smooth:!0,duration:500,spy:!0,exact:"true",onMouseEnter:z,onMouseLeave:z,primary:"true",dark:"true",children:o?Object(_n.jsx)(it.a,{}):"Repo"})]})]}),Object(_n.jsxs)(Ue,{elevation:8,children:[Object(_n.jsx)(Ze,{children:"MePlant"}),Object(_n.jsx)(Ve,{src:lt}),Object(_n.jsx)($e,{children:"Track your plant care and blog with others!"}),Object(_n.jsxs)(et,{children:[Object(_n.jsx)(tt,{children:Object(_n.jsx)(In.f,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(He.a,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.c,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.g,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.i,{className:C.badgeIcon})})]}),Object(_n.jsxs)(nt,{children:[Object(_n.jsx)(rt.a,{href:"https://meplant-app.herokuapp.com/",target:"_blank",className:C.demoBtn,smooth:!0,duration:500,spy:!0,exact:"true",onMouseEnter:S,onMouseLeave:S,primary:"true",dark:"true",children:l?Object(_n.jsx)(ot.a,{}):"Demo"}),Object(_n.jsx)(rt.a,{href:"https://github.com/gresendi/mePlants",target:"_blank",className:C.repoBtn,smooth:!0,duration:500,spy:!0,exact:"true",onMouseEnter:N,onMouseLeave:N,primary:"true",dark:"true",children:b?Object(_n.jsx)(it.a,{}):"Repo"})]})]}),Object(_n.jsxs)(Ue,{elevation:8,children:[Object(_n.jsx)(Ze,{children:"Synergize"}),Object(_n.jsx)(Ve,{src:jt}),Object(_n.jsx)($e,{children:"Manage your calendar and find times with friends!"}),Object(_n.jsxs)(et,{children:[Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.f,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.e,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.h,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.b,{className:C.badgeIcon})}),Object(_n.jsx)(tt,{children:Object(_n.jsx)(Te.d,{className:C.badgeIcon})})]}),Object(_n.jsxs)(nt,{children:[Object(_n.jsx)(rt.a,{href:"https://synergize-27.herokuapp.com/",target:"_blank",className:C.demoBtn,smooth:!0,duration:500,spy:!0,exact:"true",onMouseEnter:I,onMouseLeave:I,primary:"true",dark:"true",children:f?Object(_n.jsx)(ot.a,{}):"Demo"}),Object(_n.jsx)(rt.a,{href:"https://github.com/ssterling27/Project3",target:"_blank",className:C.repoBtn,smooth:!0,duration:500,spy:!0,exact:"true",onMouseEnter:M,onMouseLeave:M,primary:"true",dark:"true",children:v?Object(_n.jsx)(it.a,{}):"Repo"})]})]})]}),Object(_n.jsx)(rt.a,{className:C.chckMoreBtn,href:"https://github.com/ssharp0",target:"_blank",children:"Checkout More on Github!"})]})},bt=Sn.a.div(an||(an=Object(zn.a)(["\n background: #143642;\n color: #fff;\n\n @media screen and (max-width: 768px) {\n  padding: 90px 0;\n }\n"]))),mt=Sn.a.div(cn||(cn=Object(zn.a)(["\n height: 850px;\n width: 100%;\n max-width: 1000px;\n justify-content: center;\n display: grid;\n z-index: 1;\n margin-right: auto;\n margin-left: auto;\n padding: 0 25px;\n"]))),ht=Sn.a.div(on||(on=Object(zn.a)(["\n max-width: 555px;\n height: 100%;\n"]))),gt=Sn.a.div(rn||(rn=Object(zn.a)(["\n align-items: center;\n display: grid;\n grid-auto-columns: minmax(auto, 1fr);\n grid-template-areas: 'column2 column1';\n"]))),ft=Sn.a.div(sn||(sn=Object(zn.a)(["\n text-align: center;\n padding: 0 10px;\n margin-bottom: 10px;\n grid-area: column1;\n"]))),Ot=Sn.a.div(dn||(dn=Object(zn.a)(["\n text-align: center;\n padding: 0 10px;\n margin-bottom: 10px;\n grid-area: column2;\n"]))),ut=Sn.a.div(ln||(ln=Object(zn.a)(["\n padding-top: 0;\n padding-bottom: 50px;\n max-width: 550px;\n"]))),wt=Sn.a.h1(jn||(jn=Object(zn.a)(["\n margin-bottom: 25px;\n font-size: 45px;\n line-height: 1;\n font-weight: 750;\n text-transform: uppercase;\n color: white;\n\n @media screen and (max-width: 480px) {\n  font-size: 30px;\n }\n"]))),vt=t(177),yt=t.n(vt),kt=t(576),zt=t(584),St=t(585),Nt=t(586),It=t(572),Mt=t(573),Ct=t(574),Bt=[{method:"Email",path:"ssharp9999@gmail.com",contactIcon:Object(_n.jsx)(It.a,{})},{method:"GitHub",path:"https://github.com/ssharp0",contactIcon:Object(_n.jsx)(Mt.a,{}),name:"GitHub"},{method:"LinkedIn",path:"https://www.linkedin.com/in/scott-harp-61231745/",contactIcon:Object(_n.jsx)(Ct.a,{}),name:"LinkedIn"}],At="Contact Me",Lt=function(){return Object(_n.jsx)(_n.Fragment,{children:Object(_n.jsx)(bt,{id:"contact",children:Object(_n.jsx)(mt,{children:Object(_n.jsxs)(gt,{children:[Object(_n.jsx)(ft,{children:Object(_n.jsxs)(ut,{children:[Object(_n.jsx)(wt,{children:At}),Object(_n.jsx)("hr",{}),Object(_n.jsx)("br",{}),Bt.map((function(n){return Object(_n.jsxs)(kt.a,{elevation:8,className:"contactItem",children:[Object(_n.jsx)(zt.a,{expandIcon:n.contactIcon,"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(_n.jsx)(St.a,{style:{padding:"1%",color:"#143642"},children:Object(_n.jsx)("strong",{children:n.method})})}),Object(_n.jsx)(Nt.a,{children:Object(_n.jsx)(St.a,{children:"Email"!==n.method?Object(_n.jsxs)(rt.a,{style:{backgroundColor:"#A56336"},variant:"contained",href:n.path,target:"_blank",children:["Go To ",n.name]}):Object(_n.jsx)("h5",{style:{color:"#A56336"},children:n.path})})})]})}))]})}),Object(_n.jsx)(Ot,{children:Object(_n.jsx)(ht,{children:Object(_n.jsx)(Se.a,{elevation:5,style:{height:"100%",width:"100%",backgroundColor:"#263C41"},children:Object(_n.jsx)(yt.a,{style:{height:"100%",width:"100%",color:"white"}})})})})]})})})})},Et=Sn.a.footer(xn||(xn=Object(zn.a)(["\n   background: linear-gradient(180deg, #143642 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, #A56336 0%, transparent 100%);\n"]))),Ft=Sn.a.div(pn||(pn=Object(zn.a)(["\n height: 400px;\n max-width: 1000px;\n margin: 0 auto;\n padding: 45px 25px;\n display: flex;\n flex-direction: column;\n justify-content: center;\n align-items: center;\n"]))),Pt=Sn.a.div(bn||(bn=Object(zn.a)(["\n display: flex;\n justify-content: center;\n\n @media screen and (max-width: 820px) {\n  padding-top: 30px;\n }\n"]))),_t=Sn.a.div(mn||(mn=Object(zn.a)(["\n display: flex;\n flex-direction: column;\n margin: 15px;\n align-items: center;\n width: 150px;\n box-sizing: border-box;\n color: #fff;\n\n @media screen and (max-width: 420px) {\n  width: 100%;\n  margin: 0;\n  padding: 10px;\n}\n"]))),Tt=Sn.a.h1(hn||(hn=Object(zn.a)(["\n font-size: 15px;\n margin-bottom: 10px;\n cursor: pointer;\n color: #A56336;\n\n &:hover {\n   font-size: 1.1rem;\n   color: #fff;\n }\n"]))),Ht=Sn.a.h5(gn||(gn=Object(zn.a)(["\n color: #fff;\n margin-bottom: 10px;\n"]))),Rt=t(587),Dt=t(588),Gt=Object(de.a)({root:{"& .MuiBottomNavigationAction-root":{minWidth:0,maxWidth:250},"& .MuiSvgIcon-root":{fill:"#A56336","&:hover":{fill:"#fff",fontSize:"3rem"}}}}),Jt=function(){var n=Gt();return Object(_n.jsx)(Et,{children:Object(_n.jsxs)(Ft,{children:[Object(_n.jsx)(Pt,{children:Object(_n.jsxs)(_t,{children:[Object(_n.jsx)(Tt,{to:"/",onClick:function(){Nn.animateScroll.scrollToTop()},children:"@ScottHarp"}),Object(_n.jsxs)(Rt.a,{width:"auto",style:{background:"transparent"},children:[Object(_n.jsx)(Dt.a,{className:n.root,style:{padding:0},href:"https://github.com/ssharp0",target:"_blank",icon:Object(_n.jsx)(Mt.a,{})}),Object(_n.jsx)(Dt.a,{className:n.root,style:{padding:0},href:"https://www.linkedin.com/in/scott-harp-61231745/",target:"_blank",icon:Object(_n.jsx)(Ct.a,{})})]})]})}),Object(_n.jsx)(Ht,{children:"ScottHarp Portfolio"}),Object(_n.jsx)(Ht,{children:(new Date).getFullYear()})]})})},Wt=function(){var n=Object(fn.useState)(!1),e=Object(kn.a)(n,2),t=e[0],a=e[1],i=function(){a(!t)};return Object(_n.jsxs)(_n.Fragment,{children:[Object(_n.jsx)(Tn,{isSideNavOpen:t,toggle:i}),Object(_n.jsx)(Kn,{toggle:i}),Object(_n.jsx)(xe,{}),Object(_n.jsx)(Ne,{}),Object(_n.jsx)(Ye,{}),Object(_n.jsx)(pt,{}),Object(_n.jsx)(Lt,{}),Object(_n.jsx)(Jt,{})]})};var Yt=function(){return Object(_n.jsx)(vn.a,{children:Object(_n.jsx)(yn.c,{children:Object(_n.jsx)(yn.a,{exact:!0,path:"/",component:Wt})})})};wn.a.render(Object(_n.jsx)(On.a.StrictMode,{children:Object(_n.jsx)(Yt,{})}),document.getElementById("root"))}},[[545,1,2]]]);
//# sourceMappingURL=main.b3a46398.chunk.js.map