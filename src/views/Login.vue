<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useAdministradorStore } from '@/stores/administrador';
import { useUsuariosStore } from '@/stores/usuarios';
import { useRouter } from 'vue-router';
import AlertComplete from '../components/AlertComplete.vue';
import AlertError from '../components/AlertError.vue';

const authStore = useAuthStore();
const adminStore = useAdministradorStore();
const usuariosStore = useUsuariosStore();
const router = useRouter();


/***
 * Del otro modal
 */

const emailRules = ref([(v) => !!v || 'Este campo es requerido', (v) => /.+@.+\..+/.test(v) || 'Ingrese un correo electrónico válido']);
const contraseniaReglas = ref([
    (v) => !!v || 'Este campo es requerido',
    (v) => (v && v.length >= 8) || 'Debe tener al menos 8 caracteres'
]);






const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const visible = ref(false);
const sinRegistro = ref(false);


const resetForm = () => {
    form.value = false;
    email.value = null;
    password.value = null;
};

const falloLogin = ref(null);

//ingresando
function onSubmit() {
    if (!form.value) return
    loading.value = true;
    let dataUser = { email: email.value, contrasenia: password.value };
    const admin = Object.values(adminStore.getAdmin)[0];
    falloLogin.value = null;

    setTimeout(() => (loading.value = false), 2000)
    //Si es el admin
    if (dataUser.email === admin.email && dataUser.contrasenia === admin.contrasenia) {
        dataUser['perfil'] = 'admin';
        dataUser['id'] = admin.id;
        resetForm();
        authStore.login(dataUser);
        falloLogin.value = true;
        router.push({ name: 'home' });
    } else {
        const clientes = usuariosStore.getUsuarios;
        const clienteEncontrado = clientes.find(usuario => usuario.email === dataUser.email && usuario.contrasenia === dataUser.contrasenia);
        if (clienteEncontrado) {
            dataUser['id'] = clienteEncontrado.id;
            dataUser['nombres'] = clienteEncontrado.nombres;
            dataUser['email'] = clienteEncontrado.email;
            dataUser['telefono'] = clienteEncontrado.telefono;
            dataUser['contrasenia'] = clienteEncontrado.contrasenia;
            dataUser['perfil'] = 'cliente';

            resetForm();
            authStore.login(dataUser);
            falloLogin.value = true;
            router.push({ name: 'home' });
        } else {
            sinRegistro.value = true;
            falloLogin.value = false;
        }
    }
}



</script>

<template>
    <section class="section_login">
        <div class="custom_card">
            <div>
                <div class="title">
                    <h2>Acceder</h2>
                </div>
                <div class="imge">
                    <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 512 512" fill="#e60f12">
                        <path
                            d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                    </svg>
                </div>
            </div>

            <div>
                <v-form v-model="form" @submit.prevent="onSubmit">
                    <v-text-field v-model="email" color="primary input" class="mb-2" :readonly="loading"
                        variant="underlined" :rules="emailRules" label="Correo electrónico">
                    </v-text-field>
                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" placeholder="Ingresar contraseña" label="Contraseña"
                        prepend-inner-icon="mdi-lock-outline" :readonly="loading" v-model="password" variant="underlined"
                        :rules="contraseniaReglas" @click:append-inner="visible = !visible" class="input">
                    </v-text-field>

                    <v-spacer></v-spacer>
                    <v-btn :disabled="!form" :loading="loading" block size="large" type="submit" class="butonLogin"
                        variant="elevated">
                        Iniciar sesión
                    </v-btn>

                </v-form>
                <div class="link_resgistro">
                    <p>¿No tienes una cuenta? <router-link to="/registro" class="enlace esylea-red">Regístrate</router-link>
                    </p>
                </div>
            </div>

            <template v-if="falloLogin">
                <AlertComplete :activo="true" :mensaje="'Bienvenido'"></AlertComplete>
            </template>
            <template v-if="falloLogin === false">
                <AlertError :activo="true" :mensaje="'Error en las credenciales'"></AlertError>
            </template>
        </div>
    </section>
</template>


<style scoped>
.section_login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 30px 0;
}

.custom_card {
    max-width: 350px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 40px;
    margin-bottom: 30px;
}

.title {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 40px;
}

.link_resgistro {
    margin-top: 20px;
}

.input {
    width: 300px;
}

.enlace {
    color: var(--rojo);
}

.enlace:hover {
    color: black;
}

.butonLogin {
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

.butonLogin:hover {
    background-color: var(--amarillo-dorado);
    background-color: #e9c511;
    color: rgb(0, 0, 0);
}
</style>
