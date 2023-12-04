<!-- NotFound.vue -->
<template>
    <section class="contError404">
        <div class="contMensaje">
            <div>
                <h2 class="tituloError"> <strong>404</strong> - Página no encontrada </h2>
                <p> Lo sentimos, la página que estás buscando no existe.</p>
            </div>
        </div>
        
    </section>
</template>



<style scoped>
.contError404 {
    min-height: 50vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.contMensaje{
    text-align: center;
}

.tituloError{
    font-size: 50px;
}
</style>
