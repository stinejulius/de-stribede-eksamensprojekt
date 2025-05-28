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
});
</script>

<template>
    <RouterLink active-class="active" class="nav-menu" :to="to">
        {{ label }}
    </RouterLink>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

.nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 15px;
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

    &:hover, &.active {
        border-bottom: 2px solid $tertiary;
    }
}
</style>