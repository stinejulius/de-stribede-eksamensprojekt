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

  return {
    isMobile,
    isDesktop,
  };
}