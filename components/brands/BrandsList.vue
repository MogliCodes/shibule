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
      class="card relative self-start rounded-3xl shadow-xl"
    >
      <img :src="brand?.cardImage?.url" alt="" />
    </NuxtLink>
  </BaseContainer>
</template>

<script setup>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

const { data: brands } = await useAsyncGql({
  operation: 'queryBrands',
})
</script>

<style>
.card:after {
  border-radius: 50px;
  content: '';
  position: absolute;
  background-color: black;
  top: 8px;
  left: -10px;
  right: 10px;
  bottom: -8px;
  z-index: -1;
}
</style>
