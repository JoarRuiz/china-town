import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user_info: null,
  }),

  getters: {
    getUserInfo(state) {
      return state.user_info;
    },
  },

  actions: {
    login(datosUser) {
      this.user_info = datosUser;
    },
    actulizarAuth(contrasenia){
        this.user_info['contrasenia'] = contrasenia ;
    },
    logout() {
      this.user_info = null;
    },
  },

  persist: true,
});
