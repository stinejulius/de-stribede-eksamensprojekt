<!-- All code in this file is borrowed from the internet :) -->
<!-- Ps. the code won't work like i want it too :( -->
<template>
  <div class="marquee-container" :style="{ '--marquee-duration': '12s' }">
    <div class="marquee-content">
      <slot>{{ text }}</slot>
    </div>
    <div class="marquee-content" aria-hidden="true">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps(), {
  text: 'Your default scrolling text goes here!', // Default text if no slot is provided
  duration: 12,
});
</script>

<style lang="scss" scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  box-sizing: border-box;

  &:hover .marquee-content {
    animation-play-state: paused; // Optional: pause on hover
  }
}

.marquee-content {
  display: inline-block;
  padding-right: 2em; // Space between the repeated content
  animation: marquee var(--marquee-duration) linear infinite;
  will-change: transform; // Optimize for animation performance
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>