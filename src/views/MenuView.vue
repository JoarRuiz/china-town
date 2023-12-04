<script setup>
import CardProducto from '../components/CardProducto.vue';
import productosMenu from '../assets/data/productosMenu.json';
const productos = productosMenu;
let fideos = productos.Fideos;
let pollos = productos.Pollos;
let postres = productos.Postres;
let bebidas = productos.Bebidas;


</script>

<template>
  <div class="backTitle">
    <div class="overlay"></div>
    <h2 class="titleSeccion">Menú</h2>
  </div>
  <section>
    <div class="platillosCarrito">
      <h3 class="tituloSecPlatillo">Fideos</h3>
      <div class="productos">
        <template v-for="fideo in fideos" :key="fideo.ID">
          <CardProducto :producto="fideo"></CardProducto>
        </template>

      </div>
    </div>
    <div class="platillosCarrito">
      <h3 class="tituloSecPlatillo">Pollo</h3>
      <div class="productos">
        <template v-for="pollo in pollos" :key="pollo.ID">
          <CardProducto :producto="pollo"></CardProducto>
        </template>
      </div>
    </div>
    <div class="platillosCarrito">
      <h3 class="tituloSecPlatillo">Postres</h3>
      <div class="productos">
        <template v-for="postre in postres" :key="postre.ID">
          <CardProducto :producto="postre"></CardProducto>
        </template>
      </div>
    </div>
    <div class="platillosCarrito">
      <h3 class="tituloSecPlatillo">Bebidas</h3>
      <div class="productos">
        <template v-for="bebida in bebidas" :key="bebida.ID">
          <CardProducto :producto="bebida"></CardProducto>
        </template>
      </div>
    </div>
  </section>
</template>




<style scoped>
.backTitle {
  position: relative;
  background-image: url('../assets/img/backTitle/BackMenu.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: var(--altura-bar-sec);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
}


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.titleSeccion {
  color: white;
  font-size: 4.0625rem;
  font-weight: 600;
  z-index: 3;
}

.secCarrito {
  display: flex;
  flex-flow: row wrap;
  justify-content: end;
  width: 100%;
  max-width: 1260px;
  position:relative;
  padding: 0 20px;
}

.productos {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-flow: row wrap;
  align-content: center;
  margin: 40px 0;
}

.tituloSecPlatillo {
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
