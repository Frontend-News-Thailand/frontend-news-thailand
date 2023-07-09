<template>
  <div class="text-white leading-[1.6] font-light" :style="{ fontFamily: `'Sarabun', serif` }">
    <div class="px-4 py-2">
      <AppLogo class="w-[7em] md:w-[10em] h-auto mx-auto" />
    </div>
    <div class="container mx-auto px-6 pb-6 max-w-3xl">
      <slot />
    </div>
  </div>
</template>
