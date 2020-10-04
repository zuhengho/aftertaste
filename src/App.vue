<template>
  <v-app>
    <Header />

    <v-main>
      <Landing />

      <About />

      <WhyUs />

      <SignUpNow />
    </v-main>

    <footer id="footer" />
  </v-app>
</template>

<script>
import Header from './components/layout/header';
import Landing from './components/Landing';
import About from './components/About';
import WhyUs from './components/WhyUs';
import SignUpNow from './components/SignUpNow';

export default {
  components: {
    Header,
    Landing,
    WhyUs,
    SignUpNow,
    About,
  },
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

.fill-height {
  height: auto;
  min-height 100%;
}

.max-width {
  max-width: 1024px;
}
</style>
