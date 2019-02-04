window.addEventListener("message", receiveMessage, false);

var origin = '';
var sender = null;
function receiveMessage(event) {
  origin = event.origin;
  sender = event.source;
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
        fetch("/publish", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json"
            // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            appId: "fe4a95df-aeb0-4c2c-b318-404aa5b9bf19"
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

function sendDataToParent(res) {
  sender.postMessage(
    {
      notifyParent: true,
      result: res
    },
    origin
  )
}