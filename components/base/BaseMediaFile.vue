<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
type Props = {
  sys: {
    id: string
  }
  title: string
  file: {
    url: string
  }
}

defineProps<Props>()
</script>
