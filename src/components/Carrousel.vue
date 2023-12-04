<script setup>
import { reactive } from 'vue';

const items = reactive([
    {
        comment: "Increíble experiencia en este lugar, con un ambiente acogedor, un servicio impecable y una comida deliciosa. Sin duda, altamente recomendable.",
        author: "Elena Martínez",
    },
    {
        comment: "El servicio y la comida son de una calidad excepcional. Una verdadera joya culinaria.",
        author: "Reyna Chimal",
    },
    {
        comment: "No tengo palabras para describir lo asombrosa que fue mi experiencia. ¡Definitivamente regresaré pronto!",
        author: "Sofía López",
    },
    {
        comment: "Cuatro elogios resaltando la excelencia del lugar y el servicio ofrecido. Una visita obligada.",
        author: "Javier Fernández",
    },
    {
        comment: "Mi quinto comentario elogiando las maravillas de este lugar y la atención excepcional que recibí. ¡Simplemente encantador!",
        author: "Isabel Ramírez",
    },
]);


</script>

<template>
    <v-carousel :show-arrows="false" style="max-height: 365px; max-width: 830px; margin: auto;">
        <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-card class="comment-card" style="width: 830px; height: 365px;">
                <v-card-text class="comment-text">
                    <div class="comment-content">
                        {{ item.comment }}
                        <br>
                        <strong class="comment-author">{{ item.author }}</strong>
                        <div class="comment-rating">
                            <img src="../assets/img/estrella.png" alt="Clientes" class="comment-rating-img">
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-carousel-item>
    </v-carousel>
</template>

<style scoped>
.comment-card {
    width: 650px;
    height: 650px;
    margin: auto;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.comment-text {
    font-size: 16px;
    line-height: 1.6;
    color: #000;
    text-align: center;
}

.comment-content {
    text-align: center;
    font-size: 20px;
}

.comment-author {
    color: #000;
    display: block;
}

.comment-rating {
    margin-top: 10px;
    text-align: center;
}

.comment-rating-img {
    width: 300px;
}
</style>