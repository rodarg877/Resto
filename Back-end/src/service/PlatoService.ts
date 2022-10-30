import Plato from "../models/Plato.js"
import PlatoDaoMongoDb from "../repository/PlatoDaoMongoDb.js"

export default class UsuarioService {

  static async obtenerPlato(nombre: String) {
    return nombre ? await PlatoDaoMongoDb.findPlato(nombre) : PlatoDaoMongoDb.findPlatos()
  }
  static async crearPlato(nombre:string,descripcion:string,img:string,precio:string,tipoPlato:string) {
    return await PlatoDaoMongoDb.crearPlato(nombre,descripcion,img,precio,tipoPlato)
  }
  static async modificarPlato(nombre:string, plato: Plato) {
    return await PlatoDaoMongoDb.modificarPlato(nombre,plato)
  }
  static async eliminarPlato(nombre:string){
    return await PlatoDaoMongoDb.eliminarPlato(nombre)
    
  }
}