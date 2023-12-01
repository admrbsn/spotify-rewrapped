<script setup>
import { ref, nextTick, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
  marginLeft: {
    type: String,
    default: 'ml-0',
  },
});
const emit = defineEmits(['update:modelValue']);
const isHovering = ref(false);
const editing = ref(false);
const inputRef = ref(null);

async function startEditing() {
  editing.value = true;
  await nextTick();
  if (inputRef.value) {
    inputRef.value.focus();
  }
}

function stopEditing() {
  editing.value = false;
}

function updateValue(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <div class="relative flex items-center">
    <span
      @click="startEditing"
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
      v-show="!editing"
      :class="[
        'inline-block w-full py-0.5 px-1.5 rounded-md cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis hover:bg-white/25',
        marginLeft,
      ]"
    >
      {{ modelValue }}
    </span>
    <input
      ref="inputRef"
      v-show="editing"
      :value="modelValue"
      @input="updateValue"
      @keydown.enter="stopEditing"
      @blur="stopEditing"
      type="text"
      :class="[
        'w-full px-1.5 py-[2px] bg-transparent rounded-md focus:bg-white/75 cursor-pointer focus:outline-none transition-all',
        marginLeft,
      ]"
    />
    <img
      v-show="isHovering && !editing"
      src="/icon-edit.svg"
      class="absolute w-6 right-0"
      alt="Edit icon"
    />
  </div>
</template>
