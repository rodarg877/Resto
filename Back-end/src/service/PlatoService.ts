import Plato from "../models/Plato.js"
import PlatoDaoMongoDb from "../repository/PlatoDaoMongoDb.js"

export default class UsuarioService {

  static async obtenerPlato(nombre: String) {
    return nombre ? await PlatoDaoMongoDb.findPlato(nombre) : PlatoDaoMongoDb.findPlatos()
  }
  static async crearPlato(plato: Plato) {
    return await PlatoDaoMongoDb.crearPlato(plato)
  }
  static async modificarPlato(plato: Plato) {
    return await PlatoDaoMongoDb.modificarPlato(plato)
  }
  static async eliminarPlato(nombre:string){
    return await PlatoDaoMongoDb.eliminarPlato(nombre)
    
  }
}