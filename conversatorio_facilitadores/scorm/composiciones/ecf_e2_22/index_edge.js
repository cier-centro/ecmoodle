/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Helvetica']='';
    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'true',

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
                id: 'error',
                type: 'audio',
                tag: 'audio',
                rect: ['1358', '709','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
                preload: 'true'
            },
            {
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['1358', '709','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'true'
            },
            {
                id: 'etiqueta',
                type: 'rect',
                rect: ['111px', '82','auto','auto','auto', 'auto']
            },
            {
                id: 'contenido',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'ok_bad',
                type: 'rect',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'bt_ayuda',
                type: 'rect',
                rect: ['739px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(8.649169921875px 66.34619140625px 66.70068359375px 7.8935546875px)']
            },
            {
                id: 'bt_reiniciar',
                type: 'rect',
                rect: ['679px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(6.8046875px 64.357421875px 66.736572265625px 6.4248046875px)']
            },
            {
                id: 'bt_solucion',
                type: 'rect',
                rect: ['620px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(8.53515625px 65.0791015625px 65.54931640625px 6.04296875px)']
            },
            {
                id: 'bt_validar',
                type: 'rect',
                rect: ['557px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(6.421875px 66.5439453125px 66.289306640625px 8.3828125px)']
            },
            {
                id: 'hotspot_ayuda',
                type: 'rect',
                rect: ['749px', '552px','55px','58px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_reiniciar',
                type: 'rect',
                rect: ['687px', '552px','55px','58px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_solucion',
                type: 'rect',
                rect: ['627px', '552px','55px','58px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_validar',
                type: 'rect',
                rect: ['566px', '552px','55px','58px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'InputA_1',
                display: 'none',
                type: 'rect',
                rect: ['408px', '455px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputB_1',
                display: 'none',
                type: 'rect',
                rect: ['726px', '455px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'bad1',
                display: 'none',
                type: 'rect',
                rect: ['23', '177px','auto','auto','auto', 'auto']
            },
            {
                id: 'ok1',
                display: 'none',
                type: 'rect',
                rect: ['23', '177px','auto','auto','auto', 'auto']
            },
            {
                id: 'resp_incorrecta',
                display: 'none',
                type: 'image',
                rect: ['433px', '238px','497px','234px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['187px', '238px','996px','286px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_correcto.png",'0px','0px']
            },
            {
                id: 'help_radio',
                display: 'none',
                type: 'image',
                rect: ['417px', '299px','531px','249px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_radio.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'bt_reiniciar',
                symbolName: 'bt_reiniciar_1',
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
                id: 'ok1',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda_1',
                autoPlay: {

                }
            },
            {
                id: 'contenido',
                symbolName: 'contenido',
                autoPlay: {

                }
            },
            {
                id: 'bt_validar',
                symbolName: 'bt_validar_1',
                autoPlay: {

                }
            },
            {
                id: 'bad1',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bt_solucion',
                symbolName: 'bt_solucion_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'auto'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '552px'],
                ["style", "height", '58px'],
                ["style", "left", '687px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '55px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '552px'],
                ["style", "height", '58px'],
                ["style", "left", '566px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '55px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '238px'],
                ["style", "display", 'none'],
                ["style", "height", '286px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '187px'],
                ["style", "width", '996px']
            ],
            "${_bt_solucion}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '620px'],
                ["style", "clip", [8.53515625,65.0791015625,65.54931640625,6.04296875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_help_radio}": [
                ["style", "top", '273px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '417px'],
                ["style", "width", '497px']
            ],
            "${_InputA_1}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px'],
                ["style", "top", '455px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '50px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "opacity", '1'],
                ["style", "left", '408px']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '679px'],
                ["style", "clip", [6.8046875,64.357421875,66.736572265625,6.4248046875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '552px'],
                ["style", "height", '58px'],
                ["style", "left", '627px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '55px']
            ],
            "${_etiqueta}": [
                ["style", "left", '111px']
            ],
            "${_InputB_1}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '726px'],
                ["style", "width", '50px'],
                ["style", "top", '455px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '50px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '739px'],
                ["style", "clip", [8.649169921875,66.34619140625,66.70068359375,7.8935546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bad1}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'auto'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '552px'],
                ["style", "height", '58px'],
                ["style", "left", '749px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '55px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_box_01}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '34px'],
                ["style", "width", '446px'],
                ["style", "top", '226px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '282px']
            ],
            "${_bt_validar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '557px'],
                ["style", "clip", [6.421875,66.5439453125,66.289306640625,8.3828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '238px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '433px'],
                ["style", "width", '497px']
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
                { id: "eid1179", tween: [ "style", "${_InputA_1}", "display", 'block', { fromValue: 'none'}], position: 1126, duration: 0, easing: "easeOutBack" },
                { id: "eid1151", tween: [ "style", "${_help_radio}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid497", tween: [ "gradient", "${_box_01}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
                { id: "eid1180", tween: [ "style", "${_InputB_1}", "display", 'block', { fromValue: 'none'}], position: 1183, duration: 0, easing: "easeOutBack" },
                { id: "eid1153", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1109", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1108", tween: [ "style", "${_ok1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1152", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid888", tween: [ "style", "${_ok37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"bt_validar": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'botones5',
                    type: 'image',
                    rect: ['54', '-92', '284px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0.44042968750034px', '-0.32153320312484px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "background-position", [0.44042968750034,-0.32153320312484], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '70px']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1141", tween: [ "style", "${_botones5}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1142", tween: [ "style", "${_botones5}", "top", '-66px', { fromValue: '0px'}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_solucion": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'botones3',
                    type: 'image',
                    rect: ['0px', '3px', '284px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones3}": [
                ["style", "top", '3px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,69.6396484375,60.798583984375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-71.327637,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '70px'],
                ["style", "overflow", 'hidden']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1136", tween: [ "style", "${_botones3}", "background-position", [-71.327637,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-71.327637,0]}], position: 0, duration: 0 },
                { id: "eid1137", tween: [ "style", "${_botones3}", "background-position", [-71.25048828125,-66.245117], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-71.327637,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_reiniciar": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'botones7',
                    type: 'image',
                    rect: ['-143px', '1px', '284px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones7}": [
                ["style", "top", '1px'],
                ["style", "left", '-143px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '70px']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1143", tween: [ "style", "${_botones7}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid1144", tween: [ "style", "${_botones7}", "background-position", [0,-66.892333984375], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_ayuda": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'botones8',
                    type: 'image',
                    rect: ['-215px', '1px', '284px', '126px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones8}": [
                ["style", "top", '1px'],
                ["style", "left", '-215px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '70px']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1145", tween: [ "style", "${_botones8}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid1146", tween: [ "style", "${_botones8}", "background-position", [0,-66.494384765625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"ok": {
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
                    id: 'ok',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ok.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ok}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bad": {
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
                    id: 'bad',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bad.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ],
            "${_bad}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bt_validar_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '290px', '140px', 'auto', 'auto'],
                    id: 'botones',
                    type: 'image',
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '-70px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones}": [
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '70px'],
                ["style", "overflow", 'hidden']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1275", tween: [ "style", "${_botones}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid1274", tween: [ "style", "${_botones}", "background-position", [0,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_solucion_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0', '0', '290px', '140px', 'auto', 'auto'],
                    id: 'botones2',
                    type: 'image',
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '-73px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "background-position", [-73,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '70px']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1276", tween: [ "style", "${_botones2}", "background-position", [-73,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-73,0]}], position: 0, duration: 0 },
                { id: "eid1277", tween: [ "style", "${_botones2}", "background-position", [-73,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-73,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_reiniciar_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0', '0', '290px', '140px', 'auto', 'auto'],
                    id: 'botones3',
                    type: 'image',
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones3}": [
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-146,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '70px'],
                ["style", "overflow", 'hidden']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1278", tween: [ "style", "${_botones3}", "background-position", [-146,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-146,0]}], position: 0, duration: 0 },
                { id: "eid1279", tween: [ "style", "${_botones3}", "background-position", [-146,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-146,0]}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_ayuda_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0', '0', '290px', '140px', 'auto', 'auto'],
                    id: 'botones4',
                    type: 'image',
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones4}": [
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-220,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '70px'],
                ["style", "overflow", 'hidden']
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
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1280", tween: [ "style", "${_botones4}", "background-position", [-220,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-220,0]}], position: 0, duration: 0 },
                { id: "eid1281", tween: [ "style", "${_botones4}", "background-position", [-220,-70], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-220,0]}], position: 250, duration: 0 }            ]
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
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '-64px', '826px', '204px', 'auto', 'auto'],
                    id: 'etiquetaCopy',
                    transform: [[0, 0], [], [], ['1.29298']],
                    clip: ['rect(80.439208984375px 826px 131.00634765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '826px', '204px', 'auto', 'auto'],
                    id: 'etiqueta',
                    transform: [[0, 0], [], [], ['1.29298']],
                    clip: ['rect(0px 826px 80.296142578125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta3.png', '0px', '0px']
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
                ["style", "left", '-89px']
            ],
            "${_etiqueta}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,826,80.296142578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-89px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '-124px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [131.214599609375,826,202.869384765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-89px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '826px']
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
                { id: "eid1385", tween: [ "style", "${_etiqueta}", "left", '0px', { fromValue: '-89px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1375", tween: [ "style", "${_etiquetaCopy2}", "top", '-125px', { fromValue: '-124px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1391", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1387", tween: [ "style", "${_etiquetaCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1383", tween: [ "style", "${_etiqueta}", "top", '0px', { fromValue: '1px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1389", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1379", tween: [ "style", "${_etiquetaCopy}", "top", '-64px', { fromValue: '-63px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1377", tween: [ "style", "${_etiquetaCopy2}", "left", '0px', { fromValue: '-89px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1381", tween: [ "style", "${_etiquetaCopy}", "left", '0px', { fromValue: '-89px'}], position: 62, duration: 625, easing: "easeOutBack" }            ]
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
                    id: 'contenido',
                    type: 'image',
                    clip: ['rect(0px 951.66162109375px 152.512939453125px 417.44775390625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy5',
                    type: 'image',
                    clip: ['rect(0px 406.83935546875px 152.512939453125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy',
                    type: 'image',
                    clip: ['rect(174.402587890625px 1314.16162109375px 267.073486328125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy2',
                    type: 'image',
                    clip: ['rect(252.34375px 1317.40185546875px 664.1474609375px 867.087890625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy3',
                    type: 'image',
                    clip: ['rect(434.221923828125px 454.25048828125px 521.78369140625px 165.19580078125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy6',
                    type: 'image',
                    clip: ['rect(434.221923828125px 832.3603515625px 521.78369140625px 497.7177734375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy4',
                    type: 'image',
                    clip: ['rect(284.321533203125px 886.412109375px 427.4521484375px 102.8642578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['968px', '175px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'character',
                    transform: [[], [], [], ['0.84344', '0.84344']],
                    clip: ['rect(0px 380.3489990234375px 509.6485900878906px -123.25778198242188px)'],
                    type: 'rect'
                }
            ],
            symbolInstances: [
            {
                id: 'character',
                symbolName: 'character',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenidoCopy5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-43px'],
                ["style", "clip", [0,406.83935546875,152.512939453125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [252.34375,1317.40185546875,664.1474609375,867.087890625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy6}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-186px'],
                ["style", "clip", [434.221923828125,832.3603515625,521.78369140625,497.7177734375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-43px'],
                ["style", "clip", [0,951.66162109375,152.512939453125,417.44775390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-186px'],
                ["style", "clip", [434.221923828125,454.25048828125,521.78369140625,165.19580078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy4}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-186px'],
                ["style", "clip", [284.321533203125,886.412109375,427.4521484375,102.8642578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '884px'],
                ["style", "width", '1366px']
            ],
            "${_contenidoCopy}": [
                ["style", "top", '-94px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [174.402587890625,1314.16162109375,267.073486328125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_character}": [
                ["style", "top", '175px'],
                ["transform", "scaleY", '0.84344'],
                ["transform", "scaleX", '0.84344'],
                ["style", "left", '968px'],
                ["style", "clip", [0,380.3489990234375,509.6485900878906,-123.25778198242188], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1174", tween: [ "style", "${_contenidoCopy3}", "left", '0px', { fromValue: '-186px'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid1162", tween: [ "style", "${_contenido}", "opacity", '1', { fromValue: '0'}], position: 335, duration: 500, easing: "easeOutCirc" },
                { id: "eid1181", tween: [ "style", "${_contenidoCopy6}", "left", '0px', { fromValue: '-186px'}], position: 825, duration: 500, easing: "easeOutBack" },
                { id: "eid1160", tween: [ "style", "${_contenidoCopy5}", "left", '13px', { fromValue: '-43px'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid1164", tween: [ "style", "${_contenidoCopy5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid1158", tween: [ "style", "${_contenido}", "left", '0px', { fromValue: '-43px'}], position: 335, duration: 500, easing: "easeOutCirc" },
                { id: "eid1172", tween: [ "style", "${_contenidoCopy4}", "left", '0px', { fromValue: '-186px'}], position: 591, duration: 500, easing: "easeOutBack" },
                { id: "eid1178", tween: [ "style", "${_contenidoCopy3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid1176", tween: [ "style", "${_contenidoCopy4}", "opacity", '1', { fromValue: '0'}], position: 591, duration: 500, easing: "easeOutBack" },
                { id: "eid1182", tween: [ "style", "${_contenidoCopy6}", "opacity", '1', { fromValue: '0'}], position: 825, duration: 500, easing: "easeOutBack" },
                { id: "eid1170", tween: [ "style", "${_contenidoCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid1168", tween: [ "style", "${_contenidoCopy}", "top", '0px', { fromValue: '-94px'}], position: 500, duration: 500, easing: "easeOutBack" }            ]
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
                    rect: ['-583px', '13px', '1366px', '770px', 'auto', 'auto'],
                    id: 'trunk',
                    type: 'image',
                    clip: ['rect(86px 852px 450px 632px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    rect: ['-696px', '42px', '1366px', '770px', 'auto', 'auto'],
                    id: 'b_2',
                    type: 'image',
                    clip: ['rect(130px 944px 298.5078125px 876px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    rect: ['-805px', '19px', '1366px', '770px', 'auto', 'auto'],
                    id: 'ab_2',
                    type: 'image',
                    clip: ['rect(294px 1092px 498px 976px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
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
                ["style", "-webkit-transform-origin", [77.1,40.16], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.1,40.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.1,40.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.1,40.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.1,40.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.1,40.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '19px'],
                ["style", "clip", [294,1092,498,976], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-824px']
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
                { id: "eid15", tween: [ "style", "${_ab_2}", "top", '24px', { fromValue: '19px'}], position: 2000, duration: 500 },
                { id: "eid263", tween: [ "style", "${_ab_2}", "top", '25px', { fromValue: '24px'}], position: 7000, duration: 750 },
                { id: "eid186", tween: [ "style", "${_ab_2}", "top", '22px', { fromValue: '25px'}], position: 11508, duration: 242 },
                { id: "eid185", tween: [ "style", "${_ab_2}", "top", '21px', { fromValue: '22px'}], position: 11750, duration: 250 },
                { id: "eid59", tween: [ "transform", "${_ab_2}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid63", tween: [ "transform", "${_ab_2}", "rotateZ", '84deg', { fromValue: '27deg'}], position: 7000, duration: 750 },
                { id: "eid65", tween: [ "transform", "${_ab_2}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 11508, duration: 492 },
                { id: "eid259", tween: [ "style", "${_ab_2}", "left", '-825px', { fromValue: '-824px'}], position: 2000, duration: 500 },
                { id: "eid64", tween: [ "style", "${_ab_2}", "left", '-823px', { fromValue: '-825px'}], position: 7000, duration: 750 },
                { id: "eid66", tween: [ "style", "${_ab_2}", "left", '-824px', { fromValue: '-823px'}], position: 11508, duration: 492 },
                { id: "eid48", tween: [ "transform", "${_head}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid49", tween: [ "transform", "${_head}", "rotateZ", '3deg', { fromValue: '-4deg'}], position: 4000, duration: 500 },
                { id: "eid51", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 5500, duration: 500 },
                { id: "eid50", tween: [ "transform", "${_head}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 7000, duration: 500 },
                { id: "eid53", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 10000, duration: 500 },
                { id: "eid54", tween: [ "transform", "${_head}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 14250, duration: 250 },
                { id: "eid55", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 14500, duration: 250 },
                { id: "eid57", tween: [ "transform", "${_head}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 18250, duration: 500 },
                { id: "eid58", tween: [ "transform", "${_head}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 20500, duration: 500 }            ]
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
                    rect: ['-1136px', '-16px', '1366px', '770px', 'auto', 'auto'],
                    id: 'headCopy',
                    type: 'image',
                    clip: ['rect(16px 1319.3359375px 182px 1140px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    id: 'expressions_3Copy',
                    type: 'rect',
                    rect: ['11px', '33px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'expressions_3Copy',
                symbolName: 'expressions',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_headCopy}": [
                ["style", "top", '-16px'],
                ["style", "left", '-1136px'],
                ["style", "clip", [16,1319.3359375,182,1140], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '168px'],
                ["style", "width", '170px']
            ],
            "${_expressions_3Copy}": [
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
                    rect: ['-383px', '-406px', '1366px', '770px', 'auto', 'auto'],
                    type: 'image',
                    id: 'm_1a',
                    display: 'block',
                    clip: ['rect(522px 420px 570px 370px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    rect: ['-421px', '-248px', '1366px', '770px', 'auto', 'auto'],
                    transform: [[0, 0], ['41']],
                    type: 'image',
                    id: 'm_1b',
                    display: 'none',
                    clip: ['rect(520px 518px 566px 458px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    rect: ['-373px', '-302px', '1366px', '770px', 'auto', 'auto'],
                    id: 'ab_1',
                    type: 'image',
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
                ["style", "top", '-406px'],
                ["style", "display", 'block'],
                ["style", "left", '-383px'],
                ["style", "clip", [522,420,570,370], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                    rect: ['-364px', '76px', '1366px', '770px', 'auto', 'auto'],
                    id: 'b_1',
                    type: 'image',
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
                ["style", "top", '287px'],
                ["style", "left", '20px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b_1}": [
                ["style", "top", '76px'],
                ["transform", "rotateZ", '2deg'],
                ["style", "clip", [94,488,244,440], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-364px'],
                ["style", "-webkit-transform-origin", [33.56,13.89], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [33.56,13.89],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid69", tween: [ "style", "${_ab_c}", "left", '-4px', { fromValue: '20px'}], position: 13500, duration: 404 },
                { id: "eid44", tween: [ "style", "${_ab_c}", "left", '-31px', { fromValue: '-4px'}], position: 13904, duration: 400 },
                { id: "eid73", tween: [ "style", "${_ab_c}", "left", '-21px', { fromValue: '-31px'}], position: 16500, duration: 750 },
                { id: "eid77", tween: [ "style", "${_ab_c}", "left", '20px', { fromValue: '-21px'}], position: 19500, duration: 500 },
                { id: "eid68", tween: [ "transform", "${_b_1}", "rotateZ", '25deg', { fromValue: '2deg'}], position: 13500, duration: 804 },
                { id: "eid86", tween: [ "transform", "${_b_1}", "rotateZ", '20deg', { fromValue: '25deg'}], position: 16500, duration: 750 },
                { id: "eid52", tween: [ "transform", "${_b_1}", "rotateZ", '2deg', { fromValue: '20deg'}], position: 19500, duration: 500 },
                { id: "eid62", tween: [ "transform", "${_ab_c}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid70", tween: [ "transform", "${_ab_c}", "rotateZ", '68deg', { fromValue: '-12deg'}], position: 13500, duration: 804 },
                { id: "eid72", tween: [ "transform", "${_ab_c}", "rotateZ", '-12deg', { fromValue: '68deg'}], position: 16500, duration: 750 },
                { id: "eid87", tween: [ "transform", "${_ab_c}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 19500, duration: 500 },
                { id: "eid281", tween: [ "style", "${_ab_c}", "top", '287px', { fromValue: '287px'}], position: 13500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_ab_c}", "top", '278px', { fromValue: '290px'}], position: 13904, duration: 400 },
                { id: "eid75", tween: [ "style", "${_ab_c}", "top", '288px', { fromValue: '278px'}], position: 16500, duration: 750 },
                { id: "eid82", tween: [ "style", "${_ab_c}", "top", '290px', { fromValue: '288px'}], position: 19500, duration: 500 }            ]
        }
    }
},
"expressions": {
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
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'a1',
                    display: 'block',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '1px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'a2',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-83.894531249998px', '-0.37304687499991px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'b1',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-254px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'b2',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-339.85107421875px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'c1',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-510.373046875px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'c2',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-593px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'e1',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-764px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'e2',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-849px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'f1',
                    display: 'none',
                    clip: ['rect(0px 86.330078125px 129px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3b.png', '-1020.2954101562px', '0px']
                },
                {
                    rect: ['0px', '1px', '1190px', '129px', 'auto', 'auto'],
                    type: 'image',
                    id: 'f2',
                    display: 'none',
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
                    id: 'trunk_1',
                    type: 'rect',
                    rect: ['13px', '36px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-22px', '120px', '1366px', '770px', 'auto', 'auto'],
                    id: 'legs',
                    type: 'image',
                    clip: ['rect(217.91796875px 286.234375px 770px 34.21875px)'],
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
            "${_trunk_1}": [
                ["style", "-webkit-transform-origin", [32.61,34.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [32.61,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [32.61,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [32.61,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [32.61,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [32.61,34.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '31px'],
                ["style", "left", '22px'],
                ["transform", "rotateZ", '17deg']
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
            "${_legs}": [
                ["style", "top", '120px'],
                ["style", "left", '-22px'],
                ["style", "clip", [217.91796875,286.234375,770,34.21875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '814px'],
                ["style", "width", '308px']
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
                { id: "eid83", tween: [ "transform", "${_trunk_1}", "rotateZ", '14deg', { fromValue: '17deg'}], position: 500, duration: 500 },
                { id: "eid85", tween: [ "transform", "${_trunk_1}", "rotateZ", '1deg', { fromValue: '14deg'}], position: 6000, duration: 500 },
                { id: "eid92", tween: [ "transform", "${_trunk_1}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid104", tween: [ "transform", "${_trunk_1}", "rotateZ", '17deg', { fromValue: '4deg'}], position: 16500, duration: 500 },
                { id: "eid89", tween: [ "transform", "${_trunk}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid90", tween: [ "transform", "${_trunk}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 6000, duration: 500 },
                { id: "eid91", tween: [ "transform", "${_trunk}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid93", tween: [ "transform", "${_trunk}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 16500, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1010687340");
