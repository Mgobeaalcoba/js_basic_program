// Importamos Express desde la carpeta node_modules
const express = require('express')

// Creamos la aplicación de Express
const app = express()

// Escojemos un puerto por el que el servidor web escuchará
const port = 3000

// Lista de jugadores
const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
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

// Activamos el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`¡Servidor listo!`)
})

// Tiene que estar el servidor encendido para que cargué. // Si queremos cortar los servidores de node todas juntos se puede usar 
// killall node en la consola