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
    {
        src: AlbaniLogo,
        alt: 'Albani logo.'
    },
    {
        src: LøvbjergLogo,
        alt: 'Løvbjerg Tarup Center logo.'
    },
    {
        src: UnisportLogo,
        alt: 'Unisport logo.'
    },
    {
        src: CarlsJrLogo,
        alt: "Carl's Jr logo."
    },
    {
        src: OkLogo,
        alt: 'OK logo.'
    },
    {
        src: EnergiFynLogo,
        alt: 'Fynsk Support EnergiFyn logo.'
    },
    {
        src: OdenseBowlinghalLogo,
        alt: 'Odense Bowlinghal & Simgolf logo.'
    },
    {
        src: ShayInksLogo,
        alt: 'Shay Inks logo.'
    },
];
</script>

<template>
    <div class="sponsor-banner-container">
        <div class="sponsor-banner">
            <img v-for="image in images" loading="lazy" :src="image.src" class="sponsor-img" :alt="image.alt" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.sponsor-banner-container {
    display: flex;
    align-items: center;
    overflow: hidden;

    .sponsor-banner {
        display: flex;
        align-items: center;
        gap: 40px;
        padding: 5px 20px;
        max-width: 100vw;
    }

    .sponsor-img {
        width: 100px;
    }
}
</style>