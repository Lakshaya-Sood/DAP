<script>
  import SearchResult from './SearchResult.vue';

  export default {
    name: 'modal',
    props: ['tourData'],
    components: {
      SearchResult
    },
    data () {
      return {
        searchText: '',
        selectedSortOption: 'Menu'
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
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
            <p class="sort-para">Sort by: 
              <span class="sort-option">Menu</span> | 
              <span class="sort-option">Recommended</span> | 
              <span class="sort-option">Newest First</span> | 
              <span class="sort-option">A-Z</span>
              {{tourData.x}}
            </p>
            <SearchResult />
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
    width: 85%;
  }
  .sort-option{
    color: #0099ff;
  }
</style>