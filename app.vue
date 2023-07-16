<script setup lang="ts">
useHead({
  title: 'Frontend News Thailand',
  meta: [
    { name: 'description', content: 'Frontend news that everyone loves.' },
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
