<script>
import defineTagName from '@/mixins/defineTagName';
export default {
  name: 'VButton',
  mixins: [defineTagName],
  props: {
    // white
    color: {
      type: String,
      default: 'white',
    },
    // regular;
    size: {
      type: String,
      default: 'regular',
    },
    // default;
    type: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<template>
  <component v-bind="attrs" :class="[`v-button_${type}`, `v-button_${size}`, `v-button_${color}`]" class="v-button">
    <slot />
  </component>
</template>

<style lang="scss">
.v-button {
  @extend %button;
  &_default {
    padding: 0.5em 1em;
    border-radius: 0.5em;
  }
  &_regular {
    font-size: 1em;
  }
  &_white {
    background-color: #f5f5f5;
    &:hover {
      background-color: #d2d2d2;
    }
    &:active {
      background-color: #acacac;
    }
  }
}
</style>
