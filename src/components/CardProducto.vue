<script setup>
import { ref} from 'vue';
import { useCarritoStore } from '@/stores/carrito';


const props = defineProps(['producto'])
const carrito = useCarritoStore();


//! Limite de las unidades
const LIMITE_BAJO = 1;
const LIMITE_ALTO = 30;
const sinUnidad = 0;
const unidadesSeleccionadas = ref(1);


function agregarUnidad() {
    if (unidadesSeleccionadas.value < LIMITE_ALTO) {
        unidadesSeleccionadas.value++;
    }
}

function eliminarUnidad() {
    if (unidadesSeleccionadas.value > LIMITE_BAJO) {
        unidadesSeleccionadas.value--;
    }
}


function agregarProducto() {
    let costoParcial = unidadesSeleccionadas.value * props.producto.Costo

    if (unidadesSeleccionadas.value !== sinUnidad) {
        let productoAgregado = {
            "ID": props.producto.ID,
            "Nombre": props.producto.Nombre,
            "Unidades": unidadesSeleccionadas.value,
            "Precio": props.producto.Costo,
            "CostoParcial": costoParcial
        }
        carrito.agregarProducto(productoAgregado);
    } else {
        /* carrito.eliminarProducto(props.producto.ID); */
    }

    unidadesSeleccionadas.value = 1;
}

</script>
<template>
    <v-card class="card">
        <div class="contentCard">
            <div class="contenido">
                <v-card-title class="productoNombre">
                    {{ props.producto.Nombre }}
                </v-card-title>
                <div class="precio">
                    <p> <strong>$ {{ props.producto.Costo }}</strong></p>
                </div>
                <v-card-actions class="actions">
                    <!--Botones de aumento -->
                    <div class="controles">
                        <button class="botonControl" @click="eliminarUnidad">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff">
                                <path
                                    d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </button>
                        <div>
                            <p>
                                {{ unidadesSeleccionadas }}
                            </p>
                        </div>
                        <button class="botonControl" @click="agregarUnidad">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff">
                                <path
                                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </button>
                    </div>
                    <!--Boton de agregar al carrito-->
                    <button type="button" class="buttonAgregarCarrito" @click="agregarProducto">Agregar al carrito</button>
                </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="100" rounded="0">
                <v-img :src="props.producto.img"></v-img>
            </v-avatar>
        </div>
    </v-card>
</template>

<style scoped>
.contentCard {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.precio {
    padding-left: 1rem;
}

.contenido {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: center;
    min-height: 80px;
    gap: 5px;
}

.productoNombre {
    font-size: 15px;
    word-wrap: break-word;
    white-space: normal;
    line-height: 1.4;
}

.card {
    padding: .5625rem;
    border-radius: 1.875rem;
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
    max-height: 200px;
    width: 350px;
    max-width: 360px;
}

.actions {
    display: flex;
    flex-flow: row nowrap;
    justify-content: end;
    align-items: start;
    gap: 7px
}

/**Boton de agregar al carrito */
.buttonAgregarCarrito {
    border-radius: 10px;
    width: 95px;
    height: 35px;
    color: rgb(29, 29, 29);
    font-size: .6875rem;
    font-weight: 500;
    padding: 0 2px;
    background-color: #cfb326;
    background-color: var(--amarillo-dorado);
    transition: background-color 300ms cubic-bezier(0, 0, 0.2, 1),
                box-shadow 300ms cubic-bezier(0, 0, 0.2, 1),
                transform 0.1s ease-in-out;
    will-change: transform;
}

.buttonAgregarCarrito:hover {
    background-color: #f8da42;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.buttonAgregarCarrito:active {
    transform: scale(0.9);
    box-shadow: none; /* Elimina la sombra cuando se presiona */
}



/** estios de los botones de aumento */

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