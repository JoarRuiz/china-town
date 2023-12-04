<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import CardReservacion from '../components/CardReservacion.vue';
import personasReserva from '../assets/data/personasReserva.json';
import { useMesasStore } from '@/stores/mesas';
import { useReservasStore } from '@/stores/reservas';
import AlertComplete from '../components/AlertComplete.vue';
import AlertError from '../components/AlertError.vue';
import pandaMesasGif from '../assets/img/panda_mesas.gif';


import dayjs from 'dayjs';

const panda = pandaMesasGif;
//? Datos de mesas 

/**
 * todo Logica de las horas y fecha
 * !fechas
 */

const fechaCompletaAhora = ref(dayjs());

onMounted(() => {
    const intervalo = setInterval(() => {
        fechaCompletaAhora.value = dayjs();
    }, 1000);


    onUnmounted(() => clearInterval(intervalo));
});

// Método computado para obtener la fecha actual
const fechaAhora = computed(() => {
    return fechaCompletaAhora.value.format('YYYY-MM-DD');
});


/**
 * !Fecha seleccionada-Valor 1
 */
const fechaSeleccionada = ref(fechaAhora.value);

// Variable computada para la fecha mínima
const fechaMin = computed(() => {
    const horaFin = dayjs(fechaAhora.value).set('hour', 22).set('minute', 30);
    if (dayjs().isAfter(horaFin)) {
        return dayjs(fechaAhora.value).add(1, 'day').format('YYYY-MM-DD');
    } else {
        return fechaAhora.value;
    }
});


watch(fechaAhora, (nuevoValor) => {
    const horaFin = dayjs(nuevoValor).set('hour', 22).set('minute', 30);
    // Si la hora actual ha pasado la horaFin, actualiza fechaMin directamente
    if (dayjs().isAfter(horaFin)) {
        fechaMin.value = dayjs(nuevoValor).add(1, 'day').format('YYYY-MM-DD');
    }

    // Si fechaSeleccionada está en el día que pasamos, ajusta automáticamente
    if (dayjs(fechaSeleccionada.value).isSame(horaFin, 'day')) {
        fechaSeleccionada.value = fechaMin.value;
    }
});


/**
 * !horas
 */
function obtenerHorasDisponiblesParaFecha(fechaMostrar) {
    const horaInicio = dayjs(fechaMostrar).set('hour', 13).set('minute', 0); // Hora de inicio a las 13:00
    const horaFin = dayjs(fechaMostrar).set('hour', 22).set('minute', 30); // Última hora a las 22:30
    const intervalo = 30; // Intervalo de 30 minutos

    // Determina el inicio de las horas disponibles
    let horaActualCalculada = dayjs(fechaMostrar).isSame(dayjs(), 'day')
        ? fechaCompletaAhora.value.add(intervalo - (fechaCompletaAhora.value.minute() % intervalo), 'minute')
        : horaInicio;

    // Si la fechaMin ha cambiado, muestra todas las opciones de nuevo
    if (dayjs(fechaMostrar).isSame(fechaMin.value, 'day')) {
        horaActualCalculada = horaInicio;
    }

    const horas = [];

    while (horaActualCalculada.isBefore(horaFin) || horaActualCalculada.isSame(horaFin)) {
        if (horaActualCalculada.isAfter(fechaCompletaAhora.value)) {
            const horaFormateada = horaActualCalculada.format('HH:mm');
            const valorISO = horaActualCalculada.format('YYYY-MM-DDTHH:mm:ss');
            horas.push({ hora: horaFormateada, valorISO: valorISO });
        }
        horaActualCalculada = horaActualCalculada.add(intervalo, 'minute');
    }

    return horas;
}

const horasDisponibles = computed(() => {
    const fechaMostrar = fechaSeleccionada.value;
    return obtenerHorasDisponiblesParaFecha(fechaMostrar);
});

