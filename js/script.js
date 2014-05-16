/* Version 0.1
 * Reducido el Codigo que comprobaba el ganador
 * eliminando la cantidad de IF anidados que
 * estaban en la Version ahora llamada OLD
 * La idea de esta parte del codigo fue sacada de
 * http://www.codecademy.com/forum_questions/507d9f002d83cd0200003c01
 * por http://www.codecademy.com/users/mmshaffer
 */

var msj = {
    opciones: ["piedra","papel","tijeras","lagarto","spock"], 
    juego: {
                "tijeraspapel" : "cortan el", // tijejas cortan el papel
                "papelpiedra" : "cubre a la", // papel cubre a la piedra
                "piedralagarto" : "aplasta al", // piedra aplasta al lagarto
                "lagartospock" : "envenena a", // lagarto envenena a Spock
                "spocktijeras" : "rompe a las", //Spock rompe a las tijeras
                "tijeraslagarto" : "decapitan al",// tijeras decapitan al lagarto
                "lagartopapel" : "se come el",// lagarto se come el papel
                "papelspock" : "desautoriza a", // papel desautoriza a spock
                "spockpiedra" : "vaporiza a la", // Spock vaporiza a la piedra
                "piedratijeras" : "aplasta a" // piedra aplasta a tijeras
            },
    msjLost: [
        '¡Mierda! A la próxima, ya verás...',
        '¡¡Seguro que esa fue de pura Suerte!!',
        '¡Ouch! ¡¡Ya verás!!',
        'Ésta la pagarás con sangre'],
    msjWin: [
        'Ja Ja!!! Pringaaaaao',
        'Oh, ¡Cuánto lo siento! :)',
        'MUHAHAHAHA No puedes contra mí, pequeño',
        'La verdad no entiendo el porqué, pero así son las reglas nene! He ganao'],
    gifWin:[
         'http://statics.vayagif.com/imgentries/cc1/cc1e7fd66a73afca9b536f4333da68a6194364.gif',
         'http://statics.vayagif.com/gifs/2014/05/GIF_194129_desde_la_pelicula_kung_fu_panda_estan_de_un_chulo_que_no_hay_quien_los_aguante.gif',
         'http://img836.imageshack.us/img836/5192/bzg6.gif',
         'http://img836.imageshack.us/img836/7339/dhy.gif',
         'http://img841.imageshack.us/img841/5633/pmh.gif',
         'http://img843.imageshack.us/img843/7030/e81h.gif',
         'http://img843.imageshack.us/img843/5902/j9vg.gif',
         'http://statics.vayagif.com/gifs/2011/12/GIF_71900_cuando_vendes_tu_play2.gif', //tio llorando posible Lost
         'http://statics.vayagif.com/gifs/2012/10/GIF_135707_cuando_se_te_duermen_ambas_piernas.gif'
      ],
    msjEmp: [
    '¿En serio?, ¿Piensas igual que yo? ',
    'Jo### ¿Pero qué haces? No veas lo que pienso',
    'Como sigas así, es que...'
    ],
    msjThk: {
        t1: '¬¬ son dos, osea en plural no en singular (', t2: ') !! Ya te lo cambio yo, no sé que se cree ésta gente.',
        t3: ' ¡¡NO!! Burro!! Se escribe con J... J de Jodío. </p> <img src="http://www.titeladefrango.com/wp-content/uploads/2013/05/genius-meme.png" alt="Smiley face" width="250"> ',
        t4: '', t5: '',
        t6: '<p>El valor que me das en incorrecto (<b style="Color:red";font-weight:bold;>', t7:'</b>) no se de dónde te sacas esas cosas </p>',
        t8: '<p>¿Me estas vacilando?</p>'
    }
}


