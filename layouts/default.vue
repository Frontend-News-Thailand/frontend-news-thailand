<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="text-light-base-text dark:text-dark-base-text leading-[1.6]" :style="{ fontFamily: `'Sarabun', serif` }">
    <div class="px-4 py-2 relative flex justify-center">
      <NuxtLink to="/" class="w-[7em] md:w-[10em] inline-block">
        <AppLogo class="w-[7em] md:w-[10em] h-auto" />
      </NuxtLink>

      <ClientOnly>
        <button
          class="flex h-8 absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 dark:hover:bg-white hover:bg-dark-base-bg transition-colors rounded-full hover:bg-opacity-30 dark:hover:bg-opacity-30 p-1"
          tag="button"
          @click="toggleColorMode"
        >
          <template v-if="$colorMode.value === 'dark'">
            <Icon name="entypo:light-up" size="24px" />
          </template>
          <template v-else>
            <Icon name="iconamoon:mode-dark-bold" size="24px" />
          </template>
        </button>
      </ClientOnly>
    </div>

    <div class="px-8 pb-6">
      <slot />
    </div>
  </div>
</template>
