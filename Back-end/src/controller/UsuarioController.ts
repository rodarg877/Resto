import express, { Request, Response } from 'express'
import Usuario from '../models/Usuario.js';
import UsuarioService from '../service/UsuarioService.js';

export default class UsuarioController {
   
   public static async getUsuarios(req: Request, res: Response) {
            const { nick } = req.params;
            res.json(await UsuarioService.obtenerUsuarios(nick))

        }
        public static async postUsuarios(req: Request, res: Response) {
            const user =req.body as unknown as Usuario
            res.json(await UsuarioService.loginUsuario(user))

        }
        public static async postUsuario(req: Request, res: Response) {
            const user =req.body as unknown as Usuario
            res.json(await UsuarioService.agregarUsuario(user))

        }
}
