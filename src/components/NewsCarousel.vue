<script setup>
import { ref, onMounted, useTemplateRef } from 'vue';

const carouselRef = useTemplateRef('carousel');
const activeIndex = ref(0);

const itemCount = ref(3);

const handleScroll = () => {
    if (!carouselRef.value) return;

    const scrollLeft = carouselRef.value.scrollLeft;
    const itemWidth = carouselRef.value.clientWidth; // might have to change this according to the newscard widths

    // Determie the active item based on scroll position
    activeIndex.value = Math.round(scrollLeft / itemWidth);
};

const goToItem = (index) => {
    if (!carouselRef.value) return;

    const itemWidth = carouselRef.value.clientWidth;
    carouselRef.value.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
    });
};

onMounted(() => {
    // Initial scroll position to set the active index correctly
    handleScroll();
});
</script>

<template>
    <div class="carousel-container">
        <div class="carousel" ref="carousel" @scroll="handleScroll">
            <div class="carousel-items">
                <slot></slot>
            </div>
        </div>
        <div class="carousel-navigation">
            <div v-for="(_, index) in itemCount" :key="index">
                <img v-if="activeIndex === index" @click="goToItem(index)" class="dot-indicator"
                    src="../assets/illustrations/active-indicator-dot.svg" alt="">
                <img v-else @click="goToItem(index)" class="dot-indicator"
                    src="../assets/illustrations/indicator-dot.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden; // Ensures items don't overflow container if not perfectly sized
}

.carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;

    // Hide scroll bar
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;

    /* IE and Edge */
    &::-webkit-scrollbar {
        display: none;
        /* Chrome, Safari, Opera */
    }

    .carousel-items {
        display: flex;
        width: 100%;
        gap: 16px;

        // Each direct child of carousel-items will be a snap point
        >* {
            flex-shrink: 0;
            width: 100%;
            scroll-snap-align: start;
            cursor: grab;

            &:active {
                cursor: grabbing;
            }
        }
    }
}

.carousel-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 15px;

    .dot-indicator {
        max-width: 16px;
        width: 100%;
    }
}
</style>