<script>
  import ModalBox from './ModalBox.vue';

  export default {
    name: 'app',
    components: {
      ModalBox,
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
  };
</script>

<template>
  <div id="app">
    <ModalBox
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>