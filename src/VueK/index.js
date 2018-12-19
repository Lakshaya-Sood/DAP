
import Vue from 'vue';
import App from './App.vue';

var buttonVisible = true;

var html_to_insert = `
    <div id="toggelR">&#x25BC</div>
    <button id='tourBttn'>
        Quick Tour
    </button>
    <div id="tourApp"></div>`
var bodyElement = document.getElementsByTagName('body')[0]
bodyElement.insertAdjacentHTML('beforeend', html_to_insert);

function showButton(){
    document.getElementById("toggelR").innerHTML = "&#x25BC";
    document.getElementById("tourBttn").style.display = 'block';
    document.getElementById("toggelR").style.bottom = '45.5px';
}
function hideButton(){
    document.getElementById("toggelR").innerHTML = "&#x25B2";
    document.getElementById("tourBttn").style.display = 'none';
    document.getElementById("toggelR").style.bottom = '-3.5px';
}

var VueApp = new Vue({
    el: '#tourApp',
    render: h => h(App)
})

document.getElementById("tourBttn").addEventListener("click", function(){
    hideButton()
    VueApp.$children[0].isModalVisible = (!VueApp.$children[0].isModalVisible)
});
document.getElementById("toggelR").addEventListener("click", function(){
    buttonVisible = !buttonVisible;
    buttonVisible ? showButton() : hideButton();
});