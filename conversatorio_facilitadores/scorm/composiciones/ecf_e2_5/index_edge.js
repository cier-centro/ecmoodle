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
                id: 'contenido3',
                type: 'image',
                rect: ['0px', '-1px','1366px','768px','auto', 'auto'],
                clip: ['rect(162.899658203125px 1295.11962890625px 518.33740234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenido3Copy',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(103.107421875px 905.04443359375px 145.432373046875px 354.65185546875px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'contenido3Copy2',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                clip: ['rect(103.107421875px 321.08642578125px 145.432373046875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'textos',
                type: 'image',
                rect: ['0px', '-92px','1366px','768px','auto', 'auto'],
                clip: ['rect(521.848388671875px 1366px 675.12890625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"contenido.png",'0px','0px']
            },
            {
                id: 'btn_1',
                type: 'image',
                rect: ['137px', '244px','190px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"btn_1.png",'0px','0px']
            },
            {
                id: 'btn_3',
                type: 'image',
                rect: ['717px', '244px','190px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"btn_3.png",'0px','0px']
            },
            {
                id: 'btn_2',
                type: 'image',
                rect: ['423px', '244px','190px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"btn_2.png",'0px','0px']
            },
            {
                id: 'btn_4',
                type: 'image',
                rect: ['1031px', '244px','190px','190px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"btn_4.png",'0px','0px']
            },
            {
                id: 'btn_circular1',
                type: 'rect',
                rect: ['174px', '279px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.92682','0.92682']]
            },
            {
                id: 'btn_circular2',
                type: 'rect',
                rect: ['460px', '279px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.92682','0.92682']]
            },
            {
                id: 'btn_circular3',
                type: 'rect',
                rect: ['752px', '279px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.92682','0.92682']]
            },
            {
                id: 'btn_circular4',
                type: 'rect',
                rect: ['1066px', '279px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.92682','0.92682']]
            },
            {
                id: 'hotspot_1',
                type: 'ellipse',
                rect: ['139px', '244px','191px','190px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [20,"rgb(255, 255, 255)","none"],
                transform: [[],[],[],['0.92682','0.92682']]
            },
            {
                id: 'hotspot_2',
                type: 'ellipse',
                rect: ['424px', '244px','191px','190px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [20,"rgb(255, 255, 255)","none"],
                transform: [[],[],[],['0.92682','0.92682']]
            },
            {
                id: 'hotspot_3',
                type: 'ellipse',
                rect: ['716px', '244px','191px','190px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [20,"rgb(255, 255, 255)","none"],
                transform: [[],[],[],['0.92682','0.92682']]
            },
            {
                id: 'hotspot_4',
                type: 'ellipse',
                rect: ['1030px', '244px','191px','190px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [20,"rgb(255, 255, 255)","none"],
                transform: [[],[],[],['0.92682','0.92682']]
            }],
            symbolInstances: [
            {
                id: 'etiqueta',
                symbolName: 'etiqueta',
                autoPlay: {

                }
            },
            {
                id: 'btn_circular2',
                symbolName: 'btn_circular',
                autoPlay: {

                }
            },
            {
                id: 'btn_circular1',
                symbolName: 'btn_circular',
                autoPlay: {

                }
            },
            {
                id: 'btn_circular3',
                symbolName: 'btn_circular',
                autoPlay: {

                }
            },
            {
                id: 'btn_circular4',
                symbolName: 'btn_circular',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_btn_2}": [
                ["style", "top", '244px'],
                ["transform", "scaleY", '0.1665'],
                ["transform", "rotateZ", '-97deg'],
                ["transform", "scaleX", '0.1665'],
                ["style", "opacity", '0'],
                ["style", "left", '423px']
            ],
            "${_hotspot_2}": [
                ["style", "top", '244px'],
                ["transform", "scaleX", '0.92682'],
                ["transform", "scaleY", '0.92682'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '190px'],
                ["style", "border-style", 'none'],
                ["style", "left", '424px'],
                ["style", "width", '191px']
            ],
            "${_btn_3}": [
                ["style", "top", '244px'],
                ["transform", "scaleY", '0.1665'],
                ["transform", "rotateZ", '-97deg'],
                ["transform", "scaleX", '0.1665'],
                ["style", "opacity", '0'],
                ["style", "left", '717px']
            ],
            "${_hotspot_3}": [
                ["style", "top", '244px'],
                ["transform", "scaleX", '0.92682'],
                ["transform", "scaleY", '0.92682'],
                ["style", "left", '716px'],
                ["style", "height", '190px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '191px']
            ],
            "${_contenido3Copy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-129px'],
                ["style", "clip", [103.107421875,905.04443359375,145.432373046875,354.65185546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_4}": [
                ["style", "top", '244px'],
                ["style", "height", '190px'],
                ["transform", "scaleY", '0.92682'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.92682'],
                ["style", "border-style", 'none'],
                ["style", "left", '1030px'],
                ["style", "width", '191px']
            ],
            "${_etiqueta}": [
                ["style", "left", '0px'],
                ["style", "top", '82px']
            ],
            "${_btn_4}": [
                ["style", "top", '244px'],
                ["transform", "scaleY", '0.1665'],
                ["transform", "rotateZ", '-97deg'],
                ["transform", "scaleX", '0.1665'],
                ["style", "opacity", '0'],
                ["style", "left", '1031px']
            ],
            "${_btn_circular4}": [
                ["transform", "scaleX", '0.92682'],
                ["style", "left", '1066px'],
                ["transform", "scaleY", '0.92682'],
                ["style", "top", '279px']
            ],
            "${_hotspot_1}": [
                ["style", "top", '244px'],
                ["transform", "scaleX", '0.92682'],
                ["transform", "scaleY", '0.92682'],
                ["style", "left", '139px'],
                ["style", "height", '190px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '191px']
            ],
            "${_contenido3}": [
                ["style", "top", '173px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [162.899658203125,1295.11962890625,518.33740234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_btn_circular2}": [
                ["transform", "scaleX", '0.92682'],
                ["style", "left", '460px'],
                ["transform", "scaleY", '0.92682'],
                ["style", "top", '279px']
            ],
            "${_btn_circular3}": [
                ["style", "top", '279px'],
                ["transform", "scaleX", '0.92682'],
                ["transform", "scaleY", '0.92682'],
                ["style", "left", '752px']
            ],
            "${_btn_circular1}": [
                ["transform", "scaleX", '0.92682'],
                ["style", "left", '174px'],
                ["transform", "scaleY", '0.92682'],
                ["style", "top", '279px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '341px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_textos}": [
                ["style", "top", '82px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [521.848388671875,1366,675.12890625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_btn_1}": [
                ["style", "top", '244px'],
                ["transform", "scaleY", '0.1665'],
                ["transform", "rotateZ", '-97deg'],
                ["transform", "scaleX", '0.1665'],
                ["style", "opacity", '0'],
                ["style", "left", '137px']
            ],
            "${_contenido3Copy2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-129px'],
                ["style", "clip", [103.107421875,321.08642578125,145.432373046875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid46", tween: [ "transform", "${_btn_3}", "rotateZ", '0deg', { fromValue: '-97deg'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid44", tween: [ "transform", "${_btn_2}", "scaleY", '0.92682', { fromValue: '0.1665'}], position: 636, duration: 500, easing: "easeOutBack" },
                { id: "eid54", tween: [ "style", "${_btn_3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid56", tween: [ "style", "${_btn_1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid58", tween: [ "style", "${_contenido3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid85", tween: [ "style", "${_btn_4}", "opacity", '1', { fromValue: '0'}], position: 870, duration: 500, easing: "easeOutBack" },
                { id: "eid86", tween: [ "transform", "${_btn_4}", "scaleY", '0.92682', { fromValue: '0.1665'}], position: 870, duration: 500, easing: "easeOutBack" },
                { id: "eid34", tween: [ "transform", "${_btn_3}", "scaleX", '0.92682', { fromValue: '0.1665'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid36", tween: [ "transform", "${_btn_3}", "scaleY", '0.92682', { fromValue: '0.1665'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid84", tween: [ "transform", "${_btn_4}", "scaleX", '0.92682', { fromValue: '0.1665'}], position: 870, duration: 500, easing: "easeOutBack" },
                { id: "eid48", tween: [ "transform", "${_btn_1}", "rotateZ", '0deg', { fromValue: '-97deg'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid52", tween: [ "style", "${_btn_2}", "opacity", '1', { fromValue: '0'}], position: 636, duration: 500, easing: "easeOutBack" },
                { id: "eid31", tween: [ "style", "${_contenido3Copy2}", "left", '0px', { fromValue: '-129px'}], position: 370, duration: 500, easing: "easeOutBack" },
                { id: "eid42", tween: [ "transform", "${_btn_2}", "scaleX", '0.92682', { fromValue: '0.1665'}], position: 636, duration: 500, easing: "easeOutBack" },
                { id: "eid87", tween: [ "transform", "${_btn_4}", "rotateZ", '0deg', { fromValue: '-97deg'}], position: 870, duration: 500, easing: "easeOutBack" },
                { id: "eid28", tween: [ "style", "${_contenido3Copy}", "left", '0px', { fromValue: '-129px'}], position: 435, duration: 500, easing: "easeOutBack" },
                { id: "eid30", tween: [ "style", "${_contenido3Copy}", "opacity", '1', { fromValue: '0'}], position: 435, duration: 500, easing: "easeOutBack" },
                { id: "eid50", tween: [ "transform", "${_btn_2}", "rotateZ", '0deg', { fromValue: '-97deg'}], position: 636, duration: 500, easing: "easeOutBack" },
                { id: "eid40", tween: [ "transform", "${_btn_1}", "scaleY", '0.92682', { fromValue: '0.1665'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid38", tween: [ "transform", "${_btn_1}", "scaleX", '0.92682', { fromValue: '0.1665'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid60", tween: [ "style", "${_textos}", "opacity", '1', { fromValue: '0'}], position: 870, duration: 500, easing: "easeOutBack" },
                { id: "eid64", tween: [ "style", "${_textos}", "top", '-92px', { fromValue: '82px'}], position: 870, duration: 500, easing: "easeOutBack" },
                { id: "eid32", tween: [ "style", "${_contenido3Copy2}", "opacity", '1', { fromValue: '0'}], position: 370, duration: 500, easing: "easeOutBack" },
                { id: "eid62", tween: [ "style", "${_contenido3}", "top", '-1px', { fromValue: '173px'}], position: 750, duration: 500, easing: "easeOutBack" }            ]
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
                    transform: [[0, 0], [], [], ['1.29298']],
                    type: 'image',
                    id: 'etiquetaCopy2',
                    rect: ['0px', '-125px', '826px', '204px', 'auto', 'auto'],
                    clip: ['rect(131.214599609375px 826px 202.869384765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.29298']],
                    type: 'image',
                    id: 'etiquetaCopy',
                    rect: ['0px', '-64px', '826px', '204px', 'auto', 'auto'],
                    clip: ['rect(80.439208984375px 826px 131.00634765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/etiqueta.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.29298']],
                    type: 'image',
                    id: 'etiqueta',
                    rect: ['0px', '0px', '826px', '204px', 'auto', 'auto'],
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
            "${_etiqueta}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1.29298'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,826,80.296142578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-210px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "top", '-124px'],
                ["transform", "scaleX", '1.29298'],
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
