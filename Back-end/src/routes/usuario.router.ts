import express from 'express'
import UsuarioController from '../controller/UsuarioController.js'


export const usuariosRouter = express.Router();

usuariosRouter.use(express.json());
usuariosRouter.get("/:nick?", UsuarioController.getUsuarios) //Para los get usualmente se usa pasar pro URIL = params
usuariosRouter.get("/:email?", UsuarioController.getUsuariosXEmail)

usuariosRouter.post("/login", UsuarioController.logIn) //para los post/put -> x body.
usuariosRouter.post("/", UsuarioController.postUsuario)
usuariosRouter.post("/cambiarPass", UsuarioController.enviarMail)
usuariosRouter.put("/", UsuarioController.cambiarPassword)

