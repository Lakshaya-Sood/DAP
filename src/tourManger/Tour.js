import hopscotch from 'hopscotch';
import 'hopscotch/dist/css/hopscotch.min.css'
export default class Tour {
    constructor(name,stepDefURI){
        this.name = name;
        this.stepDefURI = stepDefURI;
        this.stepData = null;
    }

    start() {
        script(`${window.appConfig.rootFolderLink}tour.${this.stepDefURI}.js`)
        .then(() => {
            console.log(`step defination for tour: ${this.name} is successfully fecthed. Filename: tour.${this.stepDefURI}.js`)
            this.stepData = window[this.stepDefURI];
            hopscotch.startTour(this.stepData);
        })
        .catch((err) => {
            console.log('Error occured: ',err)
        })
    }

    stop() {
    
    }  
}

