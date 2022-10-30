<template>
  <div class="container">
    <h1 class="mt-5 xl:mt-8 2xl:mt-9 font-medium text-20 md:text-26 2xl:text-34 leading-6 md:leading-8 2xl:leading-10 text-primary">Курс рубля</h1>
    <div class="flex flex-col md:flex-row md:flex-wrap md:justify-between">
      <CardCurrency class="mx-0 mt-5 md:mt-6 xl:mt-8 md:min-w-[48.5%] md:max-w-[48.5%] xl:min-w-[31.5%] xl:max-w-[31.5%]"
                    v-for="(currency, index) in currencies"
                    :key="currency.id"
                    :currency="currency"
      >
        <IconCash class="w-[52px] xl:w-14 2xl:w-[72px]" :class="isEven(index) ? 'text-primary' : 'text-red'" />
      </CardCurrency>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      currencies: 'getCurrencies',
    }),
  },
  methods: {
    isEven(num) {
      return num % 2 === 0;
    },
  },
};
</script>
