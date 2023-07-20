<template>
  <div class="container mx-auto max-w-3xl pt-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ContentList v-slot="{ list }" path="/news">
        <NuxtLink
          v-for="article in list"
          :key="article._path"
          class="flex flex-col first:md:flex-row first:md:col-span-2 gap-6 p-4 cursor-pointer group"
          :to="article._path"
        >
          <nuxt-img
            :src="article.coverImage"
            sizes="sm:100vw md:464px"
          />
          <div class="flex flex-col gap-4">
            <BaseTitle class="group-hover:text-primary transition-colors duration-300 ease-in-out">
              {{ article.title }}
            </BaseTitle>
            <BaseSecondaryText>{{ article.createdDate }}</BaseSecondaryText>
            <BaseTags class="justify-end" :tags="article.tags" />
          </div>
        </NuxtLink>
      </ContentList>
    </div>
  </div>
</template>
