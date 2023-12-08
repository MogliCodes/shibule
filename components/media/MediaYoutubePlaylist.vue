<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
    <div v-for="video in data.items">
      <client-only>
        <component
          is="script"
          id="youtube-iframe-js-api-script"
          src="https://www.youtube.com/iframe_api"
        />
        <iframe
          class="w-full aspect-video mb-8 rounded-xl"
          :src="iframeSrc(video.id.videoId)"
        />
        <p class="mb-2">{{ formatDate(video.snippet.publishedAt) }}</p>
        <BaseHeadline class="mb-4" type="h3" :text="video.snippet.title" />
        <p>{{ video.snippet.description }}</p>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  resource: 'playlist'
  id: string
  apiKey: string
  maxResults: number
}

const props = defineProps<Props>()
const API_KEY = props.apiKey
const { data, pending } = await useFetch(
  `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${props.id}&key=${API_KEY}`,
)

function iframeSrc(videoId) {
  return `https://www.youtube.com/embed/${videoId}`
}

function formatDate(_date) {
  // Create a Date object from the input string
  const date = new Date(_date)

  // Format the date in German format
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  }

  const germanDateFormat = new Intl.DateTimeFormat('de-DE', options)
  return germanDateFormat.format(date)
}
</script>
