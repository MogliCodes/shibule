<template>
  <MediaYoutubeChannel
    v-if="props.resource === 'channel'"
    :id="props.id"
    :api-key="props.apiKey"
    :max-results="props.maxResults"
    :layout="props.layout"
  />
  <MediaYoutubePlaylist
    v-if="props.resource === 'playlist'"
    :id="props.id"
    :api-key="props.apiKey"
    :max-results="props.maxResults"
  />
</template>

<script setup lang="ts">
type Props = {
  resource: 'channel' | 'playlist'
  id: string
  apiKey: string
  maxResults: number
  layout: string
}
const props = defineProps<Props>()
</script>
