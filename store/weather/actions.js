export default {
  async loadWeather(store, city) {
    try {
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&APPID=${process.env.OPEN_WEATHER_API_KEY}&q=${store.rootState.core.city}`,
      )
        .then((res) => res.json())
        .then((data) => {
          store.commit('addItem', data);
        });
    } catch (e) {
      console.log('weather/actions/loadWeather', e);
    }
  },
};
