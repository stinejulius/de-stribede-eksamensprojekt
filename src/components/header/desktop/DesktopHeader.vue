<script setup>
</script>

<template>
    <header>
        <div class="container navigation">
            <RouterLink class="logo">
                <img src="@/assets/illustrations/logo-only-main-text.svg" alt="">
            </RouterLink>

            <div class="navigation-pages">
                <RouterLink to="/" class="link-to-page">
                    <button>
                        Forside
                    </button>
                </RouterLink>

                <RouterLink to="/membership" class="link-to-page">
                    <button>
                        Bliv medlem
                    </button>
                </RouterLink>

                <RouterLink class="link-to-page">
                    <button>
                        Fanhjørnet
                        <img src="@/assets/illustrations/desktop-menu-dropdown-arrow-white.svg" alt="">
                    </button>
                </RouterLink>

                <RouterLink to="/webshop" class="link-to-page">
                    <button>
                        Webshop
                    </button>
                </RouterLink>

                <RouterLink class="link-to-page">
                    <button>
                        Om os
                        <img src="@/assets/illustrations/desktop-menu-dropdown-arrow-white.svg" alt="">
                    </button>
                </RouterLink>

                <RouterLink to="/responsible-gambling" class="link-to-page">
                    <button>
                        Ansvarligt spil
                    </button>
                </RouterLink>
            </div>

            <div class="navigation-icons">
                <RouterLink>
                    <img src="@/assets/illustrations/login-icon.svg" alt="">
                </RouterLink>

                <RouterLink>
                    <img src="@/assets/illustrations/shopping-basket-icon.svg" alt="">
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 76px;
    background-color: $header-bg;
}

.logo {
    position: absolute;
    top: 38px;
    left: 0;
    margin-left: 16px;

    img {
        width: 75px;
        height: 75px;
    }
}

.navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 1050px;
    gap: 50px;
}

.navigation-pages {
    display: flex;
    align-items: center;
    gap: 30px;
}

.link-to-page {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 15px;
    gap: 10px;
    cursor: pointer;

    button {
        all: unset;
        color: $secondary-text;
        font-weight: 700;
    }
}

.navigation-icons {
    display: flex;
    align-items: center;
    gap: 18px;

    img {
        width: 36px;
        aspect-ratio: 1/1;
    }
}
</style>