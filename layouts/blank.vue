<script>
import BrowserNotSupported from '@/components/layout/BrowserNotSupported';
export default {
  components: { BrowserNotSupported },
  mounted() {
    this.calcVh();

    if (window.location.hostname !== process.env.DOMAIN) {
      alert('Указано неверное окружение ' + process.env.ENV);
    }

    window.addEventListener('orientationchange', this.calcVh);
  },
  destroyed() {
    window.removeEventListener('orientationchange', this.calcVh);
  },
  methods: {
    calcVh() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    },
  },
};
</script>

<template>
  <div class="layout layout-blank">
    <nuxt class="layout-blank__page" />
    <BrowserNotSupported class="layout-blank__not-supported" />
  </div>
</template>

<style lang="scss">
.layout-blank {
  &__page {
  }
  &__not-supported {
  }
}
</style>
