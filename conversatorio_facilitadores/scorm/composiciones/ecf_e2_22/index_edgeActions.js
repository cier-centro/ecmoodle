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
      
      
      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //CAMBIAR SEGÚN EL NÚMERO CONDICIONES 
         TotalRadioButton = 2;
         //DEJAR IGUAL O CAMBIAR POR EL TOTAL DE ELEMENTOS
         CrearRadioButton = 2;
         //RESPUESTAS CAMBIAR POR 1 PARA LA PRIMERA OPCIÓN Y 2 PARA LA SEGUNDA
         sym.setVariable("Respuesta_1", 2);
         sym.setVariable("Respuesta_2", 2);
         sym.setVariable("Respuesta_3", 2);
         sym.setVariable("Respuesta_4", 1);
         sym.setVariable("Respuesta_5", 2);
         sym.setVariable("Respuesta_6", 2);

      });
      //Edge binding end

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'bt_validar_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_validar");
   //Edge symbol end:'bt_validar'

   //=========================================================
   
   //Edge symbol: 'bt_solucion_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_solucion");
   //Edge symbol end:'bt_solucion'

   //=========================================================
   
   //Edge symbol: 'bt_reiniciar_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_reiniciar");
   //Edge symbol end:'bt_reiniciar'

   //=========================================================
   
   //Edge symbol: 'bt_ayuda_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_ayuda");
   //Edge symbol end:'bt_ayuda'

   //=========================================================
   
   //Edge symbol: 'ok'
   (function(symbolName) {   
   
   })("ok");
   //Edge symbol end:'ok'

   //=========================================================
   
   //Edge symbol: 'bad'
   (function(symbolName) {   
   
   })("bad");
   //Edge symbol end:'bad'

   //=========================================================
   
   //Edge symbol: 'bt_validar_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_validar_1");
   //Edge symbol end:'bt_validar_1'

   //=========================================================
   
   //Edge symbol: 'bt_solucion_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_solucion_1");
   //Edge symbol end:'bt_solucion_1'

   //=========================================================
   
   //Edge symbol: 'bt_reiniciar_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_reiniciar_1");
   //Edge symbol end:'bt_reiniciar_1'

   //=========================================================
   
   //Edge symbol: 'bt_ayuda_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_ayuda_1");
   //Edge symbol end:'bt_ayuda_1'

   //=========================================================
   
   //Edge symbol: 'etiqueta'
   (function(symbolName) {   
   
   })("etiqueta");
   //Edge symbol end:'etiqueta'

   //=========================================================
   
   //Edge symbol: 'contenido'
   (function(symbolName) {   
   
   })("contenido");
   //Edge symbol end:'contenido'

   //=========================================================

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
   
   //Edge symbol: 'head'
   (function(symbolName) {   
   
   })("head");
   //Edge symbol end:'head'

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
   
   //Edge symbol: 'trunk_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      })("trunk_1");
   //Edge symbol end:'trunk_1'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'expressions_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("expressions");
   //Edge symbol end:'expressions'

   //=========================================================
   
   //Edge symbol: 'ab_c'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ab_c");
   //Edge symbol end:'ab_c'

})(jQuery, AdobeEdge, "EDGE-1010687340");