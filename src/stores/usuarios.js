import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';

export const useUsuariosStore = defineStore("usuarios", {
  state: () => {
    return {
        usuarios: [],
    };
  },

  getters: {
    getUsuarios(state){
      return state.usuarios;
    }
  },

  actions: {
    agregarUsuario(usuario){
      this.usuarios.push(usuario);
    }
  },
  persist: true,
});
