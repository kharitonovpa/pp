<script>
import WeatherItemRow from '~/components/weather/WeatherItemRow';
export default {
  name: 'WeatherItem',
  components: { WeatherItemRow },
  props: {
    isMain: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    weather: {
      type: String,
      default: '',
    },
    temperature: {
      type: Number,
      default: 0,
    },
    humidity: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<template>
  <div :class="{ is_main: isMain }" class="weather-item">
    <VTitle class="weather-item__title">{{ title }}</VTitle>
    <VText class="weather-item__description">Your current location</VText>
    <div class="weather-item__list">
      <WeatherItemRow class="weather-item__row" label="Weather" :value="weather" />
      <WeatherItemRow class="weather-item__row" label="Temperature" :value="`${temperature} °C`" />
      <WeatherItemRow class="weather-item__row" label="Humidity" :value="`${humidity} %`" />
    </div>
    <VText size="small" class="weather-item__lv">8 minutes ago</VText>
    <div class="weather-item__footer">
      <VText v-if="!isMain" size="small" class="weather-item__button weather-item__button_remove">REMOVE</VText>
      <VText size="small" class="weather-item__button weather-item__button_reload">RELOAD</VText>
    </div>
  </div>
</template>

<style lang="scss">
.weather-item {
  padding: em(24px);
  box-shadow: 0 2px em(10px) rgba(10, 10, 10, 0.25);
  border-radius: em(6px);
  &__title {
  }
  &__description {
    margin-top: em(15px, $size-text-small);
  }
  &__list {
    margin-top: em(40px);
    margin-bottom: em(8px);
  }
  &__lv {
    text-align: right;
    color: $color-gray-light;
  }
  &__footer {
    margin-top: em(32px);
    display: flex;
    justify-content: flex-end;
  }
  &__button {
    color: $color-purple;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &_reload {
      margin-left: auto;
    }
  }
  &__row {
    &:not(:last-child) {
      margin-bottom: em(16px);
    }
  }
}
</style>
