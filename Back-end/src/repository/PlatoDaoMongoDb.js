var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Plato from '../models/Plato.js';
import { collections } from '../servicio/datos.servicio.js';
export default class PlatoDaoMongoDb {
    static findPlato(nombre) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const plato = (yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.findOne({ nombre: nombre })));
                if (plato) {
                    return plato;
                }
                else {
                    throw new Error("Plato no encontrado");
                }
            }
            catch (err) {
                return err.message;
            }
        });
    }
    static findPlatos() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const platos = (yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.find({}).toArray()));
                return platos;
            }
            catch (error) {
                return error.message;
            }
        });
    }
    static crearPlato(nombre, descripcion, img, precio, tipoPlato) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newPrecio = Number(precio);
            try {
                const result = yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.insertOne(new Plato(nombre, descripcion, img, newPrecio, tipoPlato)));
                console.log(result);
                if (result === null || result === void 0 ? void 0 : result.acknowledged) {
                    return "Plato Agregado";
                }
                else {
                    throw new Error("No se pudo agregar el plato");
                }
            }
            catch (err) {
                return err.message;
            }
        });
    }
    static modificarPlato(nombre, plato) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.updateOne({ nombre: nombre }, { $set: plato }));
                if (result === null || result === void 0 ? void 0 : result.modifiedCount) {
                    return "Cambio exitoso";
                }
                else {
                    throw new Error("Plato inexistente");
                }
            }
            catch (error) {
                error.message;
            }
        });
    }
    static eliminarPlato(nombre) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.deleteOne({ nombre: nombre }));
                if (result) {
                    return "Eliminacion exitosa";
                }
                else {
                    throw new Error("No se pudo eliminar");
                }
            }
            catch (error) {
                return error.message;
            }
        });
    }
}
