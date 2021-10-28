export default {
  data() {
    return {
      isNoTransition: false,
      isNoTransitionTimeout: null,
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateNoTransition);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateNoTransition);
  },
  methods: {
    updateNoTransition() {
      clearTimeout(this.isNoTransitionTimeout);
      this.isNoTransition = true;
      this.isNoTransitionTimeout = setTimeout(() => {
        this.isNoTransition = false;
      }, 30);
    },
  },
};
