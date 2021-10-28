<script>
import WeatherItem from '~/components/weather/WeatherItem';
export default {
  name: 'Weather',
  components: { WeatherItem },
};
</script>

<template>
  <div class="weather">
    <Container class="weather__container">
      <VTitle size="big" class="weather__title">World Weather</VTitle>
      <VText class="weather__description">Watch weather in your current location</VText>
      <div class="weather__main">
        <WeatherItem is-main class="weather__item weather__item_main" />
      </div>
      <div class="weather__list">
        <WeatherItem v-for="item in 4" :key="item" class="weather__item" />
      </div>
    </Container>
  </div>
</template>

<style lang="scss">
.weather {
  height: 100vh;
  padding-top: em(24px);
  &__title {
    text-align: center;
  }
  &__description {
    text-align: center;
    color: $color-gray;
    margin-top: em(32px, $size-text-regular);
  }
  &__main {
    margin: em(20px) auto em(80px);
    width: em(824px);
  }
  &__list {
    @extend %flex-space-between;
  }
  &__item {
    flex-grow: 1;
    &:not(:last-child) {
      margin-right: em(40px);
    }
  }
}
</style>
