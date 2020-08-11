<template>
  <v-app>
    <Header/>

    <v-main>
      <Landing/>

      <About/>

      <WhyUs/>

      <SignUpNow/>
    </v-main>

    <footer id="footer"/>
  </v-app>
</template>

<script>
import Header from "./components/layout/header.vue";
import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import WhyUs from "./components/WhyUs.vue";
import SignUpNow from "./components/SignUpNow.vue";

export default {
  components: {
    Header,
    Landing,
    WhyUs,
    SignUpNow,
    About
  }
};
</script>

<style lang="stylus">
// global setting
html {
  scroll-behavior: smooth;
}

// Fix the bugs of vuetify
.v-main {
  height: 100vh;
}

.max-width {
  max-width: 1024px;
}
</style>
