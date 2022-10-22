import express, { Request, Response } from 'express'
import { collections } from '../servicio/datos.servicio.js';
import { ObjectId } from 'mongodb';
import Usuario from '../models/Usuario.js';
import Plato from '../models/Plato.js';
import Pedido from '../models/Pedido.js';
import UsuarioController from '../controller/UsuarioController.js'


export const usuariosRouter = express.Router();

usuariosRouter.use(express.json());
usuariosRouter.get("/:nick?", UsuarioController.getUsuarios)


usuariosRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const newUsuario = req.body as Usuario;
        const result = await collections.usuarios?.insertOne(newUsuario);

        result
            ? res.status(201).send(`Successfully created a new usuario with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a usuario");
    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});
usuariosRouter.put("/pedidos/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        console.log(req.body);
        
        const updatedUsuario: Plato[] = req.body as Plato[];
        const query = { nick:id };
      
        const result = await collections.usuarios?.updateOne(query, { $push: {pedidos:  new Pedido(updatedUsuario)} });

        result
            ? res.status(200).send(`Successfully updated Usuario with id ${id}`)
            : res.status(304).send(`Usuario with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

