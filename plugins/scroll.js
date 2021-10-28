const scroll = {};

const isIOs = /iPhone|iPad|iPod/i.test(navigator.userAgent);

scroll.getWindowScrollTop = function() {
  const doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
};

scroll.disable = function() {
  if (isIOs) {
    document.body.style.top = `-${scroll.getWindowScrollTop()}px`;
    document.body.style.position = 'fixed';
  } else {
    document.documentElement.style.overflowY = 'hidden';
  }
};

scroll.enable = function() {
  if (isIOs) {
    const scrollY = document.body.style.top;
    document.body.style.position = 'relative';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  } else {
    document.documentElement.style.overflowY = 'auto';
  }
};

export default ({ app, store }, inject) => {
  inject('scroll', scroll);
};
