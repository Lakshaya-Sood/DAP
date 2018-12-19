<script>
  export default {
    name: 'searchResult',
    props: {
      tourManager: {
        required: true
      },
      tourList: {
        required: true
      }
    },
    watch: {
      tourList: function () {
        
      },
      tourManager: function (){
      }
    },
    data(){
      return {
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      startTour(tourName) {
        let selectedTour = this.tourManager.tours.filter((item)=>item.name == tourName )
        console.log(selectedTour)
        selectedTour[0].__proto__.start(selectedTour[0].name,selectedTour[0].stepDefURI);
        this.close();
      }
    },
  };
</script>
<template>
    <div class="result-whole-style">
      <div class="grid-container-main">
        <div v-for="(item, index) in tourList" class="grid-item-main grid-item-opt" v-on:click="startTour(item.tour_name)">
          <span class="tour-opt-text">{{item.tour_name}}</span>
        </div>
      </div>
    </div>
</template>
<style>
.result-whole-style{
    width: 91%;
    height: 33px;
}
.grid-container-main {
  width: 90%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  text-align: left;
  left: 7%;
  position: relative;
  grid-auto-flow: column;
}
.grid-item-main {
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(50px, auto);
  padding-right: 10px
}
.grid-col-2{
  grid-column: 2 / 4;
}
.grid-container-child{
  width: 100%;
  display: grid;
}
.grid-col-1{
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.grid-col-2{
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.grid-item-header{
  color: #888888;
  font-size: 18px;
  font-weight: bold;
}
.grid-item-opt{
  color: #0099ff;
  font-size: 15px;
  padding: 10px;
}
.tour-opt-text{
  cursor: pointer;
}
.tour-opt-text:hover{
  text-decoration:underline 
}
</style>