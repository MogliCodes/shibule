<template>
  <div v-if="data.type === 'youtube'">
    <MediaYoutube
      :id="data.id"
      :resource="data.resource"
      :api-key="data.apiKey"
      :max-results="data.maxResults"
    />
  </div>
</template>

<script setup lang="ts">
import MediaYoutube from '~/components/media/MediaYoutube.vue'

type Props = {
  __typename: string
  data: {
    type: 'youtube'
    resource: 'channel'
    id: string
    apiKey: string
    maxResults: number
  }
}

defineProps<Props>()
</script>
