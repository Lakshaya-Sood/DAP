<script>
  import ModalBox from './ModalBox.vue';
  import TourManager from './TourManager';
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
        tourData:[],
        managerObj: null
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
          if( window && window.appConfig && window.appConfig.tours ) {
            resolve( window.appConfig.tours )
            //resolve( [{"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"}] )
          } else {
            // resolve( [{"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"},{"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"},{"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"},
            // {"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"},{"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"},{"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"},
            // {"tour_id":"25e2bd55-f0f4-4eeb-a960-833c5ec04788","tour_name":"First Tour","tour_created_on":"2018-10-13T10:12:56.076Z"},{"tour_id":"ce8a03ea-306b-47ef-8f55-66bf5e3b7f86","tour_name":"Second Tour","tour_created_on":"2018-09-13T10:12:54.076Z"},{"tour_id":"c2ec0119-37fe-493a-9faf-b2205368d247","tour_name":"Third Tour","tour_created_on":"2018-11-13T10:12:52.076Z"}] )
            reject('tour not find in window object')
          }          
        })
      }
    },
    beforeMount(){
        this.fetchData().then( tours => {
          this.tourData = tours;
          this.managerObj = new TourManager();
          this.managerObj.setTours(tours);
        }).catch( err => {
          console.log( err )
        })
    }
  };
</script>

<template>
  <div id="app123">
    <ModalBox
      v-show="isModalVisible"
      :tourData="tourData"
      :managerObj="managerObj"
      @close="closeModal"
    />
  </div>
</template>

<style>
        #tourBttn {
            position: fixed;
            z-index: 9999;
            right: 1.5%;
            bottom:0px;
            cursor: pointer;
            border-radius: 4px;
            background-color: #f4511e;
            border: none;
            color: #FFFFFF;
            text-align: center;
            font-size: 30px;
            padding: 10px;
            width: 212px;
            cursor: pointer;
            margin-bottom: -5px;
        }
        #toggelR {
          position: fixed;
          z-index: 9999;
          right: 1.5%;
          bottom: 45.5px;
          width: 20px;
          cursor: pointer;
          background-color: white;
          border: 1px solid black;
          color: black;
          text-align: center;
          font-size: 13px;
          cursor: pointer;
        }
</style>
