/* eslint-disable */

// import $ from 'jquery';
//
// window.$ = $;
// window.jQuery = $;

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

export default ({ app, store }) => {
  window.store = store;
};
