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
                id: 'audio_1',
                type: 'audio',
                tag: 'audio',
                rect: ['944', '352','320px','45px','auto', 'auto'],
                source: ['media/ecf_e3_2.mp3'],
                preload: 'auto'
            },
            {
                id: 'audio_box',
                type: 'image',
                rect: ['1364px', '106px','49px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"audio_box.png",'0px','0px'],
                transform: [[],['90']]
            },
            {
                id: 'etiqueta',
                type: 'rect',
                rect: ['0px', '128px','auto','auto','auto', 'auto']
            },
            {
                id: 'contenido',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(128.542236328125px 1366px 203.857666015625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'chair',
                type: 'image',
                rect: ['998px', '257px','245px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"chair.png",'0px','0px']
            },
            {
                id: 'character',
                type: 'rect',
                rect: ['940px', '99px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 363.0732727050781px 429.935302734375px -46.26318359375px)'],
                transform: [[],[],[],['-0.6962','0.69619']]
            },
            {
                id: 'contenidoCopy',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(228.213623046875px 896.74169921875px 570.9033203125px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenidoCopy2',
                type: 'image',
                rect: ['-76px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(228.213623046875px 1359.42626953125px 570.9033203125px 932.9375px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'bt_audio',
                type: 'rect',
                rect: ['1298px', '133px','auto','auto','auto', 'auto'],
                title: 'audio_1',
                transform: [[],[],[],['0.54957','0.54958']]
            }],
            symbolInstances: [
            {
                id: 'etiqueta',
                symbolName: 'etiqueta',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'character',
                symbolName: 'character',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_etiqueta}": [
                ["style", "left", '0px'],
                ["style", "top", '128px']
            ],
            "${_chair}": [
                ["style", "top", '646px'],
                ["style", "opacity", '0'],
                ["style", "left", '998px']
            ],
            "${_audio_box}": [
                ["style", "top", '106px'],
                ["style", "left", '1364px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_contenido}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-133px'],
                ["style", "clip", [128.542236328125,1366,203.857666015625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_character}": [
                ["style", "top", '488px'],
                ["transform", "scaleY", '0.69619'],
                ["transform", "scaleX", '-0.6962'],
                ["style", "opacity", '0'],
                ["style", "left", '940px'],
                ["style", "clip", [0,363.0732727050781,429.935302734375,-46.26318359375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_bt_audio}": [
                ["style", "top", '133px'],
                ["transform", "scaleX", '0.54957'],
                ["style", "left", '1298px'],
                ["transform", "scaleY", '0.54958']
            ],
            "${_contenidoCopy}": [
                ["style", "top", '-83px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [228.213623046875,896.74169921875,570.9033203125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy2}": [
                ["style", "top", '414px'],
                ["style", "opacity", '0'],
                ["style", "left", '-76px'],
                ["style", "clip", [228.213623046875,1359.42626953125,570.9033203125,932.9375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid28", tween: [ "style", "${_contenido}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid45", tween: [ "style", "${_chair}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 698, easing: "easeOutBack" },
                { id: "eid38", tween: [ "style", "${_chair}", "top", '257px', { fromValue: '646px'}], position: 600, duration: 698, easing: "easeOutBack" },
                { id: "eid30", tween: [ "style", "${_contenidoCopy}", "top", '0px', { fromValue: '-83px'}], position: 328, duration: 510, easing: "easeOutBack" },
                { id: "eid26", tween: [ "style", "${_contenido}", "left", '0px', { fromValue: '-133px'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid36", tween: [ "style", "${_contenidoCopy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 702, easing: "easeOutBack" },
                { id: "eid40", tween: [ "style", "${_character}", "top", '99px', { fromValue: '488px'}], position: 600, duration: 698, easing: "easeOutBack" },
                { id: "eid55", tween: [ "style", "${_character}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 698, easing: "easeOutBack" },
                { id: "eid32", tween: [ "style", "${_contenidoCopy}", "opacity", '1', { fromValue: '0'}], position: 328, duration: 510, easing: "easeOutBack" },
                { id: "eid35", tween: [ "style", "${_contenidoCopy2}", "top", '17px', { fromValue: '414px'}], position: 500, duration: 702, easing: "easeOutBack" }            ]
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
                    rect: ['0px', '-64px', '826px', '204px', 'auto', 'auto'],
                    id: 'etiquetaCopy',
                    type: 'image',
                    clip: ['rect(80.439208984375px 826px 131.00634765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '826px', '204px', 'auto', 'auto'],
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
                ["style", "opacity", '0'],
                ["style", "left", '-210px'],
                ["style", "clip", [0,826,80.296142578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '826px']
            ],
            "${_etiquetaCopy}": [
                ["style", "top", '-63px'],
                ["style", "opacity", '0'],
                ["style", "left", '-210px'],
                ["style", "clip", [80.439208984375,826,131.00634765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1385", tween: [ "style", "${_etiqueta}", "left", '0px', { fromValue: '-210px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1391", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1389", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1379", tween: [ "style", "${_etiquetaCopy}", "top", '-64px', { fromValue: '-63px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1383", tween: [ "style", "${_etiqueta}", "top", '0px', { fromValue: '1px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1381", tween: [ "style", "${_etiquetaCopy}", "left", '0px', { fromValue: '-210px'}], position: 62, duration: 625, easing: "easeOutBack" }            ]
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
                    type: 'image',
                    id: 'chest',
                    rect: ['-85px', '-15px', '519px', '560px', 'auto', 'auto'],
                    clip: ['rect(14.29296875px 261.51171875px 286.74609375px 113.63671875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'arm_1a',
                    rect: ['-32px', '-16px', '519px', '560px', 'auto', 'auto'],
                    clip: ['rect(65.6796875px 98.8046875px 197.19921875px 29.7578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'arm_1b',
                    rect: ['-34px', '-71px', '519px', '560px', 'auto', 'auto'],
                    clip: ['rect(218.78515625px 72.40625px 372.19140625px 29.7578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['109']],
                    type: 'image',
                    rect: ['112px', '-361px', '519px', '560px', 'auto', 'auto'],
                    id: 'arm_2c',
                    display: 'none',
                    clip: ['rect(394.5556640625px 84.3505859375px 552.265869140625px 37.9287109375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'arm_2a',
                    rect: ['-162px', '37px', '519px', '560px', 'auto', 'auto'],
                    clip: ['rect(14.29296875px 365.625px 160.02734375px 307.2265625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['124']],
                    type: 'image',
                    rect: ['-241px', '41px', '519px', '560px', 'auto', 'auto'],
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
                ["style", "top", '-71px'],
                ["transform", "rotateZ", '-32deg'],
                ["style", "-webkit-transform-origin", [10.13,41.79], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-34px'],
                ["style", "clip", [218.78515625,72.40625,372.19140625,29.7578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            "${_arm_2a}": [
                ["style", "top", '37px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [62.29,5.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [14.29296875,365.625,160.02734375,307.2265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-162px']
            ],
            "${_arm_1a}": [
                ["style", "top", '-16px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [15.1,15.95], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-32px'],
                ["style", "clip", [65.6796875,98.8046875,197.19921875,29.7578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_arm_2c}": [
                ["style", "-webkit-transform-origin", [11.99,96.59], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '83deg'],
                ["style", "display", 'none'],
                ["style", "clip", [394.5556640625,84.3505859375,552.265869140625,37.9287109375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '112px'],
                ["style", "top", '-361px']
            ],
            "${_arm_2b}": [
                ["style", "top", '41px'],
                ["transform", "rotateZ", '68deg'],
                ["style", "display", 'block'],
                ["style", "-webkit-transform-origin", [80.46,24.46], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-237px'],
                ["style", "clip", [14.29296875,505.92578125,160.02734375,393.65625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid16", tween: [ "transform", "${_arm_1b}", "rotateZ", '-51deg', { fromValue: '-32deg'}], position: 2000, duration: 500 },
                { id: "eid23", tween: [ "transform", "${_arm_1b}", "rotateZ", '-32deg', { fromValue: '-51deg'}], position: 10000, duration: 500 },
                { id: "eid60", tween: [ "transform", "${_arm_1b}", "rotateZ", '-32deg', { fromValue: '-32deg'}], position: 10500, duration: 0 },
                { id: "eid50", tween: [ "transform", "${_arm_1b}", "rotateZ", '-95deg', { fromValue: '-32deg'}], position: 17550, duration: 500 },
                { id: "eid58", tween: [ "transform", "${_arm_1b}", "rotateZ", '-32deg', { fromValue: '-95deg'}], position: 19050, duration: 500 },
                { id: "eid27", tween: [ "style", "${_arm_2b}", "top", '40px', { fromValue: '41px'}], position: 5000, duration: 500 },
                { id: "eid42", tween: [ "style", "${_arm_2b}", "top", '41px', { fromValue: '40px'}], position: 8500, duration: 500 },
                { id: "eid53", tween: [ "style", "${_arm_2b}", "top", '44px', { fromValue: '41px'}], position: 17550, duration: 500 },
                { id: "eid62", tween: [ "style", "${_arm_2b}", "top", '44px', { fromValue: '44px'}], position: 19053, duration: 133 },
                { id: "eid127", tween: [ "style", "${_arm_2b}", "top", '56px', { fromValue: '44px'}], position: 19186, duration: 364 },
                { id: "eid15", tween: [ "style", "${_arm_1b}", "top", '-76px', { fromValue: '-71px'}], position: 2000, duration: 500 },
                { id: "eid21", tween: [ "style", "${_arm_1b}", "top", '-71px', { fromValue: '-76px'}], position: 10000, duration: 500 },
                { id: "eid56", tween: [ "style", "${_arm_1b}", "top", '-71px', { fromValue: '-71px'}], position: 10500, duration: 0 },
                { id: "eid51", tween: [ "transform", "${_arm_2a}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 17550, duration: 500 },
                { id: "eid57", tween: [ "transform", "${_arm_2a}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 19050, duration: 500 },
                { id: "eid29", tween: [ "style", "${_arm_2b}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid44", tween: [ "style", "${_arm_2b}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid13", tween: [ "transform", "${_arm_1a}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid24", tween: [ "transform", "${_arm_1a}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 10000, duration: 500 },
                { id: "eid28", tween: [ "transform", "${_arm_2c}", "rotateZ", '40deg', { fromValue: '83deg'}], position: 5250, duration: 500 },
                { id: "eid46", tween: [ "transform", "${_arm_2c}", "rotateZ", '109deg', { fromValue: '40deg'}], position: 8250, duration: 500 },
                { id: "eid30", tween: [ "style", "${_arm_2c}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid47", tween: [ "style", "${_arm_2c}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_arm_1b}", "left", '-47px', { fromValue: '-34px'}], position: 2000, duration: 500 },
                { id: "eid22", tween: [ "style", "${_arm_1b}", "left", '-34px', { fromValue: '-47px'}], position: 10000, duration: 500 },
                { id: "eid59", tween: [ "style", "${_arm_1b}", "left", '-34px', { fromValue: '-34px'}], position: 10500, duration: 0 },
                { id: "eid25", tween: [ "transform", "${_arm_2b}", "rotateZ", '18deg', { fromValue: '68deg'}], position: 5000, duration: 500 },
                { id: "eid43", tween: [ "transform", "${_arm_2b}", "rotateZ", '65deg', { fromValue: '18deg'}], position: 8500, duration: 250 },
                { id: "eid129", tween: [ "transform", "${_arm_2b}", "rotateZ", '74deg', { fromValue: '65deg'}], position: 8750, duration: 250 },
                { id: "eid26", tween: [ "style", "${_arm_2b}", "left", '-232px', { fromValue: '-237px'}], position: 5000, duration: 500 },
                { id: "eid48", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-232px'}], position: 8500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-241px'}], position: 9000, duration: 0 },
                { id: "eid52", tween: [ "style", "${_arm_2b}", "left", '-226px', { fromValue: '-241px'}], position: 17550, duration: 500 },
                { id: "eid61", tween: [ "style", "${_arm_2b}", "left", '-231px', { fromValue: '-226px'}], position: 19053, duration: 133 },
                { id: "eid126", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-231px'}], position: 19186, duration: 364 }            ]
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
                    clip: ['rect(0px 333.5556640625px 300px -9.4033203125px)'],
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
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [53.8,86.91], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [53.8,86.91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '57px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_chest}": [
                ["style", "top", '94px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,333.5556640625,300,-9.4033203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                    type: 'image',
                    id: 'head',
                    rect: ['-143px', '-305px', '519px', '560px', 'auto', 'auto'],
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
            "${_eyes}": [
                ["style", "left", '-139px']
            ],
            "${_head}": [
                ["style", "top", '-305px'],
                ["style", "clip", [308.42578125,238.14453125,439.2265625,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-143px']
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
                    type: 'image',
                    rect: ['-154px', '-531px', '519px', '560px', 'auto', 'auto'],
                    display: 'none',
                    id: 'mouth',
                    clip: ['rect(533.55859375px 184.09228515625px 547.0078125px 169.7265625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-63.619140625px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-154px', '-531px', '519px', '560px', 'auto', 'auto'],
                    display: 'block',
                    id: 'mouthCopy',
                    clip: ['rect(532.453857421875px 191.5986328125px 554.6064453125px 157.09326171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-36.3828125px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-154px', '-531px', '519px', '560px', 'auto', 'auto'],
                    display: 'none',
                    id: 'mouthCopy2',
                    clip: ['rect(532.453857421875px 191.21044921875px 550.6630859375px 156.8408203125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-2.0273437499993px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mouth}": [
                ["style", "top", '-531px'],
                ["style", "display", 'none'],
                ["style", "clip", [533.55859375,184.09228515625,547.0078125,169.7265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-63.619140625,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px']
            ],
            "${_mouthCopy2}": [
                ["style", "top", '-531px'],
                ["style", "display", 'none'],
                ["style", "left", '-154px'],
                ["style", "clip", [532.453857421875,191.21044921875,550.6630859375,156.8408203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-2.0273437499993,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_mouthCopy}": [
                ["style", "top", '-531px'],
                ["style", "display", 'block'],
                ["style", "background-position", [-36.3828125,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px'],
                ["style", "clip", [532.453857421875,191.5986328125,554.6064453125,157.09326171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '40px']
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
                    type: 'image',
                    id: 'eyes',
                    rect: ['-137px', '-489px', '519px', '560px', 'auto', 'auto'],
                    clip: ['rect(496.640380859375px 204.19140625px 510.875px 146.1171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-137px', '-489px', '519px', '560px', 'auto', 'auto'],
                    display: 'none',
                    id: 'eyesCopy2',
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
                ["style", "clip", [496.64038085938,204.19140625,510.875,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,12.383056640625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-137px']
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
                    id: 'trunk',
                    type: 'rect',
                    clip: ['rect(0px 347.35595703125px 394px 0px)'],
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
            "${_trunk}": [
                ["style", "-webkit-transform-origin", [36.01,80.39], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [0,347.35595703125,394,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '620px'],
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
                { id: "eid10", tween: [ "transform", "${_trunk}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1500, duration: 500 },
                { id: "eid11", tween: [ "transform", "${_trunk}", "rotateZ", '-2deg', { fromValue: '3deg'}], position: 4000, duration: 500 },
                { id: "eid12", tween: [ "transform", "${_trunk}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 12000, duration: 500 }            ]
        }
    }
},
"bt_audio": {
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
                    rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'bt_audio_reiniciar',
                    type: 'image',
                    rect: ['89px', '-2px', '86px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_audio_reiniciar2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'bt_audio',
                    rect: ['-16px', '-40px', '120px', '260px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.7', '0.7']],
                    fill: ['rgba(0,0,0,0)', 'images/bt_audio_azul2.png', '0.94377790178545px', '6.3288225446423px']
                },
                {
                    type: 'rect',
                    borderRadius: ['65px 65px', '65px 65px', '65px 65px', '65px 65px'],
                    id: 'ht_spot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    rect: ['-2px', '-1px', '90px', '90px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.95556']],
                    clip: ['rect(0px 90px 90px 0px)'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bt_audio_reiniciar}": [
                ["style", "height", '88px'],
                ["style", "top", '-2px'],
                ["style", "left", '89px'],
                ["style", "width", '86px']
            ],
            "${_ht_spot}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-top-left-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.95556'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '90px'],
                ["style", "top", '-1px'],
                ["style", "border-bottom-left-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '90px'],
                ["style", "left", '-2px'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-top-right-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '90px']
            ],
            "${_bt_audio}": [
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-16px'],
                ["style", "background-position", [0.94377790178545,6.3288225446423], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "up": 0,
                "down": 250
            },
            timeline: [
                { id: "eid33", tween: [ "style", "${_bt_audio}", "background-position", [0.94377790178545,6.3288225446423], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.94377790178545,6.3288225446423]}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid34", tween: [ "style", "${_bt_audio}", "background-position", [0.94377790178545,14.346051897321], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.94377790178545,6.3288225446423]}], position: 250, duration: 0, easing: "easeOutBack" },
                { id: "eid1359", tween: [ "style", "${_bt_audio}", "top", '-41px', { fromValue: '-41px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid1363", tween: [ "style", "${_bt_audio}", "top", '-131px', { fromValue: '-41px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid1358", tween: [ "style", "${_bt_audio}", "left", '-16px', { fromValue: '-16px'}], position: 0, duration: 0, easing: "easeOutQuad" }            ]
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
