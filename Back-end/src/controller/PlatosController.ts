import express, { Request, Response } from 'express'
import Plato from '../models/Plato.js';
import PlatoService from '../service/PlatoService.js';

export default class UsuarioController {
   
   public static async getPlatos(req: Request, res: Response) {
            const { nombre } = req.params;
            res.json(await PlatoService.obtenerPlato(nombre))

        }
        public static async crearPlato(req: Request, res: Response) {
            const plato =req.body as unknown as Plato
            res.json(await PlatoService.crearPlato(plato))

        }
        public static async modificarPlato(req: Request, res: Response) {
            const plato =req.body as unknown as Plato
            res.json(await PlatoService.modificarPlato(plato))

        }
        public static async eliminarPlato(req: Request, res: Response){
            const {nombre} = req.params;
            
            res.json(await PlatoService.eliminarPlato(nombre))
        }
}