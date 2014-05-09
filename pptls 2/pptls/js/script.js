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
    msjLost: [
        '<b class="msjLost";>Mierda a la proxima, ya veras </b>',
        '<b class="msjLost";>Serguro que esa fue de pura Suerte!! </b>',
        '<b class="msjLost";>Ouch!! ya veras!! </b>',
        '<b class="msjLost";>Esta la pagaras con sangre </b>',
        '<b class="msjLost";>...</b>'],
    msjWin: [
        '<b class="msjWin";>Ja Ja!!! Pringao </b>',
        '<b class="msjWin";>Oh Cuanto lo siento :) </b>',
        '<b class="msjWin";>MUHAHAHAHA No puedes contra mí pequeño </b>',
        '<b class="msjWin";>La verdad no entiendo el ¿porque? pero, a si son las reglas nene! He ganao</b>',
        '<b class="msjWin";>...</b>'],
    msjEmp: [
        "¿En serio?, ¿Piensas igual que yo? ",
        "Jo### ¿pero que haces? No veas lo que pienso",
        "Como sigas asi es que..."],
    msjThk: {
        t1: '¬¬ son dos, osea en plural no en singular (', t2: ') !! Ya te lo cambio yo, nose que se cree esta gente.',
        t3: ' ¡¡NO!! Burro!! Se escribe con J de Jodío. </p> <img src="http://www.titeladefrango.com/wp-content/uploads/2013/05/genius-meme.png" alt="Smiley face" width="250"> ',
        t4: 'Es un Nombre personal (', t5: ') ¿como se escriben los nombres? Con la primera letra en MAYUSCULA </p> <img src="http://haciendomemes.com/wp-content/uploads/2012/10/internet-meme1350435978.jpg" alt="Smiley face" width="250">',
        t6: 'El valor que me das en incorrecto (', t7:') nose de donde te sacas esas cosas'
    }
}
/* ---------Fin BD ---------*/
/* ---------Codigo ---------*/
window.addEventListener('load', function() {
    var results = document.getElementById('result');
    var searchBtn = document.getElementById('gameBtn');
    searchBtn.addEventListener('click', function() {

        var selecciona = document.getElementById('optionYou');
        var usuarioEscoge = selecciona.value;
        /* ---------El Pc Elije ---------*/
        var computadorEscoge = Math.random();
        if (computadorEscoge <=0.2){computadorEscoge = "piedra";}
        else if(computadorEscoge > 0.21 && computadorEscoge <= 0.4){computadorEscoge = "papel";}
        else if(computadorEscoge > 0.41 && computadorEscoge <= 0.6){computadorEscoge = "tijeras";}
        else if(computadorEscoge > 0.61 && computadorEscoge <= 0.8){computadorEscoge = "lagarto";}
        else{ computadorEscoge = "Spock";}
        /* ---------FIN El Pc Elije ---------*/

        function result() {
            function borrar() {
                var thinkPcHTML = '';
                var resultsHTML = '';
                msjPC.innerHTML = thinkPcHTML;
                results.innerHTML = resultsHTML;
            }
            var thinkPcHTML = '';
            var resultsHTML = '';
            if ( usuarioEscoge === "piedra" || usuarioEscoge === "papel" || usuarioEscoge === "tijeras" || usuarioEscoge === "lagarto" || usuarioEscoge === "Spock" ) {
                borrar();
                resultsHTML += '<p> Tú escojes: <b style="Color:green"\
                                ;>' + usuarioEscoge + '</b> y yo escojo:\
                                <b style="Color:red";>' + computadorEscoge + ' \
                                </b><br/>' + (comparar(usuarioEscoge,computadorEscoge)) + '</p>';
                results.innerHTML = resultsHTML;
            }
            else if (usuarioEscoge === "tijera"){
                        borrar(resultsHTML,thinkPcHTML);
                        thinkPcHTML += '<p>' + msj.msjThk.t1 + usuarioEscoge + msj.msjThk.t2 + '</p>';
                        msjPC.innerHTML = thinkPcHTML;
                        return  result(usuarioEscoge="tijeras");
                }
            else if (usuarioEscoge === "tigera" || usuarioEscoge === "tigeras" ){
                borrar();
                thinkPcHTML += '<p>' + usuarioEscoge + msj.msjThk.t3;
                return (msjPC.innerHTML = thinkPcHTML);
            }
            else if (usuarioEscoge === "spock"){
                borrar();
                thinkPcHTML += '<p>' + msj.msjThk.t4 + usuarioEscoge + msj.msjThk.t5;
                return (msjPC.innerHTML = thinkPcHTML);
            }
            else {
                borrar();
                thinkPcHTML += '<p>' + msj.msjThk.t6 + usuarioEscoge + msj.msjThk.t7 + '</p>';
                return (msjPC.innerHTML = thinkPcHTML);
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
                if (eleccion1 === "piedra"){
                    if (eleccion2 === "tijeras"){return (msj.juego.t1+randomWin);}
                    else if (eleccion2 === "papel"){return (msj.juego.t2+randomLost);}
                    else if (eleccion2 === "lagarto"){return (msj.juego.t3+randomLost);}
                    else{return (msj.juego.t4+randomWin);}
                }
                else if (eleccion1 === "papel"){
                    if (eleccion2 === "lagarto"){return (msj.juego.t5+randomWin);}
                    else if (eleccion2 === "piedra"){return (msj.juego.t2+randomLost);}
                    else if (eleccion2 === "tijeras"){return (msj.juego.t6+randomWin);}
                    else{return (msj.juego.t7+randomLost);}
                }
                else if (eleccion1 === "tijeras"){
                    if (eleccion2 === "papel"){return (msj.juego.t6+randomLost);}
                    else if (eleccion2 === "lagarto"){return (msj.juego.t8+randomLost);}
                    else if (eleccion2 === "piedra"){return (msj.juego.t1+randomWin);}
                    else{return (msj.juego.t9 + randomWin);}
                }
                else if (eleccion1 === "lagarto"){
                    if (eleccion2 === "piedra"){return (msj.juego.t3+randomWin);}
                    else if (eleccion2 === "tijeras"){return (msj.juego.t8+randomWin);}
                    else if (eleccion2 === "papel"){return (msj.juego.t3+randomLost);}
                    else{return (msj.juego.t10+randomLost);}
                }
                else if (eleccion1 === "Spock"){
                    if (eleccion2 === "piedra"){return (msj.juego.t4+randomLost);}
                    else if (eleccion2 === "tijeras"){return (msj.juego.t9+randomLost);}
                    else if (eleccion2 === "papel"){return (msj.juego.t7+randomWin);}
                    else{return (msj.juego.t10+randomWin);}
                }
                /* ESTO ES CON SWITCH
                switch(eleccion1) {
                    case "piedra":
                        switch(eleccion2) {
                            case "tijeras":
                                return (msj.juego.t1+randomWin);
                            break;
                            case "papel":
                                return (msj.juego.t2+randomLost);
                            break;
                            case "lagarto":
                                return (msj.juego.t3+randomLost);
                            break;
                            default:
                                return (msj.juego.t4+randomWin);
                            break;
                        }
                    break;
                    case "papel":
                        switch(eleccion2) {
                            case "tijeras":
                                return (msj.juego.t1+randomWin);
                            break;
                            case "papel":
                                return (msj.juego.t2+randomLost);
                            break;
                            case "lagarto":
                                return (msj.juego.t3+randomLost);
                            break;
                            default:
                                return (msj.juego.t4+randomWin);
                            break;
                        }
                    break;
                    case "tijeras":
                        switch(eleccion2) {
                            case "tijeras":
                                return (msj.juego.t1+randomWin);
                            break;
                            case "papel":
                                return (msj.juego.t2+randomLost);
                            break;
                            case "lagarto":
                                return (msj.juego.t3+randomLost);
                            break;
                            default:
                                return (msj.juego.t4+randomWin);
                            break;
                        }
                    break;
                    case "lagarto":
                        switch(eleccion2) {
                            case "tijeras":
                                return (msj.juego.t1+randomWin);
                            break;
                            case "papel":
                                return (msj.juego.t2+randomLost);
                            break;
                            case "lagarto":
                                return (msj.juego.t3+randomLost);
                            break;
                            default:
                                return (msj.juego.t4+randomWin);
                            break;
                        }
                    break;
                    case "Spock":
                        switch(eleccion2) {
                            case "tijeras":
                                return (msj.juego.t1+randomWin);
                            break;
                            case "papel":
                                return (msj.juego.t2+randomLost);
                            break;
                            case "lagarto":
                                return (msj.juego.t3+randomLost);
                            break;
                            default:
                                return (msj.juego.t4+randomWin);
                            break;
                        }
                    break;
                }
                */
            }
        }
        result();
    });
});