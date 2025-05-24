<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps ({
    imgFile: {
        type: String,
        required: true,
    },
    imgAlt: {
        type: String,
        required: true,
    },
    headline: {
        type: String,
        required: true,
    },
    buttonLink: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div id="card">
        <img id="img" :src="imgFile" :alt="imgAlt">
        <p class="bold" id="news-headline">
            {{ headline }}
        </p>
        <RouterLink :to="buttonLink"> Læs nyhed </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

#card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;

    border-radius: 5px;
    background-color: $secondary;
}

#img {
    max-width: 294px;
    width: 100%;
    border-radius: 5px;
}

#news-headline {
    max-width: 294px;
    width: 100%;
    text-align: center;
}
</style>