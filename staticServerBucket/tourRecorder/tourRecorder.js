(function () {
    
    var addEmptyIFrame = function() {
        var iframe = document.createElement('iframe');
        iframe.style.display = "none";
        iframe.id = "dap-tour-recorder-iframe";
        iframe.name = "dap-tour-recorder-iframe";
        document.body.appendChild(iframe);
        addScriptsToHiddenIframe();
    };

    var addScriptsToHiddenIframe = function() {
        var iframeHead = window.frames['dap-tour-recorder-iframe'].document
        .getElementsByTagName("head")[0];
        var myScript = document.createElement("script");
        myScript.src = "http://localhost:3000/tourRecorder/tourRecorderIframe.js";
        iframeHead.appendChild(myScript);
    };

    var addStyles = function() {
        var node = document.createElement('style');
        var css = `
            .tour-recorder-active-element {
                border: 1px solid #1591f7;
                cursor: pointer;
            }

            #recording-panel * {
                all: initial;
                box-sizing: border-box;
                font-family: inherit;
            }

            #recording-panel div {
                display: block;
            }

            #recording-panel button,
            .popper button {
                height: 40px;
                text-align: center !important;
                border: inherit;
                display: inline-block;
                padding: 6px 12px;
                margin-bottom: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.42857143;
                white-space: nowrap;
                background: #ccc;
                color: black;
                box-sizing: border-box;
                border-radius: 4px !important;
                vertical-align: middle;
                cursor:pointer !important;
            }

            .popper div {
                display: block;
                box-sizing: border-box;
            }

            .popper, .popper input, .popper textarea, .popper button {
                all: initial;
                font-family: inherit;
                box-sizing: border-box;
            }

            .popper,
            .tooltip {
                position: absolute;
                background: #FFC107;
                color: black;
                width: 150px;
                border-radius: 3px;
                box-shadow: 0 0 2px rgba(0,0,0,0.5);
                padding: 10px;
                text-align: center;
            }
            .popper .popper__arrow,
            .tooltip .tooltip-arrow {
                width: 0;
                height: 0;
                border-style: solid;
                position: absolute;
                margin: 5px;
            }
            .tooltip .tooltip-arrow,
            .popper .popper__arrow {
                border-color: rgb(21, 145, 247);
            }
            .popper[x-placement^="top"],
            .tooltip[x-placement^="top"] {
                margin-bottom: 5px;
            }
            .popper[x-placement^="top"] .popper__arrow,
            .tooltip[x-placement^="top"] .tooltip-arrow {
                border-width: 5px 5px 0 5px;
                border-left-color: transparent;
                border-right-color: transparent;
                border-bottom-color: transparent;
                bottom: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
            .popper[x-placement^="bottom"],
            .tooltip[x-placement^="bottom"] {
                margin-top: 5px;
            }
            .tooltip[x-placement^="bottom"] .tooltip-arrow,
            .popper[x-placement^="bottom"] .popper__arrow {
                border-width: 0 5px 5px 5px;
                border-left-color: transparent;
                border-right-color: transparent;
                border-top-color: transparent;
                top: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
            .tooltip[x-placement^="right"],
            .popper[x-placement^="right"] {
                margin-left: 5px;
            }
            .popper[x-placement^="right"] .popper__arrow,
            .tooltip[x-placement^="right"] .tooltip-arrow {
                border-width: 5px 5px 5px 0;
                border-left-color: transparent;
                border-top-color: transparent;
                border-bottom-color: transparent;
                left: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
            .popper[x-placement^="left"],
            .tooltip[x-placement^="left"] {
                margin-right: 5px;
            }
            .popper[x-placement^="left"] .popper__arrow,
            .tooltip[x-placement^="left"] .tooltip-arrow {
                border-width: 5px 0 5px 5px;
                border-top-color: transparent;
                border-right-color: transparent;
                border-bottom-color: transparent;
                right: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        `
        node.innerHTML = css;
        document.body.appendChild(node);
    }

    var injectVueScript = function() {
        var myScript = document.createElement("script");
        myScript.src = "https://cdn.jsdelivr.net/npm/vue";
        myScript.onload = function() {
            renderTourRecorderTemplate();
        };
        document.head.appendChild(myScript);
    };

    var injectPopper = function() {
        var myScript = document.createElement("script");
        myScript.src = "https://unpkg.com/popper.js/dist/umd/popper.min.js";
        document.head.appendChild(myScript);
    };

    var injectXPathFinder = function() {
        var myScript = document.createElement("script");
        myScript.src = "http://localhost:3000/tourRecorder/elementXPath.js";
        document.head.appendChild(myScript);
    };

    var tourRecorderForm = function() {
        return `
        <div>
            <div style="height:40px;line-height:40px;
                background:#1591f7;text-align:center">
                <h2 style="color:white;font-size:18px">Tour Recorder</h3>                    
            </div>
            <div style="margin-top:15px;padding:8px">
                <button style="width: 100%"
                    v-on:click="createNewTour">
                Create new tour</button>
            </div>
            <div v-if="showTourGeneratorForm" style="margin-top:15px;padding:8px;">
                <div>
                    <input type="text" style="
                        width:100%;
                        height:40px;
                        padding:8px;
                        border: 1px solid #a9a9a9;"
                        placeholder="enter tour name"/>
                </div>
                <div style="margin-top:15px;text-align:center;">
                    <button style="background:green;color:white"
                        v-on:click="startRecording">
                        Start Recording</button>
                </div>
            </div>
        </div>
        `;
    };

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
                    <button
                        v-on:click="submitTour"
                        style="width:100%;height:40px;border:none;
                        background:green;color:white">Done</button>
                </div>
            </div>
        `;
    };

    var stepInformationBubble = function() {
        return `
            <div id="tour-step-info-bubble"
                class="popper"
                style="background-color:#1591f7;width:250px; height:200px;padding:8px;
                    box-shadow: -2px 4px 8px grey;z-index:999">
                    <div>
                        <input type="text"
                            v-model="title"
                            placeholder="enter title" 
                            style="background:white;width:100%;height:40px;padding:8px"/>
                    </div>
                    <div style="margin-top:15px">
                        <textarea
                            v-model="description"
                            placeholder="enter description"
                            style="background:white;width:100%;height:80px;padding:8px"></textarea>
                    </div>
                    <div style="margin-top:10px">
                        <div style="float:left;width:50%;padding:5px">
                            <button type="buton"
                                v-on:click="destroyPopper"
                                style="width:100%;height:30px;background:#ccc">Cancel</button>
                        </div>
                        <div style="float:left;width:50%;padding:5px">
                            <button
                                type="button"
                                style="width:100%;height:30px;background:#ccc"
                                v-on:click="addNewStep">Next</button>
                        </div>
                    </div>
                    <div class="popper__arrow" x-arrow=""></div>
            </div>
        `
    };

    var renderTourRecorderTemplate = function() {
        var markUp = `
            <div id="tour-recorder-container">
                <div id="recording-panel">
                    <div v-if="!tourRecording"
                        style="height:500px;width:300px;top:0;right:0;position:fixed;
                        box-shadow: -2px 4px 8px grey;z-index:999999999999;background:white">
                        ${tourRecorderForm()}
                    </div>
                    <div v-if="tourRecording"
                        style="width:300px;top:0;right:0;position:fixed;
                            box-shadow: -2px 4px 8px grey;z-index:999999999999;background:white">
                            ${tourRecordingPanel()}
                    </div>
                </div>
                ${stepInformationBubble()}
            </div>
        `;
        var tourRecorderElement = document.createElement("div");
        tourRecorderElement.innerHTML = markUp;
        document.body.appendChild(tourRecorderElement);
        var app = new Vue({
            el: '#tour-recorder-container',
            data: {
                title: '',
                description: '',
                currentSelectedXPath: null,
                showTourGeneratorForm: false,
                tourRecording: false,
                tourDetails: []
            },
            methods: {
                createNewTour: function() {
                    this.showTourGeneratorForm = true;
                },
                isDescendant: function(parent, child) {
                    var node = child.parentNode;
                    while (node != null) {
                        if (node == parent) {
                            return true;
                        }
                        node = node.parentNode;
                    }
                    return false;
                },
                destroyPopper: function() {
                    this.title = ''; this.description = '';
                    this.popperInstance.destroy();
                },
                addNewStep: function(e) {
                    e.preventDefault();
                    var stepDefinition = {
                        title: this.title,
                        content: this.description,
                        target: this.currentSelectedXPath,
                        placement: 'bottom'
                    };
                    // add the current step definition
                    this.tourDetails.push(stepDefinition);
                    // reset the step information and close the popper
                    this.title = ''; this.description = '';
                    this.popperInstance.destroy();
                },
                submitTour: function() {
                    var protocol = location.protocol;
                    var slashes = protocol.concat("//");
                    var origin = slashes.concat(window.location.hostname);
                    debugger;
                    window.frames['dap-tour-recorder-iframe'].postMessage(
                        this.tourDetails,
                        origin
                    );
                },
                handleElementSelect: function(ev){
                    ev.preventDefault();
                    ev.stopPropagation();
                    var reference = ev.target;
                    var popper = document.querySelector('#tour-step-info-bubble');
                    var panel = document.querySelector('#tour-recorder-container');
                    var isReferenceChildOfPanel = this.isDescendant(panel, reference);
                    var isReferenceChildOfPopper = this.isDescendant(popper, reference);
                    if(isReferenceChildOfPanel || isReferenceChildOfPopper) {
                        return;
                    }
                    this.popperInstance = new Popper(reference, popper, {
                        modifiers: {
                            arrow: {
                                enabled: true
                            },
                            preventOverflow: {
                                boundariesElement: 'viewport'
                            }
                        }
                    });
                    this.currentSelectedXPath = this.getElementXPath(ev.target);
                },
                handleElementHover: function(ev){
                    var element = ev.target;
                    var className = "tour-recorder-active-element";
                    var arr = element.className ? element.className.split(" "):[];
                    if (arr.indexOf(className) == -1) {
                        element.className += " " + className;
                    }
                },
                handleElementMouseOut: function(ev){
                    var element = ev.target;
                    element.className = element.className.replace(/\btour-recorder-active-element\b/g, "");
                },
                startRecording: function(ev) {
                    this.tourRecording = true;
                    ev.stopPropagation();
                    document.addEventListener('click', this.handleElementSelect);
                    document.addEventListener('mouseover', this.handleElementHover);
                    document.addEventListener('mouseout', this.handleElementMouseOut);
                },
                abortRecording: function(ev) {
                    ev.stopPropagation();
                    this.tourRecording = false;
                    this.showTourGeneratorForm = false;
                    document.removeEventListener('click', this.handleElementSelect);
                    document.removeEventListener('mouseover', this.handleElementHover);
                    document.removeEventListener('mouseout', this.handleElementMouseOut);
                },
                getElementXPath: function(element) {
                    return getElementXpath(element);
                }
            }
          });
    };

    injectXPathFinder();
    addEmptyIFrame();
    addStyles();
    injectVueScript();
    injectPopper();
})();
