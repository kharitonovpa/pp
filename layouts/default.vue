<script>
import BrowserNotSupported from '@/components/layout/BrowserNotSupported';
import calcVh from '../mixins/calcVh';
import checkEnv from '../mixins/checkEnv';
import isLoading from '../mixins/isLoading';
import isNoTransition from '../mixins/isNoTransition';
export default {
  components: { BrowserNotSupported },
  mixins: [calcVh, checkEnv, isLoading, isNoTransition],
};
</script>

<template>
  <div :class="{ is_loading: isLoading, 'is_no-transition': isNoTransition }" class="layout layout-default">
    <nuxt class="layout-default__page" />
    <BrowserNotSupported class="layout-default__not-supported" />
  </div>
</template>

<style lang="scss">
.layout-default {
  &__page {
  }
  &__not-supported {
  }
}
</style>
