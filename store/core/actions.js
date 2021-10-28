export default {
  async loadCity(store) {
    try {
      await fetch('https://geolocation-db.com/jsonp/').then((data) => console.log(Object.keys(data)));
      // console.log(result);
      // store.commit('addItems', result.data);
    } catch (e) {
      console.log('core/actions/loadCity', e);
    }
  },
};
