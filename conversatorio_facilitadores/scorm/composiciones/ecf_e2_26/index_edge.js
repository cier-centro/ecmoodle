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
                id: 'etiqueta',
                type: 'rect',
                rect: ['0px', '82px','auto','auto','auto', 'auto']
            },
            {
                id: 'instruccion',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(103.107421875px 905.04443359375px 145.432373046875px 354.65185546875px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'texto_etiqueta',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(103.107421875px 377.49658203125px 145.432373046875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'video',
                type: 'rect',
                rect: ['294px', '169px','779px','438px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'etiqueta',
                symbolName: 'etiqueta',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_video}": [
                ["style", "top", '169px'],
                ["style", "height", '438px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '294px'],
                ["style", "width", '779px']
            ],
            "${_etiqueta}": [
                ["style", "left", '0px'],
                ["style", "top", '82px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_instruccion}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-129px'],
                ["style", "clip", [103.107421875,905.04443359375,145.432373046875,354.65185546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_texto_etiqueta}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-129px'],
                ["style", "clip", [103.107421875,377.49658203125,145.432373046875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 935,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "style", "${_texto_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 370, duration: 500, easing: "easeOutBack" },
                { id: "eid31", tween: [ "style", "${_texto_etiqueta}", "left", '4px', { fromValue: '-129px'}], position: 370, duration: 500, easing: "easeOutBack" },
                { id: "eid28", tween: [ "style", "${_instruccion}", "left", '0px', { fromValue: '-129px'}], position: 435, duration: 500, easing: "easeOutBack" },
                { id: "eid30", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 435, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"etiqueta": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    rect: ['0px', '-125px', '826px', '204px', 'auto', 'auto'],
                    id: 'etiquetaCopy2',
                    transform: [[0, 0], [], [], ['1.29298']],
                    clip: ['rect(131.214599609375px 826px 202.869384765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '-64px', '826px', '204px', 'auto', 'auto'],
                    id: 'etiquetaCopy',
                    transform: [[0, 0], [], [], ['1.29298']],
                    clip: ['rect(80.439208984375px 826px 131.00634765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '826px', '204px', 'auto', 'auto'],
                    id: 'etiqueta',
                    transform: [[0, 0], [], [], ['1.29298']],
                    clip: ['rect(0px 826px 80.296142578125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_etiquetaCopy}": [
                ["style", "top", '-63px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [80.439208984375,826,131.00634765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiqueta}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,826,80.296142578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '-124px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [131.214599609375,826,202.869384765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1068px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid1385", tween: [ "style", "${_etiqueta}", "left", '119px', { fromValue: '-210px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1375", tween: [ "style", "${_etiquetaCopy2}", "top", '-125px', { fromValue: '-124px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1391", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1387", tween: [ "style", "${_etiquetaCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1383", tween: [ "style", "${_etiqueta}", "top", '0px', { fromValue: '1px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1389", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1379", tween: [ "style", "${_etiquetaCopy}", "top", '-64px', { fromValue: '-63px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1381", tween: [ "style", "${_etiquetaCopy}", "left", '112px', { fromValue: '-210px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1377", tween: [ "style", "${_etiquetaCopy2}", "left", '109px', { fromValue: '-210px'}], position: 0, duration: 625, easing: "easeOutBack" }            ]
        }
    }
},
"btn_circular": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [20, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['35px', '34px', '18px', '18px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
                    stroke: [16, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleX", '0.20202'],
                ["style", "border-style", 'solid'],
                ["style", "left", '35px'],
                ["style", "width", '18px'],
                ["style", "top", '34px'],
                ["transform", "scaleY", '0.20202'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '16px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleX", '0.20202'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '20px'],
                ["style", "width", '80px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.20202'],
                ["style", "height", '80px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '120px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid78", tween: [ "style", "${_EllipseCopy}", "opacity", '0.2962599992752075', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid82", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '0.2962599992752075'}], position: 500, duration: 500, easing: "easeOutCirc" },
                { id: "eid72", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1', { fromValue: '0.20202'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid80", tween: [ "style", "${_Ellipse}", "opacity", '0.2962599992752075', { fromValue: '0'}], position: 147, duration: 500, easing: "easeOutCirc" },
                { id: "eid83", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0.2962599992752075'}], position: 647, duration: 521, easing: "easeOutCirc" },
                { id: "eid70", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1', { fromValue: '0.20202'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid74", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '0.20202'}], position: 147, duration: 500, easing: "easeOutCirc" },
                { id: "eid76", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '0.20202'}], position: 147, duration: 500, easing: "easeOutCirc" }            ]
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
