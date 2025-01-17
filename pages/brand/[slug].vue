<template>
  <div
    :style="`background-color: ${brand.contentBrand.backgroundColor}`"
    class="flex flex-col gap-20"
  >
    <BaseContainer v-if="brand" class="flex flex-col">
      <div class="flex justify-center pt-40">
        <div class="w-2/3 flex p-20 rounded-xl">
          <img :src="brand?.contentBrand?.logo?.url" alt="" />
        </div>
      </div>
    </BaseContainer>
    <BaseGrid
      class="last-of-type:pb-20"
      v-for="(grid, index) in brand?.contentBrand?.sectionsCollection?.items"
      :key="index"
      :grid="grid"
    />
  </div>
</template>

<script setup lang="ts">
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
const route = useRoute()

type Brand = {
  contentBrand: {
    title: string
    description: {
      json: object
    }
    logo: {
      url: string
    }
  }
}
const brandId = route.params.slug
const { data: brand }: { brand: Brand } = await useAsyncGql({
  operation: 'queryBrandBySlug',
  variables: {
    id: brandId,
  },
})
</script>
