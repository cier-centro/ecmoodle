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
                id: 'etiqueta',
                type: 'rect',
                rect: ['-729', '12','auto','auto','auto', 'auto'],
                clip: ['rect(0px 2097.86083984375px 124px 723.828125px)']
            },
            {
                id: 'contenido',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 1366px 714.4775390625px 0px)']
            },
            {
                id: 'brillo_6',
                type: 'rect',
                rect: ['130px', '597px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.87342','0.87342']]
            },
            {
                id: 'brillo_5',
                type: 'rect',
                rect: ['129px', '464px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.87342','0.87342']]
            },
            {
                id: 'brillo_4',
                type: 'rect',
                rect: ['129px', '339px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.87342','0.87342']]
            },
            {
                id: 'brillo_3',
                type: 'rect',
                rect: ['129px', '209px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.87342','0.87342']]
            },
            {
                id: 'hotspot_1',
                type: 'ellipse',
                rect: ['39px', '133px','371px','62px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'aprendizaje_organizacional',
                type: 'ellipse',
                rect: ['426px', '133px','371px','62px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'guia_navegacion',
                type: 'rect',
                rect: ['844px', '133px','314px','62px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_3',
                type: 'ellipse',
                rect: ['133px', '217px','72px','72px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_4',
                type: 'ellipse',
                rect: ['133px', '344px','72px','72px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_5',
                type: 'ellipse',
                rect: ['133px', '469px','72px','72px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_6',
                type: 'ellipse',
                rect: ['133px', '602px','72px','72px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'etiqueta',
                symbolName: 'etiqueta',
                autoPlay: {

                }
            },
            {
                id: 'brillo_6',
                symbolName: 'brillo',
                autoPlay: {

                }
            },
            {
                id: 'brillo_4',
                symbolName: 'brillo',
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
                id: 'brillo_5',
                symbolName: 'brillo',
                autoPlay: {

                }
            },
            {
                id: 'brillo_3',
                symbolName: 'brillo',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_brillo_6}": [
                ["style", "top", '597px'],
                ["transform", "scaleY", '0.87342'],
                ["transform", "scaleX", '0.87342'],
                ["style", "opacity", '0'],
                ["style", "left", '130px']
            ],
            "${_brillo_5}": [
                ["style", "top", '464px'],
                ["transform", "scaleY", '0.87342'],
                ["transform", "scaleX", '0.87342'],
                ["style", "opacity", '0'],
                ["style", "left", '129px']
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
            "${_hotspot_5}": [
                ["style", "top", '469px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '72px'],
                ["style", "left", '133px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '72px']
            ],
            "${_hotspot_1}": [
                ["style", "top", '133px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '62px'],
                ["style", "left", '39px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '371px']
            ],
            "${_guia_navegacion}": [
                ["style", "cursor", 'pointer']
            ],
            "${_hotspot_3}": [
                ["style", "top", '217px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '72px'],
                ["style", "left", '133px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '72px']
            ],
            "${_contenido}": [
                ["style", "clip", [0,1366,714.4775390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_4}": [
                ["style", "top", '344px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '72px'],
                ["style", "left", '133px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '72px']
            ],
            "${_brillo_3}": [
                ["style", "top", '209px'],
                ["transform", "scaleY", '0.87342'],
                ["transform", "scaleX", '0.87342'],
                ["style", "opacity", '0'],
                ["style", "left", '129px']
            ],
            "${_hotspot_6}": [
                ["style", "top", '602px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '72px'],
                ["style", "left", '133px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '72px']
            ],
            "${_brillo_4}": [
                ["style", "top", '339px'],
                ["transform", "scaleY", '0.87342'],
                ["transform", "scaleX", '0.87342'],
                ["style", "opacity", '0'],
                ["style", "left", '129px']
            ],
            "${_aprendizaje_organizacional}": [
                ["style", "top", '133px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '62px'],
                ["style", "left", '426px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '371px']
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
                { id: "eid140", tween: [ "style", "${_brillo_6}", "opacity", '1', { fromValue: '0'}], position: 2377, duration: 470 },
                { id: "eid142", tween: [ "style", "${_brillo_5}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 470 },
                { id: "eid136", tween: [ "style", "${_brillo_3}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 470 },
                { id: "eid138", tween: [ "style", "${_brillo_4}", "opacity", '1', { fromValue: '0'}], position: 2122, duration: 470 }            ]
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
                    id: 'btn_aprendizaje',
                    type: 'rect',
                    rect: ['-103', '-1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'character_1',
                    type: 'rect',
                    transform: [[], [], [], ['-1.05808']],
                    rect: ['889px', '234px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'character',
                    type: 'rect',
                    transform: [[], [], [], ['0.77901', '0.78389']],
                    rect: ['1053px', '168px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btn_bienvenida',
                    type: 'rect',
                    rect: ['0px', '-1px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sbtex',
                    type: 'rect',
                    rect: ['1057px', '614px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-204px', '-1px', '1366px', '768px', 'auto', 'auto'],
                    id: 'uno_text',
                    type: 'image',
                    clip: ['rect(191.73388671875px 1130.43994140625px 294.555419921875px 333.51708984375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-204px', '-1px', '1366px', '768px', 'auto', 'auto'],
                    id: 'dos_text',
                    type: 'image',
                    clip: ['rect(326.415771484375px 1130.43994140625px 432.913330078125px 333.51708984375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-204px', '-1px', '1366px', '768px', 'auto', 'auto'],
                    id: 'tres_text',
                    type: 'image',
                    clip: ['rect(454.443115234375px 1130.43994140625px 559.134033203125px 333.51708984375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-204px', '-1px', '1366px', '768px', 'auto', 'auto'],
                    id: 'cuatro_text',
                    type: 'image',
                    clip: ['rect(583.279541015625px 1129.484375px 687.970458984375px 332.5615234375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['48px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'deco',
                    type: 'image',
                    clip: ['rect(191.73388671875px 192.1513671875px 768px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-91px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'uno',
                    type: 'image',
                    clip: ['rect(199.19775390625px 308.30615234375px 305.4091796875px 211.2236328125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-91px', '2px', '1366px', '768px', 'auto', 'auto'],
                    id: 'dos',
                    type: 'image',
                    clip: ['rect(326.109130859375px 308.30615234375px 434.17578125px 211.2236328125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-91px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'tres',
                    type: 'image',
                    clip: ['rect(449.53955078125px 308.30615234375px 569.018310546875px 211.2236328125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-91px', '1px', '1366px', '768px', 'auto', 'auto'],
                    id: 'cuatro',
                    type: 'image',
                    clip: ['rect(582.74951171875px 308.30615234375px 687.112548828125px 211.2236328125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['839px', '132px', '376px', '59px', 'auto', 'auto'],
                    id: 'btngiaCopy',
                    type: 'image',
                    clip: ['rect(0px 376px 59px 69.3466796875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/btngia.png', '0px', '0px']
                },
                {
                    rect: ['839px', '132px', '376px', '59px', 'auto', 'auto'],
                    borderRadius: ['0px', '0px', '0px', '0px'],
                    id: 'btngia',
                    type: 'image',
                    clip: ['rect(0px 59.919921875px 59px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/btngia.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_bienvenida',
                symbolName: 'btn_bienvenida',
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
                id: 'btn_aprendizaje',
                symbolName: 'btn_aprendizaje',
                autoPlay: {

               }
            },
            {
                id: 'character_1',
                symbolName: 'character_1',
                autoPlay: {

               }
            },
            {
                id: 'sbtex',
                symbolName: 'sbtex',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sbtex}": [
                ["style", "left", '1057px'],
                ["style", "top", '614px']
            ],
            "${_deco}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-52px'],
                ["style", "clip", [191.73388671875,192.1513671875,768,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_uno}": [
                ["style", "-webkit-transform-origin", [18.78,32.69], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.78,32.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.78,32.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.78,32.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.78,32.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [18.78,32.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-91px'],
                ["transform", "scaleY", '0.20855'],
                ["transform", "rotateZ", '74deg'],
                ["transform", "scaleX", '0.20855'],
                ["style", "opacity", '0'],
                ["style", "clip", [199.19775390625,308.30615234375,305.4091796875,211.2236328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '0px']
            ],
            "${_dos_text}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-299px'],
                ["style", "clip", [326.415771484375,1130.43994140625,432.913330078125,333.51708984375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_btngiaCopy}": [
                ["style", "top", '132px'],
                ["style", "opacity", '0'],
                ["style", "left", '732px'],
                ["style", "clip", [0,376,59,69.3466796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_cuatro_text}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-299px'],
                ["style", "clip", [583.279541015625,1129.484375,687.970458984375,332.5615234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_btngia}": [
                ["style", "top", '132px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "clip", [0,59.919921875,59,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '839px']
            ],
            "${_dos}": [
                ["style", "-webkit-transform-origin", [19,49.14], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [19,49.14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [19,49.14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [19,49.14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [19,49.14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [19,49.14],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-91px'],
                ["transform", "scaleY", '0.20855'],
                ["transform", "rotateZ", '74deg'],
                ["transform", "scaleX", '0.20855'],
                ["style", "opacity", '0'],
                ["style", "clip", [326.109130859375,308.30615234375,434.17578125,211.2236328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '2px']
            ],
            "${_tres_text}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-299px'],
                ["style", "clip", [454.443115234375,1130.43994140625,559.134033203125,333.51708984375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_character_1}": [
                ["style", "top", '234px'],
                ["style", "left", '889px'],
                ["transform", "scaleX", '-1.05808']
            ],
            "${_cuatro}": [
                ["style", "-webkit-transform-origin", [19.24,83.21], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [19.24,83.21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [19.24,83.21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [19.24,83.21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [19.24,83.21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [19.24,83.21],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-91px'],
                ["transform", "scaleY", '0.20855'],
                ["transform", "rotateZ", '74deg'],
                ["transform", "scaleX", '0.20855'],
                ["style", "opacity", '0'],
                ["style", "clip", [582.74951171875,308.30615234375,687.112548828125,211.2236328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '1px']
            ],
            "${_tres}": [
                ["style", "-webkit-transform-origin", [19.11,66.19], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [19.11,66.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [19.11,66.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [19.11,66.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [19.11,66.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [19.11,66.19],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-91px'],
                ["transform", "scaleY", '0.20855'],
                ["transform", "rotateZ", '74deg'],
                ["transform", "scaleX", '0.20855'],
                ["style", "opacity", '0'],
                ["style", "clip", [449.53955078125,308.30615234375,569.018310546875,211.2236328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '0px']
            ],
            "${_uno_text}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '-299px'],
                ["style", "clip", [191.73388671875,1130.43994140625,294.555419921875,333.51708984375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_character}": [
                ["style", "top", '168px'],
                ["transform", "scaleX", '0.77901'],
                ["transform", "scaleY", '0.78389'],
                ["style", "left", '1053px']
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
                { id: "eid50", tween: [ "transform", "${_cuatro}", "scaleX", '1', { fromValue: '0.20855'}], position: 1375, duration: 500, easing: "easeOutBack" },
                { id: "eid96", tween: [ "style", "${_cuatro_text}", "opacity", '1', { fromValue: '0'}], position: 1662, duration: 500, easing: "easeOutBack" },
                { id: "eid74", tween: [ "style", "${_cuatro}", "opacity", '1', { fromValue: '0'}], position: 1375, duration: 500, easing: "easeOutBack" },
                { id: "eid88", tween: [ "style", "${_cuatro_text}", "left", '-204px', { fromValue: '-299px'}], position: 1662, duration: 500, easing: "easeOutBack" },
                { id: "eid156", tween: [ "transform", "${_btngia}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutSine" },
                { id: "eid94", tween: [ "style", "${_tres_text}", "opacity", '1', { fromValue: '0'}], position: 1577, duration: 500, easing: "easeOutBack" },
                { id: "eid64", tween: [ "transform", "${_uno}", "scaleY", '1', { fromValue: '0.20855'}], position: 1162, duration: 500, easing: "easeOutBack" },
                { id: "eid58", tween: [ "transform", "${_tres}", "scaleX", '1', { fromValue: '0.20855'}], position: 1312, duration: 500, easing: "easeOutBack" },
                { id: "eid90", tween: [ "style", "${_dos_text}", "opacity", '1', { fromValue: '0'}], position: 1506, duration: 500, easing: "easeOutBack" },
                { id: "eid82", tween: [ "style", "${_dos_text}", "left", '-204px', { fromValue: '-299px'}], position: 1506, duration: 500, easing: "easeOutBack" },
                { id: "eid68", tween: [ "transform", "${_dos}", "rotateZ", '0deg', { fromValue: '74deg'}], position: 1236, duration: 500, easing: "easeOutBack" },
                { id: "eid72", tween: [ "transform", "${_uno}", "rotateZ", '0deg', { fromValue: '74deg'}], position: 1162, duration: 500, easing: "easeOutBack" },
                { id: "eid54", tween: [ "transform", "${_dos}", "scaleX", '1', { fromValue: '0.20855'}], position: 1236, duration: 500, easing: "easeOutBack" },
                { id: "eid56", tween: [ "transform", "${_dos}", "scaleY", '1', { fromValue: '0.20855'}], position: 1236, duration: 500, easing: "easeOutBack" },
                { id: "eid46", tween: [ "style", "${_deco}", "left", '48px', { fromValue: '-52px'}], position: 1453, duration: 500, easing: "easeOutBack" },
                { id: "eid62", tween: [ "transform", "${_uno}", "scaleX", '1', { fromValue: '0.20855'}], position: 1162, duration: 500, easing: "easeOutBack" },
                { id: "eid48", tween: [ "style", "${_deco}", "opacity", '1', { fromValue: '0'}], position: 1453, duration: 500, easing: "easeOutBack" },
                { id: "eid60", tween: [ "transform", "${_tres}", "scaleY", '1', { fromValue: '0.20855'}], position: 1312, duration: 500, easing: "easeOutBack" },
                { id: "eid163", tween: [ "style", "${_btngiaCopy}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 756, easing: "easeOutSine" },
                { id: "eid161", tween: [ "style", "${_btngiaCopy}", "left", '779px', { fromValue: '732px'}], position: 750, duration: 756, easing: "easeOutSine" },
                { id: "eid86", tween: [ "style", "${_tres_text}", "left", '-204px', { fromValue: '-299px'}], position: 1577, duration: 500, easing: "easeOutBack" },
                { id: "eid80", tween: [ "style", "${_uno}", "opacity", '1', { fromValue: '0'}], position: 1162, duration: 500, easing: "easeOutBack" },
                { id: "eid66", tween: [ "transform", "${_cuatro}", "rotateZ", '0deg', { fromValue: '74deg'}], position: 1375, duration: 500, easing: "easeOutBack" },
                { id: "eid76", tween: [ "style", "${_dos}", "opacity", '1', { fromValue: '0'}], position: 1236, duration: 500, easing: "easeOutBack" },
                { id: "eid158", tween: [ "transform", "${_btngia}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutSine" },
                { id: "eid70", tween: [ "transform", "${_tres}", "rotateZ", '0deg', { fromValue: '74deg'}], position: 1312, duration: 500, easing: "easeOutBack" },
                { id: "eid78", tween: [ "style", "${_tres}", "opacity", '1', { fromValue: '0'}], position: 1312, duration: 500, easing: "easeOutBack" },
                { id: "eid52", tween: [ "transform", "${_cuatro}", "scaleY", '1', { fromValue: '0.20855'}], position: 1375, duration: 500, easing: "easeOutBack" },
                { id: "eid84", tween: [ "style", "${_uno_text}", "left", '-204px', { fromValue: '-299px'}], position: 1412, duration: 500, easing: "easeOutBack" },
                { id: "eid92", tween: [ "style", "${_uno_text}", "opacity", '1', { fromValue: '0'}], position: 1412, duration: 500, easing: "easeOutBack" }            ]
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
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy10',
                    type: 'image',
                    clip: ['rect(128.194580078125px 627.07080078125px 192.623291015625px 266.4619140625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['-144px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenido2Copy12',
                    type: 'image',
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
                ["style", "left", '-144px'],
                ["style", "clip", [128.194580078125,251.2685546875,192.623291015625,176.14404296875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid114", tween: [ "style", "${_contenido2Copy10}", "left", '-220px', { fromValue: '-48px'}], position: 750, duration: 463, easing: "easeOutBack" },
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
                    id: 'contenido2Copy9',
                    rect: ['-138px', '0px', '1366px', '768px', 'auto', 'auto'],
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
                ["style", "left", '-138px'],
                ["style", "clip", [134.221435546875,734.0390625,192.623291015625,658.4052734375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid118", tween: [ "style", "${_contenido2Copy11}", "left", '-241px', { fromValue: '-27px'}], position: 750, duration: 463, easing: "easeOutBack" },
                { id: "eid120", tween: [ "style", "${_contenido2Copy11}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 463, easing: "easeOutBack" },
                { id: "eid108", tween: [ "transform", "${_contenido2Copy9}", "scaleY", '1', { fromValue: '0.56313'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid112", tween: [ "style", "${_contenido2Copy9}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid106", tween: [ "transform", "${_contenido2Copy9}", "scaleX", '1', { fromValue: '0.56313'}], position: 500, duration: 538, easing: "easeOutBack" },
                { id: "eid110", tween: [ "transform", "${_contenido2Copy9}", "rotateZ", '0deg', { fromValue: '-118deg'}], position: 500, duration: 538, easing: "easeOutBack" }            ]
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
                ["style", "top", '-215px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [88.93,83.6], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [88.93,83.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-1074px'],
                ["style", "clip", [243.8427734375,1325.05078125,640.7958984375,1154.31689453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                    type: 'image',
                    rect: ['-421px', '-248px', '1366px', '770px', 'auto', 'auto'],
                    transform: [[0, 0], ['41']],
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
            "${_f2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-1103.4458007811,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_e2}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-849,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_f1}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-1019,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,86.330078125,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                ["style", "background-position", [0,-233.87084960938], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "left", '-821px'],
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
                ["style", "-webkit-transform-origin", [77.41,41.62], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.41,41.62],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "top", '13px'],
                ["style", "clip", [294,1092,498,976], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-820px']
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
                { id: "eid103", tween: [ "style", "${_ab_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_ab_3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_ab_3}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid100", tween: [ "style", "${_ab_2}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid102", tween: [ "style", "${_ab_2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid96", tween: [ "transform", "${_ab_3}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid97", tween: [ "transform", "${_ab_3}", "rotateZ", '84deg', { fromValue: '27deg'}], position: 7000, duration: 750 },
                { id: "eid98", tween: [ "transform", "${_ab_3}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 11508, duration: 492 },
                { id: "eid59", tween: [ "transform", "${_ab_2}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid63", tween: [ "transform", "${_ab_2}", "rotateZ", '84deg', { fromValue: '27deg'}], position: 7000, duration: 750 },
                { id: "eid65", tween: [ "transform", "${_ab_2}", "rotateZ", '0deg', { fromValue: '84deg'}], position: 11508, duration: 492 },
                { id: "eid64", tween: [ "style", "${_ab_2}", "left", '-814px', { fromValue: '-820px'}], position: 7000, duration: 750 },
                { id: "eid66", tween: [ "style", "${_ab_2}", "left", '-819px', { fromValue: '-814px'}], position: 11508, duration: 492 },
                { id: "eid94", tween: [ "style", "${_ab_3}", "left", '-833px', { fromValue: '-821px'}], position: 7000, duration: 750 },
                { id: "eid95", tween: [ "style", "${_ab_3}", "left", '-819px', { fromValue: '-833px'}], position: 11508, duration: 492 },
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
                { id: "eid60", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1', { fromValue: '0.51642'}], position: 120, duration: 500 },
                { id: "eid50", tween: [ "transform", "${_EllipseCopy2}", "scaleX", '1', { fromValue: '0.2385'}], position: 0, duration: 500 },
                { id: "eid64", tween: [ "style", "${_EllipseCopy}", "opacity", '0.3717133700847626', { fromValue: '0'}], position: 120, duration: 500 },
                { id: "eid72", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '0.3717130124568939'}], position: 620, duration: 630 }            ]
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
                    rect: ['-22px', '-11px', '519px', '560px', 'auto', 'auto'],
                    id: 'arm_1a',
                    type: 'image',
                    clip: ['rect(65.6796875px 98.8046875px 197.19921875px 29.7578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['-85px', '-15px', '519px', '560px', 'auto', 'auto'],
                    id: 'chest',
                    type: 'image',
                    clip: ['rect(14.29296875px 261.51171875px 286.74609375px 113.63671875px)'],
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
                },
                {
                    rect: ['117px', '-357px', '519px', '560px', 'auto', 'auto'],
                    transform: [[0, 0], ['109']],
                    type: 'image',
                    id: 'arm_2c',
                    display: 'none',
                    clip: ['rect(394.5556640625px 84.3505859375px 552.265869140625px 37.9287109375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    rect: ['-34px', '-71px', '519px', '560px', 'auto', 'auto'],
                    id: 'arm_1b',
                    type: 'image',
                    clip: ['rect(218.78515625px 72.40625px 372.19140625px 29.7578125px)'],
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
                ["style", "left", '-17px'],
                ["style", "top", '-66px']
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
                ["style", "-webkit-transform-origin", [13.54,13.34], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,13.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,13.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,13.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,13.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,13.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '4deg'],
                ["style", "clip", [65.6796875,98.8046875,197.19921875,29.7578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-22px'],
                ["style", "top", '-11px']
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
                ["style", "top", '-357px'],
                ["style", "clip", [394.5556640625,84.3505859375,552.265869140625,37.9287109375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '117px']
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
                ["style", "left", '-236px'],
                ["style", "top", '38px']
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
                { id: "eid120", tween: [ "style", "${_arm_2c}", "left", '123px', { fromValue: '117px'}], position: 5000, duration: 500 },
                { id: "eid129", tween: [ "style", "${_arm_2c}", "left", '117px', { fromValue: '123px'}], position: 8500, duration: 500 },
                { id: "eid16", tween: [ "transform", "${_arm_1b}", "rotateZ", '-28deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid23", tween: [ "transform", "${_arm_1b}", "rotateZ", '0deg', { fromValue: '-28deg'}], position: 10000, duration: 500 },
                { id: "eid50", tween: [ "transform", "${_arm_1b}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 17550, duration: 500 },
                { id: "eid58", tween: [ "transform", "${_arm_1b}", "rotateZ", '0deg', { fromValue: '12deg'}], position: 19050, duration: 500 },
                { id: "eid28", tween: [ "transform", "${_arm_2c}", "rotateZ", '40deg', { fromValue: '109deg'}], position: 5000, duration: 500 },
                { id: "eid46", tween: [ "transform", "${_arm_2c}", "rotateZ", '109deg', { fromValue: '40deg'}], position: 8500, duration: 500 },
                { id: "eid121", tween: [ "style", "${_arm_2c}", "top", '-358px', { fromValue: '-357px'}], position: 5000, duration: 500 },
                { id: "eid130", tween: [ "style", "${_arm_2c}", "top", '-357px', { fromValue: '-358px'}], position: 8500, duration: 500 },
                { id: "eid51", tween: [ "transform", "${_arm_2a}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 17550, duration: 500 },
                { id: "eid57", tween: [ "transform", "${_arm_2a}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 19050, duration: 500 },
                { id: "eid29", tween: [ "style", "${_arm_2b}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid44", tween: [ "style", "${_arm_2b}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid13", tween: [ "transform", "${_arm_1a}", "rotateZ", '8deg', { fromValue: '4deg'}], position: 2000, duration: 500 },
                { id: "eid24", tween: [ "transform", "${_arm_1a}", "rotateZ", '4deg', { fromValue: '8deg'}], position: 10000, duration: 500 },
                { id: "eid26", tween: [ "style", "${_arm_2b}", "left", '-227px', { fromValue: '-236px'}], position: 5000, duration: 180 },
                { id: "eid139", tween: [ "style", "${_arm_2b}", "left", '-225px', { fromValue: '-227px'}], position: 5180, duration: 70 },
                { id: "eid137", tween: [ "style", "${_arm_2b}", "left", '-228px', { fromValue: '-225px'}], position: 5250, duration: 250 },
                { id: "eid125", tween: [ "style", "${_arm_2b}", "left", '-226px', { fromValue: '-228px'}], position: 8500, duration: 250 },
                { id: "eid145", tween: [ "style", "${_arm_2b}", "left", '-229px', { fromValue: '-226px'}], position: 8750, duration: 102 },
                { id: "eid144", tween: [ "style", "${_arm_2b}", "left", '-236px', { fromValue: '-229px'}], position: 8852, duration: 148 },
                { id: "eid148", tween: [ "style", "${_arm_2b}", "left", '-227px', { fromValue: '-236px'}], position: 17550, duration: 500 },
                { id: "eid61", tween: [ "style", "${_arm_2b}", "left", '-236px', { fromValue: '-227px'}], position: 19053, duration: 497 },
                { id: "eid25", tween: [ "transform", "${_arm_2b}", "rotateZ", '18deg', { fromValue: '124deg'}], position: 5000, duration: 500 },
                { id: "eid43", tween: [ "transform", "${_arm_2b}", "rotateZ", '124deg', { fromValue: '18deg'}], position: 8500, duration: 500 },
                { id: "eid124", tween: [ "transform", "${_arm_2b}", "rotateZ", '124deg', { fromValue: '124deg'}], position: 9000, duration: 0 },
                { id: "eid149", tween: [ "transform", "${_arm_2b}", "rotateZ", '124deg', { fromValue: '124deg'}], position: 17550, duration: 0 },
                { id: "eid153", tween: [ "transform", "${_arm_2b}", "rotateZ", '124deg', { fromValue: '124deg'}], position: 19550, duration: 0 },
                { id: "eid14", tween: [ "style", "${_arm_1b}", "left", '-25px', { fromValue: '-17px'}], position: 2000, duration: 500 },
                { id: "eid22", tween: [ "style", "${_arm_1b}", "left", '-17px', { fromValue: '-25px'}], position: 10000, duration: 500 },
                { id: "eid30", tween: [ "style", "${_arm_2c}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid47", tween: [ "style", "${_arm_2c}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_arm_2b}", "top", '45px', { fromValue: '38px'}], position: 5000, duration: 180 },
                { id: "eid138", tween: [ "style", "${_arm_2b}", "top", '48px', { fromValue: '45px'}], position: 5180, duration: 320 },
                { id: "eid122", tween: [ "style", "${_arm_2b}", "top", '44px', { fromValue: '48px'}], position: 8500, duration: 250 },
                { id: "eid143", tween: [ "style", "${_arm_2b}", "top", '38px', { fromValue: '44px'}], position: 8852, duration: 148 },
                { id: "eid147", tween: [ "style", "${_arm_2b}", "top", '37px', { fromValue: '38px'}], position: 17550, duration: 500 },
                { id: "eid155", tween: [ "style", "${_arm_2b}", "top", '38px', { fromValue: '37px'}], position: 19050, duration: 500 }            ]
        }
    }
},
"trunk_2": {
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
                    rect: ['47px', '-16px', 'auto', 'auto', 'auto', 'auto']
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
                symbolName: 'head_1',
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
                ["style", "top", '-16px'],
                ["style", "left", '47px'],
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
"head_1": {
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
                    rect: ['14px', '57px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mouth2',
                    type: 'rect',
                    rect: ['40px', '100px', 'auto', 'auto', 'auto', 'auto']
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
                symbolName: 'mouth_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mouth2}": [
                ["style", "top", '101px'],
                ["style", "left", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '150px'],
                ["style", "width", '100px']
            ],
            "${_head}": [
                ["style", "top", '-305px'],
                ["style", "clip", [308.42578125,238.14453125,439.2265625,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-143px']
            ],
            "${_eyes2}": [
                ["style", "left", '14px'],
                ["style", "top", '57px']
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
                { id: "eid160", tween: [ "style", "${_mouth2}", "top", '101px', { fromValue: '101px'}], position: 20005, duration: 0 }            ]
        }
    }
},
"mouth_1": {
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
                    clip: ['rect(532.931396484375px 184.09228515625px 548.926025390625px 167.53857421875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-92.3681640625px', '2.2770996093752px']
                },
                {
                    type: 'image',
                    rect: ['-159px', '-531px', '519px', '560px', 'auto', 'auto'],
                    display: 'block',
                    id: 'mouthCopy',
                    clip: ['rect(531.291015625px 198.83984375px 554.6064453125px 154.119140625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '-51.901367187501px', '1.3535156249998px']
                },
                {
                    type: 'image',
                    rect: ['-154px', '-531px', '519px', '560px', 'auto', 'auto'],
                    display: 'none',
                    id: 'mouthCopy2',
                    clip: ['rect(530.46728515625px 194.71728515625px 550.6630859375px 149.64404296875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '3.7485351562502px', '2.6213378906247px']
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
                ["style", "background-position", [-92.3681640625,2.2770996093752], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px'],
                ["style", "clip", [532.931396484375,184.09228515625,548.926025390625,167.53857421875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_mouthCopy}": [
                ["style", "top", '-531px'],
                ["style", "display", 'block'],
                ["style", "left", '-159px'],
                ["style", "clip", [531.291015625,198.83984375,554.6064453125,154.119140625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-51.901367187501,1.3535156249998], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_mouthCopy2}": [
                ["style", "top", '-531px'],
                ["style", "display", 'none'],
                ["style", "clip", [530.46728515625,194.71728515625,550.6630859375,149.64404296875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [3.7485351562502,2.6213378906247], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-154px']
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
                    rect: ['-137px', '-489px', '519px', '560px', 'auto', 'auto'],
                    display: 'block',
                    id: 'eyes',
                    clip: ['rect(494.503173828125px 204.19140625px 509.53955078125px 146.1171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-137px', '-489px', '519px', '560px', 'auto', 'auto'],
                    display: 'none',
                    id: 'eyesClose',
                    clip: ['rect(496.640380859375px 204.19140625px 508.434326171875px 146.1171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '12.383056640625px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eyesClose}": [
                ["style", "top", '-489px'],
                ["style", "display", 'none'],
                ["style", "background-position", [0,12.383056640625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-137px'],
                ["style", "clip", [496.640380859375,204.19140625,508.434326171875,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_eyes}": [
                ["style", "top", '-489px'],
                ["style", "display", 'block'],
                ["style", "left", '-137px'],
                ["style", "clip", [494.503173828125,204.19140625,509.53955078125,146.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid70", tween: [ "style", "${_eyesClose}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_eyesClose}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid72", tween: [ "style", "${_eyesClose}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid73", tween: [ "style", "${_eyesClose}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid74", tween: [ "style", "${_eyesClose}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid75", tween: [ "style", "${_eyesClose}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
                { id: "eid76", tween: [ "style", "${_eyesClose}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid77", tween: [ "style", "${_eyesClose}", "display", 'none', { fromValue: 'block'}], position: 18750, duration: 0 },
                { id: "eid66", tween: [ "style", "${_eyesClose}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_eyesClose}", "display", 'none', { fromValue: 'block'}], position: 21250, duration: 0 },
                { id: "eid68", tween: [ "style", "${_eyesClose}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
                { id: "eid69", tween: [ "style", "${_eyesClose}", "display", 'none', { fromValue: 'block'}], position: 21750, duration: 0 },
                { id: "eid108", tween: [ "style", "${_eyes}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid109", tween: [ "style", "${_eyes}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid110", tween: [ "style", "${_eyes}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid111", tween: [ "style", "${_eyes}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid112", tween: [ "style", "${_eyes}", "display", 'none', { fromValue: 'block'}], position: 14005, duration: 0 },
                { id: "eid113", tween: [ "style", "${_eyes}", "display", 'block', { fromValue: 'none'}], position: 14255, duration: 0 },
                { id: "eid114", tween: [ "style", "${_eyes}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid115", tween: [ "style", "${_eyes}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0 },
                { id: "eid116", tween: [ "style", "${_eyes}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid117", tween: [ "style", "${_eyes}", "display", 'block', { fromValue: 'none'}], position: 21250, duration: 0 },
                { id: "eid118", tween: [ "style", "${_eyes}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0 },
                { id: "eid119", tween: [ "style", "${_eyes}", "display", 'block', { fromValue: 'none'}], position: 21750, duration: 0 }            ]
        }
    }
},
"character_1": {
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
                    rect: ['-256px', '83px', '519px', '560px', 'auto', 'auto'],
                    id: 'legs',
                    type: 'image',
                    clip: ['rect(194.68359375px 461.9609375px 537.5px 301.3125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/character.png', '0px', '0px']
                },
                {
                    id: 'trunk',
                    type: 'rect',
                    rect: ['15px', '-11', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'trunk',
                symbolName: 'trunk_2',
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
                ["style", "left", '-256px'],
                ["style", "clip", [194.68359375,461.9609375,537.5,301.3125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_trunk}": [
                ["style", "-webkit-transform-origin", [36.01,80.39], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [36.01,80.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '15px'],
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
"sbtex": {
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
                    rect: ['0px', '-17px', '151px', '159px', 'auto', 'auto'],
                    transform: [[], [], [], ['0', '0']],
                    id: 'bn-nues-exp2',
                    type: 'image',
                    clip: ['rect(48.322265625px 151px 112.691162109375px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bn-nues-exp.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-69px', '151px', '159px', 'auto', 'auto'],
                    id: 'bn-nues-exp2Copy',
                    type: 'image',
                    clip: ['rect(112.751708984375px 151px 158.328857421875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bn-nues-exp.png', '0px', '0px']
                },
                {
                    rect: ['0px', '4px', '151px', '159px', 'auto', 'auto'],
                    id: 'bn-nues-exp2Copy2',
                    type: 'image',
                    clip: ['rect(0px 151px 46.91943359375px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bn-nues-exp.png', '0px', '0px']
                },
                {
                    rect: ['5px', '40px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[], [], [], ['1.02817', '1.05907']],
                    id: 'shine',
                    opacity: 0.5,
                    display: 'none',
                    type: 'rect'
                },
                {
                    rect: ['1px', '0px', '150px', '94px', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    id: 'nuestras_experiencias',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'shine',
                symbolName: 'shine',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_shine}": [
                ["style", "top", '40px'],
                ["transform", "scaleY", '1.05907'],
                ["transform", "scaleX", '1.02817'],
                ["style", "opacity", '0.5'],
                ["style", "left", '5px'],
                ["style", "display", 'none']
            ],
            "${_nuestras_experiencias}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '94px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1px'],
                ["style", "width", '150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '150px']
            ],
            "${_bn-nues-exp2}": [
                ["style", "top", '121px'],
                ["transform", "scaleY", '0'],
                ["style", "overflow", 'visible'],
                ["transform", "scaleX", '0'],
                ["style", "clip", [48.322265625,151,112.691162109375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_bn-nues-exp2Copy}": [
                ["style", "top", '-69px'],
                ["style", "overflow", 'visible'],
                ["style", "opacity", '0'],
                ["style", "clip", [112.751708984375,151,158.328857421875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_bn-nues-exp2Copy2}": [
                ["style", "top", '4px'],
                ["transform", "scaleY", '0'],
                ["style", "overflow", 'visible'],
                ["transform", "scaleX", '0'],
                ["style", "clip", [0,151,46.91943359375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            timeline: [
                { id: "eid187", tween: [ "style", "${_bn-nues-exp2Copy}", "opacity", '1', { fromValue: '0'}], position: 2653, duration: 347, easing: "easeOutSine" },
                { id: "eid182", tween: [ "transform", "${_bn-nues-exp2}", "scaleX", '1', { fromValue: '0'}], position: 2110, duration: 656, easing: "easeOutBack" },
                { id: "eid178", tween: [ "transform", "${_bn-nues-exp2Copy2}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 1250, easing: "easeOutBounce" },
                { id: "eid191", tween: [ "style", "${_shine}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0, easing: "easeInSine" },
                { id: "eid185", tween: [ "style", "${_bn-nues-exp2}", "top", '-17px', { fromValue: '121px'}], position: 2110, duration: 656, easing: "easeOutBack" },
                { id: "eid183", tween: [ "transform", "${_bn-nues-exp2}", "scaleY", '1', { fromValue: '0'}], position: 2110, duration: 656, easing: "easeOutBack" },
                { id: "eid179", tween: [ "transform", "${_bn-nues-exp2Copy2}", "scaleY", '1', { fromValue: '0'}], position: 2000, duration: 1250, easing: "easeOutBounce" },
                { id: "eid188", tween: [ "style", "${_nuestras_experiencias}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"shine": {
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
                    rect: ['0px', '0px', '142px', '48px', 'auto', 'auto'],
                    borderRadius: ['7px 7px', '7px 7px', '7px 7px', '7px 7px'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-bottom-left-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '142px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid190", tween: [ "style", "${_Rectangle2}", "opacity", '0.6', { fromValue: '0'}], position: 2082, duration: 173, easing: "easeInSine" },
                { id: "eid193", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0.6'}], position: 2255, duration: 36, easing: "easeInSine" },
                { id: "eid194", tween: [ "style", "${_Rectangle2}", "opacity", '0.6', { fromValue: '0'}], position: 2291, duration: 173, easing: "easeInSine" },
                { id: "eid195", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0.6'}], position: 2464, duration: 36, easing: "easeInSine" }            ]
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
