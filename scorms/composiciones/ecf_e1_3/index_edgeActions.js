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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'etiqueta'
   (function(symbolName) {   
   
   })("etiqueta");
   //Edge symbol end:'etiqueta'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'chest'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("chest");
   //Edge symbol end:'chest'

   //=========================================================
   
   //Edge symbol: 'trunk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
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
   
   //Edge symbol: 'mouth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2626, function(sym, e) {
         sym.play('speak');

      });
      //Edge binding end

   })("mouth");
   //Edge symbol end:'mouth'

   //=========================================================
   
   //Edge symbol: 'character'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("character");
   //Edge symbol end:'character'

   //=========================================================
   
   //Edge symbol: 'eyes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("eyes");
   //Edge symbol end:'eyes'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'bt_audio'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ht_spot}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("character").getSymbol("trunk").getSymbol("head").getSymbol("mouth2").play("speak");
         sym.stop(0);
         
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         
         var soundId = sym.getSymbolElement().attr( "title" );
         var currentAudio=sym.getComposition().getStage().$(soundId)[0].currentTime;
         var duracion= sym.getComposition().getStage().$(soundId).duration;
         console.log("soundId="+soundId);
         if (duracion== currentAudio){
         	sym.stop("up");
         sym.getComposition().getStage().getSymbol("character").getSymbol("trunk").getSymbol("head").getSymbol("mouth2").stop("speak");
         
         }
         
         	sym.getComposition().getStage().$(soundId).on('ended', function() {
         	sym.stop("up");
         sym.getComposition().getStage().getSymbol("character").getSymbol("trunk").getSymbol("head").getSymbol("mouth2").stop("speak");
         
         });
         	console.log("currentAudio="+currentAudio);
         	console.log("duracion="+duracion); 
         
         $("audio").prop("muted", true);
         
         	if (sym.getComposition().getStage().$(soundId)[0].paused) {
         	//elimina el mute del audio
         	sym.getComposition().getStage().$(soundId)[0].muted = false;
         	sym.getComposition().getStage().$(soundId)[0].volume=0.7;
         	sym.getComposition().getStage().$(soundId)[0].play();
         	sym.stop("down");
         
         } else {
         //activar para pausar en vez de reiniciar
         	sym.getComposition().getStage().$(soundId)[0].pause();
         	sym.stop("up");
         sym.getComposition().getStage().getSymbol("character").getSymbol("trunk").getSymbol("head").getSymbol("mouth2").stop("speak");
         	sym.stop(0);
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_audio");
   //Edge symbol end:'bt_audio'

})(jQuery, AdobeEdge, "EDGE-217058342");