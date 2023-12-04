import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuView.vue"),
    },
    {
      path: "/mesas",
      name: "mesas",
      component: () => import("../views/MesasView.vue"),
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("../views/ContactoView.vue"),
    },
    {
      path: "/nuestraHistoria",
      name: "nuestraHistoria",
      component: () => import("../views/NuestraHistoriaView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/registro",
      name: "registro",
      component: () => import("../views/Registro.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/user/userperfil",
      name: "userperfil",
      component: () => import("../views/User/UserPerfilView.vue"),
    },
    {
      path: "/user/userpedidosproceso",
      name: "userpedidosproceso",
      component: () => import("../views/User/UserPedidosProcesoView.vue"),
    },
    {
      path: "/user/userpedidosentregado",
      name: "userpedidosentregado",
      component: () => import("../views/User/UserPedidosEntregadoView.vue"),
    },
    {
      path: "/user/usermesasreserva",
      name: "usermesasreserva",
      component: () => import("../views/User/UserMesasReservaView.vue"),
    },
    {
      path: "/user/usermesascompletado",
      name: "usermesascompletado",
      component: () => import("../views/User/UserMesasCompletadoView.vue"),
    },
    {
      path: "/user/usermesascancelado",
      name: "usermesascancelado",
      component: () => import("../views/User/UserMesasCanceladoView.vue"),
    },
    {
      path: "/admin/adminmesas",
      name: "adminmesas",
      component: () => import("../views/Admin/AdminMesasView.vue"),
    },
    {
      path: "/admin/adminpedidos",
      name: "adminpedidos",
      component: () => import("../views/Admin/AdminPedidosView.vue"),
    },
  ],
});

export default router;
