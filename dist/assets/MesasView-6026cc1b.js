import{j as X,_ as Z,k as ne,r as c,l as le,m as ee,n as re,a as R,o as _,c as B,w as D,d as b,q as ie,b as e,e as J,t as h,g as C,F as H,s as O,p as se,f as ae,v as i,x as ce,y as G,z as K,A as ue,B as V,C as de,D as Q,h as L,E as W,i as ve,G as me,H as _e}from"./index-b0d1de63.js";import{v as pe}from"./v4-4a60fe23.js";const te=X("reservas",{state:()=>({reservaciones:{}}),getters:{getReservas(n){return n.reservaciones}},actions:{nuevaReservacion(n,k){this.reservaciones[n]||(this.reservaciones[n]=[]),this.reservaciones[n].push(k)}},persist:!0});const z=n=>(se("data-v-65a3f9f9"),n=n(),ae(),n),he={class:"contenido"},fe={class:"capacidad"},ge={class:"contentHorario"},Me={class:"horario"},De={class:"datosMesa"},be=z(()=>e("li",{class:"carac"},"Mesa",-1)),Ie=z(()=>e("li",{class:"carac"},"Personas",-1)),Se=z(()=>e("li",{class:"carac"},"Fecha",-1)),we=z(()=>e("li",{class:"carac"},"Hora",-1)),Re={__name:"CardReservacion",props:["mesa","hora","numPersonas","fechaReserva"],emits:["reservaHecha"],setup(n,{emit:k}){const o=n,y=k,p=ne(),P=new Date(o.hora),x=P.getHours(),F=P.getMinutes(),N=x<10?`0${x}`:x,I=F<10?`0${F}`:F,f=c("");f.value=`${N}:${I}`;const r=c(!1),Y=o.hora.split("T")[0].split("-"),q=c("");q.value=`${Y[2]}/${Y[1]}/${Y[0]}`;const S=c(!1),A=le(),j=te();function T(){const v=A.getUserInfo;let l={ID_reserva:pe(),Fecha:o.fechaReserva,ID_mesa:o.mesa.ID_mesa,Hora:o.hora,ID_cliente:v.id,NumPersonas:o.numPersonas,Estado:"activo"};j.nuevaReservacion(o.fechaReserva,l),S.value=!0,y("reservaHecha",S.value),r.value=!1}const d=c(!1);ee(()=>{let v="cliente";const l=A.getUserInfo;l!==null&&l.perfil===v?d.value=!0:d.value=!1}),re(()=>{let v="cliente";const l=A.getUserInfo;l!==null&&l.perfil===v?d.value=!0:d.value=!1});function U(){r.value=!1,p.push({name:"login"})}return(v,l)=>{const s=R("v-img"),a=R("v-avatar"),m=R("v-card-title"),t=R("v-card-actions"),u=R("v-card"),w=R("v-dialog"),g=R("v-hover");return _(),B(g,{"close-delay":"200"},{default:D(({isHovering:M,props:oe})=>[b(u,ie({class:["card",{"on-hover":M}],elevation:M?16:2},oe),{default:D(()=>[e("div",{class:"contentCard",onClick:l[0]||(l[0]=E=>r.value=!0)},[b(a,{size:"150",rounded:"0"},{default:D(()=>[b(s,{src:o.mesa.imgM,alt:"Mesa"},null,8,["src"])]),_:1}),e("div",he,[b(m,{class:"mesaNombre"},{default:D(()=>[J(" Mesa "+h(o.mesa.numeroMesa),1)]),_:1}),e("div",fe,[e("p",null,h(o.mesa.unidadesPersonas[0])+" a "+h(o.mesa.unidadesPersonas[1])+" personas",1)]),e("div",ge,[e("div",Me,[e("p",null,h(f.value)+" hr",1)])])])]),b(w,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=E=>r.value=E),"max-width":"500px",class:"modalS"},{default:D(()=>[b(u,{class:"modalReservacion"},{default:D(()=>[b(m,{class:"tituloModal"},{default:D(()=>[J("Hacer reservación")]),_:1}),e("div",null,[e("ul",De,[be,e("li",null,h(o.mesa.numeroMesa),1),Ie,e("li",null,h(o.numPersonas),1),Se,e("li",null,h(q.value),1),we,e("li",null,h(f.value),1)])]),b(t,{class:"contButons"},{default:D(()=>[d.value?(_(),C(H,{key:0},[e("button",{onClick:l[1]||(l[1]=E=>r.value=!1),type:"button",class:"cancelarOrden"},"Cancelar"),e("button",{onClick:T,type:"button",class:"confirmarOrden"},"Confirmar")],64)):O("",!0),d.value===!1?(_(),C(H,{key:1},[e("button",{onClick:l[2]||(l[2]=E=>r.value=!1),type:"button",class:"cancelarOrden"},"Cancelar"),e("button",{onClick:U,type:"button",class:"confirmarOrden"},"Accede como cliente")],64)):O("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:2},1040,["elevation","class"])]),_:1})}}},Ce=Z(Re,[["__scopeId","data-v-65a3f9f9"]]),ye=[{etiqueta:"1 persona",valor:1},{etiqueta:"2 personas",valor:2},{etiqueta:"3 personas",valor:3},{etiqueta:"4 personas",valor:4},{etiqueta:"5 personas",valor:5},{etiqueta:"6 personas",valor:6}],Pe=[{ID_mesa:"M_1",numeroMesa:1,unidadesPersonas:[1,2],imgM:"src/assets/img/mesas/mesaIndividual_1.jpg"},{ID_mesa:"M_2",numeroMesa:2,unidadesPersonas:[1,2],imgM:"src/assets/img/mesas/mesaIndividual_2.jpg"},{ID_mesa:"M_3",numeroMesa:3,unidadesPersonas:[3,4],imgM:"src/assets/img/mesas/mesaNormal_1.jpg"},{ID_mesa:"M_4",numeroMesa:4,unidadesPersonas:[3,4],imgM:"src/assets/img/mesas/mesaNormal_2.jpg"},{ID_mesa:"M_5",numeroMesa:5,unidadesPersonas:[5,6],imgM:"src/assets/img/mesas/mesaGrande_1.jpg"},{ID_mesa:"M_6",numeroMesa:6,unidadesPersonas:[5,6],imgM:"src/assets/img/mesas/mesaGrande_2.jpg"}],$e=X("mesas",{state:()=>({mesas:Pe}),getters:{getMesas(n){return n.mesas}}}),xe="/assets/panda_mesas-2cf345ca.gif";const $=n=>(se("data-v-b682a348"),n=n(),ae(),n),He={class:"backTitle"},ke=$(()=>e("h2",{class:"titleSeccion"},"Encuentra tu mesa para la ocasión",-1)),Fe=["onSubmit"],Ve={class:"contBotones"},Ye=["min"],qe={class:"contGSelect"},Ae={class:"contSelect"},je=$(()=>e("div",{class:"iconon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"19",width:"19",viewBox:"0 0 512 512"},[e("path",{fill:"#000000",d:"M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"})])],-1)),Ee=$(()=>e("option",{disabled:"",value:"",class:"option"},"Hora",-1)),Be=["value"],Oe={class:"contGSelect"},ze={class:"contSelect"},Ne=$(()=>e("div",{class:"iconon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"19",width:"15",viewBox:"0 0 448 512"},[e("path",{fill:"#000000",d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"})])],-1)),Te=$(()=>e("option",{disabled:"",value:"",class:"option"},"Personas",-1)),Ue=["value"],Ge={class:"contentTitulo"},Le=$(()=>e("h3",{class:"tituloDisponible"},"Disponibles",-1)),Je=[Le],Ke={class:"section secReservaciones"},Qe={class:"reservaciones"},We={class:"previoBusqueda"},Xe=$(()=>e("div",null,[e("p",{class:"mensaje"},"Panda espera que disfrutes la estancia.")],-1)),Ze=["src"],es={__name:"MesasView",setup(n){const k=xe,o=c(i());ee(()=>{const s=setInterval(()=>{o.value=i()},1e3);ce(()=>clearInterval(s))});const y=G(()=>o.value.format("YYYY-MM-DD")),p=c(y.value),P=G(()=>{const s=i(y.value).set("hour",22).set("minute",30);return i().isAfter(s)?i(y.value).add(1,"day").format("YYYY-MM-DD"):y.value});K(y,s=>{const a=i(s).set("hour",22).set("minute",30);i().isAfter(a)&&(P.value=i(s).add(1,"day").format("YYYY-MM-DD")),i(p.value).isSame(a,"day")&&(p.value=P.value)});function x(s){const a=i(s).set("hour",13).set("minute",0),m=i(s).set("hour",22).set("minute",30),t=30;let u=i(s).isSame(i(),"day")?o.value.add(t-o.value.minute()%t,"minute"):a;i(s).isSame(P.value,"day")&&(u=a);const w=[];for(;u.isBefore(m)||u.isSame(m);){if(u.isAfter(o.value)){const g=u.format("HH:mm"),M=u.format("YYYY-MM-DDTHH:mm:ss");w.push({hora:g,valorISO:M})}u=u.add(t,"minute")}return w}const F=G(()=>{const s=p.value;return x(s)});K(p,s=>{const a=x(s);!a.find(t=>t.valorISO===I.value)&&a.length>0&&(I.value=a[0].valorISO)});const N=c(ye),I=c(""),f=c(""),r=c(!1),q=$e().getMesas,S=c([]),j=te().getReservas,T=s=>{let a=[];return j[s]!==void 0&&(a=Object.values(j[s])),a},d=c(!1),U=()=>{d.value=!0;const s=2,a=1;v.value=null;let m=q.filter(g=>g.unidadesPersonas.includes(f.value)),u=T(p.value).filter(g=>m.some(M=>M.ID_mesa===g.ID_mesa&&M.estado!=="activo")),w=m.filter(g=>!u.some(M=>M.ID_mesa===g.ID_mesa));w.length===s?(S.value=m,r.value=!0):w.length===a?(S.value=w,r.value=!0):(S.value=[],r.value=!1),setTimeout(()=>d.value=!1,2e3)},v=c(null);function l(s){v.value=null,v.value=s,s&&(S.value=[],r.value=!1),I.value="",f.value="",r.value=null}return(s,a)=>{const m=R("v-btn");return _(),C(H,null,[e("div",He,[ke,e("form",{class:"busqueda",onSubmit:ue(U,["prevent"])},[e("div",Ve,[e("div",null,[V(e("input",{type:"date",id:"fecha",name:"fecha",class:"input",min:P.value,"onUpdate:modelValue":a[0]||(a[0]=t=>p.value=t),required:""},null,8,Ye),[[de,p.value]])]),e("div",qe,[e("div",Ae,[je,V(e("select",{name:"Horas",id:"horas",class:"input","onUpdate:modelValue":a[1]||(a[1]=t=>I.value=t),required:""},[Ee,(_(!0),C(H,null,L(F.value,t=>(_(),C("option",{value:t.valorISO,class:"option"},h(t.hora)+" hr ",9,Be))),256))],512),[[Q,I.value]])])]),e("div",Oe,[e("div",ze,[Ne,V(e("select",{name:"Personas",id:"numPersonas",class:"input","onUpdate:modelValue":a[2]||(a[2]=t=>f.value=t),required:""},[Te,(_(!0),C(H,null,L(N.value,t=>(_(),C("option",{value:t.valor,class:"option"},h(t.etiqueta),9,Ue))),256))],512),[[Q,f.value]])])])]),e("div",null,[b(m,{loading:d.value,block:"",size:"large",type:"submit",class:"input botonVamos",variant:"elevated"},{default:D(()=>[J(" ¡Vamos! ")]),_:1},8,["loading"])])],40,Fe)]),V(e("div",Ge,Je,512),[[W,r.value]]),e("section",Ke,[v.value?(_(),B(me,{key:0,activo:!0,mensaje:"Reservación exitosa"})):O("",!0),v.value===!1?(_(),B(_e,{key:1,activo:!0,mensaje:"Fallo la reservación"})):O("",!0),V(e("div",Qe,[(_(!0),C(H,null,L(S.value,t=>(_(),B(Ce,{key:t.ID_mesa,mesa:t,hora:I.value,numPersonas:f.value,fechaReserva:p.value,onReservaHecha:l},null,8,["mesa","hora","numPersonas","fechaReserva"]))),128))],512),[[W,r.value]]),e("div",We,[Xe,e("div",null,[e("img",{src:ve(k),style:{"background-color":"white"},alt:"panda"},null,8,Ze)])])])],64)}}},ts=Z(es,[["__scopeId","data-v-b682a348"]]);export{ts as default};
