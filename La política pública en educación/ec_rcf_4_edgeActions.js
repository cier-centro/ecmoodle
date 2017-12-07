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
         window.open("http://application.colombiaaprende.edu.co/mod/forum/view.php?id=286182", "_blank");
         sym.$("brillo_r2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_3}", "click", function(sym, e) {
         //window.open("pdf/lectura_apoyo_2.pdf", "_blank");
         sym.$("lecturas").fadeIn("slow");
         sym.getSymbol("lecturas").play(1);
         sym.$("brillo_r3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_1}", "click", function(sym, e) {
         window.open("http://application.colombiaaprende.edu.co/mod/scorm/view.php?id=286263", "_blank");
         sym.$("brillo_r1").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_4}", "click", function(sym, e) {
         window.open("http://application.colombiaaprende.edu.co/pluginfile.php/678369/mod_resource/content/1/Gui%CC%81a%20del%20participante_Conversatorio1_Encuentro2.pdf", "_blank");
         sym.$("brillo_r4").hide();

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

   //=========================================================
   
   //Edge symbol: 'lecturas'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_HotspotL1}", "click", function(sym, e) {
         window.open("http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=62510", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lecturas}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("contenido").$("lecturas").fadeOut("slow");
         sym.getComposition().getStage().getSymbol("contenido").$("brillo_r3").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HotspotL2}", "click", function(sym, e) {
         window.open("http://application.colombiaaprende.edu.co/pluginfile.php/678012/mod_resource/content/1/Ley%2030%20de%201992.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HotspotL3}", "click", function(sym, e) {
         window.open("http://application.colombiaaprende.edu.co/pluginfile.php/678013/mod_resource/content/1/Ley%20715%20de%202001.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HotspotL4}", "click", function(sym, e) {
         window.open("http://application.colombiaaprende.edu.co/pluginfile.php/678014/mod_resource/content/1/Ley%20General%20de%20Educaci%C3%B3n.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HotspotL5}", "click", function(sym, e) {
         window.open("http://application.colombiaaprende.edu.co/pluginfile.php/678016/mod_resource/content/1/OCDE%20%282016%29%20Revisi%C3%B3n%20de%20pol%C3%ADticas%20nacionales%20de%20educaci%C3%B3n%20La%20educaci%C3%B3n%20en%20Colombia.pdf", "_blank");

      });
      //Edge binding end

      

      

      

      

   })("lecturas");
   //Edge symbol end:'lecturas'

})(jQuery, AdobeEdge, "EDGE-217058342");