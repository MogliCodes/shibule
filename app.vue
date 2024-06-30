<template>
  <div>
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
    <!--    <AppCookieConsent />-->
  </div>
</template>

<script setup>
import AppFooter from '~/components/app/AppFooter.vue'
import AppCookieConsent from '~/components/app/AppCookieConsent.vue'

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
