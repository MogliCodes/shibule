<template>
  <header class="py-10 pl-10">
    <NuxtLink :to="`/`">
      <img class="w-20" src="/shibule_logo_white.svg" alt="" />
    </NuxtLink>
    <div
      class="absolute right-10 top-10 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50"
    >
      <div
        v-show="isNavActive"
        class="absolute right-0 top-0 z-10 h-20 w-20 rounded-full bg-gray-50 transition-transform duration-500"
      >
        <nav
          class="fixed inset-0 flex flex-col items-center justify-center bg-gray-50"
        >
          <div
            v-for="(item, index) in navigationItems"
            v-show="isNavActive"
            :key="`nav-item-${index}`"
          >
            <NuxtLink
              class="block py-2 md:py-4"
              :to="getPagePath(item)"
              @click="toggleNavigation"
            >
              <span
                class="font-serif text-3xl md:text-5xl font-bold hover:text-pink-500"
                >{{ item.title || item.internalName }}</span
              >
            </NuxtLink>
          </div>
        </nav>
      </div>
      <button
        class="relative z-20 flex h-full w-full items-center justify-center"
        @click="toggleNavigation"
      >
        <svg
          width="16"
          height="8"
          fill="none"
          stroke="black"
          stroke-width="2.61"
          stroke-linecap="round"
          class="overflow-visible"
        >
          <path
            d="M 0 0 H 16"
            class="transition-transform"
            :style="
              isNavActive
                ? 'transform: translateY(4px) rotate(45deg); transform-origin: 8px 0px;'
                : 'transform: none; transform-origin: 8px 0;'
            "
          ></path>
          <path
            d="M 0 8 H 16"
            class="transition-transform"
            :style="
              isNavActive
                ? 'transform: translateY(-4px) rotate(-45deg); transform-origin: 8px 8px;'
                : 'transform: none; transform-origin: 8px 0;'
            "
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
const mainNavId = '7sbU2zGZ07WUQjyVMHfL0P'
const { data: mainNavigation } = await useAsyncGql({
  operation: 'queryNavigationById',
  variables: {
    id: mainNavId,
  },
})

const navigationItems =
  mainNavigation?.value?.uiNavigation?.navigationItemsCollection?.items || []

// onMounted(() => {
//   const item = bodymovin.loadAnimation({
//     wrapper: document.getElementById('lottie-container'),
//     animType: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'shibule-logo.json',
//   })
//   setTimeout(() => {
//     item.goToAndPlay(0, true)
//   }, 100)
// })

const isNavActive = ref(false)

function toggleNavigation() {
  isNavActive.value = !isNavActive.value
}

function getPagePath(navItem) {
  let pagePath = ''
  console.log('navItem', navItem.__typename)
  switch (navItem.__typename) {
    case 'PageGeneric':
      pagePath += '/page/'
      console.log(pagePath)
      break
    case 'ContentBrand':
      pagePath += '/brand/'
      break
  }
  return pagePath.concat(navItem.sys.id)
}
</script>

<style>
.lottie-container {
  max-width: 200px;
  margin: 0 auto;
}
</style>
