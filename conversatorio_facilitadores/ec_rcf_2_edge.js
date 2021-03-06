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
                id: 'background',
                type: 'image',
                rect: ['0', '0','1366px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.png",'0px','0px']
            },
            {
                id: 'contenido',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_inicio',
                display: 'none',
                type: 'image',
                rect: ['65px', '121px','96px','96px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"btn_inicio.png",'0px','0px']
            },
            {
                id: 'brillo',
                display: 'none',
                type: 'rect',
                rect: ['73px', '129px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.80315','0.80315']]
            },
            {
                id: 'hotspot_inicio',
                display: 'none',
                type: 'ellipse',
                rect: ['73px', '130px','84px','84px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'etiqueta',
                type: 'rect',
                rect: ['-729', '12','auto','auto','auto', 'auto'],
                clip: ['rect(0px 2097.86083984375px 124px 723.828125px)']
            }],
            symbolInstances: [
            {
                id: 'contenido',
                symbolName: 'contenido',
                autoPlay: {

                }
            },
            {
                id: 'etiqueta',
                symbolName: 'etiqueta',
                autoPlay: {

                }
            },
            {
                id: 'brillo',
                symbolName: 'brillo',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_hotspot_inicio}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer']
            ],
            "${_brillo}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '0.26964'],
                ["transform", "scaleX", '0.26964'],
                ["style", "opacity", '0'],
                ["style", "left", '73px'],
                ["style", "display", 'none']
            ],
            "${_etiqueta}": [
                ["style", "clip", [0,2097.86083984375,124,723.828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_btn_inicio}": [
                ["style", "top", '121px'],
                ["transform", "scaleY", '0.33573'],
                ["transform", "scaleX", '0.33573'],
                ["style", "opacity", '0'],
                ["style", "left", '65px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2847,
            autoPlay: true,
            timeline: [
                { id: "eid235", tween: [ "style", "${_btn_inicio}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid227", tween: [ "transform", "${_brillo}", "scaleY", '0.80315', { fromValue: '0.26964'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid231", tween: [ "transform", "${_btn_inicio}", "scaleY", '1', { fromValue: '0.33573'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid237", tween: [ "style", "${_btn_inicio}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid236", tween: [ "style", "${_brillo}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid225", tween: [ "transform", "${_brillo}", "scaleX", '0.80315', { fromValue: '0.26964'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid238", tween: [ "style", "${_hotspot_inicio}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" },
                { id: "eid229", tween: [ "transform", "${_btn_inicio}", "scaleX", '1', { fromValue: '0.33573'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid233", tween: [ "style", "${_brillo}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" }            ]
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
                    id: 'etiquetaCopy2',
                    rect: ['0px', '0px', '1970px', '124px', 'auto', 'auto'],
                    clip: ['rect(0px 1960.447265625px 124px 1470.34814453125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'etiquetaCopy',
                    rect: ['494px', '0px', '1970px', '124px', 'auto', 'auto'],
                    clip: ['rect(0px 1447.96484375px 124px 312.109375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'etiqueta',
                    rect: ['710px', '0px', '1970px', '124px', 'auto', 'auto'],
                    clip: ['rect(0px 287.95947265625px 124px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_etiqueta}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '599px'],
                ["style", "clip", [0,287.95947265625,124,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '124px'],
                ["style", "width", '2680px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-111px'],
                ["style", "clip", [0,1960.447265625,124,1470.34814453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_etiquetaCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '383px'],
                ["style", "clip", [0,1447.96484375,124,312.109375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 691,
            autoPlay: true,
            timeline: [
                { id: "eid34", tween: [ "style", "${_etiqueta}", "left", '710px', { fromValue: '599px'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid36", tween: [ "style", "${_etiquetaCopy2}", "left", '0px', { fromValue: '-111px'}], position: 191, duration: 500, easing: "easeOutCirc" },
                { id: "eid40", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid42", tween: [ "style", "${_etiquetaCopy2}", "opacity", '1', { fromValue: '0'}], position: 191, duration: 500, easing: "easeOutCirc" },
                { id: "eid44", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 90, duration: 500, easing: "easeOutCirc" },
                { id: "eid38", tween: [ "style", "${_etiquetaCopy}", "left", '494px', { fromValue: '383px'}], position: 90, duration: 500, easing: "easeOutCirc" }            ]
        }
    }
},
"btn_bienvenida": {
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
                    id: 'contenido2Copy10',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(128.194580078125px 627.07080078125px 192.623291015625px 266.4619140625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['76px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy12',
                    transform: [[0, 0], [], [], [], ['15.5011%', '21.4964%']],
                    clip: ['rect(128.194580078125px 251.2685546875px 192.623291015625px 176.14404296875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contenido2Copy12}": [
                ["style", "-webkit-transform-origin", [15.5,21.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [15.5,21.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [15.5,21.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [15.5,21.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [15.5,21.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [15.5,21.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5196'],
                ["transform", "rotateZ", '-110deg'],
                ["transform", "scaleX", '0.5196'],
                ["style", "opacity", '0'],
                ["style", "clip", [128.194580078125,251.2685546875,192.623291015625,176.14404296875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '76px']
            ],
            "${_contenido2Copy10}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-48px'],
                ["style", "clip", [128.194580078125,627.07080078125,192.623291015625,266.4619140625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1442px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1213,
            autoPlay: true,
            timeline: [
                { id: "eid116", tween: [ "style", "${_contenido2Copy10}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 463, easing: "easeOutBack" },
                { id: "eid114", tween: [ "style", "${_contenido2Copy10}", "left", '0px', { fromValue: '-48px'}], position: 750, duration: 463, easing: "easeOutBack" },
                { id: "eid100", tween: [ "transform", "${_contenido2Copy12}", "scaleY", '1', { fromValue: '0.5196'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid102", tween: [ "transform", "${_contenido2Copy12}", "rotateZ", '0deg', { fromValue: '-110deg'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid104", tween: [ "style", "${_contenido2Copy12}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid98", tween: [ "transform", "${_contenido2Copy12}", "scaleX", '1', { fromValue: '0.5196'}], position: 500, duration: 538, easing: "easeOutBack" }            ]
        }
    }
},
"btn_aprendizaje": {
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
                    id: 'contenido2Copy11',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(134.221435546875px 1138.64306640625px 192.623291015625px 774.36474609375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['103px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy9',
                    transform: [[0, 0], [], [], [], ['50.8233%', '20.9605%']],
                    clip: ['rect(134.221435546875px 734.0390625px 192.623291015625px 658.4052734375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contenido2Copy11}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-27px'],
                ["style", "clip", [134.221435546875,1138.64306640625,192.623291015625,774.36474609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido2Copy9}": [
                ["style", "-webkit-transform-origin", [50.82,20.96], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50.82,20.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50.82,20.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50.82,20.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50.82,20.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50.82,20.96],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.56313'],
                ["transform", "rotateZ", '-118deg'],
                ["transform", "scaleX", '0.56313'],
                ["style", "opacity", '0'],
                ["style", "clip", [134.221435546875,734.0390625,192.623291015625,658.4052734375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '103px']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1469px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1213,
            autoPlay: true,
            timeline: [
                { id: "eid110", tween: [ "transform", "${_contenido2Copy9}", "rotateZ", '0deg', { fromValue: '-118deg'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid120", tween: [ "style", "${_contenido2Copy11}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 463, easing: "easeOutBack" },
                { id: "eid118", tween: [ "style", "${_contenido2Copy11}", "left", '0px', { fromValue: '-27px'}], position: 750, duration: 463, easing: "easeOutBack" },
                { id: "eid112", tween: [ "style", "${_contenido2Copy9}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid106", tween: [ "transform", "${_contenido2Copy9}", "scaleX", '1', { fromValue: '0.56313'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid108", tween: [ "transform", "${_contenido2Copy9}", "scaleY", '1', { fromValue: '0.56313'}], position: 500, duration: 538, easing: "easeOutBack" }            ]
        }
    }
},
"character": {
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
                    id: 'hair',
                    rect: ['-1074px', '-215px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(243.8427734375px 1325.05078125px 640.7958984375px 1154.31689453125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    id: 'trunk_1',
                    type: 'rect',
                    rect: ['13px', '36px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'legs',
                    rect: ['-17px', '126px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(236.046875px 286.234375px 770px 79.125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    id: 'trunk',
                    type: 'rect',
                    rect: ['13px', '25px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'trunk',
                symbolName: 'trunk',
                autoPlay: {

               }
            },
            {
                id: 'trunk_1',
                symbolName: 'trunk_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_legs}": [
                ["style", "top", '126px'],
                ["style", "left", '-17px'],
                ["style", "clip", [236.046875,286.234375,770,79.125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_trunk}": [
                ["style", "top", '25px'],
                ["style", "-webkit-transform-origin", [42.57,74.52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_hair}": [
                ["style", "-webkit-transform-origin", [88.93,83.6], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-215px'],
                ["style", "clip", [243.8427734375,1325.05078125,640.7958984375,1154.31689453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1074px']
            ],
            "${symbolSelector}": [
                ["style", "height", '814px'],
                ["style", "width", '308px']
            ],
            "${_trunk_1}": [
                ["style", "-webkit-transform-origin", [39.69,74.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '36px'],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
                { id: "eid83", tween: [ "transform", "${_trunk_1}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid85", tween: [ "transform", "${_trunk_1}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 6000, duration: 500 },
                { id: "eid92", tween: [ "transform", "${_trunk_1}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid104", tween: [ "transform", "${_trunk_1}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 16500, duration: 500 },
                { id: "eid89", tween: [ "transform", "${_trunk}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid90", tween: [ "transform", "${_trunk}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 6000, duration: 500 },
                { id: "eid91", tween: [ "transform", "${_trunk}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid93", tween: [ "transform", "${_trunk}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 16500, duration: 500 },
                { id: "eid110", tween: [ "transform", "${_hair}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid114", tween: [ "transform", "${_hair}", "rotateZ", '-3deg', { fromValue: '-2deg'}], position: 1000, duration: 500 },
                { id: "eid117", tween: [ "transform", "${_hair}", "rotateZ", '-2deg', { fromValue: '-3deg'}], position: 4000, duration: 500 },
                { id: "eid121", tween: [ "transform", "${_hair}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 6000, duration: 500 },
                { id: "eid123", tween: [ "transform", "${_hair}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6500, duration: 0 },
                { id: "eid130", tween: [ "transform", "${_hair}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 7000, duration: 500 },
                { id: "eid124", tween: [ "transform", "${_hair}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 10099, duration: 500 },
                { id: "eid125", tween: [ "transform", "${_hair}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid153", tween: [ "transform", "${_hair}", "rotateZ", '3deg', { fromValue: '4deg'}], position: 14250, duration: 250 },
                { id: "eid154", tween: [ "transform", "${_hair}", "rotateZ", '4deg', { fromValue: '3deg'}], position: 14500, duration: 250 },
                { id: "eid155", tween: [ "transform", "${_hair}", "rotateZ", '4deg', { fromValue: '4deg'}], position: 16500, duration: 0 },
                { id: "eid126", tween: [ "transform", "${_hair}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 16500, duration: 500 },
                { id: "eid127", tween: [ "transform", "${_hair}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 18500, duration: 500 },
                { id: "eid128", tween: [ "transform", "${_hair}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 20500, duration: 500 }            ]
        }
    }
},
"head": {
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
                    id: 'headCopy',
                    rect: ['-1136px', '-16px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(16px 1300px 182px 1140px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    id: 'expressions',
                    type: 'rect',
                    rect: ['11px', '33px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'expressions',
                symbolName: 'mouth',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_headCopy}": [
                ["style", "top", '-16px'],
                ["style", "left", '-1136px'],
                ["style", "clip", [16,1300,182,1140], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '168px'],
                ["style", "width", '170px']
            ],
            "${_expressions}": [
                ["style", "left", '11px'],
                ["style", "top", '33px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"ab_c": {
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
                    rect: ['-383px', '-406px', '1366px', '770px', 'auto', 'auto'],
                    display: 'block',
                    id: 'm_1a',
                    clip: ['rect(522px 420px 570px 370px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['41']],
                    type: 'image',
                    rect: ['-421px', '-248px', '1366px', '770px', 'auto', 'auto'],
                    id: 'm_1b',
                    display: 'none',
                    clip: ['rect(520px 518px 566px 458px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'ab_1',
                    rect: ['-373px', '-302px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(312px 476px 468.7265625px 372.90625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ab_1}": [
                ["style", "top", '-302px'],
                ["style", "left", '-373px'],
                ["style", "clip", [312,476,468.7265625,372.90625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_m_1b}": [
                ["style", "top", '-248px'],
                ["transform", "rotateZ", '41deg'],
                ["style", "display", 'none'],
                ["style", "clip", [520,518,566,458], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-421px']
            ],
            "${_m_1a}": [
                ["style", "display", 'block'],
                ["style", "top", '-406px'],
                ["style", "clip", [522,420,570,370], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-383px']
            ],
            "${symbolSelector}": [
                ["style", "height", '180px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
                { id: "eid79", tween: [ "style", "${_m_1a}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0 },
                { id: "eid80", tween: [ "style", "${_m_1a}", "display", 'block', { fromValue: 'none'}], position: 16746, duration: 0 },
                { id: "eid78", tween: [ "style", "${_m_1b}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid81", tween: [ "style", "${_m_1b}", "display", 'none', { fromValue: 'block'}], position: 16746, duration: 0 }            ]
        }
    }
},
"mouth": {
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
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'block',
                    id: 'a1',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '1px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'a2',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-83.894531249998px', '-0.37304687499991px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'b1',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-254px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'b2',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-339.85107421875px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'c1',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-510.373046875px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'c2',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-593px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'e1',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-764px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'e2',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-849px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'f1',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-1020.2954101562px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    display: 'none',
                    id: 'f2',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-1103.4458007811px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-83.894531249998,-0.37304687499991], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_b2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-339.85107421875,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_e1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-764,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_c2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-593,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a1}": [
                ["style", "top", '1px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "background-position", [1,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_b1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-254,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_c1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-509,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '87px']
            ],
            "${_f2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-1103.4458007811,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_e2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-849,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_f1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-1019,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
                { id: "eid43", tween: [ "style", "${_f1}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid14", tween: [ "style", "${_b1}", "display", 'block', { fromValue: 'none'}], position: 5203, duration: 0 },
                { id: "eid21", tween: [ "style", "${_b1}", "display", 'block', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid20", tween: [ "style", "${_b1}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_a1}", "display", 'none', { fromValue: 'block'}], position: 1695, duration: 0 },
                { id: "eid5", tween: [ "style", "${_a1}", "display", 'block', { fromValue: 'none'}], position: 1899, duration: 0 },
                { id: "eid9", tween: [ "style", "${_a1}", "display", 'none', { fromValue: 'block'}], position: 2101, duration: 0 },
                { id: "eid10", tween: [ "style", "${_a1}", "display", 'block', { fromValue: 'none'}], position: 2302, duration: 0 },
                { id: "eid11", tween: [ "style", "${_a1}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_c1}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_c1}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid25", tween: [ "style", "${_c1}", "display", 'block', { fromValue: 'none'}], position: 10191, duration: 0 },
                { id: "eid27", tween: [ "style", "${_c1}", "display", 'none', { fromValue: 'block'}], position: 10398, duration: 0 },
                { id: "eid29", tween: [ "style", "${_c1}", "display", 'block', { fromValue: 'none'}], position: 10602, duration: 0 },
                { id: "eid31", tween: [ "style", "${_c1}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_c1}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_c1}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_e1}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_e1}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_e1}", "display", 'block', { fromValue: 'none'}], position: 15202, duration: 0 },
                { id: "eid39", tween: [ "style", "${_e1}", "display", 'none', { fromValue: 'block'}], position: 15407, duration: 0 },
                { id: "eid40", tween: [ "style", "${_e1}", "display", 'block', { fromValue: 'none'}], position: 15602, duration: 0 },
                { id: "eid42", tween: [ "style", "${_e1}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid35", tween: [ "style", "${_e2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_e2}", "display", 'none', { fromValue: 'block'}], position: 15202, duration: 0 },
                { id: "eid38", tween: [ "style", "${_e2}", "display", 'block', { fromValue: 'none'}], position: 15407, duration: 0 },
                { id: "eid41", tween: [ "style", "${_e2}", "display", 'none', { fromValue: 'block'}], position: 15602, duration: 0 },
                { id: "eid47", tween: [ "style", "${_f2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_c2}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_c2}", "display", 'none', { fromValue: 'block'}], position: 10191, duration: 0 },
                { id: "eid26", tween: [ "style", "${_c2}", "display", 'block', { fromValue: 'none'}], position: 10398, duration: 0 },
                { id: "eid28", tween: [ "style", "${_c2}", "display", 'none', { fromValue: 'block'}], position: 10602, duration: 0 },
                { id: "eid2", tween: [ "style", "${_a2}", "display", 'block', { fromValue: 'none'}], position: 1695, duration: 0 },
                { id: "eid3", tween: [ "style", "${_a2}", "display", 'none', { fromValue: 'block'}], position: 1899, duration: 0 },
                { id: "eid7", tween: [ "style", "${_a2}", "display", 'block', { fromValue: 'none'}], position: 2101, duration: 0 },
                { id: "eid8", tween: [ "style", "${_a2}", "display", 'none', { fromValue: 'block'}], position: 2302, duration: 0 },
                { id: "eid12", tween: [ "style", "${_b2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_b2}", "display", 'none', { fromValue: 'block'}], position: 5203, duration: 0 }            ]
        }
    }
},
"trunk_1": {
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
                    id: 'b_1',
                    rect: ['-364px', '76px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(94px 488px 244px 440px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    id: 'ab_c',
                    type: 'rect',
                    rect: ['-1px', '288px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'ab_c',
                symbolName: 'ab_c',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_ab_c}": [
                ["style", "-webkit-transform-origin", [77.86,15.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '292px'],
                ["style", "left", '26px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_1}": [
                ["style", "-webkit-transform-origin", [33.56,13.89], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '2deg'],
                ["style", "left", '-364px'],
                ["style", "clip", [94,488,244,440], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '76px']
            ],
            "${symbolSelector}": [
                ["style", "height", '530px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
                { id: "eid69", tween: [ "style", "${_ab_c}", "left", '-4px', { fromValue: '26px'}], position: 13500, duration: 404 },
                { id: "eid44", tween: [ "style", "${_ab_c}", "left", '-28px', { fromValue: '-4px'}], position: 13904, duration: 400 },
                { id: "eid73", tween: [ "style", "${_ab_c}", "left", '-17px', { fromValue: '-28px'}], position: 16500, duration: 750 },
                { id: "eid77", tween: [ "style", "${_ab_c}", "left", '26px', { fromValue: '-17px'}], position: 19500, duration: 500 },
                { id: "eid68", tween: [ "transform", "${_b_1}", "rotateZ", '25deg', { fromValue: '2deg'}], position: 13500, duration: 804 },
                { id: "eid86", tween: [ "transform", "${_b_1}", "rotateZ", '20deg', { fromValue: '25deg'}], position: 16500, duration: 750 },
                { id: "eid52", tween: [ "transform", "${_b_1}", "rotateZ", '2deg', { fromValue: '20deg'}], position: 19500, duration: 500 },
                { id: "eid62", tween: [ "transform", "${_ab_c}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid70", tween: [ "transform", "${_ab_c}", "rotateZ", '68deg', { fromValue: '-12deg'}], position: 13500, duration: 804 },
                { id: "eid72", tween: [ "transform", "${_ab_c}", "rotateZ", '-12deg', { fromValue: '68deg'}], position: 16500, duration: 750 },
                { id: "eid87", tween: [ "transform", "${_ab_c}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 19500, duration: 500 },
                { id: "eid71", tween: [ "style", "${_ab_c}", "top", '290px', { fromValue: '292px'}], position: 13500, duration: 404 },
                { id: "eid45", tween: [ "style", "${_ab_c}", "top", '278px', { fromValue: '290px'}], position: 13904, duration: 400 },
                { id: "eid75", tween: [ "style", "${_ab_c}", "top", '288px', { fromValue: '278px'}], position: 16500, duration: 750 },
                { id: "eid82", tween: [ "style", "${_ab_c}", "top", '292px', { fromValue: '288px'}], position: 19500, duration: 500 }            ]
        }
    }
},
"trunk": {
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
                    id: 'trunk',
                    rect: ['-583px', '13px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(86px 852px 450px 632px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b_2',
                    rect: ['-696px', '42px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(130px 944px 298.5078125px 876px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-805px', '13px', '1366px', '770px', 'auto', 'auto'],
                    display: 'block',
                    id: 'ab_2',
                    clip: ['rect(294px 1092px 498px 976px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-805px', '21px', '1366px', '770px', 'auto', 'auto'],
                    display: 'none',
                    id: 'ab_3',
                    clip: ['rect(294px 1092px 498px 976px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '-233.87084960938px']
                },
                {
                    id: 'head',
                    type: 'rect',
                    rect: ['62px', '3px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'head',
                symbolName: 'head',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_b_2}": [
                ["style", "top", '42px'],
                ["style", "left", '-696px'],
                ["style", "clip", [130,944,298.5078125,876], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_trunk}": [
                ["style", "top", '13px'],
                ["style", "left", '-583px'],
                ["style", "clip", [86,852,450,632], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ab_3}": [
                ["style", "top", '21px'],
                ["style", "left", '-821px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "background-position", [0,-233.87084960938], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [294,1092,498,976], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [76.87,40.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_head}": [
                ["style", "top", '3px'],
                ["style", "-webkit-transform-origin", [57.81,86.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '62px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_ab_2}": [
                ["style", "top", '13px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "-webkit-transform-origin", [77.41,41.62], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-820px'],
                ["style", "clip", [294,1092,498,976], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '530px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "transform", "${_head}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid49", tween: [ "transform", "${_head}", "rotateZ", '3deg', { fromValue: '-4deg'}], position: 4000, duration: 500 },
                { id: "eid51", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 5500, duration: 500 },
                { id: "eid50", tween: [ "transform", "${_head}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 7000, duration: 500 },
                { id: "eid53", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 10000, duration: 500 },
                { id: "eid54", tween: [ "transform", "${_head}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 14250, duration: 250 },
                { id: "eid55", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 14500, duration: 250 },
                { id: "eid57", tween: [ "transform", "${_head}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 18250, duration: 500 },
                { id: "eid58", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 20500, duration: 500 },
                { id: "eid100", tween: [ "style", "${_ab_2}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid102", tween: [ "style", "${_ab_2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid103", tween: [ "style", "${_ab_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_ab_3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_ab_3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid59", tween: [ "transform", "${_ab_2}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid63", tween: [ "transform", "${_ab_2}", "rotateZ", '84deg', { fromValue: '27deg'}], position: 7000, duration: 750 },
                { id: "eid65", tween: [ "transform", "${_ab_2}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 11508, duration: 492 },
                { id: "eid64", tween: [ "style", "${_ab_2}", "left", '-814px', { fromValue: '-820px'}], position: 7000, duration: 750 },
                { id: "eid66", tween: [ "style", "${_ab_2}", "left", '-819px', { fromValue: '-814px'}], position: 11508, duration: 492 },
                { id: "eid94", tween: [ "style", "${_ab_3}", "left", '-833px', { fromValue: '-821px'}], position: 7000, duration: 750 },
                { id: "eid95", tween: [ "style", "${_ab_3}", "left", '-819px', { fromValue: '-833px'}], position: 11508, duration: 492 },
                { id: "eid96", tween: [ "transform", "${_ab_3}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid97", tween: [ "transform", "${_ab_3}", "rotateZ", '84deg', { fromValue: '27deg'}], position: 7000, duration: 750 },
                { id: "eid98", tween: [ "transform", "${_ab_3}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 11508, duration: 492 }            ]
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
                    rect: ['0px', '0px', '72px', '72px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.37171336206897,
                    id: 'Ellipse',
                    stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['9px', '9px', '52px', '52px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.37171336206897,
                    id: 'EllipseCopy',
                    stroke: [6, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['22px', '21px', '23px', '23px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.37171336206897,
                    id: 'EllipseCopy2',
                    stroke: [8, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleX", '0.2385'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '8px'],
                ["style", "width", '23px'],
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.2385'],
                ["style", "height", '23px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '22px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleX", '0.51642'],
                ["style", "border-style", 'solid'],
                ["style", "left", '9px'],
                ["style", "width", '52px'],
                ["style", "top", '9px'],
                ["transform", "scaleY", '0.51643'],
                ["style", "height", '52px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "border-width", '6px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleX", '0.68034'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '5px'],
                ["style", "width", '72px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.68034'],
                ["style", "height", '72px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '82px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2470,
            autoPlay: true,
            timeline: [
                { id: "eid62", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1', { fromValue: '0.51643'}], position: 120, duration: 500 },
                { id: "eid70", tween: [ "style", "${_Ellipse}", "opacity", '0.3717133700847626', { fromValue: '0'}], position: 250, duration: 500 },
                { id: "eid71", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0.3717130124568939'}], position: 750, duration: 250 },
                { id: "eid66", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '0.68034'}], position: 250, duration: 500 },
                { id: "eid54", tween: [ "style", "${_EllipseCopy2}", "opacity", '0.3717133700847626', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid73", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '0.3717130124568939'}], position: 500, duration: 500 },
                { id: "eid52", tween: [ "transform", "${_EllipseCopy2}", "scaleY", '1', { fromValue: '0.2385'}], position: 0, duration: 500 },
                { id: "eid68", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '0.68034'}], position: 250, duration: 500 },
                { id: "eid64", tween: [ "style", "${_EllipseCopy}", "opacity", '0.3717133700847626', { fromValue: '0'}], position: 120, duration: 500 },
                { id: "eid72", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '0.3717130124568939'}], position: 620, duration: 630 },
                { id: "eid50", tween: [ "transform", "${_EllipseCopy2}", "scaleX", '1', { fromValue: '0.2385'}], position: 0, duration: 500 },
                { id: "eid60", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1', { fromValue: '0.51642'}], position: 120, duration: 500 }            ]
        }
    }
},
"btillo_t": {
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
                    rect: ['0px', '0px', '47px', '47px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0,
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '47px']
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
                { id: "eid143", tween: [ "style", "${_Ellipse}", "opacity", '0.40592672413793', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid144", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0.40592672413793'}], position: 500, duration: 500 }            ]
        }
    }
},
"contenido": {
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
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: '_2_contenido_ec_rcf_2',
                    type: 'image',
                    clip: ['rect(138.8115234375px 1366px 303.365478515625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_contenido_ec_rcf_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: '_2_contenido_ec_rcf_2Copy',
                    type: 'image',
                    clip: ['rect(306.278076171875px 1366px 370.873779296875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_contenido_ec_rcf_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: '_2_contenido_ec_rcf_2Copy2',
                    type: 'image',
                    clip: ['rect(375.593017578125px 963.48193359375px 690.865478515625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_contenido_ec_rcf_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: '_2_contenido_ec_rcf_2Copy3',
                    type: 'image',
                    clip: ['rect(402.294921875px 1284.296875px 469.283447265625px 978.68310546875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_contenido_ec_rcf_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: '_2_contenido_ec_rcf_2Copy4',
                    type: 'image',
                    clip: ['rect(538.322998046875px 1284.296875px 589.3095703125px 978.68310546875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_contenido_ec_rcf_2.png', '0px', '18.884277343749px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: '_2_contenido_ec_rcf_2Copy6',
                    type: 'image',
                    clip: ['rect(601.34619140625px 1284.296875px 653.2744140625px 978.68310546875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_contenido_ec_rcf_2.png', '0px', '27.4677734375px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: '_2_contenido_ec_rcf_2Copy5',
                    type: 'image',
                    clip: ['rect(473.005126953125px 1284.296875px 527.005126953125px 978.68310546875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_contenido_ec_rcf_2.png', '0px', '8.1542968749992px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['974', '404', 'auto', 'auto', 'auto', 'auto'],
                    id: 'brillo_r1'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['974', '471px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'brillo_r2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['974', '535px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'brillo_r3'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['974', '600px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'brillo_r4'
                },
                {
                    display: 'none',
                    rect: ['979px', '405px', '300px', '56px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'hotspot_1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    display: 'none',
                    rect: ['979px', '473px', '300px', '56px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'guia_participante',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    display: 'none',
                    rect: ['979px', '535px', '300px', '56px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'hotspot_3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    display: 'none',
                    rect: ['979px', '600px', '300px', '56px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'guia_grabacion',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    id: 'pop_1',
                    type: 'rect',
                    rect: ['28', '201', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'lecturas2'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'videos'
                }
            ],
            symbolInstances: [
            {
                id: 'brillo_r2',
                symbolName: 'brillo_r',
                autoPlay: {

               }
            },
            {
                id: 'brillo_r3',
                symbolName: 'brillo_r',
                autoPlay: {

               }
            },
            {
                id: 'videos',
                symbolName: 'videos',
                autoPlay: {

               }
            },
            {
                id: 'lecturas2',
                symbolName: 'lecturas',
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
                id: 'brillo_r4',
                symbolName: 'brillo_r',
                autoPlay: {

               }
            },
            {
                id: 'brillo_r1',
                symbolName: 'brillo_r',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${__2_contenido_ec_rcf_2}": [
                ["style", "top", '-53px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [138.8115234375,1366,303.365478515625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__2_contenido_ec_rcf_2Copy3}": [
                ["style", "top", '-33px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [402.294921875,1284.296875,469.283447265625,978.68310546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_3}": [
                ["style", "top", '535px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '979px']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_guia_grabacion}": [
                ["style", "top", '600px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '979px']
            ],
            "${__2_contenido_ec_rcf_2Copy5}": [
                ["style", "top", '-33px'],
                ["style", "background-position", [0,8.1542968749992], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "clip", [473.005126953125,1284.296875,527.005126953125,978.68310546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${__2_contenido_ec_rcf_2Copy2}": [
                ["style", "top", '-31px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [375.593017578125,963.48193359375,690.865478515625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_brillo_r3}": [
                ["style", "top", '535px'],
                ["style", "display", 'none']
            ],
            "${__2_contenido_ec_rcf_2Copy6}": [
                ["style", "top", '-33px'],
                ["style", "background-position", [0,27.4677734375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "clip", [601.34619140625,1284.296875,653.2744140625,978.68310546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${__2_contenido_ec_rcf_2Copy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-116px'],
                ["style", "clip", [306.278076171875,1366,370.873779296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '979px'],
                ["style", "cursor", 'pointer']
            ],
            "${__2_contenido_ec_rcf_2Copy4}": [
                ["style", "top", '-33px'],
                ["style", "background-position", [0,18.884277343749], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "clip", [538.322998046875,1284.296875,589.3095703125,978.68310546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_brillo_r1}": [
                ["style", "display", 'none']
            ],
            "${_videos}": [
                ["style", "display", 'none']
            ],
            "${_lecturas2}": [
                ["style", "display", 'none']
            ],
            "${_brillo_r2}": [
                ["style", "top", '471px'],
                ["style", "display", 'none']
            ],
            "${_brillo_r4}": [
                ["style", "top", '600px'],
                ["style", "display", 'none']
            ],
            "${_guia_participante}": [
                ["style", "top", '473px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '979px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2847,
            autoPlay: true,
            timeline: [
                { id: "eid174", tween: [ "style", "${__2_contenido_ec_rcf_2Copy3}", "top", '0px', { fromValue: '-33px'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid178", tween: [ "style", "${__2_contenido_ec_rcf_2Copy6}", "opacity", '1', { fromValue: '0'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid262", tween: [ "style", "${_lecturas2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid240", tween: [ "style", "${_hotspot_3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid168", tween: [ "style", "${__2_contenido_ec_rcf_2Copy2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 750, easing: "easeOutBack" },
                { id: "eid242", tween: [ "style", "${_hotspot_1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid156", tween: [ "style", "${__2_contenido_ec_rcf_2}", "top", '0px', { fromValue: '-53px'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid162", tween: [ "style", "${__2_contenido_ec_rcf_2Copy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 610, easing: "easeOutBack" },
                { id: "eid241", tween: [ "style", "${_guia_participante}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid184", tween: [ "style", "${__2_contenido_ec_rcf_2Copy4}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid170", tween: [ "style", "${__2_contenido_ec_rcf_2Copy6}", "top", '0px', { fromValue: '-33px'}], position: 1865, duration: 500, easing: "easeOutBack" },
                { id: "eid194", tween: [ "style", "${_brillo_r2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid239", tween: [ "style", "${_guia_grabacion}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid172", tween: [ "style", "${__2_contenido_ec_rcf_2Copy5}", "top", '0px', { fromValue: '-33px'}], position: 1610, duration: 500, easing: "easeOutBack" },
                { id: "eid176", tween: [ "style", "${__2_contenido_ec_rcf_2Copy4}", "top", '0px', { fromValue: '-33px'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid180", tween: [ "style", "${__2_contenido_ec_rcf_2Copy5}", "opacity", '1', { fromValue: '0'}], position: 1610, duration: 500, easing: "easeOutBack" },
                { id: "eid158", tween: [ "style", "${__2_contenido_ec_rcf_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid193", tween: [ "style", "${_brillo_r1}", "display", 'block', { fromValue: 'none'}], position: 1980, duration: 0 },
                { id: "eid160", tween: [ "style", "${__2_contenido_ec_rcf_2Copy}", "left", '0px', { fromValue: '-116px'}], position: 1000, duration: 610, easing: "easeOutBack" },
                { id: "eid195", tween: [ "style", "${_brillo_r3}", "display", 'block', { fromValue: 'none'}], position: 2549, duration: 0 },
                { id: "eid182", tween: [ "style", "${__2_contenido_ec_rcf_2Copy3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid166", tween: [ "style", "${__2_contenido_ec_rcf_2Copy2}", "top", '0px', { fromValue: '-31px'}], position: 1250, duration: 750, easing: "easeOutBack" },
                { id: "eid196", tween: [ "style", "${_brillo_r4}", "display", 'block', { fromValue: 'none'}], position: 2847, duration: 0 },
                { id: "eid264", tween: [ "style", "${_videos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"brillo_r": {
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
                    rect: ['22px', '0px', '17px', '56px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['-21']],
                    rect: ['11px', '0px', '6px', '56px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
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
                ["style", "opacity", '0'],
                ["style", "left", '22px'],
                ["style", "top", '0px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewX", '-21deg'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '11px'],
                ["style", "width", '6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '56px'],
                ["style", "width", '49px']
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
                { id: "eid186", tween: [ "style", "${_Rectangle}", "left", '289px', { fromValue: '22px'}], position: 0, duration: 1000 },
                { id: "eid185", tween: [ "style", "${_RectangleCopy}", "left", '278px', { fromValue: '11px'}], position: 0, duration: 1000 },
                { id: "eid188", tween: [ "style", "${_RectangleCopy}", "opacity", '0.43119612068966', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid191", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0.431196004152298'}], position: 750, duration: 250 },
                { id: "eid190", tween: [ "style", "${_Rectangle}", "opacity", '0.43119612068966', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid192", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0.431196004152298'}], position: 750, duration: 250 }            ]
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
                    rect: ['-30px', '-201px', '1367px', '768px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,0.33)']
                },
                {
                    rect: ['0px', '0px', '1300px', '362px', 'auto', 'auto'],
                    type: 'image',
                    id: '_2_pop_ec_rcf_2',
                    display: 'none',
                    clip: ['rect(0px 1198.65380859375px 362px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_pop_ec_rcf_2.png', '0px', '0px']
                },
                {
                    rect: ['-73px', '-45px', '1300px', '362px', 'auto', 'auto'],
                    type: 'image',
                    cursor: ['pointer'],
                    id: 'cerrar',
                    display: 'none',
                    clip: ['rect(151.701904296875px 1285.01708984375px 228.245849609375px 1212.1650390625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2_pop_ec_rcf_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(0,0,0,0.33)'],
                ["style", "display", 'none'],
                ["style", "top", '574px'],
                ["style", "left", '-33px'],
                ["style", "width", '1367px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_cerrar}": [
                ["style", "-webkit-transform-origin", [95.62,53.62], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [95.62,53.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [95.62,53.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [95.62,53.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [95.62,53.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [95.62,53.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-109deg'],
                ["transform", "scaleX", '0.36991'],
                ["style", "opacity", '0'],
                ["style", "left", '-73px'],
                ["style", "top", '-45px'],
                ["transform", "scaleY", '0.36991'],
                ["style", "display", 'none'],
                ["style", "clip", [151.701904296875,1285.01708984375,228.245849609375,1212.1650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${__2_pop_ec_rcf_2}": [
                ["style", "display", 'none'],
                ["style", "clip", [0,1198.65380859375,362,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-3px'],
                ["style", "top", '775px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid197", tween: [ "style", "${__2_pop_ec_rcf_2}", "display", 'block', { fromValue: 'none'}], position: 198, duration: 0 },
                { id: "eid223", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 604, duration: 0, easing: "easeOutBack" },
                { id: "eid208", tween: [ "style", "${__2_pop_ec_rcf_2}", "left", '0px', { fromValue: '-3px'}], position: 198, duration: 780, easing: "easeOutBack" },
                { id: "eid212", tween: [ "style", "${_Rectangle2}", "left", '-30px', { fromValue: '-33px'}], position: 21, duration: 780, easing: "easeOutBack" },
                { id: "eid218", tween: [ "transform", "${_cerrar}", "scaleY", '1', { fromValue: '0.36991'}], position: 604, duration: 896, easing: "easeOutBack" },
                { id: "eid210", tween: [ "style", "${__2_pop_ec_rcf_2}", "top", '0px', { fromValue: '775px'}], position: 198, duration: 780, easing: "easeOutBack" },
                { id: "eid214", tween: [ "style", "${_Rectangle2}", "top", '-201px', { fromValue: '574px'}], position: 21, duration: 780, easing: "easeOutBack" },
                { id: "eid222", tween: [ "style", "${_cerrar}", "opacity", '1', { fromValue: '0'}], position: 604, duration: 896, easing: "easeOutBack" },
                { id: "eid216", tween: [ "transform", "${_cerrar}", "scaleX", '1', { fromValue: '0.36991'}], position: 604, duration: 896, easing: "easeOutBack" },
                { id: "eid220", tween: [ "transform", "${_cerrar}", "rotateZ", '0deg', { fromValue: '-109deg'}], position: 604, duration: 896, easing: "easeOutBack" },
                { id: "eid198", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 21, duration: 0 }            ]
        }
    }
},
"lecturas": {
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
                    id: 'lecturas',
                    type: 'image',
                    rect: ['auto', 'auto', '1366px', '768px', '-96px', '0px'],
                    fill: ['rgba(0,0,0,0)', 'images/lec-bienvenida.png', '0px', '0px']
                },
                {
                    rect: ['714px', '396px', '455px', '51px', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    id: 'estrategias_facilitacion',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    rect: ['714px', '447px', '455px', '49px', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    id: 'estudiante_adulto',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    rect: ['714px', '496px', '455px', '49px', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    id: 'lineamientos_organizacionales',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lineamientos_organizacionales}": [
                ["style", "top", '496px'],
                ["style", "height", '49px'],
                ["style", "display", 'none'],
                ["style", "left", '714px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_estudiante_adulto}": [
                ["style", "top", '447px'],
                ["style", "height", '49px'],
                ["style", "display", 'none'],
                ["style", "left", '714px'],
                ["style", "cursor", 'pointer']
            ],
            "${_lecturas}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '0'],
                ["style", "bottom", '0px'],
                ["transform", "scaleX", '0'],
                ["style", "right", '-96px'],
                ["style", "left", 'auto']
            ],
            "${_estrategias_facilitacion}": [
                ["style", "top", '396px'],
                ["style", "height", '51px'],
                ["style", "display", 'none'],
                ["style", "left", '714px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid249", tween: [ "transform", "${_lecturas}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid253", tween: [ "style", "${_estudiante_adulto}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid254", tween: [ "style", "${_lineamientos_organizacionales}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid251", tween: [ "transform", "${_lecturas}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid252", tween: [ "style", "${_estrategias_facilitacion}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid247", tween: [ "style", "${_lecturas}", "right", '0px', { fromValue: '-96px'}], position: 0, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"videos": {
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
                    type: 'rect',
                    id: 'videos',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0.20)']
                },
                {
                    type: 'rect',
                    id: 'videoCont',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['322px', '181px', '722px', '406px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_videoCont}": [
                ["style", "top", '181px'],
                ["style", "height", '406px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '322px'],
                ["style", "width", '722px']
            ],
            "${_videos}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.20)']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
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
