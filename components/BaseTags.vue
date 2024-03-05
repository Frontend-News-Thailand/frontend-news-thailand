<script setup lang="ts">
const props = defineProps<{ tags: string }>()

function splitDocTags(tags: string) {
  return tags.split(',')
}
</script>

<template>
  <div class="flex flex-wrap gap-x-4 gap-y-2">
    <span
      v-for="(tag, index) of splitDocTags(props.tags)"
      :key="tag + index"
      class="decoration-primary flex cursor-pointer hover:underline"
    >
      <span class="text-primary">#</span>
      <span>{{ tag }}</span>
    </span>
  </div>
</template>
