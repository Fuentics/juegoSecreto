let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value); //obtiene el valor del Id 'valorDeUsuario' lo pasa a entero y lo guarda en la variable "numeroDeUsuario"
    
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos === 1 ) ? 'intento' : 'intentos'}!`); //uso del operador ternario, si intento es igual a 1 ? coloca intento sino intentos. 
        document.getElementById('reiniciar').removeAttribute('disabled');   //remover el atributo de la etiqueta que tiene como id 'reiniciar'
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número secreto es MENOR');
    } else {
        asignarTextoElemento('p','El número secreto es MAYOR');
    }
    intentos++;
    limpiarInput();
    return;
}
function limpiarInput(){
    document.querySelector('#valorDeUsuario').value = '';       //para seleccionar la etiqueta de HTML  que contiene el id 'valorDeUsuario' y para limpiarlo le doy
    /* let valorInput = document.querySelector("#valorDeUsuario");
    valorInput.value=''; */
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números  
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //Recursividad, la función se llama a sí misma
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }    
    }

    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    // Limpiar el input
    limpiarInput();
    // Indicar mensaje de inicio, de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales(); 