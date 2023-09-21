<template>
  <div class="container mx-auto mb-12">
    <h2 class="font-bebas text-8xl font-bold">The Brands</h2>
  </div>
  <div class="container mx-auto grid grid-cols-4 gap-8">
    <NuxtLink
      v-for="(brand, index) in brands.contentBrandCollection.items"
      :key="index"
      :to="`/brand/${brand.sys.id}`"
      class="self-start rounded-xl p-8 shadow-xl"
    >
      <figure class="mb-5 w-20">
        <img :src="brand?.logo?.url" alt="" />
      </figure>
      <h3 class="text-xl font-bold">{{ brand.title }}</h3>
      <RichTextRenderer :document="brand?.description?.json" />
    </NuxtLink>
  </div>
</template>

<script setup>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

const { data: brands } = await useAsyncGql({
  operation: 'queryBrands',
})
</script>
