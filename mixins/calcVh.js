export default {
  mounted() {
    window.addEventListener('orientationchange', this.calc);
  },
  destroyed() {
    window.removeEventListener('orientationchange', this.calc);
  },
  methods: {
    calc() {
      setTimeout(() => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      }, 50);
    },
  },
};
