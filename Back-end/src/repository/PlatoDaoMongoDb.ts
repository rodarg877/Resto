
import Plato from '../models/Plato.js';
import { collections } from '../servicio/datos.servicio.js';
import jwt from 'jsonwebtoken';


export default class PlatoDaoMongoDb {
    static async findPlato(nombre: String) {
        try {
            const plato: Plato = (await collections.platos?.findOne({ nombre: nombre })) as unknown as Plato;

            if (plato) {
                return plato;
            } else {
                throw "Plato no encontrado"

            }
        } catch (err) {

            return err;

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
            console.log(plato);
            
            
            if(plato.hasOwnProperty('nombre')&&plato.hasOwnProperty('precio')){
                const result = await collections.platos?.insertOne(plato);
                console.log(result);
                if (result?.acknowledged) {
                    return "Plato Agregado"
                } else {
                    throw new Error("No se pudo agregar el plato")

                }
            }else{
                throw new Error("Campor requeridos incompletos")
            }
        } catch (err:any) {
            return err.message;
        }
    }
    static async agregarPlato(plato: Plato) {
        try {
            const result = await collections.platos?.insertOne(plato);
            if (result) {
                return result
            } else {
                throw "error al crear Plato"
            }
        } catch (error: any) {
            return error;
        }
    }

    // static async modificarPlato(nick:string, newPass:string){
    //     try{
    //         console.log(nick);
    //         console.log(newPass);

            
    //         const result = await collections.platos?.updateOne({nick:nick}, { $set: {pass:  newPass}})
    //         console.log(result);
            
    //         if(result?.modifiedCount){
    //             return "Cambio exitoso"
    //         } else {
    //             throw "Plato inexistente"
    //         }
    //     } catch(error:any){
    //         return error;
    //     }
    // }
    public static  modificarPlato(plato:Plato){

    }

    public static async eliminarPlato(nombre:string){
        try {
            const result = await collections.platos?.deleteOne({nombre:nombre})
            if(result){
                return "Eliminacion exitosa"
            } else {
                throw "No se pudo eliminar"
            }
        } catch (error: any) {
            return error;
        }
    }
}