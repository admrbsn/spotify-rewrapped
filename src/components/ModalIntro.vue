<script setup>
import { useFirstTimeStore } from '../stores/firstTimeStore';
import { computed } from 'vue';

const store = useFirstTimeStore();
const showModal = computed(() => store.showModal);

const handleClose = () => {
  localStorage.setItem('firstVisit', 'true');
  store.setShowModal(false);
};
</script>

<template>
  <div
    v-if="showModal"
    class="
      modal
      fixed
      inset-0
      bg-black bg-opacity-50
      flex
      justify-center
      items-center
    "
  >
    <div class="w-full max-w-3xl bg-white p-8 rounded-xl text-center">
      <h2 class="mb-6 text-black text-2xl font-bold text-center">
        👋 Hey there, music aficionado!
      </h2>
      <p class="mb-6 text-black leading-relaxed">
        We know you've been eagerly waiting all year for Spotify's Wrapped
        feature, where you can proudly flaunt your impeccable music taste to the
        world. But let's be real – your kids hijacked your account, and now
        "Baby Shark" is your top song of the year. Yikes! Fear not, for Spotify
        Rewrapped is here to save your street cred. We let you creatively adjust
        your listening history so you can share a list that's more "you" and
        less "nursery rhyme". Go on, give it a spin and reclaim your musical
        throne. After all, what's a little white lie between friends?
      </p>
      <button
        @click="handleClose"
        class="py-3 px-6 bg-black text-white rounded-full font-bold"
      >
        Got it!
      </button>
    </div>
  </div>
</template>
