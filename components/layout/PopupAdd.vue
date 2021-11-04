<script>
import { mapGetters, mapMutations } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';
import Popup from '~/components/common/Popup';
export default {
  name: 'PopupAdd',
  components: { Popup },
  data() {
    return {
      isActive: false,
      value: '',
      submitStatus: null,
    };
  },
  validations: {
    value: {
      required,
      minLength: minLength(3),
      async isUnique(value) {
        // standalone validator ideally should not assume a field is required
        if (value === '') return true;

        // simulate async call, fail for all logins with even length
        await this.$store.dispatch('weather/loadWeather', value);
        const isAddWeatherByCity = !!this.getItems.find((item) => item.city.toLowerCase() === value.toLowerCase());
        console.log('isAddWeatherByCity', isAddWeatherByCity);
        return !isAddWeatherByCity;
      },
    },
  },
  computed: {
    ...mapGetters('weather', ['getItems']),
  },
  methods: {
    ...mapMutations('core', ['setPopup']),
    submit() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK';
        }, 500);
      }
    },
  },
};
</script>

<template>
  <Popup name="add" class="popup-add">
    {{ submitStatus }}
    <VTitle class="popup-add__title">Choose a city</VTitle>
    <VText size="big" class="popup-add__description">To find city start typing and pick one from the suggestions</VText>
    <div class="popup-add__input"></div>
    <input
      ref="input"
      v-model.trim="value"
      class="popup-add__input"
      @focus="isActive = true"
      @blur="isActive = false"
    />
    <div class="popup-add__footer">
      <VText size="small" class="popup-add__button popup-add__button_clear">CLEAR</VText>
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
}
</style>
