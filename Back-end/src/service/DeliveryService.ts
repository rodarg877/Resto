import DeliveryDaoMongoDb from "../repository/DeliveryDaoMongoDb.js";
export default class DeliveryService {

    static async actualizarPrecio(precio:string){
        const precioNumber = Number(precio);
        return await DeliveryDaoMongoDb.actualizarPrecio(precioNumber);
    }

    static async getPrecioDelivery(){
        return await DeliveryDaoMongoDb.getPrecioDelivery();
    }

}
