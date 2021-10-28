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
  background-color: $color-purple;
  border-radius: 50%;
  box-shadow: 0 em(4px) em(5px) rgba(0, 0, 0, 0.14), 0 1px em(10px) rgba(0, 0, 0, 0.12),
    0 2px em(4px) rgba(0, 0, 0, 0.2);
  width: em(56px);
  height: em(56px);
  transition: box-shadow 0.3s;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: $color-white;
    width: em(14px);
    height: 2px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: $color-white;
    width: 2px;
    height: em(14px);
  }
  &:hover {
    box-shadow: em(6px) em(6px) em(5px) rgba(0, 0, 0, 0.34), 0 em(5px) em(10px) rgba(0, 0, 0, 0.32),
      0 2px em(4px) rgba(0, 0, 0, 0.4);
  }
}
</style>
