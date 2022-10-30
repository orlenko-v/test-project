<template>
  <footer class="container"
          :class="
            this.$route.path === '/'
            ? 'bg-secondary md:bg-transparent my-5 md:my-6 xl:my-10'
            : 'bg-transparent my-5 md:my-6 xl:my-8'
          "
  >

    <div v-if="this.$route.path === '/'" class="flex flex-col md:flex-row py-6 md:py-7 xl:py-10 2xl:py-12 md:pl-6 xl:pl-10 2xl:pl-12 bg-secondary rounded-2xl">

      <div class="flex flex-col items-center md:items-start md:flex-[40%] mb-8 md:mb-0">
        <p class="font-medium text-18 xl:text-30 2xl:text-36 leading-6 xl:leading-9 2xl:leading-[48px] text-primary">Нужна помощь? Мы поможем!</p>
        <p class="mb-1 xl:mb-3 2xl:mb-4 font-medium text-18 xl:text-30 2xl:text-36 leading-6 xl:leading-9 2xl:leading-[48px] text-primary">Просто свяжитесь с нами.</p>
        <p class="text-10 xl:text-13 2xl:text-16 leading-3 xl:leading-5 2xl:leading-[18px] text-center md:text-left">Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.</p>
      </div>

      <div class="flex flex-col items-center md:flex-[60%] md:pl-[6.5%]">
        <a class="font-medium text-24 xl:text-[40px] 2xl:text-[52px] leading-7 xl:leading-[48px] 2xl:leading-[60px] text-primary" href="tel:+78008889028">8 (800) 888-90-28</a>
        <p class="my-3 xl:my-4 text-12 xl:text-18 2xl:text-24 leading-[14px] xl:leading-[22px] 2xl:leading-[28px] uppercase">или</p>
        <a class="text-20 xl:text-24 2xl:text-32 leading-6 xl:leading-7 2xl:leading-10 text-primary" href="mailto:info@example.ru">info@example.ru</a>
      </div>

    </div>

    <div v-if="this.$route.path === '/rates'" class="flex flex-col md:flex-row md:items-center p-6 xl:p-7 2xl:p-8 font-medium text-18 xl:text-20 text-primary bg-gray rounded-2xl">
      <IconInfo class="w-10 xl:w-12 2xl:w-[52px]" />
      <a class="mt-5 md:mt-0 md:ml-5 xl:ml-6 2xl:ml-7" href="tel:+78008889028">Телефон: 8 (800) 888-90-28,</a>
      <a class="md:ml-2" href="mailto:info@example.ru">email: info@example.ru.</a>
    </div>

  </footer>
</template>
