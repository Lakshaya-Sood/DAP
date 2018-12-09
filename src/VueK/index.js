
import Vue from 'vue';
import App from './App.vue';

var html_to_insert = `
    <button id='tourBttn'>
        Quick Tour
    </button>
    <div id="tourApp"></div>`

var bodyElement = document.getElementsByTagName('body')[0]
bodyElement.insertAdjacentHTML('beforeend', html_to_insert);

var VueApp = new Vue({
    el: '#tourApp',
    render: h => h(App)
})
document.getElementById("tourBttn").addEventListener("click", function(){
    VueApp.$children[0].isModalVisible = (!VueApp.$children[0].isModalVisible)
});