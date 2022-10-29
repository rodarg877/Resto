var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UsuarioService from '../service/UsuarioService.js';
export default class UsuarioController {
    static getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nick } = req.params;
            res.json(yield UsuarioService.obtenerUsuarios(nick));
        });
    }
    static getUsuariosXEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            res.json(yield UsuarioService.getUsuariosXEmail(email));
        });
    }
    static logIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nick, pass } = req.body;
            res.json(yield UsuarioService.loginUsuario(nick, pass));
        });
    }
    static postUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nick, email, pass, direccion } = req.body;
            console.log("controller" + nick, pass, email, direccion);
            res.json(yield UsuarioService.agregarUsuario(nick, email, pass, direccion));
        });
    }
    static cambiarPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { newPass } = req.body;
            const { nick } = req.body;
            console.log(req.body);
            res.json(yield UsuarioService.cambiarPassword(nick, newPass));
        });
    }
    static enviarMail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            res.json(yield UsuarioService.enviarMail(email));
        });
    }
}
