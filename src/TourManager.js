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

    renderTours( data, connectManager ){
        let tourObjList = [],
            listHtml = "";
        
        data.forEach( element => {
            tourObjList.push(new Tour(element.name,element.info))

            listHtml += `
                <tr>
                    <td>${element.name}</td>
                    <td id="${element.info}">${element.info}</td>
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
            
        data.forEach( element => {
            $('#'+element.info).on("click", () => connectManager(element.name));
        })    
    }
}