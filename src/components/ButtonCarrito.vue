<script setup>
import { ref, defineEmits, onMounted, watchEffect } from 'vue';
import { useCarritoStore } from '@/stores/carrito';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const emit = defineEmits(['pedidoCompletado']);

const authStore = useAuthStore();
const carrito = useCarritoStore();
const router = useRouter();

const pedidoHecho = ref(false);
const unidadesNulas = 0;
const modalVisible = ref(false);
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



const mostrarModal = () => {
    modalVisible.value = true;
};

const cancelarModal = () => {
    modalVisible.value = false;
};

//procesamiento del carrito
function procesarCarrito() {

    const userInfo = authStore.getUserInfo;
    carrito.procesarPedido(userInfo.id);
    pedidoHecho.value = true;
    emit('pedidoCompletado', pedidoHecho.value);
    cancelarModal();
}


function irRegistrar(){
    cancelarModal();
    router.push({ name: 'login' });
}
</script>

<template>
    <div style="color:black">
        <button class="buton" @click="mostrarModal">
            <div class="contentIcon">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#ffffff">
                        <path
                            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                </div>
                <div> Ver pedido </div>
                <div class="unidadesTotales">
                    <p>{{ carrito.totalUnidades }}</p>
                </div>
            </div>
        </button>

        <!--Modal del carrito-->

        <v-dialog v-model="modalVisible">
            <div class="modal-content">
                <div class="headerModal">
                    <div>
                        <p class="tituloModal">Carrito</p>
                    </div>
                    <div>
                        <button @click="cancelarModal" class="cerrarModal">
                            <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 384 512">
                                <path fill="#ffffff"
                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div v-if="carrito.totalUnidades !== unidadesNulas">
                    <div>
                        <div class="resumeCarrito">
                            <table class="table">
                                <thead class="thead">
                                    <tr>
                                        <th>Producto</th>
                                        <th>Unidades</th>
                                        <th>Costo parcial</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Itera sobre los productos en el carrito -->
                                    <tr v-for="producto in carrito.getCarrito" :key="producto.ID">
                                        <td>{{ producto.Nombre }}</td>
                                        <td>
                                            <div class="controles">
                                                <button class="botonControl"
                                                    @click="carrito.actualizarProductoUnidades(producto.ID, producto.Unidades, -1)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                                        viewBox="0 0 448 512" fill="#fff">
                                                        <path
                                                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                                    </svg>
                                                </button>
                                                <div>
                                                    <p>{{ producto.Unidades }} </p>
                                                </div>
                                                <button class="botonControl"
                                                    @click="carrito.actualizarProductoUnidades(producto.ID, producto.Unidades, 1)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                                        viewBox="0 0 448 512" fill="#fff">
                                                        <path
                                                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td>${{ producto.CostoParcial }}</td>
                                        <td>
                                            <button @click="carrito.eliminarProducto(producto.ID)">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="21" width="21"
                                                    viewBox="0 0 448 512">
                                                    <path fill="#646668"
                                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot class="tfoot">
                                    <tr>
                                        <td colspan="4" style="text-align: end;">
                                            <strong>Total: ${{ carrito.totalPago }}</strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="contentAccion">
                        <template v-if="esCliente">
                            <button @click="carrito.limpiarCarrito" type="button" class="cancelarOrden">Cancelar
                                orden</button>
                            <button @click="procesarCarrito" type="button" class="confirmarOrden">Confirmar
                                orden</button>
                        </template>
                        <template v-if="esCliente === false">
                            <button @click="irRegistrar" type="button" class="confirmarOrden">Accede como cliente</button>
                        </template>
                    </div>
                </div>
                <!--Carrito vacio-->
                <div v-else>
                    <p> Tu carrito esta vacio</p>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<style scoped>
.buton {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding: 9px 20px;
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
    border: 2px solid white;
}

.buton:hover,
.cancelarOrden:hover {
    background-color: #991B1B;
    background-color: #991B1B;
}

.contentIcon {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;
    gap: 10px;
}

/**!Parte model del carrito */
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(71, 71, 71, 0.5);
    z-index: 999;
    cursor: pointer;
}

/**enlace
 */


.modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 30px 25px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
    z-index: 1000;
    width: 640px;
    max-height: 400px;
    display: flex;
    flex-flow: column nowrap;
    overflow-x: hidden;
    overflow-y: auto;
}

/**Scroll de content */
.modal-content::-webkit-scrollbar {
    width: 10px;
}

.modal-content::-webkit-scrollbar-track {
    background-color: #ffffff;
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0);
    border-radius: 6px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
    background-color: rgb(71, 71, 71);
}

.headerModal {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

.tituloModal {
    font-size: 1.5625rem;
    font-weight: bolder;
}


.unidadesTotales {
    margin-left: 16px;
    font-weight: bold;
}

.resumeCarrito {
    width: 100%;
    margin-bottom: 10px;
}

.cerrarModal {
    background-color: var(--rojo);
    -webkit-tap-highlight-color: transparent;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    right: 0px;
}


.cerrarModal:active {
    transform: scale(0.9);
}

/**! Tabla */
.table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    text-align: left;
    padding: 0 4px 4px 0;
}

.thead th {
    font-weight: bold;
}

.contentAccion {
    display: flex;
    flex-flow: row nowrap;
    justify-content: end;
    justify-items: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    font-size: .875rem;
}

.tfoot {
    border-top: 1px solid rgb(182, 180, 180);
}

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
    transform: scale(1.1);
}

.botonControl:active {
    transform: scale(0.9);
}


/**Botones finales */
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
    color: rgb(0, 0, 0);
}

/**Para cancelar orden */
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
</style>