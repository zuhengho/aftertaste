export default {
  data() {
    return {
      windowSize: { x: NaN, y: NaN },
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
  computed: {
    mixinIsMobile() {
      console.log(this.$vuetify.breakpoint.thresholds.xs);
      return this.windowSize.x <= this.$vuetify.breakpoint.thresholds.xs;
    },
  },

  // handleCheckWindowWidth() {
  //   if (this.windowWidth !== window.innerWidth) {
  //     this.mixinIsBigScreen = this.checkWindowWidth()
  //     this.windowWidth = window.innerWidth
  //   }
  // }
};
