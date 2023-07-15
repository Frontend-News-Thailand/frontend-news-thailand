<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="text-light-base-text dark:text-dark-base-text leading-[1.6]" :style="{ fontFamily: `'Sarabun', serif` }">
    <div class="px-4 py-2 relative">
      <AppLogo class="w-[7em] md:w-[10em] h-auto mx-auto" />

      <ClientOnly>
        <button class="flex h-8 absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white transition-colors rounded-full hover:bg-opacity-30 p-1" tag="button" @click="toggleColorMode">
          <template v-if="$colorMode.value === 'dark'">
            <Icon name="entypo:light-up" size="24px" />
          </template>
          <template v-else>
            <Icon name="circum:dark" size="24px" />
          </template>
        </button>
      </ClientOnly>
    </div>

    <div class="container mx-auto px-6 pb-6 max-w-3xl">
      <slot />
    </div>
  </div>
</template>
