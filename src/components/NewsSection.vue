<script setup>
import NewsSectionSlider from '../components/NewsSectionSlider.vue'
</script>

<template>
    <div id="card">
        <h2 class="white-color"> Nyheder </h2>
        <NewsSectionSlider />
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

    border-radius: 10px;
    background-color: $primary;
}
</style>