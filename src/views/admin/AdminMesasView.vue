<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const esAdmin = ref(false);


onMounted(() => {
  let perfilAdmin = 'admin';
  const userInfo = authStore.getUserInfo;

  if (userInfo !== null) {
    if (userInfo.perfil ===perfilAdmin) {
      esAdmin.value = true;
    } else {
      router.push({ name: 'home' });
    }
  } else {
    router.push({ name: 'home' });
  }

}),

  watchEffect(() => {
    let perfilAdmin = 'admin';
  const userInfo = authStore.getUserInfo;

  if (userInfo !== null) {
    if (userInfo.perfil ===perfilAdmin) {
      esAdmin.value = true;
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
        <div class="circle">AD</div>
        <div class="name">Administrador</div>
      </div>
      <div class="menu">
        <div class="menu-title">Mi cuenta</div>
        <ul>
          <li :class="{ 'active': $route.path === '/admin/adminmesas' }">
            <router-link to="/admin/adminmesas" style="color: black; font-weight: bold;">Mesas</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/admin/adminpedidos' }">
            <router-link to="/admin/adminpedidos" style="color: rgb(0, 0, 0);">Pedidos</router-link>
          </li>

        </ul>
      </div>
    </div>
    <div class="Mesas">
      <div class="rectangulo">
        <h1>En reserva</h1>
      </div>
      <div class="rectanguloMesas">
        <br>
        <p>Dato1</p>
        <p>Cliente:</p>
        <p>Telefono:</p>
        <p>Mesas 1</p>
        <p>Fecha: </p>
        <p>Hora de entrada:</p>
        <p>Perosnas:</p><br>

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

.Mesas {
  grid-column: span 2;
}

.rectangulo {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 50px;
  text-align: center;
  width: 650px;
  margin-left: 30px;
}

.rectanguloMesas {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 25px;
  height: auto;
  width: 650px;
  margin-left: 30px;
}

.rectanguloMesas p {
  margin-left: 15px;
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
  background-color: #E86898;
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

