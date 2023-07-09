<script setup lang="ts">
useHead({
  title: 'Frontend News Thailand',
  meta: [
    { name: 'description', content: 'Frontend news that everyone loves.' },
  ],
  bodyAttrs: {
    class: 'bg-[#1e1e1e] tracking-wide md:text-xl',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
