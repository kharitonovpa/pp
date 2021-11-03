export default {
  addItem: (state, obj) => {
    const isAvailable = !!state.items.find((item) => item.name === obj.name);
    if (!isAvailable) state.items.push(obj);
  },
};
