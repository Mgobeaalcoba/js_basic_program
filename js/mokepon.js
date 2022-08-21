let ataqueJugador
let ataqueEnemigo 

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua') 
    botonAgua.addEventListener('click', ataqueAgua)
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.addEventListener('click', ataquePlanta)

    //ataqueEnemigo = seleccionarAtaqueEnemigo()
}

function seleccionarMascotaJugador() {
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
    alert("El jugador ataca con: " + ataqueJugador)
    //ataqueEnemigo = seleccionarAtaqueEnemigo()
    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    alert("El jugador ataca con: " + ataqueJugador)
    //ataqueEnemigo = seleccionarAtaqueEnemigo()
    seleccionarAtaqueEnemigo()
}

function ataquePlanta() {
    ataqueJugador = 'PLANTA'
    alert("El jugador ataca con: " + ataqueJugador)
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
    alert("El enemigo ataca con: " + ataqueEnemigo)

    crearMensaje()
}

function crearMensaje() {
    let sectionMensajes = document.getElementById('Mensajes') // Creo variable con la sección donde quiero insertar mis parrafos

    let parrafo = document.createElement('p') // inserto un nuevo parrafo en mi HTML con el metodo createElement
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' , la mascota del enemigo atacó con ' + ataqueEnemigo + '. Resultado: ' // Creo los parrafos que quiero insertar

    sectionMensajes.appendChild(parrafo) // Inserto en la sección escogida primero el parrafo armado despues. 
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego) // Metodo de window para que el codigo JS se corra luego de que se cargué el HTML completo
// De esta forma puedo dejar el script en el head (buena practica) y permitir que los botones funcionen sin pasar el scrip al final del
// body html. Window representa al nagedor y addEventListener es el metodo por el cual le solicito hacer algo luego de que suceda tal
// accion. En este ejemplo esa acción es el load o carga completa del HTML. 