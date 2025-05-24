<script setup>
import HorizontalMarquee from '../components/HorizontalMarquee.vue'
</script>

<template>

    <HorizontalMarquee>
        <img class="sponsor-img" src="../assets/images/logo-albani.png" alt="">
        <img class="sponsor-img" src="../assets/images/logo-løvbjerg.png" alt="">
        <img class="sponsor-img" src="../assets/images/logo-unisport.png" alt="">
        <img class="sponsor-img" src="../assets/images/logo-carls-jr.png" alt="">
        <img class="sponsor-img" src="../assets/images/logo-ok.png" alt="">
        <img class="sponsor-img" src="../assets/images/logo-energi-fyn.png" alt="">
        <img class="sponsor-img" src="../assets/images/logo-odense-bowlinghal.png" alt="">
        <img class="sponsor-img" src="../assets/images/logo-shay-inks.png" alt="">
    </HorizontalMarquee>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.sponsor-banner {
    display: flex;
    align-items: center;
    padding: 5px 20px;
    gap: 40px;
}

.sponsor-img {
    width: 100px;
}
</style>