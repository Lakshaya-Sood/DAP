import Tour from './Tour';

export default class TourManager {
    constructor() {
        this.tours = [];
        this.currentTour = null;
    }

    setTours( tours ) {
        tours.forEach( tour=> {
            this.tours.push(new Tour(tour.tour_name,tour.tour_id))
        });
    }

    setCurrentTour( tourObject) {
        this.currentTour = tourObject
        tourObject.start()
    }
}