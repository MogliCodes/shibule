<template>
  <div class="flex flex-col gap-20">
    <BaseContainer v-if="project" class="flex flex-col">
      <div class="flex gap-20">
        <div class="w-1/2 text-xl font-light leading-8">
          <BaseHeadline
            class="mb-20"
            :text="project?.contentProject?.name"
            type="h1"
          />
          <RichTextRenderer
            :document="project?.contentProject?.description?.json"
          />
        </div>
        <div class="w-1/2 flex bg-gray-200 p-20 rounded-xl">
          <img :src="project?.contentProject?.logo?.url" alt="" />
        </div>
      </div>
    </BaseContainer>
    <BaseGrid
      v-for="(grid, index) in project?.contentProject?.sectionsCollection
        ?.items"
      :key="index"
      :grid="grid"
    />
  </div>
</template>

<script setup lang="ts">
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
const route = useRoute()

type Project = {
  contentProject: {
    title: string
    description: {
      json: object
    }
    logo: {
      url: string
    }
  }
}
const projectId = route.params.slug
const { data: project }: { project: Project } = await useAsyncGql({
  operation: 'queryProjectById',
  variables: {
    id: projectId,
  },
})
</script>
