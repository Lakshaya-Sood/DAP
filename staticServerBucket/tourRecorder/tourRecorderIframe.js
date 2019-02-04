window.addEventListener("message", receiveMessage, false);

var origin;
function receiveMessage(event){
    // var protocol = location.protocol;
    // var slashes = protocol.concat("//");
    // var origin = slashes.concat(window.location.hostname);
    // debugger;
    // if (event.origin !== origin)
    //     return;
    var data = event.data;
    if(data.notifyParent) {
        clearRecorderIframe();
        window.parent.postMessage(
            data.result,
            origin
        );
    } else{
        origin = event.origin;
        openRecorderIframe(event.data);
    }
}

function clearRecorderIframe() {
    var frame = document.getElementById('recorder-iframe');
    frame.parentNode.removeChild(frame);
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