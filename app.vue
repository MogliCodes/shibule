<template>
  <div>
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/app/AppFooter.vue'

const slugFormatted = 'startseite'
const { data: pageData } = await useAsyncGql({
  operation: 'pageBySlug',
  variables: { slug: slugFormatted, preview: true },
})

const { data: reviews } = await useAsyncGql({
  operation: 'queryMusicReviews',
})

console.log(pageData, reviews)
</script>
