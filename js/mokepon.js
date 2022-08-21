alert("Hola Mundo")

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipeyo'
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spanMascotaEnemigo.innerHTML ='Pydos'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego) // Metodo de window para que el codigo JS se corra luego de que se cargué el HTML completo
// De esta forma puedo dejar el script en el head (buena practica) y permitir que los botones funcionen sin pasar el scrip al final del
// body html. Window representa al nagedor y addEventListener es el metodo por el cual le solicito hacer algo luego de que suceda tal
// accion. En este ejemplo esa acción es el load o carga completa del HTML. 