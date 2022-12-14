var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PlatoService from '../service/PlatoService.js';
export default class UsuarioController {
    static getPlatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            res.json(yield PlatoService.obtenerPlato(nombre));
        });
    }
    static crearPlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, descripcion, imagen, precio, tipoPlato } = req.body;
            console.log("Nombre" + nombre + " imagen: " + imagen);
            res.json(yield PlatoService.crearPlato(nombre, descripcion, imagen, precio, tipoPlato));
        });
    }
    static modificarPlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const plato = req.body;
            res.json(yield PlatoService.modificarPlato(nombre, plato));
        });
    }
    static eliminarPlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            res.json(yield PlatoService.eliminarPlato(nombre));
        });
    }
}
