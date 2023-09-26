<template>
  <component :class="fontClass" :is="type">{{ props.text }}</component>
</template>

<script setup lang="ts">
type Props = {
  text: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const props = defineProps<Props>()

const STYLE_MAP = {
  h1: 'text-8xl font-serif font-bold',
  h2: 'text-8xl font-serif font-bold',
  h3: 'text-2xl font-serif font-bold',
}

const fontClass = computed<string>(() => {
  return STYLE_MAP[props.type]
})
</script>

<style></style>
