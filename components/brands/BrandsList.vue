<template>
  <BaseContainer class="mb-12">
    <BaseHeadline text="The Brands" type="h2" />
  </BaseContainer>
  <BaseContainer
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
  >
    <NuxtLink
      v-for="(brand, index) in brands.contentBrandCollection.items"
      :key="index"
      :to="`/brand/${brand.sys.id}`"
      class="self-start rounded-xl p-8 shadow-xl"
    >
      <figure class="mb-5">
        <img class="h-20" :src="brand?.logo?.url" alt="" />
      </figure>
      <h3 class="text-xl font-bold">{{ brand?.title }}</h3>
      <RichTextRenderer :document="brand?.description?.json" />
    </NuxtLink>
  </BaseContainer>
</template>

<script setup>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

const { data: brands } = await useAsyncGql({
  operation: 'queryBrands',
})
</script>
