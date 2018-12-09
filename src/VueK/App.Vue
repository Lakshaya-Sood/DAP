<script>
  import ModalBox from './ModalBox.vue';
  const x = {
      "a": 1
  }
  export default {
    name: 'app',
    components: {
      ModalBox
    },
    data () {
      return {
        isModalVisible: false,
        tourData:[]
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      fetchData() {
        return new Promise(( resolve, reject ) => {
          console.log(window)
          if( window && window.appConfig && window.appConfig.tours ) {
            //resolve( window.appConfig.tours )
            resolve( [{"tour_id":"adfff840-3d6b-4b1f-92be-8170b0071d7f","tour_name":"About Tabs on homepage"},{"tour_id":"8c065324-c99c-4250-9440-6c61a3c33d09","tour_name":"Know general components on UI"},{"tour_id":"e0f7c6c3-8d8e-4a09-98c9-1709139fc0a5","tour_name":"Template Display Area Walkthrough"}] )
          } else {
            resolve( [{"tour_id":"adfff840-3d6b-4b1f-92be-8170b0071d7f","tour_name":"About Tabs on homepage"},{"tour_id":"8c065324-c99c-4250-9440-6c61a3c33d09","tour_name":"Know general components on UI"},{"tour_id":"e0f7c6c3-8d8e-4a09-98c9-1709139fc0a5","tour_name":"Template Display Area Walkthrough"}] )
            //reject('tour not find in window object')
          }          
        })
      }
    },
    beforeMount(){
        this.fetchData().then( tours => {
          this.tourData = tours
        }).catch( err => {
          console.log( err )
        })
    }
  };
</script>

<template>
  <div id="app">
    <ModalBox
      v-show="isModalVisible"
      :tourData="tourData"
      @close="closeModal"
    />
  </div>
</template>