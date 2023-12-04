<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['titulo', 'enlace'])

</script>
<template>
    <span>
        <RouterLink :to="props.enlace" class="hbtn hb-fill-right-bg hpill">{{ props.titulo }} </RouterLink>
    </span>
</template>

<style scoped>
.hbtn {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    padding: 11px 20px;
    margin: 0px 3px 6px;
    text-align: center;
    background: var(--amarillo-dorado);
    color: #333333;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    white-space: nowrap;
    z-index: 0;
}


.hbtn i {
    padding-right: 8px;
}


.hb-fill-right-bg::before {
    position: absolute;
    content: "";
    background:#665F4B;
    transition-duration: 0.3s;
    z-index: -1;
    inset: 0px auto auto 0px;
    width: 0px;
    height: 100%;
    opacity: 1;
}


.hb-fill-right-bg:hover::before {
    width: 100%;
    height: 100%;
    opacity: 1;
}


.hb-fill-right-bg:hover {
    color:white;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease 0s;
}


.hpill {
    border-radius: 50px;
}

.hpill {
    border-radius: 50px;
}






/**Aqui cambia color de texto inicial 
    padding: 11px 20px;
.hb-fill-middle2-bg {
    background: var(--amarillo-dorado);
    color: #333333;
    transition: all 0.3s ease 0s;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
}
*/
</style>