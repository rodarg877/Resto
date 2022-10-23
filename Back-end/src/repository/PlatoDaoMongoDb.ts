
import Plato from '../models/Plato.js';
import { collections } from '../servicio/datos.servicio.js';


export default class PlatoDaoMongoDb {


    static async findPlato(nombre: String) {
        try {
            const plato: Plato = (await collections.platos?.findOne({ nombre: nombre })) as unknown as Plato;
            if (plato) {
                return plato;
            } else {
                throw new Error("Plato no encontrado")
            }
        } catch (err) {
            return err.message;
        }
    }


    static async findPlatos() {
        try {
            const platos: Plato[] = (await collections.platos?.find({}).toArray()) as unknown as Plato[];
            return platos;
        } catch (error) {
            return error.message;
        }
    }


    static async crearPlato(plato: Plato) {
        try {
            if (plato.hasOwnProperty('nombre') && plato.hasOwnProperty('precio')) {
                const result = await collections.platos?.insertOne(plato);
                console.log(result);
                if (result?.acknowledged) {
                    return "Plato Agregado"
                } else {
                    throw new Error("No se pudo agregar el plato")
                }
            } else {
                throw new Error("Campor requeridos incompletos")
            }
        } catch (err: any) {
            return err.message;
        }
    }


    public static async modificarPlato(nombre: string, plato: Plato) {
        try {
            const result = await collections.platos?.updateOne({ nombre: nombre }, { $set: plato })
            if (result?.modifiedCount) {
                return "Cambio exitoso"
            } else {
                throw new Error("Plato inexistente")
            }
        } catch (error: any) {
            error.message
        }
    }


    public static async eliminarPlato(nombre: string) {
        try {
            const result = await collections.platos?.deleteOne({ nombre: nombre })
            if (result) {
                return "Eliminacion exitosa"
            } else {
                throw new Error("No se pudo eliminar")
            }
        } catch (error: any) {
            return error.message;
        }
    }
}