import{_ as I,k as P,l as k,r as t,m as w,n as y,a as C,o as D,g as S,b as e,t as b,L as l,d as r,w as n,e as c,p as U,f as V}from"./index-b0d1de63.js";/* empty css                                                                    */const g=i=>(U("data-v-f1a5098f"),i=i(),V(),i),$={class:"container"},E={class:"menu-sidebar"},B={class:"circle-container"},M={class:"circIcon"},N={class:"titname"},A={class:"menu"},R=g(()=>e("div",{class:"menu-title"},"Mi cuenta",-1)),x={class:"Pedido"},z={class:"rectangulo"},L={class:"Reserva"},T={class:"Completado"},j=g(()=>e("div",{class:"rectanguloPedido"},[e("br"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("p",null,"Dato1"),e("br")],-1)),q={__name:"UserPedidosProcesoView",setup(i){const u=P(),p=k(),_=t(!1),d=t(""),f=t(""),v=t(0),h=t(""),m=t("");return w(()=>{let o="cliente";const s=p.getUserInfo;s!==null?s.perfil===o?(_.value=!0,d.value=s.nombres,f.value=s.email,v.value=parseInt(s.telefono),h.value=s.contrasenia,m.value=s.id):u.push({name:"home"}):u.push({name:"home"})}),y(()=>{let o="cliente";const s=p.getUserInfo;s!==null?s.perfil===o?(_.value=!0,d.value=s.nombres,f.value=s.email,v.value=parseInt(s.telefono),h.value=s.constrasenia,m.value=s.id):u.push({name:"home"}):u.push({name:"home"})}),(o,s)=>{const a=C("router-link");return D(),S("section",$,[e("div",E,[e("div",B,[e("div",M,b(d.value.substring(0,2).toUpperCase()),1),e("div",N,b(d.value),1)]),e("div",A,[R,e("ul",null,[e("li",{class:l({active:o.$route.path==="/user/userperfil"})},[r(a,{to:"/user/userperfil",style:{color:"black"}},{default:n(()=>[c("Perfil")]),_:1})],2),e("li",{class:l({active:o.$route.path==="/user/usermesasreserva"})},[r(a,{to:"/user/usermesasreserva",style:{color:"rgb(0, 0, 0)"}},{default:n(()=>[c("Mesas")]),_:1})],2),e("li",{class:l({active:o.$route.path==="/user/userpedidosproceso"})},[r(a,{to:"/user/userpedidosproceso",style:{color:"black","font-weight":"bold"}},{default:n(()=>[c("Pedidos")]),_:1})],2)])])]),e("div",x,[e("div",z,[e("div",L,[e("ul",null,[e("li",{class:l({active:o.$route.path==="/user/userpedidosproceso"})},[r(a,{to:"/user/userpedidosproceso",style:{color:"black","font-weight":"bold"}},{default:n(()=>[c("En proceso")]),_:1})],2)])]),e("div",T,[e("ul",null,[e("li",{class:l({active:o.$route.path==="/user/userpedidosentregado"})},[r(a,{to:"/user/userpedidosentregado",style:{color:"black"}},{default:n(()=>[c("Entregado")]),_:1})],2)])])]),j])])}}},H=I(q,[["__scopeId","data-v-f1a5098f"]]);export{H as default};
