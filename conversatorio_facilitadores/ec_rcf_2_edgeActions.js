/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_hotspot_inicio}", "click", function(sym, e) {
         window.open("index.html", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'etiqueta'
   (function(symbolName) {   
   
   })("etiqueta");
   //Edge symbol end:'etiqueta'

   //=========================================================
   
   //Edge symbol: 'btn_bienvenida'
   (function(symbolName) {   
   
   })("btn_bienvenida");
   //Edge symbol end:'btn_bienvenida'

   //=========================================================
   
   //Edge symbol: 'btn_aprendizaje'
   (function(symbolName) {   
   
   })("btn_aprendizaje");
   //Edge symbol end:'btn_aprendizaje'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'trunk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("trunk");
   //Edge symbol end:'trunk'

   //=========================================================
   
   //Edge symbol: 'head'
   (function(symbolName) {   
   
   })("head");
   //Edge symbol end:'head'

   //=========================================================
   
   //Edge symbol: 'aprendiz_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("character");
   //Edge symbol end:'character'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'expressions_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("mouth");
   //Edge symbol end:'mouth'

   //=========================================================
   
   //Edge symbol: 'trunk_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      })("trunk_1");
   //Edge symbol end:'trunk_1'

   //=========================================================
   
   //Edge symbol: 'ab_c'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ab_c");
   //Edge symbol end:'ab_c'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'brillo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2470, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("brillo");
   //Edge symbol end:'brillo'

   //=========================================================
   
   //Edge symbol: 'btillo_t'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("btillo_t");
   //Edge symbol end:'btillo_t'

   //=========================================================
   
   //Edge symbol: 'contenido'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hotspot_2}", "click", function(sym, e) {
         window.open("pdf/Guia-del-participante_Facilitadores_Bienvenida.pdf", "_blank");
         sym.$("brillo_r2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_3}", "click", function(sym, e) {
         sym.getSymbol("lecturas2").play(1);
         sym.$("lecturas2").fadeIn("slow");
         sym.$("brillo_r3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_4}", "click", function(sym, e) {
         window.open("pdf/GUÍA PARA LA ELABORACIÓN DEL VIDEO.pdf", "_blank");
         sym.$("brillo_r4").hide();
         //sym.getSymbol("videos").play();
         //sym.$("videos").fadeIn("slow");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_1}", "click", function(sym, e) {
         sym.getSymbol("pop_1").play(1);
         sym.$("brillo_r1").hide();

      });
      //Edge binding end

   })("contenido");
   //Edge symbol end:'contenido'

   //=========================================================
   
   //Edge symbol: 'brillo_r'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("brillo_r");
   //Edge symbol end:'brillo_r'

   //=========================================================
   
   //Edge symbol: 'pop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cerrar}", "click", function(sym, e) {
         sym.playReverse(750);
         

      });
      //Edge binding end

   })("pop_1");
   //Edge symbol end:'pop_1'

   //=========================================================
   
   //Edge symbol: 'lecturas'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_HotspotL1}", "click", function(sym, e) {
         window.open("pdf/Estrategias de facilitación.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lecturas}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("contenido").$("lecturas2").fadeOut("slow");
         sym.getComposition().getStage().getSymbol("contenido").$("brillo_r3").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HotspotL2}", "click", function(sym, e) {
         window.open("pdf/Estudiante adulto en la era digital.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HotspotL3}", "click", function(sym, e) {
         window.open("pdf/Lineamientos Organizacionales.pdf", "_blank");

      });
      //Edge binding end

      

      

      

      

      

      

   })("lecturas");
   //Edge symbol end:'lecturas'

   //=========================================================
   
   //Edge symbol: 'videos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("videoCont").html("<video width='722' height='406' title='Video' preload='auto' controls ><source src='video/Video invitacion.mp4' type='video/mp4'></video>");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_videos}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("contenido").$("videos").fadeOut("slow");
         

      });
      //Edge binding end

   })("videos");
   //Edge symbol end:'videos'

})(jQuery, AdobeEdge, "EDGE-217058342");