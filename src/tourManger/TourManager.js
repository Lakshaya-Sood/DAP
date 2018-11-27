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
        
        tours.forEach((tour, index) => {
            tourObjList.push(new Tour(tour.tour_name,tour.tour_id))

            listHtml += `
                <tr>
                    <td id="${tour.tour_id}" style="padding: 15px;cursor:pointer;">${index+1}. ${tour.tour_name}</td>
                </tr>
            `
        });

        this.setTours( tourObjList )
         
        $("body").append(`
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span id="closeBtn" class="close">&times;</span>
                            <table style="width:100%">
                                <thead style="color: white;background-color: #002D72;font-size:20px">  
                                    <tr>
                                        <th style="padding: 15px;">Select Tours from following</th>
                                    </tr>
                                </thead>
                                <tbody style="font-size:18px">
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