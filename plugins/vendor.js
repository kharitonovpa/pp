/* eslint-disable */

// import $ from 'jquery';
//
// window.$ = $;
// window.jQuery = $;

import smoothscroll from 'smoothscroll-polyfill';
import fetchJsonp from 'fetch-jsonp';
smoothscroll.polyfill();
window.fetchJsonp = fetchJsonp;

export default ({ app, store }) => {
  window.store = store;
};
