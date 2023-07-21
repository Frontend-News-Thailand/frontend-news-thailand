<script setup lang="ts">
const previewImage = ref<string | null>(null)

const imageMode = ref<'fit' | 'contain'>('fit')

function drawImage() {
  const canvas = document.createElement('canvas')
  canvas.width = 1200
  canvas.height = 627

  const ctx = canvas.getContext('2d')

  const image1 = new Image()

  image1.onload = function () {
    if (imageMode.value === 'fit') {
      ctx?.drawImage(image1, 0, 0, 1200, 627)
    }
    else {
      const ratio = image1.naturalWidth / image1.naturalHeight
      const width = canvas.width
      const height = width / ratio
      ctx?.drawImage(image1, 0, 0, width, height)
    }

    const image2 = new Image()

    image2.onload = function () {
      ctx?.drawImage(image2, 32, 32, 377, 175)

      canvas.toDataURL('image/jpeg')
      previewImage.value = canvas.toDataURL('image/jpeg')
    }

    image2.src = '/og-logo.png'
  }

  image1.src = '/news/making-a-frontend-framework-tier-list-history-of-js-spa-frameworks-and-libraries/image-1.jpeg'
}

function downloadImage(imageSrc: string) {
  const a = document.createElement('a')
  a.href = imageSrc
  a.download = 'og.jpeg'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

function toggleImageMode() {
  imageMode.value = imageMode.value === 'contain' ? 'fit' : 'contain'
}

onMounted(() => {
  drawImage()
})

watch(imageMode, () => drawImage())
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <BaseTitle class="text-center">
      Generate OG
    </BaseTitle>
    <div v-if="previewImage" class="flex flex-col gap-4">
      <img :src="previewImage" alt="preview-image">
      <button @click="downloadImage(previewImage)">
        Download Image
      </button>
      <button @click="toggleImageMode">
        Mode: {{ imageMode }}
      </button>
    </div>
  </div>
</template>
