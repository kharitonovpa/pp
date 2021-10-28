<script>
export default {
  name: 'Container',
};
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
  max-width: em(1520px);
  margin: 0 auto;
}
</style>
