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
