<template>
  <div class="p-8 bg-gray-100 rounded-xl p-8 shadow-xl h-full">
    <img class="block mb-8" :src="cover?.url" alt="" />
    <RichTextRenderer :document="description?.json" />
    <a :href="download?.file?.url">{{ download?.title }}</a>
  </div>
</template>

<script setup lang="ts">
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

type Props = {
  __typename: string
  cover: {
    url: string
  }
  download: {
    title: string
    file: {
      url: string
    }
  }
  issueNumber: number
  description: {
    json: string
  }
}

defineProps<Props>()
</script>
