<script setup>
import { RouterLink } from 'vue-router'
import FootballLiveCountdown from '../components/FootballLiveCountdown.vue'
import NewsSection from '../components/NewsSection.vue'
import SponsorBanner from '../components/SponsorBanner.vue';
import { useBreakpoints } from '@/composables/breakpoints';

const { isMobile, isDesktop } = useBreakpoints();

</script>

<template>
  <main id="content">
    <div id="content-introduction">
      <video id="hero-video" loop muted autoplay playsinline poster="../assets/images/footballfans-kids-flags.webp" src=""></video>
      <div class="container" id="headline-titles">
        <div id="h1" >
          <h1> DE STRIBEDE </h1>
          <h1 class="sub-title"> OB's OFFICIELLE FANKLUB </h1>
        </div>
        <h2 class="slogan"> Stemning der rækker længere end Fyn </h2>
      </div>
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

    <div class="container" id="content-countdowns">
      <FootballLiveCountdown :gender="'Herre'" :league="120" :season="2024" :team="405" />
      <FootballLiveCountdown :gender="'Kvinder'" :league="638" :season="2024" :team="13984" />
    </div>

    <div id="content-become-a-member">
      <div class="container" id="content-become-a-member-inner">

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

          <div v-if="isDesktop" class="fans-box">
            <img class="fans-box-img" src="../assets/images/footballfans-kids-flags.webp" alt="">
            <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
          </div>
        </div>

        <RouterLink class to="/membership"> Bliv medlem </RouterLink>

      </div>
    </div>

    <div v-if="isMobile" class="container fans-box">
      <img class="fans-box-img" src="../assets/images/footballfans-kids-flags.webp" alt="">
      <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
    </div>

    <div class="container">
      <NewsSection />
    </div>

    <div>
      <div class="container" id="sponsor-box">
        <h3> Tak til vores sponsorer </h3>
      </div>

      <SponsorBanner />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

#content-introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#hero-video {
  max-height: 200px;
  height: 100%;
}

#headline-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 30px;
}

#h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

#content-countdowns {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

#content-become-a-member {
  width: 100%;
  padding: 30px 0;
  background-color: $tertiary;
}

#content-become-a-member-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.fans-box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.fans-box-img {
  border-radius: 5px;
}

#sponsor-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>