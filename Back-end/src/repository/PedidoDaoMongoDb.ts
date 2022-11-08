import { ObjectId } from 'mongodb';
import Pedido from '../models/Pedido.js';
import Usuario from '../models/Usuario.js';
import { collections } from '../servicio/datos.servicio.js';


export default class PedidoDaoMongoDb {


    static async findPedido(nick: String) {
        try {
            const user: any = (await collections.usuarios?.findOne({ nick: nick }));
            
            if (user) {
                if (user.tipo == 'N') {
                    const pedidos: Pedido[] = (await collections.pedidos?.find({ user: nick }).toArray()) as unknown as Pedido[];
                    return pedidos
                } else if (user.tipo == 'A') {
                    const pedidos: Pedido[] = (await collections.pedidos?.find({}).toArray()) as unknown as Pedido[];
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
        console.log(pedido);
        
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
        let pedidoModicado:any = pedido; //ver de hacerlo sin el any        
        try {
            const result = await collections.pedidos?.updateOne({ _id: new ObjectId(id) }, { $set:{estado:pedidoModicado.estado}}) 
            
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