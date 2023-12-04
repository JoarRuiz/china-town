import { defineStore } from "pinia";

export const useReservasStore = defineStore("reservas", {
    state: () => {
        return {
            reservaciones: {},
        };
    },
    getters: {
        getReservas(state){
            return state.reservaciones;
        }
    },
    actions: {
        nuevaReservacion(fecha,reservacion) {
            if (!this.reservaciones[fecha]) {
                this.reservaciones[fecha] = [];
            }
            this.reservaciones[fecha].push(reservacion);
        },

    },
    persist:true,
})
