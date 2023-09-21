<template>
  <div>
    <BaseContainer>
      {{ page }}
      <h1 class="font-bebas text-8xl">{{ page?.pageGeneric.title }}</h1>

      <BaseGrid
        v-for="(grid, index) in page?.pageGeneric.sectionsCollection.items"
        :key="index"
        :grid="grid"
      />
    </BaseContainer>
    <BaseContainer>
      <pre>
      {{ page }}
    </pre
      >
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const pageId = route.params.id
const { data: page } = await useAsyncGql({
  operation: 'queryPageById',
  variables: {
    id: pageId,
  },
})
</script>
