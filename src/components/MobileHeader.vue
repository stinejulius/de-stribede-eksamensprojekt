<script setup>
</script>

<template>
    <header id="mobile-header-container">
        <div class="container mobile-header">
            <RouterLink to="/">
                <img src="../assets/illustrations/logo-only-main-text.svg" alt="">
            </RouterLink>

            <div class="hamburger-menu-wrapper">
                <button type="button" popovertarget="menu-popover" aria-label="Open menu">
                    <img src="../assets/illustrations/mobile-menu-icon.svg" alt="">
                </button>

                <div id="menu-popover" popover class="menu-popover-content">
                    <RouterLink class="menu-button" to="/">
                        <button> Forside </button>
                    </RouterLink>

                    <RouterLink class="menu-button" to="/membership">
                        <button> Bliv medlem </button>
                    </RouterLink>

                    <RouterLink class="menu-button">
                        <button>
                            Fanhjørnet
                            <img src="../assets/illustrations/mobile-menu-dropdown-arrow.svg" alt="">
                        </button>
                    </RouterLink>

                    <RouterLink class="menu-button" to="/webshop">
                        <button> Webshop </button>
                    </RouterLink>

                    <RouterLink class="menu-button">
                        <button>
                            Om os
                            <img src="../assets/illustrations/mobile-menu-dropdown-arrow.svg" alt="">
                        </button>
                    </RouterLink>

                    <RouterLink class="menu-button" to="/responsible-gambling">
                        <button> Ansvarligt spil </button>
                    </RouterLink>

                    <RouterLink class="menu-button">
                        <button>
                            Login
                            <img src="../assets/illustrations/login-icon.svg" alt="">
                        </button>
                    </RouterLink>

                    <RouterLink class="menu-button">
                        <button>
                            Kurv
                            <img src="../assets/illustrations/shopping-basket-icon.svg" alt="">
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>

    </header>
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

    a>img {
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
        all: unset; // Removes default link style
        cursor: pointer;

        img {
            max-width: 60px;
            width: 100%;
        }
    }
}

.menu-popover-content {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 16px;
    gap: 10px;

    position: fixed;
    top: -89px;
    right: -89.5px;
    z-index: 99; // Below the button

    border-radius: 0 0 0 10px;
    border-bottom: 3px solid $primary;
    border-left: 3px solid $primary;
    border-top: 0;
    border-right: 0;
    background-color: $secondary;

    .menu-button {
        all: unset;
        display: flex;
        padding: 16px;
        cursor: pointer;
        max-height: 50px;
        height: 100%;


        border-radius: 5px;
        background-color: $header-bg;
    }

    a>button {
        // Text style
        font-family: $arsenal;
        font-size: 18px;
        font-weight: 700;
        line-height: 100%;
        color: $secondary-text;

        // Content layout
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        img {
            max-width: 18px;
        }
    }

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

::backdrop {
    // Glassmorphism
    backdrop-filter: blur(3px);
    background: rgba(255, 255, 255, 0.11);
}
</style>