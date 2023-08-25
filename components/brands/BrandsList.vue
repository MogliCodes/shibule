<template>
  <div class="container mx-auto mb-12">
    <h2 class="font-bold text-4xl">The Brands</h2>
  </div>
  <div class="container mx-auto grid grid-cols-4 gap-8">
    <div v-for="brand in brands.contentBrandCollection.items" class="border rounded p-4">
      <h3 class="font-bold text-xl">{{ brand.title }}</h3>
      <img :src="brand?.logo" alt="">
      <RichTextRenderer :document="brand?.description?.json" />
    </div>
  </div>
</template>

<script setup>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const { data: brands } = await useAsyncGql({
  operation: "queryBrands",
});
</script>
