<script setup>
import newsOne from '../assets/images/away-ob-vs-kolding.webp'
import newsTwo from '../assets/images/fans-banners-platform.webp'
import newsThree from '../assets/images/stadium-game-from-platform.webp'

import NewsCarousel from '../components/NewsCarousel.vue'
import NewsCard from '../components/NewsCard.vue'
import { useBreakpoints } from '@/composables/breakpoints';

const { isMobile, isDesktop } = useBreakpoints();

const newsArticles = [
    {
        imgFile: newsOne,
        imgAlt: 'x',
        headline: 'Kom med på sæsonens sidste udebanetur',
        buttonLink: '/news/kom-med-på-saesonens-sidste-udebanetur',
    },
    {
        imgFile: newsTwo,
        imgAlt: 'x',
        headline: 'Fodboldfestival på Flakhaven!',
        buttonLink: '/news/fodboldfestival-på-flakhaven',
    },
    {
        imgFile: newsThree,
        imgAlt: 'x',
        headline: 'OB er tilbage i Superligaen!',
        buttonLink: '/news/ob-er-tilbage-i-superligaen',
    },
]
</script>

<template>
    <section id="card">
        <h2 class="white-color"> Nyheder </h2>

        <div v-if="isMobile" id="news-slider-section">
            <NewsCarousel>
                <NewsCard v-for="newsArticle in newsArticles" :img-file="newsArticle.imgFile"
                    :img-alt="newsArticle.imgAlt" :headline="newsArticle.headline"
                    :button-link="newsArticle.buttonLink" />
            </NewsCarousel>
        </div>

        <div v-if="isDesktop">
            <NewsCard v-for="newsArticle in newsArticles" :img-file="newsArticle.imgFile" :img-alt="newsArticle.imgAlt"
                :headline="newsArticle.headline" :button-link="newsArticle.buttonLink" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

#news-slider-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
}

section#card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;

    border-radius: 10px;
    background-color: $primary;
}
</style>