import $ from "jquery";
import axios from 'axios';

import TourManager from './TourManager';

const APP_KEY_TO_FETCH_CONFIG = 'GreetingApp';

let FETCH_CONFIG_URL = 'http://localhost:3000/[APP_ID]/config';
FETCH_CONFIG_URL = FETCH_CONFIG_URL.replace('[APP_ID]', APP_KEY_TO_FETCH_CONFIG);

axios.get(FETCH_CONFIG_URL)
    .then( response => {
        window.myAppsConfig = response.data;

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
    })
    .catch( err => {
        console.log("All went to Abyss ERRoR",err)
        document.getElementsByTagName('body')[0].innerHTML = "OOOPS"
    })


