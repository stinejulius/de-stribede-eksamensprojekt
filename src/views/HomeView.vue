<script setup>
import { RouterLink } from 'vue-router'
import FootballLiveCountdown from '@/components/FootballLiveCountdown.vue'
import NewsSection from '@/components/news/NewsSection.vue';
import SponsorBanner from '@/components/SponsorBanner.vue';
import { useBreakpoints } from '@/composables/breakpoints';

const { isMobile, isDesktop } = useBreakpoints();

</script>

<template>
  <main>
    <section class="hero-section">
      <video class="hero-section-video" loop muted autoplay playsinline
        poster="@/assets/images/footballfans-kids-flags.webp" src=""></video>
      <div class="container hero-section-header">
        <div class="hero-section-title-group">
          <h1> DE STRIBEDE </h1>
          <h1 class="sub-title"> OB's OFFICIELLE FANKLUB </h1>
        </div>
        <h2 class="slogan"> Stemning der rækker længere end Fyn </h2>
      </div>
    </section>

    <section class="container">
      <p>
        De Stribede er Odense Boldklubs officielle fanklub. Her mødes fans der holder af klubben og fællesskabet med
        hinanden. <br> <br>Hos De Stribede er alle velkommen og vi sætter en stor ære i at kunne repræsentere en stor og
        mangfoldig fanskare, hvor der er plads til forskellige tilgange til at nyde en god fodboldkamp. <br> <br>Fælles
        for det
        hele er støtten til vores alle sammens OB!
      </p>
    </section>

    <section class="container countdown-section">
      <FootballLiveCountdown :gender="'Herre'" :league="120" :season="2024" :team="405" />
      <FootballLiveCountdown :gender="'Kvinde'" :league="638" :season="2024" :team="13984" />
    </section>

    <section class="membership-section">
      <div class="container membership-section-inner">
        <h2> Bliv en del af De Stribede i dag! </h2>

        <div class="membership-section-details">
          <div class="membership-section-text-content">
            <p>
              For kun 150kr om året kan du blive medlem af De Stribede, hvor du vil få adgang til en lang række fordele!
              <br>
              <br>Få adgang til socialt samvær i klubhuset på Nature Energy Park, hvor du kan købe øl og vand til
              specielle
              medlemspriser. Kom med på fælles busture til udebane kampe, med særlig medlemsrabat og meget mere!
            </p>
          </div>

          <div v-if="isDesktop" class="fan-showcase">
            <img src="@/assets/images/footballfans-kids-flags.webp" alt="">
            <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
          </div>
        </div>

        <RouterLink class="button-primary bold" to="/membership"> Bliv medlem </RouterLink>
      </div>
    </section>

    <div v-if="isMobile" class="container fan-showcase">
      <img src="@/assets/images/footballfans-kids-flags.webp" alt="">
      <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
    </div>

    <section class="container">
      <NewsSection />
    </section>

    <section>
      <div class="container sponsor-section">
        <h3> Tak til vores sponsorer </h3>
      </div>

      <SponsorBanner />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  background-color: $page-bg;

  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .hero-section-video {
      max-height: 200px;
      height: 100%;
    }

    .hero-section-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      gap: 30px;

      .hero-section-title-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
    }
  }

  .countdown-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .membership-section {
    width: 100%;
    padding: 30px 0;
    background-color: $tertiary;

    .membership-section-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      h2 {
        text-align: center;
      }
    }
  }

  .fan-showcase {
    display: flex;
    flex-direction: column;
    gap: 5px;

    img {
      border-radius: 5px;
    }
  }

  .sponsor-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>