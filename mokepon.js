const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('Reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador') // Manipulando el DOM
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensajes = document.getElementById('resultado') // Creo variable con la sección donde quiero insertar mis parrafos
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

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
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonPlanta
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataquesJugadores = []
let ataquesEnemigos = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png' // importante para que salga bien que el archivo JS esté a la misma altura que la carpeta assets

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) { // Cuando defino valores en el constructor son posibles valores por defecto.
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let Hipodoge = new Mokepon('Hipodoge', './assets/Fuecoco.png', 5, './assets/Fuecoco.png')
let Capipeyo = new Mokepon('Capipeyo','./assets/Gible-Pokemon-PNG-HD-Quality.png', 5, './assets/Gible-Pokemon-PNG-HD-Quality.png')
let Ratigueya = new Mokepon('Ratigueya', './assets/Wurmple.png', 5, './assets/Wurmple.png')
let Langostelvis = new Mokepon('Langostelvis', './assets/Cascoon_HOME.png', 5, './assets/Cascoon_HOME.png')
let Tucapalma = new Mokepon ('Tucapalma','./assets/Quaxly.png', 5, './assets/Quaxly.png')
let Pydos = new Mokepon('Pydos', './assets/Sprigatito.png', 5, './assets/Sprigatito.png')

let HipodogeEnemigo = new Mokepon('Hipodoge', './assets/Fuecoco.png', 5, './assets/Fuecoco.png', 80, 120)
let CapipeyoEnemigo = new Mokepon('Capipeyo','./assets/Gible-Pokemon-PNG-HD-Quality.png', 5, './assets/Gible-Pokemon-PNG-HD-Quality.png', 150, 95)
let RatigueyaEnemigo = new Mokepon('Ratigueya', './assets/Wurmple.png', 5, './assets/Wurmple.png', 200, 190)


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

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} /> 
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
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
    //sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'    


    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML =  inputHipodoge.id// Manipulando el DOM
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipeyo.checked) {
        spanMascotaJugador.innerHTML = inputCapipeyo.id
        mascotaJugador = inputCapipeyo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert('No has seleccionado ninguna mascota... Hazlo')
    }

    extraerAtaques(mascotaJugador)

    sectionVerMapa.style.display = 'flex'

    iniciarMapa()

    pintarCanvas();

    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }

    }
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
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥 ') {
                ataquesJugadores.push('FUEGO')
                console.log(ataquesJugadores)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '💧 ') {
                ataquesJugadores.push('AGUA')
                console.log(ataquesJugadores)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataquesJugadores.push('PLANTA')
                console.log(ataquesJugadores)
                boton.style.background = '#112f58' 
                boton.disabled = true
            }
            seleccionarAtaqueEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    if (ataquesMokeponEnemigo[ataqueAleatorio].nombre === "🔥") {
        ataquesEnemigos.push('FUEGO')
    } else if (ataquesMokeponEnemigo[ataqueAleatorio].nombre === "💧") {
        ataquesEnemigos.push('AGUA')
    }else {
        ataquesEnemigos.push('PLANTA')
    }
    console.log(ataquesEnemigos)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataquesJugadores.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataquesJugadores[jugador]
    indexAtaqueEnemigo = ataquesEnemigos[enemigo]
}

function combate() {
    for (let index = 0; index < ataquesJugadores.length; index++) {
        if(ataquesJugadores[index] === ataquesEnemigos[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if (ataquesJugadores[index] === 'FUEGO' && ataquesEnemigos[index] === 'PLANTA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataquesJugadores[index] ==='AGUA' && ataquesEnemigos[index] === 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataquesJugadores[index] === 'PLANTA' && ataquesEnemigos[index] === 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(final) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego() {
    location.reload()
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(mapaBackground,0,0, mapa.width, mapa.height)
    mascotaJugadorObjeto.pintarMokepon()
    HipodogeEnemigo.pintarMokepon()
    CapipeyoEnemigo.pintarMokepon()
    RatigueyaEnemigo.pintarMokepon()

}

function moverDerecha() {
    
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba() {
    
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo() {
    
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento() {
    
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mapa.width = 320
    mapa.height = 240
    mascotaJugadorObjeto = obtenerObjetoMascota()
    intervalo = setInterval(pintarCanvas, 50) // Funcion que debe ejecutar como primer parametro mas cada cuantos milisegundos

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }

    }
}

window.addEventListener('load', iniciarJuego) // Metodo de window para que el codigo JS se corra luego de que se cargué el HTML completo
// De esta forma puedo dejar el script en el head (buena practica) y permitir que los botones funcionen sin pasar el scrip al final del
// body html. Window representa al nagedor y addEventListener es el metodo por el cual le solicito hacer algo luego de que suceda tal
// accion. En este ejemplo esa acción es el load o carga completa del HTML. 