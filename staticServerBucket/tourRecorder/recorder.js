window.addEventListener("message", receiveMessage, false);

function receiveMessage(event){
    console.log('cross domain done: ');
    console.log(event.data);
    fetch('/tour', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
            tour_name: 'tour name',
            app_id: '90cf4642-2f52-41b3-aebd-f46eacc2bfc5',
            steps: event.data
        }), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(()=>{
        console.log('done');
    }, ()=>{
        console.log('failed');
    });
}