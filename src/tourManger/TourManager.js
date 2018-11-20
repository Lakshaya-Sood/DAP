import Tour from './Tour';
import $ from 'jquery';

export default class TourManager {
    constructor() {
        this.tours = [];
        this.currentTour = null;
    }

    setTours( tourObjList ) {
        this.tours = tourObjList
    }

    setCurrentTour( tourObject) {
        this.currentTour = tourObject
        tourObject.start()
    }

    renderTours( tours, connectManager ){
        let tourObjList = [],
            listHtml = "";
        
        tours.forEach( tour => {
            tourObjList.push(new Tour(tour.tour_name,tour.tour_id))

            listHtml += `
                <tr>
                    <td>${tour.tour_name}</td>
                    <td id="${tour.tour_id}">Take This Tour</td>
                </tr>
            `
        });

        this.setTours( tourObjList )
         
        $("#tourTable").html(`
                    <table>
                        <thead>  
                            <tr>
                                <th>Name</th>
                                <th>Steps</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${listHtml}
                        </tbody>
                    </table>
                `)
            
        tours.forEach( tour => {
            $('#'+tour.tour_id).on("click", () => connectManager(tour.tour_name));
        })    
    }
}