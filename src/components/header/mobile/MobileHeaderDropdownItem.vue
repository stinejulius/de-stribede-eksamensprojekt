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
    <div>
        <div class="menu-button" :class="{'open': isOpened}">
            <button @click="toggleDropdown">
                {{ label }}

                <img src="@/assets/illustrations/mobile-menu-dropdown-arrow.svg" alt="">
            </button>
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

.menu-button {
    all: unset;
    display: flex;
    padding: 16px;
    cursor: pointer;
    max-height: 50px;
    height: 100%;


    border-radius: 5px;
    background-color: $header-bg;

    &.open {
        border-radius: 5px 5px 0 0;
    }
}

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

.sub-menu {
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 3px solid $primary;
    border-top: 0;
    background-color: $tertiary;
}

.sub-label {
    display: flex;
    text-decoration: none;
    padding: 16px 16px 16px 32px;

    // Text style
    font-family: $arsenal;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;
    color: $primary;
}
</style>