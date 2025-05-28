import { ref, onMounted, onUnmounted, computed } from 'vue';

/**
 * Vue Composable, that handles breakpoints in Javascript
 * Used to v-if elements based on screensize.
 * 
 * @returns Object
 */
export function useBreakpoints() {
  // ref to store current window width, is updated by updateWidth()
  const currentWindowWidth = ref(window.innerWidth);
  const mobileBreakpoint = 900;

  /**
   * Updates currentWindowWidth with the width of the screen
   */
  const updateWidth = () => {
    currentWindowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    // ADD EventListener, that listens for resize (of screen)
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    // REMOVE EventListener, that listens for resize (of screen)
    window.removeEventListener('resize', updateWidth);
  });

  // Computed Booleans - Will update when currentWindowWidth updates
  const isMobile = computed(() => currentWindowWidth.value <= mobileBreakpoint);
  const isDesktop = computed(() => currentWindowWidth.value > mobileBreakpoint);

  /**
   * Reusable function, with custom breakpoint
   * 
   * @param {Number} threshold Amount of pixels
   * @returns computedRef
   */
  const isWidthGreaterThanOrEqual = (threshold) => {
    // Returns a computed value, that tells if screen size is above or equal to threshold
    return computed(() => currentWindowWidth.value >= threshold);
  };

  return {
    isMobile,
    isDesktop,
    isWidthGreaterThanOrEqual,
  };
}