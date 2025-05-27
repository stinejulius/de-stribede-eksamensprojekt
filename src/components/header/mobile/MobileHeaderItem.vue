<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    to: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ''
    },
    iconAlt: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <RouterLink class="menu-button" :to="to">
        <button>
            {{ label }}

            <img v-if="icon" :src="icon" :alt="iconAlt" />
        </button>
    </RouterLink>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.menu-button {
    all: unset;
    display: flex;
    padding: 16px;
    cursor: pointer;
    max-height: 50px;
    height: 100%;

    border-radius: 5px;
    background-color: $header-bg;

    button {
        all: unset;
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
}
</style>