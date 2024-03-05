<script setup lang="ts">
const colorMode = useColorMode()

const switchThemeAriaLabel = computed(() => {
  const toNewTheme = colorMode.value === 'dark' ? 'light' : 'dark'
  return `Switch to ${toNewTheme} theme`
})

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="text-light-base-text dark:text-dark-base-text leading-[1.6]" :style="{ fontFamily: `'Sarabun', serif` }">
    <div class="relative flex justify-center px-4 py-2">
      <NuxtLink to="/" class="inline-block w-[7em] md:w-[10em]" aria-current-value="Go to Home">
        <AppLogo class="h-auto w-[7em] md:w-[10em]" />
      </NuxtLink>

      <div class="absolute right-4 top-1/2 flex -translate-y-1/2 gap-4 md:right-12">
        <NuxtLink
          to="https://github.com/Frontend-News-Thailand/frontend-news-thailand"
          target="_blank"
          class="hover:bg-dark-base-bg/30 flex h-8 rounded-full p-1 transition-colors dark:hover:bg-white/30"
          aria-current-value="Go to Github"
        >
          <Icon name="mdi:github" size="24px" />
        </NuxtLink>

        <ClientOnly>
          <button
            class="hover:bg-dark-base-bg/30 flex h-8 rounded-full p-1 transition-colors dark:hover:bg-white/30"
            type="button"
            :aria-label="switchThemeAriaLabel"
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
    </div>

    <div class="px-8 pb-6">
      <slot />
    </div>
  </div>
</template>
