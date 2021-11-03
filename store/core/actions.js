export default {
  async loadCity(store) {
    try {
      await fetch('https://extreme-ip-lookup.com/json/?key=6TSXwVDgWGXF1JT1l1Oq')
        .then((res) => res.json())
        .then((data) => {
          store.commit('setCity', data.city || 'Moscow');
          store.commit('setCountry', data.countryCode || 'RU');
        });
    } catch (e) {
      console.log('core/actions/loadCity', e);
    }
  },
};
