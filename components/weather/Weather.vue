<script>
export default {
  name: 'Weather',
};
</script>

<template>
  <div class="weather">
    <div class="weather__container">
      <VTitle size="big" class="weather__title">World Weather</VTitle>
      <VText class="weather__description">Watch weather in your current location</VText>
    </div>
  </div>
</template>

<style lang="scss">
.weather {
  height: 100vh;
  background-color: orange;
}
</style>
