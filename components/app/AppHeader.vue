<template>
  <header>
    <NuxtLink :to="`/`">
      <div id="lottie-container" class="lottie-container"></div>
    </NuxtLink>
  </header>
</template>

<script setup>
onMounted(() => {
  const item = bodymovin.loadAnimation({
    wrapper: document.getElementById('lottie-container'),
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'shibule-logo.json',
  })
  setTimeout(() => {
    item.goToAndPlay(0, true)
  }, 100)
})
</script>

<style>
.lottie-container {
  max-width: 200px;
  margin: 0 auto;
}
</style>
