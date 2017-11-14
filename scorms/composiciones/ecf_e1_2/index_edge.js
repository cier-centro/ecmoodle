/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'contenido',
                type: 'image',
                rect: ['-84px', '0','1366px','768px','auto', 'auto'],
                clip: ['rect(215.28759765625px 1243.44140625px 326.59375px 526.89990234375px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy',
                type: 'image',
                rect: ['-84px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(335.333740234375px 1243.44140625px 383.545166015625px 526.89990234375px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy2',
                type: 'image',
                rect: ['-84px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(384.081787109375px 1243.44140625px 451.283203125px 472.6474609375px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy3',
                type: 'image',
                rect: ['76px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(370.170166015625px 367.8466796875px 458.314453125px 281.98681640625px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy4',
                type: 'image',
                rect: ['78px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(416.832275390625px 282.91259765625px 458.314453125px 73.615234375px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_contenido}": [
                ["style", "top", '68px'],
                ["style", "opacity", '0'],
                ["style", "left", '-84px'],
                ["style", "clip", [215.28759765625,1243.44140625,326.59375,526.89990234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy3}": [
                ["style", "-webkit-transform-origin", [23.75,54.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [23.75,54.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [23.75,54.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [23.75,54.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [23.75,54.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [23.75,54.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.32426'],
                ["transform", "scaleX", '0.32426'],
                ["style", "opacity", '0'],
                ["style", "clip", [370.170166015625,367.8466796875,458.314453125,281.98681640625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '76px']
            ],
            "${_contenidoCopy4}": [
                ["style", "opacity", '0'],
                ["style", "left", '94px'],
                ["style", "clip", [416.832275390625,282.91259765625,458.314453125,73.615234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_contenidoCopy}": [
                ["style", "top", '63px'],
                ["style", "opacity", '0'],
                ["style", "left", '-84px'],
                ["style", "clip", [335.333740234375,1243.44140625,383.545166015625,526.89990234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy2}": [
                ["style", "clip", [384.081787109375,1243.44140625,451.283203125,481.41845703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-84px'],
                ["style", "background-position", [-786.8076171875,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1080,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_contenidoCopy2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-786.8076171875,0]}], position: 250, duration: 500, easing: "easeOutExpo" },
                { id: "eid2", tween: [ "transform", "${_contenidoCopy3}", "scaleX", '1', { fromValue: '0.32426'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid22", tween: [ "style", "${_contenido}", "top", '0px', { fromValue: '68px'}], position: 580, duration: 500, easing: "easeOutBack" },
                { id: "eid4", tween: [ "transform", "${_contenidoCopy3}", "scaleY", '1', { fromValue: '0.32426'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid24", tween: [ "style", "${_contenido}", "opacity", '1', { fromValue: '0'}], position: 580, duration: 500, easing: "easeOutBack" },
                { id: "eid14", tween: [ "style", "${_contenidoCopy4}", "left", '78px', { fromValue: '94px'}], position: 250, duration: 500, easing: "easeOutExpo" },
                { id: "eid6", tween: [ "style", "${_contenidoCopy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid16", tween: [ "style", "${_contenidoCopy4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutExpo" },
                { id: "eid10", tween: [ "style", "${_contenidoCopy2}", "clip", [381.53369140625,1243.44140625,451.283203125,479.82958984375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [384.081787109375,1243.44140625,451.283203125,481.41845703125]}], position: 250, duration: 500, easing: "easeOutExpo" },
                { id: "eid20", tween: [ "style", "${_contenidoCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid18", tween: [ "style", "${_contenidoCopy}", "top", '0px', { fromValue: '63px'}], position: 500, duration: 500, easing: "easeOutBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-217058342");
