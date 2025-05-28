<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})

const isOpened = ref(false)

function toggleDropdown() {
    isOpened.value = !isOpened.value; // ! - be the opposite of what you are
}
</script>

<template>
    <div class="desktop-dropdown">
        <div @click="toggleDropdown" class="nav-button" :class="{ 'open': isOpened }">
            {{ label }}

            <img v-if="isOpened" src="@/assets/illustrations/desktop-menu-dropdown-arrow-black.svg" alt="">
            <img v-else src="@/assets/illustrations/desktop-menu-dropdown-arrow-white.svg" alt="">
        </div>

        <div class="sub-menu" v-if="isOpened">
            <RouterLink class="sub-label" v-for="item in items" :to="item.to">
                {{ item.label }}
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.desktop-dropdown {
    position: relative;

    .nav-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 15px;
        gap: 10px;
        border-radius: 5px 5px 0 0;
        border-bottom: 2px solid $primary;

        text-decoration: none;
        user-select: none;

        // Text style
        font-family: $arsenal;
        font-size: 18px;
        font-weight: 700;
        line-height: 100%;
        color: $secondary;

        &.open {
            color: $quaternary;
            background-color: $secondary;
            border-bottom: unset;
        }

        img {
            width: 16px;
            height: 16px;
        }

    }

    .sub-menu {
        display: flex;
        flex-direction: column;

        background-color: rgba(249, 249, 249, 0.90);
        box-shadow: 2px 4px 4px 0px rgba(14, 13, 13, 0.25);
        border-radius: 0 0 5px 5px;

        width: 100%;
        position: absolute;
        z-index: 200;

        .sub-label {
            padding: 7px 15px;
            // Text style
            text-decoration: none;
            font-family: $arsenal;
            font-size: 16px;
            font-weight: 700;
            line-height: 100%;
            color: $primary;
        }
    }
}
</style>