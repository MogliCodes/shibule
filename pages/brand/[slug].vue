<template>
  <BaseContainer v-if="brand">
    <h1 class="font-bebas mb-20 text-8xl">{{ brand?.contentBrand.title }}</h1>
    <div class="w-1/4 text-xl font-light leading-loose">
      <RichTextRenderer
        class=""
        :document="brand?.contentBrand?.description?.json"
      />
    </div>
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
