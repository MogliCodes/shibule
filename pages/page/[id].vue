<template>
  <BaseContainer>
    <h1 class="text-8xl font-bebas">{{ page.pageGeneric.title }}</h1>
    {{ pageId }}
    <pre>
      {{ page }}
    </pre>
  </BaseContainer>
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
