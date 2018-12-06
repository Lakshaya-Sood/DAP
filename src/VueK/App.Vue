<script>
  import ModalBox from './ModalBox.vue';
  const x = {
      "a": 1
  }
  export default {
    name: 'app',
    components: {
      ModalBox,
    },
    data () {
      return {
        isModalVisible: false,
        tourData: ""
      };
    },
    beforeMount(){
        this.fetchData()
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      fetchData() {
        console.log("dashkjd'",x)
        this.tourData = x
        console.log("dashkjd'",this.tourData)
      }
    },
  };
</script>

<template>
  <div id="app">
    <ModalBox
      v-show="isModalVisible"
      :tourData=tourData
      @close="closeModal"
    />
  </div>
</template>