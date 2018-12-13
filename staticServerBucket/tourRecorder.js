(function () {
    
    var addEmptyIFrame = function() {
        var iframe = document.createElement('iframe');
        iframe.style.display = "none";
        iframe.id = "dap-tour-recorder-iframe";
        document.body.appendChild(iframe);
    }

    var injectVueScript = function() {
        var myScript = document.createElement("script");
        myScript.src = "https://cdn.jsdelivr.net/npm/vue";
        myScript.onload = function() {
            renderTourRecorderTemplate();
        };
        document.head.appendChild(myScript);
    };

    var tourRecorderForm = function() {
        return `
        <div style="background:white;height:100%">
            <div style="width:100%;height:40px;padding:8px;
                background:#1591f7;text-align:center">
                <h2 style="color:white">Tour Recorder</h3>                    
            </div>
            <div style="margin-top:15px;padding:8px;">
                <button style="width:100%;height:40px"
                    v-on:click="createNewTour">
                Create new tour</button>
            </div>
            <div v-if="showTourGeneratorForm" style="margin-top:15px;padding:8px;">
                <div>
                    <input type="text" style="width:100%;height:40px;padding:8px"
                        placeholder="enter tour name"/>
                </div>
                <div style="margin-top:15px;text-align:center;">
                    <button style="height:40px;border:none;
                        background:green;color:white"
                        v-on:click="startRecording">
                        Start Recording</button>
                </div>
            </div>
        </div>
        `;
    }

    var tourRecordingPanel = function() {
        return `
            <div style="background:white;height:100%">
                <div style="width:100%;height:40px;padding:8px;
                    background:#1591f7;text-align:center">
                    <h2 style="color:white">Recording</h3>                    
                </div>
                <div style="width:50%;box-sizing:border-box;float:left;padding:8px">
                    <button style="width:100%;height:40px;border:none;
                        background:red;color:white"
                        v-on:click="abortRecording">Abort</button>
                </div>
                <div style="width:50%;box-sizing:border-box;float:left;padding:8px">
                    <button style="width:100%;height:40px;border:none;
                        background:green;color:white">Done</button>
                </div>
            </div>
        `;
    }

    var renderTourRecorderTemplate = function() {
        var markUp = `
            <div id="tour-recorder-container">
                <div v-if="!tourRecording"
                    style="height:500px;width:300px;top:0;right:0;position:fixed;
                    box-shadow: -2px 4px 8px grey;z-index:999">
                    ${tourRecorderForm()}
                </div>
                <div v-if="tourRecording"
                    style="width:300px;height:100px;top:0;right:0;position:fixed;
                        box-shadow: -2px 4px 8px grey;z-index:999">
                        ${tourRecordingPanel()}
                </div>
            </div>
        `;
        var tourRecorderElement = document.createElement("div");
        tourRecorderElement.innerHTML = markUp;
        document.body.appendChild(tourRecorderElement);
        var app = new Vue({
            el: '#tour-recorder-container',
            data: {
                showTourGeneratorForm: false,
                tourRecording: false,
                tourDetails: []
            },
            methods: {
                createNewTour: function() {
                    this.showTourGeneratorForm = true;
                },
                startRecording: function() {
                    this.tourRecording = true;
                    document.addEventListener('click', function(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        console.log('x path: ', this.getElementXPath(ev.target));
                    }.bind(this));

                    document.addEventListener('mouseover', function(ev){
                        var element = ev.target;
                        element.style.border = "2px solid #1591f7";
                    })
            
                    document.addEventListener('mouseout', function(ev){
                        var element = ev.target;
                        element.style.border = "none";
                    })
                },
                abortRecording: function() {
                    this.tourRecording = false;
                    this.showTourGeneratorForm = false;
                },
                getElementXPath: function(element) {
                    var xpath = '';
                    for ( ; element && element.nodeType == 1; element = element.parentNode ) {
                        var id = $(element.parentNode)
                        .children(element.tagName)
                        .index(element) + 1;
                        id > 1 ? (id = '[' + id + ']') : (id = '');
                        xpath = '/' + element.tagName.toLowerCase() + id + xpath;
                    }
                    return xpath;
                }
            }
          });
    }

    addEmptyIFrame();
    injectVueScript();

})();
