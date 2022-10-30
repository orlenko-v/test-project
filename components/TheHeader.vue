<template>
  <header class="container h-12 flex items-center bg-gray font-medium text-12">
    <NuxtLink to="/" :class="this.$route.path === '/' ? 'text-text-gray-700' : 'text-text-gray-500'">Калькулятор</NuxtLink>
    <NuxtLink to="/rates" class="ml-8" :class="this.$route.path === '/rates' ? 'text-text-gray-700' : 'text-text-gray-500'">Курс рубля</NuxtLink>
  </header>
</template>
