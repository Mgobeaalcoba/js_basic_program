// Importamos Express desde la carpeta node_modules
const express = require('express')
const cors = require("cors")

// Creamos la aplicación de Express
const app = express()

app.use(cors()) // Desabilito posibles errores relacionados con post
app.use(express.json()) // Habilito el uso de json en mis intercambios

// Escojemos un puerto por el que el servidor web escuchará
const port = 3000

// Lista de jugadores
const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }

    asignarMokepon (mokepon) { // Creo un metodo para la clase Jugador
        this.mokepon = mokepon
    }

    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques) {
        this.ataques = ataques
    }
}

class Mokepon {
    constructor(nombre) {
        this.nombre = nombre
    }
}

// Página para visualizar el mensaje "¡Hola Express!" // Este es nuestro primer endpoint!!!
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}` // La sintaxis del random corresponde a un template string para manejar el id como texto. 

    const jugador = new Jugador(id) // Creo un objeto jugador

    jugadores.push(jugador) // empujo el jugador a mi lista

    //Agrego una cabecera que indica que tipo de información acepto
    res.setHeader("Access-Control-Allow-Origin", "*") // El asterisco autoriza a cualquier origen: Es inseguro. 

    res.send(id)
})

app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || "" // Requerimiento de la API // Traigo el id del jugador que llama el servidor y sino viene el mismo un string vacio
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end() // respuesta de la API
}) // los : en node implican que luego va una variable. 

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
  
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  
    if (jugadorIndex >= 0) {
      jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)
  
    res.send({
        enemigos
    })
  })

app.post("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  
    if (jugadorIndex >= 0) {
      jugadores[jugadorIndex].asignarAtaques(ataques)
    }
  
    res.end()
  })

app.get("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
      ataques: jugador.ataques || []
    })
  })

// Activamos el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`¡Servidor listo!`)
})

// Tiene que estar el servidor encendido para que cargué. // Si queremos cortar los servidores de node todas juntos se puede usar 
// killall node en la consola