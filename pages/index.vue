<script>
import Weather from '~/components/weather/Weather';
export default {
  components: { Weather },
};
</script>

<template>
  <div class="page page-index">
    <Weather class="page-index__weather" />
  </div>
</template>

<style lang="scss">
.page-index {
}
</style>
