import express from 'express'
import UsuarioController from '../controller/UsuarioController.js'


export const usuariosRouter = express.Router();

usuariosRouter.use(express.json());
usuariosRouter.get("/:nick?", UsuarioController.getUsuarios)


usuariosRouter.post("/login", UsuarioController.logIn)
usuariosRouter.post("/", UsuarioController.postUsuario)
usuariosRouter.put("/", UsuarioController.cambiarPassword)

