<template>
  <section>
    <BaseContainer class="mb-10">
      <BaseHeadline text="The Brands" type="h2" />
    </BaseContainer>
    <BaseContainer
      class="grid content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
    >
      <NuxtLink
        v-for="(brand, index) in brands.contentBrandCollection?.items"
        :key="index"
        :to="`/brand/${brand.sys.id}`"
        class="relative self-start"
      >
        <img :src="brand?.cardImage?.url" alt="" />
      </NuxtLink>
    </BaseContainer>
  </section>
</template>

<script setup>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

const { data: brands } = await useAsyncGql({
  operation: 'queryBrands',
})
</script>
