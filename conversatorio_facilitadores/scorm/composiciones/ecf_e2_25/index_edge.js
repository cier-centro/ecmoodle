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
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['1034px', '239px','143px','145px','auto', 'auto'],
                overflow: 'hidden',
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0)"],
                stroke: [0,"rgba(255, 255, 255, 0)","none"],
                c: [
                {
                    id: 'Ellipse2',
                    type: 'ellipse',
                    rect: ['4px', '6px','143px','145px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(231,184,41,1.00)"],
                    stroke: [0,"rgba(255, 255, 255, 0)","none"]
                },
                {
                    id: 'character',
                    type: 'rect',
                    rect: ['-113px', '5px','auto','auto','auto', 'auto'],
                    clip: ['rect(0px 371.65966796875px 362.0361328125px -89.0302734375px)'],
                    transform: [[],[],[],['-1.00825']]
                }]
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
                rect: ['571px', '283px','69px','69px','auto', 'auto'],
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
                rect: ['571px', '374px','69px','69px','auto', 'auto'],
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
                rect: ['571px', '461px','69px','69px','auto', 'auto'],
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
                rect: ['1153px', '374px','69px','69px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'checkbox_5',
                display: 'none',
                type: 'rect',
                rect: ['1153px', '453px','69px','69px','auto', 'auto'],
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
                id: 'bt_reiniciar',
                symbolName: 'bt_reiniciar',
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
                id: 'bad5',
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
                id: 'ok3',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok4',
                symbolName: 'ok',
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
                id: 'bt_solucion',
                symbolName: 'bt_solucion',
                autoPlay: {

                }
            },
            {
                id: 'ok2',
                symbolName: 'ok',
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
                id: 'bad2',
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
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda',
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
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_Ellipse2}": [
                ["color", "background-color", 'rgba(231,184,41,1.00)'],
                ["style", "left", '4px'],
                ["style", "top", '6px']
            ],
            "${_checkbox_4}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '1153px'],
                ["style", "width", '69px'],
                ["style", "top", '374px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["style", "height", '69px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_bad1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_checkbox_5}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '1153px'],
                ["style", "width", '69px'],
                ["style", "top", '453px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '0px'],
                ["style", "height", '69px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1']
            ],
            "${_Ellipse}": [
                ["style", "left", '1034px'],
                ["style", "overflow", 'hidden']
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
            "${_bt_ayuda}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '740px'],
                ["style", "clip", [9.794921875,61.3583984375,65.539306640625,8.310546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            "${_checkbox_1}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '571px'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '69px'],
                ["style", "top", '283px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "height", '69px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_bt_solucion}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '622px'],
                ["style", "clip", [8.53515625,63.2734375,66.3271484375,10.2265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_help_checkbox}": [
                ["style", "top", '270px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '435px'],
                ["style", "width", '497px']
            ],
            "${_checkbox_2}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '571px'],
                ["style", "width", '69px'],
                ["style", "top", '374px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '69px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '543px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '680px'],
                ["style", "clip", [6.8046875,63.46484375,66.039794921875,9.95703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '554px'],
                ["style", "height", '50px'],
                ["style", "left", '631px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '554px'],
                ["style", "height", '50px'],
                ["style", "left", '750px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_ok2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '226px'],
                ["style", "display", 'none'],
                ["style", "height", '296px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '186px'],
                ["style", "width", '1002px']
            ],
            "${_ok4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '270px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '435px'],
                ["style", "width", '497px']
            ],
            "${_bad3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_checkbox_3}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '571px'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '69px'],
                ["style", "top", '461px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '69px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer']
            ],
            "${_bad5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_ok_bad}": [
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '768px'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_ok3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_character}": [
                ["style", "top", '5px'],
                ["transform", "scaleX", '-1.00825'],
                ["style", "left", '-113px'],
                ["style", "clip", [0,371.65966796875,362.0361328125,-89.0302734375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1444", tween: [ "style", "${_checkbox_5}", "display", 'block', { fromValue: 'none'}], position: 872, duration: 0, easing: "easeOutBack" },
                { id: "eid1306", tween: [ "style", "${_bad3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_ok4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1424", tween: [ "style", "${_checkbox_3}", "display", 'block', { fromValue: 'none'}], position: 828, duration: 0, easing: "easeOutBack" },
                { id: "eid1294", tween: [ "style", "${_ok_bad}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1302", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1367", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
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
                    rect: ['0px', '49px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido',
                    type: 'image',
                    clip: ['rect(235.22802734375px 621.54833984375px 298.891357421875px 88.08984375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '79px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy6',
                    type: 'image',
                    clip: ['rect(300.30322265625px 625.59814453125px 362.084716796875px 82.716796875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '105px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy4',
                    type: 'image',
                    clip: ['rect(359.989013671875px 613.24951171875px 420.51904296875px 86.54345703125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-36px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy7',
                    type: 'image',
                    clip: ['rect(421.85107421875px 611.703125px 483.3935546875px 89.38134765625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-18px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy5',
                    type: 'image',
                    clip: ['rect(480.117919921875px 611.703125px 545.439208984375px 89.38134765625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-36px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2',
                    type: 'image',
                    clip: ['rect(274.4736328125px 1028.8828125px 409.956298828125px 696.1416015625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenidoCopy',
                    type: 'image',
                    clip: ['rect(158.40234375px 1366px 228.594482421875px 0px)'],
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
            "${_contenidoCopy7}": [
                ["style", "top", '-36px'],
                ["style", "opacity", '0'],
                ["style", "left", '146px'],
                ["style", "clip", [421.85107421875,611.703125,483.3935546875,89.38134765625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido2}": [
                ["style", "-webkit-transform-origin", [75.13,50.84], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [75.13,50.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [75.13,50.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [75.13,50.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [75.13,50.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [75.13,50.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.29293'],
                ["transform", "scaleX", '0.29293'],
                ["style", "opacity", '0'],
                ["style", "clip", [274.4736328125,1028.8828125,409.956298828125,696.1416015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-36px']
            ],
            "${_contenidoCopy5}": [
                ["style", "top", '-18px'],
                ["style", "opacity", '0'],
                ["style", "left", '164px'],
                ["style", "clip", [480.117919921875,611.703125,545.439208984375,89.38134765625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy6}": [
                ["style", "top", '79px'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [300.30322265625,625.59814453125,362.084716796875,82.716796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido}": [
                ["style", "top", '49px'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [235.22802734375,621.54833984375,298.891357421875,88.08984375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy3}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-142px'],
                ["style", "clip", [97.185791015625,395.216796875,144.68994140625,83.78515625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy4}": [
                ["style", "top", '105px'],
                ["style", "opacity", '0'],
                ["style", "left", '-148px'],
                ["style", "clip", [359.989013671875,613.24951171875,420.51904296875,86.54345703125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_contenidoCopy}": [
                ["style", "top", '-52px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [158.40234375,1366,228.594482421875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            duration: 1051,
            autoPlay: true,
            timeline: [
                { id: "eid1393", tween: [ "style", "${_contenidoCopy3}", "left", '10px', { fromValue: '-142px'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid1395", tween: [ "style", "${_contenidoCopy2}", "left", '-8px', { fromValue: '-142px'}], position: 344, duration: 500, easing: "easeOutCirc" },
                { id: "eid1407", tween: [ "style", "${_contenidoCopy6}", "left", '0px', { fromValue: '-148px'}], position: 304, duration: 446, easing: "easeOutBack" },
                { id: "eid1429", tween: [ "style", "${_contenidoCopy7}", "opacity", '1', { fromValue: '0'}], position: 451, duration: 446, easing: "easeOutBack" },
                { id: "eid1439", tween: [ "transform", "${_contenido2}", "scaleX", '1', { fromValue: '0.29293'}], position: 647, duration: 404, easing: "easeOutBack" },
                { id: "eid1426", tween: [ "style", "${_contenidoCopy4}", "left", '0px', { fromValue: '-148px'}], position: 381, duration: 446, easing: "easeOutBack" },
                { id: "eid1397", tween: [ "style", "${_contenidoCopy3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
                { id: "eid1427", tween: [ "style", "${_contenidoCopy4}", "opacity", '1', { fromValue: '0'}], position: 381, duration: 446, easing: "easeOutBack" },
                { id: "eid1428", tween: [ "style", "${_contenidoCopy7}", "left", '586px', { fromValue: '146px'}], position: 451, duration: 446, easing: "easeOutBack" },
                { id: "eid1403", tween: [ "style", "${_contenidoCopy}", "opacity", '1', { fromValue: '0'}], position: 439, duration: 500, easing: "easeOutBack" },
                { id: "eid1419", tween: [ "style", "${_contenido}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 446, easing: "easeOutBack" },
                { id: "eid1437", tween: [ "style", "${_contenidoCopy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 446, easing: "easeOutBack" },
                { id: "eid1436", tween: [ "style", "${_contenidoCopy5}", "left", '586px', { fromValue: '164px'}], position: 500, duration: 446, easing: "easeOutBack" },
                { id: "eid1443", tween: [ "style", "${_contenido2}", "opacity", '1', { fromValue: '0'}], position: 647, duration: 404, easing: "easeOutBack" },
                { id: "eid1441", tween: [ "transform", "${_contenido2}", "scaleY", '1', { fromValue: '0.29293'}], position: 647, duration: 404, easing: "easeOutBack" },
                { id: "eid1411", tween: [ "style", "${_contenido}", "left", '0px', { fromValue: '-148px'}], position: 250, duration: 446, easing: "easeOutBack" },
                { id: "eid1399", tween: [ "style", "${_contenidoCopy2}", "opacity", '1', { fromValue: '0'}], position: 344, duration: 500, easing: "easeOutCirc" },
                { id: "eid1415", tween: [ "style", "${_contenidoCopy6}", "opacity", '1', { fromValue: '0'}], position: 304, duration: 446, easing: "easeOutBack" },
                { id: "eid1401", tween: [ "style", "${_contenidoCopy}", "top", '0px', { fromValue: '-52px'}], position: 439, duration: 500, easing: "easeOutBack" }            ]
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
                    transform: [[0, 0], ['109']],
                    type: 'image',
                    rect: ['114px', '-360px', '519px', '560px', 'auto', 'auto'],
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
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-34px'],
                ["style", "clip", [218.78515625,72.40625,372.19140625,29.7578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [10.13,41.79], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [10.13,41.79],{valueTemplate:'@@0@@% @@1@@%'}]
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
                ["style", "top", '-16px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-32px'],
                ["style", "clip", [65.6796875,98.8046875,197.19921875,29.7578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [15.1,15.95], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [15.1,15.95],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_arm_2a}": [
                ["style", "top", '37px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [14.29296875,365.625,160.02734375,307.2265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-162px'],
                ["style", "-webkit-transform-origin", [62.29,5.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.29,5.67],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_arm_2c}": [
                ["style", "top", '-360px'],
                ["transform", "rotateZ", '109deg'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [11.99,96.59], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [11.99,96.59],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '114px'],
                ["style", "clip", [394.5556640625,84.3505859375,552.265869140625,37.9287109375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_arm_2b}": [
                ["style", "top", '41px'],
                ["transform", "rotateZ", '124deg'],
                ["style", "display", 'block'],
                ["style", "left", '-241px'],
                ["style", "clip", [14.29296875,505.92578125,160.02734375,393.65625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [80.46,24.46], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.46,24.46],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid27", tween: [ "style", "${_arm_2b}", "top", '40px', { fromValue: '41px'}], position: 5000, duration: 500 },
                { id: "eid42", tween: [ "style", "${_arm_2b}", "top", '41px', { fromValue: '40px'}], position: 8500, duration: 500 },
                { id: "eid53", tween: [ "style", "${_arm_2b}", "top", '44px', { fromValue: '41px'}], position: 17550, duration: 500 },
                { id: "eid62", tween: [ "style", "${_arm_2b}", "top", '41px', { fromValue: '44px'}], position: 19053, duration: 497 },
                { id: "eid15", tween: [ "style", "${_arm_1b}", "top", '-76px', { fromValue: '-71px'}], position: 2000, duration: 500 },
                { id: "eid21", tween: [ "style", "${_arm_1b}", "top", '-71px', { fromValue: '-76px'}], position: 10000, duration: 500 },
                { id: "eid51", tween: [ "transform", "${_arm_2a}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 17550, duration: 500 },
                { id: "eid57", tween: [ "transform", "${_arm_2a}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 19050, duration: 500 },
                { id: "eid29", tween: [ "style", "${_arm_2b}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid44", tween: [ "style", "${_arm_2b}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid13", tween: [ "transform", "${_arm_1a}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid24", tween: [ "transform", "${_arm_1a}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 10000, duration: 500 },
                { id: "eid25", tween: [ "transform", "${_arm_2b}", "rotateZ", '18deg', { fromValue: '124deg'}], position: 5000, duration: 500 },
                { id: "eid43", tween: [ "transform", "${_arm_2b}", "rotateZ", '124deg', { fromValue: '18deg'}], position: 8500, duration: 500 },
                { id: "eid26", tween: [ "style", "${_arm_2b}", "left", '-232px', { fromValue: '-241px'}], position: 5000, duration: 500 },
                { id: "eid48", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-232px'}], position: 8500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-241px'}], position: 9000, duration: 0 },
                { id: "eid52", tween: [ "style", "${_arm_2b}", "left", '-226px', { fromValue: '-241px'}], position: 17550, duration: 500 },
                { id: "eid61", tween: [ "style", "${_arm_2b}", "left", '-241px', { fromValue: '-226px'}], position: 19053, duration: 497 },
                { id: "eid14", tween: [ "style", "${_arm_1b}", "left", '-47px', { fromValue: '-34px'}], position: 2000, duration: 500 },
                { id: "eid22", tween: [ "style", "${_arm_1b}", "left", '-34px', { fromValue: '-47px'}], position: 10000, duration: 500 },
                { id: "eid30", tween: [ "style", "${_arm_2c}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid47", tween: [ "style", "${_arm_2c}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid28", tween: [ "transform", "${_arm_2c}", "rotateZ", '40deg', { fromValue: '109deg'}], position: 5250, duration: 500 },
                { id: "eid46", tween: [ "transform", "${_arm_2c}", "rotateZ", '109deg', { fromValue: '40deg'}], position: 8250, duration: 500 }            ]
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
                ["style", "left", '0px'],
                ["style", "top", '94px']
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
                ["style", "left", '-154px'],
                ["style", "clip", [532.453857421875,191.5986328125,554.6064453125,157.09326171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-36.3828125,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_mouthCopy2}": [
                ["style", "top", '-531px'],
                ["style", "display", 'none'],
                ["style", "clip", [532.453857421875,191.21044921875,550.6630859375,156.8408203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-2.0273437499993,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px']
            ],
            "${_mouth}": [
                ["style", "top", '-531px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-63.619140625,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px'],
                ["style", "clip", [533.55859375,184.09228515625,547.0078125,169.7265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                ["style", "background-position", [0,12.383056640625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-137px'],
                ["style", "clip", [496.64038085938,204.19140625,510.875,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
