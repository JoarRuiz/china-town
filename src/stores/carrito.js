import { defineStore } from "pinia";
import { usePedidosStore } from "./pedidos";

export const useCarritoStore = defineStore("carrito", {
  state: () => {
    return {
      carrito: [],
    };
  },

  getters: {
    totalUnidades(state) {
      return state.carrito.reduce(
        (total, articulo) => total + articulo.Unidades,
        0
      );
    },

    totalPago(state) {
      return state.carrito.reduce(
        (total, articulo) => total + articulo.CostoParcial,
        0
      );
    },

    getCarrito(state) {
      return state.carrito;
    },
  },

  actions: {
    agregarProducto(producto) {
      let indice = this.carrito.findIndex((p) => p.ID === producto.ID);
      let noDisponible = -1;
      let limiteAlto = 30;
      let nuevasUnidades = 0;

      if (indice !== noDisponible) {
        nuevasUnidades = this.carrito[indice].Unidades + producto.Unidades;

        if (nuevasUnidades <= limiteAlto) {
          this.carrito[indice].Unidades += producto.Unidades;
          this.carrito[indice].CostoParcial += producto.CostoParcial;
        } else {
          this.carrito[indice].Unidades = limiteAlto;
          this.carrito[indice].CostoParcial =
            this.carrito[indice].Precio * limiteAlto;
        }
      } else {
        this.carrito.push({ ...producto });
      }
    },

    actualizarProductoUnidades(ID, unidadesActuales, unidadesAgregar) {
      let limiteBajo = 1;
      let limiteAlto = 30;
      let nuevasUnidades = 0;
      let noDisponible = -1;

      //buscar el producto
      let indice = this.carrito.findIndex((p) => p.ID === ID);

      //disponible
      if (indice !== noDisponible) {
        nuevasUnidades = unidadesActuales + unidadesAgregar;

        if (nuevasUnidades >= limiteBajo && nuevasUnidades <= limiteAlto) {
          this.carrito[indice].Unidades = nuevasUnidades;
          this.carrito[indice].CostoParcial =
            this.carrito[indice].Precio * nuevasUnidades;
        }
      }
    },
    obtenerPagoParcial(ID) {
      const producto = this.carrito.find((p) => p.ID === ID);
      return producto ? producto.CostoParcial : 0;
    },
    eliminarProducto(ID) {
      const indice = this.carrito.findIndex((item) => item.ID === ID);
      if (indice !== -1) {
        this.carrito.splice(indice, 1);
      }
    },
    procesarPedido(idCliente){
        let carrito = this.carrito;
        const pedidos = usePedidosStore();
        pedidos.nuevoPedido(idCliente,...carrito);
        this.limpiarCarrito();
    },
    limpiarCarrito() {
      this.carrito = [];
    },
  },
  persist: true,
});
