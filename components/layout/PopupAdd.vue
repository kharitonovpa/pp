<script>
import { mapMutations } from 'vuex';
import Popup from '~/components/common/Popup';
export default {
  name: 'PopupAdd',
  components: { Popup },
  methods: {
    ...mapMutations('core', ['setPopup']),
  },
};
</script>

<template>
  <Popup name="add" class="popup-add">
    <VTitle class="popup-add__title">Choose a city</VTitle>
    <VText size="big" class="popup-add__description">To find city start typing and pick one from the suggestions</VText>
    <div class="popup-add__input"></div>
    <div class="popup-add__footer">
      <VText size="small" class="popup-add__button popup-add__button_clear">CLEAR</VText>
      <div class="popup-add__row">
        <VText size="small" class="popup-add__button popup-add__button_cancel" @click.native="setPopup('')">
          CANCEL
        </VText>
        <VText size="small" class="popup-add__button popup-add__button_add">ADD</VText>
      </div>
    </div>
  </Popup>
</template>

<style lang="scss">
.popup-add {
  &__description {
    margin-top: em(16px, $size-text-big);
    color: $color-gray;
    margin-bottom: em(67px, $size-text-big);
  }
  &__footer {
    margin-top: em(140px);
    @extend %flex-space-between;
  }
  &__row {
    @extend %flex-start;
  }
  &__button {
    font-weight: 700;
    text-transform: uppercase;
    color: $color-purple;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &_add {
      margin-left: em(31px, $size-text-small);
    }
  }
}
</style>
