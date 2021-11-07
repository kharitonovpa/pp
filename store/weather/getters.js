export default {
  getItems: (state, getters) =>
    state.items
      ? state.items.map((item) => {
          return Object.assign(
            {},
            {
              city: item.name,
              weather: item.weather[0].main,
              temperature: item.main.temp,
              humidity: item.main.humidity,
              date: item.date,
            },
          );
        })
      : [],
  getMainWeather: (state, getters, rootState) => {
    return getters.getItems.find((item) => item.city === rootState.core.city);
  },
  getListWeather: (state, getters, rootState) => {
    return getters.getItems.filter((item) => item.city !== rootState.core.city);
  },
};
