
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
                throw "usuario no encontrado"

            }
        } catch (err) {

            return err;

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
                    throw "pass incorrecta"
                }
            } else {
                throw "usuario no encontrado"
            }
        } catch (err) {

            return err;

        }
    }
    static async agregarUsuario(user: Usuario) {
        try {
            const result = await collections.usuarios?.insertOne(user);
            if (result) {
                return result
            } else {
                throw "error al crear usuario"
            }
        } catch (error: any) {
            return error;
        }
    }

    static async cambiarPassword(nick:string, newPass:string){
        try{
            console.log(nick);
            console.log(newPass);

            
            const result = await collections.usuarios?.updateOne({nick:nick}, { $set: {pass:  newPass}})
            console.log(result);
            
            if(result?.modifiedCount){
                return "Cambio exitoso"
            } else {
                throw "Usuario inexistente"
            }
        } catch(error:any){
            return error;
        }
    }
}