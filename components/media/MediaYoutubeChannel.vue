<template>
  <div class="flex flex-col gap-40">
    <div v-for="video in data?.items">
      <client-only>
        <div
          :class="{
            'grid grid-cols-2 gap-10': props.layout === 'thumbnail-description',
          }"
        >
          <div>
            <component
              is="script"
              id="youtube-iframe-js-api-script"
              src="https://www.youtube.com/iframe_api"
            />
            <iframe
              class="w-full aspect-video rounded-xl"
              :src="iframeSrc(video.id.videoId)"
            />
          </div>
          <div>
            <p class="mb-2">{{ formatDate(video.snippet.publishedAt) }}</p>
            <BaseHeadline
              class="!text-4xl mb-4"
              type="h3"
              :text="video.snippet.title"
            />
            <p class="text-xl">{{ video.snippet.description }}</p>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  resource: 'channel'
  id: string
  apiKey: string
  maxResults: number
  layout: string
}

const props = defineProps<Props>()

const API_KEY = props.apiKey
const CHANNEL_ID = props.id
const maxResults = props.maxResults || 10
const { data, pending } = await useFetch(
  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`,
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
  }

  const germanDateFormat = new Intl.DateTimeFormat('de-DE', options)
  return germanDateFormat.format(date)
}
</script>
