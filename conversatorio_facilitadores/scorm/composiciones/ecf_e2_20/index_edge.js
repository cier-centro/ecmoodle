/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';
    fonts['Helvetica']='';

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
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['-6557px', '399','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'false'
            },
            {
                id: 'error',
                type: 'audio',
                tag: 'audio',
                rect: ['396', '399','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
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
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'ok_bad',
                type: 'group',
                rect: ['-355px', '-11px','0','0','auto', 'auto'],
                c: [
                {
                    id: 'bad1',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok1',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad2',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok2',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad3',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok3',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad4',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok4',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad5',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok5',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'checkbox_1',
                display: 'none',
                type: 'rect',
                rect: ['560px', '332px','69px','69px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'checkbox_2',
                display: 'none',
                type: 'rect',
                rect: ['560px', '426px','69px','69px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'checkbox_3',
                display: 'none',
                type: 'rect',
                rect: ['1172px', '331px','69px','69px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'checkbox_4',
                display: 'none',
                type: 'rect',
                rect: ['1172px', '425px','69px','69px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'bt_ayuda',
                type: 'rect',
                rect: ['740px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(9.794921875px 61.3583984375px 65.539306640625px 8.310546875px)']
            },
            {
                id: 'bt_reiniciar',
                type: 'rect',
                rect: ['680px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(6.8046875px 63.46484375px 66.039794921875px 9.95703125px)']
            },
            {
                id: 'bt_solucion',
                type: 'rect',
                rect: ['622px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(8.53515625px 63.2734375px 66.3271484375px 10.2265625px)']
            },
            {
                id: 'bt_validar',
                type: 'rect',
                rect: ['560px', '543px','auto','auto','auto', 'auto'],
                clip: ['rect(6.421875px 63.8125px 66.501953125px 8.3828125px)']
            },
            {
                id: 'hotspot_ayuda',
                type: 'rect',
                rect: ['750px', '554px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_reiniciar',
                type: 'rect',
                rect: ['689px', '554px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_solucion',
                type: 'rect',
                rect: ['631px', '554px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_validar',
                type: 'rect',
                rect: ['571px', '554px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'resp_incorrecta',
                display: 'none',
                type: 'image',
                rect: ['435px', '270px','497px','234px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['186px', '226px','1002px','296px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"msg_correcto.png",'0px','0px']
            },
            {
                id: 'help_checkbox',
                display: 'none',
                type: 'image',
                rect: ['435px', '270px','497px','234px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_checkbox.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'ok2',
                symbolName: 'ok',
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
                id: 'bad4',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad2',
                symbolName: 'bad',
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
                symbolName: 'bt_validar',
                autoPlay: {

                }
            },
            {
                id: 'ok5',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bt_solucion',
                symbolName: 'bt_solucion',
                autoPlay: {

                }
            },
            {
                id: 'bt_reiniciar',
                symbolName: 'bt_reiniciar',
                autoPlay: {

                }
            },
            {
                id: 'ok3',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda',
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
                id: 'bad5',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad3',
                symbolName: 'bad',
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
                id: 'ok4',
                symbolName: 'ok',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '554px'],
                ["style", "height", '50px'],
                ["style", "left", '689px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '554px'],
                ["style", "height", '50px'],
                ["style", "left", '571px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_checkbox_4}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '69px'],
                ["style", "top", '425px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["style", "height", '69px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "left", '1172px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '226px'],
                ["style", "display", 'none'],
                ["style", "height", '296px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '186px'],
                ["style", "width", '1002px']
            ],
            "${_bad4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_bad1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_help_checkbox}": [
                ["style", "top", '270px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '435px'],
                ["style", "width", '497px']
            ],
            "${_checkbox_1}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '560px'],
                ["style", "width", '69px'],
                ["style", "top", '332px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "height", '69px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_checkbox_2}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '69px'],
                ["style", "top", '426px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '69px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "left", '560px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '554px'],
                ["style", "height", '50px'],
                ["style", "left", '631px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '680px'],
                ["style", "clip", [6.8046875,63.46484375,66.039794921875,9.95703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_checkbox_3}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '1172px'],
                ["style", "width", '69px'],
                ["style", "top", '331px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '69px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '554px'],
                ["style", "height", '50px'],
                ["style", "left", '750px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_bad2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '740px'],
                ["style", "clip", [9.794921875,61.3583984375,65.539306640625,8.310546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ok4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bt_solucion}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '622px'],
                ["style", "clip", [8.53515625,63.2734375,66.3271484375,10.2265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ok_bad}": [
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '768px'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_success}": [
                ["style", "left", '-6557px']
            ],
            "${_bt_validar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '560px'],
                ["style", "clip", [6.421875,63.8125,66.501953125,8.3828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '270px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '435px'],
                ["style", "width", '497px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1196,
            autoPlay: true,
            timeline: [
                { id: "eid1423", tween: [ "style", "${_checkbox_4}", "display", 'block', { fromValue: 'none'}], position: 872, duration: 0, easing: "easeOutBack" },
                { id: "eid1310", tween: [ "style", "${_bad5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1295", tween: [ "style", "${_ok_bad}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1292", tween: [ "style", "${_ok_bad}", "width", '1366px', { fromValue: '1366px'}], position: 0, duration: 0 },
                { id: "eid1425", tween: [ "style", "${_checkbox_2}", "display", 'block', { fromValue: 'none'}], position: 790, duration: 0, easing: "easeOutBack" },
                { id: "eid1369", tween: [ "style", "${_help_checkbox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1368", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_ok5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1303", tween: [ "style", "${_ok1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1307", tween: [ "style", "${_ok3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1305", tween: [ "style", "${_ok2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1306", tween: [ "style", "${_bad3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1302", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_ok4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1424", tween: [ "style", "${_checkbox_3}", "display", 'block', { fromValue: 'none'}], position: 828, duration: 0, easing: "easeOutBack" },
                { id: "eid1367", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1294", tween: [ "style", "${_ok_bad}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1308", tween: [ "style", "${_bad4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1127", tween: [ "style", "${_ok37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1293", tween: [ "style", "${_ok_bad}", "height", '768px', { fromValue: '768px'}], position: 0, duration: 0 },
                { id: "eid1304", tween: [ "style", "${_bad2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1422", tween: [ "style", "${_checkbox_1}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutBack" }            ]
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
                    rect: ['0px', '0', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ok.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ok}": [
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
            "${_bad}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                    rect: ['0px', '0px', '290px', '140px', 'auto', 'auto'],
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
                    rect: ['0px', '-125px', '826px', '204px', 'auto', 'auto'],
                    id: 'etiquetaCopy2',
                    type: 'image',
                    clip: ['rect(131.214599609375px 826px 202.869384765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
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
            "${_etiquetaCopy2}": [
                ["style", "top", '-124px'],
                ["style", "opacity", '0'],
                ["style", "left", '-210px'],
                ["style", "clip", [131.214599609375,826,202.869384765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1375", tween: [ "style", "${_etiquetaCopy2}", "top", '-125px', { fromValue: '-124px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1391", tween: [ "style", "${_etiquetaCopy}", "opacity", '1', { fromValue: '0'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1387", tween: [ "style", "${_etiquetaCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1383", tween: [ "style", "${_etiqueta}", "top", '0px', { fromValue: '1px'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1389", tween: [ "style", "${_etiqueta}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 625, easing: "easeOutBack" },
                { id: "eid1379", tween: [ "style", "${_etiquetaCopy}", "top", '-64px', { fromValue: '-63px'}], position: 62, duration: 625, easing: "easeOutBack" },
                { id: "eid1377", tween: [ "style", "${_etiquetaCopy2}", "left", '0px', { fromValue: '-210px'}], position: 0, duration: 625, easing: "easeOutBack" },
                { id: "eid1381", tween: [ "style", "${_etiquetaCopy}", "left", '0px', { fromValue: '-210px'}], position: 62, duration: 625, easing: "easeOutBack" }            ]
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
                    clip: ['rect(313.93505859375px 1366px 415.0263671875px 689.9951171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy6',
                    type: 'image',
                    clip: ['rect(418.93359375px 1366px 508.31396484375px 689.9951171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy4',
                    type: 'image',
                    clip: ['rect(313.93505859375px 603.9228515625px 411.72607421875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy5',
                    type: 'image',
                    clip: ['rect(422.32958984375px 603.9228515625px 515.7119140625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy',
                    type: 'image',
                    clip: ['rect(158.40234375px 1366px 293.135498046875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '1px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy2',
                    type: 'image',
                    clip: ['rect(97.990966796875px 808.7294921875px 141.70068359375px 422.57666015625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '1px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy3',
                    type: 'image',
                    clip: ['rect(97.185791015625px 395.216796875px 144.68994140625px 83.78515625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contenidoCopy5}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [422.32958984375,603.9228515625,515.7119140625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy4}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [313.93505859375,603.9228515625,411.72607421875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [313.93505859375,1366,415.0263671875,689.9951171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_contenidoCopy6}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [418.93359375,1366,508.31396484375,689.9951171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy3}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-142px'],
                ["style", "clip", [97.185791015625,395.216796875,144.68994140625,83.78515625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy}": [
                ["style", "top", '-52px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [158.40234375,1366,293.135498046875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy2}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-142px'],
                ["style", "clip", [97.990966796875,808.7294921875,141.70068359375,422.57666015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1196,
            autoPlay: true,
            timeline: [
                { id: "eid1393", tween: [ "style", "${_contenidoCopy3}", "left", '10px', { fromValue: '-142px'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid1419", tween: [ "style", "${_contenido}", "opacity", '1', { fromValue: '0'}], position: 699, duration: 446, easing: "easeOutBack" },
                { id: "eid1395", tween: [ "style", "${_contenidoCopy2}", "left", '-8px', { fromValue: '-142px'}], position: 344, duration: 500, easing: "easeOutCirc" },
                { id: "eid1413", tween: [ "style", "${_contenidoCopy5}", "opacity", '1', { fromValue: '0'}], position: 631, duration: 446, easing: "easeOutBack" },
                { id: "eid1407", tween: [ "style", "${_contenidoCopy6}", "left", '0px', { fromValue: '-148px'}], position: 750, duration: 446, easing: "easeOutBack" },
                { id: "eid1405", tween: [ "style", "${_contenidoCopy5}", "left", '0px', { fromValue: '-148px'}], position: 631, duration: 446, easing: "easeOutBack" },
                { id: "eid1409", tween: [ "style", "${_contenidoCopy4}", "left", '0px', { fromValue: '-148px'}], position: 554, duration: 446, easing: "easeOutBack" },
                { id: "eid1399", tween: [ "style", "${_contenidoCopy2}", "opacity", '1', { fromValue: '0'}], position: 344, duration: 500, easing: "easeOutCirc" },
                { id: "eid1411", tween: [ "style", "${_contenido}", "left", '0px', { fromValue: '-148px'}], position: 699, duration: 446, easing: "easeOutBack" },
                { id: "eid1397", tween: [ "style", "${_contenidoCopy3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid1417", tween: [ "style", "${_contenidoCopy4}", "opacity", '1', { fromValue: '0'}], position: 554, duration: 446, easing: "easeOutBack" },
                { id: "eid1415", tween: [ "style", "${_contenidoCopy6}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 446, easing: "easeOutBack" },
                { id: "eid1403", tween: [ "style", "${_contenidoCopy}", "opacity", '1', { fromValue: '0'}], position: 439, duration: 500, easing: "easeOutBack" },
                { id: "eid1401", tween: [ "style", "${_contenidoCopy}", "top", '0px', { fromValue: '-52px'}], position: 439, duration: 500, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "EDGE-7842101");
