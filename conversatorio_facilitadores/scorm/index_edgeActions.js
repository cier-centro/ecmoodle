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
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         sym.$("miga").hide();
         //$("#Stage_slide_1").append( "<iframe src='1/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         //$(sym.lookupSelector("textCount")).html("1 - 10");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$("#Stage_slide_1").append( "<iframe src='composiciones/B02_01/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         slideCount = 2;
         sym.getSymbol("logo_bar").play();
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove(); 
         $(sym.lookupSelector("textCount")).html("1 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_2" ).append( "<iframe src='composiciones/ecf_e2_2/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         sym.$("miga").show();
         sym.getSymbol("miga").play(1);
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
        sym.stop();
        slideCount = 3;
        $("#Stage_slide_"+(slideCount-1)).children().remove();
        //$("#Stage_slide_"+(slideCount+1)).children().remove();
        $(sym.lookupSelector("textCount")).html("2 - 12"); 
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
        $( "#Stage_slide_3" ).append( "<iframe src='composiciones/ecf_e2_3/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        //$(sym.lookupSelector("momento")).html("Desarrollo");
        //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
        //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
        sym.stop();
        slideCount = 4;
        sym.getSymbol("miga").stop(750);
         $(sym.lookupSelector("textCount")).html("3 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga 
        $( "#Stage_slide_4" ).append( "<iframe src='composiciones/ecf_e2_4/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" )
        
        //textos
        //$(sym.lookupSelector("momento")).html("Desarrollo");
        //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
        //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         slideCount = 5;
         $("#Stage_slide_"+(slideCount+1)).children().remove(); 
         sym.getSymbol("miga").stop(1217);
         $(sym.lookupSelector("textCount")).html("4 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_5" ).append( "<iframe src='composiciones/ecf_e2_5/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
      sym.stop();
      slideCount = 6;
      $("#Stage_slide_"+(slideCount-1)).children().remove();
      $("#Stage_slide_"+(slideCount+1)).children().remove(); 
      $(sym.lookupSelector("textCount")).html("5 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
      $( "#Stage_slide_6" ).append( "<iframe src='composiciones/ecf_e2_6/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
      
      //textos
      //$(sym.lookupSelector("momento")).html("Desarrollo");
      //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
      //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
      //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         slideCount = 7;
         $("#Stage_slide_"+(slideCount-1)).children().remove(); 
         $(sym.lookupSelector("textCount")).html("6 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_7" ).append( "<iframe src='composiciones/ecf_e2_7/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         slideCount = 8;
         $(sym.lookupSelector("textCount")).html("7 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_8" ).append( "<iframe src='composiciones/ecf_e2_8/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         slideCount = 9;
         $("#Stage_slide_"+(slideCount+1)).children().remove(); 
         $(sym.lookupSelector("textCount")).html("8 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_9" ).append( "<iframe src='composiciones/ecf_e2_9/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         slideCount = 10;
         $("#Stage_slide_"+(slideCount+1)).children().remove(); 
         $(sym.lookupSelector("textCount")).html("9 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_10" ).append( "<iframe src='composiciones/ecf_e2_10/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();
         slideCount = 11;
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove(); 
         $(sym.lookupSelector("textCount")).html("10 - 12");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         $( "#Stage_slide_11" ).append( "<iframe src='composiciones/ecf_e2_11/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();
         slideCount = 12;
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $(sym.lookupSelector("textCount")).html("11 - 13");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         $( "#Stage_slide_12" ).append( "<iframe src='composiciones/ecf_e2_12/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.stop();
         slideCount = 13;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("13 - 34");
          $( "#Stage_slide_13" ).append( "<iframe src='composiciones/ecf_e2_13/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();
         slideCount = 14;
         $(sym.lookupSelector("textCount")).html("14 - 34");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_14" ).append( "<iframe src='composiciones/ecf_e2_14/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();
         slideCount = 15;
         $(sym.lookupSelector("textCount")).html("15 - 34");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_15" ).append( "<iframe src='composiciones/ecf_e2_15/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
         slideCount = 16;
         $(sym.lookupSelector("textCount")).html("16 - 34");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_16" ).append( "<iframe src='composiciones/ecf_e2_16/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         slideCount = 17;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("17 - 34");
          $( "#Stage_slide_17" ).append( "<iframe src='composiciones/ecf_e2_17/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();
         slideCount = 18;
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("18 - 34");
          $( "#Stage_slide_18" ).append( "<iframe src='composiciones/ecf_e2_18/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
         slideCount = 19;
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("19 - 34");
          $( "#Stage_slide_19" ).append( "<iframe src='composiciones/ecf_e2_19/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();
         slideCount = 20;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("20 - 34");
          $( "#Stage_slide_20" ).append( "<iframe src='composiciones/ecf_e2_20/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
         slideCount = 21;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("21 - 34");
          $( "#Stage_slide_21" ).append( "<iframe src='composiciones/ecf_e2_21/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();
         slideCount = 22;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("22 - 34");
          $( "#Stage_slide_22" ).append( "<iframe src='composiciones/ecf_e2_22/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.stop();
         slideCount = 23;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("23 - 34");
          $( "#Stage_slide_23" ).append( "<iframe src='composiciones/ecf_e2_23/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();
         slideCount = 24;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("24 - 34");
          $( "#Stage_slide_24" ).append( "<iframe src='composiciones/ecf_e2_24/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();
         slideCount = 25;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("25 - 34");
          $( "#Stage_slide_25" ).append( "<iframe src='composiciones/ecf_e2_25/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
	  
	    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop();
         slideCount = 26;
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("26 - 34");
          $( "#Stage_slide_26" ).append( "<iframe src='composiciones/ecf_e2_26/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.stop();
         slideCount = 27;
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("27 - 34");
          $( "#Stage_slide_27" ).append( "<iframe src='composiciones/ecf_e2_27/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.stop();
         slideCount = 28;
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("28 - 34");
          $( "#Stage_slide_28" ).append( "<iframe src='composiciones/ecf_e2_28/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_29" ).append( "<iframe src='composiciones/03_29/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );


      });
      //Edge binding end
	  
	   //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.stop();
         slideCount = 29;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("29 - 34");
          $( "#Stage_slide_29" ).append( "<iframe src='composiciones/ecf_e2_29/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

       

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
            sym.$('.center-wrapper').css("overflow","hidden");
            slideCount = 1;
            //cambiar según el número de slides
            var numOfSlides = 33;
            
            if (slideCount <= 1){ 
            sym.setVariable("slideCount", 1);
            sym.$('bt_back').hide();
            }
            sym.getSymbol("slide_"+slideCount).play(0);
            //sym.getComposition().getStage().stop("slide_"+slideCount);
            
            sym.showSlide = function (slideDirection){
            	$("video").trigger("pause");
            	$("audio").trigger("pause");
            	slideCount = slideCount + slideDirection;
               sym.getComposition().getStage().stop("slide_"+slideCount);
               sym.getSymbol("slide_"+slideCount).play(0);
            	//Beyond 22, change to 1
            	if (slideCount < numOfSlides){ 
            		sym.$('bt_next').show();
            	}
            	if (slideCount == numOfSlides){
            		slideCount = numOfSlides;
            		sym.$('bt_next').hide();
            	} 
            	if (slideCount <= 1){ 
            		sym.setVariable("slideCount", 1);
            		sym.$('bt_back').hide();
            	}else{
            		sym.$('bt_back').show();
            	}
            	//	Silenciar el audio de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	$("iframe").contents().find("audio").prop("muted", true);
            	$("iframe").contents().find("audio").prop("currentTime",0);
            	//	Silenciar el video de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	//$("iframe").contents().find( "video" ).prop("muted", true);
            }
            //se definen las variables de los simbolos
            var btNext = sym.getSymbol("bt_next").$("hotspot_area_next");
            var btBack = sym.getSymbol("bt_back").$("hotspot_area_back");
            btBack.bind("click", function() {
            // Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            // Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            if (slideCount > 1){ 
            	sym.getComposition().getStage().showSlide(-1);
            }
            });
            btBack.bind("mouseup", function() {
            sym.getSymbol("bt_back").stop("up");
            });
            btBack.bind("mouseout", function() {
            sym.getSymbol("bt_back").stop("normal");
            });
            
            btBack.bind("mousedown", function() {
            sym.getSymbol("bt_back").stop("down");
            });
            
            btBack.bind("mouseover", function() {
            sym.getSymbol("bt_back").stop("over");
            });
            
            btNext.bind("click", function() {
            	// Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            	// Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            	sym.getComposition().getStage().showSlide(1);
            });
            btNext.bind("mouseup", function() {
            sym.getSymbol("bt_next").stop("up");
            });
            btNext.bind("mouseout", function() {
            sym.getSymbol("bt_next").stop("normal");
            });
            
            btNext.bind("mousedown", function() {
            sym.getSymbol("bt_next").stop("down");
            });
            
            btNext.bind("mouseover", function() {
            sym.getSymbol("bt_next").stop("over");
            });
            

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.stop();
         slideCount = 30;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("30 - 34");
          $( "#Stage_slide_30" ).append( "<iframe src='composiciones/ecf_e2_30/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_go6}", "click", function(sym, e) {
         sym.stop("slide_6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_go11}", "click", function(sym, e) {
         sym.stop("slide_11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bt_inicio}", "click", function(sym, e) {
         sym.stop("slide_5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bt_inicio}", "mouseover", function(sym, e) {
         sym.getSymbol("bt_inicio").stop("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bt_inicio}", "mouseout", function(sym, e) {
         sym.getSymbol("bt_inicio").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_go18}", "click", function(sym, e) {
         sym.stop("slide_18");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_go26}", "click", function(sym, e) {
         sym.stop("slide_26");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.stop();
         slideCount = 31;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("31 - 34");
          $( "#Stage_slide_31" ).append( "<iframe src='composiciones/ecf_e2_31/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         sym.stop();
         slideCount = 32;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("32 - 34");
          $( "#Stage_slide_32" ).append( "<iframe src='composiciones/ecf_e2_32/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         sym.stop();
         slideCount = 33;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("33 - 34");
          $( "#Stage_slide_33" ).append( "<iframe src='composiciones/ecf_e2_33/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         sym.stop();
         slideCount = 34;
         //$("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("34 - 34");
          $( "#Stage_slide_34" ).append( "<iframe src='composiciones/ecf_e2_34/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_e2}", "click", function(sym, e) {
         sym.stop("slide_5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_inicio}", "click", function(sym, e) {
         sym.stop("slide_2");
         

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
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().stop("slide_3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

   })("slide_2");
   //Edge symbol end:'slide_2'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();

      });
      //Edge binding end

   })("slide_4");
   //Edge symbol end:'slide_4'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();

      });
      //Edge binding end

   })("slide_3");
   //Edge symbol end:'slide_3'

   //=========================================================
   
   //Edge symbol: 'slide_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("slide_5");
   //Edge symbol end:'slide_5'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ingresar}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("slide_2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ingresar}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_ingresar").play("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ingresar}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_ingresar").play("up");
         

      });
      //Edge binding end

      

      

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'Hot_Spot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Hot_Spot");
   //Edge symbol end:'Hot_Spot'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_6");
   //Edge symbol end:'slide_6'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_7");
   //Edge symbol end:'slide_7'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_8");
   //Edge symbol end:'slide_8'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_9");
   //Edge symbol end:'slide_9'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_10");
   //Edge symbol end:'slide_10'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_11");
   //Edge symbol end:'slide_11'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_12");
   //Edge symbol end:'slide_12'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_13");
   //Edge symbol end:'slide_13'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_14");
   //Edge symbol end:'slide_14'

   //=========================================================
   
   //Edge symbol: 'slide_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_15");
   //Edge symbol end:'slide_15'

   //=========================================================
   
   //Edge symbol: 'slide_16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_16");
   //Edge symbol end:'slide_16'

   //=========================================================
   
   //Edge symbol: 'slide_17'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_17");
   //Edge symbol end:'slide_17'

   //=========================================================
   
   //Edge symbol: 'slide_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_18");
   //Edge symbol end:'slide_18'

   //=========================================================
   
   //Edge symbol: 'slide_19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_19");
   //Edge symbol end:'slide_19'

   //=========================================================
   
   //Edge symbol: 'slide_20'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_20");
   //Edge symbol end:'slide_20'

   //=========================================================
   
   //Edge symbol: 'slide_21'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_21");
   //Edge symbol end:'slide_21'

   //=========================================================
   
   //Edge symbol: 'slide_22'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_22");
   //Edge symbol end:'slide_22'

   //=========================================================
   
   //Edge symbol: 'slide_23'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_23");
   //Edge symbol end:'slide_23'

   //=========================================================
   
   //Edge symbol: 'slide_24'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_24");
   //Edge symbol end:'slide_24'

   //=========================================================
   
   //Edge symbol: 'slide_25'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_25");
   //Edge symbol end:'slide_25'

   //=========================================================
   
   //Edge symbol: 'slide_26'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_26");
   //Edge symbol end:'slide_26'

   //=========================================================
   
   //Edge symbol: 'slide_27'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_27");
   //Edge symbol end:'slide_27'

   //=========================================================
   
   //Edge symbol: 'slide_28'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_28");
   //Edge symbol end:'slide_28'

   //=========================================================
   
   //Edge symbol: 'slide_29'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_29");
   //Edge symbol end:'slide_29'

   //=========================================================
   
   //Edge symbol: 'slide_30'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_30");
   //Edge symbol end:'slide_30'

   //=========================================================
   
   //Edge symbol: 'bt_next'
   (function(symbolName) {   
   
      

   })("bt_next");
   //Edge symbol end:'bt_next'

   //=========================================================
   
   //Edge symbol: 'bt_back'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("bt_back");
   //Edge symbol end:'bt_back'

   //=========================================================
   
   //Edge symbol: 'slide_40'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("slide_40");
   //Edge symbol end:'slide_40'

   //=========================================================
   
   //Edge symbol: 'btn_ingresar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_ingresar");
   //Edge symbol end:'btn_ingresar'

   //=========================================================
   
   //Edge symbol: 'miga'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("miga");
   //Edge symbol end:'miga'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
   })("logo");
   //Edge symbol end:'logo'

   //=========================================================
   
   //Edge symbol: 'bt_next_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
         //Edge binding end

      })("bt_inicio");
   //Edge symbol end:'bt_inicio'

   //=========================================================
   
   //Edge symbol: 'logo_bar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("logo_bar");
   //Edge symbol end:'logo_bar'

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
   
   //Edge symbol: 'character_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("character_1");
   //Edge symbol end:'character_1'

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
   
   //Edge symbol: 'trunk_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("trunk_1");
   //Edge symbol end:'trunk_1'

   //=========================================================
   
   //Edge symbol: 'expressions'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("expressions");
   //Edge symbol end:'expressions'

   //=========================================================
   
   //Edge symbol: 'trunk_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("trunk_2");
   //Edge symbol end:'trunk_2'

   //=========================================================
   
   //Edge symbol: 'head_1'
   (function(symbolName) {   
   
   })("head_1");
   //Edge symbol end:'head_1'

   //=========================================================
   
   //Edge symbol: 'slide_31'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_31");
   //Edge symbol end:'slide_31'

   //=========================================================
   
   //Edge symbol: 'slide_32'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_32");
   //Edge symbol end:'slide_32'

   //=========================================================
   
   //Edge symbol: 'slide_33'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_33");
   //Edge symbol end:'slide_33'

   //=========================================================
   
   //Edge symbol: 'slide_34'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_34");
   //Edge symbol end:'slide_34'

})(jQuery, AdobeEdge, "EDGE-5531445");