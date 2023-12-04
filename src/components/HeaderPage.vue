<script setup>
import { RouterLink } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { useAuthStore } from '@/stores/auth';

import ButtonTypeOne from './ButtonTypeOne.vue';
import ButtonCarrito from './ButtonCarrito.vue';
import ButtonCliente from './ButtonCliente.vue';
import ButtonAdmin from './ButtonAdmin.vue';
import AlertComplete from '../components/AlertComplete.vue';
import AlertError from '../components/AlertError.vue';


const authStore = useAuthStore();
const esAdmin = ref(false);
const nombreC = ref("");
const inicioSesion = ref(false);

watchEffect(() => {
    let perfilAdmin = 'admin';
    const userInfo = authStore.getUserInfo;

    if (userInfo !== null) {
        if (userInfo.perfil === perfilAdmin) {
            esAdmin.value = true;
        } else {
            esAdmin.value = false;
            nombreC.value = userInfo.nombres;
        }

        inicioSesion.value = true;
    } else {
        // Usuario no autenticado
        esAdmin.value = false;
        nombreC.value = "";
        inicioSesion.value = false;
    }
});


const completadaPedido = ref(null);
function recibiendoRespuesta(respuesta) {
    completadaPedido.value = null;
    completadaPedido.value = respuesta;
}

</script>


<template>
    <header class="header">
        <div class="contentPrincipal">
            <!---->
            <div class="principal">
                <div class="imgLogo">
                    <img src="../assets/img/logoPanda.jpg" alt="logo del restaurante" class="logo">
                </div>
                <div class="tituloPrincipal">
                    <RouterLink to="/">
                        <h1 class="titulo">China Town</h1>
                    </RouterLink>
                </div>
            </div>
            <!---->
            <div class="navegacion">
                <nav>
                    <ul class="listNav">
                        <li class="pagina">
                            <RouterLink to="/menu" class="enlace esylea-white">Menú</RouterLink>
                        </li>
                        <li class="pagina">
                            <RouterLink to="/mesas" class="enlace esylea-white">Mesas</RouterLink>
                        </li>
                        <li class="pagina">
                            <RouterLink to="/contacto" class="enlace esylea-white">Contacto</RouterLink>
                        </li>
                        <li class="pagina">
                            <RouterLink to="/nuestraHistoria" class="enlace esylea-white">Nuestra historia</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="accionesBotones">
            <ButtonCarrito @pedidoCompletado="recibiendoRespuesta"></ButtonCarrito>
            <template v-if="inicioSesion">
                <ButtonAdmin v-if="esAdmin"></ButtonAdmin>
                <ButtonCliente v-else :nombre="nombreC"></ButtonCliente>
            </template>
            <ButtonTypeOne v-else enlace="/login">Acceder</ButtonTypeOne>
        </div>
    </header>
    <template v-if="completadaPedido ">
        <AlertComplete :activo="true" :mensaje="'Pedido exitoso'"></AlertComplete>
    </template>
    <template v-if="completadaPedido  === false">
        <AlertError :activo="true" :mensaje="'Fallo el pedido'"></AlertError>
    </template>
</template>


<style scoped>
.header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--rojo);
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-content: center;
    justify-items: center;
    align-items: center;
    padding: 1.125rem 2.1875rem;
    border-bottom: 1px solid white;
}


.logo {
    clip-path: circle(50% at 50% 50%);
    height: 40px;
}

.principal {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 8px;
}

.accionesBotones {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 20px;
}

.titulo {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: bold;
}

.listNav {
    display: flex;
    flex-flow: row nowrap;
    gap: 1.25rem;
}

.pagina>a {
    font-weight: 400;
}

.contentPrincipal {
    display: flex;
    flex-flow: row nowrap;
    gap: 3.125rem;
    align-content: center;
    align-items: center;
}
</style>