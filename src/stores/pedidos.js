import { defineStore } from "pinia";
import { useNumeroPedidoStore } from "./numeroPedido";
import dayjs from "dayjs";

export const usePedidosStore = defineStore("pedidos", {
    state: () => {
        return {
            pedidos: [],
        };
    },
    getters: {
        getPedidos(state) {
            return state.pedidos;
        },

    },
    actions: {
        nuevoPedido(idCliente,pedido) {
            const useNumPedido = useNumeroPedidoStore(); 
            const {getNumeroPedido} =  useNumPedido;

            let miNuevoPedido = {
                "NumPedido": getNumeroPedido,
                "Fecha": dayjs().format('DD-MM-YYYY'),
                "ID_cliente": idCliente,
                "Entregado":false,
                "Carrito": pedido,
            };

            this.pedidos.push({ ...miNuevoPedido });
            useNumPedido.siguientePedido();
        },
        eliminarPedido(NumPedido){
            const index = this.pedidos.findIndex(pedido => pedido.NumPedido === NumPedido);
            if (index !== -1) {
                this.pedidos.splice(index, 1);
            }
        },
        pedidoEntregado(NumPedido) {
            const entregado = true; 
            let indice = this.pedidos.findIndex((p) => p.NumPedido === NumPedido);
            let noDisponible = -1;
            
            if (indice !== noDisponible) {
                this.pedidos[indice].Entregado = entregado;
            }
        },
    },

    persist: true,
})