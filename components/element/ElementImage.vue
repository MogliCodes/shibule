<template>
  <pre>
    {{ attrs }}
  </pre>
  <img :src="image.url" alt="" />
</template>

<script setup lang="ts">
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

type Props = {
  __typename
  image: {
    title
    description
    url
    filename
  }
}

defineProps<Props>()
</script>
