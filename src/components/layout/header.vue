<template>
  <div id="header" class="app-header">
    <v-navigation-drawer v-resize="onResize" v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item @click="slideTo('#whyus')">
          <v-list-item-content>
            <v-list-item-title>Why us?</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="slideTo('#about')">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="slideTo('#signupnow')">
          <v-list-item-content>
            <v-list-item-title>Sign up now</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :height="mixinIsMobile ? 56 : 64" app light>
      <v-app-bar-nav-icon v-if="mixinIsMobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title">
        <v-img
          class="logo"
          max-width="80"
          max-height="57"
          :src="logoUrl"
          @click="slideTo('#landing')"
        />
        <!-- <v-btn class="header-title" text >Kitchen Rental</v-btn> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="!mixinIsMobile">
        <v-btn text large depressed @click="slideTo('#whyus')">Why us?</v-btn>

        <v-btn text large depressed @click="slideTo('#about')">About</v-btn>

        <v-btn text large depressed @click="slideTo('#signupnow')">Sign up now</v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import aftertastePng from "../../assets/aftertaste-logo-variation-3.png";
import checkIsMobile from "../../mixin/checkIsMobile";

export default {
  mixins: [checkIsMobile],
  data() {
    return {
      drawer: false,
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
.title {
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    // overriding the vuetify styles
    padding-left: 0 !important;
  }

  a {
    // overriding the vuetify styles
    padding: 0px !important;
  }
}

.logo {
  cursor: pointer;
}
</style>
