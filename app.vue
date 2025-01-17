<template>
  <div>
    <AppHeader />
    <NuxtLayout class="text-gray-800 relative z-10">
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
    <!--    <AppCookieConsent />-->
    <div class="bg-color bg-amber-300"></div>
    <div class="bg-image"></div>
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

<style>
.bg-color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  mix-blend-mode: multiply;
}
.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/white-grungy-wall-textured-background.jpg');
  background-size: cover;
  z-index: -1;
  opacity: 0.9;
}
</style>
