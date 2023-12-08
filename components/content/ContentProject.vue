<template>
  <BaseHeadline :text="props.name" type="h4" />
  <RichTextRenderer :document="props.description.json" />
</template>

<script setup lang="ts">
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
type Props = {
  __typename: 'ContentProject'
  name: string
  description: {
    json: {
      content: []
      data: {}
    }
  }
}

const props = defineProps<Props>()
</script>
