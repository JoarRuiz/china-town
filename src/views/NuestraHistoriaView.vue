<template>
    <div class="backTitle">
        <div class="overlay"></div>
        <h2 class="titleSeccion">Nuestra historia</h2>
    </div>
    <!---->
    <section class="seccionHistoria">
        <div class="contentImg">
            <figure>
                <img src="../assets/img/CuadroTia.png" alt="Mei Ling" class="imgTia">
                <figcaption class="titleImg">
                    Foto de Mei Ling
                </figcaption>
            </figure>
        </div>

        <div class="historia">
            <p class="parrafo">
                Hace muchos años, en un tranquilo barrio de la ciudad, vivía una familia con una abuela cariñosa y
                apasionada por la cocina. Su nombre era Mei Ling y había crecido en la lejana China, donde había aprendido
                los secretos de la auténtica cocina china de su madre y su abuela.
            </p>
            <br>
            <p class="parrafo">
                Mei Ling se convirtió en una maestra de la cocina china y, con el tiempo, transmitió sus conocimientos a sus
                nietos Joar y Efrain. Pasaban horas juntos en la cocina, aprendiendo las recetas tradicionales y
                experimentando con nuevos sabores. Cada comida se convirtió en una celebración de los sabores y aromas de la
                cocina china.Cuando Mei Ling falleció, dejó un legado valioso a su familia: sus recetas secretas y el amor
                por la cocina
                china. Joar y Efrain sintieron que debían honrar su memoria compartiendo esos sabores con el mundo. Así que
                decidieron abrir un restaurante de comida china en su barrio.
            </p>
            <br>
            <p class="parrafo">
                El restaurante se llamó "China Town" en honor a su abuela Mei Ling. Durante meses, trabajaron arduamente
                para crear un menú que presentara las recetas de Mei Ling junto con su toque moderno. El restaurante se
                llenó de fragancias de jengibre, ajo y especias chinas auténticas.
            </p>
            <p class="parrafo">
                La noticia sobre el restaurante familiar se corrió rápidamente, y pronto China Town se convirtió en un lugar
                popular para los amantes de la comida china. La comida casera, preparada con recetas transmitidas de
                generación en generación, resonó en los corazones de los clientes.
            </p>
            <br>
            <p class="parrafo">
                Con el tiempo, China Town creció y se convirtió en un punto de referencia en la ciudad para la auténtica
                comida china.
            </p>
        </div>

    </section>
</template>

<style scoped>
.backTitle {
    position: relative;
    background-image: url('../assets/img/backTitle/BackHistoria.jpg');
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

.seccionHistoria {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}

.historia {
    width: 55%;
}

.contentImg {
    margin-bottom: 1.875rem;
}


.imgTia {
    width: 90%;
}

.titleImg{
    text-align: center;
    font-style: italic;
    font-weight: 300;
    font-size: .9375rem
}
</style>