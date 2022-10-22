import Usuario from "../models/Usuario.js"
import UsuarioDaoMongoDb from "../repository/UsuarioDaoMongoDb.js"

export default class UsuarioService {

  static async obtenerUsuarios(nick: String) {
    return nick ? await UsuarioDaoMongoDb.findUsuario(nick) : UsuarioDaoMongoDb.findUsuarios()
  }
  static async loginUsuario( user: Usuario) {
    return await UsuarioDaoMongoDb.logUsuario( user)
  }
}