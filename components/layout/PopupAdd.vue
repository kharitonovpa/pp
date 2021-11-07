<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import Popup from '~/components/common/Popup';

export default {
  name: 'PopupAdd',
  components: { Popup },
  data() {
    return {
      isActive: false,
      value: '',
      error: '',
    };
  },
  validations: {
    value: {
      required,
    },
  },
  computed: {
    ...mapState('weather', ['serverError']),
    ...mapGetters('weather', ['getItems']),
  },
  methods: {
    ...mapMutations('core', ['setPopup']),
    async submit() {
      this.$v.$touch();
      const re = /^[a-zA-Z-]+$/;
      if (this.$v.$error || this.value === '' || !re.test(this.value)) {
        this.error = 'Choose a city';
        setTimeout(() => {
          this.error = '';
        }, 1000);
      } else {
        const isAddWeatherByCity = !!this.getItems.find((item) => item.city.toLowerCase() === this.value.toLowerCase());
        if (isAddWeatherByCity) {
          this.error = 'The city already exists';
          setTimeout(() => {
            this.error = '';
          }, 1000);
          return;
        }
        await this.$store.dispatch('weather/loadWeather', this.value);
        if (this.serverError) {
          this.error = this.serverError;
          setTimeout(() => {
            this.error = '';
          }, 1000);
          return;
        }
        this.value = '';
        this.setPopup('');
      }
    },
  },
};
</script>

<template>
  <Popup name="add" class="popup-add">
    <VTitle class="popup-add__title">Choose a city</VTitle>
    <VText size="big" class="popup-add__description">To find city start typing and pick one from the suggestions</VText>
    <div class="popup-add__input-wrapper">
      <input
        ref="input"
        v-model.trim="value"
        placeholder="Search city"
        class="popup-add__input"
        :class="{ is_error: error }"
        @focus="isActive = true"
        @blur="isActive = false"
      />
      <VText v-if="error" size="small" class="popup-add__error">{{ error }}</VText>
    </div>
    <div class="popup-add__footer">
      <VText size="small" class="popup-add__button popup-add__button_clear" @click.native="value = ''">CLEAR</VText>
      <div class="popup-add__row">
        <VText size="small" class="popup-add__button popup-add__button_cancel" @click.native="setPopup('')">
          CANCEL
        </VText>
        <VText size="small" class="popup-add__button popup-add__button_add" @click.native="submit">ADD</VText>
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
  &__input-wrapper {
    position: relative;
  }
  &__input {
    @extend %input;
    font-size: em($size-text-big);
    width: 100%;
    padding-bottom: em(16px, $size-text-big);
    border-bottom: 1px solid $color-black;
    &.is_error {
      border-color: $color-red;
    }
  }
  &__error {
    position: absolute;
    top: calc(100% + #{em(12px, $size-text-small)});
    left: 0;
    color: $color-red;
  }
}
</style>
