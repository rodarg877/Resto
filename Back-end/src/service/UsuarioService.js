var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UsuarioDaoMongoDb from "../repository/UsuarioDaoMongoDb.js";
import { Email } from "../shared/Email.js";
import jwt from 'jsonwebtoken';
export default class UsuarioService {
    static obtenerUsuarios(nick) {
        return __awaiter(this, void 0, void 0, function* () {
            return nick ? yield UsuarioDaoMongoDb.findUsuario(nick) : UsuarioDaoMongoDb.findUsuarios();
        });
    }
    static getUsuariosXEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UsuarioDaoMongoDb.getUsuariosXEmail(email);
        });
    }
    static loginUsuario(nick, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UsuarioDaoMongoDb.logUsuario(nick, pass);
        });
    }
    static agregarUsuario(nick, email, pass, direccion) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("service" + nick, pass, email, direccion);
            return yield UsuarioDaoMongoDb.agregarUsuario(nick, email, pass, direccion);
        });
    }
    static cambiarPassword(nick, newPass) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UsuarioDaoMongoDb.cambiarPassword(nick, newPass);
        });
    }
    static enviarMail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield UsuarioDaoMongoDb.verificarMail(email)) {
                Email.enviar(email, "Recuperar Contraseña", `http://localhost:5173/cambiarPass`);
            }
        });
    }
    static isAdmin(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenDecodificado = jwt.verify(token, 'secret', (error, payload) => {
                console.log(payload);
                return payload;
            });
            return tokenDecodificado.isAdmin;
        });
    }
}
