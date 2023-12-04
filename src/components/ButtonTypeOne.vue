<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['titulo', 'enlace'])

</script>

<template>
    <span class="spanButon">
        <RouterLink :to="props.enlace" class="hbtn hb-fill-middle-rev-bg hpill hpad2">
        <slot></slot>
        </RouterLink>
    </span>
</template>

<style scope>

.hbtn {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    padding: 9px 20px;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
    text-decoration: none;
    color: white;
    white-space: nowrap;
    z-index: 0;
    font-weight: 600;
}



.hb-fill-middle-rev-bg::before {
    position: absolute;
    content: "";
    background: var(--rojo);
    transition-duration: 0.2s;
    z-index: -1;
    inset: auto auto 0px 0px;
    width: 100%;
    height: 50%;
    opacity: 1;
}


.hb-fill-middle-rev-bg:hover::before {
    width: 100%;
    height: 0%;
    opacity: 1;
}


.hb-fill-middle-rev-bg:hover {
    background: white;
    color: black;
    transition: all 0.2s ease 0s;
}


.hb-fill-middle-rev-bg::after {
    position: absolute;
    content: "";
    background: var(--rojo);
    transition-duration: 0.2s;
    z-index: -1;
    inset: 0px auto auto 0px;
    width: 100%;
    height: 50%;
    opacity: 1;
}


.hb-fill-middle-rev-bg:hover::after {
    height: 0px;
}


.hpill {
    border-radius: 50px;
}

.spanButon{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    justify-items: center;
    align-content: center;
}
</style>