import Vue from 'vue';
import LazyHydrate from 'vue-lazy-hydration';

Vue.component('LazyHydrate', LazyHydrate);

Vue.directive('HydrateImage', {
  inserted(el, data) {
    if (data.arg === 'bg') {
      el.style.backgroundImage = `url('${data.value}')`;
    }
    if (data.arg === 'src') {
      el.src = data.value;
    }
    if (data.arg === 'flag') {
      el.setAttribute('hydrated', '');
    }
  },
});
