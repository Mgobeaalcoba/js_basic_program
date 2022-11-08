const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('Reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

//let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
//const inputHipodoge = document.getElementById('Hipodoge')
//const inputCapipeyo = document.getElementById('Capipeyo')
//const inputRatigueya = document.getElementById('Ratigueya')
//const inputLangostelvis = document.getElementById('Langostelvis')
//const inputTucapalma = document.getElementById('Tucapalma')
//const inputPydos = document.getElementById('Pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador') // Manipulando el DOM

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById('resultado') // Creo variable con la sección donde quiero insertar mis parrafos
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

//let sectionReiniciar = document.getElementById('Reiniciar')

//let sectionMensajes = document.getElementById('resultado')
//let botonFuego = document.getElementById('boton-fuego')
//let botonAgua = document.getElementById('boton-agua')
//let botonPlanta = document.getElementById('boton-planta')

let mokepones = [] // Armo un array vacio para guardar luego los mokepones
let ataqueJugador
let ataqueEnemigo 
let opcionDeMokepones
let inputHipodoge 
let inputCapipeyo 
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma 
let inputPydos 
let resultado
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonPlanta
let botones = []
let ataquesJugadores = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new Mokepon('Hipodoge', './assets/Fuecoco.png', 5)
let Capipeyo = new Mokepon('Capipeyo','./assets/Gible-Pokemon-PNG-HD-Quality.png', 5)
let Ratigueya = new Mokepon('Ratigueya', './assets/Wurmple.png', 5)
let Langostelvis = new Mokepon('Langostelvis', './assets/Cascoon_HOME.png', 5)
let Tucapalma = new Mokepon ('Tucapalma','./assets/Quaxly.png', 5)
let Pydos = new Mokepon('Pydos', './assets/Sprigatito.png', 5)

//console.log(Tucapalma)

//console.log(mokepones)
Hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌿', id: 'boton-planta'}
)

Capipeyo.ataques.push(
    { nombre: '🌿', id: 'boton-planta' },
    { nombre: '🌿', id: 'boton-planta' },
    { nombre: '🌿', id: 'boton-planta'},
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
)

Ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌿', id: 'boton-planta'}
)

Langostelvis.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌿', id: 'boton-planta'}
)


Tucapalma.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌿', id: 'boton-planta' },
    { nombre: '🌿', id: 'boton-planta'},
    { nombre: '💧', id: 'boton-agua' }
)


Pydos.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌿', id: 'boton-planta' },
    { nombre: '🌿', id: 'boton-planta'}
)

mokepones.push(Hipodoge,Capipeyo,Ratigueya,Langostelvis,Tucapalma,Pydos) //metodo para "empujar" mis mokepones al array

//console.log(Hipodoge.ataques)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        //console.log(mokepon.nombre)
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} /> 
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>Hipodoge</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `

        // Para evitar el error Uncaught TypeError: Cannot read properties of null (reading ‘checked’) at HTMLButtonElement.seleccionarMascotaJugador
        // En la parte del id del input tipo radio, se debe dejar un espacio entre el corchete “}” y la barra de cierre “/” <input type=“radio” name=“mascota” id=${Mokepon.nombre} />

        contenedorTarjetas.innerHTML += opcionDeMokepones // con el mas adelante del igual me aseguro que en el HTML se inserten todos los mokepones que tengo. 

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipeyo = document.getElementById('Capipeyo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucapalma = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')

        })

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'    
    if (inputHipodoge.checked) {
        //alert('Seleccionaste a Hipodoge')
        spanMascotaJugador.innerHTML =  inputHipodoge.id// Manipulando el DOM
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipeyo.checked) {
        //alert('Seleccionaste a Capipeyo')
        spanMascotaJugador.innerHTML = inputCapipeyo.id
        mascotaJugador = inputCapipeyo.id
    } else if (inputRatigueya.checked) {
        //alert('Seleccionaste a Ratigueya')
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked) {
        //alert('Seleccionaste a Langostelvis')
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputTucapalma.checked) {
        //alert('Seleccionaste a Tucapalma')
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked) {
        //alert('Seleccionaste a Pydos')
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert('No has seleccionado ninguna mascota... Hazlo')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }

    }
    //console.log(ataques)
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua') 
    botonPlanta = document.getElementById('boton-planta')

    botones  = document.querySelectorAll('.BAtaque')

    //console.log(botones)

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥 ') {
                ataquesJugadores.push('FUEGO')
                console.log(ataquesJugadores)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '💧 ') {
                ataquesJugadores.push('AGUA')
                console.log(ataquesJugadores)
                boton.style.background = '#112f58'
            } else {
                ataquesJugadores.push('PLANTA')
                console.log(ataquesJugadores)
                boton.style.background = '#112f58' 
            }
            //console.log(e)
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    //ataqueEnemigo = seleccionarAtaqueEnemigo()
    secuenciaAtaque()
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

function combate(ataque1, ataque2) {
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
        sectionReiniciar.style.display = 'block'
        //let sectionMensajes = document.getElementById('Mensajes')
        //sectionMensajes.style.display = 'flex'
    }
}

function crearMensaje(final) {
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
    //let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal
    //sectionMensajes.appendChild(parrafo)
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonPlanta.disabled = true
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego) // Metodo de window para que el codigo JS se corra luego de que se cargué el HTML completo
// De esta forma puedo dejar el script en el head (buena practica) y permitir que los botones funcionen sin pasar el scrip al final del
// body html. Window representa al nagedor y addEventListener es el metodo por el cual le solicito hacer algo luego de que suceda tal
// accion. En este ejemplo esa acción es el load o carga completa del HTML. 