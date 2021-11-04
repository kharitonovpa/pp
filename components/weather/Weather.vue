<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import WeatherItem from '~/components/weather/WeatherItem';
export default {
  name: 'Weather',
  components: { WeatherItem },
  computed: {
    ...mapState('core', ['city', 'country']),
    ...mapGetters('weather', ['getMainWeather']),
  },
  async mounted() {
    await this.$store.dispatch('core/loadCity');
    await this.$store.dispatch('weather/loadWeather', this.city);
  },
  methods: {
    ...mapMutations('core', ['setPopup']),
  },
};
</script>

<template>
  <div class="weather">
    <div class="weather__container-wrapper">
      <Container class="weather__container">
        {{ getMainWeather }}
        <VTitle size="big" class="weather__title">World Weather</VTitle>
        <VText class="weather__description">Watch weather in your current location</VText>
        <div v-if="getMainWeather" class="weather__main">
          <WeatherItem
            :title="`${city}, ${country}`"
            :weather="getMainWeather.weather"
            :temperature="getMainWeather.temperature"
            :humidity="getMainWeather.humidity"
            is-main
            class="weather__item weather__item_main"
          />
        </div>
        <div class="weather__list">
          <WeatherItem v-for="item in 4" :key="item" class="weather__item" />
        </div>
      </Container>
      <VButton class="weather__button" @click.native="setPopup('add')" />
    </div>
  </div>
</template>

<style lang="scss">
.weather {
  height: 100vh;
  padding-top: em(24px);
  &__container-wrapper {
    position: relative;
  }
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
  &__button {
    position: absolute;
    right: em(45px);
    bottom: 0;
  }
}
</style>
