<template>
  <div class="flex flex-col gap-20">
    <BaseContainer v-if="brand" class="flex flex-col">
      <div class="flex gap-20">
        <div class="w-1/2 text-xl font-light leading-loose">
          <BaseHeadline
            class="mb-20"
            :text="brand.contentBrand.title"
            type="h1"
          />
          <RichTextRenderer
            class=""
            :document="brand?.contentBrand?.description?.json"
          />
        </div>
        <div class="w-1/2 flex bg-gray-200 p-20 rounded-xl">
          <img :src="brand?.contentBrand?.logo?.url" alt="" />
        </div>
      </div>
    </BaseContainer>
    <BaseGrid
      v-for="(grid, index) in brand?.contentBrand?.sectionsCollection.items"
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
