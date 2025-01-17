<template>
  <section>
    <BaseContainer class="mb-10 text-center">
      <BaseHeadline text="The Brands" type="h1" />
    </BaseContainer>
    <BaseContainer class="row-1 flex justify-center">
      <NuxtLink
        v-for="(brand, index) in brands.contentBrandCollection?.items?.slice(
          0,
          2,
        )"
        :key="index"
        :to="`/brand/${brand.sys.id}`"
        class="brand-card relative self-start w-1/3"
      >
        <img :src="brand?.cardImage?.url" alt="" />
      </NuxtLink>
    </BaseContainer>
    <BaseContainer class="row-2 flex">
      <NuxtLink
        v-for="(brand, index) in brands.contentBrandCollection?.items?.slice(
          2,
          5,
        )"
        :key="index"
        :to="`/brand/${brand.sys.id}`"
        class="brand-card relative w-full"
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

<style scoped>
.row-1 .brand-card:nth-of-type(1) {
  rotate: 10deg;
}
.row-1 .brand-card:nth-of-type(2) {
  rotate: -8deg;
}

.row-2 .brand-card:nth-of-type(1) {
  rotate: -8deg;
}

.row-2 .brand-card:nth-of-type(2) {
  rotate: 5deg;
  transform: translateY(-30px);
}

.row-2 .brand-card:nth-of-type(3) {
  rotate: 15deg;
  transform: translateY(-100px);
}
</style>
