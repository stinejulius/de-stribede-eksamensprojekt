<script setup>
import DesktopHeaderItem from './DesktopHeaderItem.vue'
import DesktopHeaderDropdownItem from './DesktopHeaderDropdownItem.vue'
</script>

<template>
    <header>
        <div class="container navigation">
            <RouterLink class="logo" to="/">
                <img src="@/assets/illustrations/logo-only-main-text.svg" alt="De Stribede forside.">
            </RouterLink>

            <div></div>

            <div class="navigation-pages">
                <DesktopHeaderItem label="Forside" to="/"/>

                <DesktopHeaderItem label="Bliv medlem" to="/membership"/>

                <DesktopHeaderDropdownItem label="Fanhjørnet" :items="[
                    { label: 'Busture', to: '/busrides' },
                    { label: 'Nyheder', to: '/news' },
                    { label: 'Sangbog', to: '/songbook' }
                ]" />
            
                <DesktopHeaderItem label="Webshop" to="/webshop"/>

                <DesktopHeaderDropdownItem label="Om os" :items="[
                    { label: 'Om os', to: '/about' },
                    { label: 'Sponsorer', to: '/sponsors' },
                    { label: 'Vedtægter', to: '/statutes' },
                    { label: 'TIFO Odense', to: '/tifo-odense' },
                    { label: 'Fanmap', to: '/fanmap' },
                ]" />

                <DesktopHeaderItem label="Ansvarligt spil" to="/responsible-gambling"/>
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

    .navigation {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 1050px;
        width: 100%;

        .logo {
            position: absolute;
            top: 20px;
            left: 0;
            margin-left: 16px;
            z-index: 120;

            img {
                width: 75px;
                height: 75px;
            }
        }

        .navigation-pages {
            display: flex;
            align-items: center;
            gap: 30px;
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
    }
}
</style>