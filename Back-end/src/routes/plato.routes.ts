import express, { Request, Response } from 'express'
import Plato from '../models/Plato.js';
import { collections } from '../servicio/datos.servicio.js';
import { ObjectId } from 'mongodb';



export const platosRouter = express.Router();

platosRouter.use(express.json());

platosRouter.get("/", async (_req: Request, res: Response) => {
        try {
            
            
            const platos: Plato[] = (await collections.platos?.find({}).toArray()) as unknown as Plato[];
            res.status(200).send(platos);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    });

    platosRouter.get("/:id", async (req: Request, res: Response) => {
        const id = req?.params?.id;
    
        try {
            
            const query = { _id: new ObjectId(id) };
            const plato = (await collections.platos?.findOne(query)) as unknown as Plato;
    
            if (plato) {
                res.status(200).send(plato);
            }
        } catch (error) {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
        }
    });

    platosRouter.post("/", async (req: Request, res: Response) => {
        try {
            const newPlato = req.body as Plato;
            const result = await collections.platos?.insertOne(newPlato);
    
            result
                ? res.status(201).send(`Successfully created a new plato with id ${result.insertedId}`)
                : res.status(500).send("Failed to create a Plato");
        } catch (error:any) {
            console.error(error);
            res.status(400).send(error.message);
        }
    });