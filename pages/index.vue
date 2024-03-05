<script setup lang="ts">
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

function sortCreatedAtArticles(articles: any[]) {
  return [...articles].sort(
    (a, b) => dayjs(b.createdDate, 'DD/MM/YYYY').diff(dayjs(a.createdDate, 'DD/MM/YYYY')),
  )
}
</script>

<template>
  <div class="container mx-auto max-w-3xl pt-6">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ContentList v-slot="{ list }" path="/news">
        <NuxtLink
          v-for="(article, index) in sortCreatedAtArticles(list)"
          :key="article._path"
          class="group flex cursor-pointer flex-col gap-6 p-4 first:md:col-span-2 first:md:flex-row"
          :to="article._path"
        >
          <nuxt-img
            :src="article.coverImage"
            class="cover-image--primary-shadow rounded-xl"
            width="640"
            height="480"
            fit="inside"
            :fetchpriority="index === 0 ? 'high' : 'low'"
            sizes="sm:100vw md:464px"
            :alt="article.title"
          />
          <div class="flex flex-col gap-4">
            <BaseTitle class="group-hover:text-primary transition-colors duration-300 ease-in-out">
              {{ article.title }}
            </BaseTitle>
            <div class="flex gap-4">
              <BaseSecondaryText>{{ article.createdDate }}</BaseSecondaryText>
              <BaseTags class="ml-auto justify-end" :tags="article.tags" />
            </div>
          </div>
        </NuxtLink>
      </ContentList>
    </div>
  </div>
</template>
