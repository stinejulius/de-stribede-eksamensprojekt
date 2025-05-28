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
      <div class="hero-section-video">
        <video loop muted autoplay playsinline poster="@/assets/images/footballfans-kids-flags.webp"
          src="../assets/videos/hero-video.webm"></video>
      </div>

      <div class="container hero-section-header">
        <div class="hero-section-title-group">
          <h1> DE STRIBEDE </h1>
          <h1 class="sub-title"> OB's OFFICIELLE FANKLUB </h1>
        </div>
        <h2 class="slogan"> Stemning der rækker længere end Fyn </h2>
      </div>
    </section>

    <section class="container description-section">
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
            <p :class="{ 'white-color': isDesktop }">
              For kun 150kr om året kan du blive medlem af De Stribede, hvor du vil få adgang til en lang række fordele!
              <br>
              <br>Få adgang til socialt samvær i klubhuset på Nature Energy Park, hvor du kan købe øl og vand til
              specielle
              medlemspriser. Kom med på fælles busture til udebane kampe, med særlig medlemsrabat og meget mere!
            </p>
          </div>

          <div v-if="isDesktop" class="fan-showcase">
            <div class="fan-showcase-imgbox">
              <img src="@/assets/images/footballfans-kids-flags.webp"
                alt="Nogle børn står forrest på en tribune med OB flag samt blå og hvide farver malet i ansigtet. De er glade og smilende.">
            </div>
            <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
          </div>
        </div>

        <RouterLink class="button-primary bold" to="/membership"> Bliv medlem </RouterLink>
      </div>
    </section>

    <div v-if="isMobile" class="container fan-showcase">
      <img src="@/assets/images/footballfans-kids-flags.webp"
        alt="Nogle børn står forrest på en tribune med OB flag samt blå og hvide farver malet i ansigtet. De er glade og smilende.">
      <p class="img-credit"> Fotograf: Kent Koll Rasmussen </p>
    </div>

    <section class="container">
      <NewsSection />
    </section>

    <section class="sponsor-section">
      <div class="container sponsor-section-header">
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
      position: relative;
      width: 100vw; // vw = view width
      height: 200px;
      overflow: hidden;

      video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 500px;
      }
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

    .sponsor-section-header {
      display: flex;
      justify-content: center;
    }
  }
}

// ==================== MEDIA QUERIES ====================
@media only screen and (min-width: 901px) {
  main {
    gap: 76px;

    .hero-section {
      .hero-section-video {
        height: 300px;

        video {
          max-width: 1200px;
        }
      }

      .hero-section-header {
        padding-top: 48px;
      }
    }

    .description-section {
      max-width: 500px;
    }

    .countdown-section {
      flex-direction: row;
      justify-content: space-between;
      gap: 32px;
      width: 100%;
    }

    .membership-section {
      padding: 48px 0;

      .membership-section-inner {
        gap: 48px;

        .membership-section-details {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          width: 100%;

          .membership-section-text-content {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 16px;

            height: 300px;
            // Allow Grow, Shrink & Try to be 50% width
            flex: 1 1 50%;

            border-radius: 5px;
            background-color: $primary;
          }

          .fan-showcase {
            // Allow Grow, Shrink & Try to be 50% width
            flex: 1 1 50%;

            display: flex;
            flex-direction: column;
            gap: 10px;

            .fan-showcase-imgbox {
              position: relative;
              overflow: hidden;
              height: 300px;
              border-radius: 5px;

              img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 300px;
              }
            }
          }
        }
      }
    }

    .sponsor-section {
      gap: 48px;
      padding-bottom: 76px;
    }
  }
}
</style>