watch(fechaSeleccionada, (nuevaFechaSeleccionada) => {
    const horasDisponiblesParaFecha = obtenerHorasDisponiblesParaFecha(nuevaFechaSeleccionada);
    const horaExistente = horasDisponiblesParaFecha.find(hora => hora.valorISO === horaSeleccionada.value);

    // Si la hora actual no está en las nuevas horas disponibles y hay al menos una hora disponible, establece la primera como predeterminada
    if (!horaExistente && horasDisponiblesParaFecha.length > 0) {
        horaSeleccionada.value = horasDisponiblesParaFecha[0].valorISO;
    }
});



/**
 * todo Trabajando el numero de personas
 */
const personasReservas = ref(personasReserva);
/**
 * !hora seleccionada-Valor 2
 */
const horaSeleccionada = ref('');

/**
 * !personas seleccionada-Valor 3
 */
const numPersonasSeleccionadas = ref('');

const buscados = ref(false);

/**
 * *Mesas 
 */
const mesasStore = useMesasStore();
const todasLasMesas = mesasStore.getMesas;
const mesasDisponibles = ref([]);

/**
 * Reservas 
 */
const reservasStore = useReservasStore();
const reservasTotales = reservasStore.getReservas;
/**
 * !Trabajando el formulario
 */

const buscarReservasDia = (fecha) => {
    let mesasDelDia = [];
    if (reservasTotales[fecha] !== undefined) {
        mesasDelDia = Object.values(reservasTotales[fecha]);
    }
    return mesasDelDia;
}

const loading = ref(false);

/**
 * ?Buscar reservacio
 */
const buscarMesas = () => {
    loading.value = true;
    const totasDisponibles = 2;
    const unaDisponible = 1;
    completadaReserva.value = null;
    //Buscamos la mesas con sus caracteristicas que quiere, que son unidades
    let mesasPedidas = todasLasMesas.filter(mesa => mesa.unidadesPersonas.includes(numPersonasSeleccionadas.value));
    //Buscamos las reservas de ese dia
    let reservasDeEseDia = buscarReservasDia(fechaSeleccionada.value);


    //obtenemos las mesa en reserva de ese dia si alguna mesa esta ahi ese dia, si esta activo 
    let mesasEnReservas = reservasDeEseDia.filter(mesa =>
        mesasPedidas.some(reserva => reserva.ID_mesa === mesa.ID_mesa && reserva.estado !== "activo")
    );

    let mesasDis = mesasPedidas.filter(mesaPedida =>
        !mesasEnReservas.some(mesaReservada => mesaReservada.ID_mesa === mesaPedida.ID_mesa)
    );


    //Mostras las mesas que se puedan
    if (mesasDis.length === totasDisponibles) {
        mesasDisponibles.value = mesasPedidas;
        buscados.value = true;

    } else {
        if (mesasDis.length === unaDisponible) {
            mesasDisponibles.value = mesasDis;
            buscados.value = true;
        } else {
            mesasDisponibles.value = [];
            buscados.value = false;
        }

    }
    setTimeout(() => (loading.value = false), 2000)
}


/***
 * Esperando respuesta
 */

const completadaReserva = ref(null);

function recibiendoRespuesta(respuesta) {
    completadaReserva.value = null;
    completadaReserva.value = respuesta;
    if (respuesta) {
        mesasDisponibles.value = [];
        buscados.value = false;
    }
    horaSeleccionada.value = '';
    numPersonasSeleccionadas.value = '';
    buscados.value = null;
}


</script>


