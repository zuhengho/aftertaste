<template>
  <v-container id="about" class="fill-height container about-container" fluid>
    <div class="about-wrapper max-width">
      <v-img class="about-logo" :src="logoUrl" @click="slideTo('#landing')" contain/>

      <div class="about-desc">
        <span>Aftertaste cloud kitchen will be a subscription-based, fully equipped kitchen that helps our clients to operate delivery-only restaurants. Our mission is to create an ecosystem that empowers the sustainable growth of delivery-only kitchens.</span>
        <v-btn class="about-button" @click="slideTo('#signupnow')">Let's talk</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import aftertastePng from "../assets/aftertaste-logo.png";
import checkIsMobile from "../mixin/checkIsMobile";

export default {
  mixins: [checkIsMobile],
  data() {
    return {
      logoUrl: aftertastePng
    };
  },
  methods: {
    slideTo(id = "") {
      const appBarHeight = this.mixinIsMobile ? 56 : 64;
      console.log(appBarHeight, this.mixinIsMobile);
      const elePosition = document.querySelector(id).getBoundingClientRect()
        .top;
      const scrollPosition = window.pageYOffset + elePosition - appBarHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.about {
  &-container {
    justify-content: center;

    @media only screen and (max-width: 600px) {
      height: auto;
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: 2fr 0.5fr 2fr;
    grid-template-areas: 'logo . desc';
    padding: 0 16px;
    margin: auto 0;
    justify-items: flex-end;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 'logo' 'desc';
      grid-gap: 16px 0;
    }
  }

  &-logo {
    grid-area: logo;
    max-width: 400px;
  }

  &-desc {
    grid-area: desc;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
  }

  &-button {
    align-self: center;
    margin-top: 16px;
  }
}
</style>


