/* eslint-disable */
<template>
  <v-container
    id="landing"
    class="fill-height container"
    fluid
    :style="{ '--bgImage': `url(${ghostKitchenUrl})` }"
  >
    <v-row align="center" justify="center">
      <div class="landing-text">
        <div class="landing-title">Aftertaste Cloud Kitchen</div>
        <div class="text-subtitle-1">A whole new way of F&B business</div>
        <div class="text-subtitle-1">Coming to Klang Valley Soon!</div>
        <v-btn @click="slideTo('#signupnow')">Let's talk</v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import ghostKitchen from '../assets/ghostKitchen-lead.jpg';
import checkIsMobile from '../mixin/checkIsMobile';

export default {
  mixins: [checkIsMobile],
  data: () => ({
    ghostKitchenUrl: ghostKitchen,
  }),
  methods: {
    slideTo(id = '') {
      const appBarHeight = this.mixinIsMobile ? 56 : 64;
      console.log(appBarHeight, this.mixinIsMobile);
      const elePosition = document.querySelector(id).getBoundingClientRect()
        .top;
      const scrollPosition = window.pageYOffset + elePosition - appBarHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.container {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--bgImage) no-repeat center center;
  background-size: cover;
}

.landing {
  &-text {
    text-align: center;
    color: white;
    font-size: 48px;

    @media only screen and (max-width: 600px) {
      font-size: 32px;
    }
  }

  &-title {
    font-weight: 600;
  }
}
</style>
