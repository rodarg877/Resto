
import Usuario from '../models/Usuario.js';
import { collections } from '../servicio/datos.servicio.js';
import jwt from 'jsonwebtoken';


export default class UsuarioDaoMongoDb {
    static async findUsuario(nick: String) {
        try {
            const usuario: Usuario = (await collections.usuarios?.findOne({ nick: nick })) as unknown as Usuario;
            if (usuario) {
                return true;
            } else {
                throw new Error( "usuario no encontrado")
            }
        } catch (err) {
            return false;
        }
    }
    static async getUsuariosXEmail(email: String) {
        try {
            const usuario: Usuario = (await collections.usuarios?.findOne({ email: email })) as unknown as Usuario;
            if (usuario) {
                return true;
            } else {
                throw new Error( "usuario no encontrado")
            }
        } catch (err) {
            return false;
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
    static async logUsuario(nick: string, pass: string) {
        try {
            const usuario = (await collections.usuarios?.findOne({nick: nick}));
            //const usuario: Usuario = new Usuario(usuario2?.nick, usuario2?.pass, usuario2?.email, usuario2?.direccion);
            //console.log(typeof usuario);
            
            if (usuario) {
                if (usuario.pass == pass) {
                    console.log(jwt.sign({ nick: usuario.nick }, 'secret'));
                    
                    return {token: jwt.sign({ nick: usuario.nick }, 'secret'), direccion:usuario.direccion} 
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
    static async agregarUsuario(nick:string,email:string,pass:string,direccion:string) {
       // console.log("UsuarioMongo:"+ nick,pass,email,direccion);
        
        try {
            const result = await collections.usuarios?.insertOne(new Usuario(nick,pass,email,direccion));
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
    static async verificarMail(email: String) {
        try {
            const usuario: Usuario = (await collections.usuarios?.findOne({ email: email })) as unknown as Usuario;
            if (email) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return err.message;
        }
    }
}