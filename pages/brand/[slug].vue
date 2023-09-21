<template>
  <BaseContainer>
    <h1 class="text-8xl font-bebas">{{ brand.contentBrand.title }}</h1>
    <pre>
      {{ brand }}
    </pre>
  </BaseContainer>
</template>

<script setup lang="ts">
const route = useRoute()

const brandId = route.params.slug
const { data: brand } = await useAsyncGql({
  operation: 'queryBrandBySlug',
  variables: {
    id: brandId,
  },
})
</script>
