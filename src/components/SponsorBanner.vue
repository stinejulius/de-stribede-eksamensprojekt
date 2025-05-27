<script setup>
import AlbaniLogo from '@/assets/images/logo-albani.png';
import LøvbjergLogo from '@/assets/images/logo-løvbjerg.png';
import UnisportLogo from '@/assets/images/logo-unisport.png';
import CarlsJrLogo from '@/assets/images/logo-carls-jr.png';
import OkLogo from '@/assets/images/logo-ok.png';
import EnergiFynLogo from '@/assets/images/logo-energi-fyn.png';
import OdenseBowlinghalLogo from '@/assets/images/logo-odense-bowlinghal.png';
import ShayInksLogo from '@/assets/images/logo-shay-inks.png';

const images = [
    AlbaniLogo,
    LøvbjergLogo,
    UnisportLogo,
    CarlsJrLogo,
    OkLogo,
    EnergiFynLogo,
    OdenseBowlinghalLogo,
    ShayInksLogo
];
</script>

<template>
    <div class="sponsor-banner">
        <img v-for="image in images" :key="image" loading="lazy" :src="image" class="sponsor-img" alt="Sponsor Logo" />
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.sponsor-banner {
    display: flex;
    align-items: center;
    padding: 5px 20px;
    gap: 40px;

    .sponsor-img {
        width: 100px;
    }
}
</style>