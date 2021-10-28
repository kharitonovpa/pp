<script>
import defineTagName from '@/mixins/defineTagName';
export default {
  name: 'VTitle',
  mixins: [defineTagName],
  props: {
    // big, medium, regular, small
    size: {
      type: String,
      default: 'regular',
    },
  },
};
</script>

<template>
  <component v-bind="attrs" :class="`v-title_${size}`" class="v-title">
    <slot />
  </component>
</template>

<style lang="scss">
.v-title {
  margin: 0;
  &_big {
    font-size: em($size-title-big);
    line-height: 1.14;
    font-weight: 300;
  }
  &_regular {
    font-size: em($size-title-regular);
    line-height: 1.19;
    font-weight: 700;
  }
}
</style>
