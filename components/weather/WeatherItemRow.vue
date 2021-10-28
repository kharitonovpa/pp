<script>
export default {
  name: 'WeatherItemRow',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <div class="weather-item-row">
    <div class="weather-item-row__label">{{ label }}</div>
    <div class="weather-item-row__value">{{ value }}</div>
  </div>
</template>

<style lang="scss">
.weather-item-row {
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: em(12px);
  display: flex;
  justify-content: space-between;
}
</style>
