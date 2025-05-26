<script setup>
import MobileHeader from './mobile/MobileHeader.vue'
import DesktopHeader from './desktop/DesktopHeader.vue'
import { useBreakpoints } from '@/composables/breakpoints';

const { isMobile, isDesktop } = useBreakpoints();
</script>

<template>
    <MobileHeader v-if="isMobile" />
    <DesktopHeader v-if="isDesktop" />
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;
</style>