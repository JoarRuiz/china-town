import{_ as I,k,l as w,r as t,m as y,n as C,a as D,o as E,g as P,b as e,t as b,L as l,d as r,w as n,e as c,p as S,f as U}from"./index-b0d1de63.js";/* empty css                                                                    */const g=i=>(S("data-v-f5907cb7"),i=i(),U(),i),V={class:"container"},$={class:"menu-sidebar"},B={class:"circle-container"},M={class:"circIcon"},N={class:"titname"},A={class:"menu"},R=g(()=>e("div",{class:"menu-title"},"Mi cuenta",-1)),x={class:"Pedido"},z={class:"rectangulo"},L={class:"Reserva"},T={class:"Completado"},j=g(()=>e("div",{class:"rectanguloPedido"},[e("br"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("br")],-1)),q={__name:"UserPedidosEntregadoView",setup(i){const u=k(),p=w(),_=t(!1),d=t(""),v=t(""),f=t(0),h=t(""),m=t("");return y(()=>{let o="cliente";const s=p.getUserInfo;s!==null?s.perfil===o?(_.value=!0,d.value=s.nombres,v.value=s.email,f.value=parseInt(s.telefono),h.value=s.contrasenia,m.value=s.id):u.push({name:"home"}):u.push({name:"home"})}),C(()=>{let o="cliente";const s=p.getUserInfo;s!==null?s.perfil===o?(_.value=!0,d.value=s.nombres,v.value=s.email,f.value=parseInt(s.telefono),h.value=s.constrasenia,m.value=s.id):u.push({name:"home"}):u.push({name:"home"})}),(o,s)=>{const a=D("router-link");return E(),P("section",V,[e("div",$,[e("div",B,[e("div",M,b(d.value.substring(0,2).toUpperCase()),1),e("div",N,b(d.value),1)]),e("div",A,[R,e("ul",null,[e("li",{class:l({active:o.$route.path==="/user/userperfil"})},[r(a,{to:"/user/userperfil",style:{color:"black"}},{default:n(()=>[c("Perfil")]),_:1})],2),e("li",{class:l({active:o.$route.path==="/user/usermesasreserva"})},[r(a,{to:"/user/usermesasreserva",style:{color:"rgb(0, 0, 0)"}},{default:n(()=>[c("Mesas")]),_:1})],2),e("li",{class:l({active:o.$route.path==="/user/userpedidosproceso"})},[r(a,{to:"/user/userpedidosproceso",style:{color:"black","font-weight":"bold"}},{default:n(()=>[c("Pedidos")]),_:1})],2)])])]),e("div",x,[e("div",z,[e("div",L,[e("ul",null,[e("li",{class:l({active:o.$route.path==="/user/userpedidosproceso"})},[r(a,{to:"/user/userpedidosproceso",style:{color:"black"}},{default:n(()=>[c("En proceso")]),_:1})],2)])]),e("div",T,[e("ul",null,[e("li",{class:l({active:o.$route.path==="/user/userpedidosentregado"})},[r(a,{to:"/user/userpedidosentregado",style:{color:"black","font-weight":"bold"}},{default:n(()=>[c("Entregado")]),_:1})],2)])])]),j])])}}},H=I(q,[["__scopeId","data-v-f5907cb7"]]);export{H as default};