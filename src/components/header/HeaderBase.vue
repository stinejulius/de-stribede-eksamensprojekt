<script setup>
import MobileHeader from './mobile/MobileHeader.vue'
import DesktopHeader from './desktop/DesktopHeader.vue'
import { useBreakpoints } from '@/composables/breakpoints';

const { isWidthGreaterThanOrEqual, isMobile } = useBreakpoints();

const desktopHeaderBreakpoint = 1050;

const showDesktopHeader = isWidthGreaterThanOrEqual(desktopHeaderBreakpoint);
</script>

<template>

    <DesktopHeader v-if="showDesktopHeader" />    
    <MobileHeader v-else />
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;
</style>