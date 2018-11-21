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
                    <td id="${tour.tour_id}">${tour.tour_name}</td>
                </tr>
            `
        });

        this.setTours( tourObjList )
         
        $("body").append(`
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span id="closeBtn" class="close">&times;</span>
                            <table>
                                <thead>  
                                    <tr>
                                        <th>Select Tours from following</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${listHtml}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `)
        
        $('#closeBtn').on("click",() => {
            $('#myModal').css({'display': 'none'})
        })

        tours.forEach( tour => {
            $('#'+tour.tour_id).on("click", () => connectManager(tour.tour_name));
        })    
    }
}