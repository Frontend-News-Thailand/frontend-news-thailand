<script setup lang="ts">
const previewImage = ref<string | null>(null)

onMounted(() => {
  const canvas = document.createElement('canvas')
  canvas.width = 1200
  canvas.height = 627

  const ctx = canvas.getContext('2d')

  const image1 = new Image()

  image1.onload = function () {
    ctx?.drawImage(image1, 0, 0, 1200, 627)

    const image2 = new Image()

    image2.onload = function () {
      ctx?.drawImage(image2, 32, 32, 377, 175)

      canvas.toDataURL('image/jpeg')
      previewImage.value = canvas.toDataURL('image/jpeg')
    }

    image2.src = '/og-logo.png'
  }

  image1.src = '/news/making-a-frontend-framework-tier-list-history-of-js-spa-frameworks-and-libraries/image-1.jpeg'
})

function downloadImage(imageSrc: string) {
  const a = document.createElement('a')
  a.href = imageSrc
  a.download = 'og.jpeg'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <BaseTitle>Generate OG</BaseTitle>
    <template v-if="previewImage">
      <img :src="previewImage" alt="preview-image">
      <button @click="downloadImage(previewImage)">
        Download Image
      </button>
    </template>
  </div>
</template>
