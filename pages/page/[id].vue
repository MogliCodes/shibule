<template>
  <div class="flex flex-col gap-8">
    <BaseContainer>
      <BaseHeadline :text="page?.pageGeneric.title" type="h1" />
    </BaseContainer>
    <BaseContainer>
      <p v-if="pending">Data loading is pending</p>
    </BaseContainer>
    <BaseGrid
      v-for="(grid, index) in page?.pageGeneric.sectionsCollection.items"
      :key="index"
      :grid="grid"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const pageId = route.params.id
const { data: page, pending } = await useAsyncGql({
  operation: 'queryPageById',
  variables: {
    id: pageId,
  },
})
</script>