<template>
    <div class="backTitle">
        <h2 class="titleSeccion">Encuentra tu mesa para la ocasión</h2>

        <form class="busqueda" @submit.prevent="buscarMesas">

            <div class="contBotones">
                <div>
                    <input type="date" id="fecha" name="fecha" class="input" :min="fechaMin" v-model="fechaSeleccionada"
                        required>
                </div>

                <!--Manejo de las horas-->
                <div class="contGSelect">
                    <div class="contSelect">
                        <div class="iconon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 512 512">
                                <path fill="#000000"
                                    d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                            </svg>
                        </div>
                        <select name="Horas" id="horas" class="input" v-model="horaSeleccionada" required>
                            <option disabled value="" class="option">Hora</option>
                            <option v-for="hora in horasDisponibles" :value="hora.valorISO" class="option">
                                {{ hora.hora }} hr
                            </option>
                        </select>
                    </div>
                </div>


                <!--Manejo de numero de personas-->
                <div class="contGSelect">
                    <div class="contSelect">
                        <div class="iconon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="15" viewBox="0 0 448 512">
                                <path fill="#000000"
                                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                        </div>

                        <select name="Personas" id="numPersonas" class="input" v-model="numPersonasSeleccionadas" required>
                            <option disabled value="" class="option">Personas</option>
                            <option v-for="numPersonas in personasReservas" :value="numPersonas.valor" class="option">
                                {{ numPersonas.etiqueta }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <!---->
            <div>
                <v-btn :loading="loading" block size="large" type="submit" class="input botonVamos" variant="elevated">
                    ¡Vamos!
                </v-btn>
            </div>

        </form>
    </div>

    <div v-show="buscados" class="contentTitulo">
        <h3 class="tituloDisponible">Disponibles</h3>
    </div>

    <section class="section secReservaciones">
        <!--Apartado de las mesas-->

        <template v-if="completadaReserva">
            <AlertComplete :activo="true" :mensaje="'Reservación exitosa'"></AlertComplete>
        </template>
        <template v-if="completadaReserva === false">
            <AlertError :activo="true" :mensaje="'Fallo la reservación'"></AlertError>
        </template>

        <div v-show="buscados" class="reservaciones">
            <template v-for="mesaDisp in mesasDisponibles" :key="mesaDisp.ID_mesa">
                <CardReservacion :mesa="mesaDisp" :hora="horaSeleccionada" :numPersonas="numPersonasSeleccionadas"
                    :fechaReserva="fechaSeleccionada" @reservaHecha="recibiendoRespuesta">
                </CardReservacion>
            </template>
        </div>

        <!--gif-->
        <div class="previoBusqueda">
            <div>
                <p class="mensaje">Panda espera que disfrutes la estancia.</p>
            </div>
            <div>
                <img :src="panda" style="background-color: white;" alt="panda">
            </div>
        </div>
    </section>
</template>



<style scoped>
/**HEader */
.backTitle {
    position: relative;
    background: linear-gradient(180deg, var(--rojo) 0%, var(--rojo) 12.5%, #000 86.98%, #000 100%);
    width: 100%;
    min-height: var(--altura-bar-sec);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;
    padding-bottom: 10px;
}


.titleSeccion {
    color: white;
    font-size: 4.0625rem;
    font-weight: 600;
    z-index: 3;
}

/**Seccion de busqueda */

.busqueda {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    font-size: 1.125rem;
    text-align: center;
}





input,
select,
.input {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    margin: 0;
    background-color: white;
    color: black;
    border-radius: 3px;
    padding: 0 3px;
    cursor: pointer;
}

select {
    -webkit-appearance: auto;
}

.contSelect {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
}

.iconon {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
}

.contGSelect {
    background-color: white;
    border-radius: 3px;
}

.contBotones {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.botonVamos {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding: 9px 20px;
    width: 120px;
    align-items: center;
    font-weight: bolder !important;
    justify-content: center;
    border: 2px solid white;
    text-align: center;
    gap: 30px;
    font-weight: bold;
    border-radius: 8px;
    color: black;
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    background-color: #e9cb34;
    background-color: var(--amarillo-dorado);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 15px 13px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.botonVamos:hover {
    background-color: var(--amarillo-dorado);
    background-color: #e9c511;
    color: rgb(0, 0, 0);
}




/**Parte de las rservas */

.secReservaciones {
    min-height: 50vh;
}

.contentTitulo {
    width: 100%;
    max-width: 1260px;
    text-align: start;
    margin-bottom: 25px;
    padding-left: 15px;
}

.tituloDisponible {
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}



/**Seccion del grid */
.reservaciones {
    width: 100%;
    max-width: 1260px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 30px;
}

/***Mesaje */
.previoBusqueda {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    align-content: end;
    margin-top: 50px;
}

.mensaje {
    text-align: center;
    font-size: 25px;
    font-weight: 450;
}
</style>