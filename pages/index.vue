<template>
  <div class="flex flex-col gap-20">
    <section class="h-screen">
      <div id="lottie-container" class="h-screen"></div>
    </section>
    <BrandsList />
    <ContentRecent />
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
  const item = bodymovin.loadAnimation({
    wrapper: document.getElementById('lottie-container'),
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: 'hero.json',
  })
  setTimeout(() => {
    item.goToAndPlay(0, true)
  }, 100)
})
</script>
