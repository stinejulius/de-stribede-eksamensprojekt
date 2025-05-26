<script setup>
import { RouterView } from 'vue-router'
import HeaderBase from '../src/components/HeaderBase.vue'
import FooterBase from '../src/components/Footerbase.vue'
</script>

<template>
  <HeaderBase />
  <RouterView />
  <FooterBase />
</template>

<style lang="scss" scoped>

</style>
