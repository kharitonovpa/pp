/*
Cases:
- directive v-typo ( <div v-typo>text</div> or <div v-typo="'text'" /> )
- filter typo ( {{ 'text' | typo }} )
- injection $typo ( <div v-html="$typo('text') /> )

Requirements:
- install typograf package
- ./tp.js
- ./typoDirective.js
- add ssr directive to render section in nuxt.config.js
*/

import Vue from 'vue';
import tp from './typograf/tp';

const NAME = 'typo';

Vue.directive(NAME, function (el, data) {
  if (data.value) {
    el.innerHTML = tp.execute(data.value);
  } else {
    el.innerHTML = tp.execute(el.innerHTML);
  }
});

Vue.filter(NAME, function (value) {
  return tp.execute(value);
});

export default ({ app }, inject) => {
  inject(NAME, function (value) {
    return tp.execute(value);
  });
};
