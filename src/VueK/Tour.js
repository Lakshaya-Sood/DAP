import hopscotch from 'hopscotch';
import 'hopscotch/dist/css/hopscotch.min.css'
export default class Tour {
    constructor(name,stepDefURI){
        this.name = name;
        this.stepDefURI = stepDefURI;
        this.stepData = null;
    }

    start(name,stepDefURI) {
        hopscotch.startTour({"id":"secondTour","steps":[{"target":"header","placement":"bottom","title":"Heading","content":"Heading of our application"},{"target":"aurora","placement":"right","title":"Aurora Northen Lights Image","content":"Can be seen in the high-latitude regions."},{"target":"good_morning","placement":"bottom","title":"Good Morning","content":"Expressing good wishes on meeting or parting during the morning."}]})
        // script(`${window.appConfig.rootFolderLink}tour.${stepDefURI}.js`)
        // .then(() => {
        //     console.log(`step defination for tour: ${name} is successfully fecthed. Filename: tour.${stepDefURI}.js`)
        //     //this.stepData = window[stepDefURI];
        //     hopscotch.startTour(window[stepDefURI]);
        // })
        // .catch((err) => {
        //     console.log('Error occured: ',err)
        // })
    }

    stop() {
    
    }  
}