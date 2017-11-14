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
                id: 'btn_1',
                type: 'rect',
                rect: ['413px', '264px','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_2',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'hotspot_1',
                display: 'none',
                type: 'rect',
                rect: ['454px', '285px','515px','80px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_2',
                display: 'none',
                type: 'rect',
                rect: ['418px', '438px','644px','80px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'txt_etiqueta',
                type: 'image',
                rect: ['0', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(93.29736328125px 684.66943359375px 150.989990234375px -0.798828125px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'instruccion',
                type: 'image',
                rect: ['-17px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(93.29736328125px 1197.31201171875px 150.989990234375px 702.2109375px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'pop_1',
                type: 'rect',
                rect: ['265px', '253px','auto','auto','auto', 'auto']
            },
            {
                id: 'pop_2',
                type: 'rect',
                rect: ['265', '299px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'btn_1',
                symbolName: 'btn_1',
                autoPlay: {

                }
            },
            {
                id: 'btn_2',
                symbolName: 'btn_2',
                autoPlay: {

                }
            },
            {
                id: 'pop_1',
                symbolName: 'pop_1',
                autoPlay: {

                }
            },
            {
                id: 'pop_2',
                symbolName: 'pop_2',
                autoPlay: {

                }
            },
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
            "${_btn_2}": [
                ["style", "top", '418px'],
                ["style", "left", '-745px'],
                ["style", "cursor", 'auto']
            ],
            "${_pop_1}": [
                ["style", "top", '253px'],
                ["style", "left", '265px']
            ],
            "${_etiqueta}": [
                ["style", "left", '0px'],
                ["style", "top", '82px']
            ],
            "${_instruccion}": [
                ["style", "opacity", '0'],
                ["style", "left", '-109px'],
                ["style", "clip", [93.29736328125,1197.31201171875,150.989990234375,702.2109375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_2}": [
                ["style", "top", '438px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '418px'],
                ["style", "height", '80px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '644px']
            ],
            "${_hotspot_1}": [
                ["style", "top", '285px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_txt_etiqueta}": [
                ["style", "opacity", '0'],
                ["style", "left", '-92px'],
                ["style", "clip", [93.29736328125,684.66943359375,150.989990234375,-0.798828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_btn_1}": [
                ["style", "top", '264px'],
                ["style", "left", '-670px'],
                ["style", "cursor", 'auto']
            ],
            "${_pop_2}": [
                ["style", "top", '299px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid38", tween: [ "style", "${_txt_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 295, duration: 500, easing: "easeOutCirc" },
                { id: "eid78", tween: [ "style", "${_hotspot_2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutCirc" },
                { id: "eid76", tween: [ "style", "${_hotspot_2}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCirc" },
                { id: "eid34", tween: [ "style", "${_txt_etiqueta}", "left", '0px', { fromValue: '-92px'}], position: 295, duration: 500, easing: "easeOutCirc" },
                { id: "eid36", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid50", tween: [ "style", "${_btn_2}", "left", '338px', { fromValue: '-745px'}], position: 559, duration: 750, easing: "easeOutBack" },
                { id: "eid32", tween: [ "style", "${_instruccion}", "left", '0px', { fromValue: '-109px'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid52", tween: [ "style", "${_btn_1}", "left", '413px', { fromValue: '-670px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid79", tween: [ "style", "${_hotspot_1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutCirc" }            ]
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
                    rect: ['0px', '-125px', '826px', '204px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.51816']],
                    id: 'etiquetaCopy2',
                    type: 'image',
                    clip: ['rect(131.214599609375px 826px 202.869384765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-64px', '826px', '204px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.51816']],
                    id: 'etiquetaCopy',
                    type: 'image',
                    clip: ['rect(80.439208984375px 826px 131.00634765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '826px', '204px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.51816']],
                    id: 'etiqueta',
                    type: 'image',
                    clip: ['rect(0px 826px 80.296142578125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_etiqueta}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1.51816'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,826,80.296142578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiquetaCopy}": [
                ["style", "top", '-63px'],
                ["transform", "scaleX", '1.51816'],
                ["style", "opacity", '0'],
                ["style", "clip", [80.439208984375,826,131.00634765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '-124px'],
                ["transform", "scaleX", '1.51816'],
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
                { id: "eid1385", tween: [ "style", "${_etiqueta}", "left", '212px', { fromValue: '-210px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1375", tween: [ "style", "${_etiquetaCopy2}", "top", '-125px', { fromValue: '-124px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1391", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1387", tween: [ "style", "${_etiquetaCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1383", tween: [ "style", "${_etiqueta}", "top", '0px', { fromValue: '1px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1389", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1379", tween: [ "style", "${_etiquetaCopy}", "top", '-64px', { fromValue: '-63px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1381", tween: [ "style", "${_etiquetaCopy}", "left", '205px', { fromValue: '-210px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1377", tween: [ "style", "${_etiquetaCopy2}", "left", '202px', { fromValue: '-210px'}], position: 0, duration: 625, easing: "easeOutBack" }            ]
        }
    }
},
"btn_1": {
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
                    id: 'contenido',
                    rect: ['-400px', '-274px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(271.715087890625px 1004.82275390625px 392.83154296875px 400.79931640625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    id: 'brillo',
                    type: 'rect',
                    rect: ['21', '22', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy2',
                    rect: ['-313px', '-274px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(274.316650390625px 406.89111328125px 398.450927734375px 312.419921875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'brillo',
                symbolName: 'brillo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenidoCopy2}": [
                ["style", "top", '-274px'],
                ["style", "left", '-313px'],
                ["style", "clip", [274.316650390625,406.89111328125,398.450927734375,312.419921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido}": [
                ["style", "top", '-274px'],
                ["style", "left", '-400px'],
                ["style", "clip", [271.715087890625,1004.82275390625,392.83154296875,400.79931640625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '600px']
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
            ]
        }
    }
},
"btn_2": {
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
                    id: 'contenidoCopy',
                    rect: ['-321px', '-403px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(402.485595703125px 1074.28271484375px 522.172607421875px 319.93994140625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    id: 'brillo_1',
                    type: 'rect',
                    rect: ['72px', '19px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy3',
                    rect: ['-234px', '-403px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(400.550537109375px 359.021484375px 522.119384765625px 230.04248046875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'brillo_1',
                symbolName: 'brillo_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenidoCopy3}": [
                ["style", "top", '-403px'],
                ["style", "left", '-234px'],
                ["style", "clip", [400.550537109375,359.021484375,522.119384765625,230.04248046875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_brillo_1}": [
                ["style", "top", '19px'],
                ["style", "left", '72px']
            ],
            "${_contenidoCopy}": [
                ["style", "top", '-403px'],
                ["style", "left", '-321px'],
                ["style", "clip", [402.485595703125,1074.28271484375,522.172607421875,319.93994140625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '750px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"brillo": {
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
                    transform: [[0, 0], [], ['-21']],
                    rect: ['14px', '0px', '26px', '77px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    opacity: 0.49753853597053,
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['-21']],
                    rect: ['51px', '0px', '9px', '77px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    opacity: 0.49753853597053,
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewX", '-21deg'],
                ["style", "height", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "top", '0px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewX", '-21deg'],
                ["style", "height", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '51px'],
                ["style", "width", '9px']
            ],
            "${symbolSelector}": [
                ["style", "height", '77px'],
                ["style", "width", '76px']
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
                { id: "eid42", tween: [ "style", "${_Rectangle}", "left", '513px', { fromValue: '14px'}], position: 0, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_RectangleCopy}", "left", '550px', { fromValue: '51px'}], position: 0, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_RectangleCopy}", "opacity", '0.35', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid47", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0.35'}], position: 750, duration: 250 },
                { id: "eid46", tween: [ "style", "${_Rectangle}", "opacity", '0.35', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid48", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0.35'}], position: 750, duration: 250 }            ]
        }
    }
},
"brillo_1": {
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
                    transform: [[0, 0], [], ['-21']],
                    rect: ['14px', '0px', '26px', '77px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    opacity: 0.49753853597053,
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['-21']],
                    rect: ['51px', '0px', '9px', '77px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    opacity: 0.49753853597053,
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewX", '-21deg'],
                ["style", "height", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "top", '0px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewX", '-21deg'],
                ["style", "height", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '51px'],
                ["style", "width", '9px']
            ],
            "${symbolSelector}": [
                ["style", "height", '77px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid46", tween: [ "style", "${_Rectangle}", "opacity", '0.35', { fromValue: '0'}], position: 0, duration: 313 },
                { id: "eid48", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0.35'}], position: 938, duration: 312 },
                { id: "eid41", tween: [ "style", "${_RectangleCopy}", "left", '639px', { fromValue: '51px'}], position: 0, duration: 1250 },
                { id: "eid44", tween: [ "style", "${_RectangleCopy}", "opacity", '0.35', { fromValue: '0'}], position: 0, duration: 313 },
                { id: "eid47", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0.35'}], position: 938, duration: 312 },
                { id: "eid42", tween: [ "style", "${_Rectangle}", "left", '602px', { fromValue: '14px'}], position: 0, duration: 1250 }            ]
        }
    }
},
"pop_1": {
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
                    transform: [[0, 0], [], [], ['1.15899', '0.98571']],
                    type: 'image',
                    rect: ['-72px', '18px', '868px', '280px', 'auto', 'auto'],
                    id: 'pop_1',
                    display: 'none',
                    clip: ['rect(0px 868px 280px 94.5400390625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/pop_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-128px', '33px', '280px', '274px', 'auto', 'auto'],
                    id: 'pop_face',
                    fill: ['rgba(0,0,0,0)', 'images/pop_face.png', '0px', '0px']
                },
                {
                    rect: ['794px', '43px', '58px', '58px', 'auto', 'auto'],
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'cerrar',
                    display: 'none',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cerrar}": [
                ["style", "top", '43px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '794px'],
                ["style", "cursor", 'pointer']
            ],
            "${_pop_1}": [
                ["style", "top", '18px'],
                ["transform", "scaleY", '0.98571'],
                ["style", "left", '-72px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-791.23779296875,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,868,280,94.5400390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1.15899']
            ],
            "${_pop_face}": [
                ["style", "top", '33px'],
                ["transform", "scaleY", '0.16218'],
                ["transform", "rotateZ", '-124deg'],
                ["transform", "scaleX", '0.16217'],
                ["style", "opacity", '0'],
                ["style", "left", '-128px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "transform", "${_pop_face}", "scaleY", '1', { fromValue: '0.16218'}], position: 54, duration: 750, easing: "easeOutBack" },
                { id: "eid63", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutCirc" },
                { id: "eid54", tween: [ "transform", "${_pop_face}", "scaleX", '1', { fromValue: '0.16217'}], position: 54, duration: 750, easing: "easeOutBack" },
                { id: "eid66", tween: [ "style", "${_pop_1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutCirc" },
                { id: "eid65", tween: [ "style", "${_pop_face}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid58", tween: [ "transform", "${_pop_face}", "rotateZ", '0deg', { fromValue: '-124deg'}], position: 54, duration: 750, easing: "easeOutBack" },
                { id: "eid62", tween: [ "style", "${_pop_1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-791.23779296875,0]}], position: 250, duration: 750, easing: "easeOutCirc" },
                { id: "eid60", tween: [ "style", "${_pop_face}", "opacity", '1', { fromValue: '0'}], position: 54, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"pop_2": {
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
                    transform: [[0, 0], [], [], ['1', '0.98571']],
                    type: 'image',
                    rect: ['-142px', '-26px', '1006px', '280px', 'auto', 'auto'],
                    id: 'pop_22',
                    display: 'none',
                    clip: ['rect(0px 1006px 280px 111.7099609375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/pop_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-127px', '-13px', '280px', '274px', 'auto', 'auto'],
                    id: 'pop_face',
                    fill: ['rgba(0,0,0,0)', 'images/pop_face.png', '0px', '0px']
                },
                {
                    rect: ['797px', '-3px', '58px', '58px', 'auto', 'auto'],
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'cerrar',
                    display: 'none',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pop_22}": [
                ["style", "top", '-26px'],
                ["transform", "scaleY", '0.98571'],
                ["style", "left", '-142px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-892.52490234375,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,1006,280,111.7099609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_cerrar}": [
                ["style", "top", '-3px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '797px'],
                ["style", "cursor", 'pointer']
            ],
            "${_pop_face}": [
                ["style", "top", '-13px'],
                ["transform", "scaleY", '0.16218'],
                ["transform", "rotateZ", '-124deg'],
                ["transform", "scaleX", '0.16217'],
                ["style", "opacity", '0'],
                ["style", "left", '-127px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "transform", "${_pop_face}", "scaleY", '1', { fromValue: '0.16218'}], position: 54, duration: 750, easing: "easeOutBack" },
                { id: "eid63", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutCirc" },
                { id: "eid75", tween: [ "style", "${_pop_22}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutCirc" },
                { id: "eid58", tween: [ "transform", "${_pop_face}", "rotateZ", '0deg', { fromValue: '-124deg'}], position: 54, duration: 750, easing: "easeOutBack" },
                { id: "eid65", tween: [ "style", "${_pop_face}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid70", tween: [ "style", "${_pop_22}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-892.52490234375,0]}], position: 250, duration: 750, easing: "easeOutCirc" },
                { id: "eid54", tween: [ "transform", "${_pop_face}", "scaleX", '1', { fromValue: '0.16217'}], position: 54, duration: 750, easing: "easeOutBack" },
                { id: "eid60", tween: [ "style", "${_pop_face}", "opacity", '1', { fromValue: '0'}], position: 54, duration: 750, easing: "easeOutBack" }            ]
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
