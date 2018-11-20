import $ from "jquery";

import TourManager from './TourManager';

let managerobj = new TourManager();

function fetchToursList(){
    return new Promise((resolve,reject)=>{
        resolve(window.appConfig.tours)
    })
}

function connectManager( tourName ) {
    let selectedTourObj = managerobj.tours.filter( tour => {return tour.name == tourName})
    
    managerobj.setCurrentTour(selectedTourObj[0])
}

function displayToursList() {
    fetchToursList().then( data => {
        managerobj.renderTours( data, connectManager )
    });
}

$('body').append(`<button id='tourBttn'>Take Tour</button><div id='tourTable'></div>`);
$('#tourBttn').on( "click", displayToursList);


