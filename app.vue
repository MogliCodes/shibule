<template>
  <div>
    <AppHeader />
    <BrandsList />
  </div>
</template>

<script setup>
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
