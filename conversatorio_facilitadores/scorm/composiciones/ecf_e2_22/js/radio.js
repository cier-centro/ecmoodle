//
var comp;
AdobeEdge.bootstrapCallback(function(compId) {
comp = AdobeEdge.getComposition(compId).getStage();
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
         /*
		 //CAMBIAR SEGÚN EL NÚMERO CONDICIONES 
         TotalRadioButton = 12;
         //DEJAR IGUAL O CAMBIAR POR EL TOTAL DE ELEMENTOS
         CrearRadioButton = 12;
         //RESPUESTAS CAMBIAR POR 1 PARA LA PRIMERA OPCIÓN Y 2 PARA LA SEGUNDA
         sym.setVariable("Respuesta_1", 2);
         sym.setVariable("Respuesta_2", 2);
         sym.setVariable("Respuesta_3", 2);
         sym.setVariable("Respuesta_4", 1);
         sym.setVariable("Respuesta_5", 2);
         sym.setVariable("Respuesta_6", 2);
         */
         sym.$('.center-wrapper').css("overflow","hidden");
 
         //botones
         sym.getSymbol("bt_validar").stop("normal");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("down");
         sym.getSymbol("bt_ayuda").stop("normal");
         sym.$("hotspot_validar").show();
         sym.$("hotspot_solucion").hide();
         sym.$("hotspot_reiniciar").hide();
         sym.$("hotspot_ayuda").show();
         
         // Ocultar un elemento 
         sym.$("resp_incorrecta").hide();
         sym.$("resp_correcta").hide();
         sym.$("help_input").hide();
         sym.$("help_input").hide();
         
         
         
         for (i=1 ; i<= TotalRadioButton; i++){
         	var nombreElemento = 'Elemento_'+i;
         	nombreElemento = document.createElement("input");
         	nombreElemento.id="radioA_"+i;	 
         	nombreElemento.type="radio";
         	nombreElemento.name="radio_"+i;
         	nombreElemento.value=i;
         	sym.$("InputA_"+i).append(nombreElemento);
         }
         for (i=1 ; i<= TotalRadioButton; i++){
         
         	var nombreElemento = 'Elemento_'+i;
         	nombreElemento = document.createElement("input");
         	nombreElemento.id="radioB_"+i;	 
         	nombreElemento.type="radio";
         	nombreElemento.name="radio_"+i;
         	nombreElemento.value=i;
         	sym.$("InputB_"+i).append(nombreElemento);
         }
         $('input:radio').hide();
         
         sym.$('[id^="Stage_InputA_"]').addClass('radio-on');
         sym.$('[id^="Stage_InputB_"]').addClass('radio-on');
         
         sym.$('[id^="Stage_InputA_"]').on("mousedown", function() {
         	var idRadio=$(this).children().attr("id");
         	var idContA=$(this).attr("id");
         	var idContB="Stage_InputB_"+idContA.substring(13,15);
         	//console.log(idContB);
         	if($("#"+idRadio).is(':checked')) {  
                     //console.log("Está activado");
                 } else {  
                     //console.log("No está activado");
                     $("#"+idContB).removeClass("radio-off");
                     $("#"+idContB).addClass("radio-on");
         
                     $("#"+idContA).removeClass("radio-on");
                     $("#"+idContA).addClass("radio-off");
                     //console.log("de quien es este ID "+idContB);
         
                     $("#"+idRadio).prop('checked', true);
                 }
         });
         sym.$('[id^="Stage_InputB_"]').on("mousedown", function() {
         	var idRadio=$(this).children().attr("id");
         	var idContB=$(this).attr("id");
         	var idContA="Stage_InputA_"+idContB.substring(13,15);
         	//console.log(idContA);
         	if($("#"+idRadio).is(':checked')) {  
                     //console.log("Está activado");
                 } else {  
                     //console.log("No está activado");
                     $("#"+idContA).removeClass("radio-off");
                     $("#"+idContA).addClass("radio-on");
                     $("#"+idContB).removeClass("radio-on");
                     $("#"+idContB).addClass("radio-off");
         
                     $("#"+idRadio).prop('checked', true);
                 }
         });
         
         
         
         
         
         //BOTÓN VALIDAR
         sym.$('hotspot_validar').click(function(){
         sym.getSymbol("bt_validar").stop("down");
         sym.getSymbol("bt_solucion").stop("normal");
         sym.getSymbol("bt_reiniciar").stop("normal");
         sym.$("hotspot_validar").hide();
         sym.$("hotspot_reiniciar").show();
         sym.$("hotspot_solucion").show();
         //window.location.reload();
         sym.$("resp_correcta").hide();
         sym.$("resp_incorrecta").hide();
         
 		 $('div[class *= Input]').css("pointer-events","none");
         
         sym.setVariable("errores", 0);
         sym.setVariable("Total", 0);
         var Total=0;
         var errores=0;
         var correct=0;
         
         
         var condCreated = CrearRadioButton/2; 
        //validador de radio
        for (i=1; i<=condCreated; i++ ){
			var y = (parseInt(sym.$("InputA_"+i).css("top")) + 7)+"px";
			var x = (parseInt(sym.$("InputA_"+i).css("left")) - 25)+"px";
			var yb = (parseInt(sym.$("InputB_"+i).css("top")) + 7)+"px";
			var xb = (parseInt(sym.$("InputB_"+i).css("left")) - 25)+"px";
			
			sym.$("InputA_"+i).children("input").each(function(){
			ValorTemp = sym.getVariable("Respuesta_"+i);
			if($(this).is(":checked")){
			if(ValorTemp==1){
			//console.log("esta chequeado "+($(this).attr("id"))+" y el valor temporal es "+ValorTemp+" correcto");;
			sym.$("ok"+i).css({top: y, left: x});
			sym.$("ok"+i).show();
			}else{
			//console.log("esta chequeado "+($(this).attr("id"))+" y el valor temporal es "+ValorTemp+" incorrecto");
			errores=errores+1
			sym.$("bad"+i).css({top: y, left: x});
			sym.$("bad"+i).show();
			}
			}else{
			var radioBCheck= $("#radioB_"+i).is(":checked");
			if (radioBCheck){
			if(ValorTemp==2){
			sym.$("ok"+i).css({top: yb, left: xb});
			sym.$("ok"+i).show();
			}else{
			sym.$("bad"+i).css({top: yb, left: xb});
			sym.$("bad"+i).show();
			errores=errores+1
			}
			}else{
			errores=errores+1
			sym.$("bad"+i).css({top: y, left: x});
			sym.$("bad"+i).show();
			}
			}
			//$(this).attr('disabled','disabled');
			});
			}
			if (errores>=1){
			sym.$("resp_incorrecta").show();
			//setTimeout('$("#Stage_resp_incorrecta").fadeOut("slow");', 2500);
			sym.$("error")[0].play();
			sym.$("error")[0].muted = false;
			}else{
			sym.$("resp_correcta").show();	
			sym.$("success")[0].play();
			sym.$("success")[0].muted = false;
			//setTimeout('$("#Stage_resp_correcta").fadeOut("slow");', 2500);
			}
         
         });
         //BOTÓN SOLUCIÓN
         sym.$('hotspot_solucion').click(function(){
         sym.getSymbol("bt_validar").stop("down");
         sym.getSymbol("bt_solucion").stop("normal");
         sym.getSymbol("bt_reiniciar").stop("normal");
         sym.$("hotspot_validar").hide();
         sym.$("hotspot_reiniciar").show();
         sym.$("hotspot_solucion").show();
         //window.location.reload();
         sym.$("resp_correcta").hide();
         sym.$("resp_incorrecta").hide();
		 
 		 $('div[class *= Input]').css("pointer-events","none");
         
         //Oculta las leyendas
         var condCreated = CrearRadioButton/2; 
         //console.log(condCreated);
         for (var i=1; i<=condCreated; i++) {
         	sym.$('ok'+i).hide();
         	sym.$('bad'+i).hide();
         }
         
         var condCreated = CrearRadioButton/2; 
         for (i=1; i<=condCreated; i++ ){
         	sym.$("InputA_"+i).children("input").each(function(){
         	ValorTemp = sym.getVariable("Respuesta_"+i);
         	console.log(ValorTemp);
         	if(ValorTemp==1){
         		//console.log("este esta en uno "+$(this));
         		$(this).trigger( "click" );
         		sym.$("InputA_"+i).addClass('radio-off');
         		sym.$("InputB_"+i).removeClass('radio-off');
         		sym.$("InputB_"+i).addClass('radio-on');
         	}else if(ValorTemp==2){
         		//console.log("este esta en dos "+$(this));
         		sym.$("InputA_"+i).addClass('radio-on');
         		sym.$("InputA_"+i).removeClass('radio-off');
         		sym.$("InputB_"+i).addClass('radio-off');
         		$("#radioB_"+i).trigger( "click" );
         	}
         	});
         }
         
         
         });
         //BOTÓN REINICIAR
         sym.$('hotspot_reiniciar').click(function(){
         
         sym.getSymbol("bt_validar").stop("normal");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("down");
         sym.$("#Stage_hotspot_validar").show();
         sym.$("#Stage_hotspot_reiniciar").hide();
         sym.$("#Stage_hotspot_solucion").hide();
         //window.location.reload();
         sym.$("resp_correcta").hide();
         sym.$("resp_incorrecta").hide();
		 
  		 $('div[class *= Input]').css("pointer-events","auto");
         
         sym.setVariable("intentos", 0);
         sym.setVariable("totalintentos", 0);
         //Definición de variables
         sym.setVariable("errores", 0);
         sym.setVariable("Total", 0);
         
         //Oculta las leyendas
         var condCreated = CrearRadioButton/2; 
         //console.log(condCreated);
         for (var i=1; i<=condCreated; i++) {
         	sym.$('ok'+i).hide();
         	sym.$('bad'+i).hide();
         }
         
         $('input[type="radio"]').remove();
         //$('input[type="radio"]').remove();
         
         for (i=1 ; i<= TotalRadioButton; i++){
         	var nombreElemento = 'Elemento_'+i;
         	nombreElemento = document.createElement("input");
         	nombreElemento.id="radioA_"+i;	 
         	nombreElemento.type="radio";
         	nombreElemento.name="radio_"+i;
         	nombreElemento.value=i;
         	sym.$("InputA_"+i).append(nombreElemento);
         }
         for (i=1 ; i<= TotalRadioButton; i++){
         
         	var nombreElemento = 'Elemento_'+i;
         	nombreElemento = document.createElement("input");
         	nombreElemento.id="radioB_"+i;	 
         	nombreElemento.type="radio";
         	nombreElemento.name="radio_"+i;
         	nombreElemento.value=i;
         	sym.$("InputB_"+i).append(nombreElemento);
         }
         $('input:radio').hide();
         sym.$('[id^="Stage_InputA_"]').removeClass('radio-off');
         sym.$('[id^="Stage_InputB_"]').removeClass('radio-off');
         
         sym.$('[id^="Stage_InputA_"]').addClass('radio-on');
         sym.$('[id^="Stage_InputB_"]').addClass('radio-on');
         
         
         });
         //BOTÓN AYUDA
         sym.$('hotspot_ayuda').click(function(){
         if (sym.$("help_radio").is(":visible")) {
         	sym.$("help_radio").hide();
         	sym.getSymbol("bt_ayuda").stop("normal");
         } else {
         	sym.$("help_radio").show();
         	sym.getSymbol("bt_ayuda").stop("down");
         }
         
         });
         //OCULTAR MENSAJES
         sym.$("help_radio").click(function(){
         	$(this).hide();
         	sym.getSymbol("bt_ayuda").stop("normal");
         });
            sym.$("resp_incorrecta").click(function(){
         	$(this).hide();
         });
            sym.$("resp_correcta").click(function(){
         	$(this).hide();
         });
          

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
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Mayor1");
   //Edge symbol end:'Mayor1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Menor1");
   //Edge symbol end:'Menor1'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         //TEXTAREA//
         
         sym.$("TextArea_01").append(document.createElement("TextArea"));
         $('input[type=text], textarea').css({
         	width:'1000px',
         	height:'250px',
         	border:'none',
         	background:'#FFFFFF',
         	fontSize:'26px',
         	lineHeight:'40px',
         	textAlign:'left',
         	margin:'20px',
         	fontFamily:'Cabin',
         	fontStyle:'normal',
         	color:'normal',
         	fontStyle:'#666666'
         });
         
         //TERMINA EL TEXT AREA//

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Mayor1_1'
   (function(symbolName) {   
   
      })("Mayor2");
   //Edge symbol end:'Mayor2'

   //=========================================================
   
   //Edge symbol: 'Menor1_1'
   (function(symbolName) {   
   
      })("Menor2");
   //Edge symbol end:'Menor2'

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

})(jQuery, AdobeEdge, "EDGE-1010687340");
});