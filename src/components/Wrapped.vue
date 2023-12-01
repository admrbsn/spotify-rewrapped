<script setup>
import { useFormStore } from '../stores/formStore';
import { sharedState } from '../state.js';
import { onMounted, watch, computed } from 'vue';
import Editable from './Editable.vue';
import DownloadButton from './DownloadButton.vue';

const formStore = useFormStore();

const bgImageUrl = computed(() => {
  const colorName = sharedState.selectedColor.split('-')[1];
  return `/bg-${colorName}-img.png`;
});

onMounted(() => {
  formStore.loadFromLocalStorage();
});

watch(
  () => formStore.formData,
  () => {
    formStore.saveToLocalStorage();
  },
  { deep: true }
);
</script>

<template>
  <div
    class="
      content-to-download
      relative
      max-w-2xl
      my-8
      mx-auto
      text-black
      rounded-lg
    "
    :class="sharedState.selectedColor"
  >
    <div class="grid grid-cols-10">
      <div class="col-span-4">
        <img :src="bgImageUrl" class="h-full object-cover" />
      </div>
      <div class="col-span-6 grid grid-cols-2 gap-4 py-14 pr-4">
        <div>
          <h2 class="text-lg font-medium mb-3">Top Artists</h2>
          <ol class="list-decimal -ml-[2px] pl-5 text-[14px]">
            <li><Editable v-model="formStore.artists['1']" /></li>
            <li><Editable v-model="formStore.artists['2']" /></li>
            <li><Editable v-model="formStore.artists['3']" /></li>
            <li><Editable v-model="formStore.artists['4']" /></li>
            <li><Editable v-model="formStore.artists['5']" /></li>
          </ol>
        </div>

        <div>
          <h2 class="text-lg font-medium mb-3">Top Songs</h2>
          <ol class="list-decimal =ml-[2px] pl-5 text-[14px]">
            <li><Editable v-model="formStore.songs['1']" /></li>
            <li><Editable v-model="formStore.songs['2']" /></li>
            <li><Editable v-model="formStore.songs['3']" /></li>
            <li><Editable v-model="formStore.songs['4']" /></li>
            <li><Editable v-model="formStore.songs['5']" /></li>
          </ol>
        </div>

        <div class="text-xl">
          <h2 class="text-lg font-medium mb-3">Minutes Listened</h2>
          <Editable v-model="formStore.minutes" marginLeft="-ml-1.5" />
        </div>

        <div class="text-xl">
          <h2 class="text-lg font-medium mb-3">Top Genre</h2>
          <Editable v-model="formStore.genre" marginLeft="-ml-1.5" />
        </div>
      </div>
    </div>
    <div
      class="
        absolute
        bottom-0
        w-full
        flex
        items-center
        justify-between
        py-4
        px-3
      "
    >
      <img src="/spotify.svg" class="w-16 invert" alt="Spotify logo" />
      <span class="text-black text-xs uppercase">spotify.com/wrapped</span>
    </div>
  </div>
  <DownloadButton />
</template>
