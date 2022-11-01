var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ObjectId } from 'mongodb';
import { collections } from '../servicio/datos.servicio.js';
export default class PedidoDaoMongoDb {
    static findPedido(nick) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = (yield ((_a = collections.usuarios) === null || _a === void 0 ? void 0 : _a.findOne({ nick: nick })));
                if (user) {
                    if (user.getTipo() == 'N') {
                        const pedidos = (yield ((_b = collections.pedidos) === null || _b === void 0 ? void 0 : _b.find({ user: nick }).toArray()));
                        return pedidos;
                    }
                    else if (user.getTipo() == 'A') {
                        const pedidos = (yield ((_c = collections.pedidos) === null || _c === void 0 ? void 0 : _c.find({ estado: "P" }).toArray()));
                        return pedidos;
                    }
                }
                else {
                    throw new Error("usuario no encontrado");
                }
            }
            catch (err) {
                return err.message;
            }
        });
    }
    static crearPedido(pedido) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            console.log(pedido);
            try {
                if (pedido.hasOwnProperty('platos') && pedido.hasOwnProperty('direccion') && pedido.hasOwnProperty('user')) {
                    const result = yield ((_a = collections.pedidos) === null || _a === void 0 ? void 0 : _a.insertOne(pedido));
                    if (result === null || result === void 0 ? void 0 : result.acknowledged) {
                        return "Pedido Agregado";
                    }
                    else {
                        throw new Error("No se pudo agregar el Pedido");
                    }
                }
                else {
                    throw new Error("Campos requeridos incompletos");
                }
            }
            catch (err) {
                return err.message;
            }
        });
    }
    static modificarPedido(id, pedido) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ((_a = collections.pedidos) === null || _a === void 0 ? void 0 : _a.updateOne({ id: new ObjectId(id) }, { $set: pedido }));
                if (result === null || result === void 0 ? void 0 : result.modifiedCount) {
                    return "Cambio exitoso";
                }
                else {
                    throw new Error("Pedido inexistente");
                }
            }
            catch (error) {
                error.message;
            }
        });
    }
}
