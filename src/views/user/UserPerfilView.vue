<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import AlertComplete from '@/components/AlertComplete.vue';
import AlertError from '@/components/AlertError.vue';

const router = useRouter();
const authStore = useAuthStore();
const esCliente = ref(false);

const nombres = ref('')
const email = ref('')
const telefono = ref(0)
const contraseniaActual = ref('')
const id = ref('');
const contraseniaNuevaUno = ref('');
const contraseniaNuevaDos = ref('')

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

const form = ref(false);
const loading = ref(false);
const visible = ref(false);


const contraseniaReglas = ref([
  (v) => !!v || 'Este campo es requerido',
  (v) => (v && v.length >= 8) || 'Debe tener al menos 8 caracteres'
]);


const noCoincidencias = ref(null);


function guardarCambios() {
  if (!form.value) return
  loading.value = true;
  noCoincidencias.value = null;
  let coincidencia = contraseniaActual.value === contraseniaNuevaUno.value;

  if (coincidencia) {
    noCoincidencias.value = true;
    authStore.actulizarAuth(contraseniaNuevaDos.value);
  } else {
    noCoincidencias.value = false;
  }
  setTimeout(() => (loading.value = false), 2000)
}



</script>


<template>
  <section class="container">
    <div class="menu-sidebar">
      <div class="circle-container">
        <div class="circIcon">{{ nombres.substring(0, 2).toUpperCase() }}</div>
        <div class="titname">{{ nombres }}</div>
      </div>
      <nav class="menu">
        <div class="menu-title">Mi cuenta</div>
        <ul>
          <li :class="{ 'active': $route.path === '/user/userperfil' }">
            <router-link to="/user/userperfil" style="color: black; font-weight: bold;">Perfil</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/user/usermesasreserva' }">
            <router-link to="/user/usermesasreserva" style="color: rgb(0, 0, 0);">Mesas</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/user/userpedidosproceso' }">
            <router-link to="/user/userpedidosproceso" style="color: black;">Pedidos</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="User">
      <div class="rectangulo">
        <h2 class="tituloSec">Mi perfil</h2>
      </div>
      <div class="rectanguloUser">

        <v-form v-model="form" @submit.prevent="guardarCambios" class="mi-formulario">
          <label for="nombre" class="salto">Nombre:</label>
          <v-text-field v-model="nombres" variant="solo" readonly></v-text-field>

          <label for="correo">Correo:</label>
          <v-text-field v-model="email" variant="solo" readonly></v-text-field>

          <label for="telefono">Teléfono:</label>
          <v-text-field v-model="telefono" variant="solo" readonly></v-text-field>

          <label for="contrasenaActual">Contraseña actual:</label>
          <v-text-field placeholder="Ingresar contraseña actual" :readonly="loading" v-model="contraseniaNuevaUno"
            variant="underlined" :rules="contraseniaReglas" class="input"></v-text-field>

          <label for="contrasenaActual">Nueva contraseña:</label>
          <v-text-field placeholder="Ingresar nueva contraseña" :readonly="loading" v-model="contraseniaNuevaDos"
            variant="underlined" :rules="contraseniaReglas" class="input"></v-text-field>

          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn :disabled="!form" :loading="loading" block size="large" type="submit" class="butonRegistro"
            variant="elevated">
            Guardar cambios
          </v-btn>
        </v-form>
      </div>
    </div>
    <template v-if="noCoincidencias">
      <AlertComplete :activo="true" :mensaje="'Contraseña cambiada'"></AlertComplete>
    </template>
    <template v-if="noCoincidencias === false">
      <AlertError :activo="true" :mensaje="'Contraseña incorrecta'"></AlertError>
    </template>
  </section>
</template>


<style scoped>
.mi-formulario {
  max-width: 550px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: box-shadow 0.3s;
}

input:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
}



.butonRegistro {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  padding: 9px 20px;
  align-items: center;
  gap: 30px;
  border-radius: 50px;
  font-weight: 500;
  margin-top: 20px;
  color: rgb(48, 47, 47);
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  background-color: #e9cb34;
  background-color: var(--amarillo-dorado);
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  box-shadow: 0 15px 13px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.butonRegistro:hover {
  background-color: var(--amarillo-dorado);
  background-color: #e9c511;
  color: rgb(0, 0, 0);
}


.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}



.User {
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

.rectanguloUser {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 25px;
  height: 650px;
  width: 650px;
  margin-left: 30px;
  padding-top: 30px;
}

.menu-sidebar {

  height: 100vh;
  width: 350px;
  background-color: rgb(255, 255, 255);
  justify-content: flex-start;
  align-items: flex-start;
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
}


.tituloSec {
  font-size: 24px;
  font-weight: bold;
}
</style>

