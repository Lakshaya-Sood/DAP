import $ from "jquery";
import axios from 'axios';

import TourManager from './TourManager';

let managerobj = new TourManager();

function fetchToursList(){
    return axios.get( window.myAppsConfig.FETCH_TOURS_LIST_URL )
        .then( response => {
            return response.data
        })
        .catch( err => {
            console.log(err);
            return [{}];
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


