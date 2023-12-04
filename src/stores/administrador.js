import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';

export const useAdministradorStore = defineStore("administrador", {
  state: () => {
    return {
        administrador: [{
                id: uuidv4(), 
                email:"geylerPAd0502@outlook.com",
                contrasenia: "Es2012@h9"
            }],
    };
  },

  getters: {
    getAdmin(state) {
      return state.administrador;
    },
  },

  persist: true,
});
