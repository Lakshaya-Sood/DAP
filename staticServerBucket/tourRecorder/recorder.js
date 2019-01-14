window.addEventListener("message", receiveMessage, false);

var origin = '';
var target = null;
function receiveMessage(event) {
  console.log(event);
  origin = event.origin;
  target = event.target;
  fetch("/tour", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(event.data) // body data type must match "Content-Type" header
  })
    .then(response => response.json())
    .then(
      () => {
        console.log("done");
        fetch("/publish", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json"
            // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            appId: "90cf4642-2f52-41b3-aebd-f46eacc2bfc5"
          })
        }).then(response => response.json())
        .then(res => {
          sendDataToParent(res);
        }, ()=>{
            console.log('fail');
        });
      },
      () => {
        console.log("failed");
      }
    );
}

function sendDataToParent(data) {
  debugger;
  target.postMessage(
    {data: 'data'}
  )
}