var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PedidoDaoMongoDb from "../repository/PedidoDaoMongoDb.js";
export default class PedidoService {
    static obtenerPedido(nick) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PedidoDaoMongoDb.findPedido(nick);
        });
    }
    static crearPedido(pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PedidoDaoMongoDb.crearPedido(pedido);
        });
    }
    static modificarPedido(id, pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PedidoDaoMongoDb.modificarPedido(id, pedido);
        });
    }
}
