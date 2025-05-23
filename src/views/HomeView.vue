<script setup>
import { RouterLink } from 'vue-router'
import FootballLiveCountdown from '../components/FootballLiveCountdown.vue'
import NewsSection from '../components/NewsSection.vue'
import SponsorBanner from '../components/SponsorBanner.vue';
import { useBreakpoints } from '@/composables/breakpoints';

const { isMobile, isDesktop } = useBreakpoints();

</script>

<template>
  <main>
    <video loop muted autoplay playsinline poster="../assets/images/footballfans-kids-flags.webp" src=""></video>
    <div class="container">
      <div>
        <h1> DE STRIBEDE </h1>
        <h1 class="sub-title"> OB's OFFICIELLE FANKLUB </h1>
      </div>
      <h2 class="slogan"> Stemning der rækker længere end Fyn </h2>
    </div>

    <div class="container">
      <p>
        De Stribede er Odense Boldklubs officielle fanklub. Her mødes fans der holder af klubben og fællesskabet med
        hinanden. <br> <br>Hos De Stribede er alle velkommen og vi sætter en stor ære i at kunne repræsentere en stor og
        mangfoldig fanskare, hvor der er plads til forskellige tilgange til at nyde en god fodboldkamp. <br> <br>Fælles
        for det
        hele er støtten til vores alle sammens OB!
      </p>
    </div>

    <div class="container">
      <FootballLiveCountdown />
      <FootballLiveCountdown />
    </div>

    <div>
      <div class="container">

        <h2> Bliv en del af De Stribede i dag! </h2>

        <div>
          <div>
            <p>
              For kun 150kr om året kan du blive medlem af De Stribede, hvor du vil få adgang til en lang række fordele!
              <br>
              <br>Få adgang til socialt samvær i klubhuset på Nature Energy Park, hvor du kan købe øl og vand til
              specielle
              medlemspriser. Kom med på fælles busture til udebane kampe, med særlig medlemsrabat og meget mere!
            </p>
          </div>

          <div v-if="isDesktop">
            <img src="../assets/images/footballfans-kids-flags.webp" alt="">
            <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
          </div>
        </div>

        <RouterLink class to="/membership"> Bliv medlem </RouterLink>

      </div>
    </div>

    <div v-if="isMobile" class="container">
      <img src="../assets/images/footballfans-kids-flags.webp" alt="">
      <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
    </div>

    <div>
       <NewsSection />
    </div>

    <div>
      <div class="container">
        <h3> Tak til vores sponsorer </h3>
      </div>

      <SponsorBanner />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;
</style>