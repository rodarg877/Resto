import Pedido from "../models/Pedido.js"
import PedidoDaoMongoDb from "../repository/PedidoDaoMongoDb.js"

export default class UsuarioService {

  static async obtenerPedido(nick: string) {
    return await PedidoDaoMongoDb.findPedido(nick) 
  }
  static async crearPedido(pedido: Pedido) {
    return await PedidoDaoMongoDb.crearPedido(pedido)
  }
  static async modificarPedido(id:string, pedido: Pedido) {
    return await PedidoDaoMongoDb.modificarPedido(id,pedido)
  }
}