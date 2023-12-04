<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const data = defineProps(['nombre']);

const items = reactive([
    { title: 'Mi perfil' , enlace:"/user/userperfil"},
    { title: 'Mis reservaciones' , enlace:"/user/usermesasreserva"},
    { title: 'Mis pedidos' , enlace:"/user/userpedidosproceso"},
])

const cerrarSesion = () =>{
    authStore.logout();
    router.push({ name: 'home' });
    window.location.reload();
}


</script>


<template>
    <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="buton">
                {{ data.nombre.substring(0, 2).toUpperCase()}}
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                <v-list-item-title> <RouterLink :to="item.enlace" class="enlace">{{ item.title }}</RouterLink> </v-list-item-title>
            </v-list-item>
            
            <v-list-item>
                <v-list-item-title class="cierre" @click="cerrarSesion"> <span class="esylea-red">Cerrar sesión</span> </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<style scoped>

.buton {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    font-size: 17px;
    align-items: center;
    justify-content: center;
    width: 57px;
    height: 57px;
    border-radius: 50%;
    margin:0;
    font-weight: bolder;
    color: #ffffff;
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #e9cb34;
    background-color: var(--amarillo-dorado);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 10px 13px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 2px solid white;
}

.buton:hover{
    background-color: var(--amarillo-dorado);
    background-color: #dfbe1b;
}

.enlace{
    color: black;
}

.cierre{
    color:var(--rojo);
    cursor:pointer;
}

.cierre:hover{
    color:black;
}
</style>