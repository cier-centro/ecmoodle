/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'false',

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
                rect: ['616', '308','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
                preload: 'false'
            },
            {
                id: 'etiqueta',
                type: 'rect',
                rect: ['-1', '82','auto','auto','auto', 'auto']
            },
            {
                id: 'contenido2',
                type: 'rect',
                rect: ['-1', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['616', '308','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'false'
            },
            {
                id: 'Drop_1',
                type: 'rect',
                rect: ['560px', '462px','70px','70px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_2',
                type: 'rect',
                rect: ['246px', '462px','70px','70px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_3',
                type: 'rect',
                rect: ['639px', '462px','70px','70px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_4',
                type: 'rect',
                rect: ['910px', '462px','70px','70px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_5',
                type: 'rect',
                rect: ['321px', '462px','70px','70px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_6',
                type: 'rect',
                rect: ['988px', '462px','70px','70px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drag_1',
                display: 'none',
                type: 'image',
                rect: ['328px', '226px','70px','70px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_1.png",'0px','0px']
            },
            {
                id: 'Drag_2',
                display: 'none',
                type: 'image',
                rect: ['571px', '226px','70px','70px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_2.png",'0px','0px']
            },
            {
                id: 'Drag_3',
                display: 'none',
                type: 'image',
                rect: ['816px', '227px','70px','70px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_3.png",'0px','0px']
            },
            {
                id: 'Drag_4',
                display: 'none',
                type: 'image',
                rect: ['1192px', '227px','70px','70px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_4.png",'0px','0px']
            },
            {
                id: 'Drag_5',
                display: 'none',
                type: 'image',
                rect: ['639px', '293px','70px','70px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_5.png",'0px','0px']
            },
            {
                id: 'Drag_6',
                display: 'none',
                type: 'image',
                rect: ['882px', '295px','70px','70px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_6.png",'0px','0px']
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
                rect: ['749px', '553px','54px','54px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_reiniciar',
                type: 'rect',
                rect: ['688px', '553px','54px','54px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_solucion',
                type: 'rect',
                rect: ['628px', '554px','54px','54px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_validar',
                type: 'rect',
                rect: ['566px', '552px','54px','58px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'resp_incorrecta',
                display: 'none',
                type: 'image',
                rect: ['434px', '267px','434px','148px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['193px', '228px','984px','277px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_correcto.png",'0px','0px']
            },
            {
                id: 'help',
                display: 'none',
                type: 'image',
                rect: ['434px', '267px','816px','164px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_drag.png",'0px','0px']
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
                symbolName: 'etiqueta_1',
                autoPlay: {

                }
            },
            {
                id: 'contenido2',
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
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda_1',
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
            "${_Drop_6}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '462px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '988px'],
                ["style", "width", '70px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '553px'],
                ["style", "height", '54px'],
                ["style", "left", '688px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '552px'],
                ["style", "height", '58px'],
                ["style", "left", '566px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_Drop_1}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '462px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '560px'],
                ["style", "width", '70px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '228px'],
                ["style", "display", 'none'],
                ["style", "height", '277px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '193px'],
                ["style", "width", '984px']
            ],
            "${_Drag_2}": [
                ["style", "top", '226px'],
                ["style", "left", '571px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ],
            "${_bt_solucion}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '620px'],
                ["style", "clip", [8.53515625,65.0791015625,65.54931640625,6.04296875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_help}": [
                ["style", "top", '267px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '434px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '497px']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '267px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '434px'],
                ["style", "width", '497px']
            ],
            "${_Drag_1}": [
                ["style", "top", '226px'],
                ["style", "left", '328px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '679px'],
                ["style", "clip", [6.8046875,64.357421875,66.736572265625,6.4248046875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '553px'],
                ["style", "height", '54px'],
                ["style", "left", '749px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_Drop_4}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '462px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '910px'],
                ["style", "width", '70px']
            ],
            "${_Drop_2}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '462px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '246px'],
                ["style", "width", '70px']
            ],
            "${_Drag_6}": [
                ["style", "top", '295px'],
                ["style", "left", '882px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '739px'],
                ["style", "clip", [8.649169921875,66.34619140625,66.70068359375,7.8935546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '554px'],
                ["style", "height", '54px'],
                ["style", "left", '628px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_Drag_3}": [
                ["style", "top", '227px'],
                ["style", "left", '816px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ],
            "${_Drag_4}": [
                ["style", "top", '227px'],
                ["style", "left", '1192px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ],
            "${_Drop_3}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '462px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '639px'],
                ["style", "width", '70px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_Drop_5}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '462px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '321px'],
                ["style", "width", '70px']
            ],
            "${_bt_validar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '557px'],
                ["style", "clip", [6.421875,66.5439453125,66.289306640625,8.3828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Drag_5}": [
                ["style", "top", '293px'],
                ["style", "left", '639px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1202,
            autoPlay: true,
            timeline: [
                { id: "eid816", tween: [ "style", "${_Drag_3}", "display", 'block', { fromValue: 'none'}], position: 597, duration: 0, easing: "easeOutBack" },
                { id: "eid763", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid817", tween: [ "style", "${_Drag_4}", "display", 'block', { fromValue: 'none'}], position: 597, duration: 0, easing: "easeOutBack" },
                { id: "eid762", tween: [ "style", "${_help}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid815", tween: [ "style", "${_Drag_2}", "display", 'block', { fromValue: 'none'}], position: 597, duration: 0, easing: "easeOutBack" },
                { id: "eid764", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid819", tween: [ "style", "${_Drag_6}", "display", 'block', { fromValue: 'none'}], position: 597, duration: 0, easing: "easeOutBack" },
                { id: "eid818", tween: [ "style", "${_Drag_5}", "display", 'block', { fromValue: 'none'}], position: 597, duration: 0, easing: "easeOutBack" },
                { id: "eid814", tween: [ "style", "${_Drag_1}", "display", 'block', { fromValue: 'none'}], position: 597, duration: 0, easing: "easeOutBack" }            ]
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
                    rect: ['0px', '0px', '1366px', '178px', 'auto', 'auto'],
                    display: 'none',
                    id: 'etiqueta',
                    clip: ['rect(0px 91.35400390625px 81.6337890625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '1366px', '178px', 'auto', 'auto'],
                    display: 'block',
                    id: 'etiquetaCopy2',
                    clip: ['rect(82px 1366px 88px -0.33349609375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    font: ['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif', 19, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    display: 'none',
                    id: 'instruccion',
                    text: 'Diligencia el modelo de agenda para realizar la verificación de las condiciones de calidad de un programa virtual en donde es necesaria información adicional acerca de los mecanismos de selección y evaluación.',
                    align: 'left',
                    rect: ['42px', '92px', '378px', '130px', 'auto', 'auto']
                },
                {
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 36, 'rgba(255,255,255,1.00)', '300', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'Actividad 12 de 20',
                    display: 'none',
                    rect: ['104px', '35px', '316px', '49px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '35px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '104px'],
                ["style", "font-family", 'cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '300'],
                ["style", "clip", [0,0,49,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "font-size", '36px']
            ],
            "${_etiqueta}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "background-position", [0,50.66650390625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,91.35400390625,81.6337890625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_instruccion}": [
                ["style", "top", '82px'],
                ["style", "width", '378px'],
                ["style", "display", 'none'],
                ["style", "height", '130px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '19px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [82,16.66650390625,88,-0.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '178px'],
                ["style", "width", '1366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2397,
            autoPlay: true,
            timeline: [
                { id: "eid1348", tween: [ "style", "${_etiquetaCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid1350", tween: [ "style", "${_etiqueta}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,50.66650390625]}], position: 750, duration: 500, easing: "swing" },
                { id: "eid1355", tween: [ "style", "${_instruccion}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid1347", tween: [ "style", "${_etiquetaCopy2}", "clip", [82,482,88,-0.33349600434303284], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [82,16.66650390625,88,-0.33349609375]}], position: 0, duration: 750, easing: "swing" },
                { id: "eid1359", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 750, easing: "swing" },
                { id: "eid1354", tween: [ "style", "${_etiqueta}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "swing" },
                { id: "eid765", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1647, duration: 0, easing: "swing" },
                { id: "eid766", tween: [ "style", "${_Text}", "clip", [0,408.09912109375,49,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,49,0]}], position: 1647, duration: 750, easing: "swing" },
                { id: "eid1357", tween: [ "style", "${_instruccion}", "top", '92px', { fromValue: '82px'}], position: 1250, duration: 750, easing: "swing" }            ]
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-214px', '0', '284px', '126px', 'auto', 'auto'],
                    clip: ['rect(0px 284.00048828125px 63.9892578125px 213.966796875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones3}": [
                ["style", "top", '0px'],
                ["style", "left", '-143px'],
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-219px'],
                ["style", "clip", [0,284.00048828125,63.9892578125,213.966796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '54px']
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
                { id: "eid1316", tween: [ "style", "${_botones}", "left", '-219px', { fromValue: '-219px'}], position: 0, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_botones}", "left", '-218px', { fromValue: '-219px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones3}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones3}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 }            ]
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-146px', '-5px', '284px', '126px', 'auto', 'auto'],
                    clip: ['rect(0px 213.05126953125px 63.43017578125px 143.0166015625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "clip", [0,68.35791015625,63.9892578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-147px']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '54px'],
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
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_botones}", "left", '-147px', { fromValue: '-147px'}], position: 0, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_botones}", "left", '-146px', { fromValue: '-147px'}], position: 250, duration: 0 },
                { id: "eid1308", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 }            ]
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-74px', '-5px', '284px', '126px', 'auto', 'auto'],
                    clip: ['rect(0px 140.42529296875px 63.43017578125px 70.39111328125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "clip", [0,68.35791015625,63.9892578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-75px'],
                ["style", "clip", [0,140.42529296875,63.43017578125,70.39111328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '54px']
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
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1314", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1315", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid1313", tween: [ "style", "${_botones}", "left", '-75px', { fromValue: '-75px'}], position: 0, duration: 0 },
                { id: "eid1312", tween: [ "style", "${_botones}", "left", '-74px', { fromValue: '-75px'}], position: 250, duration: 0 }            ]
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-1px', '-2px', '284px', '126px', 'auto', 'auto'],
                    clip: ['rect(0px 69.47509765625px 63.43017578125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "clip", [0,68.35791015625,63.9892578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-2px'],
                ["style", "left", '-4px'],
                ["style", "clip", [0,69.47509765625,63.43017578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '54px'],
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
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1326", tween: [ "style", "${_botones}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid1323", tween: [ "style", "${_botones}", "top", '-3px', { fromValue: '-2px'}], position: 250, duration: 0 },
                { id: "eid1320", tween: [ "style", "${_botones}", "left", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1321", tween: [ "style", "${_botones}", "left", '-3px', { fromValue: '-4px'}], position: 250, duration: 0 }            ]
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
"etiqueta_1": {
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
                    transform: [[0, 0], [], [], ['1.29298']],
                    id: 'etiquetaCopy2',
                    type: 'image',
                    clip: ['rect(131.214599609375px 826px 202.869384765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-64px', '826px', '204px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.29298']],
                    id: 'etiquetaCopy',
                    type: 'image',
                    clip: ['rect(80.439208984375px 826px 131.00634765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '826px', '204px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.29298']],
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
            "${_etiquetaCopy}": [
                ["style", "top", '-63px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [80.439208984375,826,131.00634765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '826px']
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
                { id: "eid1385", tween: [ "style", "${_etiqueta}", "left", '121px', { fromValue: '-210px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1375", tween: [ "style", "${_etiquetaCopy2}", "top", '-125px', { fromValue: '-124px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1391", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1387", tween: [ "style", "${_etiquetaCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1383", tween: [ "style", "${_etiqueta}", "top", '0px', { fromValue: '1px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1389", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1379", tween: [ "style", "${_etiquetaCopy}", "top", '-64px', { fromValue: '-63px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1381", tween: [ "style", "${_etiquetaCopy}", "left", '121px', { fromValue: '-210px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1377", tween: [ "style", "${_etiquetaCopy2}", "left", '121px', { fromValue: '-210px'}], position: 0, duration: 625, easing: "easeOutBack" }            ]
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
                    type: 'image',
                    id: 'contenidoCopy3',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(383.15625px 491.03125px 590.875px 1.1953125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '-48.859375px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy4',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(383.15625px 812.2578125px 590.875px 549.71875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy5',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(383.15625px 1185.5703125px 590.875px 878.1953125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '22.71875px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenido',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(0px 880.796875px 157.0625px 413.3828125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy2',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(215.6953125px 1369.265625px 367.984375px 1.1953125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy6',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(161.5234375px 1369.265625px 215.59375px 1.1953125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy',
                    rect: ['9px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(0px 405.9453125px 147.75px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contenidoCopy4}": [
                ["style", "top", '406px'],
                ["style", "left", '0px'],
                ["style", "clip", [383.15625,812.2578125,590.875,549.71875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-51px'],
                ["style", "clip", [0,405.9453125,147.75,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-60px'],
                ["style", "clip", [0,880.796875,157.0625,413.3828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_contenidoCopy6}": [
                ["style", "top", '-78px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [161.5234375,1369.265625,215.59375,1.1953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy3}": [
                ["style", "top", '406px'],
                ["style", "left", '0px'],
                ["style", "background-position", [-48.859375,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [383.15625,491.03125,590.875,1.1953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy5}": [
                ["style", "top", '406px'],
                ["style", "clip", [383.15625,1185.5703125,590.875,878.1953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [22.71875,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_contenidoCopy2}": [
                ["style", "top", '-78px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [215.6953125,1369.265625,367.984375,1.1953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1202,
            autoPlay: true,
            timeline: [
                { id: "eid803", tween: [ "style", "${_contenido}", "opacity", '1', { fromValue: '0'}], position: 329, duration: 500, easing: "easeOutBack" },
                { id: "eid797", tween: [ "style", "${_contenidoCopy}", "left", '9px', { fromValue: '-51px'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid820", tween: [ "style", "${_contenidoCopy6}", "top", '0px', { fromValue: '-78px'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid809", tween: [ "style", "${_contenidoCopy3}", "top", '0px', { fromValue: '406px'}], position: 702, duration: 500, easing: "easeOutBack" },
                { id: "eid811", tween: [ "style", "${_contenidoCopy4}", "top", '0px', { fromValue: '406px'}], position: 591, duration: 500, easing: "easeOutBack" },
                { id: "eid799", tween: [ "style", "${_contenido}", "left", '0px', { fromValue: '-60px'}], position: 329, duration: 500, easing: "easeOutBack" },
                { id: "eid807", tween: [ "style", "${_contenidoCopy2}", "opacity", '1', { fromValue: '0'}], position: 414, duration: 500, easing: "easeOutBack" },
                { id: "eid813", tween: [ "style", "${_contenidoCopy5}", "top", '0px', { fromValue: '406px'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid821", tween: [ "style", "${_contenidoCopy6}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid801", tween: [ "style", "${_contenidoCopy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid805", tween: [ "style", "${_contenidoCopy2}", "top", '0px', { fromValue: '-78px'}], position: 414, duration: 500, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "EDGE-1010687330");
