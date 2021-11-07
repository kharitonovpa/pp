export default {
  addItem: (state, obj) => {
    obj.date = new Date();
    let item = state.items.find((item) => item.name === obj.name);
    if (item) {
      item = obj;
    } else {
      state.items.push(obj);
    }
  },
  removeItem: (state, city) => {
    for (let i = state.items.length; i--; ) {
      if (state.items[i].name === city) {
        state.items.splice(i, 1);
      }
    }
  },
  setServerError: (state, val) => (state.serverError = val),
};
