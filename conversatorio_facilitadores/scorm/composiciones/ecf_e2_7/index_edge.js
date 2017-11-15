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
                type: 'image',
                rect: ['0', '0','1366px','768px','auto', 'auto'],
                clip: ['rect(185.64453125px 1320.998046875px 329.736328125px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy',
                type: 'image',
                rect: ['0', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(352.752197265625px 1320.998046875px 420.17529296875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy2',
                type: 'image',
                rect: ['0', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(429.43896484375px 1320.998046875px 492.62744140625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy3',
                type: 'image',
                rect: ['0', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(506.853759765625px 1320.998046875px 566.606689453125px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'character',
                type: 'rect',
                rect: ['188px', '241px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 347.88720703125px 383.21923828125px 0px)']
            },
            {
                id: 'hotspot_r',
                display: 'none',
                type: 'rect',
                rect: ['1009px', '529px','222px','69px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'etiqueta',
                type: 'rect',
                rect: ['0px', '82px','auto','auto','auto', 'auto']
            },
            {
                id: 'instruccion',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(103.107421875px 905.84375px 145.432373046875px 354.65185546875px)'],
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
                id: 'hotspot_1',
                display: 'none',
                type: 'rect',
                rect: ['609px', '358px','400px','59px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 0,
                fill: ["rgba(0,0,0,0.6824)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_2',
                display: 'none',
                type: 'rect',
                rect: ['609px', '433px','400px','59px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.6824)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_3',
                display: 'none',
                type: 'rect',
                rect: ['609px', '500px','400px','59px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.6824)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'pop_1',
                type: 'rect',
                rect: ['-5', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'pop_2',
                type: 'rect',
                rect: ['-5px', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'pop_3',
                type: 'rect',
                rect: ['-5', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'etiqueta',
                symbolName: 'etiqueta',
                autoPlay: {

                }
            },
            {
                id: 'character',
                symbolName: 'character',
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
                id: 'pop_3',
                symbolName: 'pop_3'
            }
            ]
        },
    states: {
        "Base State": {
            "${_hotspot_1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_hotspot_r}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_character}": [
                ["style", "top", '241px'],
                ["style", "left", '188px'],
                ["style", "clip", [0,347.88720703125,383.21923828125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_etiqueta}": [
                ["style", "left", '0px'],
                ["style", "top", '82px']
            ],
            "${_contenidoCopy2}": [
                ["style", "top", '122px'],
                ["style", "opacity", '0'],
                ["style", "clip", [429.43896484375,1320.998046875,492.62744140625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_instruccion}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [103.107421875,905.84375,145.432373046875,354.65185546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-129px']
            ],
            "${_hotspot_2}": [
                ["style", "top", '433px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_texto_etiqueta}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-129px'],
                ["style", "clip", [103.107421875,377.49658203125,145.432373046875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_3}": [
                ["style", "top", '500px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_contenido}": [
                ["style", "-webkit-transform-origin", [33.24,41.49], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [33.24,41.49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [33.24,41.49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [33.24,41.49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [33.24,41.49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [33.24,41.49],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.18616'],
                ["transform", "scaleX", '0.18616'],
                ["style", "opacity", '0'],
                ["style", "clip", [185.64453125,1320.998046875,329.736328125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy3}": [
                ["style", "top", '122px'],
                ["style", "opacity", '0'],
                ["style", "clip", [506.853759765625,1320.998046875,566.606689453125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                ["style", "top", '122px'],
                ["style", "opacity", '0'],
                ["style", "clip", [352.752197265625,1320.998046875,420.17529296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_pop_2}": [
                ["style", "left", '-5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "style", "${_texto_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 370, duration: 500, easing: "easeOutBack" },
                { id: "eid146", tween: [ "style", "${_hotspot_3}", "display", 'block', { fromValue: 'none'}], position: 1681, duration: 0 },
                { id: "eid144", tween: [ "style", "${_hotspot_1}", "display", 'block', { fromValue: 'none'}], position: 1440, duration: 0 },
                { id: "eid109", tween: [ "transform", "${_contenido}", "scaleX", '1', { fromValue: '0.18616'}], position: 712, duration: 538, easing: "easeOutBack" },
                { id: "eid130", tween: [ "style", "${_contenidoCopy3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid117", tween: [ "style", "${_contenidoCopy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid126", tween: [ "style", "${_hotspot_r}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid145", tween: [ "style", "${_hotspot_2}", "display", 'block', { fromValue: 'none'}], position: 1555, duration: 0 },
                { id: "eid31", tween: [ "style", "${_texto_etiqueta}", "left", '0px', { fromValue: '-129px'}], position: 370, duration: 500, easing: "easeOutBack" },
                { id: "eid28", tween: [ "style", "${_instruccion}", "left", '0px', { fromValue: '-129px'}], position: 435, duration: 500, easing: "easeOutBack" },
                { id: "eid111", tween: [ "transform", "${_contenido}", "scaleY", '1', { fromValue: '0.18616'}], position: 712, duration: 538, easing: "easeOutBack" },
                { id: "eid113", tween: [ "style", "${_contenido}", "opacity", '1', { fromValue: '0'}], position: 712, duration: 538, easing: "easeOutBack" },
                { id: "eid128", tween: [ "style", "${_contenidoCopy2}", "opacity", '1', { fromValue: '0'}], position: 1122, duration: 500, easing: "easeOutBack" },
                { id: "eid129", tween: [ "style", "${_contenidoCopy3}", "top", '0px', { fromValue: '122px'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid127", tween: [ "style", "${_contenidoCopy2}", "top", '0px', { fromValue: '122px'}], position: 1122, duration: 500, easing: "easeOutBack" },
                { id: "eid30", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 435, duration: 500, easing: "easeOutBack" },
                { id: "eid115", tween: [ "style", "${_contenidoCopy}", "top", '0px', { fromValue: '122px'}], position: 1000, duration: 500, easing: "easeOutBack" }            ]
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
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '1068px']
            ],
            "${_etiquetaCopy}": [
                ["style", "top", '-63px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [80.439208984375,826,131.00634765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '-124px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [131.214599609375,826,202.869384765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiqueta}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,826,80.296142578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
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
},
"chest": {
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
                    rect: ['-85px', '-15px', '519px', '560px', 'auto', 'auto'],
                    id: 'chest',
                    type: 'image',
                    clip: ['rect(14.29296875px 261.51171875px 286.74609375px 113.63671875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['-32px', '-16px', '519px', '560px', 'auto', 'auto'],
                    id: 'arm_1a',
                    type: 'image',
                    clip: ['rect(65.6796875px 98.8046875px 197.19921875px 29.7578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['-34px', '-71px', '519px', '560px', 'auto', 'auto'],
                    id: 'arm_1b',
                    type: 'image',
                    clip: ['rect(218.78515625px 72.40625px 372.19140625px 29.7578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['114px', '-360px', '519px', '560px', 'auto', 'auto'],
                    transform: [[0, 0], ['109']],
                    type: 'image',
                    id: 'arm_2c',
                    display: 'none',
                    clip: ['rect(394.5556640625px 84.3505859375px 552.265869140625px 37.9287109375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['-162px', '37px', '519px', '560px', 'auto', 'auto'],
                    id: 'arm_2a',
                    type: 'image',
                    clip: ['rect(14.29296875px 365.625px 160.02734375px 307.2265625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['-241px', '41px', '519px', '560px', 'auto', 'auto'],
                    transform: [[0, 0], ['124']],
                    type: 'image',
                    id: 'arm_2b',
                    display: 'block',
                    clip: ['rect(14.29296875px 505.92578125px 160.02734375px 393.65625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arm_1b}": [
                ["style", "-webkit-transform-origin", [10.13,41.79], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [218.78515625,72.40625,372.19140625,29.7578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-34px'],
                ["style", "top", '-71px']
            ],
            "${_chest}": [
                ["style", "top", '-15px'],
                ["style", "left", '-85px'],
                ["style", "clip", [14.29296875,261.51171875,286.74609375,113.63671875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_arm_1a}": [
                ["style", "-webkit-transform-origin", [15.1,15.95], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [65.6796875,98.8046875,197.19921875,29.7578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-32px'],
                ["style", "top", '-16px']
            ],
            "${_arm_2a}": [
                ["style", "-webkit-transform-origin", [62.29,5.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-162px'],
                ["style", "clip", [14.29296875,365.625,160.02734375,307.2265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '37px']
            ],
            "${_arm_2c}": [
                ["style", "-webkit-transform-origin", [11.99,96.59], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '109deg'],
                ["style", "display", 'none'],
                ["style", "top", '-360px'],
                ["style", "clip", [394.5556640625,84.3505859375,552.265869140625,37.9287109375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '114px']
            ],
            "${_arm_2b}": [
                ["style", "-webkit-transform-origin", [80.46,24.46], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '124deg'],
                ["style", "display", 'block'],
                ["style", "clip", [14.29296875,505.92578125,160.02734375,393.65625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-241px'],
                ["style", "top", '41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "transform", "${_arm_1b}", "rotateZ", '-28deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid23", tween: [ "transform", "${_arm_1b}", "rotateZ", '0deg', { fromValue: '-28deg'}], position: 10000, duration: 500 },
                { id: "eid50", tween: [ "transform", "${_arm_1b}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 17550, duration: 500 },
                { id: "eid58", tween: [ "transform", "${_arm_1b}", "rotateZ", '0deg', { fromValue: '12deg'}], position: 19050, duration: 500 },
                { id: "eid28", tween: [ "transform", "${_arm_2c}", "rotateZ", '40deg', { fromValue: '109deg'}], position: 5250, duration: 500 },
                { id: "eid46", tween: [ "transform", "${_arm_2c}", "rotateZ", '109deg', { fromValue: '40deg'}], position: 8250, duration: 500 },
                { id: "eid15", tween: [ "style", "${_arm_1b}", "top", '-76px', { fromValue: '-71px'}], position: 2000, duration: 500 },
                { id: "eid21", tween: [ "style", "${_arm_1b}", "top", '-71px', { fromValue: '-76px'}], position: 10000, duration: 500 },
                { id: "eid51", tween: [ "transform", "${_arm_2a}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 17550, duration: 500 },
                { id: "eid57", tween: [ "transform", "${_arm_2a}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 19050, duration: 500 },
                { id: "eid29", tween: [ "style", "${_arm_2b}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid44", tween: [ "style", "${_arm_2b}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid13", tween: [ "transform", "${_arm_1a}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid24", tween: [ "transform", "${_arm_1a}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 10000, duration: 500 },
                { id: "eid26", tween: [ "style", "${_arm_2b}", "left", '-232px', { fromValue: '-241px'}], position: 5000, duration: 500 },
                { id: "eid48", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-232px'}], position: 8500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-241px'}], position: 9000, duration: 0 },
                { id: "eid52", tween: [ "style", "${_arm_2b}", "left", '-226px', { fromValue: '-241px'}], position: 17550, duration: 500 },
                { id: "eid61", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-226px'}], position: 19053, duration: 497 },
                { id: "eid25", tween: [ "transform", "${_arm_2b}", "rotateZ", '18deg', { fromValue: '124deg'}], position: 5000, duration: 500 },
                { id: "eid43", tween: [ "transform", "${_arm_2b}", "rotateZ", '124deg', { fromValue: '18deg'}], position: 8500, duration: 500 },
                { id: "eid14", tween: [ "style", "${_arm_1b}", "left", '-47px', { fromValue: '-34px'}], position: 2000, duration: 500 },
                { id: "eid22", tween: [ "style", "${_arm_1b}", "left", '-34px', { fromValue: '-47px'}], position: 10000, duration: 500 },
                { id: "eid30", tween: [ "style", "${_arm_2c}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid47", tween: [ "style", "${_arm_2c}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_arm_2b}", "top", '40px', { fromValue: '41px'}], position: 5000, duration: 500 },
                { id: "eid42", tween: [ "style", "${_arm_2b}", "top", '41px', { fromValue: '40px'}], position: 8500, duration: 500 },
                { id: "eid53", tween: [ "style", "${_arm_2b}", "top", '44px', { fromValue: '41px'}], position: 17550, duration: 500 },
                { id: "eid62", tween: [ "style", "${_arm_2b}", "top", '41px', { fromValue: '44px'}], position: 19053, duration: 497 }            ]
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
                    id: 'chest',
                    type: 'rect',
                    clip: ['rect(0px 362.091796875px 300px 0px)'],
                    rect: ['-229px', '-150px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'head',
                    type: 'rect',
                    rect: ['-82px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'chest',
                symbolName: 'chest',
                autoPlay: {

               }
            },
            {
                id: 'head',
                symbolName: 'head',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_head}": [
                ["style", "-webkit-transform-origin", [53.8,86.91], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '57px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_chest}": [
                ["style", "top", '94px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,362.091796875,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '394px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
                { id: "eid63", tween: [ "transform", "${_head}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 3500, duration: 500 },
                { id: "eid64", tween: [ "transform", "${_head}", "rotateZ", '4deg', { fromValue: '-3deg'}], position: 9500, duration: 500 },
                { id: "eid65", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 15000, duration: 500 }            ]
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
                    rect: ['-143px', '-305px', '519px', '560px', 'auto', 'auto'],
                    id: 'head',
                    type: 'image',
                    clip: ['rect(308.42578125px 238.14453125px 439.2265625px 146.1171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    id: 'eyes2',
                    type: 'rect',
                    rect: ['21px', '55px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mouth2',
                    type: 'rect',
                    rect: ['43px', '91px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'eyes2',
                symbolName: 'eyes',
                autoPlay: {

               }
            },
            {
                id: 'mouth2',
                symbolName: 'mouth',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mouth2}": [
                ["style", "top", '91px'],
                ["style", "left", '43px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '100px']
            ],
            "${_eyes2}": [
                ["style", "left", '21px'],
                ["style", "top", '55px']
            ],
            "${_head}": [
                ["style", "top", '-305px'],
                ["style", "clip", [308.42578125,238.14453125,439.2265625,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-143px']
            ],
            "${_eyes}": [
                ["style", "left", '-139px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            timeline: [
            ]
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
                    rect: ['-154px', '-531px', '519px', '560px', 'auto', 'auto'],
                    type: 'image',
                    id: 'mouth',
                    display: 'none',
                    clip: ['rect(533.55859375px 184.09228515625px 547.0078125px 169.7265625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-63.619140625px', '0px']
                },
                {
                    rect: ['-154px', '-531px', '519px', '560px', 'auto', 'auto'],
                    type: 'image',
                    id: 'mouthCopy',
                    display: 'block',
                    clip: ['rect(532.453857421875px 191.5986328125px 554.6064453125px 157.09326171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-36.3828125px', '0px']
                },
                {
                    rect: ['-154px', '-531px', '519px', '560px', 'auto', 'auto'],
                    type: 'image',
                    id: 'mouthCopy2',
                    display: 'none',
                    clip: ['rect(532.453857421875px 191.21044921875px 550.6630859375px 156.8408203125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-2.0273437499993px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '40px']
            ],
            "${_mouthCopy}": [
                ["style", "top", '-531px'],
                ["style", "display", 'block'],
                ["style", "clip", [532.453857421875,191.5986328125,554.6064453125,157.09326171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-36.3828125,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px']
            ],
            "${_mouthCopy2}": [
                ["style", "top", '-531px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-2.0273437499993,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px'],
                ["style", "clip", [532.453857421875,191.21044921875,550.6630859375,156.8408203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_mouth}": [
                ["style", "top", '-531px'],
                ["style", "display", 'none'],
                ["style", "left", '-154px'],
                ["style", "clip", [533.55859375,184.09228515625,547.0078125,169.7265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-63.619140625,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2626,
            autoPlay: true,
            labels: {
                "speak": 500
            },
            timeline: [
                { id: "eid83", tween: [ "style", "${_mouth}", "display", 'block', { fromValue: 'none'}], position: 788, duration: 0 },
                { id: "eid84", tween: [ "style", "${_mouth}", "display", 'none', { fromValue: 'block'}], position: 924, duration: 0 },
                { id: "eid90", tween: [ "style", "${_mouth}", "display", 'block', { fromValue: 'none'}], position: 1189, duration: 0 },
                { id: "eid89", tween: [ "style", "${_mouth}", "display", 'none', { fromValue: 'block'}], position: 1318, duration: 0 },
                { id: "eid95", tween: [ "style", "${_mouth}", "display", 'block', { fromValue: 'none'}], position: 1588, duration: 0 },
                { id: "eid96", tween: [ "style", "${_mouth}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid101", tween: [ "style", "${_mouth}", "display", 'block', { fromValue: 'none'}], position: 1891, duration: 0 },
                { id: "eid102", tween: [ "style", "${_mouth}", "display", 'none', { fromValue: 'block'}], position: 2045, duration: 0 },
                { id: "eid105", tween: [ "style", "${_mouth}", "display", 'block', { fromValue: 'none'}], position: 2171, duration: 0 },
                { id: "eid106", tween: [ "style", "${_mouth}", "display", 'none', { fromValue: 'block'}], position: 2320, duration: 0 },
                { id: "eid78", tween: [ "style", "${_mouthCopy2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid79", tween: [ "style", "${_mouthCopy2}", "display", 'none', { fromValue: 'block'}], position: 647, duration: 0 },
                { id: "eid88", tween: [ "style", "${_mouthCopy2}", "display", 'block', { fromValue: 'none'}], position: 1062, duration: 0 },
                { id: "eid87", tween: [ "style", "${_mouthCopy2}", "display", 'none', { fromValue: 'block'}], position: 1189, duration: 0 },
                { id: "eid92", tween: [ "style", "${_mouthCopy2}", "display", 'block', { fromValue: 'none'}], position: 1318, duration: 0 },
                { id: "eid91", tween: [ "style", "${_mouthCopy2}", "display", 'none', { fromValue: 'block'}], position: 1452, duration: 0 },
                { id: "eid97", tween: [ "style", "${_mouthCopy2}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid98", tween: [ "style", "${_mouthCopy2}", "display", 'none', { fromValue: 'block'}], position: 1891, duration: 0 },
                { id: "eid99", tween: [ "style", "${_mouthCopy2}", "display", 'block', { fromValue: 'none'}], position: 2320, duration: 0 },
                { id: "eid100", tween: [ "style", "${_mouthCopy2}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid80", tween: [ "style", "${_mouthCopy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid81", tween: [ "style", "${_mouthCopy}", "display", 'block', { fromValue: 'none'}], position: 647, duration: 0 },
                { id: "eid82", tween: [ "style", "${_mouthCopy}", "display", 'none', { fromValue: 'block'}], position: 788, duration: 0 },
                { id: "eid86", tween: [ "style", "${_mouthCopy}", "display", 'block', { fromValue: 'none'}], position: 924, duration: 0 },
                { id: "eid85", tween: [ "style", "${_mouthCopy}", "display", 'none', { fromValue: 'block'}], position: 1062, duration: 0 },
                { id: "eid94", tween: [ "style", "${_mouthCopy}", "display", 'block', { fromValue: 'none'}], position: 1452, duration: 0 },
                { id: "eid93", tween: [ "style", "${_mouthCopy}", "display", 'none', { fromValue: 'block'}], position: 1588, duration: 0 },
                { id: "eid103", tween: [ "style", "${_mouthCopy}", "display", 'block', { fromValue: 'none'}], position: 2045, duration: 0 },
                { id: "eid104", tween: [ "style", "${_mouthCopy}", "display", 'none', { fromValue: 'block'}], position: 2171, duration: 0 },
                { id: "eid107", tween: [ "style", "${_mouthCopy}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 }            ]
        }
    }
},
"eyes": {
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
                    rect: ['-137px', '-489px', '519px', '560px', 'auto', 'auto'],
                    id: 'eyes',
                    type: 'image',
                    clip: ['rect(496.640380859375px 204.19140625px 510.875px 146.1171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['-137px', '-489px', '519px', '560px', 'auto', 'auto'],
                    type: 'image',
                    id: 'eyesCopy2',
                    display: 'none',
                    clip: ['rect(496.640380859375px 204.19140625px 510.875px 146.1171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '12.383056640625px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eyesCopy2}": [
                ["style", "top", '-489px'],
                ["style", "display", 'none'],
                ["style", "left", '-137px'],
                ["style", "clip", [496.64038085938,204.19140625,510.875,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,12.383056640625], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_eyes}": [
                ["style", "top", '-489px'],
                ["style", "clip", [496.640380859375,204.19140625,510.875,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-137px']
            ],
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            timeline: [
                { id: "eid70", tween: [ "style", "${_eyesCopy2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_eyesCopy2}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid72", tween: [ "style", "${_eyesCopy2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid73", tween: [ "style", "${_eyesCopy2}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid74", tween: [ "style", "${_eyesCopy2}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid75", tween: [ "style", "${_eyesCopy2}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
                { id: "eid76", tween: [ "style", "${_eyesCopy2}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid77", tween: [ "style", "${_eyesCopy2}", "display", 'none', { fromValue: 'block'}], position: 18750, duration: 0 },
                { id: "eid66", tween: [ "style", "${_eyesCopy2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_eyesCopy2}", "display", 'none', { fromValue: 'block'}], position: 21250, duration: 0 },
                { id: "eid68", tween: [ "style", "${_eyesCopy2}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid69", tween: [ "style", "${_eyesCopy2}", "display", 'none', { fromValue: 'block'}], position: 21750, duration: 0 }            ]
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
                    rect: ['-252px', '83px', '519px', '560px', 'auto', 'auto'],
                    id: 'legs',
                    type: 'image',
                    clip: ['rect(194.68359375px 461.9609375px 537.5px 301.3125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    id: 'trunk',
                    type: 'rect',
                    clip: ['rect(0px 336.4342346191406px 394px 0px)'],
                    rect: ['7', '-11', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'trunk',
                symbolName: 'trunk',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '620px'],
                ["style", "width", '300px']
            ],
            "${_legs}": [
                ["style", "top", '83px'],
                ["style", "left", '-252px'],
                ["style", "clip", [194.68359375,461.9609375,537.5,301.3125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_trunk}": [
                ["style", "-webkit-transform-origin", [36.01,80.39], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [0,336.4342346191406,394,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "transform", "${_trunk}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1500, duration: 500 },
                { id: "eid11", tween: [ "transform", "${_trunk}", "rotateZ", '-2deg', { fromValue: '3deg'}], position: 4000, duration: 500 },
                { id: "eid12", tween: [ "transform", "${_trunk}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 12000, duration: 500 }            ]
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
                    rect: ['0px', '0px', '59px', '59px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.44269049657534,
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
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '59px'],
                ["style", "width", '59px']
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
                { id: "eid124", tween: [ "style", "${_Ellipse}", "opacity", '0.44269049167633057', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid125", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0.44269049167633057'}], position: 500, duration: 500 }            ]
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
                    rect: ['-3px', '-1px', '1374px', '768px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,0.68)']
                },
                {
                    rect: ['5px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'pop_1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pop_1.png', '0px', '0px']
                },
                {
                    display: 'none',
                    rect: ['1110px', '226px', '66px', '67px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'cerrar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0.6824)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pop_1}": [
                ["style", "top", '1px'],
                ["style", "left", '-1224px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-1408px'],
                ["color", "background-color", 'rgba(0,0,0,0.68)']
            ],
            "${_cerrar}": [
                ["style", "top", '226px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1110px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid136", tween: [ "style", "${_Rectangle}", "left", '-3px', { fromValue: '-1408px'}], position: 116, duration: 634, easing: "easeOutBack" },
                { id: "eid143", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid141", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 116, duration: 0, easing: "easeOutBack" },
                { id: "eid142", tween: [ "style", "${_pop_1}", "display", 'block', { fromValue: 'none'}], position: 25, duration: 0, easing: "easeOutBack" },
                { id: "eid134", tween: [ "style", "${_pop_1}", "top", '0px', { fromValue: '1px'}], position: 25, duration: 650, easing: "easeOutBack" },
                { id: "eid138", tween: [ "style", "${_Rectangle}", "top", '-1px', { fromValue: '0px'}], position: 116, duration: 634, easing: "easeOutBack" },
                { id: "eid132", tween: [ "style", "${_pop_1}", "left", '5px', { fromValue: '-1224px'}], position: 25, duration: 650, easing: "easeOutBack" },
                { id: "eid140", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 116, duration: 634, easing: "easeOutBack" }            ]
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
                    rect: ['-3px', '-1px', '1374px', '768px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,0.68)']
                },
                {
                    rect: ['5px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'pop_1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pop_2.png', '0px', '0px']
                },
                {
                    display: 'none',
                    rect: ['1110px', '255px', '66px', '67px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'cerrar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0.6824)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pop_1}": [
                ["style", "top", '1px'],
                ["style", "left", '-1224px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-1408px'],
                ["color", "background-color", 'rgba(0,0,0,0.68)']
            ],
            "${_cerrar}": [
                ["style", "top", '255px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1110px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid140", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 116, duration: 634, easing: "easeOutBack" },
                { id: "eid143", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid141", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 116, duration: 0, easing: "easeOutBack" },
                { id: "eid142", tween: [ "style", "${_pop_1}", "display", 'block', { fromValue: 'none'}], position: 25, duration: 0, easing: "easeOutBack" },
                { id: "eid134", tween: [ "style", "${_pop_1}", "top", '0px', { fromValue: '1px'}], position: 25, duration: 650, easing: "easeOutBack" },
                { id: "eid132", tween: [ "style", "${_pop_1}", "left", '5px', { fromValue: '-1224px'}], position: 25, duration: 650, easing: "easeOutBack" },
                { id: "eid138", tween: [ "style", "${_Rectangle}", "top", '-1px', { fromValue: '0px'}], position: 116, duration: 634, easing: "easeOutBack" },
                { id: "eid136", tween: [ "style", "${_Rectangle}", "left", '-3px', { fromValue: '-1408px'}], position: 116, duration: 634, easing: "easeOutBack" }            ]
        }
    }
},
"pop_3": {
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
                    rect: ['-3px', '-1px', '1374px', '768px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,0.68)']
                },
                {
                    rect: ['5px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'pop_1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/pop_3.png', '0px', '0px']
                },
                {
                    display: 'none',
                    rect: ['1110px', '255px', '66px', '67px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'cerrar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0.6824)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pop_1}": [
                ["style", "top", '1px'],
                ["style", "left", '-1224px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-1408px'],
                ["color", "background-color", 'rgba(0,0,0,0.68)']
            ],
            "${_cerrar}": [
                ["style", "top", '255px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1110px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid136", tween: [ "style", "${_Rectangle}", "left", '-3px', { fromValue: '-1408px'}], position: 116, duration: 634, easing: "easeOutBack" },
                { id: "eid143", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid141", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 116, duration: 0, easing: "easeOutBack" },
                { id: "eid142", tween: [ "style", "${_pop_1}", "display", 'block', { fromValue: 'none'}], position: 25, duration: 0, easing: "easeOutBack" },
                { id: "eid134", tween: [ "style", "${_pop_1}", "top", '0px', { fromValue: '1px'}], position: 25, duration: 650, easing: "easeOutBack" },
                { id: "eid138", tween: [ "style", "${_Rectangle}", "top", '-1px', { fromValue: '0px'}], position: 116, duration: 634, easing: "easeOutBack" },
                { id: "eid132", tween: [ "style", "${_pop_1}", "left", '5px', { fromValue: '-1224px'}], position: 25, duration: 650, easing: "easeOutBack" },
                { id: "eid140", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 116, duration: 634, easing: "easeOutBack" }            ]
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
