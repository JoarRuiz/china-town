import { defineStore } from "pinia";

export const useNumeroReservaStore = defineStore("numeroReserva", {
    state: () =>{
        return {
            numeroReserva: 1
        };
    },
    getters:{
        getNumeroReserva(state){
            return state.numeroReserva;
        },
    },
    actions:{
        siguienteReserva(){
            this.numeroReserva++;
        }
    },

    persist:true
})