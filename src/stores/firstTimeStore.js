import { defineStore } from 'pinia';

export const useFirstTimeStore = defineStore('firstTime', {
  state: () => ({
    showModal: localStorage.getItem('firstVisit') !== 'true',
  }),
  actions: {
    setShowModal(value) {
      this.showModal = value;
    },
  },
});
