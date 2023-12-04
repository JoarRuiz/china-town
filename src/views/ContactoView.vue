<script setup>
import ButtonTwo from '../components/ButtonTypeTwo.vue';
</script>

<template>
  <div class="backTitle">
    <div class="overlay"></div>
    <h2 class="titleSeccion">Contacto</h2>
  </div>
  <!---->
  <section class="sectionContacto">
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1522.7415061325746!2d-107.38047075621292!3d24.805379618164853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700459467754!5m2!1ses!2smx"
        width="600" height="500" style="border:0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div>
      <h3 class="tituloSucursal">Sucursal centro</h3>
      <!---->
      <div class="seccionsContacto">

        <div class="secContacto">
          <h4 class="tituloSec">Dirección:</h4>
          <address> Calle 43 #407 entre 52 y 52A, Centro, CP 97700, Tizimín, Yucatán.</address>
        </div>
        <!---->
        <div class="secContacto">
          <h4 class="tituloSec">Teléfono:</h4>
          <a href="tel:+529861000830" style="color: black;">+52 986 100 08 30</a>
        </div>
        <!---->
        <div class="secContacto">
          <h4 class="tituloSec">Email:</h4>
          <a href="mailto:ChinaTownTizimín@gmail.com" style="color: black;">ChinaTownTizimín@gmail.com</a>
        </div>
        <!---->
        <div class="secContacto">
          <h4 class="tituloSec">Horarios:</h4>
          <p>Lunes a Domingos: 1:00 p.m. - 11:00 p.m.</p>
          <p>Los servicios a domicilio terminan 30 min. antes de cerrar.</p>
        </div>
        <div class="secButtons">
          <ButtonTwo enlace="mesas" titulo="Reserva mesa"></ButtonTwo>
          <ButtonTwo enlace="/" titulo="Pedidos online"></ButtonTwo>
          <ButtonTwo enlace="menu" titulo="Ordenar ahora"></ButtonTwo>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.backTitle {
  position: relative;
  background-image: url('../assets/img/backTitle/BackContacto.jpeg');
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

.sectionContacto {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: start;
}

.seccionsContacto {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
  text-align: start;
  gap: 20px;
}

.tituloSucursal {
  font-size: 4.0625rem;
  font-weight: 580;
}

.tituloSec {
  font-size: 1.25rem;
  font-weight: bold;
}

.secButtons{
  margin-top: 20px;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items:center;
  align-content: center;
  gap: 20px;
}
</style>
