export default {
  async loadWeather(store, city) {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&APPID=${process.env.OPEN_WEATHER_API_KEY}&q=${city}`,
      );
      if (result.status === 200) {
        await result.json().then((data) => {
          store.commit('addItem', data);
        });
      } else {
        store.commit('setServerError', 'City not found');
        setTimeout(() => store.commit('setServerError', ''), 1000);
      }
    } catch (e) {
      console.log('weather/actions/loadWeather', e);
    }
  },
};
