/* ---------BD ---------*/
var msj = {
    juego:{
        t1: "Piedra a aplasta a Tijera. ",
        t2: "El papel cubre a la piedra. ",
        t3: "La piedra aplasta al lagarto. ",
        t4: "Spock vaporiza la piedra. ",
        t5: "El lagarto se come el papel. ",
        t6: "Las tijeras cortan el papel. ",
        t7: "El papel desautoriza a Spock. ",
        t8: "Las tijeras decapitan al lagarto. ",
        t9: "Spock rompe a las Tijeras. ",
        t10:"El lagarto envenena a Spock. "
    },
    optio: [
        'piedra',
        'Piedra',
        'papel',
        'Papel',
        'tijeras',
        'Tijeras',
        'lagarto',
        'Lagarto',
        'Spock'
    ],
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
/* ---------Fin BD ---------*/


/* ---------Codigo ---------*/
window.addEventListener('load', function() {
    
    var results = document.getElementById('result');
    var searchBtn = document.getElementById('gameBtn');   
    var imputField = document.getElementById('optionYou');   
    
    
    imputField.addEventListener('keypress', function (e) { //Detecta cuando presionan ENTER (13) 
      var key = e.which || e.keyCode;
        if (key == 13) { codigo(); clear_textbox ();}
    });   
    searchBtn.addEventListener('click', function() { //Detecta cuando presionan Click en el Boton
       codigo();
       clear_textbox ();
    });
    function clear_textbox(){ // Borra el texto del imput
        if ( imputField.value != "")
        imputField.value = "";
     }
    

    function codigo() {
        
            var selecciona = document.getElementById('optionYou');
            var usuarioEscoge = selecciona.value.toLowerCase();

            /* ---------El Pc Elije ---------*/
            var computadorEscoge = Math.random();
        	if (computadorEscoge <=0.2){computadorEscoge = "piedra";}
            else if(computadorEscoge > 0.21 && computadorEscoge <= 0.4){computadorEscoge = "papel";}
            else if(computadorEscoge > 0.41 && computadorEscoge <= 0.6){computadorEscoge = "tijeras";}
            else if(computadorEscoge > 0.61 && computadorEscoge <= 0.8){computadorEscoge = "lagarto";}
            else{ computadorEscoge = "spock";}
            /* ---------FIN El Pc Elije ---------*/

            function result() {

                function borrar() {
                    // Funcion  que vacia el Div <div id="msjPC"></div> <div id="result"></div>
                    var thinkPcHTML = '';
                    var resultsHTML = '';
                    msjPC.innerHTML = thinkPcHTML;
                    results.innerHTML = resultsHTML;
                }
                // Vacia las variables para volver a Agregar mas cosas y para que lo puedan 
                var thinkPcHTML = ''; 
                var resultsHTML = '';

                // Esta Linea Escoje las Posibles opciones del usuario (Creo que se puede simplificar) pero no se como
                if ( usuarioEscoge === "piedra" || usuarioEscoge === "papel" || usuarioEscoge === "tijeras" || usuarioEscoge === "lagarto" || usuarioEscoge === "spock" ) {
                    borrar();
                    resultsHTML += '<p> Tú escojes: <b style="Color:green"\
                                    ;>' + usuarioEscoge + '</b> y yo escojo:\
                                    <b style="Color:red";>' + computadorEscoge + ' \
                                    </b><br/>' + (comparar(usuarioEscoge,computadorEscoge)) + '</p>';
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
            };
            var comparar = function(eleccion1,eleccion2){
                if(eleccion1 === eleccion2){
                    var randomEmp = msj.msjEmp[Math.floor(Math.random() * msj.msjEmp.length)];
                    return("¡Es un empate! " + randomEmp);
                    }
                else{
                    var randomLost = msj.msjLost[Math.floor(Math.random() * msj.msjLost.length)];
                    var randomWin = msj.msjWin[Math.floor(Math.random() * msj.msjWin.length)];
                    var randomGifWin = msj.gifWin[Math.floor(Math.random() * msj.gifWin.length)];
                    var comboWin = '<b class="msjWin";>'+randomWin+' </b>'+'<br/><img src="'+randomGifWin+'" alt="Smiley face" width="250">';
                    if (eleccion1 === "piedra" || eleccion1 === "Piedra"){
                        if (eleccion2 === "tijeras"){return (msj.juego.t1+'<b class="msjLost";>'+randomLost+' </b>');}
                        else if (eleccion2 === "papel"){return (msj.juego.t2+comboWin);}
                        else if (eleccion2 === "lagarto"){return (msj.juego.t3+'<b class="msjLost";>'+randomLost+' </b>');}
                        else{return (msj.juego.t4+comboWin);}
                    }
                    else if (eleccion1 === "papel" || eleccion1 === "Papel"){
                        if (eleccion2 === "lagarto"){return (msj.juego.t5+comboWin);}
                        else if (eleccion2 === "piedra"){return (msj.juego.t2+'<b class="msjLost";>'+randomLost+' </b>');}
                        else if (eleccion2 === "tijeras"){return (msj.juego.t6+comboWin);}
                        else{return (msj.juego.t7+'<b class="msjLost";>'+randomLost+' </b>');}
                    }
                    else if (eleccion1 === "tijeras" || eleccion1 === "Tijeras"){
                        if (eleccion2 === "papel"){return (msj.juego.t6+'<b class="msjLost";>'+randomLost+' </b>');}
                        else if (eleccion2 === "lagarto"){return (msj.juego.t8+'<b class="msjLost";>'+randomLost+' </b>');}
                        else if (eleccion2 === "piedra"){return (msj.juego.t1+comboWin);}
                        else{return (msj.juego.t9+comboWin);}
                    }
                    else if (eleccion1 === "lagarto" || eleccion1 === "Lagarto"){
                        if (eleccion2 === "piedra"){return (msj.juego.t3+comboWin);}
                        else if (eleccion2 === "tijeras"){return (msj.juego.t8+comboWin);}
                        else if (eleccion2 === "papel"){return (msj.juego.t5+'<b class="msjLost";>'+randomLost+' </b>');}
                        else{return (msj.juego.t10+'<b class="msjLost";>'+randomLost+' </b>');}
                    }
                    else if (eleccion1 === "spock"){
                        if (eleccion2 === "piedra"){return (msj.juego.t4+'<b class="msjLost";>'+randomLost+' </b>');}
                        else if (eleccion2 === "tijeras"){return (msj.juego.t9+'<b class="msjLost";>'+randomLost+' </b>');}
                        else if (eleccion2 === "papel"){return (msj.juego.t7+comboWin);}
                        else{return (msj.juego.t10+comboWin);}
                    }
                }
            }

            result();
        }
});