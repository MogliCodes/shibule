<template>
  <section>
    <BaseContainer class="flex flex-col gap-8">
      <BaseHeadline :text="grid.layoutGrid.title" type="h3" />
      <div class="grid gap-8" :class="gridClass">
        <div v-for="element in grid.layoutGrid.contentCollection.items">
          <component
            v-bind="element"
            :is="resolveComponentByTypename(element.__typename)"
          ></component>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
type Props = {
  grid: {
    sys: {
      id: string
    }
    layoutGrid: {
      title: string
      columnCount: number
    }
  }
}

const props = defineProps<Props>()

const { data: grid, pending } = await useAsyncGql({
  operation: 'queryLayoutGridById',
  variables: {
    id: props.grid.sys.id,
  },
})

const gridClass = computed<string>(() => {
  console.log(grid?.value?.layoutGrid?.columnCount)
  switch (grid?.value?.layoutGrid?.columnCount) {
    case 2:
      return 'grid-cols-1 md:grid-cols-2'
    case 3:
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    case 4:
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    default:
      return 'w-full'
  }
})
function resolveComponentByTypename(typename) {
  switch (typename) {
    case 'ElementText':
      return resolveComponent('ElementText')
    case 'MediaFile':
      return resolveComponent('MediaFile')
    case 'ContentMagazineIssue':
      return resolveComponent('ContentMagazineIssue')
  }
}
</script>
