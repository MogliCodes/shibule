<template>
  <div class="py-40 flex flex-col gap-8">
    <section class="">
      <BaseContainer>
        <BaseHeadline :text="page?.pageGeneric.title" type="h1" />
      </BaseContainer>
    </section>
    <BaseContainer>
      <p v-if="pending">Data loading is pending</p>
    </BaseContainer>
    <BaseGrid
      v-for="(grid, index) in page?.pageGeneric.sectionsCollection?.items"
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
