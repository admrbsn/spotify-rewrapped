<template>
  <button
    @click="downloadAsImage"
    class="
      flex
      items-center
      justify-center
      mx-auto
      py-3
      px-8
      bg-white
      text-black
      rounded-full
      font-bold
    "
  >
    <img src="/icon-download.svg" class="w-6 mr-2" alt="Download icon" />
    Download
  </button>
</template>

<script setup>
import { ref } from 'vue';
import html2canvas from 'html2canvas';

const downloadAsImage = async () => {
  const content = document.querySelector('.content-to-download');
  const canvas = await html2canvas(content);
  const image = canvas.toDataURL('image/jpeg', 1.0);
  downloadImage(image, 'my-2023-rewrapped.jpg');
};

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement('a');
  fakeLink.download = fileName;
  fakeLink.href = blob;
  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
  fakeLink.remove();
};
</script>
