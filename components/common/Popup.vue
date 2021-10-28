<script>
/*
require:
- store/core/state/popup - string
- store/core/mutations/setPopup - string
- vw body width for scroll compensation

usage:
set popup name via mutation
*/
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Popup',
  props: {
    name: {
      type: String,
      required: true,
    },
    transition: {
      type: String,
      default: 'fade',
    },
  },
  data() {
    return {
      isIOs: false,
    };
  },
  computed: {
    ...mapState('core', ['popup']),
    isActive() {
      return this.popup === this.name;
    },
  },
  watch: {
    isActive(newVal) {
      newVal ? this.$scroll.disable() : this.$scroll.enable();
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown);
  },
  destroyed() {
    this.$scroll.enable();
    window.removeEventListener('keydown', this.onKeydown);
  },
  methods: {
    ...mapMutations('core', ['setPopup']),
    close() {
      this.$emit('beforeClose');
      this.setPopup('');
    },
    onKeydown(event) {
      if (event.keyCode === 27) {
        this.close();
      }
    },
  },
};
</script>

<template>
  <transition :name="transition">
    <div v-if="isActive" :class="[`popup_${name}`]" class="popup">
      <div class="popup__overlay" @click="close" />
      <div class="popup__scroll-container">
        <div class="popup__content-wrapper">
          <div class="popup__content">
            <div class="popup__close" @click="close">X</div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  &__scroll-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    position: relative;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: rgb(11, 11, 11);
    z-index: 1;
  }
  &__content-wrapper {
    display: flex;
    min-height: 100%;
    flex-flow: column;
    z-index: 1;
    &:before,
    &:after {
      content: ' ';
      display: block;
      width: 100%;
      flex: 1 1 auto;
    }
  }
  &__close {
    position: absolute;
    top: 0;
    background: #dddddd;
    padding: 1em;
    cursor: pointer;
    @include ifdesktop {
      left: 100%;
      margin-left: 2em;
      display: none;
    }
    @include ifmobile {
      right: 0;
    }
    &:hover {
      background: darken(#dddddd, 5%);
    }
  }
  &__content {
    position: relative;
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    flex: 0 0 auto;
    padding: em(24px);
    box-shadow: 0 em(16px) em(24px) rgba(0, 0, 0, 0.14), 0 em(6px) em(30px) rgba(0, 0, 0, 0.12),
      0 em(8px) em(10px) rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    width: em(751px);
  }
}
</style>
