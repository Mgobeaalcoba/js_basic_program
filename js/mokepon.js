let ataqueJugador
let ataqueEnemigo 
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua') 
    botonAgua.addEventListener('click', ataqueAgua)
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.addEventListener('click', ataquePlanta)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipeyo = document.getElementById('Capipeyo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    
    let spanMascotaJugador = document.getElementById('mascota-jugador') // Manipulando el DOM
    
    if (inputHipodoge.checked) {
        //alert('Seleccionaste a Hipodoge')
        spanMascotaJugador.innerHTML = 'Hipodoge' // Manipulando el DOM
    } else if (inputCapipeyo.checked) {
        //alert('Seleccionaste a Capipeyo')
        spanMascotaJugador.innerHTML = 'Capipeyo'
    } else if (inputRatigueya.checked) {
        //alert('Seleccionaste a Ratigueya')
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked) {
        //alert('Seleccionaste a Langostelvis')
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked) {
        //alert('Seleccionaste a Tucapalma')
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        //alert('Seleccionaste a Pydos')
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert('No has seleccionado ninguna mascota... Hazlo')
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipeyo'
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spanMascotaEnemigo.innerHTML ='Pydos'
    }

    //ataqueEnemigo = seleccionarAtaqueEnemigo()
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    //alert("El jugador ataca con: " + ataqueJugador)
    //ataqueEnemigo = seleccionarAtaqueEnemigo()
    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    //alert("El jugador ataca con: " + ataqueJugador)
    //ataqueEnemigo = seleccionarAtaqueEnemigo()
    seleccionarAtaqueEnemigo()
}

function ataquePlanta() {
    ataqueJugador = 'PLANTA'
    //alert("El jugador ataca con: " + ataqueJugador)
    //ataqueEnemigo = seleccionarAtaqueEnemigo()
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    let numeroAtaque = aleatorio (1,3)
    if (numeroAtaque == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (numeroAtaque == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'PLANTA'
    }
    //alert("El enemigo ataca con: " + ataqueEnemigo)

    //while (vidasEnemigo > 0 || vidasJugador > 0) {
    combate(ataqueJugador, ataqueEnemigo)
    //crearMensaje()
    //}
}

function crearMensaje(final) {
    let sectionMensajes = document.getElementById('resultado') // Creo variable con la sección donde quiero insertar mis parrafos
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    //let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    //sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    //let parrafo = document.createElement('p') // inserto un nuevo parrafo en mi HTML con el metodo createElement
    //parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' , la mascota del enemigo atacó con ' + ataqueEnemigo + '. Resultado: ' + final // Creo los parrafos que quiero insertar

    //sectionMensajes.appendChild(parrafo) // Inserto en la sección escogida primero el parrafo armado despues. 
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    //let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal

    //sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua') 
    botonAgua.disabled = true
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.disabled = true
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate(ataque1, ataque2) {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")


    if (ataque1 == ataque2) {
        resultado = 'Empataron'
        crearMensaje(resultado)
    } else if ((ataque1 == 'FUEGO' && ataque2 == 'PLANTA') || (ataque1 == 'PLANTA' && ataque2 == 'AGUA') || (ataque1 == 'AGUA' && ataque2 == 'FUEGO')) {
        resultado = 'Ganaste'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        spanVidasJugador.innerHTML = vidasJugador
        crearMensaje(resultado)
    } else {
        resultado = 'Perdiste'
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje(resultado)
    }

    revisarVidas()
}

function revisarVidas() {
    //let resultado = 'GANAMOS'
    if (vidasEnemigo == 0) {
        crearMensajeFinal('Felicitaciones. Has ganado tu partida!!!')
    } else if (vidasJugador == 0) {
        //resultado = 'PERDIMOS'
        crearMensajeFinal('Has sido derrotado. Pero no te preocupes. Puedes volver a intentarlo nuevamente.')
    }

    if (vidasEnemigo == 0 || vidasJugador == 0) {
        let sectionReiniciar = document.getElementById('Reiniciar')
        sectionReiniciar.style.display = 'block'
        //let sectionMensajes = document.getElementById('Mensajes')
        //sectionMensajes.style.display = 'flex'
    }
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego) // Metodo de window para que el codigo JS se corra luego de que se cargué el HTML completo
// De esta forma puedo dejar el script en el head (buena practica) y permitir que los botones funcionen sin pasar el scrip al final del
// body html. Window representa al nagedor y addEventListener es el metodo por el cual le solicito hacer algo luego de que suceda tal
// accion. En este ejemplo esa acción es el load o carga completa del HTML. 