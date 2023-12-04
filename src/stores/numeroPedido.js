import { defineStore } from "pinia";

export const useNumeroPedidoStore = defineStore("numeroPedido", {
    state: () =>{
        return {
            numeroPedido: 1
        };
    },
    getters:{
        getNumeroPedido(state){
            return state.numeroPedido;
        },
    },
    actions:{
        siguientePedido(){
            this.numeroPedido++;
        }
    },

    persist:true
})