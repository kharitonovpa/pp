(function () {
  let isIe = false;

  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    isIe = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    isIe = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    // isIe = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  if (isIe) {
    document.querySelector('html').classList.add('is_not-supported');
  }
})(window, document, navigator, localStorage);
