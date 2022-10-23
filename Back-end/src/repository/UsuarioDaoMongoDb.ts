
import Usuario from '../models/Usuario.js';
import { collections } from '../servicio/datos.servicio.js';
import jwt from 'jsonwebtoken';


export default class UsuarioDaoMongoDb {
    static async findUsuario(nick: String) {
        try {
            const usuario: Usuario = (await collections.usuarios?.findOne({ nick: nick })) as unknown as Usuario;
            if (usuario) {
                return usuario;
            } else {
                throw new Error( "usuario no encontrado")
            }
        } catch (err) {
            return err.message;
        }
    }

    static async findUsuarios() {
        try {
            const usuarios: Usuario[] = (await collections.usuarios?.find({}).toArray()) as unknown as Usuario[];
            return usuarios;
        } catch (error) {
            return error.message;
        }
    }
    static async logUsuario(user: Usuario) {
        try {
            const usuario: Usuario = (await collections.usuarios?.findOne({ nick: user.getNick() })) as unknown as Usuario;

            if (usuario) {
                if (usuario.getPass() == user.getPass()) {
                    return jwt.sign({ nick: usuario.getNick() }, 'secret')
                } else {
                    throw new Error( "pass incorrecta")
                }
            } else {
                throw new Error( "usuario no encontrado")
            }
        } catch (err) {

            return err.message;

        }
    }
    static async agregarUsuario(user: Usuario) {
        try {
            const result = await collections.usuarios?.insertOne(user);
            if (result) {
                return result
            } else {
                throw new Error("error al crear usuario")
            }
        } catch (error: any) {
            return error.message;
        }
    }

    static async cambiarPassword(nick:string, newPass:string){
        try{
            const result = await collections.usuarios?.updateOne({nick:nick}, { $set: {pass:  newPass}})
            console.log(result);
            
            if(result?.modifiedCount){
                return "Cambio exitoso"
            } else {
                throw new Error("Usuario inexistente")
            }
        } catch(error:any){
            return error.message;
        }
    }
}