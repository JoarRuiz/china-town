<script setup>
import ButtonTwo from '../components/ButtonTypeTwo.vue';
import Carrousel from '../components/Carrousel.vue';
</script>

<template>
  <!---->
  <div class="hero">
    <div class="ContentHeroTitle">
      <h2 class="heroTitle">
        La mejor <strong>comida</strong><br><strong>china</strong> en México
      </h2>
      <ButtonTwo enlace="mesas" titulo="Reserva ahora"></ButtonTwo>
    </div>

    <div class="contentImg">
      <img src="../assets/img/fideos_hero.png" alt="Fideos chinos" class="imgHero" loading="lazy">
    </div>

    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </div>

  <!---->
  <section class="section comida">
    <div class="textSeccionComida">

      <h3 class="titleSeccion">Fideos</h3>
      <p>Amaras nuestros <strong>fideos</strong>.</p>
      <p> Elige tu favorito.</p>
    </div>
    <div class="platillos">

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo1.png" alt="Fideos chinos con verduras y soja" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Fideos chinos <br>con verduras y soja</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo2.png" alt="Fideos chinos con camarones" loading="lazy">
        </div>
        <span class="nombrePlatillo">Fideos chinos <br> con camarones</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo3.png" alt="Fideos chinos con langostinos y mango" loading="lazy">
        </div>
        <span class="nombrePlatillo">Fideos chinos con <br>langostinos y mango</span>
      </div>
    </div>
  </section>
  <!---->
  <section class="section comida">
    <div class="textSeccionComida">
      <h3 class="titleSeccion">Pollo</h3>
      <p>Lo mejor del <strong>pollo</strong>.</p>
    </div>
    <div class="platillos">
      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Pollo1.png" alt="Pollo mandarina a la plancha" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Pollo mandarina<br> a la plancha</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo2.png" alt=" Pollo naranja" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Pollo naranja</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Fideo3.png" alt="Pollo con patata" class="imgplatillo" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Pollo con patata</span>
      </div>
    </div>
  </section>
  <!---->
  <section class="section comida">
    <div class="textSeccionComida">
      <h3 class="titleSeccion">Postres</h3>
      <p><strong>Endulza</strong> esta vida.</p>
    </div>
    <div class="platillos">
      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Postre1.png" alt="Pollo mandarina a la plancha" loading="lazy">
        </div>
        <span class="nombrePlatillo"> Dulce de Durazno</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Postre2.png" alt="Fideos chinos con camarones" loading="lazy">
        </div>
        <span class="nombrePlatillo">Pastel de Luna</span>
      </div>

      <div class="platillo">
        <div class="imgPlatillo">
          <img src="../assets/img/Postre3.png" alt="Fideos chinos con langostinos y mango" class="imgplatillo"
            loading="lazy">
        </div>
        <span class="nombrePlatillo">Jiān Duī</span>
      </div>
    </div>
    <!--Boton-->
    <div class="contentBoton">
      <ButtonTwo enlace="menu" titulo="Ir a Menú"></ButtonTwo>
    </div>
  </section>
  <!---->
  <div class="separacion">
    <div class="overlay"></div>
  </div>
  <!---->
  <section class="section contentHistoria">
    <div class="contentHist">
      <div class="contentImg">
        <img src="../assets/img/CuadroTia.png" alt="Mei Ling" class="imgTia">
      </div>
      <div class="contentText">
        <h3 class="titleSeccion">Nuestra historia</h3>
        <p>Hecho con mucho <strong>amor</strong><br>para nuestros clientes.</p>
        <div>
          <ButtonTwo enlace="NuestraHistoria" titulo="Conocer"></ButtonTwo>
        </div>
      </div>
    </div>

    <div class="imgBackHistoria"></div>

  </section>
  <!---->
  <section class="section">
    <div>
      <h3 class="titleSeccion">Nuestros clientes</h3>
    </div>
    <div class="contentClientes">
      <di class="comentarios">
        <Carrousel></Carrousel>
      </di>
      <div class="contentImgComentarios">
        <img src="../assets/img/imgClientes.png" alt="Clientes" class="imgClientes">
      </div>
    </div>

  </section>
</template>

<style scoped>
.content {
  text-align: center;
}

.title {
  font-size: var(--fs);
  font-weight: 800;
  letter-spacing: var(--ls);
  position: relative;
  overflow: hidden;
}


