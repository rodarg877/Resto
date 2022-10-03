import express from 'express'
import Reserva from './models/Reserva.js';
import Mesa from './models/Mesa.js'

let reservas=[]
const res = new Reserva(new Mesa(4, 1), "T");
const res2 = new Reserva(new Mesa(4, 2), "T");
reservas.push(res)
reservas.push(res2)
const app = express()
app.use(express.json())
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`error en server: ${error.message}`))

app.get('/Reservas', async (req, res) => {
    res.json(await reservas);
})

app.get('/Reservas/:id', async (req, res) => {
    let id = Number(req.params.id);
    res.json(await reservas.filter(r=>r.nro==id)[0]);
})

app.put('/Reservas/:id',async (req, res) => {
    let mesa = req.body;
    const {id}=req.params;
    reservas.filter(r=>r.nro==id)[0].mesa=mesa;
    res.json(await reservas);
})