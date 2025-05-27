import { ref, onMounted, onUnmounted, computed } from 'vue';

export function useBreakpoints() {
  const currentWindowWidth = ref(window.innerWidth);
  const mobileBreakpoint = 900;

  const updateWidth = () => {
    currentWindowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });

  // Computed Booleans - Will update when currentWindowWidth updates.
  const isMobile = computed(() => currentWindowWidth.value <= mobileBreakpoint);
  const isDesktop = computed(() => currentWindowWidth.value > mobileBreakpoint);

  // New functionality - create custom breakpoint
  const isWidthGreaterThanOrEqual = (threshold) => {
    if (typeof threshold !== 'number') {
      return ref(false); // fallback
    }
    return computed(() => currentWindowWidth.value >= threshold);
  };

  return {
    isMobile,
    isDesktop,
    isWidthGreaterThanOrEqual,
  };
}