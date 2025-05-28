<script setup>
import newsOne from '@/assets/images/away-ob-vs-kolding.webp'
import newsTwo from '@/assets/images/fans-banners-platform.webp'
import newsThree from '@/assets/images/stadium-game-from-platform.webp'

import NewsCarousel from './NewsCarousel.vue'
import NewsCard from './NewsCard.vue'
import { useBreakpoints } from '@/composables/breakpoints';

const { isMobile, isDesktop } = useBreakpoints();

const newsArticles = [
    {
        imgFile: newsOne,
        imgAlt: 'Nyhed om away bustur inklusiv billet til kampen med De Stribede lørdag den 17 maj. Kampen er Kolding IF mod OB.',
        headline: 'Kom med på sæsonens sidste udebanetur',
        buttonLink: '/news/kom-med-på-saesonens-sidste-udebanetur',
    },
    {
        imgFile: newsTwo,
        imgAlt: 'En tribune farvet blåd og hvid af OB-fans som alle holder hvert deres halstørklæde op hvor der står "Blok B Odense".',
        headline: 'Fodboldfestival på Flakhaven!',
        buttonLink: '/news/fodboldfestival-på-flakhaven',
    },
    {
        imgFile: newsThree,
        imgAlt: 'Udsigt fra RMN tribunen på Nature Energy Park. Spillerne er på banen og tribunerne er fyldt op med fodboldfans.',
        headline: 'OB er tilbage i Superligaen!',
        buttonLink: '/news/ob-er-tilbage-i-superligaen',
    },
];
</script>

<template>
    <section>
        <h2 :class="{'white-color': isMobile}"> Nyheder </h2>

        <div v-if="isMobile" class="news-slider">
            <NewsCarousel>
                <NewsCard v-for="newsArticle in newsArticles" :img-file="newsArticle.imgFile"
                    :img-alt="newsArticle.imgAlt" :headline="newsArticle.headline"
                    :button-link="newsArticle.buttonLink" />
            </NewsCarousel>
        </div>

        <div v-if="isDesktop" class="news-cards-box-desktop">
            <NewsCard v-for="newsArticle in newsArticles" :img-file="newsArticle.imgFile" :img-alt="newsArticle.imgAlt"
                :headline="newsArticle.headline" :button-link="newsArticle.buttonLink" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    gap: 16px;

    border-radius: 10px;
    background-color: $primary;

    .news-slider {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 100%;
        padding: 16px;
    }
}

// ==================== MEDIA QUERIES ====================
@media only screen and (min-width: 901px) {
    section {
        gap: 48px;
        border-radius: unset;
        background-color: unset;

        .news-cards-box-desktop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            width: 100%;
        }
    }
}
</style>