<script setup>
</script>

<template>
    <div id="mobile-header-container">
        <div class="container mobile-header">
            <RouterLink to="/">
                <img src="../assets/illustrations/logo-only-main-text.svg" alt="">
            </RouterLink>

            <div class="hamburger-menu-wrapper">
                <button type="button" popovertarget="menu-popover" aria-label="Open menu">
                    <img src="../assets/illustrations/mobile-menu-icon.svg" alt="">
                </button>

                <div id="menu-popover" popover class="menu-popover-content">
                    <h1>hi!</h1>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

#mobile-header-container {
    display: flex;
    justify-content: center;
    background-color: $header-bg;
}

.mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;

    a > img {
        max-height: 45px;
        height: 100%;
    }
}

.hamburger-menu-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
        all: unset;
        cursor: pointer;

        img {
            max-height: 45px;
            height: 100%;
        }
    }
}

.menu-popover-content {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    background-color: #f8f8f8;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    z-index: 99; // Below the button

    &:not(:popover-open) {
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%); // Start off-screen
        transition: transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out;
    }

    &[popover]:popover-open {
        visibility: visible;
        opacity: 1;
        transform: translateX(0); // Slide in
    }
}
</style>