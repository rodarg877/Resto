import express, { Request, Response } from 'express'
import UsuarioService from '../service/UsuarioService.js';

export default class UsuarioController {
   
   public static async getUsuarios(req: Request, res: Response) {
            const { nick } = req.params;
            res.json(await UsuarioService.obtenerUsuarios(nick))

        }
    
}
