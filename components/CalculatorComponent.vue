<template>
  <div class="flex flex-col">
    <label :class="$style.label" for="first-currency">Валюта 1</label>
    <input :class="$style.input" v-model="firstCurrency" name="first-currency" type="text" placeholder="Введите название или код" />
    <label :class="$style.label" for="second-currency">Валюта 2</label>
    <input :class="$style.input" v-model="secondCurrency" name="second-currency" type="text" placeholder="Введите название или код" />
    <label :class="$style.label" for="quantity">Количество</label>
    <input :class="$style.input" v-model="quantity" name="quantity" type="text" placeholder="Введите число" />
    <div class="flex items-center p-5 md:p-6 xl:p-7 2xl:p-8 rounded-2xl bg-secondary">
      <IconInfo class="w-10 xl:w-12 2xl:w-[52px] text-red" />
      <p class="ml-5 xl:ml-6 2xl:ml-7 font-bold text-16 xl:text-20 2xl:text-24 leading-5 xl:leading-6 2xl:leading-7 text-primary">Итого: {{ result || '...' }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      firstCurrency: '',
      secondCurrency: '',
      quantity: '',
    };
  },
  computed: {
    result() {
      const firstCurrency = this.currencyByInput(this.firstCurrency);
      const secondCurrency = this.currencyByInput(this.secondCurrency);
      return firstCurrency && secondCurrency
        ? this.convert(firstCurrency, secondCurrency) * (Number(this.quantity) || 0)
        : null;
    },
    ...mapGetters({
      currencyByInput: 'getCurrencyByInput',
    }),
  },
  methods: {
    convert(firstCurrency, secondCurrency) {
      return firstCurrency.roublesPerUnit * secondCurrency.unitsPerRouble;
    },
  },
};
</script>

<style lang="scss" module>
.label {
  @apply mb-2 font-medium text-14 2xl:text-16 leading-4 2xl:leading-5 text-text-dark
}

.input {
  @apply px-4 xl:px-5 py-[14px] xl:py-4 mb-5 xl:mb-6 text-12 2xl:text-14 text-text-gray-300 border rounded-[4px] border-[#DFDFDF] focus:outline-none;
}

</style>
