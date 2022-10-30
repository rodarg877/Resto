var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Pedido from '../models/Pedido.js';
import PedidoService from '../service/PedidoService.js';
import Plato from '../models/Plato.js';
export default class PedidoController {
    static getPedidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nick } = req.params;
            res.json(yield PedidoService.obtenerPedido(nick));
        });
    }
    static crearPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { platos, user, direccion, precioDelivery } = req.body;
            let newPlatos = [];
            platos.forEach((p) => {
                const nuevoP = new Plato(p.nombre, p.descripcion, p.img, p.precio, p.tipoPedido);
                newPlatos.push(nuevoP);
            });
            const pedido = new Pedido(newPlatos, user, direccion, precioDelivery);
            console.log(pedido);
            res.json(yield PedidoService.crearPedido(pedido));
        });
    }
    static modificarPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido = req.body;
            res.json(yield PedidoService.modificarPedido(id, pedido));
        });
    }
}
