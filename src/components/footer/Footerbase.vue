<script setup>
</script>

<template>
    <footer>
        <div class="footer-top">
            <div class="container footer-top-inner">
                <div class="some-links">
                    <a href="https://www.facebook.com/odense1887" target="_blank" class="some-link">
                        <img loading="lazy" src="@/assets/illustrations/facebook-icon.svg" alt="Besøg De Stribedes Facebook fanside.">
                        <p> Fanside </p>
                    </a>

                    <a href="https://www.facebook.com/groups/256234254475573/" target="_blank" class="some-link">
                        <img loading="lazy" src="@/assets/illustrations/facebook-icon.svg" alt="Besøg De Stribedes Facebook gruppe.">
                        <p> Gruppe </p>
                    </a>

                    <a href="https://www.instagram.com/de_stribede/" target="_blank" class="some-link">
                        <img loading="lazy" src="@/assets/illustrations/instagram-icon.svg" alt="Besøg De Stribedes Instagram.">
                    </a>
                </div>

                <nav class="policy-terms-links">
                    <RouterLink to="/privacy-policy">
                        <p class="white-color"> Privatlivspolitik </p>
                    </RouterLink>

                    <RouterLink to="/terms-and-conditions">
                        <p class="white-color"> Handelsbetingelser </p>
                    </RouterLink>
                </nav>
            </div>
        </div>

        <div class="footer-bot">
            <p class="small white-color"> De Stribede © 2025 </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

footer {
    display: flex;
    flex-direction: column;
    width: 100%;

    .footer-top {
        display: flex;
        justify-content: center;
        background-color: $top-footer-bg;

        .footer-top-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 30px;
            padding-bottom: 30px;
            gap: 30px;

            .some-links {
                display: flex;
                align-items: flex-start;
                gap: 44px;

                .some-link {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3px;

                    img {
                        width: 44px;
                        height: 44px;
                    }

                    p {
                        font-size: 12px;
                        color: $top-footer-icon-text;
                    }
                }
            }

            .policy-terms-links {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }
        }
    }

    .footer-bot {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        background-color: $bot-footer-bg;
    }
}

a {
    all: unset;
    cursor: pointer;
}

// ==================== MEDIA QUERIES ====================
@media only screen and (min-width: 901px) {
    footer {
        .footer-top {
            .footer-top-inner {
                flex-direction: row-reverse;
                justify-content: space-between;
                height: 100px;

                .some-links {
                    gap: 22px;

                    .some-link {
                        img {
                            width: 30px;
                            height: 30px;
                        }
                    }
                }

                .policy-terms-links {
                    flex-direction: row;
                    gap: 75px;
                }
            }
        }
    }
}
</style>