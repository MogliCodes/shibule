<template>
  <BaseContainer v-if="brand" class="flex flex-col gap-20">
    <BaseHeadline :text="brand.contentBrand.title" type="h1" />
    <div class="flex">
      <div class="w-1/2 text-xl font-light leading-loose">
        <RichTextRenderer
          class=""
          :document="brand?.contentBrand?.description?.json"
        />
      </div>
      <div class="w-1/2">
        <img :src="brand?.contentBrand?.logo?.url" alt="" />
      </div>
    </div>
  </BaseContainer>
  <BaseContainer>
    <BaseGrid
      v-for="(grid, index) in brand?.contentBrand?.sectionsCollection.items"
      :key="index"
      :grid="grid"
    />
  </BaseContainer>
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
