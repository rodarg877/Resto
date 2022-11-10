import express, { Request, Response } from 'express'
import Usuario from '../models/Usuario.js';
import UsuarioService from '../service/UsuarioService.js';

export default class UsuarioController {
   
   public static async getUsuarios(req: Request, res: Response) {
            const { nick } = req.params;
            res.json(await UsuarioService.obtenerUsuarios(nick))

        }
        public static async getUsuariosXEmail(req: Request, res: Response) {
            
            const { email } = req.params;

            res.json(await UsuarioService.getUsuariosXEmail(email))

        }
        public static async logIn(req: Request, res: Response) {
            const {nick, pass} =req.body
            res.json(await UsuarioService.loginUsuario(nick, pass));
            

        }
        public static async postUsuario(req: Request, res: Response) {
            

            const{nick,email,pass,direccion} = req.body;
            res.json(await UsuarioService.agregarUsuario(nick,email,pass,direccion));

        }
        public static async cambiarPassword(req: Request, res: Response){
            const {pass,email} = req.body;

            console.log(req.body);
            
            res.json(await UsuarioService.cambiarPassword(email, pass))
        }
        public static async enviarMail(req: Request, res: Response){
            const {email} = req.body;       
            res.json(await UsuarioService.enviarMail(email))
        }

        public static async isAdmin(req: Request, res: Response){
            const{token} = req.params;
            res.send(await UsuarioService.isAdmin(token));
        }
        public static async modificarUsuario(req: Request, res: Response){
            const usuario=req.body
            res.send(await UsuarioService.modificarUsuario(usuario))
        }

}
