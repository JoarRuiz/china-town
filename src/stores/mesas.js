import { defineStore } from "pinia";
import mesasRestaurante from '../assets/data/mesasRestaurante.json';

export const useMesasStore = defineStore("mesas", {
    state: () => {
        return {
            mesas: mesasRestaurante
        };
    },
    getters: {
        getMesas(state) {
            return state.mesas;
        },
    },
})