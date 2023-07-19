<template>
  <div class="container mx-auto max-w-3xl pt-6">
    <div class="flex flex-col gap-4">
      <ContentList v-slot="{ list }" path="/news">
        <NuxtLink
          v-for="article in list"
          :key="article._path"
          class="flex flex-col md:flex-row gap-6 p-4 cursor-pointer group"
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
            <span class="line-clamp-2">{{ article.description }}</span>
            <BaseTags class="justify-end" :tags="article.tags" />
          </div>
        </NuxtLink>
      </ContentList>
    </div>
  </div>
</template>
