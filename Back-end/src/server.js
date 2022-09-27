import express from 'express'


const app = express()
app.use(express.json())
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`error en server: ${error.message}`))