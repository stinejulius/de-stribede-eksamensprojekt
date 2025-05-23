<script setup>
import NewsCard from '../components/NewsCard.vue'
</script>

<template>
    <div id="news-slider-section">
        <NewsCard />
        <div id="dot-indicators">
            <img class="dot-indicator" src="../assets/illustrations/active-indicator-dot.svg" alt="">
            <img class="dot-indicator" src="../assets/illustrations/indicator-dot.svg" alt="">
            <img class="dot-indicator" src="../assets/illustrations/indicator-dot.svg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

#news-slider-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

#dot-indicators {
    display: flex;
    align-items: center;
    gap: 16px;
}

#dot-indicator {
    max-width: 16px;
    width: 100%;
}
</style>