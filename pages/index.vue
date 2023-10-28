<template>
  <div class="flex flex-col gap-20">
    <section class="h-screen">
      <div id="lottie-container" class="h-screen"></div>
    </section>
    <BrandsList />
    <ContentRecent />
    <BaseContainer>
      <div class="grid grid-cols-3 gap-20">
        <div v-for="video in data.items">
          <client-only>
            <component
              is="script"
              id="youtube-iframe-js-api-script"
              src="https://www.youtube.com/iframe_api"
            />
            <iframe
              class="w-full aspect-video mb-8"
              :src="iframeSrc(video.id.videoId)"
            />
            <p class="mb-2">{{ formatDate(video.snippet.publishedAt) }}</p>
            <BaseHeadline class="mb-4" type="h3" :text="video.snippet.title" />
            <p>{{ video.snippet.description }}</p>
          </client-only>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
<script setup lang="ts">
import YouTube from 'vue3-youtube'

onMounted(() => {
  const item = bodymovin.loadAnimation({
    wrapper: document.getElementById('lottie-container'),
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: 'hero.json',
  })
  setTimeout(() => {
    item.goToAndPlay(0, true)
  }, 100)
})
const API_KEY = 'AIzaSyD6lvINlJVVF5RYhKl_a_sxmCdf6YGW1Js'
const CHANNEL_ID = 'UCAp8Ui5vt9XAShrsxN5vGGg'
const { data, pending } = await useFetch(
  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`,
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
