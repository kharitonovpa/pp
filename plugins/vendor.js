/* eslint-disable */

// import $ from 'jquery';
//
// window.$ = $;
// window.jQuery = $;

import smoothscroll from 'smoothscroll-polyfill';
import fetchJsonp from 'fetch-jsonp';
smoothscroll.polyfill();
window.fetchJsonp = fetchJsonp;

import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

export default ({ app, store }) => {
  window.store = store;
};
