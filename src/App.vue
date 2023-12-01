<script setup>
import ModalIntro from './components/ModalIntro.vue';
import ColorSelect from './components/ColorSelect.vue';
import Wrapped from './components/Wrapped.vue';
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center mb-12">
      <img src="/spotify.svg" class="w-32 mr-6 mb-4" alt="Spotify logo" />
      <h1 class="text-7xl font-bold">
        2023
        <span
          class="
            relative
            top-2
            inline-block
            mr-1.5
            ml-3
            -rotate-[20deg]
            font-hand
            text-4xl
            align-top
          "
          >Re</span
        >Wrapped
      </h1>
    </div>
    <ColorSelect />
    <Wrapped />
    <ModalIntro />
    <img
      src="/bg-page.png"
      class="fixed bottom-0 left-0 w-full z-[-10] opacity-50"
      alt="Page background"
    />
  </div>
</template>
