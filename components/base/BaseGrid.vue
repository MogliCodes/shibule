<template>
  <section>
    <BaseContainer>
      <h2 class="text-3xl font-bold">{{ grid.title }}</h2>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
type Props = {
  grid: {
    title: string
  }
}

defineProps<Props>()
</script>
