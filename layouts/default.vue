<script>
import BrowserNotSupported from '@/components/layout/BrowserNotSupported';
import calcVh from '../mixins/calcVh';
import checkEnv from '../mixins/checkEnv';
import isLoading from '../mixins/isLoading';
import isNoTransition from '../mixins/isNoTransition';
import PopupAdd from '~/components/layout/PopupAdd';
export default {
  components: { PopupAdd, BrowserNotSupported },
  mixins: [calcVh, checkEnv, isLoading, isNoTransition],
};
</script>

<template>
  <div :class="{ is_loading: isLoading, 'is_no-transition': isNoTransition }" class="layout layout-default">
    <nuxt class="layout-default__page" />
    <BrowserNotSupported class="layout-default__not-supported" />
    <PopupAdd class="layout-default__popup" />
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
