<template>
    <div class="controles">
        <button class="botonControl" @click="eliminarUnidad">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff">
                <path
                    d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
        </button>
        <div>
            <p>
                {{ unidades }}
            </p>
        </div>
        <button class="botonControl" @click="agregarUnidad">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff">
                <path
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
        </button>
    </div>
</template>
<script setup>
import { ref, defineProps} from 'vue';


const emit = defineEmits(['unidades']);
const props = defineProps(['id','unidadesDadas']);


/**
 * ! Unidades del producto
 */
const LIMITE_BAJO = 0;
const LIMITE_ALTO = 30;
const unidades = ref(0);


function agregarUnidad() {
    if (unidades.value < LIMITE_ALTO) {
        unidades.value++;
        emit('unidades', unidades.value);
    }
}

function eliminarUnidad() {
    if (unidades.value > LIMITE_BAJO) {
        unidades.value--;
        emit('unidades', unidades.value);
    }
}


</script>
<style scoped>
.controles {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    width: 95px;
    height: 35px;
    background-color: rgb(241, 239, 239);
    color: black;
}

.botonControl {
    background-color: var(--rojo);
    border-radius: 7px;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    height: 1.25rem;
    width: 1.23rem;
    transition: transform 0.1s ease-in-out;
}

.botonControl:hover {
    transform: scale(1.2);
}

.botonControl:active {
    transform: scale(0.9);
}
</style>