.aurora {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  mix-blend-mode: darken;
  pointer-events: none;
}

.aurora__item {
  overflow: hidden;
  position: absolute;
  width: 40vw;
  height: 40vw;
  background-color: var(--clr-1);
  border-radius: 100%;
  filter: blur(var(--blur));
  mix-blend-mode: overlay;
}

.aurora__item:nth-of-type(1) {
  top: -50%;
  animation: aurora-border 6s ease-in-out infinite,
    aurora-1 12s ease-in-out infinite alternate;
}

.aurora__item:nth-of-type(2) {
  background-color: var(--clr-3);
  right: 0;
  top: 0;
  animation: aurora-border 6s ease-in-out infinite,
    aurora-2 12s ease-in-out infinite alternate;
}

.aurora__item:nth-of-type(3) {
  background-color: var(--clr-2);
  left: 0;
  bottom: 0;
  animation: aurora-border 6s ease-in-out infinite,
    aurora-3 8s ease-in-out infinite alternate;
}

.aurora__item:nth-of-type(4) {
  background-color: var(--clr-4);
  right: 0;
  bottom: -50%;
  animation: aurora-border 6s ease-in-out infinite,
    aurora-4 24s ease-in-out infinite alternate;
}

@keyframes aurora-1 {
  0% {
    top: 0;
    right: 0;
  }

  50% {
    top: 100%;
    right: 75%;
  }

  75% {
    top: 100%;
    right: 25%;
  }

  100% {
    top: 0;
    right: 0;
  }
}

@keyframes aurora-2 {
  0% {
    top: -50%;
    left: 0%;
  }

  60% {
    top: 100%;
    left: 75%;
  }

  85% {
    top: 100%;
    left: 25%;
  }

  100% {
    top: -50%;
    left: 0%;
  }
}

@keyframes aurora-3 {
  0% {
    bottom: 0;
    left: 0;
  }

  40% {
    bottom: 100%;
    left: 75%;
  }

  65% {
    bottom: 40%;
    left: 50%;
  }

  100% {
    bottom: 0;
    left: 0;
  }
}

@keyframes aurora-4 {
  0% {
    bottom: -50%;
    right: 0;
  }

  50% {
    bottom: 0%;
    right: 40%;
  }

  90% {
    bottom: 50%;
    right: 25%;
  }

  100% {
    bottom: -50%;
    right: 0;
  }
}

@keyframes aurora-border {
  0% {
    border-radius: 50%
  }

  25% {
    border-radius: 50%
  }

  50% {
    border-radius: 50%
  }

  75% {
    border-radius: 50%
  }

  100% {
    border-radius: 50%
  }
}

.hero {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  align-content: center;
  width: 100%;
  max-width: 100%;
  border-bottom: 1px solid rgb(196, 192, 192);
  margin-bottom: 50px;
  min-height: 90vh;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
  background-color: white;
}

.ContentHeroTitle {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  gap: 20px;
  z-index: 100;
}

.contentImg {
  z-index: 100;
}

.heroTitle {
  font-size: 65px;
  font-weight: 1000;
  text-transform: uppercase;
}

.titleSeccion {
  font-size: 4.0625rem;
  font-weight: 580;
}


.platillos {
  margin: 2.5rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  align-items: center;
}

.platillo {
  min-width: 20%;
}

.separacion {
  position: relative;
  background-image: url('../assets/img/imgSeccion.webp');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 400px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 10px;
}

.overlay {
  border-radius: 30px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.contentBoton {
  padding-top: 1.875rem;
  display: flex;
  justify-content: center;
}

.textSeccionComida>p {
  font-weight: 600;
  font-size: 1.125rem;
}

.contentHistoria {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
}

.imgBackHistoria {
  background-image: url('../assets/img/historiaBack.jpeg');
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 400px;
  box-sizing: border-box;
  grid-column: 1/-1;
  grid-row: 1/-1;
  z-index: 0;
  border-radius: 30px;
}

.contentHist {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  grid-column: 1/-1;
  grid-row: 1/-1;
  z-index: 2;
}

.contentText {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-content: center;
  gap: 1.875rem;
}

.contentClientes {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
}

.imgClientes,
.imgTia {
  width: 80%;
}

.nombrePlatillo {
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
  font-size: 18px;
  font-weight: 500;
}
</style>