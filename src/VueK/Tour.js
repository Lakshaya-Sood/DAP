import hopscotch from 'hopscotch';
import 'hopscotch/dist/css/hopscotch.min.css'
export default class Tour {
    constructor(name,stepDefURI){
        this.name = name;
        this.stepDefURI = stepDefURI;
        this.stepData = null;
    }

    start(name,stepDefURI) {
        script(`${window.appConfig.rootFolderLink}tour.${stepDefURI}.js`)
        .then(() => {
            console.log(`step defination for tour: ${name} is successfully fecthed. Filename: tour.${stepDefURI}.js`)
            //this.stepData = window[stepDefURI];
            hopscotch.startTour(window[stepDefURI]);
        })
        .catch((err) => {
            console.log('Error occured: ',err)
        })
    }

    stop() {
    
    }  
}