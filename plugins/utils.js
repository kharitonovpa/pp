const utils = {};

utils.isMobile = function () {
  return !!(typeof window !== 'undefined' && window.innerWidth <= 768 && window.innerWidth < window.innerHeight);
};

utils.isTablet = function () {
  return !!(
    typeof window !== 'undefined' &&
    window.innerWidth <= 768 &&
    window.innerWidth > 481 &&
    window.innerWidth < window.innerHeight
  );
};

utils.isNotTablet = function () {
  return !!(typeof window !== 'undefined' && window.innerWidth < 767);
};

utils.sample = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

utils.share = function (service, url) {
  const link = 'http://share.yandex.ru/go.xml?' + 'service=' + service + '&url=' + encodeURIComponent(url);
  utils.openPopup(link);
};

utils.openPopup = function (url) {
  const width = 800;
  const height = 500;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  const win = window.open(url, 'vote', 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left);
  win.focus();
};

utils.serverError = function () {
  alert('Ошибка доступ к серверу, попробуйте позже');
};

utils.getWindowScrollTop = function () {
  const doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
};

utils.declineNumeral = function (number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

utils.formatNumber = function (val, thSep, dcSep) {
  // Проверка указания разделителя разрядов
  if (!thSep) thSep = ' ';

  // Проверка указания десятичного разделителя
  if (!dcSep) dcSep = ',';

  const res = val.toString();
  const lZero = val < 0; // Признак отрицательного числа

  // Определение длины форматируемой части
  let fLen = res.lastIndexOf('.'); // До десятичной точки
  fLen = fLen > -1 ? fLen : res.length;

  // Выделение временного буфера
  let tmpRes = res.substring(fLen);
  let cnt = -1;
  for (let ind = fLen; ind > 0; ind--) {
    // Формируем временный буфер
    cnt++;
    if (cnt % 3 === 0 && ind !== fLen && (!lZero || ind > 1)) {
      tmpRes = thSep + tmpRes;
    }
    tmpRes = res.charAt(ind - 1) + tmpRes;
  }

  return tmpRes.replace('.', dcSep);
};

utils.formatPrice = function (price) {
  return utils.formatNumber(price) + ' ₽';
};

utils.getFieldByPath = function (object, path) {
  let result = object;
  path = path.split('.');
  for (let i = 0; i < path.length; i++) {
    result = result[path[i]];
  }
  return result;
};

utils.isObjectHasParams = function (object, params) {
  let result = true;
  for (const k in params) {
    const field = utils.getFieldByPath(object, k);
    if (field !== params[k]) {
      result = false;
    }
  }
  return result;
};

utils.find = function (list, params) {
  return list.filter((item) => utils.isObjectHasParams(item, params));
};

utils.findOne = function (list, params) {
  return list.find((item) => utils.isObjectHasParams(item, params));
};

utils.detectMobile = {
  Windows() {
    return /IEMobile/i.test(navigator.userAgent);
  },
  Android() {
    return /Android/i.test(navigator.userAgent);
  },
  BlackBerry() {
    return /BlackBerry/i.test(navigator.userAgent);
  },
  iOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  any() {
    return (
      utils.detectMobile.Android() ||
      utils.detectMobile.BlackBerry() ||
      utils.detectMobile.iOS() ||
      utils.detectMobile.Windows()
    );
  },
};

utils.shuffleArr = function (array) {
  return array.sort(() => Math.random() - 0.5);
};

utils.getScrollbarWidth = function () {
  const scrollDiv = document.createElement('div');
  scrollDiv.className = 'scrollbar-measure';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

utils.getParameter = function (name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

utils.hexToRgb = function (hex) {
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return r + ',' + g + ',' + b;
};

utils.isBlack = function (rgb) {
  return rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114 > 186;
};

utils.baseFontSize = function () {
  const el = document.querySelector('body');
  return parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
};

utils.getEmSize = function (pxSize) {
  return pxSize / utils.baseFontSize();
};

utils.scrollAnchor = function (element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 150,
  });
};

utils.getFileExtension = function (fileName) {
  const arr = fileName.split('.');
  return arr.length > 1 ? arr.pop() : '';
};

utils.randomInt = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

export default ({ app }, inject) => {
  inject('utils', utils);
};
