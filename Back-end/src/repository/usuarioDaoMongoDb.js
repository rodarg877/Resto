var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { collections } from '../servicio/datos.servicio.js';
import jwt from 'jsonwebtoken';
export default class UsuarioDaoMongoDb {
    static findUsuario(nick) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = (yield ((_a = collections.usuarios) === null || _a === void 0 ? void 0 : _a.findOne({ nick: nick })));
                if (usuario) {
                    return usuario;
                }
                else {
                    throw "usuario no encontrado";
                }
            }
            catch (err) {
                return err;
            }
        });
    }
    static findUsuarios() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = (yield ((_a = collections.usuarios) === null || _a === void 0 ? void 0 : _a.find({}).toArray()));
                return usuarios;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    static logUsuario(nick, user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = (yield ((_a = collections.usuarios) === null || _a === void 0 ? void 0 : _a.findOne({ nick: nick })));
                if (usuario) {
                    if (usuario.getPass() == user.getPass()) {
                        return jwt.sign({ nick: usuario.getNick(), direccion: usuario.getDireccion(), email: usuario.getEmail() }, 'secret');
                    }
                    else {
                        throw "pass incorrecta";
                    }
                }
                else {
                    throw "usuario no encontrado";
                }
            }
            catch (err) {
                return err;
            }
        });
    }
}
