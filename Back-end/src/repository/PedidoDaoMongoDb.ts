import { ObjectId } from 'mongodb';
import Pedido from '../models/Pedido.js';
import Usuario from '../models/Usuario.js';
import { collections } from '../servicio/datos.servicio.js';


export default class PedidoDaoMongoDb {


    static async findPedido(nick: String) {
        try {
            const user: Usuario = (await collections.usuarios?.findOne({ nick: nick })) as unknown as Usuario
            if (user) {
                if (user.getTipo() == 'N') {
                    const pedidos: Pedido[] = (await collections.pedidos?.find({ user: nick }).toArray()) as unknown as Pedido[];
                    return pedidos
                } else if (user.getTipo() == 'A') {
                    const pedidos: Pedido[] = (await collections.pedidos?.find({ estado: "P" }).toArray()) as unknown as Pedido[];
                    return pedidos
                }
            } else {
                throw new Error("usuario no encontrado")
            }
        } catch (err) {
            return err.message;
        }
    }


    static async crearPedido(pedido: Pedido) {
        try {
            if (pedido.hasOwnProperty('platos') && pedido.hasOwnProperty('direccion')&& pedido.hasOwnProperty('user')) {
                
                const result = await collections.pedidos?.insertOne( pedido);
                if (result?.acknowledged) {
                    return "Pedido Agregado"
                } else {
                    throw new Error("No se pudo agregar el Pedido")
                }
            } else {
                throw new Error("Campos requeridos incompletos")
            }
        } catch (err: any) {
            return err.message;
        }
    }


    public static async modificarPedido(id: string, pedido: Pedido) {
        try {
            const result = await collections.pedidos?.updateOne({ id: new ObjectId(id) }, { $set: pedido })
            if (result?.modifiedCount) {
                return "Cambio exitoso"
            } else {
                throw new Error("Pedido inexistente")
            }
        } catch (error: any) {
            error.message
        }
    }
}