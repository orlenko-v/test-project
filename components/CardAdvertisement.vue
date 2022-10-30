<template>
  <div class="flex flex-col p-5 xl:p-6 2xl:p-8 bg-secondary border border-[#DFE1F0] rounded-2xl xl:h-max">
    <h1 class="font-medium text-13 xl:text-15 2xl:text-18 leading-[18px] xl:leading-5 2xl:leading-6 text-primary uppercase">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</h1>
    <div class="flex flex-col md:flex-row md:h-full">
      <ul class="mt-6 xl:mt-8 2xl:mt-10 text-13 xl:text-14 2xl:text-18 leading-4 2xl:leading-5 md:flex-[66%] xl:flex-1">
        <li class="mb-4 2xl:mb-5" :class="$style.redCircleMark">incididunt ut labore et dolore magna aliqua</li>
        <li class="mb-4 2xl:mb-5" :class="$style.redCircleMark">incididunt ut labore et</li>
        <li class="mb-4 2xl:mb-5" :class="$style.redCircleMark">incididunt ut labore et dolore</li>
        <li class="mb-4 2xl:mb-5" :class="$style.redCircleMark">labore et dolore</li>
        <li class="mb-4 2xl:mb-5" :class="$style.redCircleMark">incididunt ut</li>
        <li class="mb-4 2xl:mb-5" :class="$style.redCircleMark">incididunt ut labore et dolore</li>
        <li class="" :class="$style.redCircleMark">incididunt ut labore</li>
      </ul>
      <div class="flex md:flex-col justify-between md:items-end md:flex-[33%] xl:flex-1 xl:flex-row xl:flex-wrap xl:justify-end mt-6 xl:mt-8 2xl:mt-10">
        <img class="object-cover w-[66px] h-[42px] md:w-[88px] md:h-[56px] xl:w-[116px] xl:h-[116px] 2xl:w-[144px] 2xl:h-[144px] xl:mb-3 xl:mr-3 2xl:mb-[14px] 2xl:mr-3[14px] rounded rounded-tr-2xl rounded-bl-2xl xl:rounded" src="~/assets/images/img-1.jpg" alt="image-1">
        <img class="object-cover w-[66px] h-[42px] md:w-[88px] md:h-[56px] xl:w-[116px] xl:h-[116px] 2xl:w-[144px] 2xl:h-[144px] xl:mb-3 2xl:mb-[14px] rounded rounded-tl-2xl rounded-br-2xl xl:rounded xl:rounded-tr-[32px]" src="~/assets/images/img-2.jpg" alt="image-2">
        <img class="object-cover w-[66px] h-[42px] md:w-[88px] md:h-[56px] xl:w-[116px] xl:h-[116px] 2xl:w-[144px] 2xl:h-[144px] xl:mr-3 2xl:mr-[14px] rounded rounded-tr-2xl rounded-bl-2xl xl:rounded xl:rounded-bl-[32px]" src="~/assets/images/img-3.jpg" alt="image-3">
        <img class="object-cover w-[66px] h-[42px] md:w-[88px] md:h-[56px] xl:w-[116px] xl:h-[116px] 2xl:w-[144px] 2xl:h-[144px] rounded rounded-tl-2xl rounded-br-2xl xl:rounded" src="~/assets/images/img-4.png" alt="image-4">
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.redCircleMark {
  @apply flex
         items-center
         before:shrink-0
         before:mr-2
         2xl:before:mr-3
         before:w-2
         before:h-2
         2xl:before:w-[10px]
         2xl:before:h-[10px]
         before:block
         before:rounded-full
         before:border-2
         before:border-red;
}

</style>
