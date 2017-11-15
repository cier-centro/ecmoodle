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
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['616', '308','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'false'
            },
            {
                id: 'etiqueta',
                type: 'rect',
                rect: ['-1', '82','auto','auto','auto', 'auto']
            },
            {
                id: 'contenido',
                type: 'rect',
                rect: ['-1px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'Drop_1',
                type: 'rect',
                rect: ['554px', '187px','321px','71px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_2',
                type: 'rect',
                rect: ['554px', '281px','321px','71px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_3',
                type: 'rect',
                rect: ['554px', '372px','321px','71px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drop_4',
                type: 'rect',
                rect: ['554px', '464px','321px','71px','auto', 'auto'],
                fill: ["rgba(197,197,197,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Drag_4',
                display: 'none',
                type: 'image',
                rect: ['921px', '196px','321px','71px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_4.png",'0px','0px']
            },
            {
                id: 'Drag_3',
                display: 'none',
                type: 'image',
                rect: ['921px', '284px','321px','71px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_1.png",'0px','0px']
            },
            {
                id: 'Drag_1',
                display: 'none',
                type: 'image',
                rect: ['921px', '373px','321px','71px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_2.png",'0px','0px']
            },
            {
                id: 'Drag_2',
                display: 'none',
                type: 'image',
                rect: ['921px', '459px','321px','71px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_3.png",'0px','0px']
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
                rect: ['190px', '195px','991px','319px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['190px', '179px','991px','321px','auto', 'auto'],
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
                id: 'bt_solucion',
                symbolName: 'bt_solucion_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bt_ayuda}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '739px'],
                ["style", "clip", [8.649169921875,66.34619140625,66.70068359375,7.8935546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '553px'],
                ["style", "height", '54px'],
                ["style", "left", '688px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_Drop_2}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '281px'],
                ["style", "height", '71px'],
                ["style", "opacity", '0'],
                ["style", "left", '554px'],
                ["style", "width", '321px']
            ],
            "${_Drop_1}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '187px'],
                ["style", "height", '71px'],
                ["style", "opacity", '0'],
                ["style", "left", '554px'],
                ["style", "width", '321px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '179px'],
                ["style", "display", 'none'],
                ["style", "height", '321px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '190px'],
                ["style", "width", '991px']
            ],
            "${_Drag_2}": [
                ["style", "top", '459px'],
                ["style", "height", '71px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'move'],
                ["style", "left", '921px'],
                ["style", "width", '321px']
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
            "${_bt_reiniciar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '679px'],
                ["style", "clip", [6.8046875,64.357421875,66.736572265625,6.4248046875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '554px'],
                ["style", "height", '54px'],
                ["style", "left", '628px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
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
                ["style", "top", '464px'],
                ["style", "height", '71px'],
                ["style", "opacity", '0'],
                ["style", "left", '554px'],
                ["style", "width", '321px']
            ],
            "${_Drop_3}": [
                ["color", "background-color", 'rgba(197,197,197,1.00)'],
                ["style", "top", '372px'],
                ["style", "height", '71px'],
                ["style", "opacity", '0'],
                ["style", "left", '554px'],
                ["style", "width", '321px']
            ],
            "${_Drag_4}": [
                ["style", "top", '196px'],
                ["style", "cursor", 'move'],
                ["style", "left", '921px'],
                ["style", "display", 'none']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '195px'],
                ["style", "display", 'none'],
                ["style", "height", '319px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '190px'],
                ["style", "width", '991px']
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_Drag_3}": [
                ["style", "top", '284px'],
                ["style", "height", '71px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'move'],
                ["style", "left", '921px'],
                ["style", "width", '321px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '552px'],
                ["style", "height", '58px'],
                ["style", "left", '566px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_bt_validar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '557px'],
                ["style", "clip", [6.421875,66.5439453125,66.289306640625,8.3828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Drag_1}": [
                ["style", "top", '373px'],
                ["style", "height", '71px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'move'],
                ["style", "left", '921px'],
                ["style", "width", '321px']
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
                { id: "eid811", tween: [ "style", "${_Drag_3}", "display", 'block', { fromValue: 'none'}], position: 1057, duration: 0, easing: "easeOutBack" },
                { id: "eid762", tween: [ "style", "${_help}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid764", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid763", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid818", tween: [ "style", "${_Drag_4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" },
                { id: "eid812", tween: [ "style", "${_Drag_2}", "display", 'block', { fromValue: 'none'}], position: 1176, duration: 0, easing: "easeOutBack" },
                { id: "eid813", tween: [ "style", "${_Drag_1}", "display", 'block', { fromValue: 'none'}], position: 1101, duration: 0, easing: "easeOutBack" }            ]
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
                    transform: [[], [], [], ['1.44673']],
                    id: 'etiquetaCopy2',
                    type: 'image',
                    clip: ['rect(131.214599609375px 826px 202.869384765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta33.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-64px', '826px', '204px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.44673']],
                    id: 'etiquetaCopy',
                    type: 'image',
                    clip: ['rect(80.439208984375px 826px 131.00634765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta33.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '826px', '204px', 'auto', 'auto'],
                    transform: [[], [], [], ['1.44673']],
                    id: 'etiqueta',
                    type: 'image',
                    clip: ['rect(0px 826px 80.296142578125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta33.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_etiqueta}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1.44673'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,826,80.296142578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiquetaCopy}": [
                ["style", "top", '-63px'],
                ["transform", "scaleX", '1.44673'],
                ["style", "opacity", '0'],
                ["style", "clip", [80.439208984375,826,131.00634765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '-124px'],
                ["transform", "scaleX", '1.44673'],
                ["style", "opacity", '0'],
                ["style", "clip", [131.214599609375,826,202.869384765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
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
                { id: "eid1385", tween: [ "style", "${_etiqueta}", "left", '184px', { fromValue: '-210px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1375", tween: [ "style", "${_etiquetaCopy2}", "top", '-125px', { fromValue: '-124px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1391", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1387", tween: [ "style", "${_etiquetaCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1383", tween: [ "style", "${_etiqueta}", "top", '0px', { fromValue: '1px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1389", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1379", tween: [ "style", "${_etiquetaCopy}", "top", '-64px', { fromValue: '-63px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1381", tween: [ "style", "${_etiquetaCopy}", "left", '184px', { fromValue: '-210px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1377", tween: [ "style", "${_etiquetaCopy2}", "left", '184px', { fromValue: '-210px'}], position: 0, duration: 625, easing: "easeOutBack" }            ]
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
                    id: 'contenido2',
                    type: 'image',
                    clip: ['rect(175.00927734375px 1366px 267.15380859375px 465.625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy6',
                    type: 'image',
                    clip: ['rect(175.00927734375px 463.4794921875px 308.420654296875px -4.76220703125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy5',
                    type: 'image',
                    clip: ['rect(455.255126953125px 1366px 548.25537109375px 443.93603515625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy3',
                    type: 'image',
                    clip: ['rect(362.7421875px 1366px 451.956787109375px 443.93603515625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy4',
                    type: 'image',
                    clip: ['rect(270.61962890625px 1366px 360.69921875px 464.48095703125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-32px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy',
                    type: 'image',
                    clip: ['rect(93.7685546875px 1354.7373046875px 150.747314453125px 429.97607421875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['12px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy2',
                    type: 'image',
                    clip: ['rect(95.90771484375px 411.26611328125px 147.724609375px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['67px', '279px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'aprendiz_32',
                    transform: [[], [], [], ['-1']],
                    clip: ['rect(0px 387.54833984375px 400.904541015625px -87.05322265625px)'],
                    type: 'rect'
                }
            ],
            symbolInstances: [
            {
                id: 'aprendiz_32',
                symbolName: 'aprendiz_3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenido2Copy3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-169px'],
                ["style", "clip", [362.7421875,1366,451.956787109375,443.93603515625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido2}": [
                ["style", "top", '-51px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [175.00927734375,1366,267.15380859375,465.625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_aprendiz_32}": [
                ["transform", "scaleX", '-1'],
                ["style", "left", '67px'],
                ["style", "clip", [0,387.54833984375,400.904541015625,-87.05322265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '279px']
            ],
            "${_contenido2Copy5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-169px'],
                ["style", "clip", [455.255126953125,1366,548.25537109375,443.93603515625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido2Copy6}": [
                ["style", "top", '-51px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [175.00927734375,463.4794921875,308.420654296875,-4.76220703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_contenido2Copy4}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-169px'],
                ["style", "clip", [270.61962890625,1366,360.69921875,464.48095703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido2Copy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-120px'],
                ["style", "clip", [93.7685546875,1354.7373046875,150.747314453125,429.97607421875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido2Copy2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-76px'],
                ["style", "clip", [95.90771484375,411.26611328125,147.724609375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid817", tween: [ "style", "${_contenido2Copy6}", "opacity", '1', { fromValue: '0'}], position: 127, duration: 500, easing: "easeOutBack" },
                { id: "eid810", tween: [ "style", "${_contenido2Copy3}", "opacity", '1', { fromValue: '0'}], position: 544, duration: 500, easing: "easeOutBack" },
                { id: "eid816", tween: [ "style", "${_contenido2Copy6}", "top", '0px', { fromValue: '-51px'}], position: 127, duration: 500, easing: "easeOutBack" },
                { id: "eid815", tween: [ "style", "${_contenido2Copy5}", "opacity", '1', { fromValue: '0'}], position: 627, duration: 500, easing: "easeOutBack" },
                { id: "eid800", tween: [ "style", "${_contenido2}", "top", '0px', { fromValue: '-51px'}], position: 326, duration: 500, easing: "easeOutBack" },
                { id: "eid802", tween: [ "style", "${_contenido2}", "opacity", '1', { fromValue: '0'}], position: 326, duration: 500, easing: "easeOutBack" },
                { id: "eid814", tween: [ "style", "${_contenido2Copy5}", "left", '0px', { fromValue: '-169px'}], position: 627, duration: 500, easing: "easeOutBack" },
                { id: "eid804", tween: [ "style", "${_contenido2Copy4}", "left", '0px', { fromValue: '-169px'}], position: 433, duration: 500, easing: "easeOutBack" },
                { id: "eid794", tween: [ "style", "${_contenido2Copy2}", "left", '12px', { fromValue: '-76px'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid798", tween: [ "style", "${_contenido2Copy2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid792", tween: [ "style", "${_contenido2Copy}", "left", '-32px', { fromValue: '-120px'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid806", tween: [ "style", "${_contenido2Copy3}", "left", '0px', { fromValue: '-169px'}], position: 544, duration: 500, easing: "easeOutBack" },
                { id: "eid808", tween: [ "style", "${_contenido2Copy4}", "opacity", '1', { fromValue: '0'}], position: 433, duration: 500, easing: "easeOutBack" },
                { id: "eid796", tween: [ "style", "${_contenido2Copy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"expressions_3": {
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
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-83.894531249998,-0.37304687499991], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_b2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-339.85107421875,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_e1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-764,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_c2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-593,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a1}": [
                ["style", "top", '1px'],
                ["style", "display", 'block'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [1,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_b1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-254,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_c1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-509,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '131px'],
                ["style", "width", '87px']
            ],
            "${_f1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-1019,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_e2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-849,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_f2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-1103.4458007811,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                },
                {
                    type: 'image',
                    id: 'aprendiz_3a2',
                    rect: ['-809px', '38px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(116.4267578125px 1069.6904296875px 336.6220703125px 884.10791015625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
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
            "${_aprendiz_3a2}": [
                ["style", "-webkit-transform-origin", [73.68,19.56], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [73.68,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [73.68,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [73.68,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [73.68,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [73.68,19.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '38px'],
                ["style", "clip", [116.4267578125,1069.6904296875,336.6220703125,884.10791015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-809px']
            ],
            "${_ab_3}": [
                ["style", "top", '21px'],
                ["style", "-webkit-transform-origin", [76.87,40.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [76.87,40.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "clip", [294,1092,498,976], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-821px'],
                ["style", "background-position", [0,-233.87084960938], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '530px'],
                ["style", "width", '300px']
            ],
            "${_head}": [
                ["style", "-webkit-transform-origin", [57.81,86.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [57.81,86.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '3px'],
                ["style", "left", '62px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_trunk}": [
                ["style", "top", '13px'],
                ["style", "left", '-583px'],
                ["style", "clip", [86,852,450,632], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid103", tween: [ "style", "${_ab_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_ab_3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_ab_3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid96", tween: [ "transform", "${_ab_3}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid97", tween: [ "transform", "${_ab_3}", "rotateZ", '84deg', { fromValue: '27deg'}], position: 7000, duration: 750 },
                { id: "eid98", tween: [ "transform", "${_ab_3}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 11508, duration: 492 },
                { id: "eid94", tween: [ "style", "${_ab_3}", "left", '-833px', { fromValue: '-821px'}], position: 7000, duration: 750 },
                { id: "eid95", tween: [ "style", "${_ab_3}", "left", '-819px', { fromValue: '-833px'}], position: 11508, duration: 492 },
                { id: "eid16", tween: [ "transform", "${_aprendiz_3a2}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 3000, duration: 441 },
                { id: "eid17", tween: [ "transform", "${_aprendiz_3a2}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 7500, duration: 500 },
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
                    type: 'image',
                    id: 'headCopy',
                    rect: ['-1136px', '-16px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(16px 1300px 182px 1140px)'],
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
                symbolName: 'expressions_3',
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
            "${_expressions_3Copy}": [
                ["style", "left", '11px'],
                ["style", "top", '33px']
            ],
            "${symbolSelector}": [
                ["style", "height", '168px'],
                ["style", "width", '170px']
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
"aprendiz_3": {
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
                    id: 'cabello',
                    rect: ['-1074px', '-215px', '1366px', '770px', 'auto', 'auto'],
                    clip: ['rect(243.8427734375px 1340.96044921875px 640.7958984375px 1154.31689453125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/aprendiz_3a.png', '0px', '0px']
                },
                {
                    id: 'trunk_1',
                    type: 'rect',
                    rect: ['13px', '36px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'aprendiz_3a',
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
            "${_aprendiz_3a}": [
                ["style", "top", '126px'],
                ["style", "left", '-17px'],
                ["style", "clip", [236.046875,286.234375,770,79.125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_trunk}": [
                ["style", "-webkit-transform-origin", [42.57,74.52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.57,74.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '25px'],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '814px'],
                ["style", "width", '308px']
            ],
            "${_cabello}": [
                ["style", "top", '-215px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-1074px'],
                ["style", "clip", [243.8427734375,1340.96044921875,640.7958984375,1154.31689453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [88.93,83.6], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_trunk_1}": [
                ["style", "top", '36px'],
                ["style", "-webkit-transform-origin", [39.69,74.26], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [39.69,74.26],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
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
                { id: "eid15", tween: [ "style", "${_trunk_1}", "left", '0px', { fromValue: '0px'}], position: 77, duration: 0 },
                { id: "eid89", tween: [ "transform", "${_trunk}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid90", tween: [ "transform", "${_trunk}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 6000, duration: 500 },
                { id: "eid91", tween: [ "transform", "${_trunk}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid93", tween: [ "transform", "${_trunk}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 16500, duration: 500 },
                { id: "eid110", tween: [ "transform", "${_cabello}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid114", tween: [ "transform", "${_cabello}", "rotateZ", '-3deg', { fromValue: '-2deg'}], position: 1000, duration: 500 },
                { id: "eid117", tween: [ "transform", "${_cabello}", "rotateZ", '-2deg', { fromValue: '-3deg'}], position: 4000, duration: 500 },
                { id: "eid118", tween: [ "transform", "${_cabello}", "rotateZ", '-2deg', { fromValue: '-2deg'}], position: 6000, duration: 0 },
                { id: "eid111", tween: [ "transform", "${_cabello}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 6000, duration: 500 },
                { id: "eid122", tween: [ "transform", "${_cabello}", "rotateZ", '-2deg', { fromValue: '1deg'}], position: 7000, duration: 500 },
                { id: "eid124", tween: [ "transform", "${_cabello}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 10000, duration: 500 },
                { id: "eid125", tween: [ "transform", "${_cabello}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid126", tween: [ "transform", "${_cabello}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 16500, duration: 500 },
                { id: "eid127", tween: [ "transform", "${_cabello}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 18500, duration: 500 },
                { id: "eid128", tween: [ "transform", "${_cabello}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 20500, duration: 500 },
                { id: "eid83", tween: [ "transform", "${_trunk_1}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid85", tween: [ "transform", "${_trunk_1}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 6000, duration: 500 },
                { id: "eid92", tween: [ "transform", "${_trunk_1}", "rotateZ", '4deg', { fromValue: '1deg'}], position: 13500, duration: 500 },
                { id: "eid104", tween: [ "transform", "${_trunk_1}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 16500, duration: 500 }            ]
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
                ["style", "top", '292px'],
                ["style", "-webkit-transform-origin", [77.86,15.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.86,15.75],{valueTemplate:'@@0@@% @@1@@%'}],
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
                ["style", "top", '76px'],
                ["style", "left", '-364px'],
                ["style", "clip", [94,488,244,440], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid71", tween: [ "style", "${_ab_c}", "top", '290px', { fromValue: '292px'}], position: 13500, duration: 404 },
                { id: "eid45", tween: [ "style", "${_ab_c}", "top", '278px', { fromValue: '290px'}], position: 13904, duration: 400 },
                { id: "eid75", tween: [ "style", "${_ab_c}", "top", '285px', { fromValue: '278px'}], position: 16500, duration: 750 },
                { id: "eid82", tween: [ "style", "${_ab_c}", "top", '292px', { fromValue: '285px'}], position: 19500, duration: 500 },
                { id: "eid68", tween: [ "transform", "${_b_1}", "rotateZ", '25deg', { fromValue: '2deg'}], position: 13500, duration: 804 },
                { id: "eid86", tween: [ "transform", "${_b_1}", "rotateZ", '20deg', { fromValue: '25deg'}], position: 16500, duration: 750 },
                { id: "eid52", tween: [ "transform", "${_b_1}", "rotateZ", '2deg', { fromValue: '20deg'}], position: 19500, duration: 500 },
                { id: "eid62", tween: [ "transform", "${_ab_c}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid70", tween: [ "transform", "${_ab_c}", "rotateZ", '68deg', { fromValue: '-12deg'}], position: 13500, duration: 804 },
                { id: "eid72", tween: [ "transform", "${_ab_c}", "rotateZ", '-12deg', { fromValue: '68deg'}], position: 16500, duration: 750 },
                { id: "eid87", tween: [ "transform", "${_ab_c}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 19500, duration: 500 },
                { id: "eid69", tween: [ "style", "${_ab_c}", "left", '-4px', { fromValue: '26px'}], position: 13500, duration: 404 },
                { id: "eid44", tween: [ "style", "${_ab_c}", "left", '-28px', { fromValue: '-4px'}], position: 13904, duration: 400 },
                { id: "eid73", tween: [ "style", "${_ab_c}", "left", '-17px', { fromValue: '-28px'}], position: 16500, duration: 750 },
                { id: "eid77", tween: [ "style", "${_ab_c}", "left", '26px', { fromValue: '-17px'}], position: 19500, duration: 500 }            ]
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
            "${_m_1a}": [
                ["style", "top", '-406px'],
                ["style", "left", '-383px'],
                ["style", "clip", [522,420,570,370], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block']
            ],
            "${_m_1b}": [
                ["style", "top", '-248px'],
                ["transform", "rotateZ", '41deg'],
                ["style", "display", 'none'],
                ["style", "clip", [520,518,566,458], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-421px']
            ],
            "${_ab_1}": [
                ["style", "top", '-302px'],
                ["style", "left", '-373px'],
                ["style", "clip", [312,476,468.7265625,372.90625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid78", tween: [ "style", "${_m_1b}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid81", tween: [ "style", "${_m_1b}", "display", 'none', { fromValue: 'block'}], position: 16746, duration: 0 },
                { id: "eid79", tween: [ "style", "${_m_1a}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0 },
                { id: "eid80", tween: [ "style", "${_m_1a}", "display", 'block', { fromValue: 'none'}], position: 16746, duration: 0 }            ]
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
