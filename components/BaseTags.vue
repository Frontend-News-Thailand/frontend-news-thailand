<script setup lang="ts">
const props = defineProps<{ tags: string }>()

function splitDocTags(tags: string) {
  return tags.split(',')
}
</script>

<template>
  <div class="flex gap-4">
    <span
      v-for="(tag, index) of splitDocTags(props.tags)"
      :key="tag + index"
      class="flex hover:underline decoration-primary cursor-pointer"
    >
      <span class="text-primary">#</span>
      <span>{{ tag }}</span>
    </span>
  </div>
</template>
