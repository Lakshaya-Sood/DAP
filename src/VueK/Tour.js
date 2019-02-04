import hopscotch from 'hopscotch';
import 'hopscotch/dist/css/hopscotch.min.css'
import Artyom from 'artyom.js';
const Talker = new Artyom();

export default class Tour {
    constructor(name,stepDefURI){
        this.name = name;
        this.stepDefURI = stepDefURI;
        this.stepData = null;
    }

    handlePlayContent(contentToPlay) {
        Talker.say(contentToPlay);
    }

    start(name,stepDefURI) {
        //hopscotch.startTour({"id":"secondTour","steps":[{"target":"header","placement":"bottom","title":"Heading","content":"Heading of our application"},{"target":"aurora","placement":"right","title":"Aurora Northen Lights Image","content":"Can be seen in the high-latitude regions."},{"target":"good_morning","placement":"bottom","title":"Good Morning","content":"Expressing good wishes on meeting or parting during the morning."}]})
        script(`${window.appConfig.rootFolderLink}tour.${stepDefURI}.js`)
        .then(() => {
            console.log(`step defination for tour: ${name} is successfully fecthed. Filename: tour.${stepDefURI}.js`)
            //this.stepData = window[stepDefURI];
            const stepDefs = window[stepDefURI];
            stepDefs.steps = stepDefs.steps.map((tr)=>{
                tr.onCTA = this.handlePlayContent.bind(this, tr.content);
                tr.onShow = this.handlePlayContent.bind(this, tr.content);
                tr.showCTAButton = true;
                tr.ctaLabel = 'play';
                return tr;
            });
            console.log('window[stepDefURI]: ',stepDefs);
            hopscotch.startTour(stepDefs);
        })
        .catch((err) => {
            console.log('Error occured: ',err)
        })
    }

    stop() {
    
    }  
}