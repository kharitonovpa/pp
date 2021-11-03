export default {
  async loadCity(store) {
    try {
      await fetch('https://extreme-ip-lookup.com/json/?key=6TSXwVDgWGXF1JT1l1Oq')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          store.commit('setCity', data.city || 'Moskow');
          store.commit('setCountry', data.countryCode || 'RU');
        });
      // console.log(result);
      // store.commit('addItems', result.data);
    } catch (e) {
      console.log('core/actions/loadCity', e);
    }
  },
};
