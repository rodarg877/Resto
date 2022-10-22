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
                    throw "Plato no encontrado";
                }
            }
            catch (err) {
                return err;
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
    static crearPlato(plato) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(plato);
                if (plato.hasOwnProperty('nombre') && plato.hasOwnProperty('precio')) {
                    const result = yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.insertOne(plato));
                    console.log(result);
                    if (result === null || result === void 0 ? void 0 : result.acknowledged) {
                        return "Plato Agregado";
                    }
                    else {
                        throw "No se pudo agregar el plato";
                    }
                }
                else {
                    console.log("Giles");
                    throw new Error("Campor requeridos incompletos");
                }
            }
            catch (err) {
                return err.message;
            }
        });
    }
    static agregarPlato(plato) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.insertOne(plato));
                if (result) {
                    return result;
                }
                else {
                    throw "error al crear Plato";
                }
            }
            catch (error) {
                return error;
            }
        });
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
    static modificarPlato(plato) {
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
                    throw "No se pudo eliminar";
                }
            }
            catch (error) {
                return error;
            }
        });
    }
}