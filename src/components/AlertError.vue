<script setup>
const props = defineProps(['activo','mensaje'])
</script>

<template>
    
    <transition name="slide-fade">
        <v-alert v-if="props.activo" class="alert"
        closable title="Sucedio algo inesperado" :text="props.mensaje" type="error" variant="tonal"></v-alert>
    </transition>
</template>

<style scoped>
.alert {
    position: fixed;
    bottom: 40px;
    right: 0;
    z-index: 1000;
    width: 30%;
    height: 100px;
    background-color: rgb(207, 38, 38);
    color:white !important;
}




.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>