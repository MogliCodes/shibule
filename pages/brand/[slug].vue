<template>
  <BaseContainer>
    <h1 class="text-3xl font-bold">{{ brand.contentBrand.title }}</h1>
    {{ brand }}
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
