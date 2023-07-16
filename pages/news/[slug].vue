<script setup lang="ts">
import authors from '../../db/authors.json'

function splitDocTags(tags: string) {
  return tags.split(',')
}

function getAuthor(username: string) {
  return authors.find(author => author.username === username)
}
</script>

<template>
  <div class="flex flex-col gap-6 pt-6">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc" class="flex flex-col gap-6 nuxt-content" />

      <hr class="border-light-base-text dark:border-dark-base-text border-opacity-40 mt-6">

      <div class="flex justify-between text-sm md:text-base">
        <span class="text-light-base-text dark:text-white text-opacity-40 dark:text-opacity-40">
          {{ doc.createdDate }}
        </span>

        <div class="flex gap-4">
          <span v-for="(tag, index) of splitDocTags(doc.tags)" :key="tag + index" class="flex hover:underline decoration-[#41B883] cursor-pointer">
            <span class="text-[#41B883]">#</span>
            <span>{{ tag }}</span>
          </span>
        </div>
      </div>

      <div class="flex items-center gap-4 md:gap-8 pt-4">
        <div class="flex flex-col gap-1 items-center">
          <img width="100" class="rounded-full w-20 md:w-[6.25rem]" :src="getAuthor(doc.username)?.avatar" alt="author-image">
          <span>Author</span>
        </div>

        <div class="flex flex-col gap-2 pb-[29.5px]">
          <div class="flex gap-4 items-center">
            <span class="md:text-xl">{{ getAuthor(doc.username)?.username }}</span>
            <NuxtLink :to="getAuthor(doc.username)?.socialLink.github">
              <svg class="fill-white w-4 md:w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </NuxtLink>
          </div>
          <span class="text-xs md:text-sm font-light">{{ getAuthor(doc.username)?.bio }}</span>
        </div>
      </div>
    </ContentDoc>
  </div>
</template>
