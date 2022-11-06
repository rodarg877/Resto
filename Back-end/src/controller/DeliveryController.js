var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DeliveryService from "../service/DeliveryService.js";
export default class DeliveryController {
    static actualizarPrecio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { precio } = req.body;
            console.log("El precio que llega es: " + precio);
            res.json(yield DeliveryService.actualizarPrecio(precio));
        });
    }
    static getPrecioDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield DeliveryService.getPrecioDelivery());
        });
    }
}
