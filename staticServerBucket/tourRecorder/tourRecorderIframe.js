window.addEventListener("message", receiveMessage, false);

function receiveMessage(event){
    // var protocol = location.protocol;
    // var slashes = protocol.concat("//");
    // var origin = slashes.concat(window.location.hostname);
    // debugger;
    // if (event.origin !== origin)
    //     return;
    debugger;
    console.log(event.data);
    openRecorderIframe(event.data);
    // sendDataToRecorder(event.data);
}

function openRecorderIframe(data) {
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.id = "recorder-iframe";
    iframe.name = "recorder-iframe";
    iframe.src = "http://localhost:3000/recorder.html";
    iframe.onload = function() {
        sendDataToRecorder(data);
    }
    document.body.appendChild(iframe);
}

function sendDataToRecorder(data) {
    var receiver = document.getElementById('recorder-iframe').contentWindow;
    receiver.postMessage(data, "http://localhost:3000/");
}