<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
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
    <article class="news-card">
        <img loading="lazy" :src="imgFile" :alt="imgAlt">

        <p class="bold news-headline">
            {{ headline }}
        </p>
        
        <RouterLink class="button-secondary bold" :to="buttonLink"> Læs nyhed </RouterLink>
    </article>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.news-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;

    border-radius: 5px;
    background-color: $secondary;

    img {
        max-width: 294px;
        width: 100%;
        border-radius: 5px;
    }

    .news-headline {
        max-width: 294px;
        width: 100%;
        text-align: center;
    }
}

// ==================== MEDIA QUERIES ====================
@media only screen and (min-width: 901px) {
    .news-card {
        max-width: 360px;
        border: 3px solid $primary;
        box-shadow: 2px 4px 4px 0 rgba(7, 84, 140, 0.25);

        img {
            max-width: 328px;
            max-width: 328px;
        }

        .news-headline {
            max-width: 328px;
            height: 37px;
        }
    }
}
</style>