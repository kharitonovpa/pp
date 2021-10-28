<script>
import defineTagName from '@/mixins/defineTagName';
export default {
  name: 'VText',
  mixins: [defineTagName],
  props: {
    size: {
      type: String,
      // big, medium, regular
      default: 'regular',
    },
  },
};
</script>

<template>
  <component v-bind="attrs" :class="`v-text_${size}`" class="v-text">
    <slot />
  </component>
</template>

<style lang="scss">
.v-text {
  &_big {
    font-size: em($size-text-big);
    line-height: 1;
  }
  &_regular {
    font-size: em($size-text-regular);
    line-height: 1.33;
  }
  &_small {
    font-size: em($size-text-small);
    line-height: 1.5;
  }
}
</style>
