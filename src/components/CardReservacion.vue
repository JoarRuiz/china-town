<script setup>
import { ref, defineEmits, onMounted, watchEffect } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useReservasStore } from '@/stores/reservas'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'vue-router';

const datosE = defineProps(['mesa', 'hora', 'numPersonas', 'fechaReserva'])
const emit = defineEmits(['reservaHecha']);
const router = useRouter();


const fechaHora = new Date(datosE.hora);
const horas = fechaHora.getHours();
const minutos = fechaHora.getMinutes();
const horasFormateadas = horas < 10 ? `0${horas}` : horas;
const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
const horaFormateada = ref('');
horaFormateada.value = `${horasFormateadas}:${minutosFormateados}`;

const showDialog = ref(false)

const partesFecha = datosE.hora.split('T')[0].split('-');
const fechaFormateada = ref('');
fechaFormateada.value = `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;

/**
 * Aqui se procesara la reserva
 */
const reservaCompletada = ref(false);
const authStore = useAuthStore();
const reservasStore = useReservasStore();


function procesarReserva() {
    const userInfo = authStore.getUserInfo;
    let reservacion = {
        "ID_reserva": uuidv4(),
        "Fecha": datosE.fechaReserva,
        "ID_mesa": datosE.mesa.ID_mesa,
        "Hora": datosE.hora,
        "ID_cliente": userInfo.id,
        "NumPersonas": datosE.numPersonas,
        "Estado": "activo"
    }

    reservasStore.nuevaReservacion(datosE.fechaReserva, reservacion);
    reservaCompletada.value = true;
    emit('reservaHecha', reservaCompletada.value);
    showDialog.value = false;
}

const esCliente = ref(false);
//Comporbar si es alguien que ha iniciado sesion
onMounted(() => {
    let perfilCliente = 'cliente';
    const userInfo = authStore.getUserInfo;

    if (userInfo !== null) {
        if (userInfo.perfil === perfilCliente) {
            esCliente.value = true;
        } else {
            esCliente.value = false;
        }
    } else {
        esCliente.value = false;
    }

}),

    watchEffect(() => {
        let perfilCliente = 'cliente';
        const userInfo = authStore.getUserInfo;

        if (userInfo !== null) {
            if (userInfo.perfil === perfilCliente) {
                esCliente.value = true;
            } else {
                esCliente.value = false;
            }
        } else {
            esCliente.value = false;
        }
    });

function irRegistrar() {
    showDialog.value = false;
    router.push({ name: 'login' });
}

</script>
<template>
    <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <v-card class="card" :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
            <div class="contentCard" @click="showDialog = true">
                <v-avatar size="150" rounded="0">
                    <v-img :src="datosE.mesa.imgM" alt="Mesa"></v-img>
                </v-avatar>

                <div class="contenido">
                    <v-card-title class="mesaNombre">
                        Mesa {{ datosE.mesa.numeroMesa }}
                    </v-card-title>

                    <div class="capacidad">
                        <p>{{ datosE.mesa.unidadesPersonas[0] }} a {{ datosE.mesa.unidadesPersonas[1] }} personas</p>
                    </div>

                    <div class="contentHorario">
                        <div class="horario">
                            <p>{{ horaFormateada }} hr</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Componente v-dialog -->
            <v-dialog v-model="showDialog" max-width="500px" class="modalS">
                <v-card class="modalReservacion">
                    <v-card-title class="tituloModal">Hacer reservación</v-card-title>
                    <div>
                        <ul class="datosMesa">
                            <li class="carac">Mesa</li>
                            <li>{{ datosE.mesa.numeroMesa }}</li>
                            <li class="carac">Personas</li>
                            <li>{{ datosE.numPersonas }}</li>
                            <li class="carac">Fecha</li>
                            <li>{{ fechaFormateada }}</li>
                            <li class="carac">Hora</li>
                            <li>{{ horaFormateada }} </li>
                        </ul>
                    </div>
                    <v-card-actions class="contButons">
                        <template v-if="esCliente">
                            <button @click="showDialog = false" type="button" class="cancelarOrden">Cancelar</button>
                            <button @click="procesarReserva" type="button" class="confirmarOrden">Confirmar</button>
                        </template>
                        <template v-if="esCliente === false">
                            <button @click="showDialog = false" type="button" class="cancelarOrden">Cancelar</button>
                            <button @click="irRegistrar" type="button" class="confirmarOrden">Accede como
                                cliente</button>
                        </template>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </v-hover>
</template>

<style scoped>
.contentCard {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 45px;
    text-align: center;
}


.contenido {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: start;
    text-align: start;
    gap: 10px;
}

.mesaNombre {
    padding: 0;
    font-size: 15px;
    text-wrap: balance;
    line-height: 1.4;
    word-wrap: break-word;
    white-space: normal;
}

.card {
    border: 2px solid rgba(235, 194, 86, 0.82);
    background: #FFF;
    border-radius: 0.625rem;
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
    width: 400px;
    max-height: 14.3125rem;
    padding: 1.25rem .625rem;
    cursor: pointer;
}



.horario {
    background-color: var(--rojo);
    color: white;
    padding: 3px;
    display: inline-block;
}



.modalReservacion {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 10px;
}

.datosMesa {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    grid-column-gap: 40px;
}

.tituloModal {
    font-size: 1.5625rem;
    font-weight: bolder;
}

.carac {
    font-weight: 600;
}

.cancelarOrden {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding: 7px 8px;
    align-items: center;
    gap: 30px;
    border-radius: 8px;
    font-weight: 500;
    color: #ffffff;
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #7F1D1D;
    background-color: #DC2626;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 15px 13px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.cancelarOrden:hover {
    background-color: #991B1B;
    background-color: #991B1B;
}

.contButons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 50px;
}

.confirmarOrden {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding: 7px 8px;
    align-items: center;
    gap: 30px;
    border-radius: 8px;
    font-weight: 500;
    color: black;
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #e9cb34;
    background-color: var(--amarillo-dorado);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 15px 13px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.confirmarOrden:hover {
    background-color: var(--amarillo-dorado);
    background-color: #e9c511;
    color: black;
}
</style>