<script setup>
import { ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';
import MobileHeaderDropdownItem from './MobileHeaderDropdownItem.vue';
import MobileHeaderItem from './MobileHeaderItem.vue';

// Icons
import LoginIcon from '@/assets/illustrations/login-icon.svg';
import ShoppingBasketIcon from '@/assets/illustrations/shopping-basket-icon.svg';

// Global variables
const header = useTemplateRef('header'); // find 'header' in template, store it in variable
const isOpened = ref(false);

/**
 * Toggles the menu, depending on isOpened
 * Adds glass-morphism to main in App.vue
 * Adds event listener, to handle clicks outside
 */
function ToggleMenu() {
    isOpened.value = !isOpened.value; // ! - be the opposite of what you are

    const main = document.getElementById('main');

    if (isOpened.value === true) {
        document.addEventListener('click', HandleClickOutside);
        main.classList.add('glass-morphism');
    } else {
        document.removeEventListener('click', HandleClickOutside);
        main.classList.remove('glass-morphism');
    }
}

/**
 * Handles Clicks Outside the menu
 * TogglesMenu if click was outside of the menu
 * 
 * @param event 
 */
function HandleClickOutside(event) {
    // Check if the click is outside the header
    if (header.value.contains(event.target) === false) {
        ToggleMenu(); // Close the menu
    }
}

// Vue Router
const router = useRouter();

// After each navigation, close the menu
router.afterEach(() => {
    if (isOpened.value) {
        ToggleMenu(); // Close the menu on navigation
    }
});
</script>

<template>
    <header ref="header">
        <div class="container header-box">
            <RouterLink to="/">
                <img src="@/assets/illustrations/logo-only-main-text.svg" alt="De Stribede forside.">
            </RouterLink>

            <!-- Button to open menu-->
            <button @click="ToggleMenu()" class="hamburger-button" type="button" aria-label="Open menu">
                <img src="@/assets/illustrations/mobile-menu-icon.svg" alt="Menu knap.">
            </button>

            <!-- Hidden menu, that opens on click -->
            <nav v-if="isOpened" class="menu-popover-content">
                <MobileHeaderItem label="Forside" to="/" />

                <MobileHeaderItem label="Bliv medlem" to="/membership" />

                <MobileHeaderDropdownItem label="Fanhjørnet" :items="[
                    { label: 'Busture', to: '/busrides' },
                    { label: 'Nyheder', to: '/news' },
                    { label: 'Sangbog', to: '/songbook' }
                ]" />

                <MobileHeaderItem label="Webshop" to="/webshop" />

                <MobileHeaderDropdownItem label="Om os" :items="[
                    { label: 'Om os', to: '/about' },
                    { label: 'Sponsorer', to: '/sponsors' },
                    { label: 'Vedtægter', to: '/statutes' },
                    { label: 'TIFO Odense', to: '/tifo-odense' },
                    { label: 'Fanmap', to: '/fanmap' },
                ]" />

                <MobileHeaderItem label="Ansvarligt spil" to="/responsible-gambling" />

                <MobileHeaderItem label="Login" to="/login" :icon="LoginIcon" :icon-alt="'Login knap.'" />

                <MobileHeaderItem label="Kurv" to="/basket" :icon="ShoppingBasketIcon" :icon-alt="'Kurv knap.'" />
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

header {
    display: flex;
    justify-content: center;
    background-color: $header-bg;

    .header-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;

        a>img {
            max-height: 45px;
            height: 100%;
        }

        button.hamburger-button {
            all: unset; // Removes default link style
            cursor: pointer;
            margin-left: auto;

            img {
                max-width: 60px;
                width: 100%;
            }
        }

        .menu-popover-content {
            display: flex;
            flex-direction: column;
            width: 300px;
            padding: 16px;
            gap: 10px;

            position: absolute;
            top: 60px;
            right: 0;
            z-index: 100;

            border-radius: 0 0 0 10px;
            border-bottom: 3px solid $primary;
            border-left: 3px solid $primary;
            border-top: 0;
            border-right: 0;
            background-color: $secondary;
        }
    }
}
</style>