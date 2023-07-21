<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  title: 'Frontend News Thailand',
  meta: [
    { name: 'description', content: 'Frontend news that everyone loves.' },
    { property: 'og:title', content: 'Frontend News Thailand' },
    { property: 'og:image', content: `${config.public.baseUrl}/og.jpg` },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
  ],
  bodyAttrs: {
    class: 'light-base-bg dark:bg-dark-base-bg tracking-wider',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
