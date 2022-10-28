import express, { Request, Response } from 'express'
import Usuario from '../models/Usuario.js';
import UsuarioService from '../service/UsuarioService.js';

export default class UsuarioController {
   
   public static async getUsuarios(req: Request, res: Response) {
            const { nick } = req.params;
            res.json(await UsuarioService.obtenerUsuarios(nick))

        }
        public static async logIn(req: Request, res: Response) {
            const {nick, pass} =req.body
            res.json(await UsuarioService.loginUsuario(nick, pass));
            

        }
        public static async postUsuario(req: Request, res: Response) {
            const user =req.body as unknown as Usuario
            res.json(await UsuarioService.agregarUsuario(user))

        }
        public static async cambiarPassword(req: Request, res: Response){
            const {newPass} = req.body;
            const {nick} = req.body;
            console.log(req.body);
            
            res.json(await UsuarioService.cambiarPassword(nick, newPass))
        }
        public static async enviarMail(req: Request, res: Response){
            const {email} = req.body;
            
            res.json(await UsuarioService.enviarMail(email))
        }
}
