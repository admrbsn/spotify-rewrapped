<script setup>
import { ref } from 'vue';
import { sharedState } from '../state.js';
import { colors } from '../colors.js';

// Generate Tailwind background color class names
const colorClasses = ref(Object.keys(colors).map((color) => 'bg-' + color));

const selectColor = (colorClass) => {
  sharedState.selectedColor = colorClass;
};
</script>

<template>
  <div class="flex items-center justify-center font-bold mb-4">
    Select a color
    <div class="flex gap-4 ml-5">
      <div
        v-for="(colorClass, index) in colorClasses"
        :key="index"
        class="w-6 h-6 rounded-full cursor-pointer"
        :class="[
          colorClass,
          { 'border border-[#4e4e4e]': colorClass === 'bg-black' },
        ]"
        @click="selectColor(colorClass)"
      ></div>
    </div>
  </div>
</template>
