<script setup>
</script>

<template>
    <div id="card">
        <img id="img" src="../assets/images/away-ob-vs-kolding.webp" alt="">
        <p class="bold" id="news-headline">
            Kom med på sæsonens sidste udebanetur
        </p>
        <!-- Link til bestemt nyhedsartikelside -->
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

#card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;

    border-radius: 5px;
    background-color: $secondary;
}

#img {
    max-width: 294px;
    width: 100%;
    border-radius: 5px;
}

#news-headline {
    max-width: 294px;
    width: 100%;
    text-align: center;
}
</style>