window.addEventListener('load', function() {   
    var results = document.getElementById('result');
    var searchBtn = document.getElementById('gameBtn');   
    var imputField = document.getElementById('optionYou'); 
        
    //Detecta cuando presionan ENTER (13) 
    imputField.addEventListener('keypress', function (e) { 
      var key = e.which || e.keyCode;
        if (key == 13) { codigo(); clear_textbox (); }
    });
    //Detecta cuando presionan Click en el Boton
    searchBtn.addEventListener('click', function() { 
       codigo();
       clear_textbox ();
       
    });
    // Borra el texto del imput
    function clear_textbox(){ 
        if ( imputField.value != "")
        imputField.value = "";
     };
    
    function codigo() {        
            var selecciona = document.getElementById('optionYou');
            var usuarioEscoge = selecciona.value.toLowerCase();
            function result() {
            // Declara las variables de escritura en el HTML 
               var thinkPcHTML = ''; 
               var resultsHTML = ''; 
                
               function borrar() {// Funcion  que vacia el Div <div id="msjPC"></div> <div id="result"></div>
                    var thinkPcHTML = '';
                    var resultsHTML = '';
                    msjPC.innerHTML = thinkPcHTML;
                    results.innerHTML = resultsHTML;
                }
               var pc = msj.opciones[Math.floor(Math.random()*msj.opciones.length)]; // elección del PC
               var comparar = function(pj,pc){ 
                   // Primero crea los randoms de mensajes que dara el PC
                    var randomLost = msj.msjLost[Math.floor(Math.random() * msj.msjLost.length)];
                    var randomWin = msj.msjWin[Math.floor(Math.random() * msj.msjWin.length)];
                    var randomGifWin = msj.gifWin[Math.floor(Math.random() * msj.gifWin.length)];
                    var randomEmp = msj.msjEmp[Math.floor(Math.random() * msj.msjEmp.length)];
                    var comboWin = '<b class="msjWin";> '+randomWin+' </b><br/><img src="'+randomGifWin+'" alt="Smiley face" width="250">';
                   // Compara si hay un empate
                    if (pj === pc){
                        return "Es un empate " + randomEmp ;
                    }
                   //concatena las dosopciones agregadas y si no existen o no esta definida en msj.juego va al ELSE
                    if (msj.juego[pj+""+pc] !== undefined){
                        var lost ='<b style="Color:green";>' + pj + '</b> ' + msj.juego[pj+""+pc] + ' <b style="Color:red";>' + pc + '</b> ' + comboWin;  
                        return lost;
                    } 
                   // Si no existe el orden anteríor entonces es este y lo imprime
                    else { 
                        var win = '<b style="Color:green";>' + pc + '</b> ' + msj.juego[pc+""+pj] + ' <b style="Color:red";>' + pj + '</b> ME HAS GANADO!<b class="msjLost";> ' + randomLost + ' </b>';
                        return win;}
                } 
               function solucina() { // Si el String ingresado esta entre los valores correctos saca la solicion y si no 
                   if ( usuarioEscoge === "piedra" || usuarioEscoge === "papel" || usuarioEscoge === "tijeras" || usuarioEscoge === "lagarto" || usuarioEscoge === "spock" ) {
                        borrar();
                        resultsHTML += '<p> Tú escojes: <b style="Color:green";>' + usuarioEscoge + '</b> y yo escojo:\
                                        <b style="Color:red";>' + pc + '</b><br/>'+comparar(pc,usuarioEscoge)+'</p>';
                        results.innerHTML = resultsHTML;
                    }
                   else {
                        if (usuarioEscoge === "tijera"){
                                    borrar();
                                    thinkPcHTML += '<p>' + msj.msjThk.t1 + usuarioEscoge + msj.msjThk.t2 + '</p>';
                                    msjPC.innerHTML = thinkPcHTML;
                                    return  result(usuarioEscoge="tijeras");
                            }
                        else if (usuarioEscoge === "tigera" || usuarioEscoge === "tigeras" ){
                            borrar();
                            thinkPcHTML += '<p>' + usuarioEscoge + msj.msjThk.t3;
                            return (msjPC.innerHTML = thinkPcHTML);
                        }
                        else if (usuarioEscoge === ""){

                            borrar();
                            thinkPcHTML += msj.msjThk.t8;
                            return (msjPC.innerHTML = thinkPcHTML);
                        }
                        else {
                            borrar();
                            thinkPcHTML += msj.msjThk.t6 + usuarioEscoge + msj.msjThk.t7;
                            return (msjPC.innerHTML = thinkPcHTML);
                        }
                    }
               }
               solucina();
            };        
            result();
    }
});

