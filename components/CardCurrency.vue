<template>
  <div class="flex flex-col justify-between bg-gray rounded-2xl p-5 xl:p-6 2xl:p-8 hover:shadow-md hover:shadow-[#DDDDDD]">
    <div>
      <slot></slot>
      <h1 class="mt-5 xl:mt-6 2xl:mt-8 font-bold text-18 xl:text-20 leading-5 xl:leading-6 text-primary">{{ currency.code }}</h1>
      <p class="mt-3 text-14 xl:text-16 leading-4 xl:leading-5 text-text-gray-950">{{ currency.name }}</p>
    </div>
    <ul class="mt-9 xl:mt-10 font-medium text-14 xl:text-16 leading-4 xl:leading-5 text-text-gray-900">
      <li :class="$style.redCircleMark">
        Номинал: {{ currency.nominal }}
      </li>
      <li class="mt-3" :class="$style.redCircleMark">
        Курс: {{ currency.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currency: Object,
  },
};
</script>

<style lang="scss" module>
.redCircleMark {
  @apply flex
         items-center
         before:shrink-0
         before:mr-3
         before:w-[10px]
         before:h-[10px]
         before:block
         before:rounded-full
         before:border-2
         before:border-red;
}

</style>
