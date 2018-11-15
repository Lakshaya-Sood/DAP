import axios from 'axios';
import hopscotch from 'hopscotch';

export default class Tour {
    constructor(name,stepDefURI){
        this.name = name;
        this.stepDefURI = stepDefURI;
        this.stepData = null
    }

    start() {
        //fetch steps json here
        axios.get( window.myAppsConfig.FECH_TOUR_STEP_DEFINATION + '/' + this.stepDefURI )
        .then( response => {
            this.stepData = response.data;
            hopscotch.startTour(this.stepData);
        })
    }

    stop() {
    
    }  
}

