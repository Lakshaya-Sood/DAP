<script>
  import SearchResult from './SearchResult.vue';
  import Loading from './Loading.vue';
  import constants from './constants';
  export default {
    name: 'modal',
    props: {
      tourData: {
        required: true
      },
      managerObj: {
        required: true
      }
    },
    components: {
      SearchResult,
      Loading
    },
    watch: {
      tourData: function () {
        this.tourList= JSON.parse(JSON.stringify(this.tourData))
      },
      managerObj: function (){
        let self = this
        setTimeout(()=>{self.tourManager = self.managerObj}, 7000);
        
        //this.managerObj.tours[0].__proto__.start()
      },
      currentSortOption: function() {
        switch( this.currentSortOption ) {
          case 1:
            break;
          case 2:
            break;
          case 3:
            this.tourList = this.tourList.sort(function(a, b){
              if(a.created_date < b.created_date) { return 1; }
              if(a.created_date > b.created_date) { return -1; }
              return 0;
            })
            break;
          case 4:
            this.tourList = this.tourList.sort(function(a, b){
              if(a.tour_name < b.tour_name) { return -1; }
              if(a.tour_name > b.tour_name) { return 1; }
              return 0;
            })
            break;
          default:
            break;
        }
      }
    },
    data () {
      return {
        searchText: '',
        currentSortOption: 1,
        tourList: this.tourData,
        crossImageSrc: constants.crossIcon_b64,
        tourManager: null
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      changeSortOption(val){
        this.currentSortOption = val;
      },
      changeSortOptionByChevron( val ) {
        if( val=='right' && this.currentSortOption < 3 ) {
          this.currentSortOption+=1
        } 
        if( val=='left' && this.currentSortOption > 1 ) {
          this.currentSortOption-=1
        }
      },
      clearSearchText(){
        this.searchText = '';
      }
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <div class="modal-header-title">
            Lets take a tour to see how things work!
            </div>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <input v-model="searchText" class="tour-search-input">
            <img v-bind:src="crossImageSrc" class="cross-icon" v-if="searchText.length" v-on:click="clearSearchText()"/>
            <p class="sort-para">Sort by :
              <span v-bind:class="{ 'sort-option': true, 'selected-option': currentSortOption==1 }" v-on:click="changeSortOption(1)">&nbsp;&nbsp;Recommended&nbsp;&nbsp;</span>  |  
              <span v-bind:class="{ 'sort-option': true, 'selected-option': currentSortOption==2 }" v-on:click="changeSortOption(2)">&nbsp;&nbsp;Newest First&nbsp;&nbsp;</span>  |  
              <span v-bind:class="{ 'sort-option': true, 'selected-option': currentSortOption==3 }" v-on:click="changeSortOption(3)">&nbsp;&nbsp;A-Z&nbsp;&nbsp;</span>
            </p>
            <div v-if="!!!tourManager" ><Loading /></div>
            <div v-if="!!tourManager" ><SearchResult /></div>
            <svg class="icon icon-chevron-right" v-on:click="changeSortOptionByChevron('right')"><use xlink:href="#icon-chevron-right"></use></svg>
            <symbol id="icon-chevron-right" viewBox="0 0 19 28">
              <title>chevron-right</title>
              <path d="M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
            </symbol>
            <svg class="icon icon-chevron-left" v-on:click="changeSortOptionByChevron('left')"><use xlink:href="#icon-chevron-left"></use></svg>
            <symbol id="icon-chevron-left" viewBox="0 0 21 28">
              <title>chevron-left</title>
              <path d="M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
            </symbol>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
  }
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 85%;
    border-radius: 7px;
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
  }
  .modal-header-title{
    position: relative;
    top: 10px;
    left: 6%;
    width: 80%;
    font-weight: bold;
    font-size: 27px;
  }
  .modal-header {
    padding: 15px;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    color: #002D72;
    justify-content: space-between;
    border-bottom: 1px solid #88888854;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 42px;
    cursor: pointer;
    color: black;
    background: transparent;
    position: relative;
    right: 1%;
  }
  .tour-search-input {
    width: 85%;
    height: 33px;
    position: relative;
    left: 6%;
    background: url("data:image/png;base64,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") no-repeat scroll;
    background-size: 30px;
    padding: 5px;
    background-position: 5px 5px;
    text-indent: 60px;
    box-shadow: 1px 1px #888888;
    font-size: 25px;
  }
  .sort-para{
    position: relative;
    left: 6%;
    color: #888888;
    font-weight: bold;
    width: 86%;
    display: -webkit-inline-box;
    margin-top: 40px;
    margin-bottom: 25px;
  }
  .sort-option{
    color: #0099ff;
    cursor: pointer
  }
  .selected-option{
    color: #888888;
    font-size: 16px;
  }
  .icon {
    display: inline-block;
    stroke: #0099ff;
    fill: #0099ff;
    width: 25px;
    height: 280px;
    cursor: pointer;
    padding: 15px;
  }
  .icon:hover {
    background-color: rgba(0, 0, 0, 0.11);
  }
  .icon-chevron-right {
    float: right;
  }
  .icon-chevron-left{
    float: left;
  }
  .cross-icon{
    float: right;
    width: 35px;
    position: relative;
    top: 5px;
    right: 9%;
    cursor: pointer;
  }
  .cross-icon:hover{
    width: 38px;
    top: 4px;
  }
</style>