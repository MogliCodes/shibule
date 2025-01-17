<template>
  <img class="rounded-xl mb-4" :src="props?.teaserImage?.url" alt="" />
  <BaseHeadline :text="props.name" type="h4" />
  <RichTextRenderer :document="props.description.json" />
  <NuxtLink :to="`/project/${props.sys.id}`">Go to project</NuxtLink>
</template>

<script setup lang="ts">
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
type Props = {
  __typename: 'ContentProject'
  sys: {
    id: string
  }
  name: string
  description: {
    json: {
      content: []
      data: {}
    }
  }
  teaserImage: {
    url: string
  }
}

const props = defineProps<Props>()
</script>
