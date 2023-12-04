<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import MesaReserva from '@/components/MesaReserva.vue'

const router = useRouter();
const authStore = useAuthStore();
const esCliente = ref(false);

const nombres = ref('')
const email = ref('')
const telefono = ref(0)
const contraseniaActual = ref('')
const id = ref('');

onMounted(() => {
  let perfilCliente = 'cliente';
  const userInfo = authStore.getUserInfo;

  if (userInfo !== null) {
    if (userInfo.perfil === perfilCliente) {
      esCliente.value = true;
      nombres.value = userInfo.nombres;
      email.value = userInfo.email;
      telefono.value = parseInt(userInfo.telefono);
      contraseniaActual.value = userInfo.contrasenia;
      id.value = userInfo.id;
    } else {
      router.push({ name: 'home' });
    }
  } else {
    router.push({ name: 'home' });
  }

}),

  watchEffect(() => {
    let perfilCliente = 'cliente';
    const userInfo = authStore.getUserInfo;

    if (userInfo !== null) {
      if (userInfo.perfil === perfilCliente) {
        esCliente.value = true;
        nombres.value = userInfo.nombres;
        email.value = userInfo.email;
        telefono.value = parseInt(userInfo.telefono);
        contraseniaActual.value = userInfo.constrasenia;
        id.value = userInfo.id;
      } else {
        router.push({ name: 'home' });
      }
    } else {
      router.push({ name: 'home' });
    }
  });

/**
 * ?formar composables luego
 */

</script>
<template>
  <section class="container">
    <div class="menu-sidebar">
      <div class="circle-container">
        <div class="circIcon">{{ nombres.substring(0, 2).toUpperCase() }}</div>
        <div class="titname">{{ nombres }}</div>
      </div>
      <div class="menu">
        <div class="menu-title">Mi cuenta</div>
        <ul>
          <li :class="{ 'active': $route.path === '/user/userperfil' }">
            <router-link to="/user/userperfil" style="color: black; ">Perfil</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/user/usermesasreserva' }">
            <router-link to="/user/usermesasreserva" style="color: rgb(0, 0, 0); ">Mesas</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/user/userpedidosproceso' }">
            <router-link to="/user/userpedidosproceso" style="color: black; font-weight: bold;">Pedidos</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="Pedido">
      <div class="rectangulo">
        <div class="Reserva">
          <ul>
            <li :class="{ 'active': $route.path === '/user/userpedidosproceso' }">
              <router-link to="/user/userpedidosproceso" style="color: black; font-weight: bold;">En proceso</router-link>
            </li>
          </ul>
        </div>
        <div class="Completado">
          <ul>
            <li :class="{ 'active': $route.path === '/user/userpedidosentregado' }">
              <router-link to="/user/userpedidosentregado" style="color: black; ">Entregado</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="rectanguloPedido">
        <br>
        <p>Dato1</p>
        <p>Dato1</p>
        <p>Dato1</p>
        <p>Dato1</p>
        <p>Dato1</p>
        <p>Dato1</p><br>
      </div>
    </div>
  </section>
</template>
  
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(1, minmax(50px, 1fr));
}

.Pedido {
  grid-column: span 2;
}

.Pedido p {
  margin-left: 15px;
}

.rectangulo {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 50px;
  width: 650px;
  margin-left: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1, minmax(50px, 1fr));
}

.rectangulo li {
  text-align: center;
  /* Centra los textos de los elementos li */
}

.rectanguloPedido {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 25px;
  height: auto;
  width: 650px;
  margin-left: 30px;
}

.menu-sidebar {

  height: 100vh;
  width: 350px;
  background-color: rgb(255, 255, 255);
  justify-content: flex-start;
  /* Ajuste para posicionar a la izquierda */
  align-items: flex-start;
  /* Ajuste para posicionar arriba */
  margin-top: 10px;
  color: black;
}

.circle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(255, 255, 255);

}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 40px;
}

.name {
  margin-top: 10px;
  font-size: 20px;
}

.menu {
  padding: 20px;
}

.menu-title {
  font-weight: bold;
  color: rgb(0, 0, 0);
  font-size: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

li {
  font-weight: normal;
  margin-left: 10px;
  font-size: 20px;
  color: black;
  /* Cambiar el color a negro */
}

li.active {
  font-weight: bold;
  color: rgb(0, 0, 0);
}</style>
  