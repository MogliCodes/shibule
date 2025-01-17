<template>
  <div>
    <RichTextRenderer :document="text?.json" />
  </div>
</template>

<script setup lang="ts">
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

type Props = {
  text: {
    json: string
  }
}
defineProps<Props>()
</script>

<style>
h2 {
  @apply text-3xl font-serif font-bold !text-4xl mb-4;
  //font-size: 2rem;
  //font-weight: 700;
  //margin-bottom: 1rem;
}
</style>
