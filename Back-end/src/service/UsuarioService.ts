import { JsonWebTokenError } from "jsonwebtoken"
import Usuario from "../models/Usuario.js"
import UsuarioDaoMongoDb from "../repository/UsuarioDaoMongoDb.js"
import { Email } from "../shared/Email.js"
import jwt from 'jsonwebtoken';


export default class UsuarioService {

  static async obtenerUsuarios(nick: String) {
    return nick ? await UsuarioDaoMongoDb.findUsuario(nick) : UsuarioDaoMongoDb.findUsuarios()
  }
  static async getUsuariosXEmail(email: String) {
    return await UsuarioDaoMongoDb.getUsuariosXEmail(email)
  }
  static async loginUsuario(nick: string, pass: string) {
    return await UsuarioDaoMongoDb.logUsuario(nick, pass)
  }
  static async agregarUsuario(nick: string, email: string, pass: string, direccion: string) {
    console.log("service" + nick, pass, email, direccion);
    return await UsuarioDaoMongoDb.agregarUsuario(nick, email, pass, direccion)
  }
  static async cambiarPassword(email: string, newPass: string) {
    return await UsuarioDaoMongoDb.cambiarPassword(email, newPass)

  }
  static async enviarMail(email: string) {

    if (await UsuarioDaoMongoDb.verificarMail(email)) {
      Email.enviar(email, "Recuperar Contraseña", `http://127.0.0.1:5173/confirmarCambio`)
    }

  }

  static async isAdmin(token: string) { //acá vamos a decodificar el token.
    const payload: any = jwt.verify(token, 'secret');

    return payload.isAdmin;
  }
  static async modificarUsuario(usuario: any) {
   return await UsuarioDaoMongoDb.modificarUsuario(usuario)
  
  }
}