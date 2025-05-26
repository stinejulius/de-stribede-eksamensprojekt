<script setup>
import { RouterView } from 'vue-router'
import HeaderBase from '@/components/header/HeaderBase.vue'
import FooterBase from '@/components/footer/Footerbase.vue'
</script>

<template>
  <HeaderBase />
  <main id="main">
    <RouterView />
  </main>
  <FooterBase />
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

main.glass-morphism {
  // Glassmorphism
  filter: blur(3px);
}
</style>
