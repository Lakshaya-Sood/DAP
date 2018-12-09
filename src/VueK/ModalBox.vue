<script>
  import SearchResult from './SearchResult.vue';

  export default {
    name: 'modal',
    props: {
      tourData: {
        required: true
      }
    },
    components: {
      SearchResult
    },
    watch: {
      tourData: function () {
        this.tourList= this.tourData
      }
    },
    data () {
      return {
        searchText: '',
        currentSortOption: 1,
        tourList: this.tourData
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      changeSortOption(val){
        this.currentSortOption = val;
        console.log(this.tourList)
      },
      changeSortOptionByChevron(val){
        let newSortOpt = this.currentSortOption
        if( val=='right' && this.currentSortOption < 4 ) {
          this.currentSortOption+=1
        } 
        if( val=='left' && this.currentSortOption > 1 ) {
          this.currentSortOption-=1
        }
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
            <p class="sort-para">Sort by :  
              <span class="sort-option" v-on:click="changeSortOption(1)">&nbsp;&nbsp;Menu&nbsp;&nbsp;</span>  |  
              <span class="sort-option" v-on:click="changeSortOption(2)">&nbsp;&nbsp;Recommended&nbsp;&nbsp;</span>  |  
              <span class="sort-option" v-on:click="changeSortOption(3)">&nbsp;&nbsp;Newest First&nbsp;&nbsp;</span>  |  
              <span class="sort-option" v-on:click="changeSortOption(4)">&nbsp;&nbsp;A-Z&nbsp;&nbsp;</span>
            </p>
            <SearchResult />
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
    margin-bottom: 25px;
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
    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/554px-Vector_search_icon.svg.png) no-repeat scroll;
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
  .icon {
    display: inline-block;
    stroke: #0099ff;
    fill: #0099ff;
    width: 25px;
    height: 300px;
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
</style>