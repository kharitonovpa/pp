<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import WeatherItem from '~/components/weather/WeatherItem';
export default {
  name: 'Weather',
  components: { WeatherItem },
  computed: {
    ...mapState('core', ['city', 'country']),
    ...mapGetters('weather', ['getMainWeather', 'getListWeather']),
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
        <VTitle size="big" class="weather__title">World <br class="is_mobile" />Weather</VTitle>
        <VText class="weather__description">Watch weather in your current location</VText>
        <div v-if="getMainWeather" class="weather__main">
          <WeatherItem
            :title="`${city}, ${country}`"
            :city="city"
            :weather="getMainWeather.weather"
            :temperature="getMainWeather.temperature"
            :humidity="getMainWeather.humidity"
            :date="getMainWeather.date"
            is-main
            class="weather__item weather__item_main"
          />
        </div>
        <div class="weather__list">
          <WeatherItem
            v-for="item in getListWeather"
            :key="item.city"
            :city="item.city"
            :title="item.city"
            :weather="item.weather"
            :temperature="item.temperature"
            :humidity="item.humidity"
            :date="item.date"
            class="weather__item weather__item_list"
          />
        </div>
      </Container>
      <VButton class="weather__button" @click.native="setPopup('add')" />
    </div>
  </div>
</template>

<style lang="scss">
.weather {
  @include ifdesktop {
    min-height: 100vh;
    padding-top: em(24px);
    padding-bottom: em(24px);
  }
  @include ifmobile {
    padding-top: em(16px);
    padding-bottom: em(16px);
  }
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
    @include ifdesktop {
      margin: em(20px) auto em(80px);
      width: em(824px);
      min-height: em(378.88px);
    }
    @include ifmobile {
      margin: em(16px) 0 em(32px);
    }
  }
  &__list {
    @include ifdesktop {
      min-height: em(378.88px);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
    }
    @include ifmobile {
      padding: 0 em(16px);
    }
  }
  &__item {
    &_main {
      flex-grow: 1;
    }
    &_list {
      @include ifdesktop {
        min-width: calc((100% - #{em(120px)}) / 4);
        margin-right: em(40px);
      }
      &:nth-child(4n) {
        @include ifdesktop {
          margin-right: 0;
        }
      }
      &:nth-child(n + 5) {
        @include ifdesktop {
          margin-top: em(20px);
        }
      }
      &:not(:last-child) {
        @include ifmobile {
          margin-bottom: em(12px);
        }
      }
    }
  }
  &__button {
    position: absolute;
    @include ifdesktop {
      right: em(45px);
      bottom: 0;
    }
    @include ifmobile {
      right: em(16px);
      top: em(16px);
    }
  }
}
</style>
