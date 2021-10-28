import fs from 'fs';
import typo from './plugins/typograf/typoDirective';

require('dotenv').config();

const title = 'Postoplan';
const description = '';
const image = '';
const url = '';

export default {
  mode: 'spa',
  htmlAttrs: {
    lang: 'ru',
  },
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },

      {
        name: 'theme-color',
        media: '(prefers-color-scheme: light)',
        content: '#ffffff',
      },
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: dark)',
        content: '#000000',
      },
      { hid: 'description', name: 'description', content: description },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: url,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        property: 'twitter:card',
        content: 'summary', // если нужна большая картинка в превью ставим summary_large_image
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        property: 'twitter:site',
        content: url,
      },
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
    ],
    script: [
      {
        innerHTML: fs.readFileSync('assets/js/calcVh.js', 'utf8'),
        type: 'text/javascript',
      },
      {
        innerHTML: fs.readFileSync('assets/js/checkBrowserSupport.js', 'utf8'),
        type: 'text/javascript',
      },
    ],
    noscript: [],
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
  },
  router: {
    base: process.env.NUXT_ROOT,
  },
  css: ['~/assets/scss/common.scss'],
  plugins: [
    { src: '~/plugins/global' },
    { src: '~/plugins/utils.js' },
    { src: '~/plugins/typograf.js' },
    { src: '~/plugins/hydration.js' },
    { src: '~/plugins/vendor.js', ssr: false },
    { src: '~/plugins/scroll.js', ssr: false },
  ],
  styleResources: {
    scss: ['assets/scss/resources.scss'],
  },
  components: false,
  generate: {
    concurrency: 1,
  },
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/composition-api/module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', '@nuxtjs/dotenv'],
  axios: {
    baseURL: process.env.AXIOS_BASE,
  },
  render: {
    bundleRenderer: {
      directives: { typo },
    },
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      });
    },
    terser: {
      terserOptions: {
        safari10: true,
      },
    },
  },
};
