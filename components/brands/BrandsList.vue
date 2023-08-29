<template>
  <div class="container mx-auto mb-12">
    <h2 class="text-4xl font-bold">The Brands</h2>
  </div>
  <div class="container mx-auto grid grid-cols-4 gap-8">
    <div
      v-for="(brand, index) in brands.contentBrandCollection.items"
      :key="index"
      class="rounded border p-4"
    >
      <h3 class="text-xl font-bold">{{ brand.title }}</h3>
      <img :src="brand?.logo" alt="" />
      <RichTextRenderer :document="brand?.description?.json" />
    </div>
  </div>
</template>

<script setup>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

const { data: brands } = await useAsyncGql({
  operation: 'queryBrands',
})
</script>
