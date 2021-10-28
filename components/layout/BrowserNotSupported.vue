<script>
export default {
  name: 'BrowserNotSupported',
  data() {
    return {
      items: [
        {
          title: 'Google Chrome',
          url: 'https://www.google.com/intl/ru_ru/chrome/',
        },
        {
          title: 'Mozilla Firefox',
          url: 'https://www.mozilla.org/ru/firefox/new/',
        },
        {
          title: 'Opera',
          url: 'https://www.opera.com/ru',
        },
        {
          title: 'Edge',
          url: 'https://www.microsoft.com/ru-ru/edge',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="browser-not-supported">
    <div class="browser-not-supported__container">
      <div v-typo="'Ваш браузер не поддерживается'" class="browser-not-supported__title" />
      <div v-typo="'Попробуйте один из этих:'" class="browser-not-supported__description" />
      <div class="browser-not-supported__list">
        <div v-for="item in items" :key="item.title" class="browser-not-supported__row">
          <div class="browser-not-supported__name">{{ item.title }}</div>
          <a :href="item.url" class="browser-not-supported__link" target="_blank"> Скачать </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.browser-not-supported {
  display: none !important;
  @include ifparent('html.is_not-supported') {
    display: flex !important;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &__container {
      @include ifdesktop {
        max-width: em(660px);
      }
      @include ifmobile {
        width: 100%;
        padding: em(20px);
      }
    }
    &__title {
      font-size: 3em;
      margin-bottom: 0.4em;
    }
    &__description {
      font-size: 1.75em;
      margin-bottom: 1em;
    }
    &__row {
      margin-bottom: 1em;
      @extend %flex-space-between;
    }
    &__name {
      font-size: 1.15em;
    }
    &__link {
      font-size: 1.15em;
      color: initial;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
