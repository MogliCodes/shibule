<template>
  <section
    class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-xl max-w-3xl p-10 border-2 border-black">
      <BaseHeadline type="h3" text="Cookie Consent" class="mb-4" />
      <p class="mb-4">
        cookies Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        dolorem expedita facere numquam quia! A aliquid dicta eum ipsa quas quis
        similique sit voluptate? Assumenda beatae cum dolor eaque earum eius
        exercitationem, fuga in numquam perspiciatis quae, quibusdam ut
        veritatis!
      </p>
      <div class="">
        <div class="bg-gray-100 px-4 py-2 rounded-xl flex justify-between">
          <span>YouTube</span>
          <div
            class="bg-white rounded-full h-6 w-12 relative cursor-pointer"
            @click="toggleItem"
          >
            <span
              :class="youtube ? 'right-1' : 'left-1'"
              class="bg-black absolute top-1 h-4 w-4 rounded-full transition-all"
            ></span>
          </div>
        </div>
      </div>
      <BaseButton class="mt-4" />
    </div>
  </section>
</template>
<script setup>
const youtube = ref(false)
const toggleItem = () => {
  youtube.value = !youtube.value
}
</script>
